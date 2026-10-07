"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../core");
const _1 = require(".");
const requireFromString = require("require-from-string");
class AjvPack {
    constructor(ajv) {
        this.ajv = ajv;
    }
    validate(schemaKeyRef, data) {
        return core_1.default.prototype.validate.call(this, schemaKeyRef, data);
    }
    compile(schema, meta) {
        return this.getStandalone(this.ajv.compile(schema, meta));
    }
    getSchema(keyRef) {
        const v = this.ajv.getSchema(keyRef);
        if (!v)
            return undefined;
        return this.getStandalone(v);
    }
    getStandalone(v) {
        return requireFromString((0, _1.default)(this.ajv, v));
    }
    addSchema(...args) {
        this.ajv.addSchema.call(this.ajv, ...args);
        return this;
    }
    addKeyword(...args) {
        this.ajv.addKeyword.call(this.ajv, ...args);
        return this;
    }
}
exports.default = AjvPack;
//# sourceMappingURL=instance.js.map