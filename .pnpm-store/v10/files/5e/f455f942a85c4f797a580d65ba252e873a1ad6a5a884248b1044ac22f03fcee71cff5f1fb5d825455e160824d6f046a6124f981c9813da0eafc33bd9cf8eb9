"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getRangeDef(keyword) {
    return () => ({
        keyword,
        type: "number",
        schemaType: "array",
        macro: function ([min, max]) {
            validateRangeSchema(min, max);
            return keyword === "range"
                ? { minimum: min, maximum: max }
                : { exclusiveMinimum: min, exclusiveMaximum: max };
        },
        metaSchema: {
            type: "array",
            minItems: 2,
            maxItems: 2,
            items: { type: "number" },
        },
    });
    function validateRangeSchema(min, max) {
        if (min > max || (keyword === "exclusiveRange" && min === max)) {
            throw new Error("There are no numbers in range");
        }
    }
}
exports.default = getRangeDef;
//# sourceMappingURL=_range.js.map