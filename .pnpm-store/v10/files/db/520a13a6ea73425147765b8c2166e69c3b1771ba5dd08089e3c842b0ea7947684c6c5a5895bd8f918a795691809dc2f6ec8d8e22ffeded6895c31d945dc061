"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CONSTRUCTORS = {
    Object,
    Array,
    Function,
    Number,
    String,
    Date,
    RegExp,
};
/* istanbul ignore else */
if (typeof Buffer != "undefined")
    CONSTRUCTORS.Buffer = Buffer;
/* istanbul ignore else */
if (typeof Promise != "undefined")
    CONSTRUCTORS.Promise = Promise;
const getDef = Object.assign(_getDef, { CONSTRUCTORS });
function _getDef() {
    return {
        keyword: "instanceof",
        schemaType: ["string", "array"],
        compile(schema) {
            if (typeof schema == "string") {
                const C = getConstructor(schema);
                return (data) => data instanceof C;
            }
            if (Array.isArray(schema)) {
                const constructors = schema.map(getConstructor);
                return (data) => {
                    for (const C of constructors) {
                        if (data instanceof C)
                            return true;
                    }
                    return false;
                };
            }
            /* istanbul ignore next */
            throw new Error("ajv implementation error");
        },
        metaSchema: {
            anyOf: [{ type: "string" }, { type: "array", items: { type: "string" } }],
        },
    };
}
function getConstructor(c) {
    const C = CONSTRUCTORS[c];
    if (C)
        return C;
    throw new Error(`invalid "instanceof" keyword value ${c}`);
}
exports.default = getDef;
module.exports = getDef;
//# sourceMappingURL=instanceof.js.map