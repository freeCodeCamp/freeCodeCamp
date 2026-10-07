'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.TypeInfo = void 0;
exports.visitWithTypeInfo = visitWithTypeInfo;

var _ast = require('../language/ast.js');

var _kinds = require('../language/kinds.js');

var _visitor = require('../language/visitor.js');

var _definition = require('../type/definition.js');

var _introspection = require('../type/introspection.js');

var _typeFromAST = require('./typeFromAST.js');

/**
 * TypeInfo is a utility class which, given a GraphQL schema, can keep track
 * of the current field and type definitions at any point in a GraphQL document
 * AST during a recursive descent by calling `enter(node)` and `leave(node)`.
 */
class TypeInfo {
  constructor(
    schema,
    /**
     * Initial type may be provided in rare cases to facilitate traversals
     *  beginning somewhere other than documents.
     */
    initialType,
    /** @deprecated will be removed in 17.0.0 */
    getFieldDefFn,
  ) {
    this._schema = schema;
    this._typeStack = [];
    this._parentTypeStack = [];
    this._inputTypeStack = [];
    this._fieldDefStack = [];
    this._defaultValueStack = [];
    this._directive = null;
    this._argument = null;
    this._enumValue = null;
    this._getFieldDef =
      getFieldDefFn !== null && getFieldDefFn !== void 0
        ? getFieldDefFn
        : getFieldDef;

    if (initialType) {
      if ((0, _definition.isInputType)(initialType)) {
        this._inputTypeStack.push(initialType);
      }

      if ((0, _definition.isCompositeType)(initialType)) {
        this._parentTypeStack.push(initialType);
      }

      if ((0, _definition.isOutputType)(initialType)) {
        this._typeStack.push(initialType);
      }
    }
  }

  get [Symbol.toStringTag]() {
    return 'TypeInfo';
  }

  getType() {
    if (this._typeStack.length > 0) {
      return this._typeStack[this._typeStack.length - 1];
    }
  }

  getParentType() {
    if (this._parentTypeStack.length > 0) {
      return this._parentTypeStack[this._parentTypeStack.length - 1];
    }
  }

  getInputType() {
    if (this._inputTypeStack.length > 0) {
      return this._inputTypeStack[this._inputTypeStack.length - 1];
    }
  }

  getParentInputType() {
    if (this._inputTypeStack.length > 1) {
      return this._inputTypeStack[this._inputTypeStack.length - 2];
    }
  }

  getFieldDef() {
    if (this._fieldDefStack.length > 0) {
      return this._fieldDefStack[this._fieldDefStack.length - 1];
    }
  }

  getDefaultValue() {
    if (this._defaultValueStack.length > 0) {
      return this._defaultValueStack[this._defaultValueStack.length - 1];
    }
  }

  getDirective() {
    return this._directive;
  }

  getArgument() {
    return this._argument;
  }

  getEnumValue() {
    return this._enumValue;
  }

  enter(node) {
    const schema = this._schema; // Note: many of the types below are explicitly typed as "unknown" to drop
    // any assumptions of a valid schema to ensure runtime types are properly
    // checked before continuing since TypeInfo is used as part of validation
    // which occurs before guarantees of schema and document validity.

    switch (node.kind) {
      case _kinds.Kind.SELECTION_SET: {
        const namedType = (0, _definition.getNamedType)(this.getType());

        this._parentTypeStack.push(
          (0, _definition.isCompositeType)(namedType) ? namedType : undefined,
        );

        break;
      }

      case _kinds.Kind.FIELD: {
        const parentType = this.getParentType();
        let fieldDef;
        let fieldType;

        if (parentType) {
          fieldDef = this._getFieldDef(schema, parentType, node);

          if (fieldDef) {
            fieldType = fieldDef.type;
          }
        }

        this._fieldDefStack.push(fieldDef);

        this._typeStack.push(
          (0, _definition.isOutputType)(fieldType) ? fieldType : undefined,
        );

        break;
      }

      case _kinds.Kind.DIRECTIVE:
        this._directive = schema.getDirective(node.name.value);
        break;

      case _kinds.Kind.OPERATION_DEFINITION: {
        const rootType = schema.getRootType(node.operation);

        this._typeStack.push(
          (0, _definition.isObjectType)(rootType) ? rootType : undefined,
        );

        break;
      }

      case _kinds.Kind.INLINE_FRAGMENT:
      case _kinds.Kind.FRAGMENT_DEFINITION: {
        const typeConditionAST = node.typeCondition;
        const outputType = typeConditionAST
          ? (0, _typeFromAST.typeFromAST)(schema, typeConditionAST)
          : (0, _definition.getNamedType)(this.getType());

        this._typeStack.push(
          (0, _definition.isOutputType)(outputType) ? outputType : undefined,
        );

        break;
      }

      case _kinds.Kind.VARIABLE_DEFINITION: {
        const inputType = (0, _typeFromAST.typeFromAST)(schema, node.type);

        this._inputTypeStack.push(
          (0, _definition.isInputType)(inputType) ? inputType : undefined,
        );

        break;
      }

      case _kinds.Kind.ARGUMENT: {
        var _this$getDirective;

        let argDef;
        let argType;
        const fieldOrDirective =
          (_this$getDirective = this.getDirective()) !== null &&
          _this$getDirective !== void 0
            ? _this$getDirective
            : this.getFieldDef();

        if (fieldOrDirective) {
          argDef = fieldOrDirective.args.find(
            (arg) => arg.name === node.name.value,
          );

          if (argDef) {
            argType = argDef.type;
          }
        }

        this._argument = argDef;

        this._defaultValueStack.push(argDef ? argDef.defaultValue : undefined);

        this._inputTypeStack.push(
          (0, _definition.isInputType)(argType) ? argType : undefined,
        );

        break;
      }

      case _kinds.Kind.LIST: {
        const listType = (0, _definition.getNullableType)(this.getInputType());
        const itemType = (0, _definition.isListType)(listType)
          ? listType.ofType
          : listType; // List positions never have a default value.

        this._defaultValueStack.push(undefined);

        this._inputTypeStack.push(
          (0, _definition.isInputType)(itemType) ? itemType : undefined,
        );

        break;
      }

      case _kinds.Kind.OBJECT_FIELD: {
        const objectType = (0, _definition.getNamedType)(this.getInputType());
        let inputFieldType;
        let inputField;

        if ((0, _definition.isInputObjectType)(objectType)) {
          inputField = objectType.getFields()[node.name.value];

          if (inputField) {
            inputFieldType = inputField.type;
          }
        }

        this._defaultValueStack.push(
          inputField ? inputField.defaultValue : undefined,
        );

        this._inputTypeStack.push(
          (0, _definition.isInputType)(inputFieldType)
            ? inputFieldType
            : undefined,
        );

        break;
      }

      case _kinds.Kind.ENUM: {
        const enumType = (0, _definition.getNamedType)(this.getInputType());
        let enumValue;

        if ((0, _definition.isEnumType)(enumType)) {
          enumValue = enumType.getValue(node.value);
        }

        this._enumValue = enumValue;
        break;
      }

      default: // Ignore other nodes
    }
  }

