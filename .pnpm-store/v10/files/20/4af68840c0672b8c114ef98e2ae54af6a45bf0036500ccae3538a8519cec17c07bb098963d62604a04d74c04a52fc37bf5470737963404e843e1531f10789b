/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */
// flowlint ambiguous-object-type:error
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _createForOfIteratorHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/createForOfIteratorHelper"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var IRTransformer = require('../core/IRTransformer');

var partitionArray = require('../util/partitionArray');

var _require = require('../core/CompilerError'),
    createUserError = _require.createUserError,
    createCompilerError = _require.createCompilerError;

var _require2 = require('relay-runtime'),
    RelayFeatureFlags = _require2.RelayFeatureFlags;

var SCHEMA_EXTENSION = "\n  enum RequiredFieldAction {\n    NONE\n    LOG\n    THROW\n  }\n  directive @required(\n    action: RequiredFieldAction!\n  ) on FIELD\n";
/**
 * This transform rewrites ScalarField and LinkedField nodes with a @required
 * directive into fields with the directives stripped and sets the `required`
 * and `path` metadata values.
 */

function requiredFieldTransform(context) {
  var schema = context.getSchema();
  return IRTransformer.transform(context, {
    LinkedField: visitLinkedField,
    ScalarField: vistitScalarField,
    InlineFragment: visitInlineFragment,
    Fragment: visitFragment,
    Root: visitRoot
  }, function (node) {
    return {
      schema: schema,
      documentName: node.name,
      path: [],
      pathRequiredMap: new Map(),
      currentNodeRequiredChildren: new Map(),
      requiredChildrenMap: new Map(),
      parentAbstractInlineFragment: null
    };
  });
}

function visitFragment(fragment, state) {
  // $FlowFixMe[incompatible-use]
  return addChildrenCanBubbleMetadata(this.traverse(fragment, state), state);
}

function visitRoot(root, state) {
  // $FlowFixMe[incompatible-use]
  return addChildrenCanBubbleMetadata(this.traverse(root, state), state);
}

function visitInlineFragment(fragment, state) {
  var _state$parentAbstract;

  // Ideally we could allow @required when the direct parent inline fragment was
  // on a concrete type, but we would need to solve this bug in our Flow type
  // generation first: T65695438
  var parentAbstractInlineFragment = (_state$parentAbstract = state.parentAbstractInlineFragment) !== null && _state$parentAbstract !== void 0 ? _state$parentAbstract : getAbstractInlineFragment(fragment, state.schema); // $FlowFixMe[incompatible-use]

  return this.traverse(fragment, (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, state), {}, {
    parentAbstractInlineFragment: parentAbstractInlineFragment
  }));
}

function getAbstractInlineFragment(fragment, schema) {
  var typeCondition = fragment.typeCondition;

  if (schema.isAbstractType(typeCondition)) {
    return fragment;
  }

  return null;
} // Convert action to a number so that we can numerically compare their severity.


function getActionSeverity(action) {
  switch (action) {
    case 'NONE':
      return 0;

    case 'LOG':
      return 1;

    case 'THROW':
      return 2;

    default:
      action;
      throw createCompilerError("Unhandled action type ".concat(action));
  }
}

function visitLinkedField(field, state) {
  var path = [].concat((0, _toConsumableArray2["default"])(state.path), [field.alias]);
  var newState = (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, state), {}, {
    currentNodeRequiredChildren: new Map(),
    path: path,
    parentAbstractInlineFragment: null
  }); // $FlowFixMe[incompatible-use]

  var newField = this.traverse(field, newState);
  var pathName = path.join('.');
  assertCompatibleRequiredChildren(field, pathName, newState);
  newField = applyDirectives(newField, pathName, state.documentName);
  assertCompatibleNullability(newField, pathName, newState.pathRequiredMap);
  var directiveMetadata = getRequiredDirectiveMetadata(newField);

  if (directiveMetadata != null) {
    assertParentIsNotInvalidInlineFragmet(state.schema, directiveMetadata, state.parentAbstractInlineFragment);
    state.currentNodeRequiredChildren.set(field.alias, newField);
    var severity = getActionSeverity(directiveMetadata.action); // Assert that all @required children have at least this severity.

    newState.currentNodeRequiredChildren.forEach(function (childField) {
      var childMetadata = getRequiredDirectiveMetadata(childField);

      if (childMetadata == null) {
        return;
      }

      if (getActionSeverity(childMetadata.action) < severity) {
        throw createUserError("The @required field [1] may not have an `action` less severe than that of its @required parent [2]. [1] should probably be `action: ".concat(directiveMetadata.action, "`."), [childMetadata.actionLoc, directiveMetadata.actionLoc]);
      }
    });
  }

  state.requiredChildrenMap.set(pathName, newState.currentNodeRequiredChildren);
  return addChildrenCanBubbleMetadata(newField, newState);
}

