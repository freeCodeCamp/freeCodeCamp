/**
 * Derived types are types that make sense only when their base type exists
 *
 * Take this node for example:
 * {
 *   internal: { type: 'Foo' },
 *   fields: {
 *     bar: "string",
 *   }
 * }
 *
 * It will produce following types:
 * Foo
 * FooFields
 *
 * FooInputFilter
 * FooSortInput
 *
 * FooFieldsInputFilter
 * FooFieldsSortFilter
 * etc
 *
 * Derived types:
 *   Foo: FooFields, FooInputFilter, FooSortInput
 *   FooFields: FooFieldsInputFilter, FooFieldsSortFilter
 *
 * Caveats:
 *   Only types created via inference are marked as derived. So if in the example above
 *   user explicitly defines `FooFields` type (via `createTypes` call) it won't be considered
 *   a derived type
 */
import { ObjectTypeComposer, InterfaceTypeComposer, ScalarTypeComposer, SchemaComposer, InputTypeComposer, EnumTypeComposer, UnionTypeComposer } from "graphql-compose";
type AllTypeComposer = ObjectTypeComposer | InputTypeComposer | EnumTypeComposer | InterfaceTypeComposer | UnionTypeComposer | ScalarTypeComposer;
export declare const deleteFieldsOfDerivedTypes: ({ typeComposer }: {
    typeComposer: any;
}) => void;
export declare const clearDerivedTypes: ({ schemaComposer, typeComposer, }: {
    schemaComposer: SchemaComposer<any>;
    typeComposer: AllTypeComposer;
}) => void;
export declare const addDerivedType: ({ typeComposer, derivedTypeName, }: {
    typeComposer: AllTypeComposer;
    derivedTypeName: string;
}) => void;
export {};
