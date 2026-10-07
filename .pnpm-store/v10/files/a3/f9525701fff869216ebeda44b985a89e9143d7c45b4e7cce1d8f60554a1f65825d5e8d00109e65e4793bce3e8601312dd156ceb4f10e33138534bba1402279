import type {Plugin} from "ajv"
import getDef from "../definitions/typeof"

const typeofPlugin: Plugin<undefined> = (ajv) => ajv.addKeyword(getDef())

export default typeofPlugin
module.exports = typeofPlugin
