import type { TSESLint, TSESTree } from '@typescript-eslint/utils';
import type { MessageIds, Options } from '../naming-convention';
import type { IndividualAndMetaSelectorsString, MetaSelectors, Modifiers, ModifiersString, PredefinedFormats, PredefinedFormatsString, Selectors, SelectorsString, TypeModifiers, TypeModifiersString, UnderscoreOptions, UnderscoreOptionsString } from './enums';
export interface MatchRegex {
    match: boolean;
    regex: string;
}
export interface Selector {
    custom?: MatchRegex;
    filter?: string | MatchRegex;
    format: PredefinedFormatsString[] | null;
    leadingUnderscore?: UnderscoreOptionsString;
    modifiers?: ModifiersString[];
    prefix?: string[];
    selector: IndividualAndMetaSelectorsString | IndividualAndMetaSelectorsString[];
    suffix?: string[];
    trailingUnderscore?: UnderscoreOptionsString;
    types?: TypeModifiersString[];
}
export interface NormalizedMatchRegex {
    match: boolean;
    regex: RegExp;
}
export interface NormalizedSelector {
    custom: NormalizedMatchRegex | null;
    filter: NormalizedMatchRegex | null;
    format: PredefinedFormats[] | null;
    leadingUnderscore: UnderscoreOptions | null;
    modifiers: Modifiers[] | null;
    modifierWeight: number;
    prefix: string[] | null;
    selector: MetaSelectors | Selectors;
    suffix: string[] | null;
    trailingUnderscore: UnderscoreOptions | null;
    types: TypeModifiers[] | null;
}
export type ValidatorFunction = (node: TSESTree.Identifier | TSESTree.Literal | TSESTree.PrivateIdentifier, modifiers?: Set<Modifiers>) => void;
export type ParsedOptions = Record<SelectorsString, ValidatorFunction>;
export type Context = Readonly<TSESLint.RuleContext<MessageIds, Options>>;
