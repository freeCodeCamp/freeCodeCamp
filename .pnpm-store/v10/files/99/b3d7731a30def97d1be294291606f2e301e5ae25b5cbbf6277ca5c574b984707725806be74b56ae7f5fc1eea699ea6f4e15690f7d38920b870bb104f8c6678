import { type TSchema } from '../../types/schema.mjs';
import { type TProperties } from '../../types/properties.mjs';
import { type TObject } from '../../types/object.mjs';
import { type TFromType } from './from_type.mjs';
export type TCollapseToObject<Type extends TSchema, Properties extends TProperties = TFromType<Type>, Result extends TSchema = TObject<Properties>> = Result;
/**
 * Collapses a type into a TObject schema. This is a lossy fast path used to
 * normalize arbitrary TSchema types into a TObject structure. This function is
 * primarily used in indexing operations where a normalized object structure
 * is required. If the type cannot be collapsed, an empty object schema is returned.
 */
export declare function CollapseToObject<Type extends TSchema>(type: Type): TCollapseToObject<Type>;
