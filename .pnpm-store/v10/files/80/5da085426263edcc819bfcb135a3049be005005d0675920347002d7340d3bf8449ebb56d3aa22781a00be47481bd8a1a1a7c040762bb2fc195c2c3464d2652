import { EndpointRuleObject } from "./EndpointRuleObject";
import { ErrorRuleObject } from "./ErrorRuleObject";
import { ConditionObject } from "./shared";
export type RuleSetRules = Array<EndpointRuleObject | ErrorRuleObject | TreeRuleObject>;
export type TreeRuleObject = {
    type: "tree";
    conditions?: ConditionObject[];
    rules: RuleSetRules;
    documentation?: string;
};
