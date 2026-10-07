import { setResponseValueAndErrors } from "../errorMessages.js";
export function parseDateDef(def, refs, overrideDateStrategy) {
    const strategy = overrideDateStrategy ?? refs.dateStrategy;
    if (Array.isArray(strategy)) {
        return {
            anyOf: strategy.map((item, i) => parseDateDef(def, refs, item)),
        };
    }
    switch (strategy) {
        case "string":
        case "format:date-time":
            return {
                type: "string",
                format: "date-time",
            };
        case "format:date":
            return {
                type: "string",
                format: "date",
            };
        case "integer":
            return integerDateParser(def, refs);
    }
}
const integerDateParser = (def, refs) => {
    const res = {
        type: "integer",
        format: "unix-time",
    };
    if (refs.target === "openApi3") {
        return res;
    }
    for (const check of def.checks) {
        switch (check.kind) {
            case "min":
                setResponseValueAndErrors(res, "minimum", check.value, // This is in milliseconds
                check.message, refs);
                break;
            case "max":
                setResponseValueAndErrors(res, "maximum", check.value, // This is in milliseconds
                check.message, refs);
                break;
        }
    }
    return res;
};