  leave(node) {
    switch (node.kind) {
      case _kinds.Kind.SELECTION_SET:
        this._parentTypeStack.pop();

        break;

      case _kinds.Kind.FIELD:
        this._fieldDefStack.pop();

        this._typeStack.pop();

        break;

      case _kinds.Kind.DIRECTIVE:
        this._directive = null;
        break;

      case _kinds.Kind.OPERATION_DEFINITION:
      case _kinds.Kind.INLINE_FRAGMENT:
      case _kinds.Kind.FRAGMENT_DEFINITION:
        this._typeStack.pop();

        break;

      case _kinds.Kind.VARIABLE_DEFINITION:
        this._inputTypeStack.pop();

        break;

      case _kinds.Kind.ARGUMENT:
        this._argument = null;

        this._defaultValueStack.pop();

        this._inputTypeStack.pop();

        break;

      case _kinds.Kind.LIST:
      case _kinds.Kind.OBJECT_FIELD:
        this._defaultValueStack.pop();

        this._inputTypeStack.pop();

        break;

      case _kinds.Kind.ENUM:
        this._enumValue = null;
        break;

      default: // Ignore other nodes
    }
  }
}

exports.TypeInfo = TypeInfo;

/**
 * Not exactly the same as the executor's definition of getFieldDef, in this
 * statically evaluated environment we do not always have an Object type,
 * and need to handle Interface and Union types.
 */
function getFieldDef(schema, parentType, fieldNode) {
  const name = fieldNode.name.value;

  if (
    name === _introspection.SchemaMetaFieldDef.name &&
    schema.getQueryType() === parentType
  ) {
    return _introspection.SchemaMetaFieldDef;
  }

  if (
    name === _introspection.TypeMetaFieldDef.name &&
    schema.getQueryType() === parentType
  ) {
    return _introspection.TypeMetaFieldDef;
  }

  if (
    name === _introspection.TypeNameMetaFieldDef.name &&
    (0, _definition.isCompositeType)(parentType)
  ) {
    return _introspection.TypeNameMetaFieldDef;
  }

  if (
    (0, _definition.isObjectType)(parentType) ||
    (0, _definition.isInterfaceType)(parentType)
  ) {
    return parentType.getFields()[name];
  }
}
/**
 * Creates a new visitor instance which maintains a provided TypeInfo instance
 * along with visiting visitor.
 */

function visitWithTypeInfo(typeInfo, visitor) {
  return {
    enter(...args) {
      const node = args[0];
      typeInfo.enter(node);
      const fn = (0, _visitor.getEnterLeaveForKind)(visitor, node.kind).enter;

      if (fn) {
        const result = fn.apply(visitor, args);

        if (result !== undefined) {
          typeInfo.leave(node);

          if ((0, _ast.isNode)(result)) {
            typeInfo.enter(result);
          }
        }

        return result;
      }
    },

    leave(...args) {
      const node = args[0];
      const fn = (0, _visitor.getEnterLeaveForKind)(visitor, node.kind).leave;
      let result;

      if (fn) {
        result = fn.apply(visitor, args);
      }

      typeInfo.leave(node);
      return result;
    },
  };
}
