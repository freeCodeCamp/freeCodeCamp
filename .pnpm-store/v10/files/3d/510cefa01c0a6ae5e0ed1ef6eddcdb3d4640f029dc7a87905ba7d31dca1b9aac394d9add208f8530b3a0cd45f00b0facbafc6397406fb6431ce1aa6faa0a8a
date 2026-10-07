"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatLimitDefinition = void 0;
const ajv_1 = require("ajv");
const codegen_1 = require("ajv/dist/compile/codegen");
const ops = codegen_1.operators;
const KWDs = {
    formatMaximum: { okStr: "<=", ok: ops.LTE, fail: ops.GT },
    formatMinimum: { okStr: ">=", ok: ops.GTE, fail: ops.LT },
    formatExclusiveMaximum: { okStr: "<", ok: ops.LT, fail: ops.GTE },
    formatExclusiveMinimum: { okStr: ">", ok: ops.GT, fail: ops.LTE },
};
const error = {
    message: ({ keyword, schemaCode }) => codegen_1.str `should be ${KWDs[keyword].okStr} ${schemaCode}`,
    params: ({ keyword, schemaCode }) => codegen_1._ `{comparison: ${KWDs[keyword].okStr}, limit: ${schemaCode}}`,
};
exports.formatLimitDefinition = {
    keyword: Object.keys(KWDs),
    type: "string",
    schemaType: "string",
    $data: true,
    error,
    code(cxt) {
        const { gen, data, schemaCode, keyword, it } = cxt;
        const { opts, self } = it;
        if (!opts.validateFormats)
            return;
        const fCxt = new ajv_1.KeywordCxt(it, self.RULES.all.format.definition, "format");
        if (fCxt.$data)
            validate$DataFormat();
        else
            validateFormat();
        function validate$DataFormat() {
            const fmts = gen.scopeValue("formats", {
                ref: self.formats,
                code: opts.code.formats,
            });
            const fmt = gen.const("fmt", codegen_1._ `${fmts}[${fCxt.schemaCode}]`);
            cxt.fail$data(codegen_1.or(codegen_1._ `typeof ${fmt} != "object"`, codegen_1._ `${fmt} instanceof RegExp`, codegen_1._ `typeof ${fmt}.compare != "function"`, compareCode(fmt)));
        }
        function validateFormat() {
            const format = fCxt.schema;
            const fmtDef = self.formats[format];
            if (!fmtDef || fmtDef === true)
                return;
            if (typeof fmtDef != "object" ||
                fmtDef instanceof RegExp ||
                typeof fmtDef.compare != "function") {
                throw new Error(`"${keyword}": format "${format}" does not define "compare" function`);
            }
            const fmt = gen.scopeValue("formats", {
                key: format,
                ref: fmtDef,
                code: opts.code.formats ? codegen_1._ `${opts.code.formats}${codegen_1.getProperty(format)}` : undefined,
            });
            cxt.fail$data(compareCode(fmt));
        }
        function compareCode(fmt) {
            return codegen_1._ `${fmt}.compare(${data}, ${schemaCode}) ${KWDs[keyword].fail} 0`;
        }
    },
    dependencies: ["format"],
};
const formatLimitPlugin = (ajv) => {
    ajv.addKeyword(exports.formatLimitDefinition);
    return ajv;
};
exports.default = formatLimitPlugin;
//# sourceMappingURL=limit.js.map