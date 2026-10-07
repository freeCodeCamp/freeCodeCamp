import { type TSchema, type TObjectOptions } from './schema.mjs';
import { type StaticType, type StaticDirection } from './static.mjs';
import { type TProperties } from './properties.mjs';
import { type TInteger } from './integer.mjs';
import { type TNumber } from './number.mjs';
import { type TString } from './string.mjs';
import { type TDeferred } from './deferred.mjs';
import { type TTemplateLiteralStatic } from '../engine/template_literal/index.mjs';
import { type TTemplateLiteralDecodeUnsafe } from '../engine/template_literal/decode.mjs';
import { type TRecordAction } from '../engine/record/instantiate.mjs';
type StaticPropertyKey<Key extends string, Result extends PropertyKey = (Key extends TStringKey ? string : Key extends TIntegerKey ? number : Key extends TNumberKey ? number : Key extends `^${string}$` ? TTemplateLiteralStatic<Key> : string)> = Result;
export type StaticRecord<Stack extends string[], Direction extends StaticDirection, Context extends TProperties, This extends TProperties, Key extends string, Value extends TSchema, StaticKey extends PropertyKey = StaticPropertyKey<Key>, StaticValue extends unknown = StaticType<Stack, Direction, Context, This, Value>, Result extends Record<PropertyKey, unknown> = Record<StaticKey, StaticValue>> = Result;
export type TStringKey = typeof StringKey;
export type TIntegerKey = typeof IntegerKey;
export type TNumberKey = typeof NumberKey;
export declare const IntegerKey = "^-?(?:0|[1-9][0-9]*)$";
export declare const NumberKey = "^-?(?:0|[1-9][0-9]*)(?:.[0-9]+)?$";
export declare const StringKey = "^.*$";
export interface TRecord<Key extends string = string, Value extends TSchema = TSchema> extends TSchema {
    '~kind': 'Record';
    type: 'object';
    patternProperties: {
        [_ in Key]: Value;
    };
}
/** Represents a deferred Record action. */
export type TRecordDeferred<Key extends TSchema = TSchema, Value extends TSchema = TSchema> = (TDeferred<'Record', [Key, Value]>);
/** Represents a deferred Record action. */
export declare function RecordDeferred<Key extends TSchema, Value extends TSchema>(key: Key, value: Value, options?: TObjectOptions): TRecordDeferred<Key, Value>;
/** Creates a Record type. */
export declare function Record<Key extends TSchema, Value extends TSchema>(key: Key, value: Value, options?: TObjectOptions): TRecordAction<Key, Value>;
/** Creates a Record type from regular expression pattern. */
export declare function RecordFromPattern<Pattern extends string, Value extends TSchema>(key: Pattern, value: Value): TRecord<Pattern, Value>;
/** Returns the raw string pattern used for the Record key  */
export type TRecordPattern<Type extends TRecord, Result extends string = Extract<keyof Type['patternProperties'], string>> = Result;
/** Returns the raw string pattern used for the Record key  */
export declare function RecordPattern<Type extends TRecord>(type: Type): TRecordPattern<Type>;
/** Returns the Record key as a TypeBox type  */
export type TRecordKey<Type extends TRecord, Pattern extends string = TRecordPattern<Type>, Result extends TSchema = (Pattern extends typeof StringKey ? TString : Pattern extends typeof IntegerKey ? TInteger : Pattern extends typeof NumberKey ? TNumber : TTemplateLiteralDecodeUnsafe<Pattern>)> = Result;
/** Returns the Record key as a TypeBox type  */
export declare function RecordKey<Type extends TRecord>(type: Type): TRecordKey<Type>;
export type TRecordValue<Type extends TRecord, Result extends TSchema = Type['patternProperties'][TRecordPattern<Type>]> = Result;
export declare function RecordValue<Type extends TRecord>(type: Type): TRecordValue<Type>;
export declare function IsRecord(value: unknown): value is TRecord;
export declare function RecordOptions(type: TRecord): TObjectOptions;
export {};
