/**
 * convert
 */

import {
  CacheItem,
  NullObject,
  createCacheKey,
  getCache,
  setCache
} from './cache';
import {
  convertColorToHsl,
  convertColorToHwb,
  convertColorToLab,
  convertColorToLch,
  convertColorToOklab,
  convertColorToOklch,
  convertColorToRgb,
  numberToHexString,
  parseColorFunc,
  parseColorValue
} from './color';
import { isString } from './common';
import { cssCalc } from './css-calc';
import { resolveVar } from './css-var';
import { resolveRelativeColor } from './relative-color';
import { resolveColor } from './resolve';
import { ColorChannels, ComputedColorChannels, Options } from './typedef';

/* constants */
import { SYN_FN_CALC, SYN_FN_REL, SYN_FN_VAR, VAL_COMP } from './constant';
const NAMESPACE = 'convert';

/* regexp */
const REG_FN_CALC = new RegExp(SYN_FN_CALC);
const REG_FN_REL = new RegExp(SYN_FN_REL);
const REG_FN_VAR = new RegExp(SYN_FN_VAR);

/**
 * pre process
 * @param value - CSS color value
 * @param [opt] - options
 * @returns value
 */
export const preProcess = (
  value: string,
  opt: Options = {}
): string | NullObject => {
  if (isString(value)) {
    value = value.trim();
    if (!value) {
      return new NullObject();
    }
  } else {
    return new NullObject();
  }
  const cacheKey: string = createCacheKey(
    {
      namespace: NAMESPACE,
      name: 'preProcess',
      value
    },
    opt
  );
  const cachedResult = getCache(cacheKey);
  if (cachedResult instanceof CacheItem) {
    if (cachedResult.isNull) {
      return cachedResult as NullObject;
    }
    return cachedResult.item as string;
  }
  if (REG_FN_VAR.test(value)) {
    const resolvedValue = resolveVar(value, opt);
    if (isString(resolvedValue)) {
      value = resolvedValue;
    } else {
      setCache(cacheKey, null);
      return new NullObject();
    }
  }
  if (REG_FN_REL.test(value)) {
    const resolvedValue = resolveRelativeColor(value, opt);
    if (isString(resolvedValue)) {
      value = resolvedValue;
    } else {
      setCache(cacheKey, null);
      return new NullObject();
    }
  } else if (REG_FN_CALC.test(value)) {
    value = cssCalc(value, opt);
  }
  if (value.startsWith('color-mix')) {
    const clonedOpt = structuredClone(opt);
    clonedOpt.format = VAL_COMP;
    clonedOpt.nullable = true;
    const resolvedValue = resolveColor(value, clonedOpt);
    setCache(cacheKey, resolvedValue);
    return resolvedValue;
  }
  setCache(cacheKey, value);
  return value;
};

/**
 * convert number to hex string
 * @param value - numeric value
 * @returns hex string: 00..ff
 */
export const numberToHex = (value: number): string => {
  const hex = numberToHexString(value);
  return hex;
};

/**
 * convert color to hex
 * @param value - CSS color value
 * @param [opt] - options
 * @param [opt.alpha] - enable alpha channel
 * @returns #rrggbb | #rrggbbaa | null
 */
export const colorToHex = (value: string, opt: Options = {}): string | null => {
  if (isString(value)) {
    const resolvedValue = preProcess(value, opt);
    if (resolvedValue instanceof NullObject) {
      return null;
    }
    value = resolvedValue.toLowerCase();
  } else {
    throw new TypeError(`${value} is not a string.`);
  }
  const { alpha = false } = opt;
  const cacheKey: string = createCacheKey(
    {
      namespace: NAMESPACE,
      name: 'colorToHex',
      value
    },
    opt
  );
  const cachedResult = getCache(cacheKey);
  if (cachedResult instanceof CacheItem) {
    if (cachedResult.isNull) {
      return null;
    }
    return cachedResult.item as string;
  }
  let hex;
  opt.nullable = true;
  if (alpha) {
    opt.format = 'hexAlpha';
    hex = resolveColor(value, opt);
  } else {
    opt.format = 'hex';
    hex = resolveColor(value, opt);
  }
  if (isString(hex)) {
    setCache(cacheKey, hex);
    return hex;
  }
  setCache(cacheKey, null);
  return null;
};

