import unique from "./unique";
import { CustomizeRule, CustomizeRuleString, ICustomizeOptions, Key } from "./types";
declare function merge<Configuration extends object>(firstConfiguration: Configuration | Configuration[], ...configurations: Configuration[]): Configuration;
declare function mergeWithCustomize<Configuration extends object>(options: ICustomizeOptions): (firstConfiguration: Configuration | Configuration[], ...configurations: Configuration[]) => Configuration;
declare function customizeArray(rules: {
    [s: string]: CustomizeRule | CustomizeRuleString;
}): (a: any, b: any, key: Key) => any;
declare type Rules = {
    [s: string]: CustomizeRule | CustomizeRuleString | Rules;
};
declare function mergeWithRules(rules: Rules): (firstConfiguration: object | object[], ...configurations: object[]) => object;
declare function customizeObject(rules: {
    [s: string]: CustomizeRule | CustomizeRuleString;
}): (a: any, b: any, key: Key) => any;
export { customizeArray, customizeObject, CustomizeRule, merge, merge as default, mergeWithCustomize, mergeWithRules, unique, };
