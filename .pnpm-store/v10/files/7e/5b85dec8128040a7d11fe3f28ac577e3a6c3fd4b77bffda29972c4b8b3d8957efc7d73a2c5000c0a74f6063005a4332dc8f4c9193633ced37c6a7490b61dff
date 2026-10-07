/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict
 * @format
 */

// flowlint ambiguous-object-type:error

'use strict';

const Profiler = require('./GraphQLCompilerProfiler');

const orList = require('../util/orList');
const partitionArray = require('../util/partitionArray');

const {DEFAULT_HANDLE_KEY} = require('../util/DefaultHandleKey');
const {
  createCompilerError,
  createUserError,
  eachWithCombinedError,
} = require('./CompilerError');
const {isExecutableDefinitionAST} = require('./SchemaUtils');
const {getFieldDefinitionLegacy} = require('./getFieldDefinition');
const {parse: parseGraphQL, parseType, print, Source} = require('graphql');

import type {
  Argument,
  ArgumentValue,
  Condition,
  Directive,
  Field,
  Fragment,
  FragmentSpread,
  Handle,
  InlineFragment,
  LocalArgumentDefinition,
  Location,
  Root,
  Selection,
  Variable,
} from './IR';
import type {
  CompositeTypeID,
  Argument as FieldArgument,
  FieldID,
  InputTypeID,
  Schema,
  TypeID,
} from './Schema';
import type {GetFieldDefinitionFn} from './getFieldDefinition';
import type {
  ASTNode,
  ArgumentNode,
  BooleanValueNode,
  DefinitionNode,
  DirectiveLocationEnum,
  DirectiveNode,
  EnumValueNode,
  FieldNode,
  FloatValueNode,
  FragmentDefinitionNode,
  FragmentSpreadNode,
  InlineFragmentNode,
  IntValueNode,
  ListValueNode,
  Location as ASTLocation,
  ObjectValueNode,
  OperationDefinitionNode,
  SelectionSetNode,
  StringValueNode,
  TypeNode,
  ValueNode,
  VariableNode,
} from 'graphql';

type ASTDefinitionNode = FragmentDefinitionNode | OperationDefinitionNode;
type NonNullLiteralValueNode =
  | IntValueNode
  | FloatValueNode
  | StringValueNode
  | BooleanValueNode
  | EnumValueNode
  | ListValueNode
  | ObjectValueNode;

type VariableDefinitions = Map<string, VariableDefinition>;
type VariableDefinition = {|
  ast: ASTNode,
  name: string,
  defaultValue: mixed,
  type: InputTypeID,
  defined: boolean,
|};

type UnknownVariable = {|
  ast: VariableNode,
  type: ?TypeID,
|};

const ARGUMENT_DEFINITIONS = 'argumentDefinitions';
const ARGUMENTS = 'arguments';
const DEPRECATED_UNCHECKED_ARGUMENTS = 'uncheckedArguments_DEPRECATED';
const DIRECTIVE_WHITELIST: $ReadOnlySet<string> = new Set([
  ARGUMENT_DEFINITIONS,
  DEPRECATED_UNCHECKED_ARGUMENTS,
  ARGUMENTS,
]);

/**
 * @internal
 *
 * This directive is not intended for use by developers directly. To set a field
 * handle in product code use a compiler plugin.
 */
const CLIENT_FIELD = '__clientField';
const CLIENT_FIELD_HANDLE = 'handle';
const CLIENT_FIELD_KEY = 'key';
const CLIENT_FIELD_FILTERS = 'filters';

const INCLUDE = 'include';
const SKIP = 'skip';
const IF = 'if';

/**
 * Transforms GraphQL text into Relay Compiler's internal, strongly-typed
 * intermediate representation (IR).
 */
function parse(
  schema: Schema,
  text: string,
  filename?: string,
): $ReadOnlyArray<Root | Fragment> {
  const ast = parseGraphQL(new Source(text, filename));
  const parser = new RelayParser(schema.extend(ast), ast.definitions);
  return parser.transform();
}

/**
 * Transforms untyped GraphQL parse trees (ASTs) into Relay Compiler's
 * internal, strongly-typed intermediate representation (IR).
 */
function transform(
  schema: Schema,
  definitions: $ReadOnlyArray<DefinitionNode>,
): $ReadOnlyArray<Root | Fragment> {
  return Profiler.run('RelayParser.transform', () => {
    const parser = new RelayParser(schema, definitions);
    return parser.transform();
  });
}

/**
 * @private
 */
class RelayParser {
  _definitions: Map<string, ASTDefinitionNode>;
  _getFieldDefinition: GetFieldDefinitionFn;
  +_schema: Schema;

  constructor(schema: Schema, definitions: $ReadOnlyArray<DefinitionNode>) {
    this._definitions = new Map();
    // leaving this configurable to make it easy to experiment w changing later
    this._getFieldDefinition = getFieldDefinitionLegacy;
    this._schema = schema;

    const duplicated = new Set();
    definitions.forEach(def => {
      if (isExecutableDefinitionAST(def)) {
        const name = getName(def);
        if (this._definitions.has(name)) {
          duplicated.add(name);
          return;
        }
        this._definitions.set(name, def);
      }
    });
    if (duplicated.size) {
      throw createUserError(
        'RelayParser: Encountered duplicate definitions for one or more ' +
          'documents: each document must have a unique name. Duplicated documents:\n' +
          Array.from(duplicated, name => `- ${name}`).join('\n'),
      );
    }
  }

  transform(): $ReadOnlyArray<Root | Fragment> {
    const nodes = [];
    const entries = new Map();
    // Construct a mapping of name to definition ast + variable definitions.
    // This allows the subsequent AST -> IR tranformation to reference the
    // defined arguments of referenced fragments.
    eachWithCombinedError(this._definitions, ([name, definition]) => {
      const variableDefinitions = this._buildArgumentDefinitions(definition);
      entries.set(name, {definition, variableDefinitions});
    });
    // Convert the ASTs to IR.
    eachWithCombinedError(
      entries.values(),
      ({definition, variableDefinitions}) => {
        const node = parseDefinition(
          this._schema,
          this._getFieldDefinition,
          entries,
          definition,
          variableDefinitions,
        );
        nodes.push(node);
      },
    );
    return nodes;
  }