function vistitScalarField(field, state) {
  var pathName = [].concat((0, _toConsumableArray2["default"])(state.path), [field.alias]).join('.');
  var newField = applyDirectives(field, pathName, state.documentName);
  var directiveMetadata = getRequiredDirectiveMetadata(newField);

  if (directiveMetadata != null) {
    assertParentIsNotInvalidInlineFragmet(state.schema, directiveMetadata, state.parentAbstractInlineFragment);
    state.currentNodeRequiredChildren.set(field.alias, newField);
  }

  assertCompatibleNullability(newField, pathName, state.pathRequiredMap);
  return newField;
}

function addChildrenCanBubbleMetadata(node, state) {
  var _iterator = (0, _createForOfIteratorHelper2["default"])(state.currentNodeRequiredChildren.values()),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var child = _step.value;
      var requiredMetadata = getRequiredDirectiveMetadata(child);

      if (requiredMetadata != null && requiredMetadata.action !== 'THROW') {
        var metadata = (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, node.metadata), {}, {
          childrenCanBubbleNull: true
        });
        return (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, node), {}, {
          metadata: metadata
        });
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return node;
}

function assertParentIsNotInvalidInlineFragmet(schema, directiveMetadata, parentAbstractInlineFragment) {
  if (parentAbstractInlineFragment == null) {
    return;
  }

  var typeCondition = parentAbstractInlineFragment.typeCondition;

  if (schema.isUnion(typeCondition)) {
    throw createUserError('The @required directive [1] may not be used anywhere within an inline fragment on a union type [2].', [directiveMetadata.directiveLoc, parentAbstractInlineFragment.loc]);
  } else if (schema.isInterface(typeCondition)) {
    throw createUserError('The @required directive [1] may not be used anywhere within an inline fragment on an interface type [2].', [directiveMetadata.directiveLoc, parentAbstractInlineFragment.loc]);
  } else {
    throw createCompilerError('Unexpected abstract inline fragment type.', [parentAbstractInlineFragment.loc]);
  }
} // Check that this field's nullability matches all other instances.


function assertCompatibleNullability(field, pathName, pathRequiredMap) {
  var existingField = pathRequiredMap.get(pathName);

  if (existingField == null) {
    pathRequiredMap.set(pathName, field);
    return;
  }

  var requiredMetadata = getRequiredDirectiveMetadata(field);
  var existingRequiredMetadata = getRequiredDirectiveMetadata(existingField);

  if ((requiredMetadata === null || requiredMetadata === void 0 ? void 0 : requiredMetadata.action) === (existingRequiredMetadata === null || existingRequiredMetadata === void 0 ? void 0 : existingRequiredMetadata.action)) {
    return;
  }

  if (requiredMetadata == null) {
    throw createUserError("The field \"".concat(field.alias, "\" is @required in [1] but not in [2]."), [existingField.loc, field.loc]);
  }

  if (existingRequiredMetadata == null) {
    throw createUserError("The field \"".concat(field.alias, "\" is @required in [1] but not in [2]."), [field.loc, existingField.loc]);
  }

  throw createUserError("The field \"".concat(field.alias, "\" has a different @required action in [1] than in [2]."), [requiredMetadata.actionLoc, existingRequiredMetadata.actionLoc]);
} // Metadata is untyped, so we use this utility function to do the type coersion.


