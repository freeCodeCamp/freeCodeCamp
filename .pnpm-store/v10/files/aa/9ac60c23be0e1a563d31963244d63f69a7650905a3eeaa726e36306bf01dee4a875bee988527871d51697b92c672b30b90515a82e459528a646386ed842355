import { EndpointError } from "../types";
import { callFunction } from "./callFunction";
import { evaluateTemplate } from "./evaluateTemplate";
import { getReferenceValue } from "./getReferenceValue";
export const evaluateExpression = (obj, keyName, options) => {
    if (typeof obj === "string") {
        return evaluateTemplate(obj, options);
    }
    else if (obj["fn"]) {
        return callFunction(obj, options);
    }
    else if (obj["ref"]) {
        return getReferenceValue(obj, options);
    }
    throw new EndpointError(`'${keyName}': ${String(obj)} is not a string, function or reference.`);
};
