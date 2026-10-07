'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.assertValidSchema = assertValidSchema;
exports.validateSchema = validateSchema;

var _inspect = require('../jsutils/inspect.js');

var _GraphQLError = require('../error/GraphQLError.js');

var _ast = require('../language/ast.js');

var _typeComparators = require('../utilities/typeComparators.js');

var _definition = require('./definition.js');

var _directives = require('./directives.js');

var _introspection = require('./introspection.js');

var _schema = require('./schema.js');

/**
 * Implements the "Type Validation" sub-sections of the specification's
 * "Type System" section.
 *
 * Validation runs synchronously, returning an array of encountered errors, or
 * an empty array if no errors were encountered and the Schema is valid.
 */
function validateSchema(schema) {
  // First check to ensure the provided value is in fact a GraphQLSchema.
  (0, _schema.assertSchema)(schema); // If this Schema has already been validated, return the previous results.

  if (schema.__validationErrors) {
    return schema.__validationErrors;
  } // Validate the schema, producing a list of errors.

  const context = new SchemaValidationContext(schema);
  validateRootTypes(context);
  validateDirectives(context);
  validateTypes(context); // Persist the results of validation before returning to ensure validation
  // does not run multiple times for this schema.

  const errors = context.getErrors();
  schema.__validationErrors = errors;
  return errors;
}
/**
 * Utility function which asserts a schema is valid by throwing an error if
 * it is invalid.
 */

function assertValidSchema(schema) {
  const errors = validateSchema(schema);

  if (errors.length !== 0) {
    throw new Error(errors.map((error) => error.message).join('\n\n'));
  }
}

class SchemaValidationContext {
  constructor(schema) {
    this._errors = [];
    this.schema = schema;
  }

  reportError(message, nodes) {
    const _nodes = Array.isArray(nodes) ? nodes.filter(Boolean) : nodes;

    this._errors.push(
      new _GraphQLError.GraphQLError(message, {
        nodes: _nodes,
      }),
    );
  }

  getErrors() {
    return this._errors;
  }
}

function validateRootTypes(context) {
  const schema = context.schema;
  const queryType = schema.getQueryType();

  if (!queryType) {
    context.reportError('Query root type must be provided.', schema.astNode);
  } else if (!(0, _definition.isObjectType)(queryType)) {
    var _getOperationTypeNode;

    context.reportError(
      `Query root type must be Object type, it cannot be ${(0,
      _inspect.inspect)(queryType)}.`,
      (_getOperationTypeNode = getOperationTypeNode(
        schema,
        _ast.OperationTypeNode.QUERY,
      )) !== null && _getOperationTypeNode !== void 0
        ? _getOperationTypeNode
        : queryType.astNode,
    );
  }

  const mutationType = schema.getMutationType();

  if (mutationType && !(0, _definition.isObjectType)(mutationType)) {
    var _getOperationTypeNode2;

    context.reportError(
      'Mutation root type must be Object type if provided, it cannot be ' +
        `${(0, _inspect.inspect)(mutationType)}.`,
      (_getOperationTypeNode2 = getOperationTypeNode(
        schema,
        _ast.OperationTypeNode.MUTATION,
      )) !== null && _getOperationTypeNode2 !== void 0
        ? _getOperationTypeNode2
        : mutationType.astNode,
    );
  }

  const subscriptionType = schema.getSubscriptionType();

  if (subscriptionType && !(0, _definition.isObjectType)(subscriptionType)) {
    var _getOperationTypeNode3;

    context.reportError(
      'Subscription root type must be Object type if provided, it cannot be ' +
        `${(0, _inspect.inspect)(subscriptionType)}.`,
      (_getOperationTypeNode3 = getOperationTypeNode(
        schema,
        _ast.OperationTypeNode.SUBSCRIPTION,
      )) !== null && _getOperationTypeNode3 !== void 0
        ? _getOperationTypeNode3
        : subscriptionType.astNode,
    );
  }
}

function getOperationTypeNode(schema, operation) {
  var _flatMap$find;

  return (_flatMap$find = [schema.astNode, ...schema.extensionASTNodes]
    .flatMap(
      // FIXME: https://github.com/graphql/graphql-js/issues/2203
      (schemaNode) => {
        var _schemaNode$operation;

        return (
          /* c8 ignore next */
          (_schemaNode$operation =
            schemaNode === null || schemaNode === void 0
              ? void 0
              : schemaNode.operationTypes) !== null &&
            _schemaNode$operation !== void 0
            ? _schemaNode$operation
            : []
        );
      },
    )
    .find((operationNode) => operationNode.operation === operation)) === null ||
    _flatMap$find === void 0
    ? void 0
    : _flatMap$find.type;
}

