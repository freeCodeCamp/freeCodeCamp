import { type TSchema } from '../../types/schema.mjs';
import { type TNumber } from '../../types/number.mjs';
import { type TRecord, NumberKey } from '../../types/record.mjs';
export type TFromNumberKey<Key extends TNumber, Value extends TSchema, Result extends TSchema = TRecord<typeof NumberKey, Value>> = Result;
export declare function FromNumberKey<Key extends TNumber, Value extends TSchema>(_key: Key, value: Value): TFromNumberKey<Key, Value>;