  /**
   * Constructs a mapping of variable names to definitions for the given
   * operation/fragment definition.
   */
  _buildArgumentDefinitions(
    definition: ASTDefinitionNode,
  ): VariableDefinitions {
    switch (definition.kind) {
      case 'OperationDefinition':
        return this._buildOperationArgumentDefinitions(definition);
      case 'FragmentDefinition':
        return this._buildFragmentArgumentDefinitions(definition);
      default:
        (definition: empty);
        throw createCompilerError(`Unexpected ast kind '${definition.kind}'.`, [
          definition,
        ]);
    }
  }

  /**
   * Constructs a mapping of variable names to definitions using the
   * variables defined in `@argumentDefinitions`.
   */
  _buildFragmentArgumentDefinitions(
    fragment: FragmentDefinitionNode,
  ): VariableDefinitions {
    const variableDirectives = (fragment.directives || []).filter(
      directive => getName(directive) === ARGUMENT_DEFINITIONS,
    );
    if (!variableDirectives.length) {
      return new Map();
    }
    if (variableDirectives.length !== 1) {
      throw createUserError(
        `Directive @${ARGUMENT_DEFINITIONS} may be defined at most once per ` +
          'fragment.',
        null,
        variableDirectives,
      );
    }
    const variableDirective = variableDirectives[0];
    // work, below accesses all report arguments could still be null/undefined.
    const args = variableDirective.arguments;
    if (variableDirective == null || !Array.isArray(args)) {
      return new Map();
    }
    if (!args.length) {
      throw createUserError(
        `Directive @${ARGUMENT_DEFINITIONS} requires arguments: remove the ` +
          'directive to skip defining local variables for this fragment.',
        null,
        [variableDirective],
      );
    }
    const variables = new Map();
    args.forEach(arg => {
      const argName = getName(arg);
      const previousVariable = variables.get(argName);
      if (previousVariable != null) {
        throw createUserError(
          `Duplicate definition for variable '\$${argName}'.`,
          null,
          [previousVariable.ast, arg],
        );
      }
      if (arg.value.kind !== 'ObjectValue') {
        throw createUserError(
          `Expected definition for variable '\$${argName}' to be an object ` +
            "with the shape: '{type: string, defaultValue?: mixed}.",
          null,
          [arg.value],
        );
      }
      let defaultValueNode;
      let typeString;
      arg.value.fields.forEach(field => {
        const name = getName(field);
        if (name === 'type') {
          typeString = transformLiteralValue(field.value, field);
        } else if (name === 'defaultValue') {
          defaultValueNode = field.value;
        } else {
          throw createUserError(
            `Expected definition for variable '\$${argName}' to be an object ` +
              "with the shape: '{type: string, defaultValue?: mixed}.",
            null,
            [arg.value],
          );
        }
      });
      if (typeof typeString !== 'string') {
        throw createUserError(
          `Expected definition for variable '\$${argName}' to be an object ` +
            "with the shape: '{type: string, defaultValue?: mixed}.",
          null,
          [arg.value],
        );
      }
      const typeFromAST = this._schema.getTypeFromAST(parseType(typeString));
      if (typeFromAST == null) {
        throw createUserError(
          // $FlowFixMe[incompatible-type]
          `Unknown type "${typeString}" referenced in the argument definitions.`,
          null,
          [arg],
        );
      }
      const type = this._schema.asInputType(typeFromAST);
      if (type == null) {
        throw createUserError(
          // $FlowFixMe[incompatible-type]
          `Expected type "${typeString}" to be an input type in the "${arg.name.value}" argument definitions.`,
          null,
          [arg.value],
        );
      }
      const defaultValue =
        defaultValueNode != null
          ? transformValue(
              this._schema,
              defaultValueNode,
              type,
              variableAst => {
                throw createUserError(
                  "Expected 'defaultValue' to be a literal, got a variable.",
                  null,
                  [variableAst],
                );
              },
            )
          : null;
      if (defaultValue != null && defaultValue.kind !== 'Literal') {
        throw createUserError(
          "Expected 'defaultValue' to be a literal, got a variable.",
          [defaultValue.loc],
        );
      }
      variables.set(argName, {
        ast: arg,
        defaultValue: defaultValue?.value ?? null,
        defined: true,
        name: argName,
        type,
      });
    });
    return variables;
  }

  /**
   * Constructs a mapping of variable names to definitions using the
   * standard GraphQL syntax for variable definitions.
   */
  _buildOperationArgumentDefinitions(
    operation: OperationDefinitionNode,
  ): VariableDefinitions {
    const schema = this._schema;
    const variableDefinitions = new Map();
    (operation.variableDefinitions || []).forEach(def => {
      const name = getName(def.variable);
      const typeFromAST = schema.getTypeFromAST(def.type);
      if (typeFromAST == null) {
        throw createUserError(
          `Unknown type: '${getTypeName(def.type)}'.`,
          null,
          [def.type],
        );
      }

      const type = schema.asInputType(typeFromAST);
      if (type == null) {
        throw createUserError(
          `Expected type "${getTypeName(def.type)}" to be an input type.`,
          null,
          [def.type],
        );
      }

      const defaultValue = def.defaultValue
        ? transformLiteralValue(def.defaultValue, def)
        : null;
      const previousDefinition = variableDefinitions.get(name);
      if (previousDefinition != null) {
        throw createUserError(
          `Duplicate definition for variable '\$${name}'.`,
          null,
          [previousDefinition.ast, def],
        );
      }
      variableDefinitions.set(name, {
        ast: def,
        defaultValue,
        defined: true,
        name,
        type,
      });
    });
    return variableDefinitions;
  }
}

/**
 * @private
 */
function parseDefinition(
  schema: Schema,
  getFieldDefinition: GetFieldDefinitionFn,
  entries: Map<
    string,
    {|definition: ASTDefinitionNode, variableDefinitions: VariableDefinitions|},
  >,
  definition: ASTDefinitionNode,
  variableDefinitions: VariableDefinitions,
): Fragment | Root {
  const parser = new GraphQLDefinitionParser(
    schema,
    getFieldDefinition,
    entries,
    definition,
    variableDefinitions,
  );
  return parser.transform();
}

