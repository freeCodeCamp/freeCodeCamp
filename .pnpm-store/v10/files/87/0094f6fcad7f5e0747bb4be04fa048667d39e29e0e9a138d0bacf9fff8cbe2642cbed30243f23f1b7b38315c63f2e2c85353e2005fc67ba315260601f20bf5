/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

// flowlint ambiguous-object-type:error

'use strict';

const IRTransformer = require('../core/IRTransformer');

const partitionArray = require('../util/partitionArray');

const {createUserError, createCompilerError} = require('../core/CompilerError');
const {RelayFeatureFlags} = require('relay-runtime');

import type CompilerContext from '../core/CompilerContext';
import type {
  LinkedField,
  ScalarField,
  Field,
  Location,
  InlineFragment,
  Fragment,
  Root,
  Metadata,
} from '../core/IR';
import type {Schema} from '../core/Schema';
import type {RequiredFieldAction} from 'relay-runtime';

type Path = string;
type Alias = string;

type PathRequiredMap = Map<Path, Field>;

export type RequiredDirectiveMetadata = {|
  action: RequiredFieldAction,
  actionLoc: Location,
  directiveLoc: Location,
  path: string,
|};

type State = {|
  schema: Schema,
  documentName: string,
  path: Array<string>,
  pathRequiredMap: PathRequiredMap,
  currentNodeRequiredChildren: Map<Alias, Field>,
  requiredChildrenMap: Map<Path, Map<Alias, Field>>,
  parentAbstractInlineFragment: ?InlineFragment,
|};

const SCHEMA_EXTENSION = `
  enum RequiredFieldAction {
    NONE
    LOG
    THROW
  }
  directive @required(
    action: RequiredFieldAction!
  ) on FIELD
`;

/**
 * This transform rewrites ScalarField and LinkedField nodes with a @required
 * directive into fields with the directives stripped and sets the `required`
 * and `path` metadata values.
 */
function requiredFieldTransform(context: CompilerContext): CompilerContext {
  const schema = context.getSchema();
  return IRTransformer.transform(
    context,
    {
      LinkedField: visitLinkedField,
      ScalarField: vistitScalarField,
      InlineFragment: visitInlineFragment,
      Fragment: visitFragment,
      Root: visitRoot,
    },
    node => ({
      schema,
      documentName: node.name,
      path: [],
      pathRequiredMap: new Map(),
      currentNodeRequiredChildren: new Map(),
      requiredChildrenMap: new Map(),
      parentAbstractInlineFragment: null,
    }),
  );
}

function visitFragment(fragment: Fragment, state: State) {
  // $FlowFixMe[incompatible-use]
  return addChildrenCanBubbleMetadata(this.traverse(fragment, state), state);
}

function visitRoot(root: Root, state: State) {
  // $FlowFixMe[incompatible-use]
  return addChildrenCanBubbleMetadata(this.traverse(root, state), state);
}

function visitInlineFragment(fragment: InlineFragment, state: State) {
  // Ideally we could allow @required when the direct parent inline fragment was
  // on a concrete type, but we would need to solve this bug in our Flow type
  // generation first: T65695438
  const parentAbstractInlineFragment =
    state.parentAbstractInlineFragment ??
    getAbstractInlineFragment(fragment, state.schema);

  // $FlowFixMe[incompatible-use]
  return this.traverse(fragment, {...state, parentAbstractInlineFragment});
}

function getAbstractInlineFragment(
  fragment: InlineFragment,
  schema: Schema,
): ?InlineFragment {
  const {typeCondition} = fragment;
  if (schema.isAbstractType(typeCondition)) {
    return fragment;
  }
  return null;
}

// Convert action to a number so that we can numerically compare their severity.
function getActionSeverity(action: RequiredFieldAction): number {
  switch (action) {
    case 'NONE':
      return 0;
    case 'LOG':
      return 1;
    case 'THROW':
      return 2;
    default:
      (action: empty);
      throw createCompilerError(`Unhandled action type ${action}`);
  }
}