function validateDirectives(context) {
  for (const directive of context.schema.getDirectives()) {
    // Ensure all directives are in fact GraphQL directives.
    if (!(0, _directives.isDirective)(directive)) {
      context.reportError(
        `Expected directive but got: ${(0, _inspect.inspect)(directive)}.`,
        directive === null || directive === void 0 ? void 0 : directive.astNode,
      );
      continue;
    } // Ensure they are named correctly.

    validateName(context, directive);

    if (directive.locations.length === 0) {
      context.reportError(
        `Directive @${directive.name} must include 1 or more locations.`,
        directive.astNode,
      );
    } // Ensure the arguments are valid.

    for (const arg of directive.args) {
      // Ensure they are named correctly.
      validateName(context, arg); // Ensure the type is an input type.

      if (!(0, _definition.isInputType)(arg.type)) {
        context.reportError(
          `The type of @${directive.name}(${arg.name}:) must be Input Type ` +
            `but got: ${(0, _inspect.inspect)(arg.type)}.`,
          arg.astNode,
        );
      }

      if (
        (0, _definition.isRequiredArgument)(arg) &&
        arg.deprecationReason != null
      ) {
        var _arg$astNode;

        context.reportError(
          `Required argument @${directive.name}(${arg.name}:) cannot be deprecated.`,
          [
            getDeprecatedDirectiveNode(arg.astNode),
            (_arg$astNode = arg.astNode) === null || _arg$astNode === void 0
              ? void 0
              : _arg$astNode.type,
          ],
        );
      }
    }
  }
}

function validateName(context, node) {
  // Ensure names are valid, however introspection types opt out.
  if (node.name.startsWith('__')) {
    context.reportError(
      `Name "${node.name}" must not begin with "__", which is reserved by GraphQL introspection.`,
      node.astNode,
    );
  }
}

function validateTypes(context) {
  const validateInputObjectCircularRefs =
    createInputObjectCircularRefsValidator(context);
  const typeMap = context.schema.getTypeMap();

  for (const type of Object.values(typeMap)) {
    // Ensure all provided types are in fact GraphQL type.
    if (!(0, _definition.isNamedType)(type)) {
      context.reportError(
        `Expected GraphQL named type but got: ${(0, _inspect.inspect)(type)}.`,
        type.astNode,
      );
      continue;
    } // Ensure it is named correctly (excluding introspection types).

    if (!(0, _introspection.isIntrospectionType)(type)) {
      validateName(context, type);
    }

    if ((0, _definition.isObjectType)(type)) {
      // Ensure fields are valid
      validateFields(context, type); // Ensure objects implement the interfaces they claim to.

      validateInterfaces(context, type);
    } else if ((0, _definition.isInterfaceType)(type)) {
      // Ensure fields are valid.
      validateFields(context, type); // Ensure interfaces implement the interfaces they claim to.

      validateInterfaces(context, type);
    } else if ((0, _definition.isUnionType)(type)) {
      // Ensure Unions include valid member types.
      validateUnionMembers(context, type);
    } else if ((0, _definition.isEnumType)(type)) {
      // Ensure Enums have valid values.
      validateEnumValues(context, type);
    } else if ((0, _definition.isInputObjectType)(type)) {
      // Ensure Input Object fields are valid.
      validateInputFields(context, type); // Ensure Input Objects do not contain non-nullable circular references

      validateInputObjectCircularRefs(type);
    }
  }
}