/**
 * @private
 */
class GraphQLDefinitionParser {
  _definition: ASTDefinitionNode;
  _entries: Map<
    string,
    {|
      definition: ASTDefinitionNode,
      variableDefinitions: VariableDefinitions,
    |},
  >;
  _getFieldDefinition: GetFieldDefinitionFn;
  _schema: Schema;
  _variableDefinitions: VariableDefinitions;
  _unknownVariables: Map<string, UnknownVariable>;
  _directiveLocations: ?Map<string, $ReadOnlyArray<DirectiveLocationEnum>>;

  constructor(
    schema: Schema,
    getFieldDefinition: GetFieldDefinitionFn,
    entries: Map<
      string,
      {|
        definition: ASTDefinitionNode,
        variableDefinitions: VariableDefinitions,
      |},
    >,
    definition: ASTDefinitionNode,
    variableDefinitions: VariableDefinitions,
  ): void {
    this._definition = definition;
    this._entries = entries;
    this._getFieldDefinition = getFieldDefinition;
    this._schema = schema;
    this._variableDefinitions = variableDefinitions;
    this._unknownVariables = new Map();
  }

  transform(): Root | Fragment {
    const definition = this._definition;
    switch (definition.kind) {
      case 'OperationDefinition':
        return this._transformOperation(definition);
      case 'FragmentDefinition':
        return this._transformFragment(definition);
      default:
        (definition: empty);
        throw createCompilerError(
          `Unsupported definition type ${definition.kind}`,
          [definition],
        );
    }
  }

  _recordAndVerifyVariableReference(
    variable: VariableNode,
    name: string,
    usedAsType: ?TypeID,
  ): void {
    // Special case for variables used in @arguments where we currently
    // aren't guaranteed to be able to resolve the type.
    if (usedAsType == null) {
      if (
        !this._variableDefinitions.has(name) &&
        !this._unknownVariables.has(name)
      ) {
        this._unknownVariables.set(name, {
          ast: variable,
          type: null,
        });
      }
      return;
    }
    const variableDefinition = this._variableDefinitions.get(name);
    if (variableDefinition != null) {
      // If the variable is defined, all usages must be compatible
      let effectiveType = variableDefinition.type;
      if (variableDefinition.defaultValue != null) {
        // If a default value is defined then it is guaranteed to be used
        // at runtime such that the effective type of the variable is non-null
        effectiveType = this._schema.getNonNullType(
          this._schema.getNullableType(effectiveType),
        );
      }

      if (!this._schema.isTypeSubTypeOf(effectiveType, usedAsType)) {
        throw createUserError(
          `Variable '\$${name}' was defined as type '${String(
            variableDefinition.type,
          )}' but used in a location expecting the type '${String(
            usedAsType,
          )}'`,
          null,
          [variableDefinition.ast, variable],
        );
      }
    } else {
      const previous = this._unknownVariables.get(name);

      if (!previous || !previous.type) {
        // No previous usage, current type is strongest
        this._unknownVariables.set(name, {
          ast: variable,
          type: usedAsType,
        });
      } else {
        const {ast: previousVariable, type: previousType} = previous;
        if (
          !(
            this._schema.isTypeSubTypeOf(usedAsType, previousType) ||
            this._schema.isTypeSubTypeOf(previousType, usedAsType)
          )
        ) {
          throw createUserError(
            `Variable '\$${name}' was used in locations expecting the conflicting types '${String(
              previousType,
            )}' and '${String(usedAsType)}'.`,
            null,
            [previousVariable, variable],
          );
        }

        // If the new used type has stronger requirements, use that type as reference,
        // otherwise keep referencing the previous type
        if (this._schema.isTypeSubTypeOf(usedAsType, previousType)) {
          this._unknownVariables.set(name, {
            ast: variable,
            type: usedAsType,
          });
        }
      }
    }
  }

  _getDirectiveLocations(): Map<string, $ReadOnlyArray<DirectiveLocationEnum>> {
    if (!this._directiveLocations) {
      const directiveDefs = this._schema.getDirectives();
      this._directiveLocations = new Map();
      for (const def of directiveDefs) {
        this._directiveLocations.set(def.name, def.locations);
      }
    }
    return this._directiveLocations;
  }

  _validateDirectivesLocation(
    directives: ?$ReadOnlyArray<DirectiveNode>,
    allowedLocaction: DirectiveLocationEnum,
  ): void {
    if (!directives || !directives.length) {
      return;
    }
    const directiveLocs = this._getDirectiveLocations();
    const mismatches = directives.filter(directive => {
      const name = getName(directive);
      if (DIRECTIVE_WHITELIST.has(name)) {
        return false;
      }
      const locs = directiveLocs.get(name);
      if (locs == null) {
        throw createUserError(`Unknown directive '${name}'.`, null, [
          directive,
        ]);
      }
      return !locs.some(loc => loc === allowedLocaction);
    });
    if (mismatches.length) {
      const invalidDirectives = mismatches
        .map(directive => '@' + getName(directive))
        .join(', ');
      throw createUserError(
        `Invalid directives ${invalidDirectives} found on ${allowedLocaction}.`,
        null,
        mismatches,
      );
    }
  }

