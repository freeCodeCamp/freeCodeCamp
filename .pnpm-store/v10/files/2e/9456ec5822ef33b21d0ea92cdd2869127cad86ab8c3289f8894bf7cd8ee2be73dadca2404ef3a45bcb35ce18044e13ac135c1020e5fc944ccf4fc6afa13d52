/**
 * util
 */

import { TokenType, tokenize } from '@csstools/css-tokenizer';
import { CacheItem, createCacheKey, getCache, setCache } from './cache';
import { isString } from './common';
import { resolveColor } from './resolve';
import { Options } from './typedef';

/* constants */
import { NAMED_COLORS } from './color';
import { SYN_COLOR_TYPE, SYN_MIX, VAL_SPEC } from './constant';
const {
  CloseParen: PAREN_CLOSE,
  Comma: COMMA,
  Comment: COMMENT,
  Delim: DELIM,
  EOF,
  Function: FUNC,
  Ident: IDENT,
  OpenParen: PAREN_OPEN,
  Whitespace: W_SPACE
} = TokenType;
const NAMESPACE = 'util';

/* numeric constants */
const DEC = 10;
const HEX = 16;
const DEG = 360;
const DEG_HALF = 180;

/* regexp */
const REG_COLOR = new RegExp(`^(?:${SYN_COLOR_TYPE})$`);
const REG_FN_COLOR =
  /^(?:(?:ok)?l(?:ab|ch)|color(?:-mix)?|hsla?|hwb|rgba?|var)\(/;
const REG_MIX = new RegExp(SYN_MIX);

/**
 * split value
 * NOTE: comments are stripped, it can be preserved if, in the options param,
 * `delimiter` is either ',' or '/' and with `preserveComment` set to `true`
 * @param value - CSS value
 * @param [opt] - options
 * @returns array of values
 */
export const splitValue = (value: string, opt: Options = {}): string[] => {
  if (isString(value)) {
    value = value.trim();
  } else {
    throw new TypeError(`${value} is not a string.`);
  }
  const { delimiter = ' ', preserveComment = false } = opt;
  const cacheKey: string = createCacheKey(
    {
      namespace: NAMESPACE,
      name: 'splitValue',
      value
    },
    {
      delimiter,
      preserveComment
    }
  );
  const cachedResult = getCache(cacheKey);
  if (cachedResult instanceof CacheItem) {
    return cachedResult.item as string[];
  }
  let regDelimiter;
  if (delimiter === ',') {
    regDelimiter = /^,$/;
  } else if (delimiter === '/') {
    regDelimiter = /^\/$/;
  } else {
    regDelimiter = /^\s+$/;
  }
  const tokens = tokenize({ css: value });
  let nest = 0;
  let str = '';
  const res: string[] = [];
  while (tokens.length) {
    const [type, value] = tokens.shift() as [TokenType, string];
    switch (type) {
      case COMMA: {
        if (regDelimiter.test(value)) {
          if (nest === 0) {
            res.push(str.trim());
            str = '';
          } else {
            str += value;
          }
        } else {
          str += value;
        }
        break;
      }
      case DELIM: {
        if (regDelimiter.test(value)) {
          if (nest === 0) {
            res.push(str.trim());
            str = '';
          } else {
            str += value;
          }
        } else {
          str += value;
        }
        break;
      }
      case COMMENT: {
        if (preserveComment && (delimiter === ',' || delimiter === '/')) {
          str += value;
        }
        break;
      }
      case FUNC:
      case PAREN_OPEN: {
        str += value;
        nest++;
        break;
      }
      case PAREN_CLOSE: {
        str += value;
        nest--;
        break;
      }
      case W_SPACE: {
        if (regDelimiter.test(value)) {
          if (nest === 0) {
            if (str) {
              res.push(str.trim());
              str = '';
            }
          } else {
            str += ' ';
          }
        } else if (!str.endsWith(' ')) {
          str += ' ';
        }
        break;
      }
      default: {
        if (type === EOF) {
          res.push(str.trim());
          str = '';
        } else {
          str += value;
        }
      }
    }
  }
  setCache(cacheKey, res);
  return res;
};

/**
 * extract dashed-ident tokens
 * @param value - CSS value
 * @returns array of dashed-ident tokens
 */
export const extractDashedIdent = (value: string): string[] => {
  if (isString(value)) {
    value = value.trim();
  } else {
    throw new TypeError(`${value} is not a string.`);
  }
  const cacheKey: string = createCacheKey({
    namespace: NAMESPACE,
    name: 'extractDashedIdent',
    value
  });
  const cachedResult = getCache(cacheKey);
  if (cachedResult instanceof CacheItem) {
    return cachedResult.item as string[];
  }
  const tokens = tokenize({ css: value });
  const items = new Set();
  while (tokens.length) {
    const [type, value] = tokens.shift() as [TokenType, string];
    if (type === IDENT && value.startsWith('--')) {
      items.add(value);
    }
  }
  const res = [...items] as string[];
  setCache(cacheKey, res);
  return res;
};

/**
 * is color
 * @param value - CSS value
 * @param [opt] - options
 * @returns result
 */
export const isColor = (value: unknown, opt: Options = {}): boolean => {
  if (isString(value)) {
    value = value.toLowerCase().trim();
    if (value && isString(value)) {
      if (/^[a-z]+$/.test(value)) {
        if (
          /^(?:currentcolor|transparent)$/.test(value) ||
          Object.prototype.hasOwnProperty.call(NAMED_COLORS, value)
        ) {
          return true;
        }
      } else if (REG_COLOR.test(value) || REG_MIX.test(value)) {
        return true;
      } else if (REG_FN_COLOR.test(value)) {
        opt.nullable = true;
        if (!opt.format) {
          opt.format = VAL_SPEC;
        }
        const resolvedValue = resolveColor(value, opt);
        if (resolvedValue) {
          return true;
        }
      }
    }
  }
  return false;
};

/**
 * value to JSON string
 * @param value - CSS value
 * @param [func] - stringify function
 * @returns stringified value in JSON notation
 */
export const valueToJsonString = (
  value: unknown,
  func: boolean = false
): string => {
  if (typeof value === 'undefined') {
    return '';
  }
  const res = JSON.stringify(value, (_key, val) => {
    let replacedValue;
    if (typeof val === 'undefined') {
      replacedValue = null;
    } else if (typeof val === 'function') {
      if (func) {
        replacedValue = val.toString().replace(/\s/g, '').substring(0, HEX);
      } else {
        replacedValue = val.name;
      }
    } else if (val instanceof Map || val instanceof Set) {
      replacedValue = [...val];
    } else if (typeof val === 'bigint') {
      replacedValue = val.toString();
    } else {
      replacedValue = val;
    }
    return replacedValue;
  });
  return res;
};

/**
 * round to specified precision
 * @param value - numeric value
 * @param bit - minimum bits
 * @returns rounded value
 */
export const roundToPrecision = (value: number, bit: number = 0): number => {
  if (!Number.isFinite(value)) {
    throw new TypeError(`${value} is not a finite number.`);
  }
  if (!Number.isFinite(bit)) {
    throw new TypeError(`${bit} is not a finite number.`);
  } else if (bit < 0 || bit > HEX) {
    throw new RangeError(`${bit} is not between 0 and ${HEX}.`);
  }
  if (bit === 0) {
    return Math.round(value);
  }
  let val;
  if (bit === HEX) {
    val = value.toPrecision(6);
  } else if (bit < DEC) {
    val = value.toPrecision(4);
  } else {
    val = value.toPrecision(5);
  }
  return parseFloat(val);
};

/**
 * interpolate hue
 * @param hueA - hue value
 * @param hueB - hue value
 * @param arc - shorter | longer | increasing | decreasing
 * @returns result - [hueA, hueB]
 */
export const interpolateHue = (
  hueA: number,
  hueB: number,
  arc: string = 'shorter'
): [number, number] => {
  if (!Number.isFinite(hueA)) {
    throw new TypeError(`${hueA} is not a finite number.`);
  }
  if (!Number.isFinite(hueB)) {
    throw new TypeError(`${hueB} is not a finite number.`);
  }
  switch (arc) {
    case 'decreasing': {
      if (hueB > hueA) {
        hueA += DEG;
      }
      break;
    }
    case 'increasing': {
      if (hueB < hueA) {
        hueB += DEG;
      }
      break;
    }
    case 'longer': {
      if (hueB > hueA && hueB < hueA + DEG_HALF) {
        hueA += DEG;
      } else if (hueB > hueA + DEG_HALF * -1 && hueB <= hueA) {
        hueB += DEG;
      }
      break;
    }
    case 'shorter':
    default: {
      if (hueB > hueA + DEG_HALF) {
        hueA += DEG;
      } else if (hueB < hueA + DEG_HALF * -1) {
        hueB += DEG;
      }
    }
  }
  return [hueA, hueB];
};
