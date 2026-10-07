/**
 * relative-color
 */

import { SyntaxFlag, color as colorParser } from '@csstools/css-color-parser';
import {
  ComponentValue,
  parseComponentValue
} from '@csstools/css-parser-algorithms';
import { CSSToken, TokenType, tokenize } from '@csstools/css-tokenizer';
import {
  CacheItem,
  NullObject,
  createCacheKey,
  getCache,
  setCache
} from './cache';
import { NAMED_COLORS, convertColorToRgb } from './color';
import { isString, isStringOrNumber } from './common';
import { resolveDimension, serializeCalc } from './css-calc';
import { resolveColor } from './resolve';
import { roundToPrecision } from './util';
import {
  ColorChannels,
  MatchedRegExp,
  Options,
  StringColorChannels
} from './typedef';

/* constants */
import {
  CS_LAB,
  CS_LCH,
  FN_REL,
  FN_REL_CAPT,
  FN_VAR,
  NONE,
  SYN_COLOR_TYPE,
  SYN_FN_MATH_START,
  SYN_FN_VAR,
  SYN_MIX,
  VAL_SPEC
} from './constant';
const {
  CloseParen: PAREN_CLOSE,
  Comment: COMMENT,
  Dimension: DIM,
  EOF,
  Function: FUNC,
  Ident: IDENT,
  Number: NUM,
  OpenParen: PAREN_OPEN,
  Percentage: PCT,
  Whitespace: W_SPACE
} = TokenType;
const { HasNoneKeywords: KEY_NONE } = SyntaxFlag;
const NAMESPACE = 'relative-color';

/* numeric constants */
const OCT = 8;
const DEC = 10;
const HEX = 16;
const MAX_PCT = 100;
const MAX_RGB = 255;

/* type definitions */
/**
 * @type NumberOrStringColorChannels - color channel
 */
type NumberOrStringColorChannels = ColorChannels & StringColorChannels;

/* regexp */
const REG_COLOR_CAPT = new RegExp(
  `^${FN_REL}(${SYN_COLOR_TYPE}|${SYN_MIX})\\s+`
);
const REG_CS_HSL = /(?:hsla?|hwb)$/;
const REG_CS_CIE = new RegExp(`^(?:${CS_LAB}|${CS_LCH})$`);
const REG_FN_MATH_START = new RegExp(SYN_FN_MATH_START);
const REG_FN_REL = new RegExp(FN_REL);
const REG_FN_REL_CAPT = new RegExp(`^${FN_REL_CAPT}`);
const REG_FN_REL_START = new RegExp(`^${FN_REL}`);
const REG_FN_VAR = new RegExp(SYN_FN_VAR);

/**
 * resolve relative color channels
 * @param tokens - CSS tokens
 * @param [opt] - options
 * @returns resolved color channels
 */
