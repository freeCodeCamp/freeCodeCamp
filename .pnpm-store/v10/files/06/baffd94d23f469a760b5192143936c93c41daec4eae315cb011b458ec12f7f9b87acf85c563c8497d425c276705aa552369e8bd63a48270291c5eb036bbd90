"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ABSENCE_MATCHERS = exports.PRESENCE_MATCHERS = exports.ALL_RETURNING_NODES = exports.METHODS_RETURNING_NODES = exports.PROPERTIES_RETURNING_NODES = exports.LIBRARY_MODULES = exports.TESTING_FRAMEWORK_SETUP_HOOKS = exports.EVENTS_SIMULATORS = exports.DEBUG_UTILS = exports.ASYNC_UTILS = exports.ALL_QUERIES_COMBINATIONS = exports.ASYNC_QUERIES_COMBINATIONS = exports.SYNC_QUERIES_COMBINATIONS = exports.ALL_QUERIES_METHODS = exports.ALL_QUERIES_VARIANTS = exports.ASYNC_QUERIES_VARIANTS = exports.SYNC_QUERIES_VARIANTS = exports.getDocsUrl = exports.combineQueries = void 0;
__exportStar(require("./file-import"), exports);
__exportStar(require("./types"), exports);
const combineQueries = (variants, methods) => {
    const combinedQueries = [];
    variants.forEach((variant) => {
        const variantPrefix = variant.replace('By', '');
        methods.forEach((method) => {
            combinedQueries.push(`${variantPrefix}${method}`);
        });
    });
    return combinedQueries;
};
exports.combineQueries = combineQueries;
const getDocsUrl = (ruleName) => `https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/${ruleName}.md`;
exports.getDocsUrl = getDocsUrl;
const LIBRARY_MODULES = [
    '@testing-library/dom',
    '@testing-library/angular',
    '@testing-library/react',
    '@testing-library/preact',
    '@testing-library/vue',
    '@testing-library/svelte',
    '@marko/testing-library',
];
exports.LIBRARY_MODULES = LIBRARY_MODULES;
const SYNC_QUERIES_VARIANTS = ['getBy', 'getAllBy', 'queryBy', 'queryAllBy'];
exports.SYNC_QUERIES_VARIANTS = SYNC_QUERIES_VARIANTS;
const ASYNC_QUERIES_VARIANTS = ['findBy', 'findAllBy'];
exports.ASYNC_QUERIES_VARIANTS = ASYNC_QUERIES_VARIANTS;
const ALL_QUERIES_VARIANTS = [
    ...SYNC_QUERIES_VARIANTS,
    ...ASYNC_QUERIES_VARIANTS,
];
exports.ALL_QUERIES_VARIANTS = ALL_QUERIES_VARIANTS;
const ALL_QUERIES_METHODS = [
    'ByLabelText',
    'ByPlaceholderText',
    'ByText',
    'ByAltText',
    'ByTitle',
    'ByDisplayValue',
    'ByRole',
    'ByTestId',
];
exports.ALL_QUERIES_METHODS = ALL_QUERIES_METHODS;
const SYNC_QUERIES_COMBINATIONS = combineQueries(SYNC_QUERIES_VARIANTS, ALL_QUERIES_METHODS);
exports.SYNC_QUERIES_COMBINATIONS = SYNC_QUERIES_COMBINATIONS;
const ASYNC_QUERIES_COMBINATIONS = combineQueries(ASYNC_QUERIES_VARIANTS, ALL_QUERIES_METHODS);
exports.ASYNC_QUERIES_COMBINATIONS = ASYNC_QUERIES_COMBINATIONS;
const ALL_QUERIES_COMBINATIONS = [
    ...SYNC_QUERIES_COMBINATIONS,
    ...ASYNC_QUERIES_COMBINATIONS,
];
exports.ALL_QUERIES_COMBINATIONS = ALL_QUERIES_COMBINATIONS;
const ASYNC_UTILS = [
    'waitFor',
    'waitForElementToBeRemoved',
    'wait',
    'waitForElement',
    'waitForDomChange',
];
exports.ASYNC_UTILS = ASYNC_UTILS;
const DEBUG_UTILS = [
    'debug',
    'logTestingPlaygroundURL',
    'prettyDOM',
    'logRoles',
    'logDOM',
    'prettyFormat',
];
exports.DEBUG_UTILS = DEBUG_UTILS;
const EVENTS_SIMULATORS = ['fireEvent', 'userEvent'];
exports.EVENTS_SIMULATORS = EVENTS_SIMULATORS;
const TESTING_FRAMEWORK_SETUP_HOOKS = ['beforeEach', 'beforeAll'];
exports.TESTING_FRAMEWORK_SETUP_HOOKS = TESTING_FRAMEWORK_SETUP_HOOKS;
const PROPERTIES_RETURNING_NODES = [
    'activeElement',
    'children',
    'childElementCount',
    'firstChild',
    'firstElementChild',
    'fullscreenElement',
    'lastChild',
    'lastElementChild',
    'nextElementSibling',
    'nextSibling',
    'parentElement',
    'parentNode',
    'pointerLockElement',
    'previousElementSibling',
    'previousSibling',
    'rootNode',
    'scripts',
];
exports.PROPERTIES_RETURNING_NODES = PROPERTIES_RETURNING_NODES;
const METHODS_RETURNING_NODES = [
    'closest',
    'getElementById',
    'getElementsByClassName',
    'getElementsByName',
    'getElementsByTagName',
    'getElementsByTagNameNS',
    'querySelector',
    'querySelectorAll',
];
exports.METHODS_RETURNING_NODES = METHODS_RETURNING_NODES;
const ALL_RETURNING_NODES = [
    ...PROPERTIES_RETURNING_NODES,
    ...METHODS_RETURNING_NODES,
];
exports.ALL_RETURNING_NODES = ALL_RETURNING_NODES;
const PRESENCE_MATCHERS = ['toBeInTheDocument', 'toBeTruthy', 'toBeDefined'];
exports.PRESENCE_MATCHERS = PRESENCE_MATCHERS;
const ABSENCE_MATCHERS = ['toBeNull', 'toBeFalsy'];
exports.ABSENCE_MATCHERS = ABSENCE_MATCHERS;
