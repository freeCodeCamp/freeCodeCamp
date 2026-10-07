/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict
 * @format
 * @emails oncall+relay
 */

// flowlint ambiguous-object-type:error

'use strict';

const {createCompilerError} = require('./CompilerError');
const {isSchemaDefinitionAST} = require('./SchemaUtils');
const {
  GraphQLFloat,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLString,
  GraphQLID,
  parse,
  parseType,
  print,
  valueFromASTUntyped,
} = require('graphql');

import type {Field as IRField} from './IR';
import type {
  DirectiveLocationEnum,
  DocumentNode,
  Source,
  TypeNode,
  ValueNode,
  ObjectTypeDefinitionNode,
  InterfaceTypeDefinitionNode,
  InputObjectTypeDefinitionNode,
  SchemaDefinitionNode,
  ScalarTypeDefinitionNode,
  EnumTypeDefinitionNode,
  UnionTypeDefinitionNode,
  DirectiveDefinitionNode,
  TypeSystemDefinitionNode,
  TypeSystemExtensionNode,
  ObjectTypeExtensionNode,
  InterfaceTypeExtensionNode,
  FieldDefinitionNode,
} from 'graphql';

type ExtensionNode =
  | TypeSystemDefinitionNode
  | TypeSystemExtensionNode
  | DirectiveDefinitionNode;

export opaque type TypeID = BaseType | BaseList | BaseNonNull;

type BaseType =
  | ScalarType
  | EnumType
  | UnionType
  | ObjectType
  | InputObjectType
  | InterfaceType;

type BaseList = List<TypeID>;
type BaseNonNull = NonNull<BaseType | BaseList>;

export opaque type ScalarTypeID: ScalarFieldTypeID = ScalarType;
export opaque type EnumTypeID: ScalarFieldTypeID = EnumType;
export opaque type UnionTypeID: CompositeTypeID = UnionType;
export opaque type InterfaceTypeID: CompositeTypeID = InterfaceType;
export opaque type ObjectTypeID: CompositeTypeID = ObjectType;
export opaque type InputObjectTypeID: TypeID = InputObjectType;
export opaque type CompositeTypeID: LinkedFieldTypeID = CompositeType;
export opaque type AbstractTypeID: CompositeTypeID = UnionType | InterfaceType;

export opaque type ScalarFieldTypeID: TypeID =
  | ScalarFieldBaseType
  | ScalarFieldList
  | ScalarFieldNonNull;

export opaque type LinkedFieldTypeID: TypeID =
  | LinkedFieldBaseType
  | LinkedFieldList
  | LinkedFieldNonNull;

export opaque type InputTypeID: TypeID =
  | InputBaseType
  | InputTypeList
  | InputTypeNonNull;

type ScalarFieldBaseType = ScalarType | EnumType;
type ScalarFieldList = List<ScalarFieldTypeID>;
type ScalarFieldNonNull = NonNull<ScalarFieldBaseType | ScalarFieldList>;

type CompositeType = ObjectType | InterfaceType | UnionType;
type LinkedFieldBaseType = CompositeType;
type LinkedFieldList = List<LinkedFieldTypeID>;
type LinkedFieldNonNull = NonNull<LinkedFieldBaseType | LinkedFieldList>;

type InputBaseType = InputObjectType | ScalarType | EnumType;
type InputTypeList = List<InputTypeID>;
type InputTypeNonNull = NonNull<InputBaseType | InputTypeList>;

type Fetchable = $ReadOnly<{|
  field_name: string,
|}>;

export opaque type FieldID = Field;

export type Argument = $ReadOnly<{|
  name: string,
  type: InputTypeID,
  defaultValue: mixed,
|}>;

export type Directive = $ReadOnly<{|
  args: $ReadOnlyArray<Argument>,
  isClient: boolean,
  locations: $ReadOnlyArray<DirectiveLocationEnum>,
  name: string,
|}>;

type DirectiveMap = Map<string, Directive>;

type InternalArgumentStruct = $ReadOnly<{|
  name: string,
  typeNode: TypeNode,
  defaultValue: ?ValueNode,
|}>;

type FieldDefinition = {|
  +arguments: $ReadOnlyArray<InternalArgumentStruct>,
  +directives: ?$ReadOnlyArray<DirectiveInvocation>,
  +type: TypeNode,
  +isClient: boolean,
|};

type DirectiveInvocation = {|
  +name: string,
  +args: $ReadOnlyArray<ArgumentValue>,
|};

type ArgumentValue = {|
  +name: string,
  +value: ValueNode,
|};

type InternalDirectiveMap = Map<string, InternalDirectiveStruct>;

type InternalDirectiveStruct = $ReadOnly<{|
  name: string,
  isClient: boolean,
  locations: $ReadOnlyArray<DirectiveLocationEnum>,
  args: $ReadOnlyArray<InternalArgumentStruct>,
|}>;

export type {Schema};

type FieldsMap = Map<string, Field>;
type TypeMapKey = string | symbol;

/**
 * @private
 */
class Type {
  +name: string;
  +isClient: boolean;
  constructor(name: string, isClient: boolean) {
    this.name = name;
    this.isClient = isClient;
  }
  toString(): string {
    return this.name;
  }
  toJSON(): string {
    return String(this);
  }
}

/**
 * @private
 */
class ScalarType extends Type {}

/**
 * @private
 */
class EnumType extends Type {
  +values: $ReadOnlyArray<string>;
  constructor(name: string, values: $ReadOnlyArray<string>, isClient: boolean) {
    super(name, isClient);
    this.values = values;
  }
}

/**
 * @private
 */
class UnionType extends Type {}

/**
 * @private
 */
class ObjectType extends Type {}
/**
 * @private
 */
class InputObjectType extends Type {}

/**
 * @private
 */
class InterfaceType extends Type {}

/**
 * @private
 */
class List<+T> {
  +ofType: T;
  +_typeString: string;

  constructor(type: T) {
    this.ofType = type;
    this._typeString = `[${String(this.ofType)}]`;
  }

  toString(): string {
    return this._typeString;
  }

  toJSON(): string {
    return this.toString();
  }
}

/**
 * @private
 */
class NonNull<+T> {
  +ofType: T;
  +_typeString: string;

  constructor(type: T) {
    this.ofType = type;
    this._typeString = `${String(this.ofType)}!`;
  }

  toString(): string {
    return this._typeString;
  }

  toJSON(): string {
    return this.toString();
  }
}

/**
 * @private
 */
class Field {
  +args: $ReadOnlyMap<string, Argument>;
  +directives: ?$ReadOnlyArray<DirectiveInvocation>;
  +belongsTo: CompositeType | InputObjectType;
  +name: string;
  +type: TypeID;
  +isClient: boolean;

  constructor(
    schema: Schema,
    name: string,
    type: TypeID,
    belongsTo: CompositeType | InputObjectType,
    args: $ReadOnlyArray<InternalArgumentStruct>,
    directives: ?$ReadOnlyArray<DirectiveInvocation>,
    isClient: boolean,
  ) {
    this.name = name;
    this.type = type;
    this.belongsTo = belongsTo;
    this.isClient = isClient;
    this.args = parseInputArgumentDefinitionsMap(schema, args);
    this.directives = directives;
  }
}

