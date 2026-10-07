import { Rule } from 'eslint';
import { Dictionaries, PluralizeRule } from './types';
export declare class Pluralize {
    #private;
    constructor(dictionaries?: Dictionaries);
    correct(name: string, rule: PluralizeRule): string;
    isValidName(name: string, rule: PluralizeRule): boolean;
    private setDictionaries;
}
export declare const getPluralize: (context: Pick<Rule.RuleContext, 'settings'>) => Pluralize;
