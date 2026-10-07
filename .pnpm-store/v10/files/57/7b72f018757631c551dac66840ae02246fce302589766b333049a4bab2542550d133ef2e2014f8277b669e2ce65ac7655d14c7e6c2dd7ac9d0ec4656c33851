import { parseDef } from "../parseDef.js";
import { parseRecordDef } from "./record.js";
import { parseAnyDef } from "./any.js";
export function parseMapDef(def, refs) {
    if (refs.mapStrategy === "record") {
        return parseRecordDef(def, refs);
    }
    const keys = parseDef(def.keyType._def, {
        ...refs,
        currentPath: [...refs.currentPath, "items", "items", "0"],
    }) || parseAnyDef(refs);
    const values = parseDef(def.valueType._def, {
        ...refs,
        currentPath: [...refs.currentPath, "items", "items", "1"],
    }) || parseAnyDef(refs);
    return {
        type: "array",
        maxItems: 125,
        items: {
            type: "array",
            items: [keys, values],
            minItems: 2,
            maxItems: 2,
        },
    };
}
