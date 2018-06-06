const utils = require('./utils');
const config = require('../config');
// var isProduction = process.env.NODE_ENV === 'production'
// for mp
const isProduction = true;

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction,
  }),
  transformToRequire: {
    video: 'src',
    source: 'src',
    img: 'src',
    image: 'xlink:href',
  },
};
