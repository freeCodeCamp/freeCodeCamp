/**
 * @fileoverview Rule to disallow deprecated API.
 * @author Toru Nagashima
 * @copyright 2016 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const assign = require("object-assign")
const deprecatedApis = require("../util/deprecated-apis")
const getValueIfString = require("../util/get-value-if-string")

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const SENTINEL_TYPE = /^(?:.+?Statement|.+?Declaration|(?:Array|ArrowFunction|Assignment|Call|Class|Function|Member|New|Object)Expression|AssignmentPattern|Program|VariableDeclarator)$/
const MODULE_ITEMS = getDeprecatedItems(deprecatedApis.modules, [], [])
const GLOBAL_ITEMS = getDeprecatedItems(deprecatedApis.globals, [], [])

/**
 * Gets the array of deprecated items.
 *
 * It's the paths which are separated by dots.
 * E.g. `buffer.Buffer`, `events.EventEmitter.listenerCount`
 *
 * @param {object} definition - The definition of deprecated APIs.
 * @param {string[]} result - The array of the result.
 * @param {string[]} stack - The array to manage the stack of paths.
 * @returns {string[]} `result`.
 */
function getDeprecatedItems(definition, result, stack) {
    for (const key of Object.keys(definition)) {
        const item = definition[key]

        if (key === "$call") {
            result.push(`${stack.join(".")}()`)
        }
        else if (key === "$constructor") {
            result.push(`new ${stack.join(".")}()`)
        }
        else {
            stack.push(key)

            if (item.$deprecated) {
                result.push(stack.join("."))
            }
            else {
                getDeprecatedItems(item, result, stack)
            }

            stack.pop()
        }
    }

    return result
}

/**
 * Converts from a version number to a version text to display.
 *
 * @param {number} value - A version number to convert.
 * @returns {string} Covnerted text.
 */
function toVersionText(value) {
    if (value <= 0.12) {
        return value.toFixed(2)
    }
    if (value < 1) {
        return value.toFixed(1)
    }
    return String(value)
}

/**
 * Makes a replacement message.
 *
 * @param {string|null} replacedBy - The text of substitute way.
 * @returns {string} Replacement message.
 */
function toReplaceMessage(replacedBy) {
    return replacedBy ? ` Use ${replacedBy} instead.` : ""
}

/**
 * Gets the property name from a MemberExpression node or a Property node.
 *
 * @param {ASTNode} node - A node to get.
 * @returns {string|null} The property name of the node.
 */
function getPropertyName(node) {
    switch (node.type) {
        case "MemberExpression":
            if (node.computed) {
                return getValueIfString(node.property)
            }
            return node.property.name

        case "Property":
            if (node.computed) {
                return getValueIfString(node.key)
            }
            if (node.key.type === "Literal") {
                return String(node.key.value)
            }
            return node.key.name

        // no default
    }

    /* istanbul ignore next: unreachable */
    return null
}

/**
 * Checks a given node is a ImportDeclaration node.
 *
 * @param {ASTNode} node - A node to check.
 * @returns {boolean} `true` if the node is a ImportDeclaration node.
 */
function isImportDeclaration(node) {
    return node.type === "ImportDeclaration"
}

/**
 * Finds the variable object of a given Identifier node.
 *
 * @param {ASTNode} node - An Identifier node to find.
 * @param {escope.Scope} initialScope - A scope to start searching.
 * @returns {escope.Variable} Found variable object.
 */
function findVariable(node, initialScope) {
    const location = node.range[0]
    let variable = null

    // Dive into the scope that the node exists.
    for (const childScope of initialScope.childScopes) {
        const range = childScope.block.range

        if (range[0] <= location && location < range[1]) {
            variable = findVariable(node, childScope)
            if (variable != null) {
                return variable
            }
        }
    }

    // Find the variable of that name in this scope or ancestor scopes.
    let scope = initialScope
    while (scope != null) {
        variable = scope.set.get(node.name)
        if (variable != null) {
            return variable
        }

        scope = scope.upper
    }

    return null
}

/**
 * Gets the top member expression node.
 *
 * @param {ASTNode} identifier - The node to get.
 * @returns {ASTNode} The top member expression node.
 */
function getTopMemberExpression(identifier) {
    if (identifier.type !== "Identifier" && identifier.type !== "Literal") {
        return identifier
    }

    let node = identifier
    while (node.parent.type === "MemberExpression") {
        node = node.parent
    }

    return node
}

/**
 * The definition of this rule.
 *
 * @param {RuleContext} context - The rule context to check.
 * @returns {object} The definition of this rule.
 */
