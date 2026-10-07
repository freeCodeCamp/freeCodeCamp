"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TsIntrospectionVisitor = void 0;
const tslib_1 = require("tslib");
const auto_bind_1 = tslib_1.__importDefault(require("auto-bind"));
const visitor_js_1 = require("./visitor.js");
class TsIntrospectionVisitor extends visitor_js_1.TsVisitor {
    constructor(schema, pluginConfig = {}, typesToInclude) {
        super(schema, pluginConfig);
        this.typesToInclude = [];
        this.typesToInclude = typesToInclude;
        (0, auto_bind_1.default)(this);
    }
    DirectiveDefinition() {
        return null;
    }
    ObjectTypeDefinition(node, key, parent) {
        const name = node.name;
        if (this.typesToInclude.some(type => type.name === name)) {
            return super.ObjectTypeDefinition(node, key, parent);
        }
        return null;
    }
    EnumTypeDefinition(node) {
        const name = node.name;
        if (this.typesToInclude.some(type => type.name === name)) {
            return super.EnumTypeDefinition(node);
        }
        return null;
    }
}
exports.TsIntrospectionVisitor = TsIntrospectionVisitor;
