"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAccessorValue = exports.followTypeAssertionChain = exports.createRule = exports.TestCaseProperty = exports.TestCaseName = exports.ModifierName = exports.HookName = exports.EqualityMatcher = exports.DescribeProperty = exports.DescribeAlias = void 0;
exports.getNodeName = getNodeName;
exports.scopeHasLocalReference = exports.parseExpectCall = exports.isTestCaseCall = exports.isSupportedAccessor = exports.isStringNode = exports.isParsedEqualityMatcherCall = exports.isIdentifier = exports.isHook = exports.isFunction = exports.isExpectMember = exports.isExpectCall = exports.isDescribeCall = exports.hasOnlyOneArgument = exports.getTestCallExpressionsFromDeclaredVariables = exports.getStringValue = void 0;

var _path = require("path");

var _experimentalUtils = require("@typescript-eslint/experimental-utils");

var _package = require("../../package.json");

const REPO_URL = 'https://github.com/jest-community/eslint-plugin-jest';

const createRule = _experimentalUtils.ESLintUtils.RuleCreator(name => {
  const ruleName = (0, _path.parse)(name).name;
  return `${REPO_URL}/blob/v${_package.version}/docs/rules/${ruleName}.md`;
});

exports.createRule = createRule;

const isTypeCastExpression = node => node.type === _experimentalUtils.AST_NODE_TYPES.TSAsExpression || node.type === _experimentalUtils.AST_NODE_TYPES.TSTypeAssertion;

const followTypeAssertionChain = expression => isTypeCastExpression(expression) ? followTypeAssertionChain(expression.expression) : expression;
/**
 * A `Literal` with a `value` of type `string`.
 */


exports.followTypeAssertionChain = followTypeAssertionChain;

/**
 * Checks if the given `node` is a `StringLiteral`.
 *
 * If a `value` is provided & the `node` is a `StringLiteral`,
 * the `value` will be compared to that of the `StringLiteral`.
 *
 * @param {Node} node
 * @param {V} [value]
 *
 * @return {node is StringLiteral<V>}
 *
 * @template V
 */
const isStringLiteral = (node, value) => node.type === _experimentalUtils.AST_NODE_TYPES.Literal && typeof node.value === 'string' && (value === undefined || node.value === value);

/**
 * Checks if the given `node` is a `TemplateLiteral`.
 *
 * Complex `TemplateLiteral`s are not considered specific, and so will return `false`.
 *
 * If a `value` is provided & the `node` is a `TemplateLiteral`,
 * the `value` will be compared to that of the `TemplateLiteral`.
 *
 * @param {Node} node
 * @param {V} [value]
 *
 * @return {node is TemplateLiteral<V>}
 *
 * @template V
 */
const isTemplateLiteral = (node, value) => node.type === _experimentalUtils.AST_NODE_TYPES.TemplateLiteral && node.quasis.length === 1 && ( // bail out if not simple
value === undefined || node.quasis[0].value.raw === value);

/**
 * Checks if the given `node` is a {@link StringNode}.
 *
 * @param {Node} node
 * @param {V} [specifics]
 *
 * @return {node is StringNode}
 *
 * @template V
 */
const isStringNode = (node, specifics) => isStringLiteral(node, specifics) || isTemplateLiteral(node, specifics);
/**
 * Gets the value of the given `StringNode`.
 *
 * If the `node` is a `TemplateLiteral`, the `raw` value is used;
 * otherwise, `value` is returned instead.
 *
 * @param {StringNode<S>} node
 *
 * @return {S}
 *
 * @template S
 */


exports.isStringNode = isStringNode;

const getStringValue = node => isTemplateLiteral(node) ? node.quasis[0].value.raw : node.value;
/**
 * Represents a `MemberExpression` with a "known" `property`.
 */


exports.getStringValue = getStringValue;

/**
 * Guards that the given `call` has only one `argument`.
 *
 * @param {CallExpression} call
 *
 * @return {call is CallExpressionWithSingleArgument}
 */
const hasOnlyOneArgument = call => call.arguments.length === 1;
/**
 * An `Identifier` with a known `name` value - i.e `expect`.
 */


exports.hasOnlyOneArgument = hasOnlyOneArgument;

/**
 * Checks if the given `node` is an `Identifier`.
 *
 * If a `name` is provided, & the `node` is an `Identifier`,
 * the `name` will be compared to that of the `identifier`.
 *
 * @param {Node} node
 * @param {V} [name]
 *
 * @return {node is KnownIdentifier<Name>}
 *
 * @template V
 */
