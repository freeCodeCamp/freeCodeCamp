import type {Plugin} from "ajv"
import getDef from "../definitions/uniqueItemProperties"

const uniqueItemProperties: Plugin<undefined> = (ajv) => ajv.addKeyword(getDef())

export default uniqueItemProperties
module.exports = uniqueItemProperties
