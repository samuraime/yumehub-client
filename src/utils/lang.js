const is = type => object => Object.prototype.toString.call(object) === `[object ${type}]`;

export const isRegExp = is('RegExp');

export const isString = is('String');

export const isFunction = is('Function');

export const isObject = is('Object');

export const isArray = is('Array');

export const isNumber = is('Number');

export const isDate = is('Date');

export const isError = is('Error');
