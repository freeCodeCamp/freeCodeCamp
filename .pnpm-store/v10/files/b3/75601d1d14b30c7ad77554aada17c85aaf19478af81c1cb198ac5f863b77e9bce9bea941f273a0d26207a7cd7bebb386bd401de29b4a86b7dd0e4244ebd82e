import { type TSchema, type TSchemaOptions } from '../../types/schema.mjs';
import { type TProperties } from '../../types/properties.mjs';
import { type TRecordDeferred } from '../../types/record.mjs';
import { type TFromKey } from './from_key.mjs';
import { type TState, type TInstantiateType, type TCanInstantiate } from '../instantiate.mjs';
export type TRecordAction<Key extends TSchema, Value extends TSchema, Result extends TSchema = TCanInstantiate<[Key]> extends true ? TFromKey<Key, Value> : TRecordDeferred<Key, Value>> = Result;
export declare function RecordAction<Key extends TSchema, Value extends TSchema>(key: Key, value: Value, options: TSchemaOptions): TRecordAction<Key, Value>;
export type TRecordInstantiate<Context extends TProperties, State extends TState, Key extends TSchema, Value extends TSchema, InstantiatedKey extends TSchema = TInstantiateType<Context, State, Key>, InstantiatedValue extends TSchema = TInstantiateType<Context, State, Value>> = TRecordAction<InstantiatedKey, InstantiatedValue>;
export declare function RecordInstantiate<Context extends TProperties, State extends TState, Key extends TSchema, Value extends TSchema>(context: Context, state: State, key: Key, value: Value, options: TSchemaOptions): TRecordInstantiate<Context, State, Key, Value>;
