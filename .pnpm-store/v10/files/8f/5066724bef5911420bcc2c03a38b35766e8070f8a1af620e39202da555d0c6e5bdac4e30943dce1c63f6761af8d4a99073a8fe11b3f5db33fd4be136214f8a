/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 * @emails oncall+relay
 */
// flowlint ambiguous-object-type:error
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _createForOfIteratorHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/createForOfIteratorHelper"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _require = require('./CompilerError'),
    createCompilerError = _require.createCompilerError;

var _require2 = require('./SchemaUtils'),
    isSchemaDefinitionAST = _require2.isSchemaDefinitionAST;

var _require3 = require('graphql'),
    GraphQLFloat = _require3.GraphQLFloat,
    GraphQLInt = _require3.GraphQLInt,
    GraphQLBoolean = _require3.GraphQLBoolean,
    GraphQLString = _require3.GraphQLString,
    GraphQLID = _require3.GraphQLID,
    parse = _require3.parse,
    parseType = _require3.parseType,
    print = _require3.print,
    valueFromASTUntyped = _require3.valueFromASTUntyped;

/**
 * @private
 */
var Type = /*#__PURE__*/function () {
  function Type(name, isClient) {
    this.name = name;
    this.isClient = isClient;
  }

  var _proto = Type.prototype;

  _proto.toString = function toString() {
    return this.name;
  };

  _proto.toJSON = function toJSON() {
    return String(this);
  };

  return Type;
}();
/**
 * @private
 */


var ScalarType = /*#__PURE__*/function (_Type) {
  (0, _inheritsLoose2["default"])(ScalarType, _Type);

  function ScalarType() {
    return _Type.apply(this, arguments) || this;
  }

  return ScalarType;
}(Type);
/**
 * @private
 */


var EnumType = /*#__PURE__*/function (_Type2) {
  (0, _inheritsLoose2["default"])(EnumType, _Type2);

  function EnumType(name, values, isClient) {
    var _this;

    _this = _Type2.call(this, name, isClient) || this;
    _this.values = values;
    return _this;
  }

  return EnumType;
}(Type);
/**
 * @private
 */


var UnionType = /*#__PURE__*/function (_Type3) {
  (0, _inheritsLoose2["default"])(UnionType, _Type3);

  function UnionType() {
    return _Type3.apply(this, arguments) || this;
  }

  return UnionType;
}(Type);
/**
 * @private
 */


var ObjectType = /*#__PURE__*/function (_Type4) {
  (0, _inheritsLoose2["default"])(ObjectType, _Type4);

  function ObjectType() {
    return _Type4.apply(this, arguments) || this;
  }

  return ObjectType;
}(Type);
/**
 * @private
 */


var InputObjectType = /*#__PURE__*/function (_Type5) {
  (0, _inheritsLoose2["default"])(InputObjectType, _Type5);

  function InputObjectType() {
    return _Type5.apply(this, arguments) || this;
  }

  return InputObjectType;
}(Type);
/**
 * @private
 */


var InterfaceType = /*#__PURE__*/function (_Type6) {
  (0, _inheritsLoose2["default"])(InterfaceType, _Type6);

  function InterfaceType() {
    return _Type6.apply(this, arguments) || this;
  }

  return InterfaceType;
}(Type);
/**
 * @private
 */


var List = /*#__PURE__*/function () {
  function List(type) {
    this.ofType = type;
    this._typeString = "[".concat(String(this.ofType), "]");
  }

  var _proto2 = List.prototype;

  _proto2.toString = function toString() {
    return this._typeString;
  };

  _proto2.toJSON = function toJSON() {
    return this.toString();
  };

  return List;
}();
/**
 * @private
 */


var NonNull = /*#__PURE__*/function () {
  function NonNull(type) {
    this.ofType = type;
    this._typeString = "".concat(String(this.ofType), "!");
  }

  var _proto3 = NonNull.prototype;

  _proto3.toString = function toString() {
    return this._typeString;
  };

  _proto3.toJSON = function toJSON() {
    return this.toString();
  };

  return NonNull;
}();
/**
 * @private
 */


var Field = function Field(schema, name, type, belongsTo, args, directives, isClient) {
  this.name = name;
  this.type = type;
  this.belongsTo = belongsTo;
  this.isClient = isClient;
  this.args = parseInputArgumentDefinitionsMap(schema, args);
  this.directives = directives;
};
/**
 * @private
 */


function unwrap(type) {
  if (type instanceof NonNull || type instanceof List) {
    return unwrap(type.ofType);
  }

  return type;
}
/**
 * @private
 */


function hasConcreteTypeThatImplements(schema, type, interfaceType) {
  return _isAbstractType(type) && getConcreteTypes(schema, type).some(function (concreteType) {
    return schema.implementsInterface(schema.assertCompositeType(concreteType), interfaceType);
  });
}
/**
 * @private
 */


function getConcreteTypes(schema, type) {
  var concreteTypes = new Set();
  schema.getPossibleTypes(type).forEach(function (possibleType) {
    if (_isObject(possibleType)) {
      concreteTypes.add(possibleType);
    }
  });
  return Array.from(concreteTypes);
}

var TYPENAME_FIELD = '__typename';
var CLIENT_ID_FIELD = '__id';
var QUERY_TYPE_KEY = Symbol('Query');
var MUTATION_TYPE_KEY = Symbol('Mutation');
var SUBSCRIPTION_TYPE_KEY = Symbol('Subscription');

function _isScalar(type) {
  return type instanceof ScalarType;
}

function _isObject(type) {
  return type instanceof ObjectType;
}

function _isEnum(type) {
  return type instanceof EnumType;
}

function _isUnion(type) {
  return type instanceof UnionType;
}

function _isInputObject(type) {
  return type instanceof InputObjectType;
}

function _isInterface(type) {
  return type instanceof InterfaceType;
}

function _isWrapper(type) {
  return type instanceof List || type instanceof NonNull;
}

function isBaseType(type) {
  return type instanceof ScalarType || type instanceof ObjectType || type instanceof EnumType || type instanceof UnionType || type instanceof InputObjectType || type instanceof InterfaceType;
}

function _isAbstractType(type) {
  return type instanceof UnionType || type instanceof InterfaceType;
}