function visitLinkedField(field: LinkedField, state: State): LinkedField {
  const path = [...state.path, field.alias];
  const newState = {
    ...state,
    currentNodeRequiredChildren: new Map(),
    path,
    parentAbstractInlineFragment: null,
  };

  // $FlowFixMe[incompatible-use]
  let newField = this.traverse(field, newState);

  const pathName = path.join('.');
  assertCompatibleRequiredChildren(field, pathName, newState);
  newField = applyDirectives(newField, pathName, state.documentName);
  assertCompatibleNullability(newField, pathName, newState.pathRequiredMap);

  const directiveMetadata = getRequiredDirectiveMetadata(newField);
  if (directiveMetadata != null) {
    assertParentIsNotInvalidInlineFragmet(
      state.schema,
      directiveMetadata,
      state.parentAbstractInlineFragment,
    );
    state.currentNodeRequiredChildren.set(field.alias, newField);

    const severity = getActionSeverity(directiveMetadata.action);

    // Assert that all @required children have at least this severity.
    newState.currentNodeRequiredChildren.forEach(childField => {
      const childMetadata = getRequiredDirectiveMetadata(childField);
      if (childMetadata == null) {
        return;
      }
      if (getActionSeverity(childMetadata.action) < severity) {
        throw createUserError(
          `The @required field [1] may not have an \`action\` less severe than that of its @required parent [2]. [1] should probably be \`action: ${directiveMetadata.action}\`.`,
          [childMetadata.actionLoc, directiveMetadata.actionLoc],
        );
      }
    });
  }

  state.requiredChildrenMap.set(pathName, newState.currentNodeRequiredChildren);
  return addChildrenCanBubbleMetadata(newField, newState);
}

function vistitScalarField(field: ScalarField, state: State): ScalarField {
  const pathName = [...state.path, field.alias].join('.');
  const newField = applyDirectives(field, pathName, state.documentName);
  const directiveMetadata = getRequiredDirectiveMetadata(newField);
  if (directiveMetadata != null) {
    assertParentIsNotInvalidInlineFragmet(
      state.schema,
      directiveMetadata,
      state.parentAbstractInlineFragment,
    );
    state.currentNodeRequiredChildren.set(field.alias, newField);
  }
  assertCompatibleNullability(newField, pathName, state.pathRequiredMap);
  return newField;
}

function addChildrenCanBubbleMetadata<T: {|+metadata: Metadata|}>(
  node: T,
  state: State,
): T {
  for (const child of state.currentNodeRequiredChildren.values()) {
    const requiredMetadata = getRequiredDirectiveMetadata(child);
    if (requiredMetadata != null && requiredMetadata.action !== 'THROW') {
      const metadata = {...node.metadata, childrenCanBubbleNull: true};
      return {...node, metadata};
    }
  }

  return node;
}

function assertParentIsNotInvalidInlineFragmet(
  schema: Schema,
  directiveMetadata: RequiredDirectiveMetadata,
  parentAbstractInlineFragment: ?InlineFragment,
) {
  if (parentAbstractInlineFragment == null) {
    return;
  }
  const {typeCondition} = parentAbstractInlineFragment;
  if (schema.isUnion(typeCondition)) {
    throw createUserError(
      'The @required directive [1] may not be used anywhere within an inline fragment on a union type [2].',
      [directiveMetadata.directiveLoc, parentAbstractInlineFragment.loc],
    );
  } else if (schema.isInterface(typeCondition)) {
    throw createUserError(
      'The @required directive [1] may not be used anywhere within an inline fragment on an interface type [2].',
      [directiveMetadata.directiveLoc, parentAbstractInlineFragment.loc],
    );
  } else {
    throw createCompilerError('Unexpected abstract inline fragment type.', [
      parentAbstractInlineFragment.loc,
    ]);
  }
}

// Check that this field's nullability matches all other instances.
function assertCompatibleNullability(
  field: Field,
  pathName: string,
  pathRequiredMap: PathRequiredMap,
): void {
  const existingField = pathRequiredMap.get(pathName);
  if (existingField == null) {
    pathRequiredMap.set(pathName, field);
    return;
  }

  const requiredMetadata = getRequiredDirectiveMetadata(field);
  const existingRequiredMetadata = getRequiredDirectiveMetadata(existingField);

  if (requiredMetadata?.action === existingRequiredMetadata?.action) {
    return;
  }

  if (requiredMetadata == null) {
    throw createUserError(
      `The field "${field.alias}" is @required in [1] but not in [2].`,
      [existingField.loc, field.loc],
    );
  }
  if (existingRequiredMetadata == null) {
    throw createUserError(
      `The field "${field.alias}" is @required in [1] but not in [2].`,
      [field.loc, existingField.loc],
    );
  }
  throw createUserError(
    `The field "${field.alias}" has a different @required action in [1] than in [2].`,
    [requiredMetadata.actionLoc, existingRequiredMetadata.actionLoc],
  );
}