function validateFields(context, type) {
  const fields = Object.values(type.getFields()); // Objects and Interfaces both must define one or more fields.

  if (fields.length === 0) {
    context.reportError(`Type ${type.name} must define one or more fields.`, [
      type.astNode,
      ...type.extensionASTNodes,
    ]);
  }

  for (const field of fields) {
    // Ensure they are named correctly.
    validateName(context, field); // Ensure the type is an output type

    if (!(0, _definition.isOutputType)(field.type)) {
      var _field$astNode;

      context.reportError(
        `The type of ${type.name}.${field.name} must be Output Type ` +
          `but got: ${(0, _inspect.inspect)(field.type)}.`,
        (_field$astNode = field.astNode) === null || _field$astNode === void 0
          ? void 0
          : _field$astNode.type,
      );
    } // Ensure the arguments are valid

    for (const arg of field.args) {
      const argName = arg.name; // Ensure they are named correctly.

      validateName(context, arg); // Ensure the type is an input type

      if (!(0, _definition.isInputType)(arg.type)) {
        var _arg$astNode2;

        context.reportError(
          `The type of ${type.name}.${field.name}(${argName}:) must be Input ` +
            `Type but got: ${(0, _inspect.inspect)(arg.type)}.`,
          (_arg$astNode2 = arg.astNode) === null || _arg$astNode2 === void 0
            ? void 0
            : _arg$astNode2.type,
        );
      }

      if (
        (0, _definition.isRequiredArgument)(arg) &&
        arg.deprecationReason != null
      ) {
        var _arg$astNode3;

        context.reportError(
          `Required argument ${type.name}.${field.name}(${argName}:) cannot be deprecated.`,
          [
            getDeprecatedDirectiveNode(arg.astNode),
            (_arg$astNode3 = arg.astNode) === null || _arg$astNode3 === void 0
              ? void 0
              : _arg$astNode3.type,
          ],
        );
      }
    }
  }
}

function validateInterfaces(context, type) {
  const ifaceTypeNames = Object.create(null);

  for (const iface of type.getInterfaces()) {
    if (!(0, _definition.isInterfaceType)(iface)) {
      context.reportError(
        `Type ${(0, _inspect.inspect)(
          type,
        )} must only implement Interface types, ` +
          `it cannot implement ${(0, _inspect.inspect)(iface)}.`,
        getAllImplementsInterfaceNodes(type, iface),
      );
      continue;
    }

    if (type === iface) {
      context.reportError(
        `Type ${type.name} cannot implement itself because it would create a circular reference.`,
        getAllImplementsInterfaceNodes(type, iface),
      );
      continue;
    }

    if (ifaceTypeNames[iface.name]) {
      context.reportError(
        `Type ${type.name} can only implement ${iface.name} once.`,
        getAllImplementsInterfaceNodes(type, iface),
      );
      continue;
    }

    ifaceTypeNames[iface.name] = true;
    validateTypeImplementsAncestors(context, type, iface);
    validateTypeImplementsInterface(context, type, iface);
  }
}

function validateTypeImplementsInterface(context, type, iface) {
  const typeFieldMap = type.getFields(); // Assert each interface field is implemented.

  for (const ifaceField of Object.values(iface.getFields())) {
    const fieldName = ifaceField.name;
    const typeField = typeFieldMap[fieldName]; // Assert interface field exists on type.

    if (!typeField) {
      context.reportError(
        `Interface field ${iface.name}.${fieldName} expected but ${type.name} does not provide it.`,
        [ifaceField.astNode, type.astNode, ...type.extensionASTNodes],
      );
      continue;
    } // Assert interface field type is satisfied by type field type, by being
    // a valid subtype. (covariant)

    if (
      !(0, _typeComparators.isTypeSubTypeOf)(
        context.schema,
        typeField.type,
        ifaceField.type,
      )
    ) {
      var _ifaceField$astNode, _typeField$astNode;

      context.reportError(
        `Interface field ${iface.name}.${fieldName} expects type ` +
          `${(0, _inspect.inspect)(ifaceField.type)} but ${
            type.name
          }.${fieldName} ` +
          `is type ${(0, _inspect.inspect)(typeField.type)}.`,
        [
          (_ifaceField$astNode = ifaceField.astNode) === null ||
          _ifaceField$astNode === void 0
            ? void 0
            : _ifaceField$astNode.type,
          (_typeField$astNode = typeField.astNode) === null ||
          _typeField$astNode === void 0
            ? void 0
            : _typeField$astNode.type,
        ],
      );
    } // Assert each interface field arg is implemented.

    for (const ifaceArg of ifaceField.args) {
      const argName = ifaceArg.name;
      const typeArg = typeField.args.find((arg) => arg.name === argName); // Assert interface field arg exists on object field.

      if (!typeArg) {
        context.reportError(
          `Interface field argument ${iface.name}.${fieldName}(${argName}:) expected but ${type.name}.${fieldName} does not provide it.`,
          [ifaceArg.astNode, typeField.astNode],
        );
        continue;
      } // Assert interface field arg type matches object field arg type.
      // (invariant)
      // TODO: change to contravariant?

      if (!(0, _typeComparators.isEqualType)(ifaceArg.type, typeArg.type)) {
        var _ifaceArg$astNode, _typeArg$astNode;

        context.reportError(
          `Interface field argument ${iface.name}.${fieldName}(${argName}:) ` +
            `expects type ${(0, _inspect.inspect)(ifaceArg.type)} but ` +
            `${type.name}.${fieldName}(${argName}:) is type ` +
            `${(0, _inspect.inspect)(typeArg.type)}.`,
          [
            (_ifaceArg$astNode = ifaceArg.astNode) === null ||
            _ifaceArg$astNode === void 0
              ? void 0
              : _ifaceArg$astNode.type,
            (_typeArg$astNode = typeArg.astNode) === null ||
            _typeArg$astNode === void 0
              ? void 0
              : _typeArg$astNode.type,
          ],
        );
      } // TODO: validate default values?
    } // Assert additional arguments must not be required.

    for (const typeArg of typeField.args) {
      const argName = typeArg.name;
      const ifaceArg = ifaceField.args.find((arg) => arg.name === argName);

      if (!ifaceArg && (0, _definition.isRequiredArgument)(typeArg)) {
        context.reportError(
          `Object field ${type.name}.${fieldName} includes required argument ${argName} that is missing from the Interface field ${iface.name}.${fieldName}.`,
          [typeArg.astNode, ifaceField.astNode],
        );
      }
    }
  }
}