function _isCompositeType(type) {
  return type instanceof ObjectType || type instanceof UnionType || type instanceof InterfaceType;
}

function _isInputType(type) {
  return type instanceof InputObjectType || type instanceof ScalarType || type instanceof EnumType;
}

var Schema = /*#__PURE__*/function () {
  /**
   * @private
   */
  function Schema(typeMap) {
    var _this2 = this;

    this._typeMap = typeMap;
    this._typeWrappersMap = new Map();
    this._fieldsMap = new Map();
    this._typeNameMap = new Map();
    this._clientIdMap = new Map();
    this._directiveMap = new Map(typeMap.getDirectives().map(function (directive) {
      return [directive.name, {
        locations: directive.locations,
        args: parseInputArgumentDefinitions(_this2, directive.args),
        name: directive.name,
        isClient: directive.isClient
      }];
    }));
  }

  var _proto4 = Schema.prototype;

  _proto4.getTypes = function getTypes() {
    return this._typeMap.getTypes();
  };

  _proto4.getTypeFromAST = function getTypeFromAST(typeNode) {
    if (typeNode.kind === 'NonNullType') {
      var innerType = this.getTypeFromAST(typeNode.type);

      if (!innerType) {
        return;
      }

      if (innerType instanceof NonNull) {
        throw createCompilerError('Unable to wrap non-nullable type with non-null wrapper.');
      }

      var cacheKey = "".concat(this.getTypeString(innerType), "!");

      var type = this._typeWrappersMap.get(cacheKey);

      if (type) {
        return type;
      }

      type = new NonNull(innerType);

      this._typeWrappersMap.set(cacheKey, type);

      return type;
    } else if (typeNode.kind === 'ListType') {
      var _innerType = this.getTypeFromAST(typeNode.type);

      if (!_innerType) {
        return;
      }

      var _cacheKey = "[".concat(this.getTypeString(_innerType), "]");

      var _type = this._typeWrappersMap.get(_cacheKey);

      if (_type) {
        return _type;
      }

      _type = new List(_innerType);

      this._typeWrappersMap.set(_cacheKey, _type);

      return _type;
    }

    return this._typeMap.getTypeByName(typeNode.name.value);
  };

  _proto4._getRawType = function _getRawType(typeName) {
    var type = this._typeWrappersMap.get(typeName);

    if (type) {
      return type;
    }

    if (typeof typeName === 'string') {
      return this.getTypeFromAST(parseType(typeName));
    } else {
      var operationType;

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
  };

  _proto4.getTypeFromString = function getTypeFromString(typeName) {
    return this._getRawType(typeName);
  };

  _proto4.expectTypeFromString = function expectTypeFromString(typeName) {
    var type = this.getTypeFromString(typeName);

    if (type == null) {
      throw createCompilerError("Unknown type: '".concat(typeName, "'."));
    }

    return type;
  };

  _proto4.expectTypeFromAST = function expectTypeFromAST(ast) {
    var type = this.getTypeFromAST(ast);

    if (type == null) {
      throw createCompilerError("Unknown type: '".concat(print(ast), "'."), null, [ast]);
    }

    return type;
  };

  _proto4.getNonNullType = function getNonNullType(type) {
    if (type instanceof NonNull) {
      return type;
    }

    var cacheKey = "".concat(String(type), "!");

    var nonNullType = this._typeWrappersMap.get(cacheKey);

    if (nonNullType) {
      return nonNullType;
    }

    nonNullType = new NonNull(type);

    this._typeWrappersMap.set(cacheKey, nonNullType);

    return nonNullType;
  };

  _proto4.getRawType = function getRawType(type) {
    return unwrap(type);
  };

  _proto4.getNullableType = function getNullableType(type) {
    if (type instanceof NonNull) {
      return type.ofType;
    }

    return type;
  };

  _proto4.getListItemType = function getListItemType(type) {
    if (type instanceof List) {
      return type.ofType;
    }

    return type;
  };

  _proto4.mapListItemType = function mapListItemType(type, mapper) {
    if (!(type instanceof List)) {
      throw createCompilerError('Expected List type');
    }

    var innerType = mapper(type.ofType);
    var cacheKey = "[".concat(this.getTypeString(innerType), "]");

    var newType = this._typeWrappersMap.get(cacheKey);

    if (newType) {
      return newType;
    }

    newType = new List(innerType);

    this._typeWrappersMap.set(cacheKey, newType);

    return newType;
  };

  _proto4.areEqualTypes = function areEqualTypes(typeA, typeB) {
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
  ;

  _proto4.mayImplement = function mayImplement(type, interfaceType) {
    return this.areEqualTypes(type, interfaceType) || this.implementsInterface(type, interfaceType) || this.isAbstractType(type) && hasConcreteTypeThatImplements(this, type, interfaceType);
  };

  _proto4.implementsInterface = function implementsInterface(type, interfaceType) {
    var _this3 = this;

    return this.getInterfaces(type).some(function (typeInterface) {
      return _this3.areEqualTypes(typeInterface, interfaceType);
    });
  };

  _proto4.canHaveSelections = function canHaveSelections(type) {
    return this.isObject(type) || this.isInterface(type);
  };

  _proto4.getTypeString = function getTypeString(type) {
    return type.toString();
  };

  _proto4.isTypeSubTypeOf = function isTypeSubTypeOf(maybeSubType, superType) {
    // Equivalent type is a valid subtype
    if (maybeSubType === superType) {
      return true;
    } // If superType is non-null, maybeSubType must also be non-null.


    if (superType instanceof NonNull) {
      if (maybeSubType instanceof NonNull) {
        return this.isTypeSubTypeOf(maybeSubType.ofType, superType.ofType);
      }

      return false;
    }

    if (maybeSubType instanceof NonNull) {
      // If superType is nullable, maybeSubType may be non-null or nullable.
      return this.isTypeSubTypeOf(maybeSubType.ofType, superType);
    } // If superType type is a list, maybeSubType type must also be a list.


    if (superType instanceof List) {
      if (maybeSubType instanceof List) {
        return this.isTypeSubTypeOf(maybeSubType.ofType, superType.ofType);
      }

      return false;
    }

    if (maybeSubType instanceof List) {
      // If superType is not a list, maybeSubType must also be not a list.
      return false;
    } // If superType type is an abstract type, maybeSubType type may be a currently
    // possible object type.


    if (this.isAbstractType(superType) && this.isObject(maybeSubType) && this.isPossibleType(this.assertAbstractType(superType), this.assertObjectType(maybeSubType))) {
      return true;
    } // Otherwise, maybeSubType is not a valid subtype of the superType.


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
  ;

  _proto4.doTypesOverlap = function doTypesOverlap(typeA, typeB) {
    var _this4 = this;

    // Equivalent types overlap
    if (typeA === typeB) {
      return true;
    }

    if (_isAbstractType(typeA)) {
      if (_isAbstractType(typeB)) {
        // If both types are abstract, then determine if there is any intersection
        // between possible concrete types of each.
        return Array.from(this.getPossibleTypes(typeA)).some(function (type) {
          if (_isObject(type)) {
            return _this4.isPossibleType(typeB, type);
          }
        });
      } // Determine if the latter type is a possible concrete type of the former.


      return this.isPossibleType(typeA, typeB);
    }

    if (_isAbstractType(typeB)) {
      // Determine if the former type is a possible concrete type of the latter.
      return this.isPossibleType(typeB, typeA);
    } // Otherwise the types do not overlap.


    return false;
  };

  _proto4.isPossibleType = function isPossibleType(superType, maybeSubType) {
    return this._typeMap.getPossibleTypeSet(superType).has(maybeSubType);
  };

  _proto4.assertScalarFieldType = function assertScalarFieldType(type) {
    // Scalar type fields can be wrappers / or can be scalars/enums
    if (_isWrapper(type) && !_isScalar(unwrap(type)) && !_isEnum(unwrap(type)) || !_isWrapper(type) && !_isScalar(type) && !_isEnum(type)) {
      throw createCompilerError("Expected ".concat(String(type), " to be a Scalar or Enum type."));
    }

    return type;
  };

  _proto4.assertLinkedFieldType = function assertLinkedFieldType(type) {
    // Linked Field types can be wrappers / or can be composite types
    if (_isWrapper(type) && !_isCompositeType(unwrap(type)) || !_isWrapper(type) && !_isCompositeType(type)) {
      throw createCompilerError("Expected ".concat(String(type), " to be a Object, Interface or a Union Type."));
    }

    return type;
  };

  _proto4.assertInputType = function assertInputType(type) {
    // Input type fields can be wrappers / or can be scalars/enums
    if (_isWrapper(type) && !_isInputType(unwrap(type)) || !_isWrapper(type) && !_isInputType(type)) {
      throw createCompilerError("Expected ".concat(String(type), " to be a Input, Scalar or Enum type."));
    }

    return type;
  };

  _proto4.asCompositeType = function asCompositeType(type) {
    if (_isCompositeType(type)) {
      return type;
    }
  };

  _proto4.asInputType = function asInputType(type) {
    if (_isWrapper(type) && _isInputType(unwrap(type)) || !_isWrapper(type) && _isInputType(type)) {
      return type;
    }
  };

  _proto4.asScalarFieldType = function asScalarFieldType(type) {
    if (_isScalar(type) || _isEnum(type)) {
      return type;
    }
  };

  _proto4.assertScalarType = function assertScalarType(type) {
    if (!_isScalar(type)) {
      throw createCompilerError("Expected ".concat(this.getTypeString(type), " to be a scalar type, got ").concat(this.getTypeString(type), "."));
    }

    return type;
  };

  _proto4.assertObjectType = function assertObjectType(type) {
    if (!_isObject(type)) {
      throw createCompilerError("Expected ".concat(this.getTypeString(type), " to be an object type."));
    }

    return type;
  };

  _proto4.assertInputObjectType = function assertInputObjectType(type) {
    if (!_isInputObject(type)) {
      throw createCompilerError("Expected ".concat(this.getTypeString(type), " to be an input type."));
    }

    return type;
  };

  _proto4.asInputObjectType = function asInputObjectType(type) {
    if (!_isInputObject(type)) {
      return null;
    }

    return type;
  };

  _proto4.assertInterfaceType = function assertInterfaceType(type) {
    if (!_isInterface(type)) {
      throw createCompilerError("Expected ".concat(this.getTypeString(type), " to be an interface type."));
    }

    return type;
  };

  _proto4.assertCompositeType = function assertCompositeType(type) {
    if (!_isCompositeType(type)) {
      throw createCompilerError("Expected ".concat(this.getTypeString(type), " to be a composite type."));
    }

    return type;
  };

  _proto4.assertAbstractType = function assertAbstractType(type) {
    if (!_isAbstractType(type)) {
      throw createCompilerError("Expected ".concat(this.getTypeString(type), " to be an abstract type."));
    }

    return type;
  };

  _proto4.assertLeafType = function assertLeafType(type) {
    if (!this.isLeafType(type)) {
      throw createCompilerError("Expected ".concat(this.getTypeString(type), " to be a leaf type."));
    }

    return type;
  };

  _proto4.assertUnionType = function assertUnionType(type) {
    if (!_isUnion(type)) {
      throw createCompilerError("Expected ".concat(this.getTypeString(type), " to be a union type."));
    }

    return type;
  };

  _proto4.assertEnumType = function assertEnumType(type) {
    if (!_isEnum(type)) {
      throw createCompilerError("Expected ".concat(String(type), " to be an enum type."));
    }

    return type;
  };

  _proto4.assertIntType = function assertIntType(type) {
    if (!_isScalar(type) || !this.isInt(type)) {
      throw createCompilerError("Expected ".concat(String(type), " to be an 'Int' type."));
    }

    return type;
  };

  _proto4.assertFloatType = function assertFloatType(type) {
    if (!_isScalar(type) || !this.isFloat(type)) {
      throw createCompilerError("Expected ".concat(this.getTypeString(type), " to be a 'Float' type."));
    }

    return type;
  };

  _proto4.assertBooleanType = function assertBooleanType(type) {
    if (!_isScalar(type) || !this.isBoolean(type)) {
      throw createCompilerError("Expected ".concat(this.getTypeString(type), " to be a 'Boolean' type."));
    }

    return type;
  };

  _proto4.assertStringType = function assertStringType(type) {
    if (!_isScalar(type) || !this.isString(type)) {
      throw createCompilerError("Expected ".concat(this.getTypeString(type), " to be a 'String' type."));
    }

    return type;
  };

  _proto4.assertIdType = function assertIdType(type) {
    if (!_isScalar(type) || !this.isId(type)) {
      throw createCompilerError("Expected ".concat(this.getTypeString(type), " to be an ID type."));
    }

    return type;
  };

  _proto4.expectBooleanType = function expectBooleanType() {
    return this.assertScalarType(this.expectTypeFromString('Boolean'));
  };

  _proto4.expectIntType = function expectIntType() {
    return this.assertScalarType(this.expectTypeFromString('Int'));
  };

  _proto4.expectFloatType = function expectFloatType() {
    return this.assertScalarType(this.expectTypeFromString('Float'));
  };

  _proto4.expectStringType = function expectStringType() {
    return this.assertScalarType(this.expectTypeFromString('String'));
  };

  _proto4.expectIdType = function expectIdType() {
    return this.assertScalarType(this.expectTypeFromString('ID'));
  };

  _proto4.getQueryType = function getQueryType() {
    var queryType = this._getRawType(QUERY_TYPE_KEY);

    if (queryType && _isObject(queryType)) {
      return queryType;
    }
  };

  _proto4.getMutationType = function getMutationType() {
    var mutationType = this._getRawType(MUTATION_TYPE_KEY);

    if (mutationType && _isObject(mutationType)) {
      return mutationType;
    }
  };

  _proto4.getSubscriptionType = function getSubscriptionType() {
    var subscriptionType = this._getRawType(SUBSCRIPTION_TYPE_KEY);

    if (subscriptionType && _isObject(subscriptionType)) {
      return subscriptionType;
    }
  };

  _proto4.expectQueryType = function expectQueryType() {
    var queryType = this.getQueryType();

    if (queryType == null) {
      throw createCompilerError('Query type is not defined on the Schema');
    }

    return queryType;
  };

  _proto4.expectMutationType = function expectMutationType() {
    var mutationType = this.getMutationType();

    if (mutationType == null) {
      throw createCompilerError('Mutation type is not defined the Schema');
    }

    return mutationType;
  };

  _proto4.expectSubscriptionType = function expectSubscriptionType() {
    var subscriptionType = this.getSubscriptionType();

    if (subscriptionType == null) {
      throw createCompilerError('Subscription type is not defined the Schema');
    }

    return subscriptionType;
  };

  _proto4.isNonNull = function isNonNull(type) {
    return type instanceof NonNull;
  };

  _proto4.isList = function isList(type) {
    return type instanceof List;
  };

  _proto4.isWrapper = function isWrapper(type) {
    return _isWrapper(type);
  };

  _proto4.isScalar = function isScalar(type) {
    return _isScalar(type);
  };

  _proto4.isObject = function isObject(type) {
    return _isObject(type);
  };

  _proto4.isEnum = function isEnum(type) {
    return _isEnum(type);
  };

  _proto4.isUnion = function isUnion(type) {
    return _isUnion(type);
  };

  _proto4.isInputObject = function isInputObject(type) {
    return _isInputObject(type);
  };

  _proto4.isInterface = function isInterface(type) {
    return _isInterface(type);
  };

  _proto4.isInputType = function isInputType(type) {
    // Wrappers can be input types (so it's save to check unwrapped type here)
    return _isInputType(type) || _isWrapper(type) && _isInputType(unwrap(type));
  };

  _proto4.isCompositeType = function isCompositeType(type) {
    return _isCompositeType(type);
  };

  _proto4.isAbstractType = function isAbstractType(type) {
    return _isAbstractType(type);
  };

  _proto4.isLeafType = function isLeafType(type) {
    return this.isScalar(type) || this.isEnum(type);
  };

  _proto4.isId = function isId(type) {
    if (type instanceof ScalarType) {
      return type.name === 'ID';
    }

    return false;
  };

  _proto4.isInt = function isInt(type) {
    if (type instanceof ScalarType) {
      return type.name === 'Int';
    }

    return false;
  };

  _proto4.isFloat = function isFloat(type) {
    if (type instanceof ScalarType) {
      return type.name === 'Float';
    }

    return false;
  };

  _proto4.isBoolean = function isBoolean(type) {
    if (type instanceof ScalarType) {
      return type.name === 'Boolean';
    }

    return false;
  };

  _proto4.isString = function isString(type) {
    if (type instanceof ScalarType) {
      return type.name === 'String';
    }

    return false;
  };

  _proto4.hasField = function hasField(type, fieldName) {
    var canHaveTypename = this.isObject(type) || this.isAbstractType(type); // Special case for __typename field

    if (canHaveTypename && (fieldName === TYPENAME_FIELD || fieldName === CLIENT_ID_FIELD)) {
      return true;
    }

    if (type instanceof ObjectType || type instanceof InterfaceType) {
      return this._typeMap.getField(type, fieldName) != null;
    } else if (type instanceof InputObjectType) {
      return this._typeMap.getInputField(type, fieldName) != null;
    }

    return false;
  };

  _proto4.hasId = function hasId(type) {
    if (!this.hasField(type, 'id')) {
      return false;
    }

    var idField = this.expectField(type, 'id');
    return this.areEqualTypes(this.getNullableType(this.getFieldType(idField)), this.expectIdType());
  };

  _proto4.getFields = function getFields(type) {
    var fieldsMap = this._getFieldsMap(type);

    return Array.from(fieldsMap.values());
  };

  _proto4._getFieldsMap = function _getFieldsMap(type) {
    var cachedMap = this._fieldsMap.get(type);

    if (cachedMap != null) {
      return cachedMap;
    }

    var fieldsMap = new Map();

    if (type instanceof ObjectType || type instanceof InterfaceType) {
      var fields = this._typeMap.getFieldMap(type);

      if (fields) {
        var _iterator = (0, _createForOfIteratorHelper2["default"])(fields),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _step$value = _step.value,
                fieldName = _step$value[0],
                fieldDefinition = _step$value[1];
            var fieldType = this.expectTypeFromAST(fieldDefinition.type);
            fieldsMap.set(fieldName, new Field(this, fieldName, fieldType, this.assertCompositeType(type), fieldDefinition.arguments, fieldDefinition.directives, fieldDefinition.isClient));
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    } else if (type instanceof InputObjectType) {
      var _fields = this._typeMap.getInputFieldMap(type);

      if (_fields) {
        var _iterator2 = (0, _createForOfIteratorHelper2["default"])(_fields),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _step2$value = _step2.value,
                _fieldName = _step2$value[0],
                typeNode = _step2$value[1];

            var _fieldType = this.expectTypeFromAST(typeNode);

            fieldsMap.set(_fieldName, new Field(this, _fieldName, _fieldType, type, [], null, false));
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    }

    if (fieldsMap.size === 0) {
      throw createCompilerError("_getFieldsMap: Type '".concat(type.name, "' should have fields."));
    }

    this._fieldsMap.set(type, fieldsMap);

    return fieldsMap;
  };

  _proto4.getFieldByName = function getFieldByName(type, fieldName) {
    if (!this.hasField(type, fieldName)) {
      return;
    } // A "special" case for __typename and __id fields - which should
    // not be in the list of type fields, but should be fine to select


    if (fieldName === TYPENAME_FIELD) {
      var typename = this._typeNameMap.get(type);

      if (!typename) {
        typename = new Field(this, TYPENAME_FIELD, this.getNonNullType(this.expectStringType()), type, [], null, false);

        this._typeNameMap.set(type, typename);
      }

      return typename;
    }

    if (fieldName === CLIENT_ID_FIELD) {
      var clientId = this._clientIdMap.get(type);

      if (!clientId) {
        clientId = new Field(this, CLIENT_ID_FIELD, this.getNonNullType(this.expectIdType()), type, [], null, true);

        this._clientIdMap.set(type, clientId);
      }

      return clientId;
    }

    if (_isUnion(type)) {
      throw createCompilerError("Unexpected union type '".concat(this.getTypeString(type), "' in the 'getFieldByName(...)'. Expected type with fields"));
    }

    var fieldsMap = this._getFieldsMap(type);

    return fieldsMap.get(fieldName);
  };

  _proto4.expectField = function expectField(type, fieldName) {
    var field = this.getFieldByName(type, fieldName);

    if (!field) {
      throw createCompilerError("Unknown field '".concat(fieldName, "' on type '").concat(this.getTypeString(type), "'."));
    }

    return field;
  };

  _proto4.getFieldConfig = function getFieldConfig(field) {
    return {
      type: field.type,
      args: Array.from(field.args.values())
    };
  };

  _proto4.getFieldName = function getFieldName(field) {
    return field.name;
  };

  _proto4.getFieldType = function getFieldType(field) {
    return field.type;
  };

  _proto4.getFieldParentType = function getFieldParentType(field) {
    return field.belongsTo;
  };

  _proto4.getFieldArgs = function getFieldArgs(field) {
    return Array.from(field.args.values());
  };

  _proto4.getFieldArgByName = function getFieldArgByName(field, argName) {
    return field.args.get(argName);
  };

  _proto4.getEnumValues = function getEnumValues(type) {
    return type.values;
  };

  _proto4.getUnionTypes = function getUnionTypes(type) {
    return Array.from(this._typeMap.getPossibleTypeSet(type));
  };

  _proto4.getInterfaces = function getInterfaces(type) {
    if (type instanceof ObjectType) {
      return this._typeMap.getInterfaces(type);
    }

    return [];
  };

  _proto4.getPossibleTypes = function getPossibleTypes(type) {
    return this._typeMap.getPossibleTypeSet(type);
  };

  _proto4.getFetchableFieldName = function getFetchableFieldName(type) {
    return this._typeMap.getFetchableFieldName(type);
  };

  _proto4.parseLiteral = function parseLiteral(type, valueNode) {
    if (type instanceof EnumType && valueNode.kind === 'EnumValue') {
      return this.parseValue(type, valueNode.value);
    } else if (type instanceof ScalarType) {
      if (valueNode.kind === 'BooleanValue' && type.name === 'Boolean') {
        return GraphQLBoolean.parseLiteral(valueNode);
      } else if (valueNode.kind === 'FloatValue' && type.name === 'Float') {
        return GraphQLFloat.parseLiteral(valueNode);
      } else if (valueNode.kind === 'IntValue' && (type.name === 'Int' || type.name === 'ID' || type.name === 'Float')) {
        return GraphQLInt.parseLiteral(valueNode);
      } else if (valueNode.kind === 'StringValue' && (type.name === 'String' || type.name === 'ID')) {
        return GraphQLString.parseLiteral(valueNode);
      } else if (!isDefaultScalar(type.name)) {
        return valueFromASTUntyped(valueNode);
      }
    }
  };

  _proto4.parseValue = function parseValue(type, value) {
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
  };

  _proto4.serialize = function serialize(type, value) {
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
  };

  _proto4.getDirectives = function getDirectives() {
    return Array.from(this._directiveMap.values());
  };

  _proto4.getDirective = function getDirective(directiveName) {
    return this._directiveMap.get(directiveName);
  };

  _proto4.isServerType = function isServerType(type) {
    var unwrapped = unwrap(type);
    return unwrapped.isClient === false;
  };

  _proto4.isServerField = function isServerField(field) {
    return field.isClient === false;
  };

  _proto4.isServerDirective = function isServerDirective(directiveName) {
    var directive = this._directiveMap.get(directiveName);

    return (directive === null || directive === void 0 ? void 0 : directive.isClient) === false;
  };

  _proto4.isServerDefinedField = function isServerDefinedField(type, field) {
    return this.isAbstractType(type) && field.directives.some(function (_ref) {
      var name = _ref.name;
      return name === 'fixme_fat_interface';
    }) || this.hasField(type, field.name) && this.isServerField(this.expectField(type, field.name));
  };

  _proto4.isClientDefinedField = function isClientDefinedField(type, field) {
    return !this.isServerDefinedField(type, field);
  };

  _proto4.extend = function extend(extensions) {
    var doc = Array.isArray(extensions) ? parse(extensions.join('\n')) : extensions;
    var schemaExtensions = [];
    doc.definitions.forEach(function (definition) {
      if (isSchemaDefinitionAST(definition)) {
        schemaExtensions.push(definition);
      }
    });

    if (schemaExtensions.length > 0) {
      return new Schema(this._typeMap.extend(schemaExtensions));
    }

    return this;
  };

  return Schema;
}();

var TypeMap = /*#__PURE__*/function () {
  function TypeMap(source, extensions) {
    this._types = new Map([['ID', new ScalarType('ID', false)], ['String', new ScalarType('String', false)], ['Boolean', new ScalarType('Boolean', false)], ['Float', new ScalarType('Float', false)], ['Int', new ScalarType('Int', false)]]);
    this._typeInterfaces = new Map();
    this._unionTypes = new Map();
    this._interfaceImplementations = new Map();
    this._fields = new Map();
    this._inputFields = new Map();
    this._directives = new Map([['include', {
      name: 'include',
      isClient: false,
      locations: ['FIELD', 'FRAGMENT_SPREAD', 'INLINE_FRAGMENT'],
      args: [{
        name: 'if',
        typeNode: parseType('Boolean!'),
        defaultValue: undefined
      }]
    }], ['skip', {
      name: 'skip',
      isClient: false,
      locations: ['FIELD', 'FRAGMENT_SPREAD', 'INLINE_FRAGMENT'],
      args: [{
        name: 'if',
        typeNode: parseType('Boolean!'),
        defaultValue: undefined
      }]
    }], ['deprecated', {
      name: 'deprecated',
      isClient: false,
      locations: ['FIELD_DEFINITION', 'ENUM_VALUE'],
      args: [{
        name: 'reason',
        typeNode: parseType('String'),
        defaultValue: {
          kind: 'StringValue',
          value: 'No longer supported'
        }
      }]
    }]]);
    this._queryTypeName = 'Query';
    this._mutationTypeName = 'Mutation';
    this._subscriptionTypeName = 'Subscription';
    this._source = source;
    this._extensions = extensions;
    this._fetchable = new Map();

    this._parse(source);

    this._extend(extensions);
  }

  var _proto5 = TypeMap.prototype;

  _proto5._parse = function _parse(source) {
    var _this5 = this;

    var document = parse(source, {
      noLocation: true
    });
    document.definitions.forEach(function (definition) {
      switch (definition.kind) {
        case 'SchemaDefinition':
          {
            _this5._parseSchemaDefinition(definition);

            break;
          }

        case 'ScalarTypeDefinition':
          {
            _this5._parseScalarNode(definition, false);

            break;
          }

        case 'EnumTypeDefinition':
          {
            _this5._parseEnumNode(definition, false);

            break;
          }

        case 'ObjectTypeDefinition':
          {
            _this5._parseObjectTypeNode(definition, false);

            break;
          }

        case 'InputObjectTypeDefinition':
          {
            _this5._parseInputObjectTypeNode(definition, false);

            break;
          }

        case 'UnionTypeDefinition':
          {
            _this5._parseUnionNode(definition, false);

            break;
          }

        case 'InterfaceTypeDefinition':
          {
            _this5._parseInterfaceNode(definition, false);

            break;
          }

        case 'DirectiveDefinition':
          {
            _this5._parseDirective(definition, false);

            break;
          }
      }
    });
  };

  _proto5._parseSchemaDefinition = function _parseSchemaDefinition(node) {
    var _this6 = this;

    node.operationTypes.forEach(function (operationType) {
      switch (operationType.operation) {
        case 'query':
          _this6._queryTypeName = operationType.type.name.value;
          break;

        case 'mutation':
          _this6._mutationTypeName = operationType.type.name.value;
          break;

        case 'subscription':
          _this6._subscriptionTypeName = operationType.type.name.value;
          break;
      }
    });
  };

  _proto5._parseScalarNode = function _parseScalarNode(node, isClient) {
    var name = node.name.value;

    if (!isDefaultScalar(name) && this._types.has(name)) {
      throw createCompilerError("_parseScalarNode: Duplicate definition for type ".concat(name, "."), null, [node]);
    }

    this._types.set(name, new ScalarType(name, isClient));
  };

  _proto5._parseEnumNode = function _parseEnumNode(node, isClient) {
    var name = node.name.value;

    if (this._types.has(name)) {
      throw createCompilerError("_parseEnumNode: Duplicate definition for type ".concat(name, "."), null, [node]);
    } // SDL doesn't have information about the actual ENUM values


    var values = node.values ? node.values.map(function (value) {
      return value.name.value;
    }) : [];

    this._types.set(name, new EnumType(name, values, isClient));
  };

  _proto5._parseObjectTypeNode = function _parseObjectTypeNode(node, isClient) {
    var _this7 = this;

    var _this$_types$get;

    var name = node.name.value; // Objects may be created by _parseUnionNode

    var type = (_this$_types$get = this._types.get(name)) !== null && _this$_types$get !== void 0 ? _this$_types$get : new ObjectType(name, isClient);

    if (!(type instanceof ObjectType)) {
      throw createCompilerError("_parseObjectTypeNode: Expected object type, got ".concat(String(type)), null, [node]);
    }

    if (type.isClient !== isClient) {
      throw createCompilerError("_parseObjectTypeNode: Cannot create object type '".concat(name, "' defined as a client type."), null, [node]);
    }

    var typeInterfaces = [];
    node.interfaces && node.interfaces.forEach(function (interfaceTypeNode) {
      var _this$_interfaceImple;

      var interfaceName = interfaceTypeNode.name.value;

      var interfaceType = _this7._types.get(interfaceName);

      if (!interfaceType) {
        interfaceType = new InterfaceType(interfaceName, isClient);

        _this7._types.set(interfaceName, interfaceType);
      }

      if (!(interfaceType instanceof InterfaceType)) {
        throw createCompilerError('_parseObjectTypeNode: Expected interface type', null, [interfaceTypeNode]);
      }

      var implementations = (_this$_interfaceImple = _this7._interfaceImplementations.get(interfaceType)) !== null && _this$_interfaceImple !== void 0 ? _this$_interfaceImple : new Set();
      implementations.add(type);

      _this7._interfaceImplementations.set(interfaceType, implementations);

      typeInterfaces.push(interfaceType);
    });
    var fetchable = null;
    node.directives && node.directives.forEach(function (directiveNode) {
      if (directiveNode.name.value === 'fetchable') {
        var field_name_arg = directiveNode.arguments && directiveNode.arguments.find(function (arg) {
          return arg.name.value === 'field_name';
        });

        if (field_name_arg != null && field_name_arg.value.kind === 'StringValue') {
          fetchable = {
            field_name: field_name_arg.value.value
          };
        }
      }
    });

    this._typeInterfaces.set(type, typeInterfaces);

    this._types.set(name, type);

    if (fetchable != null) {
      this._fetchable.set(type, fetchable);
    }

    node.fields && this._handleTypeFieldsStrict(type, node.fields, isClient);
  };

  _proto5._parseInputObjectTypeNode = function _parseInputObjectTypeNode(node, isClient) {
    var name = node.name.value;

    if (this._types.has(name)) {
      throw createCompilerError('_parseInputObjectTypeNode: Unable to parse schema file. Duplicate definition for object type', null, [node]);
    }

    var type = new InputObjectType(name, isClient);

    this._types.set(name, type);

    this._parseInputObjectFields(type, node);
  };

  _proto5._parseUnionNode = function _parseUnionNode(node, isClient) {
    var _this8 = this;

    var name = node.name.value;

    if (this._types.has(name)) {
      throw createCompilerError('_parseUnionNode: Unable to parse schema file. Duplicate definition for object type', null, [node]);
    }

    var union = new UnionType(name, isClient);

    this._types.set(name, union);

    this._unionTypes.set(union, new Set(node.types ? node.types.map(function (typeInUnion) {
      var _this$_types$get2;

      var typeInUnionName = typeInUnion.name.value;
      var object = (_this$_types$get2 = _this8._types.get(typeInUnionName)) !== null && _this$_types$get2 !== void 0 ? _this$_types$get2 : new ObjectType(typeInUnionName, false);

      if (!(object instanceof ObjectType)) {
        throw createCompilerError('_parseUnionNode: Expected object type', null, [typeInUnion]);
      }

      _this8._types.set(typeInUnionName, object);

      return object;
    }) : []));
  };

  _proto5._parseInterfaceNode = function _parseInterfaceNode(node, isClient) {
    var name = node.name.value;

    var type = this._types.get(name);

    if (!type) {
      type = new InterfaceType(name, isClient);

      this._types.set(name, type);
    }

    if (!(type instanceof InterfaceType)) {
      throw createCompilerError("_parseInterfaceNode: Expected interface type. Got ".concat(String(type)), null, [node]);
    }

    if (type.isClient !== isClient) {
      throw createCompilerError("_parseInterfaceNode: Cannot create interface '".concat(name, "' defined as a client interface"), null, [node]);
    }

    node.fields && this._handleTypeFieldsStrict(type, node.fields, isClient);
  };

  _proto5._handleTypeFieldsStrict = function _handleTypeFieldsStrict(type, fields, isClient) {
    if (this._fields.has(type)) {
      throw createCompilerError('_handleTypeFieldsStrict: Unable to parse schema file. Duplicate definition for object type');
    }

    this._handleTypeFields(type, fields, isClient);
  };

  _proto5._handleTypeFields = function _handleTypeFields(type, fields, isClient) {
    var _this$_fields$get;

    var fieldsMap = (_this$_fields$get = this._fields.get(type)) !== null && _this$_fields$get !== void 0 ? _this$_fields$get : new Map();
    fields.forEach(function (fieldNode) {
      var fieldName = fieldNode.name.value;

      if (fieldsMap.has(fieldName)) {
        throw createCompilerError("_handleTypeFields: Duplicate definition for field '".concat(fieldName, "'."));
      }

      fieldsMap.set(fieldName, {
        arguments: fieldNode.arguments ? fieldNode.arguments.map(function (arg) {
          return {
            name: arg.name.value,
            typeNode: arg.type,
            defaultValue: arg.defaultValue
          };
        }) : [],
        directives: fieldNode.directives ? fieldNode.directives.map(function (directive) {
          return {
            name: directive.name.value,
            args: directive.arguments ? directive.arguments.map(function (arg) {
              return {
                name: arg.name.value,
                value: arg.value
              };
            }) : []
          };
        }) : null,
        type: fieldNode.type,
        isClient: isClient
      });
    });

    this._fields.set(type, fieldsMap);
  };

  _proto5._parseInputObjectFields = function _parseInputObjectFields(type, node) {
    if (this._inputFields.has(type)) {
      throw createCompilerError('_parseInputObjectFields: Unable to parse schema file. Duplicate definition for type', null, [node]);
    }

    var fields = new Map();

    if (node.fields) {
      node.fields.forEach(function (fieldNode) {
        fields.set(fieldNode.name.value, fieldNode.type);
      });
    }

    this._inputFields.set(type, fields);
  };

  _proto5._parseDirective = function _parseDirective(node, isClient) {
    var name = node.name.value;

    this._directives.set(name, {
      name: name,
      args: node.arguments ? node.arguments.map(function (arg) {
        return {
          name: arg.name.value,
          typeNode: arg.type,
          defaultValue: arg.defaultValue
        };
      }) : [],
      locations: node.locations.map(function (location) {
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
      isClient: isClient
    });
  };

  _proto5._parseObjectTypeExtension = function _parseObjectTypeExtension(node) {
    var type = this._types.get(node.name.value);

    if (!(type instanceof ObjectType)) {
      throw createCompilerError("_parseObjectTypeExtension: Expected to find type with the name '".concat(node.name.value, "'"), null, [node]);
    }

    node.fields && this._handleTypeFields(type, node.fields, true
    /** client fields */
    );
  };

  _proto5._parseInterfaceTypeExtension = function _parseInterfaceTypeExtension(node) {
    var type = this._types.get(node.name.value);

    if (!(type instanceof InterfaceType)) {
      throw createCompilerError('_parseInterfaceTypeExtension: Expected to have an interface type');
    }

    node.fields && this._handleTypeFields(type, node.fields, true);
  };

  _proto5._extend = function _extend(extensions) {
    var _this9 = this;

    extensions.forEach(function (definition) {
      if (definition.kind === 'ObjectTypeDefinition') {
        _this9._parseObjectTypeNode(definition, true);
      } else if (definition.kind === 'InterfaceTypeDefinition') {
        _this9._parseInterfaceNode(definition, true);
      } else if (definition.kind === 'ScalarTypeDefinition') {
        _this9._parseScalarNode(definition, true);
      } else if (definition.kind === 'EnumTypeDefinition') {
        _this9._parseEnumNode(definition, true);
      } else if (definition.kind === 'InterfaceTypeExtension') {
        _this9._parseInterfaceTypeExtension(definition);
      } else if (definition.kind === 'ObjectTypeExtension') {
        _this9._parseObjectTypeExtension(definition);
      } else if (definition.kind === 'DirectiveDefinition') {
        _this9._parseDirective(definition, true
        /* client directive */
        );
      } else {
        throw createCompilerError("Unexpected extension kind: '".concat(definition.kind, "'"), null, [definition]);
      }
    });
  };

  _proto5.getTypes = function getTypes() {
    return Array.from(this._types.values());
  };

  _proto5.getTypeByName = function getTypeByName(typename) {
    return this._types.get(typename);
  };

  _proto5.getInterfaces = function getInterfaces(type) {
    var _this$_typeInterfaces;

    return (_this$_typeInterfaces = this._typeInterfaces.get(type)) !== null && _this$_typeInterfaces !== void 0 ? _this$_typeInterfaces : [];
  };

  _proto5.getPossibleTypeSet = function getPossibleTypeSet(type) {
    var set;

    if (type instanceof InterfaceType) {
      var _this$_interfaceImple2;

      set = (_this$_interfaceImple2 = this._interfaceImplementations.get(type)) !== null && _this$_interfaceImple2 !== void 0 ? _this$_interfaceImple2 : new Set();
    } else if (type instanceof UnionType) {
      var _this$_unionTypes$get;

      set = (_this$_unionTypes$get = this._unionTypes.get(type)) !== null && _this$_unionTypes$get !== void 0 ? _this$_unionTypes$get : new Set();
    } else {
      throw createCompilerError('Invalid type supplied to "getPossibleTypeSet"');
    }

    if (!set) {
      throw createCompilerError("Unable to find possible types for ".concat(type.name));
    }

    return set;
  };

  _proto5.getFetchableFieldName = function getFetchableFieldName(type) {
    var _this$_fetchable$get$, _this$_fetchable$get;

    return (_this$_fetchable$get$ = (_this$_fetchable$get = this._fetchable.get(type)) === null || _this$_fetchable$get === void 0 ? void 0 : _this$_fetchable$get.field_name) !== null && _this$_fetchable$get$ !== void 0 ? _this$_fetchable$get$ : null;
  };

  _proto5.getQueryType = function getQueryType() {
    return this._types.get(this._queryTypeName);
  };

  _proto5.getMutationType = function getMutationType() {
    return this._types.get(this._mutationTypeName);
  };

  _proto5.getSubscriptionType = function getSubscriptionType() {
    return this._types.get(this._subscriptionTypeName);
  };

  _proto5.getField = function getField(type, fieldName) {
    var fields = this._fields.get(type);

    if (fields) {
      return fields.get(fieldName);
    }
  };

  _proto5.getFieldMap = function getFieldMap(type) {
    return this._fields.get(type);
  };

  _proto5.getInputField = function getInputField(type, fieldName) {
    var inputFields = this._inputFields.get(type);

    if (inputFields) {
      return inputFields.get(fieldName);
    }
  };

  _proto5.getInputFieldMap = function getInputFieldMap(type) {
    return this._inputFields.get(type);
  };

  _proto5.getDirectives = function getDirectives() {
    return Array.from(this._directives.values());
  };

  _proto5.extend = function extend(extensions) {
    return new TypeMap(this._source, this._extensions.concat(extensions));
  };

  return TypeMap;
}();

function create(baseSchema, schemaExtensionDocuments, schemaExtensions) {
  var extensions = [];
  schemaExtensions && schemaExtensions.forEach(function (source) {
    var doc = parse(source, {
      noLocation: true
    });
    doc.definitions.forEach(function (definition) {
      if (isSchemaDefinitionAST(definition)) {
        extensions.push(definition);
      }
    });
  });
  schemaExtensionDocuments && schemaExtensionDocuments.forEach(function (doc) {
    doc.definitions.forEach(function (definition) {
      if (isSchemaDefinitionAST(definition)) {
        extensions.push(definition);
      }
    });
  });
  return new Schema(new TypeMap(baseSchema, extensions));
}

function parseInputArgumentDefinitions(schema, args) {
  return args.map(function (arg) {
    var argType = schema.assertInputType(schema.expectTypeFromAST(arg.typeNode));
    var defaultValue;
    var defaultValueNode = arg.defaultValue;

    if (defaultValueNode != null) {
      var nullableType = schema.getNullableType(argType);
      var isNullable = schema.isNonNull(argType) === false;

      if (isNullable && defaultValueNode.kind === 'NullValue') {
        defaultValue = null;
      } else {
        if (nullableType instanceof ScalarType || nullableType instanceof EnumType) {
          defaultValue = schema.parseLiteral(nullableType, defaultValueNode);
        } else if (nullableType instanceof List && defaultValueNode.kind === 'ListValue' || nullableType instanceof InputObjectType && defaultValueNode.kind === 'ObjectValue') {
          defaultValue = valueFromASTUntyped(defaultValueNode);
        }
      }

      if (defaultValue === undefined) {
        throw createCompilerError("parseInputArgumentDefinitions: Unexpected default value: ".concat(String(defaultValueNode), ". Expected to have a value of type ").concat(String(nullableType), "."));
      }
    }

    return {
      name: arg.name,
      type: argType,
      defaultValue: defaultValue
    };
  });
}

function parseInputArgumentDefinitionsMap(schema, args) {
  return new Map(parseInputArgumentDefinitions(schema, args).map(function (arg) {
    return [arg.name, arg];
  }));
}

function isDefaultScalar(name) {
  return new Set(['ID', 'String', 'Boolean', 'Int', 'Float']).has(name);
}

module.exports = {
  create: create
};