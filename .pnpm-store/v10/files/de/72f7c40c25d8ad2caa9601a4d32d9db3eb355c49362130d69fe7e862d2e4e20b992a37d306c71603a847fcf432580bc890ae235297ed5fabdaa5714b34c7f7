import { createCacheKey, getCache, CacheItem, setCache } from "./cache.js";
import { isString } from "./common.js";
import { splitValue, isColor } from "./util.js";
import { NUM, ANGLE, PCT, LENGTH, CS_RECT, CS_HUE, NUM_POSITIVE } from "./constant.js";
const NAMESPACE = "css-gradient";
const DIM_ANGLE = `${NUM}(?:${ANGLE})`;
const DIM_ANGLE_PCT = `${DIM_ANGLE}|${PCT}`;
const DIM_LEN = `${NUM}(?:${LENGTH})|0`;
const DIM_LEN_PCT = `${DIM_LEN}|${PCT}`;
const DIM_LEN_PCT_POSI = `${NUM_POSITIVE}(?:${LENGTH}|%)|0`;
const DIM_LEN_POSI = `${NUM_POSITIVE}(?:${LENGTH})|0`;
const CTR = "center";
const L_R = "left|right";
const T_B = "top|bottom";
const S_E = "start|end";
const AXIS_X = `${L_R}|x-(?:${S_E})`;
const AXIS_Y = `${T_B}|y-(?:${S_E})`;
const BLOCK = `block-(?:${S_E})`;
const INLINE = `inline-(?:${S_E})`;
const POS_1 = `${CTR}|${AXIS_X}|${AXIS_Y}|${BLOCK}|${INLINE}|${DIM_LEN_PCT}`;
const POS_2 = [
  `(?:${CTR}|${AXIS_X})\\s+(?:${CTR}|${AXIS_Y})`,
  `(?:${CTR}|${AXIS_Y})\\s+(?:${CTR}|${AXIS_X})`,
  `(?:${CTR}|${AXIS_X}|${DIM_LEN_PCT})\\s+(?:${CTR}|${AXIS_Y}|${DIM_LEN_PCT})`,
  `(?:${CTR}|${BLOCK})\\s+(?:${CTR}|${INLINE})`,
  `(?:${CTR}|${INLINE})\\s+(?:${CTR}|${BLOCK})`,
  `(?:${CTR}|${S_E})\\s+(?:${CTR}|${S_E})`
].join("|");
const POS_4 = [
  `(?:${AXIS_X})\\s+(?:${DIM_LEN_PCT})\\s+(?:${AXIS_Y})\\s+(?:${DIM_LEN_PCT})`,
  `(?:${AXIS_Y})\\s+(?:${DIM_LEN_PCT})\\s+(?:${AXIS_X})\\s+(?:${DIM_LEN_PCT})`,
  `(?:${BLOCK})\\s+(?:${DIM_LEN_PCT})\\s+(?:${INLINE})\\s+(?:${DIM_LEN_PCT})`,
  `(?:${INLINE})\\s+(?:${DIM_LEN_PCT})\\s+(?:${BLOCK})\\s+(?:${DIM_LEN_PCT})`,
  `(?:${S_E})\\s+(?:${DIM_LEN_PCT})\\s+(?:${S_E})\\s+(?:${DIM_LEN_PCT})`
].join("|");
const RAD_EXTENT = "(?:clos|farth)est-(?:corner|side)";
const RAD_SIZE = [
  `${RAD_EXTENT}(?:\\s+${RAD_EXTENT})?`,
  `${DIM_LEN_POSI}`,
  `(?:${DIM_LEN_PCT_POSI})\\s+(?:${DIM_LEN_PCT_POSI})`
].join("|");
const RAD_SHAPE = "circle|ellipse";
const FROM_ANGLE = `from\\s+${DIM_ANGLE}`;
const AT_POSITION = `at\\s+(?:${POS_1}|${POS_2}|${POS_4})`;
const TO_SIDE_CORNER = `to\\s+(?:(?:${L_R})(?:\\s(?:${T_B}))?|(?:${T_B})(?:\\s(?:${L_R}))?)`;
const IN_COLOR_SPACE = `in\\s+(?:${CS_RECT}|${CS_HUE})`;
const REG_GRAD = /^(?:repeating-)?(?:conic|linear|radial)-gradient\(/;
const REG_GRAD_CAPT = /^((?:repeating-)?(?:conic|linear|radial)-gradient)\(/;
const getGradientType = (value) => {
  if (isString(value)) {
    value = value.trim();
    if (REG_GRAD.test(value)) {
      const [, type] = value.match(REG_GRAD_CAPT);
      return type;
    }
  }
  return "";
};
const validateGradientLine = (value, type) => {
  if (isString(value) && isString(type)) {
    value = value.trim();
    type = type.trim();
    let lineSyntax = "";
    if (/^(?:repeating-)?linear-gradient$/.test(type)) {
      lineSyntax = [
        `(?:${DIM_ANGLE}|${TO_SIDE_CORNER})(?:\\s+${IN_COLOR_SPACE})?`,
        `${IN_COLOR_SPACE}(?:\\s+(?:${DIM_ANGLE}|${TO_SIDE_CORNER}))?`
      ].join("|");
    } else if (/^(?:repeating-)?radial-gradient$/.test(type)) {
      lineSyntax = [
        `(?:${RAD_SHAPE})(?:\\s+(?:${RAD_SIZE}))?(?:\\s+${AT_POSITION})?(?:\\s+${IN_COLOR_SPACE})?`,
        `(?:${RAD_SIZE})(?:\\s+(?:${RAD_SHAPE}))?(?:\\s+${AT_POSITION})?(?:\\s+${IN_COLOR_SPACE})?`,
        `${AT_POSITION}(?:\\s+${IN_COLOR_SPACE})?`,
        `${IN_COLOR_SPACE}(?:\\s+${RAD_SHAPE})(?:\\s+(?:${RAD_SIZE}))?(?:\\s+${AT_POSITION})?`,
        `${IN_COLOR_SPACE}(?:\\s+${RAD_SIZE})(?:\\s+(?:${RAD_SHAPE}))?(?:\\s+${AT_POSITION})?`,
        `${IN_COLOR_SPACE}(?:\\s+${AT_POSITION})?`
      ].join("|");
    } else if (/^(?:repeating-)?conic-gradient$/.test(type)) {
      lineSyntax = [
        `${FROM_ANGLE}(?:\\s+${AT_POSITION})?(?:\\s+${IN_COLOR_SPACE})?`,
        `${AT_POSITION}(?:\\s+${IN_COLOR_SPACE})?`,
        `${IN_COLOR_SPACE}(?:\\s+${FROM_ANGLE})?(?:\\s+${AT_POSITION})?`
      ].join("|");
    }
    if (lineSyntax) {
      const reg = new RegExp(`^(?:${lineSyntax})$`);
      return reg.test(value);
    }
  }
  return false;
};
const validateColorStopList = (list, type, opt = {}) => {
  if (Array.isArray(list) && list.length > 1) {
    const dimension = /^(?:repeating-)?conic-gradient$/.test(type) ? DIM_ANGLE_PCT : DIM_LEN_PCT;
    const regColorHint = new RegExp(`^(?:${dimension})$`);
    const regDimension = new RegExp(`(?:\\s+(?:${dimension})){1,2}$`);
    const arr = [];
    for (const item of list) {
      if (isString(item)) {
        if (regColorHint.test(item)) {
          arr.push("hint");
        } else {
          const color = item.replace(regDimension, "");
          if (isColor(color, opt)) {
            arr.push("color");
          } else {
            return false;
          }
        }
      }
    }
    const value = arr.join(",");
    return /^color(?:,(?:hint,)?color)+$/.test(value);
  }
  return false;
};
const parseGradient = (value, opt = {}) => {
  if (isString(value)) {
    value = value.trim();
    const cacheKey = createCacheKey(
      {
        namespace: NAMESPACE,
        name: "parseGradient",
        value
      },
      opt
    );
    const cachedResult = getCache(cacheKey);
    if (cachedResult instanceof CacheItem) {
      if (cachedResult.isNull) {
        return null;
      }
      return cachedResult.item;
    }
    const type = getGradientType(value);
    const gradValue = value.replace(REG_GRAD, "").replace(/\)$/, "");
    if (type && gradValue) {
      const [lineOrColorStop = "", ...colorStops] = splitValue(gradValue, {
        delimiter: ","
      });
      const dimension = /^(?:repeating-)?conic-gradient$/.test(type) ? DIM_ANGLE_PCT : DIM_LEN_PCT;
      const regDimension = new RegExp(`(?:\\s+(?:${dimension})){1,2}$`);
      let isColorStop = false;
      if (regDimension.test(lineOrColorStop)) {
        const colorStop = lineOrColorStop.replace(regDimension, "");
        if (isColor(colorStop, opt)) {
          isColorStop = true;
        }
      } else if (isColor(lineOrColorStop, opt)) {
        isColorStop = true;
      }
      if (isColorStop) {
        colorStops.unshift(lineOrColorStop);
        const valid = validateColorStopList(colorStops, type, opt);
        if (valid) {
          const res = {
            value,
            type,
            colorStopList: colorStops
          };
          setCache(cacheKey, res);
          return res;
        }
      } else if (colorStops.length > 1) {
        const gradientLine = lineOrColorStop;
        const valid = validateGradientLine(gradientLine, type) && validateColorStopList(colorStops, type, opt);
        if (valid) {
          const res = {
            value,
            type,
            gradientLine,
            colorStopList: colorStops
          };
          setCache(cacheKey, res);
          return res;
        }
      }
    }
    setCache(cacheKey, null);
    return null;
  }
  return null;
};
const isGradient = (value, opt = {}) => {
  const gradient = parseGradient(value, opt);
  return gradient !== null;
};
export {
  getGradientType,
  isGradient,
  parseGradient,
  validateColorStopList,
  validateGradientLine
};
//# sourceMappingURL=css-gradient.js.map