function create(context) {
    const options = context.options[0] || {}
    const ignoredModuleItems = options.ignoreModuleItems || []
    const ignoredGlobalItems = options.ignoreGlobalItems || []
    let globalScope = null
    const varStack = []

    /**
     * Reports a use of a deprecated API.
     *
     * @param {ASTNode} node - A node to report.
     * @param {string} name - The name of a deprecated API.
     * @param {{since: number, replacedBy: string}} info - Information of the API.
     * @returns {void}
     */
    function report(node, name, info) {
        context.report({
            node,
            loc: getTopMemberExpression(node).loc,
            message: "{{name}} was deprecated since v{{version}}.{{replace}}",
            data: {
                name,
                version: toVersionText(info.since),
                replace: toReplaceMessage(info.replacedBy),
            },
        })
    }

    /**
     * Reports a use of a deprecated module.
     *
     * @param {ASTNode} node - A node to report.
     * @param {string} name - The name of a deprecated module.
     * @param {{since: number, replacedBy: string, global: boolean}} info - Information of the module.
     * @returns {void}
     */
    function reportModule(node, name, info) {
        if (ignoredModuleItems.indexOf(name) === -1) {
            report(node, `'${name}' module`, info)
        }
    }

    /**
     * Reports a use of a deprecated property.
     *
     * @param {ASTNode} node - A node to report.
     * @param {string[]} path - The path to a deprecated property.
     * @param {{since: number, replacedBy: string, global: boolean}} info - Information of the property.
     * @returns {void}
     */
    function reportCall(node, path, info) {
        const ignored = info.global ? ignoredGlobalItems : ignoredModuleItems
        const name = `${path.join(".")}()`

        if (ignored.indexOf(name) === -1) {
            report(node, `'${name}'`, info)
        }
    }

    /**
     * Reports a use of a deprecated property.
     *
     * @param {ASTNode} node - A node to report.
     * @param {string[]} path - The path to a deprecated property.
     * @param {{since: number, replacedBy: string, global: boolean}} info - Information of the property.
     * @returns {void}
     */
    function reportConstructor(node, path, info) {
        const ignored = info.global ? ignoredGlobalItems : ignoredModuleItems
        const name = `new ${path.join(".")}()`

        if (ignored.indexOf(name) === -1) {
            report(node, `'${name}'`, info)
        }
    }

    /**
     * Reports a use of a deprecated property.
     *
     * @param {ASTNode} node - A node to report.
     * @param {string[]} path - The path to a deprecated property.
     * @param {string} key - The name of the property.
     * @param {{since: number, replacedBy: string, global: boolean}} info - Information of the property.
     * @returns {void}
     */
    function reportProperty(node, path, key, info) {
        const ignored = info.global ? ignoredGlobalItems : ignoredModuleItems
        const name = `${path.join(".")}.${key}`

        if (ignored.indexOf(name) === -1) {
            report(node, `'${name}'`, info)
        }
    }

    /**
     * Checks violations in destructuring assignments.
     *
     * @param {ASTNode} node - A pattern node to check.
     * @param {string[]} path - The path to a deprecated property.
     * @param {object} infoMap - A map of properties' information.
     * @returns {void}
     */
    function checkDestructuring(node, path, infoMap) {
        switch (node.type) {
            case "AssignmentPattern":
                checkDestructuring(node.left, path, infoMap)
                break

            case "Identifier": {
                const variable = findVariable(node, globalScope)
                if (variable != null) {
                    checkVariable(variable, path, infoMap)
                }
                break
            }
            case "ObjectPattern":
                for (const property of node.properties) {
                    const key = getPropertyName(property)
                    if (key != null && hasOwnProperty.call(infoMap, key)) {
                        const keyInfo = infoMap[key]
                        if (keyInfo.$deprecated) {
                            reportProperty(property.key, path, key, keyInfo)
                        }
                        else {
                            path.push(key)
                            checkDestructuring(property.value, path, keyInfo)
                            path.pop()
                        }
                    }
                }
                break

            // no default
        }
    }

    /**
     * Checks violations in properties.
     *
     * @param {ASTNode} root - A node to check.
     * @param {string[]} path - The path to a deprecated property.
     * @param {object} infoMap - A map of properties' information.
     * @returns {void}
     */
    function checkProperties(root, path, infoMap) { //eslint-disable-line complexity
        let node = root
        while (!SENTINEL_TYPE.test(node.parent.type)) {
            node = node.parent
        }

        const parent = node.parent
        switch (parent.type) {
            case "CallExpression":
                if (parent.callee === node && infoMap.$call != null) {
                    reportCall(parent, path, infoMap.$call)
                }
                break

            case "NewExpression":
                if (parent.callee === node && infoMap.$constructor != null) {
                    reportConstructor(parent, path, infoMap.$constructor)
                }
                break

            case "MemberExpression":
                if (parent.object === node) {
                    const key = getPropertyName(parent)
                    if (key != null && hasOwnProperty.call(infoMap, key)) {
                        const keyInfo = infoMap[key]
                        if (keyInfo.$deprecated) {
                            reportProperty(parent.property, path, key, keyInfo)
                        }
                        else {
                            path.push(key)
                            checkProperties(parent, path, keyInfo)
                            path.pop()
                        }
                    }
                }
                break

            case "AssignmentExpression":
                if (parent.right === node) {
                    checkDestructuring(parent.left, path, infoMap)
                    checkProperties(parent, path, infoMap)
                }
                break

            case "AssignmentPattern":
                if (parent.right === node) {
                    checkDestructuring(parent.left, path, infoMap)
                }
                break

            case "VariableDeclarator":
                if (parent.init === node) {
                    checkDestructuring(parent.id, path, infoMap)
                }
                break

            // no default
        }
    }

    /**
     * Checks violations in the references of a given variable.
     *
     * @param {escope.Variable} variable - A variable to check.
     * @param {string[]} path - The path to a deprecated property.
     * @param {object} infoMap - A map of properties' information.
     * @returns {void}
     */
    function checkVariable(variable, path, infoMap) {
        if (varStack.indexOf(variable) !== -1) {
            return
        }
        varStack.push(variable)

        for (const reference of variable.references.filter(r => r.isRead())) {
            checkProperties(reference.identifier, path, infoMap)
        }

        varStack.pop()
    }

    /**
     * Checks violations in a ModuleSpecifier node.
     *
     * @param {ASTNode} node - A ModuleSpecifier node to check.
     * @param {string[]} path - The path to a deprecated property.
     * @param {object} infoMap - A map of properties' information.
     * @returns {void}
     */
    function checkImportSpecifier(node, path, infoMap) {
        switch (node.type) {
            case "ImportSpecifier": {
                const key = node.imported.name
                if (hasOwnProperty.call(infoMap, key)) {
                    const keyInfo = infoMap[key]
                    if (keyInfo.$deprecated) {
                        reportProperty(node.imported, path, key, keyInfo)
                    }
                    else {
                        path.push(key)
                        checkVariable(
                            findVariable(node.local, globalScope),
                            path,
                            keyInfo
                        )
                        path.pop()
                    }
                }
                break
            }
            case "ImportDefaultSpecifier":
                checkVariable(
                    findVariable(node.local, globalScope),
                    path,
                    infoMap
                )
                break

            case "ImportNamespaceSpecifier":
                checkVariable(
                    findVariable(node.local, globalScope),
                    path,
                    assign({}, infoMap, {default: infoMap})
                )
                break

            // no default
        }
    }

    /**
     * Checks violations for CommonJS modules.
     * @returns {void}
     */
    function checkCommonJsModules() {
        const infoMap = deprecatedApis.modules
        const variable = globalScope.set.get("require")

        if (variable == null || variable.defs.length !== 0) {
            return
        }

        for (const reference of variable.references.filter(r => r.isRead())) {
            const id = reference.identifier
            const node = id.parent

            if (node.type === "CallExpression" && node.callee === id) {
                const key = getValueIfString(node.arguments[0])
                if (key != null && hasOwnProperty.call(infoMap, key)) {
                    const moduleInfo = infoMap[key]
                    if (moduleInfo.$deprecated) {
                        reportModule(node, key, moduleInfo)
                    }
                    else {
                        checkProperties(node, [key], moduleInfo)
                    }
                }
            }
        }
    }

    /**
     * Checks violations for ES2015 modules.
     * @param {ASTNode} programNode - A program node to check.
     * @returns {void}
     */
    function checkES2015Modules(programNode) {
        const infoMap = deprecatedApis.modules

        for (const node of programNode.body.filter(isImportDeclaration)) {
            const key = node.source.value
            if (hasOwnProperty.call(infoMap, key)) {
                const moduleInfo = infoMap[key]
                if (moduleInfo.$deprecated) {
                    reportModule(node, key, moduleInfo)
                }
                else {
                    for (const specifier of node.specifiers) {
                        checkImportSpecifier(specifier, [key], moduleInfo)
                    }
                }
            }
        }
    }

    /**
     * Checks violations for global variables.
     * @returns {void}
     */
    function checkGlobals() {
        const infoMap = deprecatedApis.globals

        for (const key of Object.keys(infoMap)) {
            const keyInfo = infoMap[key]
            const variable = globalScope.set.get(key)

            if (variable != null && variable.defs.length === 0) {
                checkVariable(variable, [key], keyInfo)
            }
        }
    }

    return {
        "Program:exit"(node) {
            globalScope = context.getScope()

            checkCommonJsModules()
            checkES2015Modules(node)
            checkGlobals()
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
            description: "disallow deprecated APIs",
            category: "Best Practices",
            recommended: false,
        },
        fixable: false,
        schema: [
            {
                type: "object",
                properties: {
                    ignoreModuleItems: {
                        type: "array",
                        items: {enum: MODULE_ITEMS},
                        additionalItems: false,
                        uniqueItems: true,
                    },
                    ignoreGlobalItems: {
                        type: "array",
                        items: {enum: GLOBAL_ITEMS},
                        additionalItems: false,
                        uniqueItems: true,
                    },

                    // Deprecated since v4.2.0
                    ignoreIndirectDependencies: {type: "boolean"},
                },
                additionalProperties: false,
            },
        ],
    },
}
