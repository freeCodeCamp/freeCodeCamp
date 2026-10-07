import { parseDef } from "../parseDef.js";
export function parseDefaultDef(_def, refs) {
    return {
        ...parseDef(_def.innerType._def, refs),
        default: _def.defaultValue(),
    };
}
