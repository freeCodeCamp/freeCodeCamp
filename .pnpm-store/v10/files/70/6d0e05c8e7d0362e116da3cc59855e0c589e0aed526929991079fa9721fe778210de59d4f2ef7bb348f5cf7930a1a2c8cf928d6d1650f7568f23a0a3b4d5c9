import { RuleSet } from './selector';
export declare type PseudoSelectorType = 'numeric' | 'selector';
export declare function parseCssSelector(str: string, pos: number, pseudos: {
    [key: string]: PseudoSelectorType;
}, attrEqualityMods: {
    [key: string]: true;
}, ruleNestingOperators: {
    [key: string]: true;
}, substitutesEnabled: boolean): import("./selector").Selectors | RuleSet | null;
