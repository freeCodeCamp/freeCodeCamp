type CharRegexToken = {
    type: 'Char';
    kind: 'meta' | 'simple' | 'decimal' | 'hex' | 'unicode';
    symbol: string | undefined;
    value: string;
    codePoint: number;
    escaped?: true;
};
type RepetitionRegexToken = {
    type: 'Repetition';
    expression: RegexToken;
    quantifier: QuantifierRegexToken;
};
type QuantifierRegexToken = {
    type: 'Quantifier';
    kind: '+' | '*' | '?';
    greedy: boolean;
} | {
    type: 'Quantifier';
    kind: 'Range';
    greedy: boolean;
    from: number;
    to: number | undefined;
};
type AlternativeRegexToken = {
    type: 'Alternative';
    expressions: RegexToken[];
};
type CharacterClassRegexToken = {
    type: 'CharacterClass';
    expressions: RegexToken[];
    negative?: true;
};
type ClassRangeRegexToken = {
    type: 'ClassRange';
    from: CharRegexToken;
    to: CharRegexToken;
};
type GroupRegexToken = {
    type: 'Group';
    capturing: true;
    number: number;
    expression: RegexToken;
} | {
    type: 'Group';
    capturing: true;
    nameRaw: string;
    name: string;
    number: number;
    expression: RegexToken;
} | {
    type: 'Group';
    capturing: false;
    expression: RegexToken;
};
type DisjunctionRegexToken = {
    type: 'Disjunction';
    left: RegexToken | null;
    right: RegexToken | null;
};
type AssertionRegexToken = {
    type: 'Assertion';
    kind: '^' | '$';
    negative?: true;
} | {
    type: 'Assertion';
    kind: 'Lookahead' | 'Lookbehind';
    negative?: true;
    assertion: RegexToken;
};
type BackreferenceRegexToken = {
    type: 'Backreference';
    kind: 'number';
    number: number;
    reference: number;
} | {
    type: 'Backreference';
    kind: 'name';
    number: number;
    referenceRaw: string;
    reference: string;
};
export type RegexToken = CharRegexToken | RepetitionRegexToken | QuantifierRegexToken | AlternativeRegexToken | CharacterClassRegexToken | ClassRangeRegexToken | GroupRegexToken | DisjunctionRegexToken | AssertionRegexToken | BackreferenceRegexToken;
/**
 * Build the AST corresponding to the passed instance of RegExp
 */
export declare function tokenizeRegex(regex: RegExp): RegexToken;
export {};