  _transformFragment(fragment: FragmentDefinitionNode): Fragment {
    const directives = this._transformDirectives(
      (fragment.directives || []).filter(
        directive => getName(directive) !== ARGUMENT_DEFINITIONS,
      ),
      'FRAGMENT_DEFINITION',
    );

    const typeFromAST = this._schema.getTypeFromAST(fragment.typeCondition);
    if (typeFromAST == null) {
      throw createUserError(
        `Fragment "${fragment.name.value}" cannot condition on unknown ` +
          `type "${String(fragment.typeCondition.name.value)}".`,
        null,
        [fragment.typeCondition],
      );
    }

    const type = this._schema.asCompositeType(typeFromAST);
    if (type == null) {
      throw createUserError(
        `Fragment "${fragment.name.value}" cannot condition on non composite ` +
          `type "${String(type)}".`,
        null,
        [fragment.typeCondition],
      );
    }

    const selections = this._transformSelections(
      fragment.selectionSet,
      type,
      fragment.typeCondition,
    );
    const argumentDefinitions = [
      ...buildArgumentDefinitions(this._variableDefinitions),
    ];
    for (const [name, variableReference] of this._unknownVariables) {
      argumentDefinitions.push({
        kind: 'RootArgumentDefinition',
        loc: buildLocation(variableReference.ast.loc),
        name,
        type: variableReference.type,
      });
    }
    return {
      kind: 'Fragment',
      directives,
      loc: buildLocation(fragment.loc),
      metadata: null,
      name: getName(fragment),
      selections,
      type,
      // $FlowFixMe[incompatible-return] - could be null
      argumentDefinitions,
    };
  }

  _getLocationFromOperation(
    definition: OperationDefinitionNode,
  ): DirectiveLocationEnum {
    switch (definition.operation) {
      case 'query':
        return 'QUERY';
      case 'mutation':
        return 'MUTATION';
      case 'subscription':
        return 'SUBSCRIPTION';
      default:
        (definition.operation: empty);
        throw createCompilerError(
          `Unknown operation type '${definition.operation}'.`,
          null,
          [definition],
        );
    }
  }

  _transformOperation(definition: OperationDefinitionNode): Root {
    const name = getName(definition);
    const directives = this._transformDirectives(
      definition.directives || [],
      this._getLocationFromOperation(definition),
    );
    let type: TypeID;
    let operation;
    const schema = this._schema;
    switch (definition.operation) {
      case 'query':
        operation = 'query';
        type = schema.expectQueryType();
        break;
      case 'mutation':
        operation = 'mutation';
        type = schema.expectMutationType();
        break;
      case 'subscription':
        operation = 'subscription';
        type = schema.expectSubscriptionType();
        break;
      default:
        (definition.operation: empty);
        throw createCompilerError(
          `Unknown operation type '${definition.operation}'.`,
          null,
          [definition],
        );
    }
    if (!definition.selectionSet) {
      throw createUserError('Expected operation to have selections.', null, [
        definition,
      ]);
    }
    const selections = this._transformSelections(definition.selectionSet, type);
    const argumentDefinitions = buildArgumentDefinitions(
      this._variableDefinitions,
    );
    if (this._unknownVariables.size !== 0) {
      throw createUserError(
        `Query '${name}' references undefined variables.`,
        null,
        Array.from(
          this._unknownVariables.values(),
          variableReference => variableReference.ast,
        ),
      );
    }
    return {
      kind: 'Root',
      operation,
      loc: buildLocation(definition.loc),
      metadata: null,
      name,
      argumentDefinitions,
      directives,
      selections,
      // $FlowFixMe[incompatible-return]
      type,
    };
  }

  _transformSelections(
    selectionSet: SelectionSetNode,
    parentType: TypeID,
    parentTypeAST?: TypeNode,
  ): $ReadOnlyArray<Selection> {
    return selectionSet.selections.map(selection => {
      let node;
      if (selection.kind === 'Field') {
        node = this._transformField(selection, parentType);
      } else if (selection.kind === 'FragmentSpread') {
        node = this._transformFragmentSpread(
          selection,
          parentType,
          parentTypeAST,
        );
      } else if (selection.kind === 'InlineFragment') {
        node = this._transformInlineFragment(
          selection,
          parentType,
          parentTypeAST,
        );
      } else {
        (selection.kind: empty);
        throw createCompilerError(`Unknown ast kind '${selection.kind}'.`, [
          selection,
        ]);
      }
      const [conditions, directives] = this._splitConditions(node.directives);
      const conditionalNodes = applyConditions(
        conditions,
        // $FlowFixMe[incompatible-call]
        [{...node, directives}],
      );
      if (conditionalNodes.length !== 1) {
        throw createCompilerError(
          'Expected exactly one condition node.',
          null,
          selection.directives,
        );
      }
      return conditionalNodes[0];
    });
  }

  _transformInlineFragment(
    fragment: InlineFragmentNode,
    parentType: TypeID,
    parentTypeAST: ?TypeNode,
  ): InlineFragment {
    const schema = this._schema;
    let typeCondition =
      fragment.typeCondition != null
        ? schema.getTypeFromAST(fragment.typeCondition)
        : parentType;

    if (typeCondition == null) {
      throw createUserError(
        'Inline fragments can only be on object, interface or union types' +
          `, got unknown type '${getTypeName(fragment.typeCondition)}'.`,
        null,
        [fragment.typeCondition ?? fragment],
      );
    }
    const typeConditionName = schema.getTypeString(typeCondition);
    typeCondition = schema.asCompositeType(typeCondition);
    if (typeCondition == null) {
      throw createUserError(
        'Inline fragments can only be on object, interface or union types' +
          `, got '${typeConditionName}'.`,
        null,
        [fragment.typeCondition ?? fragment],
      );
    }
    const rawParentType = this._schema.assertCompositeType(
      this._schema.getRawType(parentType),
    );

    checkFragmentSpreadTypeCompatibility(
      this._schema,
      typeCondition,
      rawParentType,
      null,
      fragment.typeCondition,
      parentTypeAST,
    );

    const directives = this._transformDirectives(
      fragment.directives || [],
      'INLINE_FRAGMENT',
    );
    const selections = this._transformSelections(
      fragment.selectionSet,
      typeCondition,
      fragment.typeCondition,
    );
    return {
      kind: 'InlineFragment',
      directives,
      loc: buildLocation(fragment.loc),
      metadata: null,
      selections,
      typeCondition,
    };
  }

