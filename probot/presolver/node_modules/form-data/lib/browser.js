/* eslint-env browser */
module.exports = typeof self == 'object' ? self.FormData : window.FormData;
