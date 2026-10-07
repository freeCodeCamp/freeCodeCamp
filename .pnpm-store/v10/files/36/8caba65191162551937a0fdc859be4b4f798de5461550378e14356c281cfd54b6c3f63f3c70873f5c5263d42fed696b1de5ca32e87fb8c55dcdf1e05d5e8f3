"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MissingRefError = exports.ValidationError = exports.CodeGen = exports.Name = exports.nil = exports.stringify = exports.str = exports._ = exports.KeywordCxt = exports.Ajv = void 0;
const core_1 = require("./core");
const jtd_1 = require("./vocabularies/jtd");
const jtd_schema_1 = require("./refs/jtd-schema");
const serialize_1 = require("./compile/jtd/serialize");
const parse_1 = require("./compile/jtd/parse");
const META_SCHEMA_ID = "JTD-meta-schema";
class Ajv extends core_1.default {
    constructor(opts = {}) {
        super({
            ...opts,
            jtd: true,
        });
    }
    _addVocabularies() {
        super._addVocabularies();
        this.addVocabulary(jtd_1.default);
    }
    _addDefaultMetaSchema() {
        super._addDefaultMetaSchema();
        if (!this.opts.meta)
            return;
        this.addMetaSchema(jtd_schema_1.default, META_SCHEMA_ID, false);
    }
    defaultMeta() {
        return (this.opts.defaultMeta =
            super.defaultMeta() || (this.getSchema(META_SCHEMA_ID) ? META_SCHEMA_ID : undefined));
    }
    compileSerializer(schema) {
        const sch = this._addSchema(schema);
        return sch.serialize || this._compileSerializer(sch);
    }
    compileParser(schema) {
        const sch = this._addSchema(schema);
        return (sch.parse || this._compileParser(sch));
    }
    _compileSerializer(sch) {
        serialize_1.default.call(this, sch, sch.schema.definitions || {});
        /* istanbul ignore if */
        if (!sch.serialize)
            throw new Error("ajv implementation error");
        return sch.serialize;
    }
    _compileParser(sch) {
        parse_1.default.call(this, sch, sch.schema.definitions || {});
        /* istanbul ignore if */
        if (!sch.parse)
            throw new Error("ajv implementation error");
        return sch.parse;
    }
}
exports.Ajv = Ajv;
module.exports = exports = Ajv;
module.exports.Ajv = Ajv;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Ajv;
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
//# sourceMappingURL=jtd.js.map