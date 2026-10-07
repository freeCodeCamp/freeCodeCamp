// @flow
/* eslint-disable no-param-reassign, import/prefer-default-export */
export function mapValues(object: Object, fn: Function): Object {
  return Object.keys(object).reduce((memo, key) => {
    memo[key] = fn(object[key]);
    return memo;
  }, {});
}
