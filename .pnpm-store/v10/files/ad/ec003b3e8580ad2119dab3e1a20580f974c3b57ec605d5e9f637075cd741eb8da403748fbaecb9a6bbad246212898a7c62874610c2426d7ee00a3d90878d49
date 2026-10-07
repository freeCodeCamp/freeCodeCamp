import { type TSchema } from '../types/schema.mjs';
import { type TProperties } from '../types/properties.mjs';
import { type TArray } from '../types/array.mjs';
import { type TImmutable } from '../types/_immutable.mjs';
import { type TExtendsRight } from './extends_right.mjs';
import { type TExtendsLeft } from './extends_left.mjs';
import * as Result from './result.mjs';
type TExtendsImmutable<Left extends TSchema, Right extends TSchema, IsImmutableLeft extends boolean = Left extends TImmutable ? true : false, IsImmutableRight extends boolean = Right extends TImmutable ? true : false, Result extends boolean = [
    IsImmutableLeft,
    IsImmutableRight
] extends [true, true] ? true : [
    IsImmutableLeft,
    IsImmutableRight
] extends [false, true] ? true : [
    IsImmutableLeft,
    IsImmutableRight
] extends [true, false] ? false : true> = Result;
export type TExtendsArray<Inferred extends TProperties, ArrayLeft extends TSchema, Left extends TSchema, Right extends TSchema> = (Right extends TArray<infer Type extends TSchema> ? TExtendsImmutable<ArrayLeft, Right> extends true ? TExtendsLeft<Inferred, Left, Type> : Result.TExtendsFalse : TExtendsRight<Inferred, ArrayLeft, Right>);
export declare function ExtendsArray<Inferred extends TProperties, ArrayLeft extends TSchema, Left extends TSchema, Right extends TSchema>(inferred: Inferred, arrayLeft: ArrayLeft, left: Left, right: Right): TExtendsArray<Inferred, ArrayLeft, Left, Right>;
export {};
