import { type TSchema } from '../../types/schema.mjs';
import { type TInteger } from '../../types/integer.mjs';
import { type TRecord, IntegerKey } from '../../types/record.mjs';
export type TFromIntegerKey<_Key extends TInteger, Value extends TSchema, Result extends TSchema = TRecord<typeof IntegerKey, Value>> = Result;
export declare function FromIntegerKey<Key extends TInteger, Value extends TSchema>(_key: Key, value: Value): TFromIntegerKey<Key, Value>;
