import { PseudoSelectorType } from './parser-context';
import { Selector, RuleAttr, Rule, Selectors, SelectorEntity, RulePseudo, RuleSet, AttrValueType } from './selector';
export { Selector, RuleAttr, Rule, Selectors, SelectorEntity, RulePseudo, RuleSet, AttrValueType, PseudoSelectorType };
export declare class CssSelectorParser {
    protected pseudos: {
        [pseudo: string]: PseudoSelectorType;
    };
    protected attrEqualityMods: {
        [mod: string]: true;
    };
    protected ruleNestingOperators: {
        [operator: string]: true;
    };
    protected substitutesEnabled: boolean;
    registerSelectorPseudos(...pseudos: string[]): this;
    unregisterSelectorPseudos(...pseudos: string[]): this;
    registerNumericPseudos(...pseudos: string[]): this;
    unregisterNumericPseudos(...pseudos: string[]): this;
    registerNestingOperators(...operators: string[]): this;
    unregisterNestingOperators(...operators: string[]): this;
    registerAttrEqualityMods(...mods: string[]): this;
    unregisterAttrEqualityMods(...mods: string[]): this;
    enableSubstitutes(): this;
    disableSubstitutes(): this;
    parse(str: string): Selector;
    render(path: Selector): string;
}
