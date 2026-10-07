import { evaluateConditions } from "./evaluateConditions";
import { evaluateRules } from "./evaluateRules";
export const evaluateTreeRule = (treeRule, options) => {
    const { conditions, rules } = treeRule;
    const { result, referenceRecord } = evaluateConditions(conditions, options);
    if (!result) {
        return;
    }
    return evaluateRules(rules, {
        ...options,
        referenceRecord: { ...options.referenceRecord, ...referenceRecord },
    });
};
