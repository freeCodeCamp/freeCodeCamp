/**
 * @author Toru Nagashima
 * @copyright 2016 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/*istanbul ignore next */
/**
 * This function is copied from https://github.com/eslint/eslint/blob/2355f8d0de1d6732605420d15ddd4f1eee3c37b6/lib/ast-utils.js#L648-L684
 *
 * @param {ASTNode} node - The node to get.
 * @returns {string|null} The property name if static. Otherwise, null.
 * @private
 */
function getStaticPropertyName(node) {
    let prop = null

    switch (node && node.type) {
        case "Property":
        case "MethodDefinition":
            prop = node.key
            break

        case "MemberExpression":
            prop = node.property
            break

        // no default
    }

    switch (prop && prop.type) {
        case "Literal":
            return String(prop.value)

        case "TemplateLiteral":
            if (prop.expressions.length === 0 && prop.quasis.length === 1) {
                return prop.quasis[0].value.cooked
            }
            break

        case "Identifier":
            if (!node.computed) {
                return prop.name
            }
            break

        // no default
    }

    return null
}

/**
 * Checks whether the given node is assignee or not.
 *
 * @param {ASTNode} node - The node to check.
 * @returns {boolean} `true` if the node is assignee.
 */
function isAssignee(node) {
    return (
        node.parent.type === "AssignmentExpression" &&
        node.parent.left === node
    )
}

/**
 * Gets the top assignment expression node if the given node is an assignee.
 *
 * This is used to distinguish 2 assignees belong to the same assignment.
 * If the node is not an assignee, this returns null.
 *
 * @param {ASTNode} leafNode - The node to get.
 * @returns {ASTNode|null} The top assignment expression node, or null.
 */
function getTopAssignment(leafNode) {
    let node = leafNode

    // Skip MemberExpressions.
    while (node.parent.type === "MemberExpression" && node.parent.object === node) {
        node = node.parent
    }

    // Check assignments.
    if (!isAssignee(node)) {
        return null
    }

    // Find the top.
    while (node.parent.type === "AssignmentExpression") {
        node = node.parent
    }

    return node
}

/**
 * Gets top assignment nodes of the given node list.
 *
 * @param {ASTNode[]} nodes - The node list to get.
 * @returns {ASTNode[]} Gotten top assignment nodes.
 */
function createAssignmentList(nodes) {
    return nodes.map(getTopAssignment).filter(Boolean)
}

/**
 * Gets the reference of `module.exports` from the given scope.
 *
 * @param {escope.Scope} scope - The scope to get.
 * @returns {ASTNode[]} Gotten MemberExpression node list.
 */
function getModuleExportsNodes(scope) {
    const variable = scope.set.get("module")
    if (variable == null) {
        return []
    }
    return variable.references
        .map(reference => reference.identifier.parent)
        .filter(node => (
            node.type === "MemberExpression" &&
            getStaticPropertyName(node) === "exports"
        ))
}

/**
 * Gets the reference of `exports` from the given scope.
 *
 * @param {escope.Scope} scope - The scope to get.
 * @returns {ASTNode[]} Gotten Identifier node list.
 */
function getExportsNodes(scope) {
    const variable = scope.set.get("exports")
    if (variable == null) {
        return []
    }
    return variable.references.map(reference => reference.identifier)
}

/**
 * The definition of this rule.
 *
 * @param {RuleContext} context - The rule context to check.
 * @returns {object} The definition of this rule.
 */
function create(context) {
    const mode = context.options[0] || "module.exports"
    const batchAssignAllowed = Boolean(
        context.options[1] != null &&
        context.options[1].allowBatchAssign
    )
    const sourceCode = context.getSourceCode()

    /**
     * Gets the location info of reports.
     *
     * exports = foo
     * ^^^^^^^^^
     *
     * module.exports = foo
     * ^^^^^^^^^^^^^^^^
     *
     * @param {ASTNode} node - The node of `exports`/`module.exports`.
     * @returns {Location} The location info of reports.
     */
    function getLocation(node) {
        const token = sourceCode.getTokenAfter(node)
        return {
            start: node.loc.start,
            end: token.loc.end,
        }
    }

    /**
     * Enforces `module.exports`.
     * This warns references of `exports`.
     *
     * @returns {void}
     */
    function enforceModuleExports() {
        const globalScope = context.getScope()
        const exportsNodes = getExportsNodes(globalScope)
        const assignList = batchAssignAllowed
            ? createAssignmentList(getModuleExportsNodes(globalScope))
            : []

        for (const node of exportsNodes) {
            // Skip if it's a batch assignment.
            if (assignList.length > 0 &&
                assignList.indexOf(getTopAssignment(node)) !== -1
            ) {
                continue
            }

            // Report.
            context.report({
                node,
                loc: getLocation(node),
                message:
                    "Unexpected access to 'exports'. " +
                    "Use 'module.exports' instead.",
            })
        }
    }

    /**
     * Enforces `exports`.
     * This warns references of `module.exports`.
     *
     * @returns {void}
     */
    function enforceExports() {
        const globalScope = context.getScope()
        const exportsNodes = getExportsNodes(globalScope)
        const moduleExportsNodes = getModuleExportsNodes(globalScope)
        const assignList = batchAssignAllowed
            ? createAssignmentList(exportsNodes)
            : []
        const batchAssignList = []

        for (const node of moduleExportsNodes) {
            // Skip if it's a batch assignment.
            if (assignList.length > 0) {
                const found = assignList.indexOf(getTopAssignment(node))
                if (found !== -1) {
                    batchAssignList.push(assignList[found])
                    assignList.splice(found, 1)
                    continue
                }
            }

            // Report.
            context.report({
                node,
                loc: getLocation(node),
                message:
                    "Unexpected access to 'module.exports'. " +
                    "Use 'exports' instead.",
            })
        }

        // Disallow direct assignment to `exports`.
        for (const node of exportsNodes) {
            // Skip if it's not assignee.
            if (!isAssignee(node)) {
                continue
            }

            // Check if it's a batch assignment.
            if (batchAssignList.indexOf(getTopAssignment(node)) !== -1) {
                continue
            }

            // Report.
            context.report({
                node,
                loc: getLocation(node),
                message:
                    "Unexpected assignment to 'exports'. " +
                    "Don't modify 'exports' itself.",
            })
        }
    }

    return {
        "Program:exit"() {
            switch (mode) {
                case "module.exports":
                    enforceModuleExports()
                    break
                case "exports":
                    enforceExports()
                    break

                // no default
            }
        },
    }
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    create,
    meta: {
        docs: {
            description: "enforce either `module.exports` or `exports`",
            category: "Stylistic Issues",
            recommended: false,
        },
        fixable: false,
        schema: [
            { //
                enum: ["module.exports", "exports"],
            },
            {
                type: "object",
                properties: {allowBatchAssign: {type: "boolean"}},
                additionalProperties: false,
            },
        ],
    },
}