/**
 * @private
 */
function unwrap(type: TypeID): BaseType {
  if (type instanceof NonNull || type instanceof List) {
    return unwrap(type.ofType);
  }
  return type;
}

/**
 * @private
 */
function hasConcreteTypeThatImplements(
  schema: Schema,
  type: TypeID,
  interfaceType: InterfaceTypeID,
): boolean {
  return (
    isAbstractType(type) &&
    getConcreteTypes(schema, type).some(concreteType =>
      schema.implementsInterface(
        schema.assertCompositeType(concreteType),
        interfaceType,
      ),
    )
  );
}

/**
 * @private
 */
function getConcreteTypes(
  schema: Schema,
  type: AbstractTypeID,
): $ReadOnlyArray<ObjectTypeID> {
  const concreteTypes = new Set();
  schema.getPossibleTypes(type).forEach(possibleType => {
    if (isObject(possibleType)) {
      concreteTypes.add(possibleType);
    }
  });
  return Array.from(concreteTypes);
}

const TYPENAME_FIELD = '__typename';
const CLIENT_ID_FIELD = '__id';
const QUERY_TYPE_KEY = Symbol('Query');
const MUTATION_TYPE_KEY = Symbol('Mutation');
const SUBSCRIPTION_TYPE_KEY = Symbol('Subscription');

function isScalar(type: mixed): boolean %checks {
  return type instanceof ScalarType;
}

function isObject(type: mixed): boolean %checks {
  return type instanceof ObjectType;
}

function isEnum(type: mixed): boolean %checks {
  return type instanceof EnumType;
}

function isUnion(type: mixed): boolean %checks {
  return type instanceof UnionType;
}

function isInputObject(type: mixed): boolean %checks {
  return type instanceof InputObjectType;
}

function isInterface(type: mixed): boolean %checks {
  return type instanceof InterfaceType;
}

function isWrapper(type: mixed): boolean %checks {
  return type instanceof List || type instanceof NonNull;
}

function isBaseType(type: mixed): boolean %checks {
  return (
    type instanceof ScalarType ||
    type instanceof ObjectType ||
    type instanceof EnumType ||
    type instanceof UnionType ||
    type instanceof InputObjectType ||
    type instanceof InterfaceType
  );
}

function isAbstractType(type: mixed): boolean %checks {
  return type instanceof UnionType || type instanceof InterfaceType;
}

function isCompositeType(type: mixed): boolean %checks {
  return (
    type instanceof ObjectType ||
    type instanceof UnionType ||
    type instanceof InterfaceType
  );
}

function isInputType(type: mixed): boolean %checks {
  return (
    type instanceof InputObjectType ||
    type instanceof ScalarType ||
    type instanceof EnumType
  );
}

class Schema {
  +_typeMap: TypeMap;
  +_directiveMap: DirectiveMap;
  +_fieldsMap: Map<Type, FieldsMap>;
  +_typeWrappersMap: Map<TypeMapKey, TypeID>;
  +_typeNameMap: Map<Type, Field>;
  +_clientIdMap: Map<Type, Field>;

  /**
   * @private
   */
  constructor(typeMap: TypeMap) {
    this._typeMap = typeMap;
    this._typeWrappersMap = new Map();
    this._fieldsMap = new Map();
    this._typeNameMap = new Map();
    this._clientIdMap = new Map();
    this._directiveMap = new Map(
      typeMap.getDirectives().map(directive => {
        return [
          directive.name,
          {
            locations: directive.locations,
            args: parseInputArgumentDefinitions(this, directive.args),
            name: directive.name,
            isClient: directive.isClient,
          },
        ];
      }),
    );
  }

  getTypes(): $ReadOnlyArray<TypeID> {
    return this._typeMap.getTypes();
  }

  getTypeFromAST(typeNode: TypeNode): ?TypeID {
    if (typeNode.kind === 'NonNullType') {
      const innerType = this.getTypeFromAST(typeNode.type);
      if (!innerType) {
        return;
      }
      if (innerType instanceof NonNull) {
        throw createCompilerError(
          'Unable to wrap non-nullable type with non-null wrapper.',
        );
      }
      const cacheKey = `${this.getTypeString(innerType)}!`;
      let type = this._typeWrappersMap.get(cacheKey);
      if (type) {
        return type;
      }
      type = new NonNull(innerType);
      this._typeWrappersMap.set(cacheKey, type);
      return type;
    } else if (typeNode.kind === 'ListType') {
      const innerType = this.getTypeFromAST(typeNode.type);
      if (!innerType) {
        return;
      }
      const cacheKey = `[${this.getTypeString(innerType)}]`;
      let type = this._typeWrappersMap.get(cacheKey);
      if (type) {
        return type;
      }
      type = new List(innerType);
      this._typeWrappersMap.set(cacheKey, type);
      return type;
    }
    return this._typeMap.getTypeByName(typeNode.name.value);
  }

  _getRawType(typeName: TypeMapKey): ?TypeID {
    const type = this._typeWrappersMap.get(typeName);
    if (type) {
      return type;
    }
    if (typeof typeName === 'string') {
      return this.getTypeFromAST(parseType(typeName));
    } else {
      let operationType;
      if (typeName === QUERY_TYPE_KEY) {
        operationType = this._typeMap.getQueryType();
      } else if (typeName === MUTATION_TYPE_KEY) {
        operationType = this._typeMap.getMutationType();
      } else if (typeName === SUBSCRIPTION_TYPE_KEY) {
        operationType = this._typeMap.getSubscriptionType();
      }
      if (operationType instanceof ObjectType) {
        return operationType;
      }
    }
  }

  getTypeFromString(typeName: string): ?TypeID {
    return this._getRawType(typeName);
  }

  expectTypeFromString(typeName: string): TypeID {
    const type = this.getTypeFromString(typeName);
    if (type == null) {
      throw createCompilerError(`Unknown type: '${typeName}'.`);
    }
    return type;
  }

  expectTypeFromAST(ast: TypeNode): TypeID {
    const type = this.getTypeFromAST(ast);
    if (type == null) {
      throw createCompilerError(`Unknown type: '${print(ast)}'.`, null, [ast]);
    }
    return type;
  }

  getNonNullType(type: TypeID): TypeID {
    if (type instanceof NonNull) {
      return type;
    }
    const cacheKey = `${String(type)}!`;
    let nonNullType = this._typeWrappersMap.get(cacheKey);
    if (nonNullType) {
      return nonNullType;
    }
    nonNullType = new NonNull(type);
    this._typeWrappersMap.set(cacheKey, nonNullType);
    return nonNullType;
  }

  getRawType(type: TypeID): TypeID {
    return unwrap(type);
  }

  getNullableType(type: TypeID): TypeID {
    if (type instanceof NonNull) {
      return type.ofType;
    }
    return type;
  }

  getListItemType(type: TypeID): TypeID {
    if (type instanceof List) {
      return type.ofType;
    }
    return type;
  }

