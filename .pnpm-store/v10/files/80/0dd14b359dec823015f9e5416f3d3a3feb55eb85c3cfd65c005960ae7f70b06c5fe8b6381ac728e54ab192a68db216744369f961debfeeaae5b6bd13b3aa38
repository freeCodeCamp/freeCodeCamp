import { type TInfer } from '../types/infer.mjs';
import { type TSchema } from '../types/schema.mjs';
import { type TOptional } from '../types/_optional.mjs';
import { type TProperties } from '../types/properties.mjs';
import { type TExtendsLeft } from './extends_left.mjs';
import * as Result from './result.mjs';
type TParameterCompare<Inferred extends TProperties, Left extends TSchema, LeftRest extends TSchema[], Right extends TSchema, RightRest extends TSchema[], CheckLeft extends TSchema = Right extends TInfer ? Left : Right, CheckRight extends TSchema = Right extends TInfer ? Right : Left, IsLeftOptional extends boolean = Left extends TOptional ? true : false, IsRightOptional extends boolean = Right extends TOptional ? true : false> = ([
    IsLeftOptional,
    IsRightOptional
] extends [false, true] ? Result.TExtendsFalse : TExtendsLeft<Inferred, CheckLeft, CheckRight> extends Result.TExtendsTrueLike<infer Inferred extends TProperties> ? TExtendsParameters<Inferred, LeftRest, RightRest> : Result.TExtendsFalse);
type TParameterRight<Inferred extends TProperties, Left extends TSchema, LeftRest extends TSchema[], RightRest extends TSchema[]> = (RightRest extends [infer Head extends TSchema, ...infer Tail extends TSchema[]] ? TParameterCompare<Inferred, Left, LeftRest, Head, Tail> : Left extends TOptional ? Result.TExtendsTrue<Inferred> : Result.TExtendsFalse);
type TParameterLeft<Inferred extends TProperties, LeftRest extends TSchema[], RightRest extends TSchema[]> = (LeftRest extends [infer Head extends TSchema, ...infer Tail extends TSchema[]] ? TParameterRight<Inferred, Head, Tail, RightRest> : Result.TExtendsTrue<Inferred>);
export type TExtendsParameters<Inferred extends TProperties, Left extends TSchema[], Right extends TSchema[]> = TParameterLeft<Inferred, Left, Right>;
export declare function ExtendsParameters<Inferred extends TProperties, Left extends TSchema[], Right extends TSchema[]>(inferred: Inferred, left: Left, right: Right): TExtendsParameters<Inferred, Left, Right>;
export {};
