/**
 * constant
 */

/* values and units */
const _DIGIT = '(?:0|[1-9]\\d*)';
const _COMPARE = 'clamp|max|min';
const _EXPO = 'exp|hypot|log|pow|sqrt';
const _SIGN = 'abs|sign';
const _STEP = 'mod|rem|round';
const _TRIG = 'a?(?:cos|sin|tan)|atan2';
const _MATH = `${_COMPARE}|${_EXPO}|${_SIGN}|${_STEP}|${_TRIG}`;
const _CALC = `calc|${_MATH}`;
const _VAR = `var|${_CALC}`;
export const ANGLE = 'deg|g?rad|turn';
export const LENGTH =
  '[cm]m|[dls]?v(?:[bhiw]|max|min)|in|p[ctx]|q|r?(?:[cl]h|cap|e[mx]|ic)';
export const NUM = `[+-]?(?:${_DIGIT}(?:\\.\\d*)?|\\.\\d+)(?:e-?${_DIGIT})?`;
export const NUM_POSITIVE = `\\+?(?:${_DIGIT}(?:\\.\\d*)?|\\.\\d+)(?:e-?${_DIGIT})?`;
export const NONE = 'none';
export const PCT = `${NUM}%`;
export const SYN_FN_CALC = `^(?:${_CALC})\\(|(?<=[*\\/\\s\\(])(?:${_CALC})\\(`;
export const SYN_FN_MATH_START = `^(?:${_MATH})\\($`;
export const SYN_FN_VAR = '^var\\(|(?<=[*\\/\\s\\(])var\\(';
export const SYN_FN_VAR_START = `^(?:${_VAR})\\(`;

/* colors */
const _ALPHA = `(?:\\s*\\/\\s*(?:${NUM}|${PCT}|${NONE}))?`;
const _ALPHA_LV3 = `(?:\\s*,\\s*(?:${NUM}|${PCT}))?`;
const _COLOR_FUNC = '(?:ok)?l(?:ab|ch)|color|hsla?|hwb|rgba?';
const _COLOR_KEY = '[a-z]+|#[\\da-f]{3}|#[\\da-f]{4}|#[\\da-f]{6}|#[\\da-f]{8}';
const _CS_HUE = '(?:ok)?lch|hsl|hwb';
const _CS_HUE_ARC = '(?:de|in)creasing|longer|shorter';
const _NUM_ANGLE = `${NUM}(?:${ANGLE})?`;
const _NUM_ANGLE_NONE = `(?:${NUM}(?:${ANGLE})?|${NONE})`;
const _NUM_PCT_NONE = `(?:${NUM}|${PCT}|${NONE})`;
export const CS_HUE = `(?:${_CS_HUE})(?:\\s(?:${_CS_HUE_ARC})\\shue)?`;
export const CS_HUE_CAPT = `(${_CS_HUE})(?:\\s(${_CS_HUE_ARC})\\shue)?`;
export const CS_LAB = '(?:ok)?lab';
export const CS_LCH = '(?:ok)?lch';
export const CS_SRGB = 'srgb(?:-linear)?';
export const CS_RGB = `(?:a98|prophoto)-rgb|display-p3|rec2020|${CS_SRGB}`;
export const CS_XYZ = 'xyz(?:-d(?:50|65))?';
export const CS_RECT = `${CS_LAB}|${CS_RGB}|${CS_XYZ}`;
export const CS_MIX = `${CS_HUE}|${CS_RECT}`;
export const FN_COLOR = 'color(';
export const FN_MIX = 'color-mix(';
export const FN_REL = `(?:${_COLOR_FUNC})\\(\\s*from\\s+`;
export const FN_REL_CAPT = `(${_COLOR_FUNC})\\(\\s*from\\s+`;
export const FN_VAR = 'var(';
export const SYN_FN_COLOR = `(?:${CS_RGB}|${CS_XYZ})(?:\\s+${_NUM_PCT_NONE}){3}${_ALPHA}`;
export const SYN_FN_REL = `^${FN_REL}|(?<=[\\s])${FN_REL}`;
export const SYN_HSL = `${_NUM_ANGLE_NONE}(?:\\s+${_NUM_PCT_NONE}){2}${_ALPHA}`;
export const SYN_HSL_LV3 = `${_NUM_ANGLE}(?:\\s*,\\s*${PCT}){2}${_ALPHA_LV3}`;
export const SYN_LCH = `(?:${_NUM_PCT_NONE}\\s+){2}${_NUM_ANGLE_NONE}${_ALPHA}`;
export const SYN_MOD = `${_NUM_PCT_NONE}(?:\\s+${_NUM_PCT_NONE}){2}${_ALPHA}`;
export const SYN_RGB_LV3 = `(?:${NUM}(?:\\s*,\\s*${NUM}){2}|${PCT}(?:\\s*,\\s*${PCT}){2})${_ALPHA_LV3}`;
export const SYN_COLOR_TYPE = `${_COLOR_KEY}|hsla?\\(\\s*${SYN_HSL_LV3}\\s*\\)|rgba?\\(\\s*${SYN_RGB_LV3}\\s*\\)|(?:hsla?|hwb)\\(\\s*${SYN_HSL}\\s*\\)|(?:(?:ok)?lab|rgba?)\\(\\s*${SYN_MOD}\\s*\\)|(?:ok)?lch\\(\\s*${SYN_LCH}\\s*\\)|color\\(\\s*${SYN_FN_COLOR}\\s*\\)`;
export const SYN_MIX_PART = `(?:${SYN_COLOR_TYPE})(?:\\s+${PCT})?`;
export const SYN_MIX = `color-mix\\(\\s*in\\s+(?:${CS_MIX})\\s*,\\s*${SYN_MIX_PART}\\s*,\\s*${SYN_MIX_PART}\\s*\\)`;
export const SYN_MIX_CAPT = `color-mix\\(\\s*in\\s+(${CS_MIX})\\s*,\\s*(${SYN_MIX_PART})\\s*,\\s*(${SYN_MIX_PART})\\s*\\)`;

/* formats */
export const VAL_COMP = 'computedValue';
export const VAL_MIX = 'mixValue';
export const VAL_SPEC = 'specifiedValue';
