/**
 * promisify 参数形如 { success, fail } 的方法
 */
const promisify = (fn, { success = 'success', fail = 'fail' } = {}) => (
  params => new Promise((resolve, reject) => {
    fn({
      ...params,
      [success](res) {
        resolve(res);
      },
      [fail](error) {
        reject(error);
      },
    });
  })
);

const ignores = [
  'createSelectorQuery',
];

Object.keys(wx).forEach((method) => {
  if (!ignores.includes(method) && !method.endsWith('Sync')) {
    Object.defineProperty(wx, method, {
      value: promisify(wx[method]),
    });
  }
});