  _transformFragmentSpread(
    fragmentSpread: FragmentSpreadNode,
    parentType: TypeID,
    parentTypeAST: ?TypeNode,
  ): FragmentSpread {
    const fragmentName = getName(fragmentSpread);
    const [argumentDirectives, otherDirectives] = partitionArray(
      fragmentSpread.directives || [],
      directive => {
        const name = getName(directive);
        return name === ARGUMENTS || name === DEPRECATED_UNCHECKED_ARGUMENTS;
      },
    );
    if (argumentDirectives.length > 1) {
      throw createUserError(
        `Directive @${ARGUMENTS} may be used at most once per a fragment spread.`,
        null,
        argumentDirectives,
      );
    }
    const fragmentDefinition = this._entries.get(fragmentName);
    if (fragmentDefinition == null) {
      throw createUserError(`Unknown fragment '${fragmentName}'.`, null, [
        fragmentSpread.name,
      ]);
    }

    const fragmentTypeNode = getFragmentType(fragmentDefinition.definition);
    const fragmentType = this._schema.assertCompositeType(
      this._schema.expectTypeFromAST(fragmentTypeNode),
    );
    const rawParentType = this._schema.assertCompositeType(
      this._schema.getRawType(parentType),
    );

    checkFragmentSpreadTypeCompatibility(
      this._schema,
      fragmentType,
      rawParentType,
      fragmentSpread.name.value,
      fragmentSpread,
      parentTypeAST,
    );

    const fragmentArgumentDefinitions = fragmentDefinition.variableDefinitions;
    const argumentsDirective = argumentDirectives[0];
    let args;
    if (argumentsDirective != null) {
      const isDeprecatedUncheckedArguments =
        getName(argumentsDirective) === DEPRECATED_UNCHECKED_ARGUMENTS;
      let hasInvalidArgument = false;
      args = (argumentsDirective.arguments || []).map(arg => {
        const argName = getName(arg);
        const argValue = arg.value;
        const argumentDefinition = fragmentArgumentDefinitions.get(argName);
        const argumentType = argumentDefinition?.type ?? null;

        if (argValue.kind === 'Variable') {
          if (argumentDefinition == null && !isDeprecatedUncheckedArguments) {
            throw createUserError(
              `Variable @${ARGUMENTS} values are only supported when the ` +
                `argument is defined with @${ARGUMENT_DEFINITIONS}. Check ` +
                `the definition of fragment '${fragmentName}'.`,
              null,
              [arg.value, fragmentDefinition.definition],
            );
          }
          hasInvalidArgument = hasInvalidArgument || argumentDefinition == null;
          // TODO: check the type of the variable and use the type
          return {
            kind: 'Argument',
            loc: buildLocation(arg.loc),
            name: argName,
            value: this._transformVariable(argValue, null),
            type: null,
          };
        } else {
          if (argumentType == null) {
            throw createUserError(
              `Literal @${ARGUMENTS} values are only supported when the ` +
                `argument is defined with @${ARGUMENT_DEFINITIONS}. Check ` +
                `the definition of fragment '${fragmentName}'.`,
              null,
              [arg.value, fragmentDefinition.definition],
            );
          }
          const value = this._transformValue(argValue, argumentType);
          return {
            kind: 'Argument',
            loc: buildLocation(arg.loc),
            name: argName,
            value,
            type: argumentType,
          };
        }
      });
      if (isDeprecatedUncheckedArguments && !hasInvalidArgument) {
        throw createUserError(
          `Invalid use of @${DEPRECATED_UNCHECKED_ARGUMENTS}: all arguments ` +
            `are defined, use @${ARGUMENTS} instead.`,
          null,
          [argumentsDirective],
        );
      }
    }
    const directives = this._transformDirectives(
      otherDirectives,
      'FRAGMENT_SPREAD',
    );
    return {
      kind: 'FragmentSpread',
      args: args || [],
      metadata: null,
      loc: buildLocation(fragmentSpread.loc),
      name: fragmentName,
      directives,
    };
  }

  _transformField(field: FieldNode, parentType: TypeID): Field {
    const schema = this._schema;
    const name = getName(field);
    const fieldDef = this._getFieldDefinition(schema, parentType, name, field);
    if (fieldDef == null) {
      throw createUserError(
        `Unknown field '${name}' on type '${schema.getTypeString(
          parentType,
        )}'.`,
        null,
        [field],
      );
    }
    const alias = field.alias?.value ?? name;
    const args = this._transformArguments(
      field.arguments || [],
      schema.getFieldArgs(fieldDef),
      fieldDef,
    );
    const [otherDirectives, clientFieldDirectives] = partitionArray(
      field.directives || [],
      directive => getName(directive) !== CLIENT_FIELD,
    );
    const directives = this._transformDirectives(otherDirectives, 'FIELD');
    const type = schema.getFieldType(fieldDef);

    const handles = this._transformHandle(name, args, clientFieldDirectives);
    if (schema.isLeafType(schema.getRawType(type))) {
      if (
        field.selectionSet &&
        field.selectionSet.selections &&
        field.selectionSet.selections.length
      ) {
        throw createUserError(
          `Expected no selections for scalar field '${name}'.`,
          null,
          [field],
        );
      }
      return {
        kind: 'ScalarField',
        alias,
        args,
        directives,
        handles,
        loc: buildLocation(field.loc),
        metadata: null,
        name,
        type: schema.assertScalarFieldType(type),
      };
    } else {
      const selections = field.selectionSet
        ? this._transformSelections(field.selectionSet, type)
        : null;
      if (selections == null || selections.length === 0) {
        throw createUserError(
          `Expected at least one selection for non-scalar field '${name}' on type '${schema.getTypeString(
            type,
          )}'.`,
          null,
          [field],
        );
      }
      return {
        kind: 'LinkedField',
        alias,
        args,
        connection: false,
        directives,
        handles,
        loc: buildLocation(field.loc),
        metadata: null,
        name,
        selections,
        type: schema.assertLinkedFieldType(type),
      };
    }
  }

