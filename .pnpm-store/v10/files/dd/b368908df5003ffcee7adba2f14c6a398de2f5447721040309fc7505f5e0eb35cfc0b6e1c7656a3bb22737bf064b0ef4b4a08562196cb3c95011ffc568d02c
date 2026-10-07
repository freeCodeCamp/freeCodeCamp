import { type TSchema } from '../../types/schema.mjs';
import { type TLiteral } from '../../types/literal.mjs';
import { type TNumber } from '../../types/number.mjs';
import { type TInteger } from '../../types/integer.mjs';
import { type TObject } from '../../types/object.mjs';
import { type TProperties } from '../../types/properties.mjs';
import { type TString } from '../../types/string.mjs';
import { type TRecord, StringKey } from '../../types/record.mjs';
import { type TFlatten } from '../evaluate/flatten.mjs';
type TStringOrNumberCheck<Types extends TSchema[]> = (Types extends [infer Left extends TSchema, ...infer Right extends TSchema[]] ? Left extends TString | TNumber | TInteger ? true : TStringOrNumberCheck<Right> : false);
type TTryBuildRecord<Types extends TSchema[], Value extends TSchema, Result extends TSchema | undefined = (TStringOrNumberCheck<Types> extends true ? TRecord<typeof StringKey, Value> : undefined)> = Result;
type TCreateProperties<Variants extends TSchema[], Value extends TSchema, Result extends TProperties = {}> = (Variants extends [infer Left extends TSchema, ...infer Right extends TSchema[]] ? Left extends TLiteral<string | number> ? TCreateProperties<Right, Value, Result & {
    [_ in Left['const']]: Value;
}> : TCreateProperties<Right, Value, Result> : {
    [Key in keyof Result]: Result[Key];
});
type TCreateObject<Variants extends TSchema[], Value extends TSchema, Properties extends TProperties = TCreateProperties<Variants, Value>, Result extends TSchema = TObject<Properties>> = Result;
export type TFromUnionKey<Types extends TSchema[], Value extends TSchema, Flattened extends TSchema[] = TFlatten<Types>, Record extends TSchema | undefined = TTryBuildRecord<Flattened, Value>, Result extends TSchema = (Record extends TSchema ? Record : TCreateObject<Flattened, Value>)> = Result;
export declare function FromUnionKey<Types extends TSchema[], Value extends TSchema>(types: [...Types], value: Value): TFromUnionKey<Types, Value>;
export {};