/**
 * convert color to hsl
 * @param value - CSS color value
 * @param [opt] - options
 * @returns ColorChannels - [h, s, l, alpha]
 */
export const colorToHsl = (value: string, opt: Options = {}): ColorChannels => {
  if (isString(value)) {
    const resolvedValue = preProcess(value, opt);
    if (resolvedValue instanceof NullObject) {
      return [0, 0, 0, 0];
    }
    value = resolvedValue.toLowerCase();
  } else {
    throw new TypeError(`${value} is not a string.`);
  }
  const cacheKey: string = createCacheKey(
    {
      namespace: NAMESPACE,
      name: 'colorToHsl',
      value
    },
    opt
  );
  const cachedResult = getCache(cacheKey);
  if (cachedResult instanceof CacheItem) {
    return cachedResult.item as ColorChannels;
  }
  opt.format = 'hsl';
  const hsl = convertColorToHsl(value, opt) as ColorChannels;
  setCache(cacheKey, hsl);
  return hsl;
};

/**
 * convert color to hwb
 * @param value - CSS color value
 * @param [opt] - options
 * @returns ColorChannels - [h, w, b, alpha]
 */
export const colorToHwb = (value: string, opt: Options = {}): ColorChannels => {
  if (isString(value)) {
    const resolvedValue = preProcess(value, opt);
    if (resolvedValue instanceof NullObject) {
      return [0, 0, 0, 0];
    }
    value = resolvedValue.toLowerCase();
  } else {
    throw new TypeError(`${value} is not a string.`);
  }
  const cacheKey: string = createCacheKey(
    {
      namespace: NAMESPACE,
      name: 'colorToHwb',
      value
    },
    opt
  );
  const cachedResult = getCache(cacheKey);
  if (cachedResult instanceof CacheItem) {
    return cachedResult.item as ColorChannels;
  }
  opt.format = 'hwb';
  const hwb = convertColorToHwb(value, opt) as ColorChannels;
  setCache(cacheKey, hwb);
  return hwb;
};

/**
 * convert color to lab
 * @param value - CSS color value
 * @param [opt] - options
 * @returns ColorChannels - [l, a, b, alpha]
 */
export const colorToLab = (value: string, opt: Options = {}): ColorChannels => {
  if (isString(value)) {
    const resolvedValue = preProcess(value, opt);
    if (resolvedValue instanceof NullObject) {
      return [0, 0, 0, 0];
    }
    value = resolvedValue.toLowerCase();
  } else {
    throw new TypeError(`${value} is not a string.`);
  }
  const cacheKey: string = createCacheKey(
    {
      namespace: NAMESPACE,
      name: 'colorToLab',
      value
    },
    opt
  );
  const cachedResult = getCache(cacheKey);
  if (cachedResult instanceof CacheItem) {
    return cachedResult.item as ColorChannels;
  }
  const lab = convertColorToLab(value, opt) as ColorChannels;
  setCache(cacheKey, lab);
  return lab;
};

/**
 * convert color to lch
 * @param value - CSS color value
 * @param [opt] - options
 * @returns ColorChannels - [l, c, h, alpha]
 */
export const colorToLch = (value: string, opt: Options = {}): ColorChannels => {
  if (isString(value)) {
    const resolvedValue = preProcess(value, opt);
    if (resolvedValue instanceof NullObject) {
      return [0, 0, 0, 0];
    }
    value = resolvedValue.toLowerCase();
  } else {
    throw new TypeError(`${value} is not a string.`);
  }
  const cacheKey: string = createCacheKey(
    {
      namespace: NAMESPACE,
      name: 'colorToLch',
      value
    },
    opt
  );
  const cachedResult = getCache(cacheKey);
  if (cachedResult instanceof CacheItem) {
    return cachedResult.item as ColorChannels;
  }
  const lch = convertColorToLch(value, opt) as ColorChannels;
  setCache(cacheKey, lch);
  return lch;
};

/**
 * convert color to oklab
 * @param value - CSS color value
 * @param [opt] - options
 * @returns ColorChannels - [l, a, b, alpha]
 */
