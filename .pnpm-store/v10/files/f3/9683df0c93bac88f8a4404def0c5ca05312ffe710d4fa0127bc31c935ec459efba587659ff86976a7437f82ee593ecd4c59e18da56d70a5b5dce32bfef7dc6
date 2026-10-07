import { parseDef } from "../parseDef.js";
import { parseAnyDef } from "./any.js";
export const parseOptionalDef = (def, refs) => {
    if (refs.currentPath.toString() === refs.propertyPath?.toString()) {
        return parseDef(def.innerType._def, refs);
    }
    const innerSchema = parseDef(def.innerType._def, {
        ...refs,
        currentPath: [...refs.currentPath, "anyOf", "1"],
    });
    return innerSchema
        ? {
            anyOf: [
                {
                    not: parseAnyDef(refs),
                },
                innerSchema,
            ],
        }
        : parseAnyDef(refs);
};
