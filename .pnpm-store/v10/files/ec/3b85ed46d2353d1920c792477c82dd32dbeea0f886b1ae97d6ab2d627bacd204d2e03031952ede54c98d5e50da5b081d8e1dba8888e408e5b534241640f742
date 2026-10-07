"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListComposer = void 0;
const graphql_1 = require("./graphql");
const typeHelpers_1 = require("./utils/typeHelpers");
const NonNullComposer_1 = require("./NonNullComposer");
class ListComposer {
    constructor(type) {
        this.ofType = type;
    }
    getType() {
        return new graphql_1.GraphQLList(this.ofType.getType());
    }
    getTypeName() {
        return `[${this.ofType.getTypeName()}]`;
    }
    getUnwrappedTC() {
        let tc = this;
        while (!(0, typeHelpers_1.isNamedTypeComposer)(tc)) {
            tc = tc.ofType;
        }
        return tc;
    }
    getTypePlural() {
        return new ListComposer(this);
    }
    getTypeNonNull() {
        return new NonNullComposer_1.NonNullComposer(this);
    }
    get List() {
        return new ListComposer(this);
    }
    get NonNull() {
        return new NonNullComposer_1.NonNullComposer(this);
    }
    cloneTo(anotherSchemaComposer, cloneMap = new Map()) {
        return new ListComposer(this.ofType.cloneTo(anotherSchemaComposer, cloneMap));
    }
}
exports.ListComposer = ListComposer;
//# sourceMappingURL=ListComposer.js.map