  _transformHandle(
    fieldName: string,
    fieldArgs: $ReadOnlyArray<Argument>,
    clientFieldDirectives: $ReadOnlyArray<DirectiveNode>,
  ): ?$ReadOnlyArray<Handle> {
    let handles: ?Array<Handle> = null;
    clientFieldDirectives.forEach(clientFieldDirective => {
      const handleArgument = (clientFieldDirective.arguments || []).find(
        arg => getName(arg) === CLIENT_FIELD_HANDLE,
      );
      if (handleArgument) {
        let name = null;
        let key = DEFAULT_HANDLE_KEY;
        let filters = null;
        const maybeHandle = transformLiteralValue(
          handleArgument.value,
          handleArgument,
        );
        if (typeof maybeHandle !== 'string') {
          throw createUserError(
            `Expected a string literal argument for the @${CLIENT_FIELD} directive.`,
            null,
            [handleArgument.value],
          );
        }
        name = maybeHandle;

        const keyArgument = (clientFieldDirective.arguments || []).find(
          arg => getName(arg) === CLIENT_FIELD_KEY,
        );
        if (keyArgument) {
          const maybeKey = transformLiteralValue(
            keyArgument.value,
            keyArgument,
          );
          if (typeof maybeKey !== 'string') {
            throw createUserError(
              `Expected a string literal argument for the @${CLIENT_FIELD} directive.`,
              null,
              [keyArgument.value],
            );
          }
          key = maybeKey;
        }
        const filtersArgument = (clientFieldDirective.arguments || []).find(
          arg => getName(arg) === CLIENT_FIELD_FILTERS,
        );
        if (filtersArgument) {
          const maybeFilters = transformLiteralValue(
            filtersArgument.value,
            filtersArgument,
          );
          if (
            !(
              Array.isArray(maybeFilters) &&
              maybeFilters.every(
                filter =>
                  typeof filter === 'string' &&
                  fieldArgs.some(fieldArg => fieldArg.name === filter),
              )
            )
          ) {
            throw createUserError(
              `Expected an array of argument names on field '${fieldName}'.`,
              null,
              [filtersArgument.value],
            );
          }
          // $FlowFixMe[incompatible-cast]
          filters = (maybeFilters: Array<string>);
        }
        const dynamicKeyArgument = (clientFieldDirective.arguments || []).find(
          arg => getName(arg) === 'dynamicKey_UNSTABLE',
        );
        if (dynamicKeyArgument != null) {
          throw createUserError(
            'Dynamic keys are only supported with @connection.',
            null,
            [dynamicKeyArgument.value],
          );
        }
        handles = handles || [];
        handles.push({name, key, filters, dynamicKey: null});
      }
    });
    return handles;
  }

  _transformDirectives(
    directives: $ReadOnlyArray<DirectiveNode>,
    location: DirectiveLocationEnum,
  ): $ReadOnlyArray<Directive> {
    this._validateDirectivesLocation(directives, location);
    return directives.map(directive => {
      const name = getName(directive);
      const directiveDef = this._schema.getDirective(name);
      if (directiveDef == null) {
        throw createUserError(`Unknown directive '${name}'.`, null, [
          directive,
        ]);
      }
      const args = this._transformArguments(
        directive.arguments || [],
        directiveDef.args.map(item => {
          return {
            name: item.name,
            type: item.type,
            defaultValue: item.defaultValue,
          };
        }),
        null,
        name,
      );
      return {
        kind: 'Directive',
        loc: buildLocation(directive.loc),
        name,
        args,
      };
    });
  }

  _transformArguments(
    args: $ReadOnlyArray<ArgumentNode>,
    argumentDefinitions: $ReadOnlyArray<FieldArgument>,
    field?: ?FieldID,
    directiveName?: ?string,
  ): $ReadOnlyArray<Argument> {
    return args.map(arg => {
      const argName = getName(arg);
      const argDef = argumentDefinitions.find(def => def.name === argName);
      if (argDef == null) {
        const message =
          `Unknown argument '${argName}'` +
          (field
            ? ` on field '${this._schema.getFieldName(field)}'` +
              ` of type '${this._schema.getTypeString(
                this._schema.getFieldParentType(field),
              )}'.`
            : directiveName != null
            ? ` on directive '@${directiveName}'.`
            : '.');

        throw createUserError(message, null, [arg]);
      }

      const value = this._transformValue(arg.value, argDef.type);
      return {
        kind: 'Argument',
        loc: buildLocation(arg.loc),
        name: argName,
        value,
        type: argDef.type,
      };
    });
  }

  _splitConditions(
    mixedDirectives: $ReadOnlyArray<Directive>,
  ): [$ReadOnlyArray<Condition>, $ReadOnlyArray<Directive>] {
    const [conditionDirectives, otherDirectives] = partitionArray(
      mixedDirectives,
      directive => directive.name === INCLUDE || directive.name === SKIP,
    );
    const conditions = conditionDirectives.map(directive => {
      const passingValue = directive.name === INCLUDE;
      const arg = directive.args[0];
      if (arg == null || arg.name !== IF) {
        throw createUserError(
          `Expected an 'if' argument to @${directive.name}.`,
          [directive.loc],
        );
      }
      if (!(arg.value.kind === 'Variable' || arg.value.kind === 'Literal')) {
        throw createUserError(
          `Expected the 'if' argument to @${directive.name} to be a variable or literal.`,
          [directive.loc],
        );
      }
      return {
        kind: 'Condition',
        condition: arg.value,
        loc: directive.loc,
        passingValue,
        selections: [],
      };
    });
    const sortedConditions = conditions.sort((a, b) => {
      if (a.condition.kind === 'Variable' && b.condition.kind === 'Variable') {
        return a.condition.variableName < b.condition.variableName
          ? -1
          : a.condition.variableName > b.condition.variableName
          ? 1
          : 0;
      } else {
        // sort literals earlier, variables later
        return a.condition.kind === 'Variable'
          ? 1
          : b.condition.kind === 'Variable'
          ? -1
          : 0;
      }
    });
    return [sortedConditions, otherDirectives];
  }

  _transformVariable(ast: VariableNode, usedAsType: ?InputTypeID): Variable {
    const variableName = getName(ast);
    this._recordAndVerifyVariableReference(ast, variableName, usedAsType);
    return {
      kind: 'Variable',
      loc: buildLocation(ast.loc),
      variableName,
      type: usedAsType,
    };
  }

