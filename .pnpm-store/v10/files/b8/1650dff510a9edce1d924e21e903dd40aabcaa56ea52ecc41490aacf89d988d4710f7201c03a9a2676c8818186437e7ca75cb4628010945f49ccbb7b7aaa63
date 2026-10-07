"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.namingConvention = void 0;
const path_1 = __importDefault(require("path"));
const case_validator_1 = require("../utils/case-validator");
exports.namingConvention = {
    meta: {
        type: 'suggestion',
        schema: [
            {
                type: 'object',
                properties: {
                    rule: {
                        anyOf: [
                            { enum: ['camelCase', 'kebab-case', 'PascalCase', 'snake_case'] },
                            { type: 'string', format: 'regex' },
                        ],
                        default: 'kebab-case',
                    },
                    excepts: {
                        type: 'array',
                        items: { type: 'string', format: 'regex' },
                        default: ['index'],
                    },
                },
                additionalProperties: false,
            },
        ],
    },
    create: context => {
        var _a;
        const { rule: ruleName, excepts } = (_a = context.options[0]) !== null && _a !== void 0 ? _a : {
            rule: 'kebab-case',
            excepts: ['index'],
        };
        const validator = (0, case_validator_1.getCaseValidator)(ruleName, excepts);
        return {
            Program: node => {
                const [filename, ...rest] = path_1.default.basename(context.getFilename()).split('.');
                if (filename.length === 0) {
                    context.report({ node, message: 'The filename is empty' });
                }
                if (validator.validate(filename))
                    return;
                const suggestion = (() => {
                    try {
                        const recommendedName = validator.getRecommendedName(filename);
                        return ` Should rename to ${[recommendedName, ...rest].join('.')}.`;
                    }
                    catch (_a) {
                        // nothing to do
                    }
                })();
                const message = `The filename must follow the rule: '${ruleName}'.${suggestion !== null && suggestion !== void 0 ? suggestion : ''}`;
                context.report({ node, message });
            },
        };
    },
};
