import type {Plugin} from "ajv"
import getDef from "../definitions/prohibited"

const prohibited: Plugin<undefined> = (ajv) => ajv.addKeyword(getDef())

export default prohibited
module.exports = prohibited
