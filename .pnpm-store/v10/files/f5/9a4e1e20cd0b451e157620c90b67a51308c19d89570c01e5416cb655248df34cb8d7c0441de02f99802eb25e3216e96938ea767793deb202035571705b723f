import { RuleSetRules } from "./TreeRuleObject";
export type DeprecatedObject = {
    message?: string;
    since?: string;
};
export type ParameterObject = {
    type: "String" | "string" | "Boolean" | "boolean";
    default?: string | boolean;
    required?: boolean;
    documentation?: string;
    builtIn?: string;
    deprecated?: DeprecatedObject;
};
export type RuleSetObject = {
    version: string;
    serviceId?: string;
    parameters: Record<string, ParameterObject>;
    rules: RuleSetRules;
};
