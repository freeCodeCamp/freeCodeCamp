import type {Plugin} from "ajv"
import getDef from "../definitions/instanceof"

const instanceofPlugin: Plugin<undefined> = (ajv) => ajv.addKeyword(getDef())

export default instanceofPlugin
module.exports = instanceofPlugin
