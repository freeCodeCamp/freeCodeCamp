"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RULE_NAME = void 0;
const create_testing_library_rule_1 = require("../create-testing-library-rule");
const node_utils_1 = require("../node-utils");
exports.RULE_NAME = 'consistent-data-testid';
const FILENAME_PLACEHOLDER = '{fileName}';
exports.default = (0, create_testing_library_rule_1.createTestingLibraryRule)({
    name: exports.RULE_NAME,
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Ensures consistent usage of `data-testid`',
            recommendedConfig: {
                dom: false,
                angular: false,
                react: false,
                vue: false,
                marko: false,
            },
        },
        messages: {
            consistentDataTestId: '`{{attr}}` "{{value}}" should match `{{regex}}`',
            consistentDataTestIdCustomMessage: '`{{message}}`',
        },
        schema: [
            {
                type: 'object',
                default: {},
                additionalProperties: false,
                required: ['testIdPattern'],
                properties: {
                    testIdPattern: {
                        type: 'string',
                    },
                    testIdAttribute: {
                        default: 'data-testid',
                        oneOf: [
                            {
                                type: 'string',
                            },
                            {
                                type: 'array',
                                items: {
                                    type: 'string',
                                },
                            },
                        ],
                    },
                    customMessage: {
                        default: undefined,
                        type: 'string',
                    },
                },
            },
        ],
    },
    defaultOptions: [
        {
            testIdPattern: '',
            testIdAttribute: 'data-testid',
            customMessage: undefined,
        },
    ],
    detectionOptions: {
        skipRuleReportingCheck: true,
    },
    create: (context, [options]) => {
        const { getFilename } = context;
        const { testIdPattern, testIdAttribute: attr, customMessage } = options;
        function getFileNameData() {
            var _a;
            const splitPath = getFilename().split('/');
            const fileNameWithExtension = (_a = splitPath.pop()) !== null && _a !== void 0 ? _a : '';
            if (fileNameWithExtension.includes('[') ||
                fileNameWithExtension.includes(']')) {
                return { fileName: undefined };
            }
            const parent = splitPath.pop();
            const fileName = fileNameWithExtension.split('.').shift();
            return {
                fileName: fileName === 'index' ? parent : fileName,
            };
        }
        function getTestIdValidator(fileName) {
            return new RegExp(testIdPattern.replace(FILENAME_PLACEHOLDER, fileName));
        }
        function isTestIdAttribute(name) {
            var _a;
            if (typeof attr === 'string') {
                return attr === name;
            }
            else {
                return (_a = attr === null || attr === void 0 ? void 0 : attr.includes(name)) !== null && _a !== void 0 ? _a : false;
            }
        }
        function getErrorMessageId() {
            if (customMessage === undefined) {
                return 'consistentDataTestId';
            }
            return 'consistentDataTestIdCustomMessage';
        }
        return {
            JSXIdentifier: (node) => {
                if (!node.parent ||
                    !(0, node_utils_1.isJSXAttribute)(node.parent) ||
                    !(0, node_utils_1.isLiteral)(node.parent.value) ||
                    !isTestIdAttribute(node.name)) {
                    return;
                }
                const value = node.parent.value.value;
                const { fileName } = getFileNameData();
                const regex = getTestIdValidator(fileName !== null && fileName !== void 0 ? fileName : '');
                if (value && typeof value === 'string' && !regex.test(value)) {
                    context.report({
                        node,
                        messageId: getErrorMessageId(),
                        data: {
                            attr: node.name,
                            value,
                            regex,
                            message: customMessage,
                        },
                    });
                }
            },
        };
    },
});