  mapListItemType(type: TypeID, mapper: (inner: TypeID) => TypeID): TypeID {
    if (!(type instanceof List)) {
      throw createCompilerError('Expected List type');
    }
    const innerType = mapper(type.ofType);
    const cacheKey = `[${this.getTypeString(innerType)}]`;
    let newType = this._typeWrappersMap.get(cacheKey);
    if (newType) {
      return newType;
    }
    newType = new List(innerType);
    this._typeWrappersMap.set(cacheKey, newType);
    return newType;
  }

  areEqualTypes(typeA: TypeID, typeB: TypeID): boolean {
    if (typeA === typeB) {
      return true;
    }
    if (typeA instanceof NonNull && typeB instanceof NonNull) {
      return this.areEqualTypes(typeA.ofType, typeB.ofType);
    }
    if (typeA instanceof List && typeB instanceof List) {
      return this.areEqualTypes(typeA.ofType, typeB.ofType);
    }
    if (isBaseType(typeA) && isBaseType(typeB)) {
      return typeA.name === typeB.name;
    }
    return false;
  }

  /**
   * Determine if the given type may implement the named type:
   * - it is the named type
   * - it implements the named interface
   * - it is an abstract type and *some* of its concrete types may
   *   implement the named type
   */
  mayImplement(type: CompositeTypeID, interfaceType: InterfaceTypeID): boolean {
    return (
      this.areEqualTypes(type, interfaceType) ||
      this.implementsInterface(type, interfaceType) ||
      (this.isAbstractType(type) &&
        hasConcreteTypeThatImplements(this, type, interfaceType))
    );
  }

  implementsInterface(
    type: CompositeTypeID,
    interfaceType: InterfaceTypeID,
  ): boolean {
    return this.getInterfaces(type).some(typeInterface =>
      this.areEqualTypes(typeInterface, interfaceType),
    );
  }

  canHaveSelections(type: TypeID): boolean {
    return this.isObject(type) || this.isInterface(type);
  }

  getTypeString(type: TypeID): string {
    return type.toString();
  }

  isTypeSubTypeOf(maybeSubType: TypeID, superType: TypeID): boolean {
    // Equivalent type is a valid subtype
    if (maybeSubType === superType) {
      return true;
    }

    // If superType is non-null, maybeSubType must also be non-null.
    if (superType instanceof NonNull) {
      if (maybeSubType instanceof NonNull) {
        return this.isTypeSubTypeOf(maybeSubType.ofType, superType.ofType);
      }
      return false;
    }
    if (maybeSubType instanceof NonNull) {
      // If superType is nullable, maybeSubType may be non-null or nullable.
      return this.isTypeSubTypeOf(maybeSubType.ofType, superType);
    }

    // If superType type is a list, maybeSubType type must also be a list.
    if (superType instanceof List) {
      if (maybeSubType instanceof List) {
        return this.isTypeSubTypeOf(maybeSubType.ofType, superType.ofType);
      }
      return false;
    }
    if (maybeSubType instanceof List) {
      // If superType is not a list, maybeSubType must also be not a list.
      return false;
    }

    // If superType type is an abstract type, maybeSubType type may be a currently
    // possible object type.
    if (
      this.isAbstractType(superType) &&
      this.isObject(maybeSubType) &&
      this.isPossibleType(
        this.assertAbstractType(superType),
        this.assertObjectType(maybeSubType),
      )
    ) {
      return true;
    }

    // Otherwise, maybeSubType is not a valid subtype of the superType.
    return false;
  }

  /**
   * Provided two composite types, determine if they "overlap". Two composite
   * types overlap when the Sets of possible concrete types for each intersect.
   *
   * This is often used to determine if a fragment of a given type could possibly
   * be visited in a context of another type.
   *
   * This function is commutative.
   */
  doTypesOverlap(typeA: CompositeTypeID, typeB: CompositeTypeID): boolean {
    // Equivalent types overlap
    if (typeA === typeB) {
      return true;
    }

    if (isAbstractType(typeA)) {
      if (isAbstractType(typeB)) {
        // If both types are abstract, then determine if there is any intersection
        // between possible concrete types of each.
        return Array.from(this.getPossibleTypes(typeA)).some(type => {
          if (isObject(type)) {
            return this.isPossibleType(typeB, type);
          }
        });
      }
      // Determine if the latter type is a possible concrete type of the former.
      return this.isPossibleType(typeA, typeB);
    }

    if (isAbstractType(typeB)) {
      // Determine if the former type is a possible concrete type of the latter.
      return this.isPossibleType(typeB, typeA);
    }

    // Otherwise the types do not overlap.
    return false;
  }

  isPossibleType(
    superType: AbstractTypeID,
    maybeSubType: ObjectTypeID,
  ): boolean {
    return this._typeMap.getPossibleTypeSet(superType).has(maybeSubType);
  }

  assertScalarFieldType(type: mixed): ScalarFieldTypeID {
    // Scalar type fields can be wrappers / or can be scalars/enums
    if (
      (isWrapper(type) && !isScalar(unwrap(type)) && !isEnum(unwrap(type))) ||
      (!isWrapper(type) && !isScalar(type) && !isEnum(type))
    ) {
      throw createCompilerError(
        `Expected ${String(type)} to be a Scalar or Enum type.`,
      );
    }
    return type;
  }

  assertLinkedFieldType(type: mixed): LinkedFieldTypeID {
    // Linked Field types can be wrappers / or can be composite types
    if (
      (isWrapper(type) && !isCompositeType(unwrap(type))) ||
      (!isWrapper(type) && !isCompositeType(type))
    ) {
      throw createCompilerError(
        `Expected ${String(type)} to be a Object, Interface or a Union Type.`,
      );
    }
    return type;
  }

  assertInputType(type: mixed): InputTypeID {
    // Input type fields can be wrappers / or can be scalars/enums
    if (
      (isWrapper(type) && !isInputType(unwrap(type))) ||
      (!isWrapper(type) && !isInputType(type))
    ) {
      throw createCompilerError(
        `Expected ${String(type)} to be a Input, Scalar or Enum type.`,
      );
    }
    return type;
  }

  asCompositeType(type: mixed): ?CompositeTypeID {
    if (isCompositeType(type)) {
      return type;
    }
  }

  asInputType(type: mixed): ?InputTypeID {
    if (
      (isWrapper(type) && isInputType(unwrap(type))) ||
      (!isWrapper(type) && isInputType(type))
    ) {
      return type;
    }
  }

  asScalarFieldType(type: mixed): ?ScalarFieldTypeID {
    if (isScalar(type) || isEnum(type)) {
      return type;
    }
  }

  assertScalarType(type: TypeID): ScalarTypeID {
    if (!isScalar(type)) {
      throw createCompilerError(
        `Expected ${this.getTypeString(
          type,
        )} to be a scalar type, got ${this.getTypeString(type)}.`,
      );
    }
    return type;
  }

  assertObjectType(type: TypeID): ObjectTypeID {
    if (!isObject(type)) {
      throw createCompilerError(
        `Expected ${this.getTypeString(type)} to be an object type.`,
      );
    }
    return type;
  }

  assertInputObjectType(type: TypeID): InputObjectTypeID {
    if (!isInputObject(type)) {
      throw createCompilerError(
        `Expected ${this.getTypeString(type)} to be an input type.`,
      );
    }
    return type;
  }

