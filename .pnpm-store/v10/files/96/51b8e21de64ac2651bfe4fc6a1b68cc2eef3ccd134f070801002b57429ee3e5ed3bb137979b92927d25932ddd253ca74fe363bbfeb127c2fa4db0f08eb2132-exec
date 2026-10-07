// @flow
/* eslint-disable import/prefer-default-export */

type FindIndexFn = (any, number, any[]) => boolean;

export const findIndex = [].findIndex
  ? function findIndex(array: any[], fn: FindIndexFn): number {
      return array.findIndex(fn);
    }
  : function findIndex(array: any[], fn: FindIndexFn): number {
      for (let i = 0, l = array.length; i < l; i++) {
        if (fn(array[i], i, array)) {
          return i;
        }
      }

      return -1;
    };

export function splitAt<T>(
  array: Array<T>,
  index: number,
): [Array<T>, Array<T>] {
  return [array.slice(0, index), array.slice(index)];
}
