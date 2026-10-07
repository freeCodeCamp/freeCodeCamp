"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeAvoidOptionals = exports.DEFAULT_AVOID_OPTIONALS = void 0;
exports.DEFAULT_AVOID_OPTIONALS = {
    object: false,
    inputValue: false,
    field: false,
    defaultValue: false,
    resolvers: false,
};
function normalizeAvoidOptionals(avoidOptionals) {
    if (typeof avoidOptionals === 'boolean') {
        return {
            object: avoidOptionals,
            inputValue: avoidOptionals,
            field: avoidOptionals,
            defaultValue: avoidOptionals,
            resolvers: avoidOptionals,
        };
    }
    return {
        ...exports.DEFAULT_AVOID_OPTIONALS,
        ...avoidOptionals,
    };
}
exports.normalizeAvoidOptionals = normalizeAvoidOptionals;
