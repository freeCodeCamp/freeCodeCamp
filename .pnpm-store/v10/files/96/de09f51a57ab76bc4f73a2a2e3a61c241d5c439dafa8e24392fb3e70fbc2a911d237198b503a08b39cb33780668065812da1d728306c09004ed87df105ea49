import { TokenType, tokenize } from "@csstools/css-tokenizer";
import { createCacheKey, getCache, CacheItem, setCache } from "./cache.js";
import { isString } from "./common.js";
import { resolveColor } from "./resolve.js";
import { NAMED_COLORS } from "./color.js";
import { VAL_SPEC, SYN_COLOR_TYPE, SYN_MIX } from "./constant.js";
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
const NAMESPACE = "util";
const DEC = 10;
const HEX = 16;
const DEG = 360;
const DEG_HALF = 180;
const REG_COLOR = new RegExp(`^(?:${SYN_COLOR_TYPE})$`);
const REG_FN_COLOR = /^(?:(?:ok)?l(?:ab|ch)|color(?:-mix)?|hsla?|hwb|rgba?|var)\(/;
const REG_MIX = new RegExp(SYN_MIX);
const splitValue = (value, opt = {}) => {
  if (isString(value)) {
    value = value.trim();
  } else {
    throw new TypeError(`${value} is not a string.`);
  }
  const { delimiter = " ", preserveComment = false } = opt;
  const cacheKey = createCacheKey(
    {
      namespace: NAMESPACE,
      name: "splitValue",
      value
    },
    {
      delimiter,
      preserveComment
    }
  );
  const cachedResult = getCache(cacheKey);
  if (cachedResult instanceof CacheItem) {
    return cachedResult.item;
  }
  let regDelimiter;
  if (delimiter === ",") {
    regDelimiter = /^,$/;
  } else if (delimiter === "/") {
    regDelimiter = /^\/$/;
  } else {
    regDelimiter = /^\s+$/;
  }
  const tokens = tokenize({ css: value });
  let nest = 0;
  let str = "";
  const res = [];
  while (tokens.length) {
    const [type, value2] = tokens.shift();
    switch (type) {
      case COMMA: {
        if (regDelimiter.test(value2)) {
          if (nest === 0) {
            res.push(str.trim());
            str = "";
          } else {
            str += value2;
          }
        } else {
          str += value2;
        }
        break;
      }
      case DELIM: {
        if (regDelimiter.test(value2)) {
          if (nest === 0) {
            res.push(str.trim());
            str = "";
          } else {
            str += value2;
          }
        } else {
          str += value2;
        }
        break;
      }
      case COMMENT: {
        if (preserveComment && (delimiter === "," || delimiter === "/")) {
          str += value2;
        }
        break;
      }
      case FUNC:
      case PAREN_OPEN: {
        str += value2;
        nest++;
        break;
      }
      case PAREN_CLOSE: {
        str += value2;
        nest--;
        break;
      }
      case W_SPACE: {
        if (regDelimiter.test(value2)) {
          if (nest === 0) {
            if (str) {
              res.push(str.trim());
              str = "";
            }
          } else {
            str += " ";
          }
        } else if (!str.endsWith(" ")) {
          str += " ";
        }
        break;
      }
      default: {
        if (type === EOF) {
          res.push(str.trim());
          str = "";
        } else {
          str += value2;
        }
      }
    }
  }
  setCache(cacheKey, res);
  return res;
};
const extractDashedIdent = (value) => {
  if (isString(value)) {
    value = value.trim();
  } else {
    throw new TypeError(`${value} is not a string.`);
  }
  const cacheKey = createCacheKey({
    namespace: NAMESPACE,
    name: "extractDashedIdent",
    value
  });
  const cachedResult = getCache(cacheKey);
  if (cachedResult instanceof CacheItem) {
    return cachedResult.item;
  }
  const tokens = tokenize({ css: value });
  const items = /* @__PURE__ */ new Set();
  while (tokens.length) {
    const [type, value2] = tokens.shift();
    if (type === IDENT && value2.startsWith("--")) {
      items.add(value2);
    }
  }
  const res = [...items];
  setCache(cacheKey, res);
  return res;
};
const isColor = (value, opt = {}) => {
  if (isString(value)) {
    value = value.toLowerCase().trim();
    if (value && isString(value)) {
      if (/^[a-z]+$/.test(value)) {
        if (/^(?:currentcolor|transparent)$/.test(value) || Object.prototype.hasOwnProperty.call(NAMED_COLORS, value)) {
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
const valueToJsonString = (value, func = false) => {
  if (typeof value === "undefined") {
    return "";
  }
  const res = JSON.stringify(value, (_key, val) => {
    let replacedValue;
    if (typeof val === "undefined") {
      replacedValue = null;
    } else if (typeof val === "function") {
      if (func) {
        replacedValue = val.toString().replace(/\s/g, "").substring(0, HEX);
      } else {
        replacedValue = val.name;
      }
    } else if (val instanceof Map || val instanceof Set) {
      replacedValue = [...val];
    } else if (typeof val === "bigint") {
      replacedValue = val.toString();
    } else {
      replacedValue = val;
    }
    return replacedValue;
  });
  return res;
};
const roundToPrecision = (value, bit = 0) => {
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
const interpolateHue = (hueA, hueB, arc = "shorter") => {
  if (!Number.isFinite(hueA)) {
    throw new TypeError(`${hueA} is not a finite number.`);
  }
  if (!Number.isFinite(hueB)) {
    throw new TypeError(`${hueB} is not a finite number.`);
  }
  switch (arc) {
    case "decreasing": {
      if (hueB > hueA) {
        hueA += DEG;
      }
      break;
    }
    case "increasing": {
      if (hueB < hueA) {
        hueB += DEG;
      }
      break;
    }
    case "longer": {
      if (hueB > hueA && hueB < hueA + DEG_HALF) {
        hueA += DEG;
      } else if (hueB > hueA + DEG_HALF * -1 && hueB <= hueA) {
        hueB += DEG;
      }
      break;
    }
    case "shorter":
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
export {
  extractDashedIdent,
  interpolateHue,
  isColor,
  roundToPrecision,
  splitValue,
  valueToJsonString
};
//# sourceMappingURL=util.js.map