  _transformValue(ast: ValueNode, type: InputTypeID): ArgumentValue {
    return transformValue(
      this._schema,
      ast,
      type,
      (variableAst, variableType) =>
        this._transformVariable(variableAst, variableType),
    );
  }
}

/**
 * Transforms and validates argument values according to the expected
 * type.
 */
function transformValue(
  schema: Schema,
  ast: ValueNode,
  type: InputTypeID,
  transformVariable: (
    variableAst: VariableNode,
    variableType: InputTypeID,
  ) => ArgumentValue,
): ArgumentValue {
  if (ast.kind === 'Variable') {
    // Special case variables since there is no value to parse
    return transformVariable(ast, type);
  } else if (ast.kind === 'NullValue') {
    // Special case null literals since there is no value to parse
    if (schema.isNonNull(type)) {
      throw createUserError(
        `Expected a value matching type '${String(type)}'.`,
        null,
        [ast],
      );
    }
    return {
      kind: 'Literal',
      loc: buildLocation(ast.loc),
      value: null,
    };
  } else {
    return transformNonNullLiteral(schema, ast, type, transformVariable);
  }
}

/**
 * Transforms and validates non-null literal (non-variable) values
 * according to the expected type.
 */
function transformNonNullLiteral(
  schema: Schema,
  ast: NonNullLiteralValueNode,
  type: InputTypeID,
  transformVariable: (
    variableAst: VariableNode,
    variableType: InputTypeID,
  ) => ArgumentValue,
): ArgumentValue {
  // Transform the value based on the type without a non-null wrapper.
  // Note that error messages should still use the original `type`
  // since that accurately describes to the user what the expected
  // type is (using nullableType would suggest that `null` is legal
  // even when it may not be, for example).
  const nullableType = schema.getNullableType(type);
  if (schema.isList(nullableType)) {
    if (ast.kind !== 'ListValue') {
      // Parse singular (non-list) values flowing into a list type
      // as scalars, ie without wrapping them in an array.
      if (!schema.isInputType(schema.getListItemType(nullableType))) {
        throw createUserError(
          `Expected type ${schema.getTypeString(
            nullableType,
          )} to be an input type.`,
          null,
          [ast],
        );
      }
      return transformValue(
        schema,
        ast,
        schema.assertInputType(schema.getListItemType(nullableType)),
        transformVariable,
      );
    }
    const itemType = schema.assertInputType(
      schema.getListItemType(nullableType),
    );
    const literalList = [];
    const items = [];
    let areAllItemsScalar = true;
    ast.values.forEach(item => {
      const itemValue = transformValue(
        schema,
        item,
        itemType,
        transformVariable,
      );
      if (itemValue.kind === 'Literal') {
        literalList.push(itemValue.value);
      }
      items.push(itemValue);
      areAllItemsScalar = areAllItemsScalar && itemValue.kind === 'Literal';
    });
    if (areAllItemsScalar) {
      return {
        kind: 'Literal',
        loc: buildLocation(ast.loc),
        value: literalList,
      };
    } else {
      return {
        kind: 'ListValue',
        loc: buildLocation(ast.loc),
        items,
      };
    }
  } else if (schema.isInputObject(nullableType)) {
    if (ast.kind !== 'ObjectValue') {
      throw createUserError(
        `Expected a value matching type '${schema.getTypeString(type)}'.`,
        null,
        [ast],
      );
    }
    const literalObject = {};
    const fields = [];
    let areAllFieldsScalar = true;
    const inputType = schema.assertInputObjectType(nullableType);
    const requiredFieldNames = new Set(
      schema
        .getFields(inputType)
        .filter(field => {
          return schema.isNonNull(schema.getFieldType(field));
        })
        .map(field => schema.getFieldName(field)),
    );

    const seenFields = new Map();
    ast.fields.forEach(field => {
      const fieldName = getName(field);
      const seenField = seenFields.get(fieldName);
      if (seenField) {
        throw createUserError(
          `Duplicated field name '${fieldName}' in the input object.`,
          null,
          [field, seenField],
        );
      }
      const fieldID = schema.getFieldByName(inputType, fieldName);
      if (!fieldID) {
        throw createUserError(
          `Unknown field '${fieldName}' on type '${schema.getTypeString(
            inputType,
          )}'.`,
          null,
          [field],
        );
      }
      const fieldConfig = schema.getFieldConfig(fieldID);
      const fieldType = schema.assertInputType(fieldConfig.type);
      const fieldValue = transformValue(
        schema,
        field.value,
        fieldType,
        transformVariable,
      );
      if (fieldValue.kind === 'Literal') {
        literalObject[field.name.value] = fieldValue.value;
      }
      fields.push({
        kind: 'ObjectFieldValue',
        loc: buildLocation(field.loc),
        name: fieldName,
        value: fieldValue,
      });
      seenFields.set(fieldName, field);
      requiredFieldNames.delete(fieldName);
      areAllFieldsScalar = areAllFieldsScalar && fieldValue.kind === 'Literal';
    });
    if (requiredFieldNames.size > 0) {
      const requiredFieldStr = Array.from(requiredFieldNames)
        .map(item => `'${item}'`)
        .join(', ');
      throw createUserError(
        `Missing non-optional field${
          requiredFieldNames.size > 1 ? 's:' : ''
        } ${requiredFieldStr} for input type '${schema.getTypeString(
          inputType,
        )}'.`,
        null,
        [ast],
      );
    }
    if (areAllFieldsScalar) {
      return {
        kind: 'Literal',
        loc: buildLocation(ast.loc),
        value: literalObject,
      };
    } else {
      return {
        kind: 'ObjectValue',
        loc: buildLocation(ast.loc),
        fields,
      };
    }
  } else if (schema.isId(nullableType)) {
    // GraphQLID's parseLiteral() always returns the string value. However
    // the int/string distinction may be important at runtime, so this
    // transform parses int/string literals into the corresponding JS types.
    if (ast.kind === 'IntValue') {
      return {
        kind: 'Literal',
        loc: buildLocation(ast.loc),
        value: parseInt(ast.value, 10),
      };
    } else if (ast.kind === 'StringValue') {
      return {
        kind: 'Literal',
        loc: buildLocation(ast.loc),
        value: ast.value,
      };
    } else {
      throw createUserError(
        `Invalid value, expected a value matching type '${schema.getTypeString(
          type,
        )}'.`,
        null,
        [ast],
      );
    }
  } else if (schema.isEnum(nullableType)) {
    const enumType = schema.assertEnumType(nullableType);
    const value = schema.parseLiteral(enumType, ast);
    if (value == null) {
      const suggestions = schema.getEnumValues(enumType);

      // parseLiteral() should return a non-null JavaScript value
      // if the ast value is valid for the type.
      throw createUserError(
        `Expected a value matching type '${schema.getTypeString(
          type,
        )}'. Possible values: ${orList(suggestions)}?'`,
        null,
        [ast],
      );
    }
    return {
      kind: 'Literal',
      loc: buildLocation(ast.loc),
      value,
    };
  } else if (schema.isScalar(nullableType)) {
    const value = schema.parseLiteral(
      schema.assertScalarType(nullableType),
      ast,
    );
    if (value == null) {
      // parseLiteral() should return a non-null JavaScript value
      // if the ast value is valid for the type.
      throw createUserError(
        `Expected a value matching type '${schema.getTypeString(type)}'.`,
        null,
        [ast],
      );
    }
    return {
      kind: 'Literal',
      loc: buildLocation(ast.loc),
      value,
    };
  } else {
    throw createCompilerError(
      `Unsupported type '${schema.getTypeString(
        type,
      )}' for input value, expected a GraphQLList, ` +
        'GraphQLInputObjectType, GraphQLEnumType, or GraphQLScalarType.',
      null,
      [ast],
    );
  }
}