export function resolveColorChannels(
  tokens: CSSToken[],
  opt: Options = {}
): NumberOrStringColorChannels | NullObject {
  if (!Array.isArray(tokens)) {
    throw new TypeError(`${tokens} is not an array.`);
  }
  const { colorSpace = '', format = '' } = opt;
  const colorChannels = new Map([
    ['color', ['r', 'g', 'b', 'alpha']],
    ['hsl', ['h', 's', 'l', 'alpha']],
    ['hsla', ['h', 's', 'l', 'alpha']],
    ['hwb', ['h', 'w', 'b', 'alpha']],
    ['lab', ['l', 'a', 'b', 'alpha']],
    ['lch', ['l', 'c', 'h', 'alpha']],
    ['oklab', ['l', 'a', 'b', 'alpha']],
    ['oklch', ['l', 'c', 'h', 'alpha']],
    ['rgb', ['r', 'g', 'b', 'alpha']],
    ['rgba', ['r', 'g', 'b', 'alpha']]
  ]);
  const colorChannel = colorChannels.get(colorSpace);
  // invalid color channel
  if (!colorChannel) {
    return new NullObject();
  }
  const mathFunc = new Set();
  const channels: [
    (number | string)[],
    (number | string)[],
    (number | string)[],
    (number | string)[]
  ] = [[], [], [], []];
  let i = 0;
  let nest = 0;
  let func = false;
  while (tokens.length) {
    const token = tokens.shift();
    if (!Array.isArray(token)) {
      throw new TypeError(`${token} is not an array.`);
    }
    const [type, value, , , detail] = token as [
      TokenType,
      string,
      number,
      number,
      { value: string | number } | undefined
    ];
    const channel = channels[i];
    if (Array.isArray(channel)) {
      switch (type) {
        case DIM: {
          const resolvedValue = resolveDimension(token, opt);
          if (isString(resolvedValue)) {
            channel.push(resolvedValue);
          } else {
            channel.push(value);
          }
          break;
        }
        case FUNC: {
          channel.push(value);
          func = true;
          nest++;
          if (REG_FN_MATH_START.test(value)) {
            mathFunc.add(nest);
          }
          break;
        }
        case IDENT: {
          // invalid channel key
          if (!colorChannel.includes(value)) {
            return new NullObject();
          }
          channel.push(value);
          if (!func) {
            i++;
          }
          break;
        }
        case NUM: {
          channel.push(Number(detail?.value));
          if (!func) {
            i++;
          }
          break;
        }
        case PAREN_OPEN: {
          channel.push(value);
          nest++;
          break;
        }
        case PAREN_CLOSE: {
          if (func) {
            const lastValue = channel[channel.length - 1];
            if (lastValue === ' ') {
              channel.splice(-1, 1, value);
            } else {
              channel.push(value);
            }
            if (mathFunc.has(nest)) {
              mathFunc.delete(nest);
            }
            nest--;
            if (nest === 0) {
              func = false;
              i++;
            }
          }
          break;
        }
        case PCT: {
          channel.push(Number(detail?.value) / MAX_PCT);
          if (!func) {
            i++;
          }
          break;
        }
        case W_SPACE: {
          if (channel.length && func) {
            const lastValue = channel[channel.length - 1];
            if (typeof lastValue === 'number') {
              channel.push(value);
            } else if (
              isString(lastValue) &&
              !lastValue.endsWith('(') &&
              lastValue !== ' '
            ) {
              channel.push(value);
            }
          }
          break;
        }
        default: {
          if (type !== COMMENT && type !== EOF && func) {
            channel.push(value);
          }
        }
      }
    }
  }
  const channelValues = [];
  for (const channel of channels) {
    if (channel.length === 1) {
      const [resolvedValue] = channel;
      if (isStringOrNumber(resolvedValue)) {
        channelValues.push(resolvedValue);
      }
    } else if (channel.length) {
      const resolvedValue = serializeCalc(channel.join(''), {
        format
      });
      channelValues.push(resolvedValue);
    }
  }
  return channelValues as NumberOrStringColorChannels;
}

/**
 * extract origin color
 * @param value - CSS color value
 * @param [opt] - options
 * @returns origin color value
 */
