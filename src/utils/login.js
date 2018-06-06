import { HOST } from '../constants';
import token from './token';

export default async function login() {
  const { code } = await wx.login();
  return wx.request({
    url: `${HOST}/login`,
    method: 'POST',
    data: { code },
  }).then(({ statusCode, data }) => {
    if (statusCode >= 400) {
      throw new Error(data.message || '登录失败');
    }
    token.set(data.token);
    return data.token;
  });
}
