/* eslint-disable import/prefer-default-export */

export const HOST = process.env.NODE_ENV === 'production'
  ? 'https://yumehub.samuraime.com'
  : 'http://localhost:3000';