export const colorToOklab = (
  value: string,
  opt: Options = {}
): ColorChannels => {
  if (isString(value)) {
    const resolvedValue = preProcess(value, opt);
    if (resolvedValue instanceof NullObject) {
      return [0, 0, 0, 0];
    }
    value = resolvedValue.toLowerCase();
  } else {
    throw new TypeError(`${value} is not a string.`);
  }
  const cacheKey: string = createCacheKey(
    {
      namespace: NAMESPACE,
      name: 'colorToOklab',
      value
    },
    opt
  );
  const cachedResult = getCache(cacheKey);
  if (cachedResult instanceof CacheItem) {
    return cachedResult.item as ColorChannels;
  }
  const lab = convertColorToOklab(value, opt) as ColorChannels;
  setCache(cacheKey, lab);
  return lab;
};

/**
 * convert color to oklch
 * @param value - CSS color value
 * @param [opt] - options
 * @returns ColorChannels - [l, c, h, alpha]
 */
export const colorToOklch = (
  value: string,
  opt: Options = {}
): ColorChannels => {
  if (isString(value)) {
    const resolvedValue = preProcess(value, opt);
    if (resolvedValue instanceof NullObject) {
      return [0, 0, 0, 0];
    }
    value = resolvedValue.toLowerCase();
  } else {
    throw new TypeError(`${value} is not a string.`);
  }
  const cacheKey: string = createCacheKey(
    {
      namespace: NAMESPACE,
      name: 'colorToOklch',
      value
    },
    opt
  );
  const cachedResult = getCache(cacheKey);
  if (cachedResult instanceof CacheItem) {
    return cachedResult.item as ColorChannels;
  }
  const lch = convertColorToOklch(value, opt) as ColorChannels;
  setCache(cacheKey, lch);
  return lch;
};

/**
 * convert color to rgb
 * @param value - CSS color value
 * @param [opt] - options
 * @returns ColorChannels - [r, g, b, alpha]
 */
export const colorToRgb = (value: string, opt: Options = {}): ColorChannels => {
  if (isString(value)) {
    const resolvedValue = preProcess(value, opt);
    if (resolvedValue instanceof NullObject) {
      return [0, 0, 0, 0];
    }
    value = resolvedValue.toLowerCase();
  } else {
    throw new TypeError(`${value} is not a string.`);
  }
  const cacheKey: string = createCacheKey(
    {
      namespace: NAMESPACE,
      name: 'colorToRgb',
      value
    },
    opt
  );
  const cachedResult = getCache(cacheKey);
  if (cachedResult instanceof CacheItem) {
    return cachedResult.item as ColorChannels;
  }
  const rgb = convertColorToRgb(value, opt) as ColorChannels;
  setCache(cacheKey, rgb);
  return rgb;
};

/**
 * convert color to xyz
 * @param value - CSS color value
 * @param [opt] - options
 * @returns ColorChannels - [x, y, z, alpha]
 */
export const colorToXyz = (value: string, opt: Options = {}): ColorChannels => {
  if (isString(value)) {
    const resolvedValue = preProcess(value, opt);
    if (resolvedValue instanceof NullObject) {
      return [0, 0, 0, 0];
    }
    value = resolvedValue.toLowerCase();
  } else {
    throw new TypeError(`${value} is not a string.`);
  }
  const cacheKey: string = createCacheKey(
    {
      namespace: NAMESPACE,
      name: 'colorToXyz',
      value
    },
    opt
  );
  const cachedResult = getCache(cacheKey);
  if (cachedResult instanceof CacheItem) {
    return cachedResult.item as ColorChannels;
  }
  let xyz;
  if (value.startsWith('color(')) {
    [, ...xyz] = parseColorFunc(value, opt) as ComputedColorChannels;
  } else {
    [, ...xyz] = parseColorValue(value, opt) as ComputedColorChannels;
  }
  setCache(cacheKey, xyz);
  return xyz as ColorChannels;
};

/**
 * convert color to xyz-d50
 * @param value - CSS color value
 * @param [opt] - options
 * @returns ColorChannels - [x, y, z, alpha]
 */
export const colorToXyzD50 = (
  value: string,
  opt: Options = {}
): ColorChannels => {
  opt.d50 = true;
  return colorToXyz(value, opt);
};

/* convert */
export const convert = {
  colorToHex,
  colorToHsl,
  colorToHwb,
  colorToLab,
  colorToLch,
  colorToOklab,
  colorToOklch,
  colorToRgb,
  colorToXyz,
  colorToXyzD50,
  numberToHex
};
