import {SchemaObject} from "../types"

type MetaSchema = (root: boolean) => SchemaObject

const shared: MetaSchema = (root) => {
  const sch: SchemaObject = {
    nullable: {type: "boolean"},
    metadata: {
      optionalProperties: {
        union: {elements: {ref: "schema"}},
      },
      additionalProperties: true,
    },
  }
  if (root) sch.definitions = {values: {ref: "schema"}}
  return sch
}

const emptyForm: MetaSchema = (root) => ({
  optionalProperties: shared(root),
})

const refForm: MetaSchema = (root) => ({
  properties: {
    ref: {type: "string"},
  },
  optionalProperties: shared(root),
})

const typeForm: MetaSchema = (root) => ({
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
})

const enumForm: MetaSchema = (root) => ({
  properties: {
    enum: {elements: {type: "string"}},
  },
  optionalProperties: shared(root),
})

const elementsForm: MetaSchema = (root) => ({
  properties: {
    elements: {ref: "schema"},
  },
  optionalProperties: shared(root),
})

const propertiesForm: MetaSchema = (root) => ({
  properties: {
    properties: {values: {ref: "schema"}},
  },
  optionalProperties: {
    optionalProperties: {values: {ref: "schema"}},
    additionalProperties: {type: "boolean"},
    ...shared(root),
  },
})

const optionalPropertiesForm: MetaSchema = (root) => ({
  properties: {
    optionalProperties: {values: {ref: "schema"}},
  },
  optionalProperties: {
    additionalProperties: {type: "boolean"},
    ...shared(root),
  },
})

const discriminatorForm: MetaSchema = (root) => ({
  properties: {
    discriminator: {type: "string"},
    mapping: {
      values: {
        metadata: {
          union: [propertiesForm(false), optionalPropertiesForm(false)],
        },
      },
    },
  },
  optionalProperties: shared(root),
})

const valuesForm: MetaSchema = (root) => ({
  properties: {
    values: {ref: "schema"},
  },
  optionalProperties: shared(root),
})

const schema: MetaSchema = (root) => ({
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
})

const jtdMetaSchema: SchemaObject = {
  definitions: {
    schema: schema(false),
  },
  ...schema(true),
}

export default jtdMetaSchema
