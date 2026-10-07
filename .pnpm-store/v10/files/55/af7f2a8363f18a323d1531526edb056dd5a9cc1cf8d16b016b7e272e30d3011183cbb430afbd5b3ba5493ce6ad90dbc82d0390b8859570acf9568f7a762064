"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NonNullComposer = void 0;
const graphql_1 = require("./graphql");
const typeHelpers_1 = require("./utils/typeHelpers");
const ListComposer_1 = require("./ListComposer");
const misc_1 = require("./utils/misc");
class NonNullComposer {
    constructor(type) {
        (0, misc_1.invariant)(!(type instanceof NonNullComposer), 'You provide NonNull value to NonNullComposer constructor. Nesting NonNull is not allowed.');
        this.ofType = type;
    }
    getType() {
        return new graphql_1.GraphQLNonNull(this.ofType.getType());
    }
    getTypeName() {
        return `${this.ofType.getTypeName()}!`;
    }
    getUnwrappedTC() {
        let tc = this;
        while (!(0, typeHelpers_1.isNamedTypeComposer)(tc)) {
            tc = tc.ofType;
        }
        return tc;
    }
    getTypePlural() {
        return new ListComposer_1.ListComposer(this);
    }
    getTypeNonNull() {
        return this;
    }
    get List() {
        return new ListComposer_1.ListComposer(this);
    }
    get NonNull() {
        return this;
    }
    cloneTo(anotherSchemaComposer, cloneMap = new Map()) {
        return new NonNullComposer(this.ofType.cloneTo(anotherSchemaComposer, cloneMap));
    }
}
exports.NonNullComposer = NonNullComposer;
//# sourceMappingURL=NonNullComposer.js.map