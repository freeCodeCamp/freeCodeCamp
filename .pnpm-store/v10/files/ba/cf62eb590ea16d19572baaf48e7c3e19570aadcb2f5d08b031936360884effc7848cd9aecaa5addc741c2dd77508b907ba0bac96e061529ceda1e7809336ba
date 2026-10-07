declare type Rule = {
    expression: RegExp;
    recommendationBuilder?: (name: string) => string;
};
declare type PresetRules = {
    [key: string]: Required<Rule> | undefined;
    camelCase: Required<Rule>;
    'kebab-case': Required<Rule>;
    PascalCase: Required<Rule>;
    snake_case: Required<Rule>;
};
export declare const presetRules: PresetRules;
export declare const getRule: (expression: string) => Rule;
export {};
