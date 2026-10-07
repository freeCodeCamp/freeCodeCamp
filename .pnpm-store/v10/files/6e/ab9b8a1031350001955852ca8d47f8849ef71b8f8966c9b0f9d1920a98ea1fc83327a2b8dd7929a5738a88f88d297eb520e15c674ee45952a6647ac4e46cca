import { debugId, toDebugString } from "../debug";
import { evaluateCondition } from "./evaluateCondition";
export const evaluateConditions = (conditions = [], options) => {
    const conditionsReferenceRecord = {};
    for (const condition of conditions) {
        const { result, toAssign } = evaluateCondition(condition, {
            ...options,
            referenceRecord: {
                ...options.referenceRecord,
                ...conditionsReferenceRecord,
            },
        });
        if (!result) {
            return { result };
        }
        if (toAssign) {
            conditionsReferenceRecord[toAssign.name] = toAssign.value;
            options.logger?.debug?.(debugId, `assign: ${toAssign.name} := ${toDebugString(toAssign.value)}`);
        }
    }
    return { result: true, referenceRecord: conditionsReferenceRecord };
};
