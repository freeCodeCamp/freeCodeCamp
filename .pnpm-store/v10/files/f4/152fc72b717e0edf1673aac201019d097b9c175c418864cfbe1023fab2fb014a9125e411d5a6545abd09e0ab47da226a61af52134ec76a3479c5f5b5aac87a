import { TokenType, tokenize } from "@csstools/css-tokenizer";
import { createCacheKey, getCache, CacheItem, setCache, NullObject } from "./cache.js";
import { isString } from "./common.js";
import { cssCalc } from "./css-calc.js";
import { isColor } from "./util.js";
import { VAL_SPEC, SYN_FN_VAR, FN_VAR, SYN_FN_CALC } from "./constant.js";
const {
  CloseParen: PAREN_CLOSE,
  Comment: COMMENT,
  EOF,
  Ident: IDENT,
  Whitespace: W_SPACE
} = TokenType;
const NAMESPACE = "css-var";
const REG_FN_CALC = new RegExp(SYN_FN_CALC);
const REG_FN_VAR = new RegExp(SYN_FN_VAR);
function resolveCustomProperty(tokens, opt = {}) {
  if (!Array.isArray(tokens)) {
    throw new TypeError(`${tokens} is not an array.`);
  }
  const { customProperty = {} } = opt;
  const items = [];
  while (tokens.length) {
    const token = tokens.shift();
    if (!Array.isArray(token)) {
      throw new TypeError(`${token} is not an array.`);
    }
    const [type, value] = token;
    if (type === PAREN_CLOSE) {
      break;
    }
    if (value === FN_VAR) {
      const [restTokens, item] = resolveCustomProperty(tokens, opt);
      tokens = restTokens;
      if (item) {
        items.push(item);
      }
    } else if (type === IDENT) {
      if (value.startsWith("--")) {
        let item;
        if (Object.hasOwnProperty.call(customProperty, value)) {
          item = customProperty[value];
        } else if (typeof customProperty.callback === "function") {
          item = customProperty.callback(value);
        }
        if (item) {
          items.push(item);
        }
      } else if (value) {
        items.push(value);
      }
    }
  }
  let resolveAsColor = false;
  if (items.length > 1) {
    const lastValue = items[items.length - 1];
    resolveAsColor = isColor(lastValue);
  }
  let resolvedValue = "";
  for (let item of items) {
    item = item.trim();
    if (REG_FN_VAR.test(item)) {
      const resolvedItem = resolveVar(item, opt);
      if (isString(resolvedItem)) {
        if (resolveAsColor) {
          if (isColor(resolvedItem)) {
            resolvedValue = resolvedItem;
          }
        } else {
          resolvedValue = resolvedItem;
        }
      }
    } else if (REG_FN_CALC.test(item)) {
      item = cssCalc(item, opt);
      if (resolveAsColor) {
        if (isColor(item)) {
          resolvedValue = item;
        }
      } else {
        resolvedValue = item;
      }
    } else if (item && !/^(?:inherit|initial|revert(?:-layer)?|unset)$/.test(item)) {
      if (resolveAsColor) {
        if (isColor(item)) {
          resolvedValue = item;
        }
      } else {
        resolvedValue = item;
      }
    }
    if (resolvedValue) {
      break;
    }
  }
  return [tokens, resolvedValue];
}
function parseTokens(tokens, opt = {}) {
  const res = [];
  while (tokens.length) {
    const token = tokens.shift();
    const [type = "", value = ""] = token;
    if (value === FN_VAR) {
      const [restTokens, resolvedValue] = resolveCustomProperty(tokens, opt);
      if (!resolvedValue) {
        return new NullObject();
      }
      tokens = restTokens;
      res.push(resolvedValue);
    } else {
      switch (type) {
        case PAREN_CLOSE: {
          if (res.length) {
            const lastValue = res[res.length - 1];
            if (lastValue === " ") {
              res.splice(-1, 1, value);
            } else {
              res.push(value);
            }
          } else {
            res.push(value);
          }
          break;
        }
        case W_SPACE: {
          if (res.length) {
            const lastValue = res[res.length - 1];
            if (isString(lastValue) && !lastValue.endsWith("(") && lastValue !== " ") {
              res.push(value);
            }
          }
          break;
        }
        default: {
          if (type !== COMMENT && type !== EOF) {
            res.push(value);
          }
        }
      }
    }
  }
  return res;
}
function resolveVar(value, opt = {}) {
  const { format = "" } = opt;
  if (isString(value)) {
    if (!REG_FN_VAR.test(value) || format === VAL_SPEC) {
      return value;
    }
    value = value.trim();
  } else {
    throw new TypeError(`${value} is not a string.`);
  }
  const cacheKey = createCacheKey(
    {
      namespace: NAMESPACE,
      name: "resolveVar",
      value
    },
    opt
  );
  const cachedResult = getCache(cacheKey);
  if (cachedResult instanceof CacheItem) {
    if (cachedResult.isNull) {
      return cachedResult;
    }
    return cachedResult.item;
  }
  const tokens = tokenize({ css: value });
  const values = parseTokens(tokens, opt);
  if (Array.isArray(values)) {
    let color = values.join("");
    if (REG_FN_CALC.test(color)) {
      color = cssCalc(color, opt);
    }
    setCache(cacheKey, color);
    return color;
  } else {
    setCache(cacheKey, null);
    return new NullObject();
  }
}
const cssVar = (value, opt = {}) => {
  const resolvedValue = resolveVar(value, opt);
  if (isString(resolvedValue)) {
    return resolvedValue;
  }
  return "";
};
export {
  cssVar,
  parseTokens,
  resolveCustomProperty,
  resolveVar
};
//# sourceMappingURL=css-var.js.map
