"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MissingRefError = exports.ValidationError = exports.CodeGen = exports.Name = exports.nil = exports.stringify = exports.str = exports._ = exports.KeywordCxt = exports.Ajv2020 = void 0;
const core_1 = require("./core");
const draft2020_1 = require("./vocabularies/draft2020");
const discriminator_1 = require("./vocabularies/discriminator");
const json_schema_2020_12_1 = require("./refs/json-schema-2020-12");
const META_SCHEMA_ID = "https://json-schema.org/draft/2020-12/schema";
class Ajv2020 extends core_1.default {
    constructor(opts = {}) {
        super({
            ...opts,
            dynamicRef: true,
            next: true,
            unevaluated: true,
        });
    }
    _addVocabularies() {
        super._addVocabularies();
        draft2020_1.default.forEach((v) => this.addVocabulary(v));
        if (this.opts.discriminator)
            this.addKeyword(discriminator_1.default);
    }
    _addDefaultMetaSchema() {
        super._addDefaultMetaSchema();
        const { $data, meta } = this.opts;
        if (!meta)
            return;
        json_schema_2020_12_1.default.call(this, $data);
        this.refs["http://json-schema.org/schema"] = META_SCHEMA_ID;
    }
    defaultMeta() {
        return (this.opts.defaultMeta =
            super.defaultMeta() || (this.getSchema(META_SCHEMA_ID) ? META_SCHEMA_ID : undefined));
    }
}
exports.Ajv2020 = Ajv2020;
module.exports = exports = Ajv2020;
module.exports.Ajv2020 = Ajv2020;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Ajv2020;
var validate_1 = require("./compile/validate");
Object.defineProperty(exports, "KeywordCxt", { enumerable: true, get: function () { return validate_1.KeywordCxt; } });
var codegen_1 = require("./compile/codegen");
Object.defineProperty(exports, "_", { enumerable: true, get: function () { return codegen_1._; } });
Object.defineProperty(exports, "str", { enumerable: true, get: function () { return codegen_1.str; } });
Object.defineProperty(exports, "stringify", { enumerable: true, get: function () { return codegen_1.stringify; } });
Object.defineProperty(exports, "nil", { enumerable: true, get: function () { return codegen_1.nil; } });
Object.defineProperty(exports, "Name", { enumerable: true, get: function () { return codegen_1.Name; } });
Object.defineProperty(exports, "CodeGen", { enumerable: true, get: function () { return codegen_1.CodeGen; } });
var validation_error_1 = require("./runtime/validation_error");
Object.defineProperty(exports, "ValidationError", { enumerable: true, get: function () { return validation_error_1.default; } });
var ref_error_1 = require("./compile/ref_error");
Object.defineProperty(exports, "MissingRefError", { enumerable: true, get: function () { return ref_error_1.default; } });
//# sourceMappingURL=2020.js.map