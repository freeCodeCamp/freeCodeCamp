import { type TSchema } from '../../types/schema.mjs';
import { type TObject } from '../../types/object.mjs';
export type TFromBooleanKey<Value extends TSchema, Result extends TSchema = TObject<{
    true: Value;
    false: Value;
}>> = Result;
export declare function FromBooleanKey<Value extends TSchema>(value: Value): TFromBooleanKey<Value>;
