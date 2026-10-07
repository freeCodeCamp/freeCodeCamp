import { type TSchema } from '../../types/schema.mjs';
import { type TRecord, StringKey } from '../../types/record.mjs';
import { type TString } from '../../types/string.mjs';
export type TFromStringKey<_Key extends TSchema, Value extends TSchema, Result extends TSchema = TRecord<typeof StringKey, Value>> = Result;
export declare function FromStringKey<Key extends TString, Value extends TSchema>(key: Key, value: Value): TFromStringKey<Key, Value>;
