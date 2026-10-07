var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var _hasNum, _numSum, _numMul, _hasPct, _pctSum, _pctMul, _hasDim, _dimSum, _dimSub, _dimMul, _dimDiv, _hasEtc, _etcSum, _etcSub, _etcMul, _etcDiv;
import { calc } from "@csstools/css-calc";
import { TokenType, tokenize } from "@csstools/css-tokenizer";
import { createCacheKey, getCache, CacheItem, setCache, NullObject } from "./cache.js";
import { isString, isStringOrNumber } from "./common.js";
import { resolveVar } from "./css-var.js";
import { roundToPrecision } from "./util.js";
import { VAL_SPEC, SYN_FN_VAR, SYN_FN_CALC, SYN_FN_VAR_START, NUM, ANGLE, LENGTH, SYN_FN_MATH_START } from "./constant.js";
const {
  CloseParen: PAREN_CLOSE,
  Comment: COMMENT,
  Dimension: DIM,
  EOF,
  Function: FUNC,
  OpenParen: PAREN_OPEN,
  Whitespace: W_SPACE
} = TokenType;
const NAMESPACE = "css-calc";
const TRIA = 3;
const HEX = 16;
const MAX_PCT = 100;
const REG_FN_CALC = new RegExp(SYN_FN_CALC);
const REG_FN_CALC_NUM = new RegExp(`^calc\\((${NUM})\\)$`);
const REG_FN_MATH_START = new RegExp(SYN_FN_MATH_START);
const REG_FN_VAR = new RegExp(SYN_FN_VAR);
const REG_FN_VAR_START = new RegExp(SYN_FN_VAR_START);
const REG_OPERATOR = /\s[*+/-]\s/;
const REG_TYPE_DIM = new RegExp(`^(${NUM})(${ANGLE}|${LENGTH})$`);
const REG_TYPE_DIM_PCT = new RegExp(`^(${NUM})(${ANGLE}|${LENGTH}|%)$`);
const REG_TYPE_PCT = new RegExp(`^(${NUM})%$`);
class Calculator {
  /**
   * constructor
   */
  constructor() {
    /* private */
    // number
    __privateAdd(this, _hasNum);
    __privateAdd(this, _numSum);
    __privateAdd(this, _numMul);
    // percentage
    __privateAdd(this, _hasPct);
    __privateAdd(this, _pctSum);
    __privateAdd(this, _pctMul);
    // dimension
    __privateAdd(this, _hasDim);
    __privateAdd(this, _dimSum);
    __privateAdd(this, _dimSub);
    __privateAdd(this, _dimMul);
    __privateAdd(this, _dimDiv);
    // et cetra
    __privateAdd(this, _hasEtc);
    __privateAdd(this, _etcSum);
    __privateAdd(this, _etcSub);
    __privateAdd(this, _etcMul);
    __privateAdd(this, _etcDiv);
    __privateSet(this, _hasNum, false);
    __privateSet(this, _numSum, []);
    __privateSet(this, _numMul, []);
    __privateSet(this, _hasPct, false);
    __privateSet(this, _pctSum, []);
    __privateSet(this, _pctMul, []);
    __privateSet(this, _hasDim, false);
    __privateSet(this, _dimSum, []);
    __privateSet(this, _dimSub, []);
    __privateSet(this, _dimMul, []);
    __privateSet(this, _dimDiv, []);
    __privateSet(this, _hasEtc, false);
    __privateSet(this, _etcSum, []);
    __privateSet(this, _etcSub, []);
    __privateSet(this, _etcMul, []);
    __privateSet(this, _etcDiv, []);
  }
  get hasNum() {
    return __privateGet(this, _hasNum);
  }
  set hasNum(value) {
    __privateSet(this, _hasNum, !!value);
  }
  get numSum() {
    return __privateGet(this, _numSum);
  }
  get numMul() {
    return __privateGet(this, _numMul);
  }
  get hasPct() {
    return __privateGet(this, _hasPct);
  }
  set hasPct(value) {
    __privateSet(this, _hasPct, !!value);
  }
  get pctSum() {
    return __privateGet(this, _pctSum);
  }
  get pctMul() {
    return __privateGet(this, _pctMul);
  }
  get hasDim() {
    return __privateGet(this, _hasDim);
  }
  set hasDim(value) {
    __privateSet(this, _hasDim, !!value);
  }
  get dimSum() {
    return __privateGet(this, _dimSum);
  }
  get dimSub() {
    return __privateGet(this, _dimSub);
  }
  get dimMul() {
    return __privateGet(this, _dimMul);
  }
  get dimDiv() {
    return __privateGet(this, _dimDiv);
  }
  get hasEtc() {
    return __privateGet(this, _hasEtc);
  }
  set hasEtc(value) {
    __privateSet(this, _hasEtc, !!value);
  }
  get etcSum() {
    return __privateGet(this, _etcSum);
  }
  get etcSub() {
    return __privateGet(this, _etcSub);
  }
  get etcMul() {
    return __privateGet(this, _etcMul);
  }
  get etcDiv() {
    return __privateGet(this, _etcDiv);
  }
  /**
   * clear values
   * @returns void
   */
  clear() {
    __privateSet(this, _hasNum, false);
    __privateSet(this, _numSum, []);
    __privateSet(this, _numMul, []);
    __privateSet(this, _hasPct, false);
    __privateSet(this, _pctSum, []);
    __privateSet(this, _pctMul, []);
    __privateSet(this, _hasDim, false);
    __privateSet(this, _dimSum, []);
    __privateSet(this, _dimSub, []);
    __privateSet(this, _dimMul, []);
    __privateSet(this, _dimDiv, []);
    __privateSet(this, _hasEtc, false);
    __privateSet(this, _etcSum, []);
    __privateSet(this, _etcSub, []);
    __privateSet(this, _etcMul, []);
    __privateSet(this, _etcDiv, []);
  }
  /**
   * sort values
   * @param values - values
   * @returns sorted values
   */
  sort(values = []) {
    const arr = [...values];
    if (arr.length > 1) {
      arr.sort((a, b) => {
        let res;
        if (REG_TYPE_DIM_PCT.test(a) && REG_TYPE_DIM_PCT.test(b)) {
          const [, valA, unitA] = a.match(REG_TYPE_DIM_PCT);
          const [, valB, unitB] = b.match(REG_TYPE_DIM_PCT);
          if (unitA === unitB) {
            if (Number(valA) === Number(valB)) {
              res = 0;
            } else if (Number(valA) > Number(valB)) {
              res = 1;
            } else {
              res = -1;
            }
          } else if (unitA > unitB) {
            res = 1;
          } else {
            res = -1;
          }
        } else {
          if (a === b) {
            res = 0;
          } else if (a > b) {
            res = 1;
          } else {
            res = -1;
          }
        }
        return res;
      });
    }
    return arr;
  }
  /**
   * multiply values
   * @returns resolved value
   */
  multiply() {
    const value = [];
    let num;
    if (__privateGet(this, _hasNum)) {
      num = 1;
      for (const i of __privateGet(this, _numMul)) {
        num *= i;
        if (num === 0 || !Number.isFinite(num) || Number.isNaN(num)) {
          break;
        }
      }
      if (!__privateGet(this, _hasPct) && !__privateGet(this, _hasDim) && !this.hasEtc) {
        if (Number.isFinite(num)) {
          num = roundToPrecision(num, HEX);
        }
        value.push(num);
      }
    }
    if (__privateGet(this, _hasPct)) {
      if (typeof num !== "number") {
        num = 1;
      }
      for (const i of __privateGet(this, _pctMul)) {
        num *= i;
        if (num === 0 || !Number.isFinite(num) || Number.isNaN(num)) {
          break;
        }
      }
      if (Number.isFinite(num)) {
        num = `${roundToPrecision(num, HEX)}%`;
      }
      if (!__privateGet(this, _hasDim) && !this.hasEtc) {
        value.push(num);
      }
    }
    if (__privateGet(this, _hasDim)) {
      let dim = "";
      let mul = "";
      let div = "";
      if (__privateGet(this, _dimMul).length) {
        if (__privateGet(this, _dimMul).length === 1) {
          [mul] = __privateGet(this, _dimMul);
        } else {
          mul = `${this.sort(__privateGet(this, _dimMul)).join(" * ")}`;
        }
      }
      if (__privateGet(this, _dimDiv).length) {
        if (__privateGet(this, _dimDiv).length === 1) {
          [div] = __privateGet(this, _dimDiv);
        } else {
          div = `${this.sort(__privateGet(this, _dimDiv)).join(" * ")}`;
        }
      }
      if (Number.isFinite(num)) {
        if (mul) {
          if (div) {
            if (div.includes("*")) {
              dim = calc(`calc(${num} * ${mul} / (${div}))`, {
                toCanonicalUnits: true
              });
            } else {
              dim = calc(`calc(${num} * ${mul} / ${div})`, {
                toCanonicalUnits: true
              });
            }
          } else {
            dim = calc(`calc(${num} * ${mul})`, {
              toCanonicalUnits: true
            });
          }
        } else if (div.includes("*")) {
          dim = calc(`calc(${num} / (${div}))`, {
            toCanonicalUnits: true
          });
        } else {
          dim = calc(`calc(${num} / ${div})`, {
            toCanonicalUnits: true
          });
        }
        value.push(dim.replace(/^calc/, ""));
      } else {
        if (!value.length && num !== void 0) {
          value.push(num);
        }
        if (mul) {
          if (div) {
            if (div.includes("*")) {
              dim = calc(`calc(${mul} / (${div}))`, {
                toCanonicalUnits: true
              });
            } else {
              dim = calc(`calc(${mul} / ${div})`, {
                toCanonicalUnits: true
              });
            }
          } else {
            dim = calc(`calc(${mul})`, {
              toCanonicalUnits: true
            });
          }
          if (value.length) {
            value.push("*", dim.replace(/^calc/, ""));
          } else {
            value.push(dim.replace(/^calc/, ""));
          }
        } else {
          dim = calc(`calc(${div})`, {
            toCanonicalUnits: true
          });
          if (value.length) {
            value.push("/", dim.replace(/^calc/, ""));
          } else {
            value.push("1", "/", dim.replace(/^calc/, ""));
          }
        }
      }
    }
    if (__privateGet(this, _hasEtc)) {
      if (__privateGet(this, _etcMul).length) {
        if (!value.length && num !== void 0) {
          value.push(num);
        }
        const mul = this.sort(__privateGet(this, _etcMul)).join(" * ");
        if (value.length) {
          value.push(`* ${mul}`);
        } else {
          value.push(`${mul}`);
        }
      }
      if (__privateGet(this, _etcDiv).length) {
        const div = this.sort(__privateGet(this, _etcDiv)).join(" * ");
        if (div.includes("*")) {
          if (value.length) {
            value.push(`/ (${div})`);
          } else {
            value.push(`1 / (${div})`);
          }
        } else if (value.length) {
          value.push(`/ ${div}`);
        } else {
          value.push(`1 / ${div}`);
        }
      }
    }
    if (value.length) {
      return value.join(" ");
    }
    return "";
  }
  /**
   * sum values
   * @returns resolved value
   */
  sum() {
    const value = [];
    if (__privateGet(this, _hasNum)) {
      let num = 0;
      for (const i of __privateGet(this, _numSum)) {
        num += i;
        if (!Number.isFinite(num) || Number.isNaN(num)) {
          break;
        }
      }
      value.push(num);
    }
    if (__privateGet(this, _hasPct)) {
      let num = 0;
      for (const i of __privateGet(this, _pctSum)) {
        num += i;
        if (!Number.isFinite(num)) {
          break;
        }
      }
      if (Number.isFinite(num)) {
        num = `${num}%`;
      }
      if (value.length) {
        value.push(`+ ${num}`);
      } else {
        value.push(num);
      }
    }
    if (__privateGet(this, _hasDim)) {
      let dim, sum, sub;
      if (__privateGet(this, _dimSum).length) {
        sum = this.sort(__privateGet(this, _dimSum)).join(" + ");
      }
      if (__privateGet(this, _dimSub).length) {
        sub = this.sort(__privateGet(this, _dimSub)).join(" + ");
      }
      if (sum) {
        if (sub) {
          if (sub.includes("-")) {
            dim = calc(`calc(${sum} - (${sub}))`, {
              toCanonicalUnits: true
            });
          } else {
            dim = calc(`calc(${sum} - ${sub})`, {
              toCanonicalUnits: true
            });
          }
        } else {
          dim = calc(`calc(${sum})`, {
            toCanonicalUnits: true
          });
        }
      } else {
        dim = calc(`calc(-1 * (${sub}))`, {
          toCanonicalUnits: true
        });
      }
      if (value.length) {
        value.push("+", dim.replace(/^calc/, ""));
      } else {
        value.push(dim.replace(/^calc/, ""));
      }
    }
    if (__privateGet(this, _hasEtc)) {
      if (__privateGet(this, _etcSum).length) {
        const sum = this.sort(__privateGet(this, _etcSum)).map((item) => {
          let res;
          if (REG_OPERATOR.test(item) && !item.startsWith("(") && !item.endsWith(")")) {
            res = `(${item})`;
          } else {
            res = item;
          }
          return res;
        }).join(" + ");
        if (value.length) {
          if (__privateGet(this, _etcSum).length > 1) {
            value.push(`+ (${sum})`);
          } else {
            value.push(`+ ${sum}`);
          }
        } else {
          value.push(`${sum}`);
        }
      }
      if (__privateGet(this, _etcSub).length) {
        const sub = this.sort(__privateGet(this, _etcSub)).map((item) => {
          let res;
          if (REG_OPERATOR.test(item) && !item.startsWith("(") && !item.endsWith(")")) {
            res = `(${item})`;
          } else {
            res = item;
          }
          return res;
        }).join(" + ");
        if (value.length) {
          if (__privateGet(this, _etcSub).length > 1) {
            value.push(`- (${sub})`);
          } else {
            value.push(`- ${sub}`);
          }
        } else if (__privateGet(this, _etcSub).length > 1) {
          value.push(`-1 * (${sub})`);
        } else {
          value.push(`-1 * ${sub}`);
        }
      }
    }
    if (value.length) {
      return value.join(" ");
    }
    return "";
  }
}
_hasNum = new WeakMap();
_numSum = new WeakMap();
_numMul = new WeakMap();
_hasPct = new WeakMap();
_pctSum = new WeakMap();
_pctMul = new WeakMap();
_hasDim = new WeakMap();
_dimSum = new WeakMap();
_dimSub = new WeakMap();
_dimMul = new WeakMap();
_dimDiv = new WeakMap();
_hasEtc = new WeakMap();
_etcSum = new WeakMap();
_etcSub = new WeakMap();
_etcMul = new WeakMap();
_etcDiv = new WeakMap();
const sortCalcValues = (values = [], finalize = false) => {
  if (values.length < TRIA) {
    throw new Error(`Unexpected array length ${values.length}.`);
  }
  const start = values.shift();
  if (!isString(start) || !start.endsWith("(")) {
    throw new Error(`Unexpected token ${start}.`);
  }
  const end = values.pop();
  if (end !== ")") {
    throw new Error(`Unexpected token ${end}.`);
  }
  if (values.length === 1) {
    const [value] = values;
    if (!isStringOrNumber(value)) {
      throw new Error(`Unexpected token ${value}.`);
    }
    return `${start}${value}${end}`;
  }
  const sortedValues = [];
  const cal = new Calculator();
  let operator = "";
  const l = values.length;
  for (let i = 0; i < l; i++) {
    const value = values[i];
    if (!isStringOrNumber(value)) {
      throw new Error(`Unexpected token ${value}.`);
    }
    if (value === "*" || value === "/") {
      operator = value;
    } else if (value === "+" || value === "-") {
      const sortedValue = cal.multiply();
      if (sortedValue) {
        sortedValues.push(sortedValue, value);
      }
      cal.clear();
      operator = "";
    } else {
      const numValue = Number(value);
      const strValue = `${value}`;
      switch (operator) {
        case "/": {
          if (Number.isFinite(numValue)) {
            cal.hasNum = true;
            cal.numMul.push(1 / numValue);
          } else if (REG_TYPE_PCT.test(strValue)) {
            const [, val] = strValue.match(REG_TYPE_PCT);
            cal.hasPct = true;
            cal.pctMul.push(MAX_PCT * MAX_PCT / Number(val));
          } else if (REG_TYPE_DIM.test(strValue)) {
            cal.hasDim = true;
            cal.dimDiv.push(strValue);
          } else {
            cal.hasEtc = true;
            cal.etcDiv.push(strValue);
          }
          break;
        }
        case "*":
        default: {
          if (Number.isFinite(numValue)) {
            cal.hasNum = true;
            cal.numMul.push(numValue);
          } else if (REG_TYPE_PCT.test(strValue)) {
            const [, val] = strValue.match(REG_TYPE_PCT);
            cal.hasPct = true;
            cal.pctMul.push(Number(val));
          } else if (REG_TYPE_DIM.test(strValue)) {
            cal.hasDim = true;
            cal.dimMul.push(strValue);
          } else {
            cal.hasEtc = true;
            cal.etcMul.push(strValue);
          }
        }
      }
    }
    if (i === l - 1) {
      const sortedValue = cal.multiply();
      if (sortedValue) {
        sortedValues.push(sortedValue);
      }
      cal.clear();
      operator = "";
    }
  }
  let resolvedValue = "";
  if (finalize && (sortedValues.includes("+") || sortedValues.includes("-"))) {
    const finalizedValues = [];
    cal.clear();
    operator = "";
    const l2 = sortedValues.length;
    for (let i = 0; i < l2; i++) {
      const value = sortedValues[i];
      if (isStringOrNumber(value)) {
        if (value === "+" || value === "-") {
          operator = value;
        } else {
          const numValue = Number(value);
          const strValue = `${value}`;
          switch (operator) {
            case "-": {
              if (Number.isFinite(numValue)) {
                cal.hasNum = true;
                cal.numSum.push(-1 * numValue);
              } else if (REG_TYPE_PCT.test(strValue)) {
                const [, val] = strValue.match(REG_TYPE_PCT);
                cal.hasPct = true;
                cal.pctSum.push(-1 * Number(val));
              } else if (REG_TYPE_DIM.test(strValue)) {
                cal.hasDim = true;
                cal.dimSub.push(strValue);
              } else {
                cal.hasEtc = true;
                cal.etcSub.push(strValue);
              }
              break;
            }
            case "+":
            default: {
              if (Number.isFinite(numValue)) {
                cal.hasNum = true;
                cal.numSum.push(numValue);
              } else if (REG_TYPE_PCT.test(strValue)) {
                const [, val] = strValue.match(REG_TYPE_PCT);
                cal.hasPct = true;
                cal.pctSum.push(Number(val));
              } else if (REG_TYPE_DIM.test(strValue)) {
                cal.hasDim = true;
                cal.dimSum.push(strValue);
              } else {
                cal.hasEtc = true;
                cal.etcSum.push(strValue);
              }
            }
          }
        }
      }
      if (i === l2 - 1) {
        const sortedValue = cal.sum();
        if (sortedValue) {
          finalizedValues.push(sortedValue);
        }
        cal.clear();
        operator = "";
      }
    }
    resolvedValue = finalizedValues.join(" ").replace(/\+\s-/g, "- ");
  } else {
    resolvedValue = sortedValues.join(" ").replace(/\+\s-/g, "- ");
  }
  if (resolvedValue.startsWith("(") && resolvedValue.endsWith(")") && resolvedValue.lastIndexOf("(") === 0 && resolvedValue.indexOf(")") === resolvedValue.length - 1) {
    resolvedValue = resolvedValue.replace(/^\(/, "").replace(/\)$/, "");
  }
  return `${start}${resolvedValue}${end}`;
};
const serializeCalc = (value, opt = {}) => {
  const { format = "" } = opt;
  if (isString(value)) {
    if (!REG_FN_VAR_START.test(value) || format !== VAL_SPEC) {
      return value;
    }
    value = value.toLowerCase().trim();
  } else {
    throw new TypeError(`${value} is not a string.`);
  }
  const cacheKey = createCacheKey(
    {
      namespace: NAMESPACE,
      name: "serializeCalc",
      value
    },
    opt
  );
  const cachedResult = getCache(cacheKey);
  if (cachedResult instanceof CacheItem) {
    return cachedResult.item;
  }
  const items = tokenize({ css: value }).map((token) => {
    const [type, value2] = token;
    let res = "";
    if (type !== W_SPACE && type !== COMMENT) {
      res = value2;
    }
    return res;
  }).filter((v) => v);
  let startIndex = items.findLastIndex((item) => /\($/.test(item));
  while (startIndex) {
    const endIndex = items.findIndex((item, index) => {
      return item === ")" && index > startIndex;
    });
    const slicedValues = items.slice(startIndex, endIndex + 1);
    let serializedValue = sortCalcValues(slicedValues);
    if (REG_FN_VAR_START.test(serializedValue)) {
      serializedValue = calc(serializedValue, {
        toCanonicalUnits: true
      });
    }
    items.splice(startIndex, endIndex - startIndex + 1, serializedValue);
    startIndex = items.findLastIndex((item) => /\($/.test(item));
  }
  const serializedCalc = sortCalcValues(items, true);
  setCache(cacheKey, serializedCalc);
  return serializedCalc;
};
const resolveDimension = (token, opt = {}) => {
  if (!Array.isArray(token)) {
    throw new TypeError(`${token} is not an array.`);
  }
  const [, , , , detail = {}] = token;
  const { unit, value } = detail;
  const { dimension = {} } = opt;
  if (unit === "px") {
    return `${value}${unit}`;
  }
  const relativeValue = Number(value);
  if (unit && Number.isFinite(relativeValue)) {
    let pixelValue;
    if (Object.hasOwnProperty.call(dimension, unit)) {
      pixelValue = dimension[unit];
    } else if (typeof dimension.callback === "function") {
      pixelValue = dimension.callback(unit);
    }
    pixelValue = Number(pixelValue);
    if (Number.isFinite(pixelValue)) {
      return `${relativeValue * pixelValue}px`;
    }
  }
  return new NullObject();
};
const parseTokens = (tokens, opt = {}) => {
  if (!Array.isArray(tokens)) {
    throw new TypeError(`${tokens} is not an array.`);
  }
  const { format = "" } = opt;
  const mathFunc = /* @__PURE__ */ new Set();
  let nest = 0;
  const res = [];
  while (tokens.length) {
    const token = tokens.shift();
    if (!Array.isArray(token)) {
      throw new TypeError(`${token} is not an array.`);
    }
    const [type = "", value = ""] = token;
    switch (type) {
      case DIM: {
        if (format === VAL_SPEC && !mathFunc.has(nest)) {
          res.push(value);
        } else {
          const resolvedValue = resolveDimension(token, opt);
          if (isString(resolvedValue)) {
            res.push(resolvedValue);
          } else {
            res.push(value);
          }
        }
        break;
      }
      case FUNC:
      case PAREN_OPEN: {
        res.push(value);
        nest++;
        if (REG_FN_MATH_START.test(value)) {
          mathFunc.add(nest);
        }
        break;
      }
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
        if (mathFunc.has(nest)) {
          mathFunc.delete(nest);
        }
        nest--;
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
  return res;
};
const cssCalc = (value, opt = {}) => {
  const { format = "" } = opt;
  if (isString(value)) {
    if (REG_FN_VAR.test(value)) {
      if (format === VAL_SPEC) {
        return value;
      } else {
        const resolvedValue2 = resolveVar(value, opt);
        if (isString(resolvedValue2)) {
          return resolvedValue2;
        } else {
          return "";
        }
      }
    } else if (!REG_FN_CALC.test(value)) {
      return value;
    }
    value = value.toLowerCase().trim();
  } else {
    throw new TypeError(`${value} is not a string.`);
  }
  const cacheKey = createCacheKey(
    {
      namespace: NAMESPACE,
      name: "cssCalc",
      value
    },
    opt
  );
  const cachedResult = getCache(cacheKey);
  if (cachedResult instanceof CacheItem) {
    return cachedResult.item;
  }
  const tokens = tokenize({ css: value });
  const values = parseTokens(tokens, opt);
  let resolvedValue = calc(values.join(""), {
    toCanonicalUnits: true
  });
  if (REG_FN_VAR_START.test(value)) {
    if (REG_TYPE_DIM_PCT.test(resolvedValue)) {
      const [, val, unit] = resolvedValue.match(
        REG_TYPE_DIM_PCT
      );
      resolvedValue = `${roundToPrecision(Number(val), HEX)}${unit}`;
    }
    if (resolvedValue && !REG_FN_VAR_START.test(resolvedValue) && format === VAL_SPEC) {
      resolvedValue = `calc(${resolvedValue})`;
    }
  }
  if (format === VAL_SPEC) {
    if (/\s[-+*/]\s/.test(resolvedValue) && !resolvedValue.includes("NaN")) {
      resolvedValue = serializeCalc(resolvedValue, opt);
    } else if (REG_FN_CALC_NUM.test(resolvedValue)) {
      const [, val] = resolvedValue.match(REG_FN_CALC_NUM);
      resolvedValue = `calc(${roundToPrecision(Number(val), HEX)})`;
    }
  }
  setCache(cacheKey, resolvedValue);
  return resolvedValue;
};
export {
  Calculator,
  cssCalc,
  parseTokens,
  resolveDimension,
  serializeCalc,
  sortCalcValues
};
//# sourceMappingURL=css-calc.js.map
