import type {Plugin} from "ajv"
import getDef from "../definitions/transform"

const transform: Plugin<undefined> = (ajv) => ajv.addKeyword(getDef())

export default transform
module.exports = transform
