import { SchemaComposer, EnumTypeComposer, ObjectTypeComposer, InputTypeComposer, InterfaceTypeComposer } from "graphql-compose";
export declare const SORTABLE_ENUM: {
    SORTABLE: string;
    NOT_SORTABLE: string;
    DEPRECATED_SORTABLE: string;
};
export declare const getSortOrderEnum: <TContext = any>({ schemaComposer, }: {
    schemaComposer: SchemaComposer<TContext>;
}) => EnumTypeComposer<TContext>;
export declare const getFieldsEnum: <TSource = any, TContext = any>({ schemaComposer, typeComposer, inputTypeComposer, }: {
    schemaComposer: SchemaComposer<TContext>;
    typeComposer: ObjectTypeComposer<TSource, TContext> | InterfaceTypeComposer<TSource, TContext>;
    inputTypeComposer: InputTypeComposer<TContext>;
}) => EnumTypeComposer<TContext>;
export declare const getSortInput: <TSource = any, TContext = any>({ schemaComposer, typeComposer, }: {
    schemaComposer: SchemaComposer<TContext>;
    typeComposer: ObjectTypeComposer<TSource, TContext>;
}) => InputTypeComposer<TContext>;
type Context = any;
export declare const getSortInputNestedObjects: ({ schemaComposer, typeComposer, }: {
    schemaComposer: SchemaComposer<Context>;
    typeComposer: ObjectTypeComposer<Context> | InterfaceTypeComposer<Context>;
}) => InputTypeComposer;
export {};
