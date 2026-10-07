import { type TProperties, type TSchema } from '../type/index.mjs';
import { type TExternal } from '../schema/index.mjs';
export interface CodeResult {
    /** External Variables  */
    External: TExternal;
    /** Generated Esm module. */
    Code: string;
}
/** Creates a standalone ESM validation module for the given type. */
export declare function Code<Type extends TSchema>(type: Type): CodeResult;
/** Creates a standalone ESM validation module for the given type. */
export declare function Code<Context extends TProperties, Type extends TSchema>(context: Context, type: Type): CodeResult;
