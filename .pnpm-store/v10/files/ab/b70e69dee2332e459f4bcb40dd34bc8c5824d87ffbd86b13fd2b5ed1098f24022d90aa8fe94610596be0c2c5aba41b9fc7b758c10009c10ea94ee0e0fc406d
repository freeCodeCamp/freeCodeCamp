"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shared = (root) => {
    const sch = {
        nullable: { type: "boolean" },
        metadata: {
            optionalProperties: {
                union: { elements: { ref: "schema" } },
            },
            additionalProperties: true,
        },
    };
    if (root)
        sch.definitions = { values: { ref: "schema" } };
    return sch;
};
const emptyForm = (root) => ({
    optionalProperties: shared(root),
});
const refForm = (root) => ({
    properties: {
        ref: { type: "string" },
    },
    optionalProperties: shared(root),
});
const typeForm = (root) => ({
    properties: {
        type: {
            enum: [
                "boolean",
                "timestamp",
                "string",
                "float32",
                "float64",
                "int8",
                "uint8",
                "int16",
                "uint16",
                "int32",
                "uint32",
            ],
        },
    },
    optionalProperties: shared(root),
});
const enumForm = (root) => ({
    properties: {
        enum: { elements: { type: "string" } },
    },
    optionalProperties: shared(root),
});
const elementsForm = (root) => ({
    properties: {
        elements: { ref: "schema" },
    },
    optionalProperties: shared(root),
});
const propertiesForm = (root) => ({
    properties: {
        properties: { values: { ref: "schema" } },
    },
    optionalProperties: {
        optionalProperties: { values: { ref: "schema" } },
        additionalProperties: { type: "boolean" },
        ...shared(root),
    },
});
const optionalPropertiesForm = (root) => ({
    properties: {
        optionalProperties: { values: { ref: "schema" } },
    },
    optionalProperties: {
        additionalProperties: { type: "boolean" },
        ...shared(root),
    },
});
const discriminatorForm = (root) => ({
    properties: {
        discriminator: { type: "string" },
        mapping: {
            values: {
                metadata: {
                    union: [propertiesForm(false), optionalPropertiesForm(false)],
                },
            },
        },
    },
    optionalProperties: shared(root),
});
const valuesForm = (root) => ({
    properties: {
        values: { ref: "schema" },
    },
    optionalProperties: shared(root),
});
const schema = (root) => ({
    metadata: {
        union: [
            emptyForm,
            refForm,
            typeForm,
            enumForm,
            elementsForm,
            propertiesForm,
            optionalPropertiesForm,
            discriminatorForm,
            valuesForm,
        ].map((s) => s(root)),
    },
});
const jtdMetaSchema = {
    definitions: {
        schema: schema(false),
    },
    ...schema(true),
};
exports.default = jtdMetaSchema;
//# sourceMappingURL=jtd-schema.js.map