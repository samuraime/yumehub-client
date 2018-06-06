import { AUTH_TOKEN } from '../constants/storageKeys';

let cachedToken = null;

export default {
  get() {
    return cachedToken || wx.getStorageSync(AUTH_TOKEN);
  },
  set(value) {
    cachedToken = value;
    return wx.setStorageSync(AUTH_TOKEN, value);
  },
};
