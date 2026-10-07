import { type TSchema } from '../../types/schema.mjs';
import { type TRecord, StringKey } from '../../types/record.mjs';
export type TFromAnyKey<Value extends TSchema, Result extends TSchema = TRecord<typeof StringKey, Value>> = Result;
export declare function FromAnyKey<Value extends TSchema>(value: Value): TFromAnyKey<Value>;
