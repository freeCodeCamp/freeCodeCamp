import { isNode } from '../language/ast.mjs';
import { Kind } from '../language/kinds.mjs';
import { getEnterLeaveForKind } from '../language/visitor.mjs';
import {
  getNamedType,
  getNullableType,
  isCompositeType,
  isEnumType,
  isInputObjectType,
  isInputType,
  isInterfaceType,
  isListType,
  isObjectType,
  isOutputType,
} from '../type/definition.mjs';
import {
  SchemaMetaFieldDef,
  TypeMetaFieldDef,
  TypeNameMetaFieldDef,
} from '../type/introspection.mjs';
import { typeFromAST } from './typeFromAST.mjs';
/**
 * TypeInfo is a utility class which, given a GraphQL schema, can keep track
 * of the current field and type definitions at any point in a GraphQL document
 * AST during a recursive descent by calling `enter(node)` and `leave(node)`.
 */

export class TypeInfo {
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
      if (isInputType(initialType)) {
        this._inputTypeStack.push(initialType);
      }

      if (isCompositeType(initialType)) {
        this._parentTypeStack.push(initialType);
      }

      if (isOutputType(initialType)) {
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
      case Kind.SELECTION_SET: {
        const namedType = getNamedType(this.getType());

        this._parentTypeStack.push(
          isCompositeType(namedType) ? namedType : undefined,
        );

        break;
      }

      case Kind.FIELD: {
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

        this._typeStack.push(isOutputType(fieldType) ? fieldType : undefined);

        break;
      }

      case Kind.DIRECTIVE:
        this._directive = schema.getDirective(node.name.value);
        break;

      case Kind.OPERATION_DEFINITION: {
        const rootType = schema.getRootType(node.operation);

        this._typeStack.push(isObjectType(rootType) ? rootType : undefined);

        break;
      }

      case Kind.INLINE_FRAGMENT:
      case Kind.FRAGMENT_DEFINITION: {
        const typeConditionAST = node.typeCondition;
        const outputType = typeConditionAST
          ? typeFromAST(schema, typeConditionAST)
          : getNamedType(this.getType());

        this._typeStack.push(isOutputType(outputType) ? outputType : undefined);

        break;
      }

      case Kind.VARIABLE_DEFINITION: {
        const inputType = typeFromAST(schema, node.type);

        this._inputTypeStack.push(
          isInputType(inputType) ? inputType : undefined,
        );

        break;
      }

      case Kind.ARGUMENT: {
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

        this._inputTypeStack.push(isInputType(argType) ? argType : undefined);

        break;
      }

      case Kind.LIST: {
        const listType = getNullableType(this.getInputType());
        const itemType = isListType(listType) ? listType.ofType : listType; // List positions never have a default value.

        this._defaultValueStack.push(undefined);

        this._inputTypeStack.push(isInputType(itemType) ? itemType : undefined);

        break;
      }

      case Kind.OBJECT_FIELD: {
        const objectType = getNamedType(this.getInputType());
        let inputFieldType;
        let inputField;

        if (isInputObjectType(objectType)) {
          inputField = objectType.getFields()[node.name.value];

          if (inputField) {
            inputFieldType = inputField.type;
          }
        }

        this._defaultValueStack.push(
          inputField ? inputField.defaultValue : undefined,
        );

        this._inputTypeStack.push(
          isInputType(inputFieldType) ? inputFieldType : undefined,
        );

        break;
      }

      case Kind.ENUM: {
        const enumType = getNamedType(this.getInputType());
        let enumValue;

        if (isEnumType(enumType)) {
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
      case Kind.SELECTION_SET:
        this._parentTypeStack.pop();

        break;

      case Kind.FIELD:
        this._fieldDefStack.pop();

        this._typeStack.pop();

        break;

      case Kind.DIRECTIVE:
        this._directive = null;
        break;

      case Kind.OPERATION_DEFINITION:
      case Kind.INLINE_FRAGMENT:
      case Kind.FRAGMENT_DEFINITION:
        this._typeStack.pop();

        break;

      case Kind.VARIABLE_DEFINITION:
        this._inputTypeStack.pop();

        break;

      case Kind.ARGUMENT:
        this._argument = null;

        this._defaultValueStack.pop();

        this._inputTypeStack.pop();

        break;

      case Kind.LIST:
      case Kind.OBJECT_FIELD:
        this._defaultValueStack.pop();

        this._inputTypeStack.pop();

        break;

      case Kind.ENUM:
        this._enumValue = null;
        break;

      default: // Ignore other nodes
    }
  }
}

/**
 * Not exactly the same as the executor's definition of getFieldDef, in this
 * statically evaluated environment we do not always have an Object type,
 * and need to handle Interface and Union types.
 */
function getFieldDef(schema, parentType, fieldNode) {
  const name = fieldNode.name.value;

  if (
    name === SchemaMetaFieldDef.name &&
    schema.getQueryType() === parentType
  ) {
    return SchemaMetaFieldDef;
  }

  if (name === TypeMetaFieldDef.name && schema.getQueryType() === parentType) {
    return TypeMetaFieldDef;
  }

  if (name === TypeNameMetaFieldDef.name && isCompositeType(parentType)) {
    return TypeNameMetaFieldDef;
  }

  if (isObjectType(parentType) || isInterfaceType(parentType)) {
    return parentType.getFields()[name];
  }
}
/**
 * Creates a new visitor instance which maintains a provided TypeInfo instance
 * along with visiting visitor.
 */

export function visitWithTypeInfo(typeInfo, visitor) {
  return {
    enter(...args) {
      const node = args[0];
      typeInfo.enter(node);
      const fn = getEnterLeaveForKind(visitor, node.kind).enter;

      if (fn) {
        const result = fn.apply(visitor, args);

        if (result !== undefined) {
          typeInfo.leave(node);

          if (isNode(result)) {
            typeInfo.enter(result);
          }
        }

        return result;
      }
    },

    leave(...args) {
      const node = args[0];
      const fn = getEnterLeaveForKind(visitor, node.kind).leave;
      let result;

      if (fn) {
        result = fn.apply(visitor, args);
      }

      typeInfo.leave(node);
      return result;
    },
  };
}
