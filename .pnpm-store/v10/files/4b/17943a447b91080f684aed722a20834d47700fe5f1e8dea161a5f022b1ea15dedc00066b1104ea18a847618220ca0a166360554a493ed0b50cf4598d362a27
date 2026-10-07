import { type TSchema } from '../../types/schema.mjs';
import { type TLiteralValue } from '../../types/literal.mjs';
import { type TObject } from '../../types/object.mjs';
export type TFromLiteralKey<Key extends TLiteralValue, Value extends TSchema, Result extends TSchema = (Key extends string | number ? TObject<{
    [_ in Key]: Value;
}> : Key extends false ? TObject<{
    false: Value;
}> : Key extends true ? TObject<{
    true: Value;
}> : TObject<{}>)> = Result;
export declare function FromLiteralKey<Key extends TLiteralValue, Value extends TSchema>(key: Key, value: Value): TFromLiteralKey<Key, Value>;
