"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pluralize = void 0;
const path_1 = __importDefault(require("path"));
const pluralize_1 = require("../utils/pluralize");
const fetchFilename = (context) => {
    const absolutePath = path_1.default.resolve(context.getFilename());
    const [dirname, basename] = absolutePath.split(path_1.default.sep).slice(-2);
    const filename = basename.split('.');
    return [dirname, filename];
};
exports.pluralize = {
    meta: {
        type: 'suggestion',
        schema: [
            {
                type: 'object',
                properties: {
                    parentDir: { enum: ['singular', 'plural'] },
                    file: { enum: ['singular', 'plural'] },
                },
                minProperties: 1,
            },
        ],
    },
    create: context => {
        var _a;
        const pluralize = (0, pluralize_1.getPluralize)(context);
        const rules = (_a = context.options[0]) !== null && _a !== void 0 ? _a : {};
        const correctedName = (name, rule) => (rule ? pluralize.correct(name, rule) : name);
        const isValidName = (name, rule) => (rule ? pluralize.isValidName(name, rule) : true);
        return {
            Program: node => {
                const [dirname, [filename, ...rest]] = fetchFilename(context);
                if (isValidName(dirname, rules.parentDir) && isValidName(filename, rules.file)) {
                    return;
                }
                context.report({
                    node: node,
                    message: 'The filename must follow the pluralize rule. Should rename to {{ dirname }}/{{ filename }}.{{ extname }}',
                    data: {
                        dirname: correctedName(dirname, rules.parentDir),
                        filename: correctedName(filename, rules.file),
                        extname: rest.join('.'),
                    },
                });
            },
        };
    },
};