  asInputObjectType(type: TypeID): ?InputObjectTypeID {
    if (!isInputObject(type)) {
      return null;
    }
    return type;
  }

  assertInterfaceType(type: TypeID): InterfaceTypeID {
    if (!isInterface(type)) {
      throw createCompilerError(
        `Expected ${this.getTypeString(type)} to be an interface type.`,
      );
    }
    return type;
  }

  assertCompositeType(type: TypeID): CompositeTypeID {
    if (!isCompositeType(type)) {
      throw createCompilerError(
        `Expected ${this.getTypeString(type)} to be a composite type.`,
      );
    }
    return type;
  }

  assertAbstractType(type: TypeID): AbstractTypeID {
    if (!isAbstractType(type)) {
      throw createCompilerError(
        `Expected ${this.getTypeString(type)} to be an abstract type.`,
      );
    }
    return type;
  }

  assertLeafType(type: TypeID): TypeID {
    if (!this.isLeafType(type)) {
      throw createCompilerError(
        `Expected ${this.getTypeString(type)} to be a leaf type.`,
      );
    }
    return type;
  }

  assertUnionType(type: TypeID): UnionTypeID {
    if (!isUnion(type)) {
      throw createCompilerError(
        `Expected ${this.getTypeString(type)} to be a union type.`,
      );
    }
    return type;
  }

  assertEnumType(type: TypeID): EnumTypeID {
    if (!isEnum(type)) {
      throw createCompilerError(`Expected ${String(type)} to be an enum type.`);
    }
    return type;
  }

  assertIntType(type: TypeID): ScalarTypeID {
    if (!isScalar(type) || !this.isInt(type)) {
      throw createCompilerError(
        `Expected ${String(type)} to be an 'Int' type.`,
      );
    }
    return type;
  }

  assertFloatType(type: TypeID): ScalarTypeID {
    if (!isScalar(type) || !this.isFloat(type)) {
      throw createCompilerError(
        `Expected ${this.getTypeString(type)} to be a 'Float' type.`,
      );
    }
    return type;
  }

  assertBooleanType(type: TypeID): ScalarTypeID {
    if (!isScalar(type) || !this.isBoolean(type)) {
      throw createCompilerError(
        `Expected ${this.getTypeString(type)} to be a 'Boolean' type.`,
      );
    }
    return type;
  }

  assertStringType(type: TypeID): ScalarTypeID {
    if (!isScalar(type) || !this.isString(type)) {
      throw createCompilerError(
        `Expected ${this.getTypeString(type)} to be a 'String' type.`,
      );
    }
    return type;
  }

  assertIdType(type: TypeID): ScalarTypeID {
    if (!isScalar(type) || !this.isId(type)) {
      throw createCompilerError(
        `Expected ${this.getTypeString(type)} to be an ID type.`,
      );
    }
    return type;
  }

  expectBooleanType(): ScalarTypeID {
    return this.assertScalarType(this.expectTypeFromString('Boolean'));
  }

  expectIntType(): ScalarTypeID {
    return this.assertScalarType(this.expectTypeFromString('Int'));
  }

  expectFloatType(): ScalarTypeID {
    return this.assertScalarType(this.expectTypeFromString('Float'));
  }

  expectStringType(): ScalarTypeID {
    return this.assertScalarType(this.expectTypeFromString('String'));
  }

  expectIdType(): ScalarTypeID {
    return this.assertScalarType(this.expectTypeFromString('ID'));
  }

  getQueryType(): ?ObjectTypeID {
    const queryType = this._getRawType(QUERY_TYPE_KEY);
    if (queryType && isObject(queryType)) {
      return queryType;
    }
  }

  getMutationType(): ?ObjectTypeID {
    const mutationType = this._getRawType(MUTATION_TYPE_KEY);
    if (mutationType && isObject(mutationType)) {
      return mutationType;
    }
  }

  getSubscriptionType(): ?ObjectTypeID {
    const subscriptionType = this._getRawType(SUBSCRIPTION_TYPE_KEY);
    if (subscriptionType && isObject(subscriptionType)) {
      return subscriptionType;
    }
  }

  expectQueryType(): ObjectTypeID {
    const queryType = this.getQueryType();
    if (queryType == null) {
      throw createCompilerError('Query type is not defined on the Schema');
    }
    return queryType;
  }

  expectMutationType(): ObjectTypeID {
    const mutationType = this.getMutationType();
    if (mutationType == null) {
      throw createCompilerError('Mutation type is not defined the Schema');
    }
    return mutationType;
  }

  expectSubscriptionType(): ObjectTypeID {
    const subscriptionType = this.getSubscriptionType();
    if (subscriptionType == null) {
      throw createCompilerError('Subscription type is not defined the Schema');
    }
    return subscriptionType;
  }

  isNonNull(type: TypeID): boolean {
    return type instanceof NonNull;
  }

  isList(type: TypeID): boolean {
    return type instanceof List;
  }

  isWrapper(type: TypeID): boolean {
    return isWrapper(type);
  }

  isScalar(type: TypeID): boolean {
    return isScalar(type);
  }

  isObject(type: TypeID): boolean {
    return isObject(type);
  }

  isEnum(type: TypeID): boolean {
    return isEnum(type);
  }

  isUnion(type: TypeID): boolean {
    return isUnion(type);
  }

  isInputObject(type: TypeID): boolean {
    return isInputObject(type);
  }

  isInterface(type: TypeID): boolean {
    return isInterface(type);
  }

  isInputType(type: TypeID): boolean {
    // Wrappers can be input types (so it's save to check unwrapped type here)
    return isInputType(type) || (isWrapper(type) && isInputType(unwrap(type)));
  }

  isCompositeType(type: TypeID): boolean {
    return isCompositeType(type);
  }

  isAbstractType(type: TypeID): boolean {
    return isAbstractType(type);
  }

  isLeafType(type: TypeID): boolean {
    return this.isScalar(type) || this.isEnum(type);
  }

  isId(type: TypeID): boolean {
    if (type instanceof ScalarType) {
      return type.name === 'ID';
    }
    return false;
  }

  isInt(type: TypeID): boolean {
    if (type instanceof ScalarType) {
      return type.name === 'Int';
    }
    return false;
  }

  isFloat(type: TypeID): boolean {
    if (type instanceof ScalarType) {
      return type.name === 'Float';
    }
    return false;
  }

  isBoolean(type: TypeID): boolean {
    if (type instanceof ScalarType) {
      return type.name === 'Boolean';
    }
    return false;
  }

  isString(type: TypeID): boolean {
    if (type instanceof ScalarType) {
      return type.name === 'String';
    }
    return false;
  }

  hasField(
    type: CompositeTypeID | InputObjectTypeID,
    fieldName: string,
  ): boolean {
    const canHaveTypename = this.isObject(type) || this.isAbstractType(type);
    // Special case for __typename field
    if (
      canHaveTypename &&
      (fieldName === TYPENAME_FIELD || fieldName === CLIENT_ID_FIELD)
    ) {
      return true;
    }
    if (type instanceof ObjectType || type instanceof InterfaceType) {
      return this._typeMap.getField(type, fieldName) != null;
    } else if (type instanceof InputObjectType) {
      return this._typeMap.getInputField(type, fieldName) != null;
    }
    return false;
  }

