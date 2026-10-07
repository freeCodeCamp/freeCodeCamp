import { _ as _to_primitive } from "./_to_primitive.js";
import { _ as _type_of } from "./_type_of.js";

function _to_property_key(arg) {
    var key = _to_primitive(arg, "string");

    return _type_of(key) === "symbol" ? key : String(key);
}
export { _to_property_key as _ };
