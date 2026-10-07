/**
 * common
 */

/* numeric constants */
const TYPE_FROM = 8;
const TYPE_TO = -1;

/**
 * get type
 * @param o - object to check
 * @returns type of object
 */
export const getType = (o: unknown): string =>
  Object.prototype.toString.call(o).slice(TYPE_FROM, TYPE_TO);

/**
 * is string
 * @param o - object to check
 * @returns result
 */
export const isString = (o: unknown): o is string =>
  typeof o === 'string' || o instanceof String;

/**
 * is string or number
 * @param o - object to check
 * @returns result
 */
export const isStringOrNumber = (o: unknown): boolean =>
  isString(o) || typeof o === 'number';