function validateTypeImplementsAncestors(context, type, iface) {
  const ifaceInterfaces = type.getInterfaces();

  for (const transitive of iface.getInterfaces()) {
    if (!ifaceInterfaces.includes(transitive)) {
      context.reportError(
        transitive === type
          ? `Type ${type.name} cannot implement ${iface.name} because it would create a circular reference.`
          : `Type ${type.name} must implement ${transitive.name} because it is implemented by ${iface.name}.`,
        [
          ...getAllImplementsInterfaceNodes(iface, transitive),
          ...getAllImplementsInterfaceNodes(type, iface),
        ],
      );
    }
  }
}

function validateUnionMembers(context, union) {
  const memberTypes = union.getTypes();

  if (memberTypes.length === 0) {
    context.reportError(
      `Union type ${union.name} must define one or more member types.`,
      [union.astNode, ...union.extensionASTNodes],
    );
  }

  const includedTypeNames = Object.create(null);

  for (const memberType of memberTypes) {
    if (includedTypeNames[memberType.name]) {
      context.reportError(
        `Union type ${union.name} can only include type ${memberType.name} once.`,
        getUnionMemberTypeNodes(union, memberType.name),
      );
      continue;
    }

    includedTypeNames[memberType.name] = true;

    if (!(0, _definition.isObjectType)(memberType)) {
      context.reportError(
        `Union type ${union.name} can only include Object types, ` +
          `it cannot include ${(0, _inspect.inspect)(memberType)}.`,
        getUnionMemberTypeNodes(union, String(memberType)),
      );
    }
  }
}

function validateEnumValues(context, enumType) {
  const enumValues = enumType.getValues();

  if (enumValues.length === 0) {
    context.reportError(
      `Enum type ${enumType.name} must define one or more values.`,
      [enumType.astNode, ...enumType.extensionASTNodes],
    );
  }

  for (const enumValue of enumValues) {
    // Ensure valid name.
    validateName(context, enumValue);
  }
}

function validateInputFields(context, inputObj) {
  const fields = Object.values(inputObj.getFields());

  if (fields.length === 0) {
    context.reportError(
      `Input Object type ${inputObj.name} must define one or more fields.`,
      [inputObj.astNode, ...inputObj.extensionASTNodes],
    );
  } // Ensure the arguments are valid

  for (const field of fields) {
    // Ensure they are named correctly.
    validateName(context, field); // Ensure the type is an input type

    if (!(0, _definition.isInputType)(field.type)) {
      var _field$astNode2;

      context.reportError(
        `The type of ${inputObj.name}.${field.name} must be Input Type ` +
          `but got: ${(0, _inspect.inspect)(field.type)}.`,
        (_field$astNode2 = field.astNode) === null || _field$astNode2 === void 0
          ? void 0
          : _field$astNode2.type,
      );
    }

    if (
      (0, _definition.isRequiredInputField)(field) &&
      field.deprecationReason != null
    ) {
      var _field$astNode3;

      context.reportError(
        `Required input field ${inputObj.name}.${field.name} cannot be deprecated.`,
        [
          getDeprecatedDirectiveNode(field.astNode),
          (_field$astNode3 = field.astNode) === null ||
          _field$astNode3 === void 0
            ? void 0
            : _field$astNode3.type,
        ],
      );
    }

    if (inputObj.isOneOf) {
      validateOneOfInputObjectField(inputObj, field, context);
    }
  }
}

