"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/** @typedef {import("ajv").Ajv} Ajv */

/**
 *
 * @param {Ajv} ajv
 * @param {string} keyword
 * @param {any} definition
 */
function addKeyword(ajv, keyword, definition) {
  let customRuleCode;

  try {
    // @ts-ignore
    // eslint-disable-next-line global-require
    customRuleCode = require("ajv/lib/dotjs/custom"); // @ts-ignore

    const {
      RULES
    } = ajv;
    let ruleGroup;

    for (let i = 0; i < RULES.length; i++) {
      const rg = RULES[i];

      if (typeof rg.type === "undefined") {
        ruleGroup = rg;
        break;
      }
    }

    const rule = {
      keyword,
      definition,
      custom: true,
      code: customRuleCode,
      implements: definition.implements
    };
    ruleGroup.rules.unshift(rule);
    RULES.custom[keyword] = rule;
    RULES.keywords[keyword] = true;
    RULES.all[keyword] = true;
  } catch (e) {// Nothing, fallback
  }
}
/**
 *
 * @param {Ajv} ajv
 * @returns {Ajv}
 */


function addUndefinedAsNullKeyword(ajv) {
  // There is workaround for old versions of ajv, where `before` is not implemented
  addKeyword(ajv, "undefinedAsNull", {
    modifying: true,

    /**
     * @param {boolean} kwVal
     * @param {unknown} data
     * @param {any} parentSchema
     * @param {string} dataPath
     * @param {unknown} parentData
     * @param {number | string} parentDataProperty
     * @return {boolean}
     */
    validate(kwVal, data, parentSchema, dataPath, parentData, parentDataProperty) {
      if (kwVal && parentSchema && typeof parentSchema.enum !== "undefined" && parentData && typeof parentDataProperty === "number") {
        const idx =
        /** @type {number} */
        parentDataProperty;
        const parentDataRef =
        /** @type {any[]} */
        parentData;

        if (typeof parentDataRef[idx] === "undefined") {
          parentDataRef[idx] = null;
        }
      }

      return true;
    }

  });
  return ajv;
}

var _default = addUndefinedAsNullKeyword;
exports.default = _default;