  hasId(type: CompositeTypeID): boolean {
    if (!this.hasField(type, 'id')) {
      return false;
    }
    const idField = this.expectField(type, 'id');
    return this.areEqualTypes(
      this.getNullableType(this.getFieldType(idField)),
      this.expectIdType(),
    );
  }

  getFields(
    type: CompositeTypeID | InputObjectTypeID,
  ): $ReadOnlyArray<FieldID> {
    const fieldsMap = this._getFieldsMap(type);
    return Array.from(fieldsMap.values());
  }

  _getFieldsMap(type: CompositeTypeID | InputObjectTypeID): FieldsMap {
    const cachedMap = this._fieldsMap.get(type);
    if (cachedMap != null) {
      return cachedMap;
    }

    const fieldsMap = new Map();
    if (type instanceof ObjectType || type instanceof InterfaceType) {
      const fields = this._typeMap.getFieldMap(type);
      if (fields) {
        for (const [fieldName, fieldDefinition] of fields) {
          const fieldType = this.expectTypeFromAST(fieldDefinition.type);
          fieldsMap.set(
            fieldName,
            new Field(
              this,
              fieldName,
              fieldType,
              this.assertCompositeType(type),
              fieldDefinition.arguments,
              fieldDefinition.directives,
              fieldDefinition.isClient,
            ),
          );
        }
      }
    } else if (type instanceof InputObjectType) {
      const fields = this._typeMap.getInputFieldMap(type);
      if (fields) {
        for (const [fieldName, typeNode] of fields) {
          const fieldType = this.expectTypeFromAST(typeNode);
          fieldsMap.set(
            fieldName,
            new Field(this, fieldName, fieldType, type, [], null, false),
          );
        }
      }
    }
    if (fieldsMap.size === 0) {
      throw createCompilerError(
        `_getFieldsMap: Type '${type.name}' should have fields.`,
      );
    }
    this._fieldsMap.set(type, fieldsMap);
    return fieldsMap;
  }

  getFieldByName(
    type: CompositeTypeID | InputObjectTypeID,
    fieldName: string,
  ): ?FieldID {
    if (!this.hasField(type, fieldName)) {
      return;
    }

    // A "special" case for __typename and __id fields - which should
    // not be in the list of type fields, but should be fine to select
    if (fieldName === TYPENAME_FIELD) {
      let typename = this._typeNameMap.get(type);
      if (!typename) {
        typename = new Field(
          this,
          TYPENAME_FIELD,
          this.getNonNullType(this.expectStringType()),
          type,
          [],
          null,
          false, // isClient === false
        );
        this._typeNameMap.set(type, typename);
      }
      return typename;
    }

    if (fieldName === CLIENT_ID_FIELD) {
      let clientId = this._clientIdMap.get(type);
      if (!clientId) {
        clientId = new Field(
          this,
          CLIENT_ID_FIELD,
          this.getNonNullType(this.expectIdType()),
          type,
          [],
          null,
          true, // isClient === true
        );
        this._clientIdMap.set(type, clientId);
      }
      return clientId;
    }

    if (isUnion(type)) {
      throw createCompilerError(
        `Unexpected union type '${this.getTypeString(
          type,
        )}' in the 'getFieldByName(...)'. Expected type with fields`,
      );
    }

    const fieldsMap = this._getFieldsMap(type);
    return fieldsMap.get(fieldName);
  }

  expectField(
    type: CompositeTypeID | InputObjectTypeID,
    fieldName: string,
  ): FieldID {
    const field = this.getFieldByName(type, fieldName);
    if (!field) {
      throw createCompilerError(
        `Unknown field '${fieldName}' on type '${this.getTypeString(type)}'.`,
      );
    }
    return field;
  }

  getFieldConfig(
    field: FieldID,
  ): {|
    type: TypeID,
    args: $ReadOnlyArray<Argument>,
  |} {
    return {
      type: field.type,
      args: Array.from(field.args.values()),
    };
  }

  getFieldName(field: FieldID): string {
    return field.name;
  }

  getFieldType(field: FieldID): TypeID {
    return field.type;
  }

  getFieldParentType(field: FieldID): TypeID {
    return field.belongsTo;
  }

  getFieldArgs(field: FieldID): $ReadOnlyArray<Argument> {
    return Array.from(field.args.values());
  }

  getFieldArgByName(field: FieldID, argName: string): ?Argument {
    return field.args.get(argName);
  }

  getEnumValues(type: EnumTypeID): $ReadOnlyArray<string> {
    return type.values;
  }

  getUnionTypes(type: UnionTypeID): $ReadOnlyArray<TypeID> {
    return Array.from(this._typeMap.getPossibleTypeSet(type));
  }

  getInterfaces(type: CompositeTypeID): $ReadOnlyArray<TypeID> {
    if (type instanceof ObjectType) {
      return this._typeMap.getInterfaces(type);
    }
    return [];
  }

  getPossibleTypes(type: AbstractTypeID): $ReadOnlySet<ObjectTypeID> {
    return this._typeMap.getPossibleTypeSet(type);
  }

  getFetchableFieldName(type: ObjectTypeID): ?string {
    return this._typeMap.getFetchableFieldName(type);
  }

  parseLiteral(type: ScalarTypeID | EnumTypeID, valueNode: ValueNode): mixed {
    if (type instanceof EnumType && valueNode.kind === 'EnumValue') {
      return this.parseValue(type, valueNode.value);
    } else if (type instanceof ScalarType) {
      if (valueNode.kind === 'BooleanValue' && type.name === 'Boolean') {
        return GraphQLBoolean.parseLiteral(valueNode);
      } else if (valueNode.kind === 'FloatValue' && type.name === 'Float') {
        return GraphQLFloat.parseLiteral(valueNode);
      } else if (
        valueNode.kind === 'IntValue' &&
        (type.name === 'Int' || type.name === 'ID' || type.name === 'Float')
      ) {
        return GraphQLInt.parseLiteral(valueNode);
      } else if (
        valueNode.kind === 'StringValue' &&
        (type.name === 'String' || type.name === 'ID')
      ) {
        return GraphQLString.parseLiteral(valueNode);
      } else if (!isDefaultScalar(type.name)) {
        return valueFromASTUntyped(valueNode);
      }
    }
  }

  parseValue(type: ScalarTypeID | EnumTypeID, value: mixed): mixed {
    if (type instanceof EnumType) {
      return type.values.includes(value) ? value : undefined;
    } else if (type instanceof ScalarType) {
      switch (type.name) {
        case 'Boolean':
          return GraphQLBoolean.parseValue(value);
        case 'Float':
          return GraphQLFloat.parseValue(value);
        case 'Int':
          return GraphQLInt.parseValue(value);
        case 'String':
          return GraphQLString.parseValue(value);
        case 'ID':
          return GraphQLID.parseValue(value);
        default:
          return value;
      }
    }
  }