const isIdentifier = (node, name) => node.type === _experimentalUtils.AST_NODE_TYPES.Identifier && (name === undefined || node.name === name);
/**
 * Checks if the given `node` is a "supported accessor".
 *
 * This means that it's a node can be used to access properties,
 * and who's "value" can be statically determined.
 *
 * `MemberExpression` nodes most commonly contain accessors,
 * but it's possible for other nodes to contain them.
 *
 * If a `value` is provided & the `node` is an `AccessorNode`,
 * the `value` will be compared to that of the `AccessorNode`.
 *
 * Note that `value` here refers to the normalised value.
 * The property that holds the value is not always called `name`.
 *
 * @param {Node} node
 * @param {V} [value]
 *
 * @return {node is AccessorNode<V>}
 *
 * @template V
 */


exports.isIdentifier = isIdentifier;

const isSupportedAccessor = (node, value) => isIdentifier(node, value) || isStringNode(node, value);
/**
 * Gets the value of the given `AccessorNode`,
 * account for the different node types.
 *
 * @param {AccessorNode<S>} accessor
 *
 * @return {S}
 *
 * @template S
 */


exports.isSupportedAccessor = isSupportedAccessor;

const getAccessorValue = accessor => accessor.type === _experimentalUtils.AST_NODE_TYPES.Identifier ? accessor.name : getStringValue(accessor);

exports.getAccessorValue = getAccessorValue;

/**
 * Checks if the given `node` is a valid `ExpectCall`.
 *
 * In order to be an `ExpectCall`, the `node` must:
 *  * be a `CallExpression`,
 *  * have an accessor named 'expect',
 *  * have a `parent`.
 *
 * @param {Node} node
 *
 * @return {node is ExpectCall}
 */
const isExpectCall = node => node.type === _experimentalUtils.AST_NODE_TYPES.CallExpression && isSupportedAccessor(node.callee, 'expect') && node.parent !== undefined;

exports.isExpectCall = isExpectCall;

const isExpectMember = (node, name) => node.type === _experimentalUtils.AST_NODE_TYPES.MemberExpression && isSupportedAccessor(node.property, name);
/**
 * Represents all the jest matchers.
 */


exports.isExpectMember = isExpectMember;
let ModifierName;
exports.ModifierName = ModifierName;

(function (ModifierName) {
  ModifierName["not"] = "not";
  ModifierName["rejects"] = "rejects";
  ModifierName["resolves"] = "resolves";
})(ModifierName || (exports.ModifierName = ModifierName = {}));

let EqualityMatcher;
exports.EqualityMatcher = EqualityMatcher;

(function (EqualityMatcher) {
  EqualityMatcher["toBe"] = "toBe";
  EqualityMatcher["toEqual"] = "toEqual";
  EqualityMatcher["toStrictEqual"] = "toStrictEqual";
})(EqualityMatcher || (exports.EqualityMatcher = EqualityMatcher = {}));

const isParsedEqualityMatcherCall = (matcher, name) => (name ? matcher.name === name : EqualityMatcher.hasOwnProperty(matcher.name)) && matcher.arguments !== null && matcher.arguments.length === 1;
/**
 * Represents a parsed expect matcher, such as `toBe`, `toContain`, and so on.
 */


exports.isParsedEqualityMatcherCall = isParsedEqualityMatcherCall;

const parseExpectMember = expectMember => ({
  name: getAccessorValue(expectMember.property),
  node: expectMember
});

const reparseAsMatcher = parsedMember => ({ ...parsedMember,

  /**
   * The arguments being passed to this `Matcher`, if any.
   *
   * If this matcher isn't called, this will be `null`.
   */
  arguments: parsedMember.node.parent.type === _experimentalUtils.AST_NODE_TYPES.CallExpression ? parsedMember.node.parent.arguments : null
});
/**
 * Re-parses the given `parsedMember` as a `ParsedExpectModifier`.
 *
 * If the given `parsedMember` does not have a `name` of a valid `Modifier`,
 * an exception will be thrown.
 *
 * @param {ParsedExpectMember<ModifierName>} parsedMember
 *
 * @return {ParsedExpectModifier}
 */


const reparseMemberAsModifier = parsedMember => {
  if (isSpecificMember(parsedMember, ModifierName.not)) {
    return parsedMember;
  }
  /* istanbul ignore if */


  if (!isSpecificMember(parsedMember, ModifierName.resolves) && !isSpecificMember(parsedMember, ModifierName.rejects)) {
    // ts doesn't think that the ModifierName.not check is the direct inverse as the above two checks
    // todo: impossible at runtime, but can't be typed w/o negation support
    throw new Error(`modifier name must be either "${ModifierName.resolves}" or "${ModifierName.rejects}" (got "${parsedMember.name}")`);
  }

  const negation = isExpectMember(parsedMember.node.parent, ModifierName.not) ? parsedMember.node.parent : undefined;
  return { ...parsedMember,
    negation
  };
};

