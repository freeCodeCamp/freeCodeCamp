import { type TUnreachable } from '../../../system/unreachable/index.mjs';
import { type TSchema } from '../../types/schema.mjs';
import { type TProperties } from '../../types/properties.mjs';
import { type TObject } from '../../types/object.mjs';
import { type TCollapseToObject } from '../object/index.mjs';
/** Transforms a type into a TProperties used for indexing operations */
export type TToIndexable<Type extends TSchema, Collapsed extends TSchema = TCollapseToObject<Type>, Result extends TProperties = (Collapsed extends TObject<infer Properties extends TProperties> ? Properties : TUnreachable)> = Result;
/** Transforms a type into a TProperties used for indexing operations */
export declare function ToIndexable<Type extends TSchema>(type: Type): TToIndexable<Type>;