  serialize(type: ScalarTypeID | EnumTypeID, value: mixed): mixed {
    if (type instanceof EnumType) {
      return type.values.includes(value) ? value : undefined;
    } else if (type instanceof ScalarType) {
      switch (type.name) {
        case 'Boolean':
          return GraphQLBoolean.serialize(value);
        case 'Float':
          return GraphQLFloat.serialize(value);
        case 'Int':
          return GraphQLInt.serialize(value);
        case 'String':
          return GraphQLString.serialize(value);
        case 'ID':
          return GraphQLID.serialize(value);
        default:
          return value;
      }
    }
  }

  getDirectives(): $ReadOnlyArray<Directive> {
    return Array.from(this._directiveMap.values());
  }

  getDirective(directiveName: string): ?Directive {
    return this._directiveMap.get(directiveName);
  }

  isServerType(type: TypeID): boolean {
    const unwrapped = unwrap(type);
    return unwrapped.isClient === false;
  }

  isServerField(field: FieldID): boolean {
    return field.isClient === false;
  }

  isServerDirective(directiveName: string): boolean {
    const directive = this._directiveMap.get(directiveName);
    return directive?.isClient === false;
  }

  isServerDefinedField(type: CompositeTypeID, field: IRField): boolean {
    return (
      (this.isAbstractType(type) &&
        field.directives.some(({name}) => name === 'fixme_fat_interface')) ||
      (this.hasField(type, field.name) &&
        this.isServerField(this.expectField(type, field.name)))
    );
  }

  isClientDefinedField(type: CompositeTypeID, field: IRField): boolean {
    return !this.isServerDefinedField(type, field);
  }

  extend(extensions: DocumentNode | $ReadOnlyArray<string>): Schema {
    const doc = Array.isArray(extensions)
      ? parse(extensions.join('\n'))
      : extensions;

    const schemaExtensions = [];
    doc.definitions.forEach(definition => {
      if (isSchemaDefinitionAST(definition)) {
        schemaExtensions.push(definition);
      }
    });
    if (schemaExtensions.length > 0) {
      return new Schema(this._typeMap.extend(schemaExtensions));
    }
    return this;
  }
}

class TypeMap {
  _mutationTypeName: string;
  _queryTypeName: string;
  _subscriptionTypeName: string;
  +_directives: InternalDirectiveMap;
  +_extensions: $ReadOnlyArray<ExtensionNode>;
  +_fetchable: Map<TypeID, Fetchable>;
  +_fields: Map<InterfaceType | ObjectType, Map<string, FieldDefinition>>;
  +_inputFields: Map<InputObjectType, Map<string, TypeNode>>;
  +_interfaceImplementations: Map<InterfaceType, Set<ObjectType>>;
  +_source: Source;
  +_typeInterfaces: Map<TypeID, $ReadOnlyArray<InterfaceType>>;
  +_types: Map<string, BaseType>;
  +_unionTypes: Map<TypeID, Set<ObjectType>>;

  constructor(source: Source, extensions: $ReadOnlyArray<ExtensionNode>) {
    this._types = new Map([
      ['ID', new ScalarType('ID', false)],
      ['String', new ScalarType('String', false)],
      ['Boolean', new ScalarType('Boolean', false)],
      ['Float', new ScalarType('Float', false)],
      ['Int', new ScalarType('Int', false)],
    ]);
    this._typeInterfaces = new Map();
    this._unionTypes = new Map();
    this._interfaceImplementations = new Map();
    this._fields = new Map();
    this._inputFields = new Map();
    this._directives = new Map([
      [
        'include',
        {
          name: 'include',
          isClient: false,
          locations: ['FIELD', 'FRAGMENT_SPREAD', 'INLINE_FRAGMENT'],
          args: [
            {
              name: 'if',
              typeNode: parseType('Boolean!'),
              defaultValue: undefined,
            },
          ],
        },
      ],
      [
        'skip',
        {
          name: 'skip',
          isClient: false,
          locations: ['FIELD', 'FRAGMENT_SPREAD', 'INLINE_FRAGMENT'],
          args: [
            {
              name: 'if',
              typeNode: parseType('Boolean!'),
              defaultValue: undefined,
            },
          ],
        },
      ],
      [
        'deprecated',
        {
          name: 'deprecated',
          isClient: false,
          locations: ['FIELD_DEFINITION', 'ENUM_VALUE'],
          args: [
            {
              name: 'reason',
              typeNode: parseType('String'),
              defaultValue: {
                kind: 'StringValue',
                value: 'No longer supported',
              },
            },
          ],
        },
      ],
    ]);
    this._queryTypeName = 'Query';
    this._mutationTypeName = 'Mutation';
    this._subscriptionTypeName = 'Subscription';
    this._source = source;
    this._extensions = extensions;
    this._fetchable = new Map();
    this._parse(source);
    this._extend(extensions);
  }

  _parse(source: Source) {
    const document = parse(source, {
      noLocation: true,
    });
    document.definitions.forEach(definition => {
      switch (definition.kind) {
        case 'SchemaDefinition': {
          this._parseSchemaDefinition(definition);
          break;
        }
        case 'ScalarTypeDefinition': {
          this._parseScalarNode(definition, false);
          break;
        }
        case 'EnumTypeDefinition': {
          this._parseEnumNode(definition, false);
          break;
        }
        case 'ObjectTypeDefinition': {
          this._parseObjectTypeNode(definition, false);
          break;
        }
        case 'InputObjectTypeDefinition': {
          this._parseInputObjectTypeNode(definition, false);
          break;
        }
        case 'UnionTypeDefinition': {
          this._parseUnionNode(definition, false);
          break;
        }
        case 'InterfaceTypeDefinition': {
          this._parseInterfaceNode(definition, false);
          break;
        }
        case 'DirectiveDefinition': {
          this._parseDirective(definition, false);
          break;
        }
      }
    });
  }

  _parseSchemaDefinition(node: SchemaDefinitionNode) {
    node.operationTypes.forEach(operationType => {
      switch (operationType.operation) {
        case 'query':
          this._queryTypeName = operationType.type.name.value;
          break;
        case 'mutation':
          this._mutationTypeName = operationType.type.name.value;
          break;
        case 'subscription':
          this._subscriptionTypeName = operationType.type.name.value;
          break;
      }
    });
  }

  _parseScalarNode(node: ScalarTypeDefinitionNode, isClient: boolean) {
    const name = node.name.value;
    if (!isDefaultScalar(name) && this._types.has(name)) {
      throw createCompilerError(
        `_parseScalarNode: Duplicate definition for type ${name}.`,
        null,
        [node],
      );
    }
    this._types.set(name, new ScalarType(name, isClient));
  }

  _parseEnumNode(node: EnumTypeDefinitionNode, isClient: boolean) {
    const name = node.name.value;
    if (this._types.has(name)) {
      throw createCompilerError(
        `_parseEnumNode: Duplicate definition for type ${name}.`,
        null,
        [node],
      );
    }
    // SDL doesn't have information about the actual ENUM values
    const values = node.values
      ? node.values.map(value => value.name.value)
      : [];
    this._types.set(name, new EnumType(name, values, isClient));
  }

