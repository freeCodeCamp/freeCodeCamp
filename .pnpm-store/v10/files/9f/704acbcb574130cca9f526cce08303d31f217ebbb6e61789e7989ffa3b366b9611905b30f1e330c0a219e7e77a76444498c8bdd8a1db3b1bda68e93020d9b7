import { _type_of } from "./_type_of.js";

export function _to_primitive(input, hint) {
    if (_type_of(input) !== "object" || input === null) return input;

    var prim = input[Symbol.toPrimitive];

    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_type_of(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }

    return (hint === "string" ? String : Number)(input);
}
export { _to_primitive as _ };
