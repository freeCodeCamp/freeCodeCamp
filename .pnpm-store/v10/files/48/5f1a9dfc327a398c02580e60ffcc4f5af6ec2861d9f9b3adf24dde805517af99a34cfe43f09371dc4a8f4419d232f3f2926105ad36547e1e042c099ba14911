/**
 * @fileoverview Rule to flag use of .only in tests, preventing focused tests being committed accidentally
 * @author Levi Buzolic
 */

/** @typedef {import("eslint").AST.Range} Range */
/** @typedef {import("estree").Node} EstreeNode */
/** @typedef {import("estree").Identifier} Identifier */
/** @typedef {EstreeNode & { parent?: ParentNode | null, range?: Range }} ParentNode */
/** @typedef {Identifier & { parent: ParentNode, range?: Range }} IdentifierNode */
/** @typedef {{options: unknown[], report: import("eslint").Rule.RuleContext["report"]}} RuleContext */
/** @typedef {{before?: () => boolean | void, Identifier: (node: IdentifierNode) => void}} VisitorWithHooks */

/** @type {{block: string[], focus: string[], functions: string[], fix: boolean}} */
const defaultOptions = {
  block: [
    "describe",
    "it",
    "context",
    "test",
    "tape",
    "fixture",
    "serial",
    "Feature",
    "Scenario",
    "Given",
    "And",
    "When",
    "Then",
  ],
  focus: ["only"],
  functions: [],
  fix: false,
};

/** @type {import("eslint").Rule.RuleModule & { createOnce: (context: RuleContext) => VisitorWithHooks }} */
module.exports = {
  meta: {
    docs: {
      description: "disallow focused/only tests",
      category: "Possible Errors",
      recommended: true,
      url: "https://github.com/levibuzolic/eslint-plugin-no-only-tests",
    },
    fixable: "code",
    schema: [
      {
        type: "object",
        properties: {
          block: {
            type: "array",
            items: {
              type: "string",
            },
            uniqueItems: true,
            default: defaultOptions.block,
          },
          focus: {
            type: "array",
            items: {
              type: "string",
            },
            uniqueItems: true,
            default: defaultOptions.focus,
          },
          functions: {
            type: "array",
            items: {
              type: "string",
            },
            uniqueItems: true,
            default: defaultOptions.functions,
          },
          fix: {
            type: "boolean",
            default: defaultOptions.fix,
          },
        },
        additionalProperties: false,
      },
    ],
  },
  create(context) {
    const visitor = createOnceVisitors({
      options: context.options,
      report: context.report.bind(context),
    });

    if (typeof visitor.before === "function" && visitor.before() === false) return {};

    /** @type {import("eslint").Rule.RuleListener} */
    const eslintVisitor = {};
    for (const [eventName, handler] of Object.entries(visitor)) {
      if (eventName === "before") continue;
      eslintVisitor[eventName] = handler;
    }
    return eslintVisitor;
  },
  createOnce(context) {
    return createOnceVisitors(context);
  },
};

/**
 * @param {RuleContext} context
 * @returns {VisitorWithHooks}
 */
function createOnceVisitors(context) {
  let blocks = defaultOptions.block;
  let focus = defaultOptions.focus;
  let functions = defaultOptions.functions;
  let fix = defaultOptions.fix;

  return {
    before() {
      const options = Object.assign({}, defaultOptions, context.options[0]);
      blocks = options.block ?? defaultOptions.block;
      focus = options.focus ?? defaultOptions.focus;
      functions = options.functions ?? defaultOptions.functions;
      fix = !!options.fix;
    },
    Identifier(node) {
      if (functions.length && functions.indexOf(node.name) > -1) {
        context.report({
          node,
          message: `${node.name} not permitted`,
        });
      }

      const parentObject = isMemberExpression(node.parent) ? node.parent.object : undefined;
      if (parentObject == null) return;
      if (focus.indexOf(node.name) === -1) return;

      const callPath = getCallPath(node.parent).join(".");

      // comparison guarantees that matching is done with the beginning of call path
      if (
        blocks.find((block) => {
          // Allow wildcard tail matching of blocks when ending in a `*`
          if (block.endsWith("*")) return callPath.startsWith(block.replace(/\*$/, ""));
          return callPath.startsWith(`${block}.`);
        })
      ) {
        const rangeStart = node.range?.[0];
        const rangeEnd = node.range?.[1];

        context.report({
          node,
          message: `${callPath} not permitted`,
          fix:
            fix && rangeStart != null && rangeEnd != null
              ? (fixer) => fixer.removeRange([rangeStart - 1, rangeEnd])
              : undefined,
        });
      }
    },
  };
}

/**
 *
 * @param {ParentNode} node
 * @param {string[]} path
 * @returns {string[]}
 */
function getCallPath(node, path = []) {
  const nodeName = getNodeName(node);

  if (isMemberExpression(node) && nodeName) {
    return getCallPath(node.object, [nodeName, ...path]);
  }

  if (isCallExpression(node)) {
    return getCallPath(node.callee, path);
  }

  if (nodeName) return [nodeName, ...path];
  return path;
}

/**
 * @param {EstreeNode} node
 * @returns {node is import("estree").MemberExpression}
 */
function isMemberExpression(node) {
  return node.type === "MemberExpression";
}

/**
 * @param {EstreeNode} node
 * @returns {node is import("estree").CallExpression}
 */
function isCallExpression(node) {
  return node.type === "CallExpression";
}

/**
 * @param {EstreeNode} node
 * @returns {string | undefined}
 */
function getNodeName(node) {
  if (node.type === "Identifier") return node.name;
  if (node.type === "MemberExpression" && !node.computed && node.property.type === "Identifier") {
    return node.property.name;
  }
  return undefined;
}