  _parseObjectTypeNode(node: ObjectTypeDefinitionNode, isClient: boolean) {
    const name = node.name.value;
    // Objects may be created by _parseUnionNode
    const type = this._types.get(name) ?? new ObjectType(name, isClient);
    if (!(type instanceof ObjectType)) {
      throw createCompilerError(
        `_parseObjectTypeNode: Expected object type, got ${String(type)}`,
        null,
        [node],
      );
    }
    if (type.isClient !== isClient) {
      throw createCompilerError(
        `_parseObjectTypeNode: Cannot create object type '${name}' defined as a client type.`,
        null,
        [node],
      );
    }
    const typeInterfaces: Array<InterfaceType> = [];
    node.interfaces &&
      node.interfaces.forEach(interfaceTypeNode => {
        const interfaceName = interfaceTypeNode.name.value;
        let interfaceType = this._types.get(interfaceName);
        if (!interfaceType) {
          interfaceType = new InterfaceType(interfaceName, isClient);
          this._types.set(interfaceName, interfaceType);
        }
        if (!(interfaceType instanceof InterfaceType)) {
          throw createCompilerError(
            '_parseObjectTypeNode: Expected interface type',
            null,
            [interfaceTypeNode],
          );
        }
        const implementations =
          this._interfaceImplementations.get(interfaceType) ?? new Set();

        implementations.add(type);
        this._interfaceImplementations.set(interfaceType, implementations);
        typeInterfaces.push(interfaceType);
      });
    let fetchable = null;
    node.directives &&
      node.directives.forEach(directiveNode => {
        if (directiveNode.name.value === 'fetchable') {
          const field_name_arg =
            directiveNode.arguments &&
            directiveNode.arguments.find(
              arg => arg.name.value === 'field_name',
            );
          if (
            field_name_arg != null &&
            field_name_arg.value.kind === 'StringValue'
          ) {
            fetchable = {field_name: field_name_arg.value.value};
          }
        }
      });
    this._typeInterfaces.set(type, typeInterfaces);
    this._types.set(name, type);
    if (fetchable != null) {
      this._fetchable.set(type, fetchable);
    }
    node.fields && this._handleTypeFieldsStrict(type, node.fields, isClient);
  }

  _parseInputObjectTypeNode(
    node: InputObjectTypeDefinitionNode,
    isClient: boolean,
  ) {
    const name = node.name.value;
    if (this._types.has(name)) {
      throw createCompilerError(
        '_parseInputObjectTypeNode: Unable to parse schema file. Duplicate definition for object type',
        null,
        [node],
      );
    }
    const type = new InputObjectType(name, isClient);
    this._types.set(name, type);
    this._parseInputObjectFields(type, node);
  }

  _parseUnionNode(node: UnionTypeDefinitionNode, isClient: boolean) {
    const name = node.name.value;
    if (this._types.has(name)) {
      throw createCompilerError(
        '_parseUnionNode: Unable to parse schema file. Duplicate definition for object type',
        null,
        [node],
      );
    }
    const union = new UnionType(name, isClient);
    this._types.set(name, union);
    this._unionTypes.set(
      union,
      new Set(
        node.types
          ? node.types.map(typeInUnion => {
              const typeInUnionName = typeInUnion.name.value;
              const object =
                this._types.get(typeInUnionName) ??
                new ObjectType(typeInUnionName, false);
              if (!(object instanceof ObjectType)) {
                throw createCompilerError(
                  '_parseUnionNode: Expected object type',
                  null,
                  [typeInUnion],
                );
              }
              this._types.set(typeInUnionName, object);
              return object;
            })
          : [],
      ),
    );
  }

  _parseInterfaceNode(node: InterfaceTypeDefinitionNode, isClient: boolean) {
    const name = node.name.value;
    let type = this._types.get(name);
    if (!type) {
      type = new InterfaceType(name, isClient);
      this._types.set(name, type);
    }
    if (!(type instanceof InterfaceType)) {
      throw createCompilerError(
        `_parseInterfaceNode: Expected interface type. Got ${String(type)}`,
        null,
        [node],
      );
    }
    if (type.isClient !== isClient) {
      throw createCompilerError(
        `_parseInterfaceNode: Cannot create interface '${name}' defined as a client interface`,
        null,
        [node],
      );
    }
    node.fields && this._handleTypeFieldsStrict(type, node.fields, isClient);
  }

  _handleTypeFieldsStrict(
    type: ObjectType | InterfaceType,
    fields: $ReadOnlyArray<FieldDefinitionNode>,
    isClient: boolean,
  ) {
    if (this._fields.has(type)) {
      throw createCompilerError(
        '_handleTypeFieldsStrict: Unable to parse schema file. Duplicate definition for object type',
      );
    }
    this._handleTypeFields(type, fields, isClient);
  }

  _handleTypeFields(
    type: ObjectType | InterfaceType,
    fields: $ReadOnlyArray<FieldDefinitionNode>,
    isClient: boolean,
  ) {
    const fieldsMap = this._fields.get(type) ?? new Map();
    fields.forEach(fieldNode => {
      const fieldName = fieldNode.name.value;
      if (fieldsMap.has(fieldName)) {
        throw createCompilerError(
          `_handleTypeFields: Duplicate definition for field '${fieldName}'.`,
        );
      }
      fieldsMap.set(fieldName, {
        arguments: fieldNode.arguments
          ? fieldNode.arguments.map(arg => {
              return {
                name: arg.name.value,
                typeNode: arg.type,
                defaultValue: arg.defaultValue,
              };
            })
          : [],
        directives: fieldNode.directives
          ? fieldNode.directives.map(directive => {
              return {
                name: directive.name.value,
                args: directive.arguments
                  ? directive.arguments.map(arg => {
                      return {
                        name: arg.name.value,
                        value: arg.value,
                      };
                    })
                  : [],
              };
            })
          : null,
        type: fieldNode.type,
        isClient: isClient,
      });
    });
    this._fields.set(type, fieldsMap);
  }

  _parseInputObjectFields(
    type: InputObjectType,
    node: InputObjectTypeDefinitionNode,
  ) {
    if (this._inputFields.has(type)) {
      throw createCompilerError(
        '_parseInputObjectFields: Unable to parse schema file. Duplicate definition for type',
        null,
        [node],
      );
    }
    const fields = new Map();
    if (node.fields) {
      node.fields.forEach(fieldNode => {
        fields.set(fieldNode.name.value, fieldNode.type);
      });
    }
    this._inputFields.set(type, fields);
  }

  _parseDirective(node: DirectiveDefinitionNode, isClient: boolean) {
    const name = node.name.value;
    this._directives.set(name, {
      name,
      args: node.arguments
        ? node.arguments.map(arg => {
            return {
              name: arg.name.value,
              typeNode: arg.type,
              defaultValue: arg.defaultValue,
            };
          })
        : [],

      locations: node.locations.map(location => {
        switch (location.value) {
          case 'QUERY':
          case 'MUTATION':
          case 'SUBSCRIPTION':
          case 'FIELD':
          case 'FRAGMENT_DEFINITION':
          case 'FRAGMENT_SPREAD':
          case 'INLINE_FRAGMENT':
          case 'VARIABLE_DEFINITION':
          case 'SCHEMA':
          case 'SCALAR':
          case 'OBJECT':
          case 'FIELD_DEFINITION':
          case 'ARGUMENT_DEFINITION':
          case 'INTERFACE':
          case 'UNION':
          case 'ENUM':
          case 'ENUM_VALUE':
          case 'INPUT_OBJECT':
          case 'INPUT_FIELD_DEFINITION':
            return location.value;
          default:
            throw createCompilerError('Invalid directive location');
        }
      }),
      isClient,
    });
  }

