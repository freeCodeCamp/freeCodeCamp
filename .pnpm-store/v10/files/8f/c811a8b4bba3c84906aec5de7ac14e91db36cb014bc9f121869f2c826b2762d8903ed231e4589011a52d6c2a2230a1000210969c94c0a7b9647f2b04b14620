'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.GraphQLSpecifiedByDirective =
  exports.GraphQLSkipDirective =
  exports.GraphQLOneOfDirective =
  exports.GraphQLIncludeDirective =
  exports.GraphQLDirective =
  exports.GraphQLDeprecatedDirective =
  exports.DEFAULT_DEPRECATION_REASON =
    void 0;
exports.assertDirective = assertDirective;
exports.isDirective = isDirective;
exports.isSpecifiedDirective = isSpecifiedDirective;
exports.specifiedDirectives = void 0;

var _devAssert = require('../jsutils/devAssert.js');

var _inspect = require('../jsutils/inspect.js');

var _instanceOf = require('../jsutils/instanceOf.js');

var _isObjectLike = require('../jsutils/isObjectLike.js');

var _toObjMap = require('../jsutils/toObjMap.js');

var _directiveLocation = require('../language/directiveLocation.js');

var _assertName = require('./assertName.js');

var _definition = require('./definition.js');

var _scalars = require('./scalars.js');

/**
 * Test if the given value is a GraphQL directive.
 */
function isDirective(directive) {
  return (0, _instanceOf.instanceOf)(directive, GraphQLDirective);
}

function assertDirective(directive) {
  if (!isDirective(directive)) {
    throw new Error(
      `Expected ${(0, _inspect.inspect)(directive)} to be a GraphQL directive.`,
    );
  }

  return directive;
}
/**
 * Custom extensions
 *
 * @remarks
 * Use a unique identifier name for your extension, for example the name of
 * your library or project. Do not use a shortened identifier as this increases
 * the risk of conflicts. We recommend you add at most one extension field,
 * an object which can contain all the values you need.
 */

/**
 * Directives are used by the GraphQL runtime as a way of modifying execution
 * behavior. Type system creators will usually not create these directly.
 */
class GraphQLDirective {
  constructor(config) {
    var _config$isRepeatable, _config$args;

    this.name = (0, _assertName.assertName)(config.name);
    this.description = config.description;
    this.locations = config.locations;
    this.isRepeatable =
      (_config$isRepeatable = config.isRepeatable) !== null &&
      _config$isRepeatable !== void 0
        ? _config$isRepeatable
        : false;
    this.extensions = (0, _toObjMap.toObjMap)(config.extensions);
    this.astNode = config.astNode;
    Array.isArray(config.locations) ||
      (0, _devAssert.devAssert)(
        false,
        `@${config.name} locations must be an Array.`,
      );
    const args =
      (_config$args = config.args) !== null && _config$args !== void 0
        ? _config$args
        : {};
    ((0, _isObjectLike.isObjectLike)(args) && !Array.isArray(args)) ||
      (0, _devAssert.devAssert)(
        false,
        `@${config.name} args must be an object with argument names as keys.`,
      );
    this.args = (0, _definition.defineArguments)(args);
  }

  get [Symbol.toStringTag]() {
    return 'GraphQLDirective';
  }

  toConfig() {
    return {
      name: this.name,
      description: this.description,
      locations: this.locations,
      args: (0, _definition.argsToArgsConfig)(this.args),
      isRepeatable: this.isRepeatable,
      extensions: this.extensions,
      astNode: this.astNode,
    };
  }

  toString() {
    return '@' + this.name;
  }

  toJSON() {
    return this.toString();
  }
}

exports.GraphQLDirective = GraphQLDirective;

/**
 * Used to conditionally include fields or fragments.
 */
const GraphQLIncludeDirective = new GraphQLDirective({
  name: 'include',
  description:
    'Directs the executor to include this field or fragment only when the `if` argument is true.',
  locations: [
    _directiveLocation.DirectiveLocation.FIELD,
    _directiveLocation.DirectiveLocation.FRAGMENT_SPREAD,
    _directiveLocation.DirectiveLocation.INLINE_FRAGMENT,
  ],
  args: {
    if: {
      type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean),
      description: 'Included when true.',
    },
  },
});
/**
 * Used to conditionally skip (exclude) fields or fragments.
 */

exports.GraphQLIncludeDirective = GraphQLIncludeDirective;
const GraphQLSkipDirective = new GraphQLDirective({
  name: 'skip',
  description:
    'Directs the executor to skip this field or fragment when the `if` argument is true.',
  locations: [
    _directiveLocation.DirectiveLocation.FIELD,
    _directiveLocation.DirectiveLocation.FRAGMENT_SPREAD,
    _directiveLocation.DirectiveLocation.INLINE_FRAGMENT,
  ],
  args: {
    if: {
      type: new _definition.GraphQLNonNull(_scalars.GraphQLBoolean),
      description: 'Skipped when true.',
    },
  },
});
/**
 * Constant string used for default reason for a deprecation.
 */

exports.GraphQLSkipDirective = GraphQLSkipDirective;
const DEFAULT_DEPRECATION_REASON = 'No longer supported';
/**
 * Used to declare element of a GraphQL schema as deprecated.
 */

exports.DEFAULT_DEPRECATION_REASON = DEFAULT_DEPRECATION_REASON;
const GraphQLDeprecatedDirective = new GraphQLDirective({
  name: 'deprecated',
  description: 'Marks an element of a GraphQL schema as no longer supported.',
  locations: [
    _directiveLocation.DirectiveLocation.FIELD_DEFINITION,
    _directiveLocation.DirectiveLocation.ARGUMENT_DEFINITION,
    _directiveLocation.DirectiveLocation.INPUT_FIELD_DEFINITION,
    _directiveLocation.DirectiveLocation.ENUM_VALUE,
  ],
  args: {
    reason: {
      type: _scalars.GraphQLString,
      description:
        'Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).',
      defaultValue: DEFAULT_DEPRECATION_REASON,
    },
  },
});
/**
 * Used to provide a URL for specifying the behavior of custom scalar definitions.
 */

exports.GraphQLDeprecatedDirective = GraphQLDeprecatedDirective;
const GraphQLSpecifiedByDirective = new GraphQLDirective({
  name: 'specifiedBy',
  description: 'Exposes a URL that specifies the behavior of this scalar.',
  locations: [_directiveLocation.DirectiveLocation.SCALAR],
  args: {
    url: {
      type: new _definition.GraphQLNonNull(_scalars.GraphQLString),
      description: 'The URL that specifies the behavior of this scalar.',
    },
  },
});
/**
 * Used to indicate an Input Object is a OneOf Input Object.
 */

exports.GraphQLSpecifiedByDirective = GraphQLSpecifiedByDirective;
const GraphQLOneOfDirective = new GraphQLDirective({
  name: 'oneOf',
  description:
    'Indicates exactly one field must be supplied and this field must not be `null`.',
  locations: [_directiveLocation.DirectiveLocation.INPUT_OBJECT],
  args: {},
});
/**
 * The full list of specified directives.
 */

exports.GraphQLOneOfDirective = GraphQLOneOfDirective;
const specifiedDirectives = Object.freeze([
  GraphQLIncludeDirective,
  GraphQLSkipDirective,
  GraphQLDeprecatedDirective,
  GraphQLSpecifiedByDirective,
  GraphQLOneOfDirective,
]);
exports.specifiedDirectives = specifiedDirectives;

function isSpecifiedDirective(directive) {
  return specifiedDirectives.some(({ name }) => name === directive.name);
}
