import { NullObject, createCacheKey, getCache, CacheItem, setCache } from "./cache.js";
import { resolveColorMix, resolveColorFunc, resolveColorValue, convertRgbToHex } from "./color.js";
import { isString } from "./common.js";
import { cssCalc } from "./css-calc.js";
import { resolveVar } from "./css-var.js";
import { resolveRelativeColor } from "./relative-color.js";
import { VAL_COMP, VAL_SPEC, FN_MIX, FN_COLOR, SYN_FN_VAR, SYN_FN_REL, SYN_FN_CALC } from "./constant.js";
const NAMESPACE = "resolve";
const RGB_TRANSPARENT = "rgba(0, 0, 0, 0)";
const REG_FN_CALC = new RegExp(SYN_FN_CALC);
const REG_FN_REL = new RegExp(SYN_FN_REL);
const REG_FN_VAR = new RegExp(SYN_FN_VAR);
const resolveColor = (value, opt = {}) => {
  if (isString(value)) {
    value = value.trim();
  } else {
    throw new TypeError(`${value} is not a string.`);
  }
  const { currentColor = "", format = VAL_COMP, nullable = false } = opt;
  const cacheKey = createCacheKey(
    {
      namespace: NAMESPACE,
      name: "resolve",
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
  if (REG_FN_VAR.test(value)) {
    if (format === VAL_SPEC) {
      setCache(cacheKey, value);
      return value;
    }
    const resolvedValue = resolveVar(value, opt);
    if (resolvedValue instanceof NullObject) {
      switch (format) {
        case "hex":
        case "hexAlpha": {
          setCache(cacheKey, resolvedValue);
          return resolvedValue;
        }
        default: {
          if (nullable) {
            setCache(cacheKey, resolvedValue);
            return resolvedValue;
          }
          const res2 = RGB_TRANSPARENT;
          setCache(cacheKey, res2);
          return res2;
        }
      }
    } else {
      value = resolvedValue;
    }
  }
  if (opt.format !== format) {
    opt.format = format;
  }
  value = value.toLowerCase();
  if (REG_FN_REL.test(value)) {
    const resolvedValue = resolveRelativeColor(value, opt);
    if (format === VAL_COMP) {
      let res2;
      if (resolvedValue instanceof NullObject) {
        if (nullable) {
          res2 = resolvedValue;
        } else {
          res2 = RGB_TRANSPARENT;
        }
      } else {
        res2 = resolvedValue;
      }
      setCache(cacheKey, res2);
      return res2;
    }
    if (format === VAL_SPEC) {
      let res2 = "";
      if (resolvedValue instanceof NullObject) {
        res2 = "";
      } else {
        res2 = resolvedValue;
      }
      setCache(cacheKey, res2);
      return res2;
    }
    if (resolvedValue instanceof NullObject) {
      value = "";
    } else {
      value = resolvedValue;
    }
  }
  if (REG_FN_CALC.test(value)) {
    value = cssCalc(value, opt);
  }
  let cs = "";
  let r = NaN;
  let g = NaN;
  let b = NaN;
  let alpha = NaN;
  if (value === "transparent") {
    switch (format) {
      case VAL_SPEC: {
        setCache(cacheKey, value);
        return value;
      }
      case "hex": {
        setCache(cacheKey, null);
        return new NullObject();
      }
      case "hexAlpha": {
        const res2 = "#00000000";
        setCache(cacheKey, res2);
        return res2;
      }
      case VAL_COMP:
      default: {
        const res2 = RGB_TRANSPARENT;
        setCache(cacheKey, res2);
        return res2;
      }
    }
  } else if (value === "currentcolor") {
    if (format === VAL_SPEC) {
      setCache(cacheKey, value);
      return value;
    }
    if (currentColor) {
      let resolvedValue;
      if (currentColor.startsWith(FN_MIX)) {
        resolvedValue = resolveColorMix(currentColor, opt);
      } else if (currentColor.startsWith(FN_COLOR)) {
        resolvedValue = resolveColorFunc(currentColor, opt);
      } else {
        resolvedValue = resolveColorValue(currentColor, opt);
      }
      if (resolvedValue instanceof NullObject) {
        setCache(cacheKey, resolvedValue);
        return resolvedValue;
      }
      [cs, r, g, b, alpha] = resolvedValue;
    } else if (format === VAL_COMP) {
      const res2 = RGB_TRANSPARENT;
      setCache(cacheKey, res2);
      return res2;
    }
  } else if (format === VAL_SPEC) {
    if (value.startsWith(FN_MIX)) {
      const res2 = resolveColorMix(value, opt);
      setCache(cacheKey, res2);
      return res2;
    } else if (value.startsWith(FN_COLOR)) {
      const [scs, rr, gg, bb, aa] = resolveColorFunc(
        value,
        opt
      );
      let res2 = "";
      if (aa === 1) {
        res2 = `color(${scs} ${rr} ${gg} ${bb})`;
      } else {
        res2 = `color(${scs} ${rr} ${gg} ${bb} / ${aa})`;
      }
      setCache(cacheKey, res2);
      return res2;
    } else {
      const rgb = resolveColorValue(value, opt);
      if (isString(rgb)) {
        setCache(cacheKey, rgb);
        return rgb;
      }
      const [scs, rr, gg, bb, aa] = rgb;
      let res2 = "";
      if (scs === "rgb") {
        if (aa === 1) {
          res2 = `${scs}(${rr}, ${gg}, ${bb})`;
        } else {
          res2 = `${scs}a(${rr}, ${gg}, ${bb}, ${aa})`;
        }
      } else if (aa === 1) {
        res2 = `${scs}(${rr} ${gg} ${bb})`;
      } else {
        res2 = `${scs}(${rr} ${gg} ${bb} / ${aa})`;
      }
      setCache(cacheKey, res2);
      return res2;
    }
  } else if (value.startsWith(FN_MIX)) {
    if (/currentcolor/.test(value)) {
      if (currentColor) {
        value = value.replace(/currentcolor/g, currentColor);
      }
    }
    if (/transparent/.test(value)) {
      value = value.replace(/transparent/g, RGB_TRANSPARENT);
    }
    const resolvedValue = resolveColorMix(value, opt);
    if (resolvedValue instanceof NullObject) {
      setCache(cacheKey, resolvedValue);
      return resolvedValue;
    }
    [cs, r, g, b, alpha] = resolvedValue;
  } else if (value.startsWith(FN_COLOR)) {
    const resolvedValue = resolveColorFunc(value, opt);
    if (resolvedValue instanceof NullObject) {
      setCache(cacheKey, resolvedValue);
      return resolvedValue;
    }
    [cs, r, g, b, alpha] = resolvedValue;
  } else if (value) {
    const resolvedValue = resolveColorValue(value, opt);
    if (resolvedValue instanceof NullObject) {
      setCache(cacheKey, resolvedValue);
      return resolvedValue;
    }
    [cs, r, g, b, alpha] = resolvedValue;
  }
  let res = "";
  switch (format) {
    case "hex": {
      if (Number.isNaN(r) || Number.isNaN(g) || Number.isNaN(b) || Number.isNaN(alpha) || alpha === 0) {
        setCache(cacheKey, null);
        return new NullObject();
      }
      res = convertRgbToHex([r, g, b, 1]);
      break;
    }
    case "hexAlpha": {
      if (Number.isNaN(r) || Number.isNaN(g) || Number.isNaN(b) || Number.isNaN(alpha)) {
        setCache(cacheKey, null);
        return new NullObject();
      }
      res = convertRgbToHex([r, g, b, alpha]);
      break;
    }
    case VAL_COMP:
    default: {
      switch (cs) {
        case "rgb": {
          if (alpha === 1) {
            res = `${cs}(${r}, ${g}, ${b})`;
          } else {
            res = `${cs}a(${r}, ${g}, ${b}, ${alpha})`;
          }
          break;
        }
        case "lab":
        case "lch":
        case "oklab":
        case "oklch": {
          if (alpha === 1) {
            res = `${cs}(${r} ${g} ${b})`;
          } else {
            res = `${cs}(${r} ${g} ${b} / ${alpha})`;
          }
          break;
        }
        // color()
        default: {
          if (alpha === 1) {
            res = `color(${cs} ${r} ${g} ${b})`;
          } else {
            res = `color(${cs} ${r} ${g} ${b} / ${alpha})`;
          }
        }
      }
    }
  }
  setCache(cacheKey, res);
  return res;
};
const resolve = (value, opt = {}) => {
  opt.nullable = false;
  const resolvedValue = resolveColor(value, opt);
  if (resolvedValue instanceof NullObject) {
    return null;
  }
  return resolvedValue;
};
export {
  resolve,
  resolveColor
};
//# sourceMappingURL=resolve.js.map
