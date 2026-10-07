import { type TSchema } from './schema.mjs';
import { type Static } from './static.mjs';
/** Applies a Refine check to the given type. */
export type TRefineAdd<Type extends TSchema = TSchema> = ('~refine' extends keyof Type ? Type : TRefine<Type>);
/** Applies a Refine check to the given type. */
export declare function RefineAdd<Type extends TSchema>(type: Type, refinement: TRefinement<Type>): TRefineAdd<Type>;
/** Represents a type with embedded Refine check. */
export type TRefine<Type extends TSchema = TSchema> = (Type & {
    '~refine': TRefinement<Type>[];
});
export type TRefineCheckCallback<Type extends TSchema = TSchema> = (value: Static<Type>) => boolean;
export type TRefineErrorCallback<Type extends TSchema = TSchema> = (value: Static<Type>) => string;
export interface TRefinement<Type extends TSchema = TSchema> {
    check: TRefineCheckCallback<Type>;
    error: TRefineErrorCallback<Type>;
}
/** Refines a type with an explicit check */
export declare function Refine<Type extends TSchema>(type: Type, check: TRefineCheckCallback<Type>, error: TRefineErrorCallback<Type>): TRefineAdd<Type>;
/** Refines a type with an explicit check */
export declare function Refine<Type extends TSchema>(type: Type, check: TRefineCheckCallback<Type>): TRefineAdd<Type>;
/** @deprecated Use the error callback signature to generate error message. This overload will be removed in the next version  */
export declare function Refine<Type extends TSchema>(type: Type, check: TRefineCheckCallback<Type>, message: string): TRefineAdd<Type>;
/** Returns true if the given value is a TRefinement. */
export declare function IsRefinement(value: unknown): value is TRefinement;
/** Returns true if the given value is a TRefine. */
export declare function IsRefine(value: unknown): value is TRefine;