function getRequiredDirectiveMetadata(field) {
  var _field$metadata;

  return (_field$metadata = field.metadata) === null || _field$metadata === void 0 ? void 0 : _field$metadata.required;
} // Check that this field has the same required children as all other instances.


function assertCompatibleRequiredChildren(field, fieldPath, _ref) {
  var currentNodeRequiredChildren = _ref.currentNodeRequiredChildren,
      pathRequiredMap = _ref.pathRequiredMap,
      requiredChildrenMap = _ref.requiredChildrenMap;
  var previouslyRequiredChildren = requiredChildrenMap.get(fieldPath);

  if (previouslyRequiredChildren == null) {
    return;
  } // Check if this field has a required child field which was previously omitted.


  var _iterator2 = (0, _createForOfIteratorHelper2["default"])(currentNodeRequiredChildren),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _step2$value = _step2.value,
          path = _step2$value[0],
          childField = _step2$value[1];

      if (!previouslyRequiredChildren.has(path)) {
        var otherParent = pathRequiredMap.get(fieldPath);

        if (otherParent == null) {
          throw createCompilerError("Could not find other parent node at path \"".concat(fieldPath, "\"."), [childField.loc]);
        }

        throw createMissingRequiredFieldError(childField, otherParent);
      }
    } // Check if a previous reference to this field had a required child field which we are missing.

  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  var _iterator3 = (0, _createForOfIteratorHelper2["default"])(previouslyRequiredChildren),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var _step3$value = _step3.value,
          _path = _step3$value[0],
          _childField = _step3$value[1];

      if (!currentNodeRequiredChildren.has(_path)) {
        throw createMissingRequiredFieldError(_childField, field);
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
}

function createMissingRequiredFieldError(requiredChild, missingParent) {
  var alias = requiredChild.alias;
  return createUserError("The field \"".concat(alias, "\" is marked as @required in [1] but is missing in [2]."), [requiredChild.loc, missingParent.loc]);
} // TODO T74397896: Remove prefix gating once @required is rolled out more broadly.


function featureIsEnabled(documentName) {
  var featureFlag = RelayFeatureFlags.ENABLE_REQUIRED_DIRECTIVES;

  if (typeof featureFlag === 'boolean') {
    return featureFlag;
  } else if (featureFlag === 'LIMITED') {
    return documentName.startsWith('RelayRequiredTest');
  } else if (typeof featureFlag === 'string') {
    return featureFlag.split('|').some(function (prefix) {
      return documentName.startsWith(prefix);
    });
  }

  return false;
} // Strip and validate @required directives, and convert them to metadata.


function applyDirectives(field, pathName, documentName) {
  var _partitionArray = partitionArray(field.directives, function (directive) {
    return directive.name === 'required';
  }),
      requiredDirectives = _partitionArray[0],
      otherDirectives = _partitionArray[1];

  if (requiredDirectives.length === 0) {
    return field;
  }

  if (!featureIsEnabled(documentName)) {
    throw new createUserError( // Purposefully don't include details in this error message, since we
    // don't want folks adopting this feature until it's been tested more.
    'The @required directive is experimental and not yet supported for use in product code', requiredDirectives.map(function (x) {
      return x.loc;
    }));
  }

  if (requiredDirectives.length > 1) {
    throw new createUserError('Did not expect multiple @required directives.', requiredDirectives.map(function (x) {
      return x.loc;
    }));
  }

  var requiredDirective = requiredDirectives[0];
  var arg = requiredDirective.args[0]; // I would expect this check to be handled by the schema validation, but...

  if (arg == null) {
    throw createUserError('The @required directive requires an `action` argument.', [requiredDirective.loc]);
  }

  if (arg.value.kind !== 'Literal') {
    throw createUserError('Expected @required `action` argument to be a literal.', [arg.value.loc]);
  }

  return (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, field), {}, {
    directives: otherDirectives,
    metadata: (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, field.metadata), {}, {
      required: {
        action: arg.value.value,
        actionLoc: arg.loc,
        directiveLoc: requiredDirective.loc,
        path: pathName
      }
    })
  });
} // Transform @required directive to metadata


module.exports = {
  SCHEMA_EXTENSION: SCHEMA_EXTENSION,
  transform: requiredFieldTransform
};