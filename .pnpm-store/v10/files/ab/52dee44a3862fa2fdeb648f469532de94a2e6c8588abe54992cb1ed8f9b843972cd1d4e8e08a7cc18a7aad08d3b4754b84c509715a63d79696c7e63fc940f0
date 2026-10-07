import type { Maybe } from '../jsutils/Maybe';
import type { DirectiveLocation } from '../language/directiveLocation';
export interface IntrospectionOptions {
  /**
   * Whether to include descriptions in the introspection result.
   * Default: true
   */
  descriptions?: boolean;
  /**
   * Whether to include `specifiedByURL` in the introspection result.
   * Default: false
   */
  specifiedByUrl?: boolean;
  /**
   * Whether to include `isRepeatable` flag on directives.
   * Default: false
   */
  directiveIsRepeatable?: boolean;
  /**
   * Whether to include `description` field on schema.
   * Default: false
   */
  schemaDescription?: boolean;
  /**
   * Whether target GraphQL server support deprecation of input values.
   * Default: false
   */
  inputValueDeprecation?: boolean;
  /**
   * Whether target GraphQL server supports `@oneOf` input objects.
   * Default: false
   */
  oneOf?: boolean;
}
/**
 * Produce the GraphQL query recommended for a full schema introspection.
 * Accepts optional IntrospectionOptions.
 */
export declare function getIntrospectionQuery(
  options?: IntrospectionOptions,
): string;
export interface IntrospectionQuery {
  readonly __schema: IntrospectionSchema;
}
export interface IntrospectionSchema {
  readonly description?: Maybe<string>;
  readonly queryType: IntrospectionNamedTypeRef<IntrospectionObjectType>;
  readonly mutationType: Maybe<
    IntrospectionNamedTypeRef<IntrospectionObjectType>
  >;
  readonly subscriptionType: Maybe<
    IntrospectionNamedTypeRef<IntrospectionObjectType>
  >;
  readonly types: ReadonlyArray<IntrospectionType>;
  readonly directives: ReadonlyArray<IntrospectionDirective>;
}
export declare type IntrospectionType =
  | IntrospectionScalarType
  | IntrospectionObjectType
  | IntrospectionInterfaceType
  | IntrospectionUnionType
  | IntrospectionEnumType
  | IntrospectionInputObjectType;
export declare type IntrospectionOutputType =
  | IntrospectionScalarType
  | IntrospectionObjectType
  | IntrospectionInterfaceType
  | IntrospectionUnionType
  | IntrospectionEnumType;
export declare type IntrospectionInputType =
  | IntrospectionScalarType
  | IntrospectionEnumType
  | IntrospectionInputObjectType;
export interface IntrospectionScalarType {
  readonly kind: 'SCALAR';
  readonly name: string;
  readonly description?: Maybe<string>;
  readonly specifiedByURL?: Maybe<string>;
}
export interface IntrospectionObjectType {
  readonly kind: 'OBJECT';
  readonly name: string;
  readonly description?: Maybe<string>;
  readonly fields: ReadonlyArray<IntrospectionField>;
  readonly interfaces: ReadonlyArray<
    IntrospectionNamedTypeRef<IntrospectionInterfaceType>
  >;
}
export interface IntrospectionInterfaceType {
  readonly kind: 'INTERFACE';
  readonly name: string;
  readonly description?: Maybe<string>;
  readonly fields: ReadonlyArray<IntrospectionField>;
  readonly interfaces: ReadonlyArray<
    IntrospectionNamedTypeRef<IntrospectionInterfaceType>
  >;
  readonly possibleTypes: ReadonlyArray<
    IntrospectionNamedTypeRef<IntrospectionObjectType>
  >;
}
export interface IntrospectionUnionType {
  readonly kind: 'UNION';
  readonly name: string;
  readonly description?: Maybe<string>;
  readonly possibleTypes: ReadonlyArray<
    IntrospectionNamedTypeRef<IntrospectionObjectType>
  >;
}
export interface IntrospectionEnumType {
  readonly kind: 'ENUM';
  readonly name: string;
  readonly description?: Maybe<string>;
  readonly enumValues: ReadonlyArray<IntrospectionEnumValue>;
}
export interface IntrospectionInputObjectType {
  readonly kind: 'INPUT_OBJECT';
  readonly name: string;
  readonly description?: Maybe<string>;
  readonly inputFields: ReadonlyArray<IntrospectionInputValue>;
  readonly isOneOf: boolean;
}
export interface IntrospectionListTypeRef<
  T extends IntrospectionTypeRef = IntrospectionTypeRef,
> {
  readonly kind: 'LIST';
  readonly ofType: T;
}
export interface IntrospectionNonNullTypeRef<
  T extends IntrospectionTypeRef = IntrospectionTypeRef,
> {
  readonly kind: 'NON_NULL';
  readonly ofType: T;
}
export declare type IntrospectionTypeRef =
  | IntrospectionNamedTypeRef
  | IntrospectionListTypeRef
  | IntrospectionNonNullTypeRef<
      IntrospectionNamedTypeRef | IntrospectionListTypeRef
    >;
export declare type IntrospectionOutputTypeRef =
  | IntrospectionNamedTypeRef<IntrospectionOutputType>
  | IntrospectionListTypeRef<IntrospectionOutputTypeRef>
  | IntrospectionNonNullTypeRef<
      | IntrospectionNamedTypeRef<IntrospectionOutputType>
      | IntrospectionListTypeRef<IntrospectionOutputTypeRef>
    >;
export declare type IntrospectionInputTypeRef =
  | IntrospectionNamedTypeRef<IntrospectionInputType>
  | IntrospectionListTypeRef<IntrospectionInputTypeRef>
  | IntrospectionNonNullTypeRef<
      | IntrospectionNamedTypeRef<IntrospectionInputType>
      | IntrospectionListTypeRef<IntrospectionInputTypeRef>
    >;
export interface IntrospectionNamedTypeRef<
  T extends IntrospectionType = IntrospectionType,
> {
  readonly kind: T['kind'];
  readonly name: string;
}
export interface IntrospectionField {
  readonly name: string;
  readonly description?: Maybe<string>;
  readonly args: ReadonlyArray<IntrospectionInputValue>;
  readonly type: IntrospectionOutputTypeRef;
  readonly isDeprecated: boolean;
  readonly deprecationReason: Maybe<string>;
}
export interface IntrospectionInputValue {
  readonly name: string;
  readonly description?: Maybe<string>;
  readonly type: IntrospectionInputTypeRef;
  readonly defaultValue: Maybe<string>;
  readonly isDeprecated?: boolean;
  readonly deprecationReason?: Maybe<string>;
}
export interface IntrospectionEnumValue {
  readonly name: string;
  readonly description?: Maybe<string>;
  readonly isDeprecated: boolean;
  readonly deprecationReason: Maybe<string>;
}
export interface IntrospectionDirective {
  readonly name: string;
  readonly description?: Maybe<string>;
  readonly isRepeatable?: boolean;
  readonly locations: ReadonlyArray<DirectiveLocation>;
  readonly args: ReadonlyArray<IntrospectionInputValue>;
}