/**
 * @private
 */
function transformLiteralValue(ast: ValueNode, context: ASTNode): mixed {
  switch (ast.kind) {
    case 'IntValue':
      return parseInt(ast.value, 10);
    case 'FloatValue':
      return parseFloat(ast.value);
    case 'StringValue':
      return ast.value;
    case 'BooleanValue':
      // Note: duplicated because Flow does not understand fall-through cases
      return ast.value;
    case 'EnumValue':
      // Note: duplicated because Flow does not understand fall-through cases
      return ast.value;
    case 'ListValue':
      return ast.values.map(item => transformLiteralValue(item, context));
    case 'NullValue':
      return null;
    case 'ObjectValue': {
      const objectValue = {};
      ast.fields.forEach(field => {
        const fieldName = getName(field);
        const value = transformLiteralValue(field.value, context);
        objectValue[fieldName] = value;
      });
      return objectValue;
    }
    case 'Variable':
      throw createUserError(
        'Unexpected variable where a literal (static) value is required.',
        null,
        [ast, context],
      );
    default:
      (ast.kind: empty);
      throw createCompilerError(`Unknown ast kind '${ast.kind}'.`, [ast]);
  }
}

/**
 * @private
 */
function buildArgumentDefinitions(
  variables: VariableDefinitions,
): $ReadOnlyArray<LocalArgumentDefinition> {
  return Array.from(variables.values(), ({ast, name, defaultValue, type}) => {
    return {
      kind: 'LocalArgumentDefinition',
      loc: buildLocation(ast.loc),
      name,
      type,
      defaultValue,
    };
  });
}

/**
 * @private
 */
function buildLocation(loc: ?ASTLocation): Location {
  if (loc == null) {
    return {kind: 'Unknown'};
  }
  return {
    kind: 'Source',
    start: loc.start,
    end: loc.end,
    source: loc.source,
  };
}

/**
 * @private
 */
function applyConditions(
  conditions: $ReadOnlyArray<Condition>,
  selections: $ReadOnlyArray<Selection>,
): $ReadOnlyArray<Condition | Selection> {
  let nextSelections = selections;
  conditions.forEach(condition => {
    nextSelections = [
      {
        ...condition,
        selections: nextSelections,
      },
    ];
  });
  return nextSelections;
}

/**
 * @private
 */
function getName(ast): string {
  const name = ast.name?.value;
  if (typeof name !== 'string') {
    throw createCompilerError("Expected ast node to have a 'name'.", null, [
      ast,
    ]);
  }
  return name;
}

function getTypeName(ast: ?TypeNode): string {
  return ast ? print(ast) : 'Undefined Type Name';
}

/**
 * @private
 */
function getFragmentType(ast: ASTDefinitionNode): TypeNode {
  if (ast.kind === 'FragmentDefinition') {
    return ast.typeCondition;
  }
  throw createCompilerError(
    'Expected ast node to be a FragmentDefinition node.',
    null,
    [ast],
  );
}

function checkFragmentSpreadTypeCompatibility(
  schema: Schema,
  fragmentType: CompositeTypeID,
  parentType: TypeID,
  fragmentName: ?string,
  fragmentTypeAST: ?TypeNode | ?FragmentSpreadNode,
  parentTypeAST: ?TypeNode,
) {
  if (
    !schema.doTypesOverlap(fragmentType, schema.assertCompositeType(parentType))
  ) {
    const nodes = [];
    if (parentTypeAST) {
      nodes.push(parentTypeAST);
    }
    if (fragmentTypeAST) {
      nodes.push(fragmentTypeAST);
    }

    const possibleConcreteTypes = schema.isAbstractType(parentType)
      ? Array.from(
          schema.getPossibleTypes(schema.assertAbstractType(parentType)),
        )
      : [];
    let suggestedTypesMessage = '';
    if (possibleConcreteTypes.length !== 0) {
      suggestedTypesMessage = ` Possible concrete types include ${possibleConcreteTypes
        .sort()
        .slice(0, 3)
        .map(type => `'${schema.getTypeString(type)}'`)
        .join(', ')}, etc.`;
    }

    throw createUserError(
      (fragmentName != null
        ? `Fragment '${fragmentName}' cannot be spread here as objects of `
        : 'Fragment cannot be spread here as objects of ') +
        `type '${schema.getTypeString(parentType)}' ` +
        `can never be of type '${schema.getTypeString(fragmentType)}'.` +
        suggestedTypesMessage,
      null,
      nodes,
    );
  }
}

module.exports = {parse, transform};