// Metadata is untyped, so we use this utility function to do the type coersion.
function getRequiredDirectiveMetadata(
  field: Field,
): ?RequiredDirectiveMetadata {
  return (field.metadata?.required: $FlowFixMe);
}

// Check that this field has the same required children as all other instances.
function assertCompatibleRequiredChildren(
  field: LinkedField,
  fieldPath: string,
  {currentNodeRequiredChildren, pathRequiredMap, requiredChildrenMap}: State,
) {
  const previouslyRequiredChildren = requiredChildrenMap.get(fieldPath);

  if (previouslyRequiredChildren == null) {
    return;
  }

  // Check if this field has a required child field which was previously omitted.
  for (const [path, childField] of currentNodeRequiredChildren) {
    if (!previouslyRequiredChildren.has(path)) {
      const otherParent = pathRequiredMap.get(fieldPath);
      if (otherParent == null) {
        throw createCompilerError(
          `Could not find other parent node at path "${fieldPath}".`,
          [childField.loc],
        );
      }
      throw createMissingRequiredFieldError(childField, otherParent);
    }
  }

  // Check if a previous reference to this field had a required child field which we are missing.
  for (const [path, childField] of previouslyRequiredChildren) {
    if (!currentNodeRequiredChildren.has(path)) {
      throw createMissingRequiredFieldError(childField, field);
    }
  }
}

function createMissingRequiredFieldError(
  requiredChild: Field,
  missingParent: Field,
) {
  const {alias} = requiredChild;
  return createUserError(
    `The field "${alias}" is marked as @required in [1] but is missing in [2].`,
    [requiredChild.loc, missingParent.loc],
  );
}

// TODO T74397896: Remove prefix gating once @required is rolled out more broadly.
function featureIsEnabled(documentName: string): boolean {
  const featureFlag = RelayFeatureFlags.ENABLE_REQUIRED_DIRECTIVES;
  if (typeof featureFlag === 'boolean') {
    return featureFlag;
  } else if (featureFlag === 'LIMITED') {
    return documentName.startsWith('RelayRequiredTest');
  } else if (typeof featureFlag === 'string') {
    return featureFlag
      .split('|')
      .some(prefix => documentName.startsWith(prefix));
  }
  return false;
}

// Strip and validate @required directives, and convert them to metadata.
function applyDirectives<T: ScalarField | LinkedField>(
  field: T,
  pathName: string,
  documentName: string,
): T {
  const [requiredDirectives, otherDirectives] = partitionArray(
    field.directives,
    directive => directive.name === 'required',
  );

  if (requiredDirectives.length === 0) {
    return field;
  }

  if (!featureIsEnabled(documentName)) {
    throw new createUserError(
      // Purposefully don't include details in this error message, since we
      // don't want folks adopting this feature until it's been tested more.
      'The @required directive is experimental and not yet supported for use in product code',
      requiredDirectives.map(x => x.loc),
    );
  }

  if (requiredDirectives.length > 1) {
    throw new createUserError(
      'Did not expect multiple @required directives.',
      requiredDirectives.map(x => x.loc),
    );
  }

  const requiredDirective = requiredDirectives[0];
  const arg = requiredDirective.args[0];
  // I would expect this check to be handled by the schema validation, but...
  if (arg == null) {
    throw createUserError(
      'The @required directive requires an `action` argument.',
      [requiredDirective.loc],
    );
  }
  if (arg.value.kind !== 'Literal') {
    throw createUserError(
      'Expected @required `action` argument to be a literal.',
      [arg.value.loc],
    );
  }

  return {
    ...field,
    directives: otherDirectives,
    metadata: {
      ...field.metadata,
      required: {
        action: arg.value.value,
        actionLoc: arg.loc,
        directiveLoc: requiredDirective.loc,
        path: pathName,
      },
    },
  };
}

// Transform @required directive to metadata
module.exports = {
  SCHEMA_EXTENSION,
  transform: requiredFieldTransform,
};
