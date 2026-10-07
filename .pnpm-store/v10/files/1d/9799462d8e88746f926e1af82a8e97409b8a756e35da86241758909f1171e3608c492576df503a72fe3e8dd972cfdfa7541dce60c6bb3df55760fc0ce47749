import * as eslint from 'eslint';
import { Rule, AST } from 'eslint';
import * as estree from 'estree';

declare const READ: unique symbol;
declare const CALL: unique symbol;
declare const CONSTRUCT: unique symbol;
declare const ESM: unique symbol;
declare class ReferenceTracker {
    constructor(globalScope: Scope$2, options?: {
        mode?: "legacy" | "strict" | undefined;
        globalObjectNames?: string[] | undefined;
    } | undefined);
    private variableStack;
    private globalScope;
    private mode;
    private globalObjectNames;
    iterateGlobalReferences<T>(traceMap: TraceMap$2<T>): IterableIterator<TrackedReferences$2<T>>;
    iterateCjsReferences<T_1>(traceMap: TraceMap$2<T_1>): IterableIterator<TrackedReferences$2<T_1>>;
    iterateEsmReferences<T_2>(traceMap: TraceMap$2<T_2>): IterableIterator<TrackedReferences$2<T_2>>;
    iteratePropertyReferences<T_3>(node: Expression, traceMap: TraceMap$2<T_3>): IterableIterator<TrackedReferences$2<T_3>>;
    private _iterateVariableReferences;
    private _iteratePropertyReferences;
    private _iterateLhsReferences;
    private _iterateImportReferences;
}
declare namespace ReferenceTracker {
    export { READ };
    export { CALL };
    export { CONSTRUCT };
    export { ESM };
}
type Scope$2 = eslint.Scope.Scope;
type Expression = estree.Expression;
type TraceMap$2<T> = TraceMap$1<T>;
type TrackedReferences$2<T> = TrackedReferences$1<T>;

type StaticValue$2 = StaticValueProvided$1 | StaticValueOptional$1;
type StaticValueProvided$1 = {
    optional?: undefined;
    value: unknown;
};
type StaticValueOptional$1 = {
    optional?: true;
    value: undefined;
};
type ReferenceTrackerOptions$1 = {
    globalObjectNames?: string[];
    mode?: "legacy" | "strict";
};
type TraceMap$1<T = unknown> = {
    [i: string]: TraceMapObject<T>;
};
type TraceMapObject<T> = {
    [i: string]: TraceMapObject<T>;
    [CALL]?: T;
    [CONSTRUCT]?: T;
    [READ]?: T;
    [ESM]?: boolean;
};
type TrackedReferences$1<T> = {
    info: T;
    node: Rule.Node;
    path: string[];
    type: typeof CALL | typeof CONSTRUCT | typeof READ;
};
type HasSideEffectOptions$1 = {
    considerGetters?: boolean;
    considerImplicitTypeConversion?: boolean;
};
type PunctuatorToken<Value extends string> = AST.Token & {
    type: "Punctuator";
    value: Value;
};
type ArrowToken$1 = PunctuatorToken<"=>">;
type CommaToken$1 = PunctuatorToken<",">;
type SemicolonToken$1 = PunctuatorToken<";">;
type ColonToken$1 = PunctuatorToken<":">;
type OpeningParenToken$1 = PunctuatorToken<"(">;
type ClosingParenToken$1 = PunctuatorToken<")">;
type OpeningBracketToken$1 = PunctuatorToken<"[">;
type ClosingBracketToken$1 = PunctuatorToken<"]">;
type OpeningBraceToken$1 = PunctuatorToken<"{">;
type ClosingBraceToken$1 = PunctuatorToken<"}">;

declare function findVariable(initialScope: Scope$1, nameOrNode: string | Identifier): Variable | null;
type Scope$1 = eslint.Scope.Scope;
type Variable = eslint.Scope.Variable;
type Identifier = estree.Identifier;

declare function getFunctionHeadLocation(node: FunctionNode$1, sourceCode: SourceCode$2): SourceLocation | null;
type SourceCode$2 = eslint.SourceCode;
type FunctionNode$1 = estree.Function;
type SourceLocation = estree.SourceLocation;

declare function getFunctionNameWithKind(node: FunctionNode, sourceCode?: eslint.SourceCode | undefined): string;
type FunctionNode = estree.Function;

declare function getInnermostScope(initialScope: Scope, node: Node$4): Scope;
type Scope = eslint.Scope.Scope;
type Node$4 = estree.Node;

declare function getPropertyName(node: MemberExpression | MethodDefinition | Property | PropertyDefinition, initialScope?: eslint.Scope.Scope | undefined): string | null | undefined;
type MemberExpression = estree.MemberExpression;
type MethodDefinition = estree.MethodDefinition;
type Property = estree.Property;
type PropertyDefinition = estree.PropertyDefinition;

declare function getStaticValue(node: Node$3, initialScope?: eslint.Scope.Scope | null | undefined): StaticValue$1 | null;
type StaticValue$1 = StaticValue$2;
type Node$3 = estree.Node;

declare function getStringIfConstant(node: Node$2, initialScope?: eslint.Scope.Scope | null | undefined): string | null;
type Node$2 = estree.Node;

declare function hasSideEffect(node: Node$1, sourceCode: SourceCode$1, options?: HasSideEffectOptions$1 | undefined): boolean;
type Node$1 = estree.Node;
type SourceCode$1 = eslint.SourceCode;

