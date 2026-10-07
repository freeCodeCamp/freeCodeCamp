"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.detectTestingLibraryUtils = void 0;
const utils_1 = require("@typescript-eslint/utils");
const node_utils_1 = require("../node-utils");
const utils_2 = require("../utils");
const SETTING_OPTION_OFF = 'off';
const USER_EVENT_PACKAGE = '@testing-library/user-event';
const REACT_DOM_TEST_UTILS_PACKAGE = 'react-dom/test-utils';
const FIRE_EVENT_NAME = 'fireEvent';
const CREATE_EVENT_NAME = 'createEvent';
const USER_EVENT_NAME = 'userEvent';
const RENDER_NAME = 'render';
function detectTestingLibraryUtils(ruleCreate, { skipRuleReportingCheck = false } = {}) {
    return (context, optionsWithDefault) => {
        const importedTestingLibraryNodes = [];
        let importedCustomModuleNode = null;
        let importedUserEventLibraryNode = null;
        let importedReactDomTestUtilsNode = null;
        const customModuleSetting = context.settings['testing-library/utils-module'];
        const customRendersSetting = context.settings['testing-library/custom-renders'];
        const customQueriesSetting = context.settings['testing-library/custom-queries'];
        function isPotentialTestingLibraryFunction(node, isPotentialFunctionCallback) {
            if (!node) {
                return false;
            }
            const referenceNode = (0, node_utils_1.getReferenceNode)(node);
            const referenceNodeIdentifier = (0, node_utils_1.getPropertyIdentifierNode)(referenceNode);
            if (!referenceNodeIdentifier) {
                return false;
            }
            const importedUtilSpecifier = getTestingLibraryImportedUtilSpecifier(referenceNodeIdentifier);
            const originalNodeName = (0, node_utils_1.isImportSpecifier)(importedUtilSpecifier) &&
                importedUtilSpecifier.local.name !== importedUtilSpecifier.imported.name
                ? importedUtilSpecifier.imported.name
                : undefined;
            if (!isPotentialFunctionCallback(node.name, originalNodeName)) {
                return false;
            }
            if (isAggressiveModuleReportingEnabled()) {
                return true;
            }
            return isNodeComingFromTestingLibrary(referenceNodeIdentifier);
        }
        const isAggressiveModuleReportingEnabled = () => !customModuleSetting;
        const isAggressiveRenderReportingEnabled = () => {
            const isSwitchedOff = customRendersSetting === SETTING_OPTION_OFF;
            const hasCustomOptions = Array.isArray(customRendersSetting) && customRendersSetting.length > 0;
            return !isSwitchedOff && !hasCustomOptions;
        };
        const isAggressiveQueryReportingEnabled = () => {
            const isSwitchedOff = customQueriesSetting === SETTING_OPTION_OFF;
            const hasCustomOptions = Array.isArray(customQueriesSetting) && customQueriesSetting.length > 0;
            return !isSwitchedOff && !hasCustomOptions;
        };
        const getCustomModule = () => {
            if (!isAggressiveModuleReportingEnabled() &&
                customModuleSetting !== SETTING_OPTION_OFF) {
                return customModuleSetting;
            }
            return undefined;
        };
        const getCustomRenders = () => {
            if (!isAggressiveRenderReportingEnabled() &&
                customRendersSetting !== SETTING_OPTION_OFF) {
                return customRendersSetting;
            }
            return [];
        };
        const getCustomQueries = () => {
            if (!isAggressiveQueryReportingEnabled() &&
                customQueriesSetting !== SETTING_OPTION_OFF) {
                return customQueriesSetting;
            }
            return [];
        };
        const getTestingLibraryImportNode = () => {
            return importedTestingLibraryNodes[0];
        };
        const getAllTestingLibraryImportNodes = () => {
            return importedTestingLibraryNodes;
        };
        const getCustomModuleImportNode = () => {
            return importedCustomModuleNode;
        };
        const getTestingLibraryImportName = () => {
            return (0, node_utils_1.getImportModuleName)(importedTestingLibraryNodes[0]);
        };
        const getCustomModuleImportName = () => {
            return (0, node_utils_1.getImportModuleName)(importedCustomModuleNode);
        };
        const isTestingLibraryImported = (isStrict = false) => {
            const isSomeModuleImported = importedTestingLibraryNodes.length !== 0 || !!importedCustomModuleNode;
            return ((!isStrict && isAggressiveModuleReportingEnabled()) ||
                isSomeModuleImported);
        };
        const isQuery = (node) => {
            const hasQueryPattern = /^(get|query|find)(All)?By.+$/.test(node.name);
            if (!hasQueryPattern) {
                return false;
            }
            if (isAggressiveQueryReportingEnabled()) {
                return true;
            }
            const customQueries = getCustomQueries();
            const isBuiltInQuery = utils_2.ALL_QUERIES_COMBINATIONS.includes(node.name);
            const isReportableCustomQuery = customQueries.some((pattern) => new RegExp(pattern).test(node.name));
            return isBuiltInQuery || isReportableCustomQuery;
        };
        const isGetQueryVariant = (node) => {
            return isQuery(node) && node.name.startsWith('get');
        };
        const isQueryQueryVariant = (node) => {
            return isQuery(node) && node.name.startsWith('query');
        };
        const isFindQueryVariant = (node) => {
            return isQuery(node) && node.name.startsWith('find');
        };
        const isSyncQuery = (node) => {
            return isGetQueryVariant(node) || isQueryQueryVariant(node);
        };
        const isAsyncQuery = (node) => {
            return isFindQueryVariant(node);
        };
        const isCustomQuery = (node) => {
            return isQuery(node) && !utils_2.ALL_QUERIES_COMBINATIONS.includes(node.name);
        };
        const isBuiltInQuery = (node) => {
            return isQuery(node) && utils_2.ALL_QUERIES_COMBINATIONS.includes(node.name);
        };
        const isAsyncUtil = (node, validNames = utils_2.ASYNC_UTILS) => {
            return isPotentialTestingLibraryFunction(node, (identifierNodeName, originalNodeName) => {
                return (validNames.includes(identifierNodeName) ||
                    (!!originalNodeName &&
                        validNames.includes(originalNodeName)));
            });
        };
        const isFireEventUtil = (node) => {
            return isPotentialTestingLibraryFunction(node, (identifierNodeName, originalNodeName) => {
                return [identifierNodeName, originalNodeName].includes('fireEvent');
            });
        };
        const isUserEventUtil = (node) => {
            const userEvent = findImportedUserEventSpecifier();
            let userEventName;
            if (userEvent) {
                userEventName = userEvent.name;
            }
            else if (isAggressiveModuleReportingEnabled()) {
                userEventName = USER_EVENT_NAME;
            }
            if (!userEventName) {
                return false;
            }
            return node.name === userEventName;
        };
        const isFireEventMethod = (node) => {
            const fireEventUtil = findImportedTestingLibraryUtilSpecifier(FIRE_EVENT_NAME);
            let fireEventUtilName;
            if (fireEventUtil) {
                fireEventUtilName = utils_1.ASTUtils.isIdentifier(fireEventUtil)
                    ? fireEventUtil.name
                    : fireEventUtil.local.name;
            }
            else if (isAggressiveModuleReportingEnabled()) {
                fireEventUtilName = FIRE_EVENT_NAME;
            }
            if (!fireEventUtilName) {
                return false;
            }
            const parentMemberExpression = node.parent && (0, node_utils_1.isMemberExpression)(node.parent)
                ? node.parent
                : undefined;
            const parentCallExpression = node.parent && (0, node_utils_1.isCallExpression)(node.parent) ? node.parent : undefined;
            if (!parentMemberExpression && !parentCallExpression) {
                return false;
            }
            if (parentCallExpression) {
                return [fireEventUtilName, FIRE_EVENT_NAME].includes(node.name);
            }
            const definedParentMemberExpression = parentMemberExpression;
            const regularCall = utils_1.ASTUtils.isIdentifier(definedParentMemberExpression.object) &&
                (0, node_utils_1.isCallExpression)(definedParentMemberExpression.parent) &&
                definedParentMemberExpression.object.name === fireEventUtilName &&
                node.name !== FIRE_EVENT_NAME &&
                node.name !== fireEventUtilName;
            const wildcardCall = (0, node_utils_1.isMemberExpression)(definedParentMemberExpression.object) &&
                utils_1.ASTUtils.isIdentifier(definedParentMemberExpression.object.object) &&
                definedParentMemberExpression.object.object.name ===
                    fireEventUtilName &&
                utils_1.ASTUtils.isIdentifier(definedParentMemberExpression.object.property) &&
                definedParentMemberExpression.object.property.name ===
                    FIRE_EVENT_NAME &&
                node.name !== FIRE_EVENT_NAME &&
                node.name !== fireEventUtilName;
            const wildcardCallWithCallExpression = utils_1.ASTUtils.isIdentifier(definedParentMemberExpression.object) &&
                definedParentMemberExpression.object.name === fireEventUtilName &&
                utils_1.ASTUtils.isIdentifier(definedParentMemberExpression.property) &&
                definedParentMemberExpression.property.name === FIRE_EVENT_NAME &&
                !(0, node_utils_1.isMemberExpression)(definedParentMemberExpression.parent) &&
                node.name === FIRE_EVENT_NAME &&
                node.name !== fireEventUtilName;
            return regularCall || wildcardCall || wildcardCallWithCallExpression;
        };
        const isUserEventMethod = (node) => {
            const userEvent = findImportedUserEventSpecifier();
            let userEventName;
            if (userEvent) {
                userEventName = userEvent.name;
            }
            else if (isAggressiveModuleReportingEnabled()) {
                userEventName = USER_EVENT_NAME;
            }
            if (!userEventName) {
                return false;
            }
            const parentMemberExpression = node.parent && (0, node_utils_1.isMemberExpression)(node.parent)
                ? node.parent
                : undefined;
            if (!parentMemberExpression) {
                return false;
            }
            if ([userEventName, USER_EVENT_NAME].includes(node.name) ||
                (utils_1.ASTUtils.isIdentifier(parentMemberExpression.object) &&
                    parentMemberExpression.object.name === node.name)) {
                return false;
            }
            return (utils_1.ASTUtils.isIdentifier(parentMemberExpression.object) &&
                parentMemberExpression.object.name === userEventName);
        };
        const isRenderUtil = (node) => isPotentialTestingLibraryFunction(node, (identifierNodeName, originalNodeName) => {
            if (isAggressiveRenderReportingEnabled()) {
                return identifierNodeName.toLowerCase().includes(RENDER_NAME);
            }
            return [RENDER_NAME, ...getCustomRenders()].some((validRenderName) => validRenderName === identifierNodeName ||
                (Boolean(originalNodeName) &&
                    validRenderName === originalNodeName));
        });
        const isCreateEventUtil = (node) => {
            const isCreateEventCallback = (identifierNodeName, originalNodeName) => [identifierNodeName, originalNodeName].includes(CREATE_EVENT_NAME);
            if ((0, node_utils_1.isCallExpression)(node) &&
                (0, node_utils_1.isMemberExpression)(node.callee) &&
                utils_1.ASTUtils.isIdentifier(node.callee.object)) {
                return isPotentialTestingLibraryFunction(node.callee.object, isCreateEventCallback);
            }
            if ((0, node_utils_1.isCallExpression)(node) &&
                (0, node_utils_1.isMemberExpression)(node.callee) &&
                (0, node_utils_1.isMemberExpression)(node.callee.object) &&
                utils_1.ASTUtils.isIdentifier(node.callee.object.property)) {
                return isPotentialTestingLibraryFunction(node.callee.object.property, isCreateEventCallback);
            }
            const identifier = (0, node_utils_1.getDeepestIdentifierNode)(node);
            return isPotentialTestingLibraryFunction(identifier, isCreateEventCallback);
        };
        const isRenderVariableDeclarator = (node) => {
            if (!node.init) {
                return false;
            }
            const initIdentifierNode = (0, node_utils_1.getDeepestIdentifierNode)(node.init);
            if (!initIdentifierNode) {
                return false;
            }
            return isRenderUtil(initIdentifierNode);
        };
        const isDebugUtil = (identifierNode, validNames = utils_2.DEBUG_UTILS) => {
            const isBuiltInConsole = (0, node_utils_1.isMemberExpression)(identifierNode.parent) &&
                utils_1.ASTUtils.isIdentifier(identifierNode.parent.object) &&
                identifierNode.parent.object.name === 'console';
            return (!isBuiltInConsole &&
                isPotentialTestingLibraryFunction(identifierNode, (identifierNodeName, originalNodeName) => {
                    return (validNames.includes(identifierNodeName) ||
                        (!!originalNodeName &&
                            validNames.includes(originalNodeName)));
                }));
        };
        const isActUtil = (node) => {
            const isTestingLibraryAct = isPotentialTestingLibraryFunction(node, (identifierNodeName, originalNodeName) => {
                return [identifierNodeName, originalNodeName]
                    .filter(Boolean)
                    .includes('act');
            });
            const isReactDomTestUtilsAct = (() => {
                if (!importedReactDomTestUtilsNode) {
                    return false;
                }
                const referenceNode = (0, node_utils_1.getReferenceNode)(node);
                const referenceNodeIdentifier = (0, node_utils_1.getPropertyIdentifierNode)(referenceNode);
                if (!referenceNodeIdentifier) {
                    return false;
                }
                const importedUtilSpecifier = (0, node_utils_1.findImportSpecifier)(node.name, importedReactDomTestUtilsNode);
                if (!importedUtilSpecifier) {
                    return false;
                }
                const importDeclaration = (() => {
                    if ((0, node_utils_1.isImportDeclaration)(importedUtilSpecifier.parent)) {
                        return importedUtilSpecifier.parent;
                    }
                    const variableDeclarator = (0, node_utils_1.findClosestVariableDeclaratorNode)(importedUtilSpecifier);
                    if ((0, node_utils_1.isCallExpression)(variableDeclarator === null || variableDeclarator === void 0 ? void 0 : variableDeclarator.init)) {
                        return variableDeclarator === null || variableDeclarator === void 0 ? void 0 : variableDeclarator.init;
                    }
                    return undefined;
                })();
                if (!importDeclaration) {
                    return false;
                }
                const importDeclarationName = (0, node_utils_1.getImportModuleName)(importDeclaration);
                if (!importDeclarationName) {
                    return false;
                }
                if (importDeclarationName !== REACT_DOM_TEST_UTILS_PACKAGE) {
                    return false;
                }
                return (0, node_utils_1.hasImportMatch)(importedUtilSpecifier, referenceNodeIdentifier.name);
            })();
            return isTestingLibraryAct || isReactDomTestUtilsAct;
        };
        const isTestingLibraryUtil = (node) => {
            return (isAsyncUtil(node) ||
                isQuery(node) ||
                isRenderUtil(node) ||
                isFireEventMethod(node) ||
                isUserEventMethod(node) ||
                isActUtil(node) ||
                isCreateEventUtil(node));
        };
        const isPresenceAssert = (node) => {
            const { matcher, isNegated } = (0, node_utils_1.getAssertNodeInfo)(node);
            if (!matcher) {
                return false;
            }
            return isNegated
                ? utils_2.ABSENCE_MATCHERS.includes(matcher)
                : utils_2.PRESENCE_MATCHERS.includes(matcher);
        };
        const isAbsenceAssert = (node) => {
            const { matcher, isNegated } = (0, node_utils_1.getAssertNodeInfo)(node);
            if (!matcher) {
                return false;
            }
            return isNegated
                ? utils_2.PRESENCE_MATCHERS.includes(matcher)
                : utils_2.ABSENCE_MATCHERS.includes(matcher);
        };
        const isMatchingAssert = (node, matcherName) => {
            const { matcher } = (0, node_utils_1.getAssertNodeInfo)(node);
            if (!matcher) {
                return false;
            }
            return matcher === matcherName;
        };
        const findImportedTestingLibraryUtilSpecifier = (specifierName) => {
            var _a;
            const node = (_a = getCustomModuleImportNode()) !== null && _a !== void 0 ? _a : getTestingLibraryImportNode();
            if (!node) {
                return undefined;
            }
            return (0, node_utils_1.findImportSpecifier)(specifierName, node);
        };
        const findImportedUserEventSpecifier = () => {
            if (!importedUserEventLibraryNode) {
                return null;
            }
            if ((0, node_utils_1.isImportDeclaration)(importedUserEventLibraryNode)) {
                const userEventIdentifier = importedUserEventLibraryNode.specifiers.find((specifier) => (0, node_utils_1.isImportDefaultSpecifier)(specifier));
                if (userEventIdentifier) {
                    return userEventIdentifier.local;
                }
            }
            else {
                if (!utils_1.ASTUtils.isVariableDeclarator(importedUserEventLibraryNode.parent)) {
                    return null;
                }
                const requireNode = importedUserEventLibraryNode.parent;
                if (!utils_1.ASTUtils.isIdentifier(requireNode.id)) {
                    return null;
                }
                return requireNode.id;
            }
            return null;
        };
        const getTestingLibraryImportedUtilSpecifier = (node) => {
            var _a;
            const identifierName = (_a = (0, node_utils_1.getPropertyIdentifierNode)(node)) === null || _a === void 0 ? void 0 : _a.name;
            if (!identifierName) {
                return undefined;
            }
            return findImportedTestingLibraryUtilSpecifier(identifierName);
        };
        const canReportErrors = () => {
            return skipRuleReportingCheck || isTestingLibraryImported();
        };
        const isNodeComingFromTestingLibrary = (node) => {
            var _a;
            const importNode = getTestingLibraryImportedUtilSpecifier(node);
            if (!importNode) {
                return false;
            }
            const referenceNode = (0, node_utils_1.getReferenceNode)(node);
            const referenceNodeIdentifier = (0, node_utils_1.getPropertyIdentifierNode)(referenceNode);
            if (!referenceNodeIdentifier) {
                return false;
            }
            const importDeclaration = (() => {
                if ((0, node_utils_1.isImportDeclaration)(importNode.parent)) {
                    return importNode.parent;
                }
                const variableDeclarator = (0, node_utils_1.findClosestVariableDeclaratorNode)(importNode);
                if ((0, node_utils_1.isCallExpression)(variableDeclarator === null || variableDeclarator === void 0 ? void 0 : variableDeclarator.init)) {
                    return variableDeclarator === null || variableDeclarator === void 0 ? void 0 : variableDeclarator.init;
                }
                return undefined;
            })();
            if (!importDeclaration) {
                return false;
            }
            const importDeclarationName = (0, node_utils_1.getImportModuleName)(importDeclaration);
            if (!importDeclarationName) {
                return false;
            }
            const identifierName = (_a = (0, node_utils_1.getPropertyIdentifierNode)(node)) === null || _a === void 0 ? void 0 : _a.name;
            if (!identifierName) {
                return false;
            }
            const hasImportElementMatch = (0, node_utils_1.hasImportMatch)(importNode, identifierName);
            const hasImportModuleMatch = /testing-library/g.test(importDeclarationName) ||
                (typeof customModuleSetting === 'string' &&
                    importDeclarationName.endsWith(customModuleSetting));
            return hasImportElementMatch && hasImportModuleMatch;
        };
        const helpers = {
            getTestingLibraryImportNode,
            getAllTestingLibraryImportNodes,
            getCustomModuleImportNode,
            getTestingLibraryImportName,
            getCustomModuleImportName,
            isTestingLibraryImported,
            isTestingLibraryUtil,
            isGetQueryVariant,
            isQueryQueryVariant,
            isFindQueryVariant,
            isSyncQuery,
            isAsyncQuery,
            isQuery,
            isCustomQuery,
            isBuiltInQuery,
            isAsyncUtil,
            isFireEventUtil,
            isUserEventUtil,
            isFireEventMethod,
            isUserEventMethod,
            isRenderUtil,
            isCreateEventUtil,
            isRenderVariableDeclarator,
            isDebugUtil,
            isActUtil,
            isPresenceAssert,
            isMatchingAssert,
            isAbsenceAssert,
            canReportErrors,
            findImportedTestingLibraryUtilSpecifier,
            isNodeComingFromTestingLibrary,
        };
        const detectionInstructions = {
            ImportDeclaration(node) {
                if (typeof node.source.value !== 'string') {
                    return;
                }
                if (/testing-library/g.test(node.source.value)) {
                    importedTestingLibraryNodes.push(node);
                }
                const customModule = getCustomModule();
                if (customModule &&
                    !importedCustomModuleNode &&
                    node.source.value.endsWith(customModule)) {
                    importedCustomModuleNode = node;
                }
                if (!importedUserEventLibraryNode &&
                    node.source.value === USER_EVENT_PACKAGE) {
                    importedUserEventLibraryNode = node;
                }
                if (!importedUserEventLibraryNode &&
                    node.source.value === REACT_DOM_TEST_UTILS_PACKAGE) {
                    importedReactDomTestUtilsNode = node;
                }
            },
            [`CallExpression > Identifier[name="require"]`](node) {
                const callExpression = node.parent;
                const { arguments: args } = callExpression;
                if (args.some((arg) => (0, node_utils_1.isLiteral)(arg) &&
                    typeof arg.value === 'string' &&
                    /testing-library/g.test(arg.value))) {
                    importedTestingLibraryNodes.push(callExpression);
                }
                const customModule = getCustomModule();
                if (!importedCustomModuleNode &&
                    args.some((arg) => customModule &&
                        (0, node_utils_1.isLiteral)(arg) &&
                        typeof arg.value === 'string' &&
                        arg.value.endsWith(customModule))) {
                    importedCustomModuleNode = callExpression;
                }
                if (!importedCustomModuleNode &&
                    args.some((arg) => (0, node_utils_1.isLiteral)(arg) &&
                        typeof arg.value === 'string' &&
                        arg.value === USER_EVENT_PACKAGE)) {
                    importedUserEventLibraryNode = callExpression;
                }
                if (!importedReactDomTestUtilsNode &&
                    args.some((arg) => (0, node_utils_1.isLiteral)(arg) &&
                        typeof arg.value === 'string' &&
                        arg.value === REACT_DOM_TEST_UTILS_PACKAGE)) {
                    importedReactDomTestUtilsNode = callExpression;
                }
            },
        };
        const ruleInstructions = ruleCreate(context, optionsWithDefault, helpers);
        const enhancedRuleInstructions = {};
        const allKeys = new Set(Object.keys(detectionInstructions).concat(Object.keys(ruleInstructions)));
        allKeys.forEach((instruction) => {
            enhancedRuleInstructions[instruction] = (node) => {
                var _a, _b;
                if (instruction in detectionInstructions) {
                    (_a = detectionInstructions[instruction]) === null || _a === void 0 ? void 0 : _a.call(detectionInstructions, node);
                }
                if (canReportErrors() && ruleInstructions[instruction]) {
                    return (_b = ruleInstructions[instruction]) === null || _b === void 0 ? void 0 : _b.call(ruleInstructions, node);
                }
                return undefined;
            };
        });
        return enhancedRuleInstructions;
    };
}
exports.detectTestingLibraryUtils = detectTestingLibraryUtils;