function validateOneOfInputObjectField(type, field, context) {
  if ((0, _definition.isNonNullType)(field.type)) {
    var _field$astNode4;

    context.reportError(
      `OneOf input field ${type.name}.${field.name} must be nullable.`,
      (_field$astNode4 = field.astNode) === null || _field$astNode4 === void 0
        ? void 0
        : _field$astNode4.type,
    );
  }

  if (field.defaultValue !== undefined) {
    context.reportError(
      `OneOf input field ${type.name}.${field.name} cannot have a default value.`,
      field.astNode,
    );
  }
}

function createInputObjectCircularRefsValidator(context) {
  // Modified copy of algorithm from 'src/validation/rules/NoFragmentCycles.js'.
  // Tracks already visited types to maintain O(N) and to ensure that cycles
  // are not redundantly reported.
  const visitedTypes = Object.create(null); // Array of types nodes used to produce meaningful errors

  const fieldPath = []; // Position in the type path

  const fieldPathIndexByTypeName = Object.create(null);
  return detectCycleRecursive; // This does a straight-forward DFS to find cycles.
  // It does not terminate when a cycle was found but continues to explore
  // the graph to find all possible cycles.

  function detectCycleRecursive(inputObj) {
    if (visitedTypes[inputObj.name]) {
      return;
    }

    visitedTypes[inputObj.name] = true;
    fieldPathIndexByTypeName[inputObj.name] = fieldPath.length;
    const fields = Object.values(inputObj.getFields());

    for (const field of fields) {
      if (
        (0, _definition.isNonNullType)(field.type) &&
        (0, _definition.isInputObjectType)(field.type.ofType)
      ) {
        const fieldType = field.type.ofType;
        const cycleIndex = fieldPathIndexByTypeName[fieldType.name];
        fieldPath.push(field);

        if (cycleIndex === undefined) {
          detectCycleRecursive(fieldType);
        } else {
          const cyclePath = fieldPath.slice(cycleIndex);
          const pathStr = cyclePath.map((fieldObj) => fieldObj.name).join('.');
          context.reportError(
            `Cannot reference Input Object "${fieldType.name}" within itself through a series of non-null fields: "${pathStr}".`,
            cyclePath.map((fieldObj) => fieldObj.astNode),
          );
        }

        fieldPath.pop();
      }
    }

    fieldPathIndexByTypeName[inputObj.name] = undefined;
  }
}

function getAllImplementsInterfaceNodes(type, iface) {
  const { astNode, extensionASTNodes } = type;
  const nodes =
    astNode != null ? [astNode, ...extensionASTNodes] : extensionASTNodes; // FIXME: https://github.com/graphql/graphql-js/issues/2203

  return nodes
    .flatMap((typeNode) => {
      var _typeNode$interfaces;

      return (
        /* c8 ignore next */
        (_typeNode$interfaces = typeNode.interfaces) !== null &&
          _typeNode$interfaces !== void 0
          ? _typeNode$interfaces
          : []
      );
    })
    .filter((ifaceNode) => ifaceNode.name.value === iface.name);
}

function getUnionMemberTypeNodes(union, typeName) {
  const { astNode, extensionASTNodes } = union;
  const nodes =
    astNode != null ? [astNode, ...extensionASTNodes] : extensionASTNodes; // FIXME: https://github.com/graphql/graphql-js/issues/2203

  return nodes
    .flatMap((unionNode) => {
      var _unionNode$types;

      return (
        /* c8 ignore next */
        (_unionNode$types = unionNode.types) !== null &&
          _unionNode$types !== void 0
          ? _unionNode$types
          : []
      );
    })
    .filter((typeNode) => typeNode.name.value === typeName);
}

function getDeprecatedDirectiveNode(definitionNode) {
  var _definitionNode$direc;

  return definitionNode === null || definitionNode === void 0
    ? void 0
    : (_definitionNode$direc = definitionNode.directives) === null ||
      _definitionNode$direc === void 0
    ? void 0
    : _definitionNode$direc.find(
        (node) =>
          node.name.value === _directives.GraphQLDeprecatedDirective.name,
      );
}