export function extractOriginColor(
  value: string,
  opt: Options = {}
): string | NullObject {
  const { currentColor = '', format = '' } = opt;
  if (isString(value)) {
    value = value.toLowerCase().trim();
    if (!value) {
      return new NullObject();
    }
    if (!REG_FN_REL_START.test(value)) {
      return value;
    }
  } else {
    return new NullObject();
  }
  const cacheKey: string = createCacheKey(
    {
      namespace: NAMESPACE,
      name: 'extractOriginColor',
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
  if (/currentcolor/.test(value)) {
    if (currentColor) {
      value = value.replace(/currentcolor/g, currentColor);
    } else {
      setCache(cacheKey, null);
      return new NullObject();
    }
  }
  let colorSpace = '';
  if (REG_FN_REL_CAPT.test(value)) {
    [, colorSpace] = value.match(REG_FN_REL_CAPT) as MatchedRegExp;
  }
  opt.colorSpace = colorSpace;
  if (REG_COLOR_CAPT.test(value)) {
    const [, originColor] = value.match(REG_COLOR_CAPT) as MatchedRegExp;
    const [, restValue] = value.split(originColor) as MatchedRegExp;
    if (/^[a-z]+$/.test(originColor)) {
      if (
        !/^transparent$/.test(originColor) &&
        !Object.prototype.hasOwnProperty.call(NAMED_COLORS, originColor)
      ) {
        setCache(cacheKey, null);
        return new NullObject();
      }
    } else if (format === VAL_SPEC) {
      const resolvedOriginColor = resolveColor(originColor, opt);
      if (isString(resolvedOriginColor)) {
        value = value.replace(originColor, resolvedOriginColor);
      }
    }
    if (format === VAL_SPEC) {
      const tokens = tokenize({ css: restValue });
      const channelValues = resolveColorChannels(tokens, opt);
      if (channelValues instanceof NullObject) {
        setCache(cacheKey, null);
        return channelValues;
      }
      const [v1, v2, v3, v4] = channelValues;
      let channelValue = '';
      if (isStringOrNumber(v4)) {
        channelValue = ` ${v1} ${v2} ${v3} / ${v4})`;
      } else {
        channelValue = ` ${channelValues.join(' ')})`;
      }
      if (restValue !== channelValue) {
        value = value.replace(restValue, channelValue);
      }
    }
    // nested relative color
  } else {
    const [, restValue] = value.split(REG_FN_REL_START) as MatchedRegExp;
    const tokens = tokenize({ css: restValue });
    const originColor: string[] = [];
    let nest = 0;
    while (tokens.length) {
      const [type, tokenValue] = tokens.shift() as [TokenType, string];
      switch (type) {
        case FUNC:
        case PAREN_OPEN: {
          originColor.push(tokenValue);
          nest++;
          break;
        }
        case PAREN_CLOSE: {
          const lastValue = originColor[originColor.length - 1];
          if (lastValue === ' ') {
            originColor.splice(-1, 1, tokenValue);
          } else if (isString(lastValue)) {
            originColor.push(tokenValue);
          }
          nest--;
          break;
        }
        case W_SPACE: {
          const lastValue = originColor[originColor.length - 1];
          if (
            isString(lastValue) &&
            !lastValue.endsWith('(') &&
            lastValue !== ' '
          ) {
            originColor.push(tokenValue);
          }
          break;
        }
        default: {
          if (type !== COMMENT && type !== EOF) {
            originColor.push(tokenValue);
          }
        }
      }
      if (nest === 0) {
        break;
      }
    }
    const resolvedOriginColor = resolveRelativeColor(
      originColor.join('').trim(),
      opt
    );
    if (resolvedOriginColor instanceof NullObject) {
      setCache(cacheKey, null);
      return resolvedOriginColor;
    }
    const channelValues = resolveColorChannels(tokens, opt);
    if (channelValues instanceof NullObject) {
      setCache(cacheKey, null);
      return channelValues;
    }
    const [v1, v2, v3, v4] = channelValues;
    let channelValue = '';
    if (isStringOrNumber(v4)) {
      channelValue = ` ${v1} ${v2} ${v3} / ${v4})`;
    } else {
      channelValue = ` ${channelValues.join(' ')})`;
    }
    value = value.replace(restValue, `${resolvedOriginColor}${channelValue}`);
  }
  setCache(cacheKey, value);
  return value;
}

/**
 * resolve relative color
 * @param value - CSS relative color value
 * @param [opt] - options
 * @returns resolved value
 */
export function resolveRelativeColor(
  value: string,
  opt: Options = {}
): string | NullObject {
  const { format = '' } = opt;
  if (isString(value)) {
    if (REG_FN_VAR.test(value)) {
      if (format === VAL_SPEC) {
        return value;
        // var() must be resolved before resolveRelativeColor()
      } else {
        throw new SyntaxError(`Unexpected token ${FN_VAR} found.`);
      }
    } else if (!REG_FN_REL.test(value)) {
      return value;
    }
    value = value.toLowerCase().trim();
  } else {
    throw new TypeError(`${value} is not a string.`);
  }
  const cacheKey: string = createCacheKey(
    {
      namespace: NAMESPACE,
      name: 'resolveRelativeColor',
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
  const originColor = extractOriginColor(value, opt);
  if (originColor instanceof NullObject) {
    setCache(cacheKey, null);
    return originColor;
  }
  value = originColor;
  if (format === VAL_SPEC) {
    if (value.startsWith('rgba(')) {
      value = value.replace(/^rgba\(/, 'rgb(');
    } else if (value.startsWith('hsla(')) {
      value = value.replace(/^hsla\(/, 'hsl(');
    }
    return value;
  }
  const tokens = tokenize({ css: value });
  const components = parseComponentValue(tokens) as ComponentValue;
  const parsedComponents = colorParser(components);
  if (!parsedComponents) {
    setCache(cacheKey, null);
    return new NullObject();
  }
  const {
    alpha: alphaComponent,
    channels: channelsComponent,
    colorNotation,
    syntaxFlags
  } = parsedComponents;
  let alpha: number | string;
  if (Number.isNaN(Number(alphaComponent))) {
    if (syntaxFlags instanceof Set && syntaxFlags.has(KEY_NONE)) {
      alpha = NONE;
    } else {
      alpha = 0;
    }
  } else {
    alpha = roundToPrecision(Number(alphaComponent), OCT);
  }
  let v1: number | string;
  let v2: number | string;
  let v3: number | string;
  [v1, v2, v3] = channelsComponent;
  let resolvedValue;
  if (REG_CS_CIE.test(colorNotation)) {
    const hasNone = syntaxFlags instanceof Set && syntaxFlags.has(KEY_NONE);
    if (Number.isNaN(v1)) {
      if (hasNone) {
        v1 = NONE;
      } else {
        v1 = 0;
      }
    } else {
      v1 = roundToPrecision(v1, HEX);
    }
    if (Number.isNaN(v2)) {
      if (hasNone) {
        v2 = NONE;
      } else {
        v2 = 0;
      }
    } else {
      v2 = roundToPrecision(v2, HEX);
    }
    if (Number.isNaN(v3)) {
      if (hasNone) {
        v3 = NONE;
      } else {
        v3 = 0;
      }
    } else {
      v3 = roundToPrecision(v3, HEX);
    }
    if (alpha === 1) {
      resolvedValue = `${colorNotation}(${v1} ${v2} ${v3})`;
    } else {
      resolvedValue = `${colorNotation}(${v1} ${v2} ${v3} / ${alpha})`;
    }
  } else if (REG_CS_HSL.test(colorNotation)) {
    if (Number.isNaN(v1)) {
      v1 = 0;
    }
    if (Number.isNaN(v2)) {
      v2 = 0;
    }
    if (Number.isNaN(v3)) {
      v3 = 0;
    }
    let [r, g, b] = convertColorToRgb(
      `${colorNotation}(${v1} ${v2} ${v3} / ${alpha})`
    ) as ColorChannels;
    r = roundToPrecision(r / MAX_RGB, DEC);
    g = roundToPrecision(g / MAX_RGB, DEC);
    b = roundToPrecision(b / MAX_RGB, DEC);
    if (alpha === 1) {
      resolvedValue = `color(srgb ${r} ${g} ${b})`;
    } else {
      resolvedValue = `color(srgb ${r} ${g} ${b} / ${alpha})`;
    }
  } else {
    const cs = colorNotation === 'rgb' ? 'srgb' : colorNotation;
    const hasNone = syntaxFlags instanceof Set && syntaxFlags.has(KEY_NONE);
    if (Number.isNaN(v1)) {
      if (hasNone) {
        v1 = NONE;
      } else {
        v1 = 0;
      }
    } else {
      v1 = roundToPrecision(v1, DEC);
    }
    if (Number.isNaN(v2)) {
      if (hasNone) {
        v2 = NONE;
      } else {
        v2 = 0;
      }
    } else {
      v2 = roundToPrecision(v2, DEC);
    }
    if (Number.isNaN(v3)) {
      if (hasNone) {
        v3 = NONE;
      } else {
        v3 = 0;
      }
    } else {
      v3 = roundToPrecision(v3, DEC);
    }
    if (alpha === 1) {
      resolvedValue = `color(${cs} ${v1} ${v2} ${v3})`;
    } else {
      resolvedValue = `color(${cs} ${v1} ${v2} ${v3} / ${alpha})`;
    }
  }
  setCache(cacheKey, resolvedValue);
  return resolvedValue;
}
