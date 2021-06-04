/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable import/unambiguous */
exports.isBrowser = function isBrowser() {
  return typeof window !== 'undefined';
};
