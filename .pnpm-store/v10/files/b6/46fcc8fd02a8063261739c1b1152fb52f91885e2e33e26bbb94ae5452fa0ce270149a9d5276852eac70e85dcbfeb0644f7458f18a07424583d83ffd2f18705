const Ajv = require("ajv")
const ajv = new Ajv({allErrors: true})

const schema = {
  type: "object",
  properties: {
    foo: {type: "string"},
    bar: {type: "number", maximum: 3},
  },
  required: ["foo", "bar"],
  additionalProperties: false,
}

const validate = ajv.compile(schema)

test({foo: "abc", bar: 2})
test({foo: 2, bar: 4})

function test(data) {
  const valid = validate(data)
  if (valid) console.log("Valid!")
  else console.log("Invalid: " + ajv.errorsText(validate.errors))
}
