import { type TSchema } from '../../types/index.mjs';
import { type TEnumValue } from '../../types/enum.mjs';
import { type TEnumValuesToUnion } from '../enum/enum_to_union.mjs';
import { type TFromKey } from './from_key.mjs';
export type TFromEnumKey<Values extends TEnumValue[], Value extends TSchema, UnionKey extends TSchema = TEnumValuesToUnion<Values>, Result extends TSchema = TFromKey<UnionKey, Value>> = Result;
export declare function FromEnumKey<Values extends TEnumValue[], Value extends TSchema>(values: [...Values], value: Value): TFromEnumKey<Values, Value>;
