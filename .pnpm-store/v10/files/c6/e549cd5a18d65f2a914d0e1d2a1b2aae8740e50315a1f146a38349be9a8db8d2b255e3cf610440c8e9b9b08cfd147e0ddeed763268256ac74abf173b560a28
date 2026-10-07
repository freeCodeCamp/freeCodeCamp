type Line = number;
type Column = number;
type Kind = number;
type Name = number;
type Var = number;
type SourcesIndex = number;
type ScopesIndex = number;
type Mix<A, B, O> = (A & O) | (B & O);
export type OriginalScope = Mix<[
    Line,
    Column,
    Line,
    Column,
    Kind
], [
    Line,
    Column,
    Line,
    Column,
    Kind,
    Name
], {
    vars: Var[];
}>;
export type GeneratedRange = Mix<[
    Line,
    Column,
    Line,
    Column
], [
    Line,
    Column,
    Line,
    Column,
    SourcesIndex,
    ScopesIndex
], {
    callsite: CallSite | null;
    bindings: Binding[];
    isScope: boolean;
}>;
export type CallSite = [SourcesIndex, Line, Column];
type Binding = BindingExpressionRange[];
export type BindingExpressionRange = [Name] | [Name, Line, Column];
export declare function decodeOriginalScopes(input: string): OriginalScope[];
export declare function encodeOriginalScopes(scopes: OriginalScope[]): string;
export declare function decodeGeneratedRanges(input: string): GeneratedRange[];
export declare function encodeGeneratedRanges(ranges: GeneratedRange[]): string;
export {};
//# sourceMappingURL=scopes.d.ts.map