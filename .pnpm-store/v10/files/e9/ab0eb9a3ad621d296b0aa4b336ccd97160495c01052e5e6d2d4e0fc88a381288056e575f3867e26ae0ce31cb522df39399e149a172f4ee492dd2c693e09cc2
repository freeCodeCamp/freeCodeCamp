import type {Plugin} from "ajv"
import getDef from "../definitions/dynamicDefaults"

const dynamicDefaults: Plugin<undefined> = (ajv) => ajv.addKeyword(getDef())

export default dynamicDefaults
module.exports = dynamicDefaults