  _parseObjectTypeExtension(node: ObjectTypeExtensionNode) {
    const type = this._types.get(node.name.value);
    if (!(type instanceof ObjectType)) {
      throw createCompilerError(
        `_parseObjectTypeExtension: Expected to find type with the name '${node.name.value}'`,
        null,
        [node],
      );
    }
    node.fields &&
      this._handleTypeFields(type, node.fields, true /** client fields */);
  }

  _parseInterfaceTypeExtension(node: InterfaceTypeExtensionNode) {
    const type = this._types.get(node.name.value);
    if (!(type instanceof InterfaceType)) {
      throw createCompilerError(
        '_parseInterfaceTypeExtension: Expected to have an interface type',
      );
    }
    node.fields && this._handleTypeFields(type, node.fields, true);
  }

  _extend(extensions: $ReadOnlyArray<ExtensionNode>) {
    extensions.forEach(definition => {
      if (definition.kind === 'ObjectTypeDefinition') {
        this._parseObjectTypeNode(definition, true);
      } else if (definition.kind === 'InterfaceTypeDefinition') {
        this._parseInterfaceNode(definition, true);
      } else if (definition.kind === 'ScalarTypeDefinition') {
        this._parseScalarNode(definition, true);
      } else if (definition.kind === 'EnumTypeDefinition') {
        this._parseEnumNode(definition, true);
      } else if (definition.kind === 'InterfaceTypeExtension') {
        this._parseInterfaceTypeExtension(definition);
      } else if (definition.kind === 'ObjectTypeExtension') {
        this._parseObjectTypeExtension(definition);
      } else if (definition.kind === 'DirectiveDefinition') {
        this._parseDirective(definition, true /* client directive */);
      } else {
        throw createCompilerError(
          `Unexpected extension kind: '${definition.kind}'`,
          null,
          [definition],
        );
      }
    });
  }

  getTypes(): $ReadOnlyArray<BaseType> {
    return Array.from(this._types.values());
  }

  getTypeByName(typename: string): ?BaseType {
    return this._types.get(typename);
  }

  getInterfaces(type: ObjectType): $ReadOnlyArray<InterfaceType> {
    return this._typeInterfaces.get(type) ?? [];
  }

  getPossibleTypeSet(
    type: UnionType | InterfaceType,
  ): $ReadOnlySet<ObjectType> {
    let set;
    if (type instanceof InterfaceType) {
      set = this._interfaceImplementations.get(type) ?? new Set();
    } else if (type instanceof UnionType) {
      set = this._unionTypes.get(type) ?? new Set();
    } else {
      throw createCompilerError(
        'Invalid type supplied to "getPossibleTypeSet"',
      );
    }
    if (!set) {
      throw createCompilerError(
        `Unable to find possible types for ${type.name}`,
      );
    }
    return set;
  }

  getFetchableFieldName(type: ObjectTypeID): ?string {
    return this._fetchable.get(type)?.field_name ?? null;
  }

  getQueryType(): ?BaseType {
    return this._types.get(this._queryTypeName);
  }

  getMutationType(): ?BaseType {
    return this._types.get(this._mutationTypeName);
  }

  getSubscriptionType(): ?BaseType {
    return this._types.get(this._subscriptionTypeName);
  }

  getField(
    type: InterfaceType | ObjectType,
    fieldName: string,
  ): ?FieldDefinition {
    const fields = this._fields.get(type);
    if (fields) {
      return fields.get(fieldName);
    }
  }

  getFieldMap(type: InterfaceType | ObjectType): ?Map<string, FieldDefinition> {
    return this._fields.get(type);
  }

  getInputField(type: InputObjectType, fieldName: string): ?TypeNode {
    const inputFields = this._inputFields.get(type);
    if (inputFields) {
      return inputFields.get(fieldName);
    }
  }

  getInputFieldMap(type: InputObjectType): ?Map<string, TypeNode> {
    return this._inputFields.get(type);
  }

  getDirectives(): $ReadOnlyArray<InternalDirectiveStruct> {
    return Array.from(this._directives.values());
  }

  extend(extensions: $ReadOnlyArray<ExtensionNode>): TypeMap {
    return new TypeMap(this._source, this._extensions.concat(extensions));
  }
}

function create(
  baseSchema: Source,
  schemaExtensionDocuments?: $ReadOnlyArray<DocumentNode>,
  schemaExtensions?: $ReadOnlyArray<string>,
): Schema {
  const extensions: Array<ExtensionNode> = [];
  schemaExtensions &&
    schemaExtensions.forEach(source => {
      const doc = parse(source, {
        noLocation: true,
      });
      doc.definitions.forEach(definition => {
        if (isSchemaDefinitionAST(definition)) {
          extensions.push(definition);
        }
      });
    });
  schemaExtensionDocuments &&
    schemaExtensionDocuments.forEach(doc => {
      doc.definitions.forEach(definition => {
        if (isSchemaDefinitionAST(definition)) {
          extensions.push(definition);
        }
      });
    });

  return new Schema(new TypeMap(baseSchema, extensions));
}

function parseInputArgumentDefinitions(
  schema: Schema,
  args: $ReadOnlyArray<InternalArgumentStruct>,
): $ReadOnlyArray<Argument> {
  return args.map(arg => {
    const argType = schema.assertInputType(
      schema.expectTypeFromAST(arg.typeNode),
    );
    let defaultValue;
    const defaultValueNode = arg.defaultValue;
    if (defaultValueNode != null) {
      const nullableType = schema.getNullableType(argType);
      const isNullable = schema.isNonNull(argType) === false;
      if (isNullable && defaultValueNode.kind === 'NullValue') {
        defaultValue = null;
      } else {
        if (
          nullableType instanceof ScalarType ||
          nullableType instanceof EnumType
        ) {
          defaultValue = schema.parseLiteral(nullableType, defaultValueNode);
        } else if (
          (nullableType instanceof List &&
            defaultValueNode.kind === 'ListValue') ||
          (nullableType instanceof InputObjectType &&
            defaultValueNode.kind === 'ObjectValue')
        ) {
          defaultValue = valueFromASTUntyped(defaultValueNode);
        }
      }
      if (defaultValue === undefined) {
        throw createCompilerError(
          `parseInputArgumentDefinitions: Unexpected default value: ${String(
            defaultValueNode,
          )}. Expected to have a value of type ${String(nullableType)}.`,
        );
      }
    }
    return {
      name: arg.name,
      type: argType,
      defaultValue,
    };
  });
}

function parseInputArgumentDefinitionsMap(
  schema: Schema,
  args: $ReadOnlyArray<InternalArgumentStruct>,
): $ReadOnlyMap<string, Argument> {
  return new Map(
    parseInputArgumentDefinitions(schema, args).map(arg => {
      return [arg.name, arg];
    }),
  );
}

function isDefaultScalar(name: string): boolean {
  return new Set(['ID', 'String', 'Boolean', 'Int', 'Float']).has(name);
}

module.exports = {
  create,
};
