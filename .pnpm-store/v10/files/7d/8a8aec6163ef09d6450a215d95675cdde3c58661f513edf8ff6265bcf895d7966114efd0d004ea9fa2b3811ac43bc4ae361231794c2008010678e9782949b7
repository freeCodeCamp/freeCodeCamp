import {Name} from "./codegen"

const names = {
  // validation function arguments
  data: new Name("data"), // data passed to validation function
  // args passed from referencing schema
  valCxt: new Name("valCxt"), // validation/data context - should not be used directly, it is destructured to the names below
  instancePath: new Name("instancePath"),
  parentData: new Name("parentData"),
  parentDataProperty: new Name("parentDataProperty"),
  rootData: new Name("rootData"), // root data - same as the data passed to the first/top validation function
  dynamicAnchors: new Name("dynamicAnchors"), // used to support recursiveRef and dynamicRef
  // function scoped variables
  vErrors: new Name("vErrors"), // null or array of validation errors
  errors: new Name("errors"), // counter of validation errors
  this: new Name("this"),
  // "globals"
  self: new Name("self"),
  scope: new Name("scope"),
  // JTD serialize/parse name for JSON string and position
  json: new Name("json"),
  jsonPos: new Name("jsonPos"),
  jsonLen: new Name("jsonLen"),
  jsonPart: new Name("jsonPart"),
}

export default names
