import type {Vocabulary} from "../../types"
import refKeyword from "./ref"
import typeKeyword, {JTDTypeError} from "./type"
import enumKeyword, {JTDEnumError} from "./enum"
import elements, {JTDElementsError} from "./elements"
import properties, {JTDPropertiesError} from "./properties"
import optionalProperties from "./optionalProperties"
import discriminator, {JTDDiscriminatorError} from "./discriminator"
import values, {JTDValuesError} from "./values"
import union from "./union"
import metadata from "./metadata"

const jtdVocabulary: Vocabulary = [
  "definitions",
  refKeyword,
  typeKeyword,
  enumKeyword,
  elements,
  properties,
  optionalProperties,
  discriminator,
  values,
  union,
  metadata,
  {keyword: "additionalProperties", schemaType: "boolean"},
  {keyword: "nullable", schemaType: "boolean"},
]

export default jtdVocabulary

export type JTDErrorObject =
  | JTDTypeError
  | JTDEnumError
  | JTDElementsError
  | JTDPropertiesError
  | JTDDiscriminatorError
  | JTDValuesError