const isSpecificMember = (member, specific) => member.name === specific;
/**
 * Checks if the given `ParsedExpectMember` should be re-parsed as an `ParsedExpectModifier`.
 *
 * @param {ParsedExpectMember} member
 *
 * @return {member is ParsedExpectMember<ModifierName>}
 */


const shouldBeParsedExpectModifier = member => ModifierName.hasOwnProperty(member.name);

const parseExpectCall = expect => {
  const expectation = {
    expect
  };

  if (!isExpectMember(expect.parent)) {
    return expectation;
  }

  const parsedMember = parseExpectMember(expect.parent);

  if (!shouldBeParsedExpectModifier(parsedMember)) {
    expectation.matcher = reparseAsMatcher(parsedMember);
    return expectation;
  }

  const modifier = expectation.modifier = reparseMemberAsModifier(parsedMember);
  const memberNode = modifier.negation || modifier.node;

  if (!isExpectMember(memberNode.parent)) {
    return expectation;
  }

  expectation.matcher = reparseAsMatcher(parseExpectMember(memberNode.parent));
  return expectation;
};

exports.parseExpectCall = parseExpectCall;
let DescribeAlias;
exports.DescribeAlias = DescribeAlias;

(function (DescribeAlias) {
  DescribeAlias["describe"] = "describe";
  DescribeAlias["fdescribe"] = "fdescribe";
  DescribeAlias["xdescribe"] = "xdescribe";
})(DescribeAlias || (exports.DescribeAlias = DescribeAlias = {}));

let TestCaseName;
exports.TestCaseName = TestCaseName;

(function (TestCaseName) {
  TestCaseName["fit"] = "fit";
  TestCaseName["it"] = "it";
  TestCaseName["test"] = "test";
  TestCaseName["xit"] = "xit";
  TestCaseName["xtest"] = "xtest";
})(TestCaseName || (exports.TestCaseName = TestCaseName = {}));

let HookName;
exports.HookName = HookName;

(function (HookName) {
  HookName["beforeAll"] = "beforeAll";
  HookName["beforeEach"] = "beforeEach";
  HookName["afterAll"] = "afterAll";
  HookName["afterEach"] = "afterEach";
})(HookName || (exports.HookName = HookName = {}));

let DescribeProperty;
exports.DescribeProperty = DescribeProperty;

(function (DescribeProperty) {
  DescribeProperty["each"] = "each";
  DescribeProperty["only"] = "only";
  DescribeProperty["skip"] = "skip";
})(DescribeProperty || (exports.DescribeProperty = DescribeProperty = {}));

let TestCaseProperty;
exports.TestCaseProperty = TestCaseProperty;

(function (TestCaseProperty) {
  TestCaseProperty["each"] = "each";
  TestCaseProperty["concurrent"] = "concurrent";
  TestCaseProperty["only"] = "only";
  TestCaseProperty["skip"] = "skip";
  TestCaseProperty["todo"] = "todo";
})(TestCaseProperty || (exports.TestCaseProperty = TestCaseProperty = {}));

const joinNames = (a, b) => a && b ? `${a}.${b}` : null;

function getNodeName(node) {
  if (isSupportedAccessor(node)) {
    return getAccessorValue(node);
  }

  switch (node.type) {
    case _experimentalUtils.AST_NODE_TYPES.TaggedTemplateExpression:
      return getNodeName(node.tag);

    case _experimentalUtils.AST_NODE_TYPES.MemberExpression:
      return joinNames(getNodeName(node.object), getNodeName(node.property));

    case _experimentalUtils.AST_NODE_TYPES.NewExpression:
    case _experimentalUtils.AST_NODE_TYPES.CallExpression:
      return getNodeName(node.callee);
  }

  return null;
}

const isFunction = node => node.type === _experimentalUtils.AST_NODE_TYPES.FunctionExpression || node.type === _experimentalUtils.AST_NODE_TYPES.ArrowFunctionExpression;

exports.isFunction = isFunction;

const isHook = node => node.callee.type === _experimentalUtils.AST_NODE_TYPES.Identifier && HookName.hasOwnProperty(node.callee.name);

exports.isHook = isHook;

const getTestCallExpressionsFromDeclaredVariables = declaredVariables => {
  return declaredVariables.reduce((acc, {
    references
  }) => acc.concat(references.map(({
    identifier
  }) => identifier.parent).filter(node => !!node && node.type === _experimentalUtils.AST_NODE_TYPES.CallExpression && isTestCaseCall(node))), []);
};

