import token from './token';
import login from './login';
import { HOST } from '../constants';

const request = method => (url, data = {}) => {
  const authToken = token.get();
  return wx.request({
    url: /^http|\/\//.test(url) ? url : `${HOST}${url}`,
    method: method.toUpperCase(),
    data,
    header: {
      Authorization: authToken ? `Bearer ${authToken}` : '',
    },
  }).then(async ({ statusCode, data: res }) => {
    // token 过期自动登录
    if (statusCode === 401) {
      token.set(null);
      await login();
      const retryRes = await request(method)(url, data);
      return retryRes;
    }
    if (statusCode >= 400) {
      throw new Error();
    }
    return res;
  }).catch((error) => {
    // eslint-disable-next-line
    error.message = error.message || 'API 请求失败';
    throw error;
  });
};

export default {
  get: request('get'),
  post: request('post'),
  put: request('put'),
  delete: request('delete'),
};
