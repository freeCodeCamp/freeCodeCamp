import { parseDef } from "../parseDef.js";
export const parsePipelineDef = (def, refs) => {
    if (refs.pipeStrategy === "input") {
        return parseDef(def.in._def, refs);
    }
    else if (refs.pipeStrategy === "output") {
        return parseDef(def.out._def, refs);
    }
    const a = parseDef(def.in._def, {
        ...refs,
        currentPath: [...refs.currentPath, "allOf", "0"],
    });
    const b = parseDef(def.out._def, {
        ...refs,
        currentPath: [...refs.currentPath, "allOf", a ? "1" : "0"],
    });
    return {
        allOf: [a, b].filter((x) => x !== undefined),
    };
};
