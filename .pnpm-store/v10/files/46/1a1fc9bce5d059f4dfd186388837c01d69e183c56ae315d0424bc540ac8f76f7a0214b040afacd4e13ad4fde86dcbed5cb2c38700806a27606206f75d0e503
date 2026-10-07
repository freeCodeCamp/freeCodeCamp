import { GraphQLEnumType, GraphQLScalarType } from "graphql";
import { InputTypeComposer, SchemaComposer, ObjectTypeComposer, EnumTypeComposer, InterfaceTypeComposer, UnionTypeComposer, ScalarTypeComposer, NonNullComposer } from "graphql-compose";
type Context = any;
type AnyComposeType<TContext> = ObjectTypeComposer<any, TContext> | InputTypeComposer<TContext> | EnumTypeComposer<TContext> | InterfaceTypeComposer<any, TContext> | UnionTypeComposer<any, TContext> | ScalarTypeComposer<TContext>;
export declare const SEARCHABLE_ENUM: {
    readonly SEARCHABLE: "SEARCHABLE";
    readonly NOT_SEARCHABLE: "NON_SEARCHABLE";
    readonly DEPRECATED_SEARCHABLE: "DERPECATED_SEARCHABLE";
};
export type IVisitContext = {
    deprecationReason?: string;
} | undefined | null;
export type OnEnter = (visitorContext: {
    fieldName: string;
    typeComposer: AnyComposeType<Context>;
}) => IVisitContext;
export type LeafInput = InputTypeComposer<Context> | NonNullComposer<InputTypeComposer<Context>> | ((arg: {
    type: GraphQLScalarType | GraphQLEnumType;
    schemaComposer: SchemaComposer<Context>;
}) => InputTypeComposer<Context>) | EnumTypeComposer<Context> | NonNullComposer<EnumTypeComposer<Context>>;
export type ListInput = (arg: {
    inputTypeComposer: InputTypeComposer;
    schemaComposer: SchemaComposer<Context>;
}) => InputTypeComposer<Context>;
export declare const convertToNestedInputType: ({ schemaComposer, typeComposer, postfix, onEnter, leafInputComposer, listInputComposer, }: {
    schemaComposer: SchemaComposer<Context>;
    typeComposer: ObjectTypeComposer<Context> | InterfaceTypeComposer<Context>;
    postfix: string;
    onEnter: OnEnter;
    leafInputComposer: LeafInput;
    listInputComposer?: ListInput | undefined;
}) => InputTypeComposer;
export {};
