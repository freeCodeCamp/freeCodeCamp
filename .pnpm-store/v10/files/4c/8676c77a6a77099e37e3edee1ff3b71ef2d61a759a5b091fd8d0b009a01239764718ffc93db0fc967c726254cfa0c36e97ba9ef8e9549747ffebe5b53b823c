import type {Plugin} from "ajv"
import getDef from "../definitions/deepProperties"
import type {DefinitionOptions} from "../definitions/_types"

const deepProperties: Plugin<DefinitionOptions> = (ajv, opts?: DefinitionOptions) =>
  ajv.addKeyword(getDef(opts))

export default deepProperties
module.exports = deepProperties
