"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/** @typedef {import("ajv").default} Ajv */
/** @typedef {import("ajv").Code} Code */
/** @typedef {import("ajv").Name} Name */
/** @typedef {import("ajv").KeywordErrorDefinition} KeywordErrorDefinition */

/**
 * @param {Ajv} ajv ajv
 * @returns {Ajv} ajv with limit keyword
 */
function addLimitKeyword(ajv) {
  const {
    _,
    str,
    KeywordCxt,
    nil,
    Name
  } = require("ajv");

  /**
   * @param {Code | Name} nameOrCode name or code
   * @returns {Code | Name} name or code
   */
  function par(nameOrCode) {
    return nameOrCode instanceof Name ? nameOrCode : _`(${nameOrCode})`;
  }

  /**
   * @param {Code} op op
   * @returns {(xValue: Code, yValue: Code) => Code} code
   */
  function mappend(op) {
    return (xValue, yValue) => xValue === nil ? yValue : yValue === nil ? xValue : _`${par(xValue)} ${op} ${par(yValue)}`;
  }
  const orCode = mappend(_`||`);

  // boolean OR (||) expression with the passed arguments
  /**
   * @param {...Code} args args
   * @returns {Code} code
   */
  function or(...args) {
    return args.reduce(orCode);
  }

  /**
   * @param {string | number} key key
   * @returns {Code} property
   */
  function getProperty(key) {
    return _`[${key}]`;
  }
  const keywords = {
    formatMaximum: {
      okStr: "<=",
      ok: _`<=`,
      fail: _`>`
    },
    formatMinimum: {
      okStr: ">=",
      ok: _`>=`,
      fail: _`<`
    },
    formatExclusiveMaximum: {
      okStr: "<",
      ok: _`<`,
      fail: _`>=`
    },
    formatExclusiveMinimum: {
      okStr: ">",
      ok: _`>`,
      fail: _`<=`
    }
  };

  /** @type {KeywordErrorDefinition} */
  const error = {
    message: ({
      keyword,
      schemaCode
    }) => str`should be ${keywords[(/** @type {keyof typeof keywords} */keyword)].okStr} ${schemaCode}`,
    params: ({
      keyword,
      schemaCode
    }) => _`{comparison: ${keywords[(/** @type {keyof typeof keywords} */keyword)].okStr}, limit: ${schemaCode}}`
  };
  for (const keyword of Object.keys(keywords)) {
    ajv.addKeyword({
      keyword,
      type: "string",
      schemaType: keyword.startsWith("formatExclusive") ? ["string", "boolean"] : ["string", "number"],
      $data: true,
      error,
      code(cxt) {
        const {
          gen,
          data,
          schemaCode,
          keyword,
          it
        } = cxt;
        const {
          opts,
          self
        } = it;
        if (!opts.validateFormats) return;
        const fCxt = new KeywordCxt(it,
        // eslint-disable-next-line jsdoc/no-restricted-syntax
        /** @type {any} */
        self.RULES.all.format.definition, "format");

        /**
         * @param {Name} fmt fmt
         * @returns {Code} code
         */
        function compareCode(fmt) {
          return _`${fmt}.compare(${data}, ${schemaCode}) ${keywords[(/** @type {keyof typeof keywords} */keyword)].fail} 0`;
        }

        /**
         * @returns {void}
         */
        function validate$DataFormat() {
          const fmts = gen.scopeValue("formats", {
            ref: self.formats,
            code: opts.code.formats
          });
          const fmt = gen.const("fmt", _`${fmts}[${fCxt.schemaCode}]`);
          cxt.fail$data(or(_`typeof ${fmt} != "object"`, _`${fmt} instanceof RegExp`, _`typeof ${fmt}.compare != "function"`, compareCode(fmt)));
        }

        /**
         * @returns {void}
         */
        function validateFormat() {
          const format = fCxt.schema;
          const fmtDef = self.formats[format];
          if (!fmtDef || fmtDef === true) {
            return;
          }
          if (typeof fmtDef !== "object" || fmtDef instanceof RegExp || typeof fmtDef.compare !== "function") {
            throw new Error(`"${keyword}": format "${format}" does not define "compare" function`);
          }
          const fmt = gen.scopeValue("formats", {
            key: format,
            ref: fmtDef,
            code: opts.code.formats ? _`${opts.code.formats}${getProperty(format)}` : undefined
          });
          cxt.fail$data(compareCode(fmt));
        }
        if (fCxt.$data) {
          validate$DataFormat();
        } else {
          validateFormat();
        }
      },
      dependencies: ["format"]
    });
  }
  return ajv;
}
var _default = exports.default = addLimitKeyword;