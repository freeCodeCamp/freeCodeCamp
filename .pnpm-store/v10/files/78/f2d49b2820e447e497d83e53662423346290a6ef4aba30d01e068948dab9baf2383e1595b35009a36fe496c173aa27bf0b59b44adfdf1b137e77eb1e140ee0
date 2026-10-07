import { type TProperties } from '../types/properties.mjs';
export type TResult = TExtendsUnion | TExtendsTrue | TExtendsFalse;
export interface TExtendsUnion<Inferred extends TProperties = TProperties> {
    '~kind': 'ExtendsUnion';
    inferred: Inferred;
}
export declare function ExtendsUnion<Inferred extends TProperties>(inferred: TProperties): TExtendsUnion<Inferred>;
export declare function IsExtendsUnion(value: unknown): value is TExtendsUnion;
export interface TExtendsTrue<Inferred extends TProperties = TProperties> {
    '~kind': 'ExtendsTrue';
    inferred: Inferred;
}
export declare function ExtendsTrue<Inferred extends TProperties>(inferred: TProperties): TExtendsTrue<Inferred>;
export declare function IsExtendsTrue(value: unknown): value is TExtendsTrue;
export interface TExtendsFalse {
    type: 'ExtendsFalse';
}
export declare function ExtendsFalse(): TExtendsFalse;
export declare function IsExtendsFalse(value: unknown): value is TExtendsFalse;
export type TExtendsTrueLike<Inferred extends TProperties = TProperties> = TExtendsUnion<Inferred> | TExtendsTrue<Inferred>;
export declare function IsExtendsTrueLike(value: unknown): value is TExtendsTrueLike;
export type MatchTrueLike = (inferred: TProperties) => unknown;
export type MatchFalse = () => unknown;
export declare function Match(result: TResult, true_: MatchTrueLike, false_: MatchFalse): unknown;
