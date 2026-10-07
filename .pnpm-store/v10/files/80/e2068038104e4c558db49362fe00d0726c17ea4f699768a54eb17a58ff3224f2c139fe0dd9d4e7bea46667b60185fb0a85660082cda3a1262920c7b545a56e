"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _util_1 = require("./_util");
function getDef(opts) {
    return {
        keyword: "deepProperties",
        type: "object",
        schemaType: "object",
        macro: function (schema) {
            const allOf = [];
            for (const pointer in schema)
                allOf.push(getSchema(pointer, schema[pointer]));
            return { allOf };
        },
        metaSchema: {
            type: "object",
            propertyNames: { type: "string", format: "json-pointer" },
            additionalProperties: (0, _util_1.metaSchemaRef)(opts),
        },
    };
}
exports.default = getDef;
function getSchema(jsonPointer, schema) {
    const segments = jsonPointer.split("/");
    const rootSchema = {};
    let pointerSchema = rootSchema;
    for (let i = 1; i < segments.length; i++) {
        let segment = segments[i];
        const isLast = i === segments.length - 1;
        segment = unescapeJsonPointer(segment);
        const properties = (pointerSchema.properties = {});
        let items;
        if (/[0-9]+/.test(segment)) {
            let count = +segment;
            items = pointerSchema.items = [];
            pointerSchema.type = ["object", "array"];
            while (count--)
                items.push({});
        }
        else {
            pointerSchema.type = "object";
        }
        pointerSchema = isLast ? schema : {};
        properties[segment] = pointerSchema;
        if (items)
            items.push(pointerSchema);
    }
    return rootSchema;
}
function unescapeJsonPointer(str) {
    return str.replace(/~1/g, "/").replace(/~0/g, "~");
}
module.exports = getDef;
//# sourceMappingURL=deepProperties.js.map