exports.getTestCallExpressionsFromDeclaredVariables = getTestCallExpressionsFromDeclaredVariables;

const isTestCaseName = node => node.type === _experimentalUtils.AST_NODE_TYPES.Identifier && TestCaseName.hasOwnProperty(node.name);

const isTestCaseProperty = node => isSupportedAccessor(node) && TestCaseProperty.hasOwnProperty(getAccessorValue(node));
/**
 * Checks if the given `node` is a *call* to a test case function that would
 * result in tests being run by `jest`.
 *
 * Note that `.each()` does not count as a call in this context, as it will not
 * result in `jest` running any tests.
 *
 * @param {TSESTree.CallExpression} node
 *
 * @return {node is JestFunctionCallExpression<TestCaseName>}
 */


const isTestCaseCall = node => {
  if (isTestCaseName(node.callee)) {
    return true;
  }

  const callee = node.callee.type === _experimentalUtils.AST_NODE_TYPES.TaggedTemplateExpression ? node.callee.tag : node.callee.type === _experimentalUtils.AST_NODE_TYPES.CallExpression ? node.callee.callee : node.callee;

  if (callee.type === _experimentalUtils.AST_NODE_TYPES.MemberExpression && isTestCaseProperty(callee.property)) {
    // if we're an `each()`, ensure we're the outer CallExpression (i.e `.each()()`)
    if (getAccessorValue(callee.property) === 'each' && node.callee.type !== _experimentalUtils.AST_NODE_TYPES.TaggedTemplateExpression && node.callee.type !== _experimentalUtils.AST_NODE_TYPES.CallExpression) {
      return false;
    }

    return callee.object.type === _experimentalUtils.AST_NODE_TYPES.MemberExpression ? isTestCaseName(callee.object.object) : isTestCaseName(callee.object);
  }

  return false;
};

exports.isTestCaseCall = isTestCaseCall;

const isDescribeAlias = node => node.type === _experimentalUtils.AST_NODE_TYPES.Identifier && DescribeAlias.hasOwnProperty(node.name);

const isDescribeProperty = node => isSupportedAccessor(node) && DescribeProperty.hasOwnProperty(getAccessorValue(node));
/**
 * Checks if the given `node` is a *call* to a `describe` function that would
 * result in a `describe` block being created by `jest`.
 *
 * Note that `.each()` does not count as a call in this context, as it will not
 * result in `jest` creating any `describe` blocks.
 *
 * @param {TSESTree.CallExpression} node
 *
 * @return {node is JestFunctionCallExpression<TestCaseName>}
 */


const isDescribeCall = node => {
  if (isDescribeAlias(node.callee)) {
    return true;
  }

  const callee = node.callee.type === _experimentalUtils.AST_NODE_TYPES.TaggedTemplateExpression ? node.callee.tag : node.callee.type === _experimentalUtils.AST_NODE_TYPES.CallExpression ? node.callee.callee : node.callee;

  if (callee.type === _experimentalUtils.AST_NODE_TYPES.MemberExpression && isDescribeProperty(callee.property)) {
    // if we're an `each()`, ensure we're the outer CallExpression (i.e `.each()()`)
    if (getAccessorValue(callee.property) === 'each' && node.callee.type !== _experimentalUtils.AST_NODE_TYPES.TaggedTemplateExpression && node.callee.type !== _experimentalUtils.AST_NODE_TYPES.CallExpression) {
      return false;
    }

    return callee.object.type === _experimentalUtils.AST_NODE_TYPES.MemberExpression ? isDescribeAlias(callee.object.object) : isDescribeAlias(callee.object);
  }

  return false;
};

exports.isDescribeCall = isDescribeCall;

const collectReferences = scope => {
  const locals = new Set();
  const unresolved = new Set();
  let currentScope = scope;

  while (currentScope !== null) {
    for (const ref of currentScope.variables) {
      const isReferenceDefined = ref.defs.some(def => {
        return def.type !== 'ImplicitGlobalVariable';
      });

      if (isReferenceDefined) {
        locals.add(ref.name);
      }
    }

    for (const ref of currentScope.through) {
      unresolved.add(ref.identifier.name);
    }

    currentScope = currentScope.upper;
  }

  return {
    locals,
    unresolved
  };
};

const scopeHasLocalReference = (scope, referenceName) => {
  const references = collectReferences(scope);
  return (// referenceName was found as a local variable or function declaration.
    references.locals.has(referenceName) || // referenceName was not found as an unresolved reference,
    // meaning it is likely not an implicit global reference.
    !references.unresolved.has(referenceName)
  );
};

exports.scopeHasLocalReference = scopeHasLocalReference;