declare function isArrowToken(token: CommentOrToken): token is ArrowToken$1;
declare function isCommaToken(token: CommentOrToken): token is CommaToken$1;
declare function isSemicolonToken(token: CommentOrToken): token is SemicolonToken$1;
declare function isColonToken(token: CommentOrToken): token is ColonToken$1;
declare function isOpeningParenToken(token: CommentOrToken): token is OpeningParenToken$1;
declare function isClosingParenToken(token: CommentOrToken): token is ClosingParenToken$1;
declare function isOpeningBracketToken(token: CommentOrToken): token is OpeningBracketToken$1;
declare function isClosingBracketToken(token: CommentOrToken): token is ClosingBracketToken$1;
declare function isOpeningBraceToken(token: CommentOrToken): token is OpeningBraceToken$1;
declare function isClosingBraceToken(token: CommentOrToken): token is ClosingBraceToken$1;
declare function isCommentToken(token: CommentOrToken): token is estree.Comment;
declare function isNotArrowToken(arg0: CommentOrToken): boolean;
declare function isNotCommaToken(arg0: CommentOrToken): boolean;
declare function isNotSemicolonToken(arg0: CommentOrToken): boolean;
declare function isNotColonToken(arg0: CommentOrToken): boolean;
declare function isNotOpeningParenToken(arg0: CommentOrToken): boolean;
declare function isNotClosingParenToken(arg0: CommentOrToken): boolean;
declare function isNotOpeningBracketToken(arg0: CommentOrToken): boolean;
declare function isNotClosingBracketToken(arg0: CommentOrToken): boolean;
declare function isNotOpeningBraceToken(arg0: CommentOrToken): boolean;
declare function isNotClosingBraceToken(arg0: CommentOrToken): boolean;
declare function isNotCommentToken(arg0: CommentOrToken): boolean;
type Token = eslint.AST.Token;
type Comment = estree.Comment;
type CommentOrToken = Comment | Token;

declare function isParenthesized(timesOrNode: Node | number, nodeOrSourceCode: Node | SourceCode, optionalSourceCode?: eslint.SourceCode | undefined): boolean;
type Node = estree.Node;
type SourceCode = eslint.SourceCode;

declare class PatternMatcher {
    constructor(pattern: RegExp, options?: {
        escaped?: boolean | undefined;
    } | undefined);
    execAll(str: string): IterableIterator<RegExpExecArray>;
    test(str: string): boolean;
    [Symbol.replace](str: string, replacer: string | ((...strs: string[]) => string)): string;
}

declare namespace _default {
    export { CALL };
    export { CONSTRUCT };
    export { ESM };
    export { findVariable };
    export { getFunctionHeadLocation };
    export { getFunctionNameWithKind };
    export { getInnermostScope };
    export { getPropertyName };
    export { getStaticValue };
    export { getStringIfConstant };
    export { hasSideEffect };
    export { isArrowToken };
    export { isClosingBraceToken };
    export { isClosingBracketToken };
    export { isClosingParenToken };
    export { isColonToken };
    export { isCommaToken };
    export { isCommentToken };
    export { isNotArrowToken };
    export { isNotClosingBraceToken };
    export { isNotClosingBracketToken };
    export { isNotClosingParenToken };
    export { isNotColonToken };
    export { isNotCommaToken };
    export { isNotCommentToken };
    export { isNotOpeningBraceToken };
    export { isNotOpeningBracketToken };
    export { isNotOpeningParenToken };
    export { isNotSemicolonToken };
    export { isOpeningBraceToken };
    export { isOpeningBracketToken };
    export { isOpeningParenToken };
    export { isParenthesized };
    export { isSemicolonToken };
    export { PatternMatcher };
    export { READ };
    export { ReferenceTracker };
}

type StaticValue = StaticValue$2;
type StaticValueOptional = StaticValueOptional$1;
type StaticValueProvided = StaticValueProvided$1;
type ReferenceTrackerOptions = ReferenceTrackerOptions$1;
type TraceMap<T> = TraceMap$1<T>;
type TrackedReferences<T> = TrackedReferences$1<T>;
type HasSideEffectOptions = HasSideEffectOptions$1;
type ArrowToken = ArrowToken$1;
type CommaToken = CommaToken$1;
type SemicolonToken = SemicolonToken$1;
type ColonToken = ColonToken$1;
type OpeningParenToken = OpeningParenToken$1;
type ClosingParenToken = ClosingParenToken$1;
type OpeningBracketToken = OpeningBracketToken$1;
type ClosingBracketToken = ClosingBracketToken$1;
type OpeningBraceToken = OpeningBraceToken$1;
type ClosingBraceToken = ClosingBraceToken$1;

export { ArrowToken, CALL, CONSTRUCT, ClosingBraceToken, ClosingBracketToken, ClosingParenToken, ColonToken, CommaToken, ESM, HasSideEffectOptions, OpeningBraceToken, OpeningBracketToken, OpeningParenToken, PatternMatcher, READ, ReferenceTracker, ReferenceTrackerOptions, SemicolonToken, StaticValue, StaticValueOptional, StaticValueProvided, TraceMap, TrackedReferences, _default as default, findVariable, getFunctionHeadLocation, getFunctionNameWithKind, getInnermostScope, getPropertyName, getStaticValue, getStringIfConstant, hasSideEffect, isArrowToken, isClosingBraceToken, isClosingBracketToken, isClosingParenToken, isColonToken, isCommaToken, isCommentToken, isNotArrowToken, isNotClosingBraceToken, isNotClosingBracketToken, isNotClosingParenToken, isNotColonToken, isNotCommaToken, isNotCommentToken, isNotOpeningBraceToken, isNotOpeningBracketToken, isNotOpeningParenToken, isNotSemicolonToken, isOpeningBraceToken, isOpeningBracketToken, isOpeningParenToken, isParenthesized, isSemicolonToken };
