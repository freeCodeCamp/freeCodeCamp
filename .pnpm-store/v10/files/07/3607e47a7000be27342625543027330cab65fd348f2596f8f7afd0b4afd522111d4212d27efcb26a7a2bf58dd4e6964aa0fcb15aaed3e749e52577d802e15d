import { type TSchema } from '../../types/schema.mjs';
import { type TObject } from '../../types/object.mjs';
import { type TProperties } from '../../types/properties.mjs';
import { type TTuple } from '../../types/tuple.mjs';
export type TTupleElementsToProperties<Types extends TSchema[], Result extends TProperties = {}> = (Types extends [...infer Left extends TSchema[], infer Right extends TSchema] ? TTupleElementsToProperties<Left, {
    [_ in Left['length']]: Right;
} & Result> : {
    [Key in keyof Result]: Result[Key];
});
export declare function TupleElementsToProperties<Types extends TSchema[]>(types: [...Types]): TTupleElementsToProperties<Types>;
export type TTupleToObject<Type extends TTuple, Properties extends TProperties = TTupleElementsToProperties<Type['items']>, Result extends TSchema = TObject<Properties>> = Result;
export declare function TupleToObject<Type extends TTuple>(type: Type): TTupleToObject<Type>;
