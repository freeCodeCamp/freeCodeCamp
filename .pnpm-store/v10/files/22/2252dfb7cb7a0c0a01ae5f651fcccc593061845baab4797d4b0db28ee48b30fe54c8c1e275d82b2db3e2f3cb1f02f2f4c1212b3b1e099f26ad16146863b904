"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDirectivesFromSchema = exports.getTypesFromSchema = void 0;
const SchemaComposer_1 = require("../SchemaComposer");
const ObjectTypeComposer_1 = require("../ObjectTypeComposer");
const InputTypeComposer_1 = require("../InputTypeComposer");
const InterfaceTypeComposer_1 = require("../InterfaceTypeComposer");
const UnionTypeComposer_1 = require("../UnionTypeComposer");
function getTypesFromSchema(sc, filter) {
    const { exclude = [], include, omitDirectiveDefinitions } = filter || {};
    const rootTypes = new Set();
    if (Array.isArray(include) && include.length) {
        include.forEach((s) => {
            if (s && typeof s === 'string') {
                rootTypes.add(sc.getAnyTC(s));
            }
        });
    }
    else {
        if (sc.has('Query'))
            rootTypes.add(sc.getOTC('Query'));
        if (sc.has('Mutation'))
            rootTypes.add(sc.getOTC('Mutation'));
        if (sc.has('Subscription'))
            rootTypes.add(sc.getOTC('Subscription'));
    }
    if (!omitDirectiveDefinitions) {
        const directives = sc._directives.filter((d) => !SchemaComposer_1.BUILT_IN_DIRECTIVES.includes(d));
        directives.forEach((d) => {
            if (!Array.isArray(d.args))
                return;
            d.args.forEach((ac) => {
                const tc = sc.getAnyTC(ac.type);
                if (!exclude.includes(tc.getTypeName())) {
                    rootTypes.add(tc);
                }
            });
        });
    }
    const typeSet = new Set();
    rootTypes.forEach((tc) => {
        if (tc instanceof ObjectTypeComposer_1.ObjectTypeComposer ||
            tc instanceof InputTypeComposer_1.InputTypeComposer ||
            tc instanceof InterfaceTypeComposer_1.InterfaceTypeComposer ||
            tc instanceof UnionTypeComposer_1.UnionTypeComposer) {
            typeSet.add(tc);
            tc.getNestedTCs({ exclude }, typeSet);
        }
        else {
            typeSet.add(tc);
        }
    });
    return typeSet;
}
exports.getTypesFromSchema = getTypesFromSchema;
function getDirectivesFromSchema(sc) {
    return sc._directives.filter((d) => !SchemaComposer_1.BUILT_IN_DIRECTIVES.includes(d));
}
exports.getDirectivesFromSchema = getDirectivesFromSchema;
//# sourceMappingURL=getFromSchema.js.map