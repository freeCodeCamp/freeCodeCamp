import { EndpointError } from "../types";
import { evaluateConditions } from "./evaluateConditions";
import { evaluateExpression } from "./evaluateExpression";
export const evaluateErrorRule = (errorRule, options) => {
    const { conditions, error } = errorRule;
    const { result, referenceRecord } = evaluateConditions(conditions, options);
    if (!result) {
        return;
    }
    throw new EndpointError(evaluateExpression(error, "Error", {
        ...options,
        referenceRecord: { ...options.referenceRecord, ...referenceRecord },
    }));
};
