"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _AloneExportNamedIdentifierDetector_context, _AloneExportNamedIdentifierDetector_exportedIdentifiers, _AloneExportNamedIdentifierDetector_isExportAllDetected, _AloneExportNamedIdentifierDetector_isExportDefaultDetected;
Object.defineProperty(exports, "__esModule", { value: true });
exports.namedExport = void 0;
const path_1 = __importDefault(require("path"));
const pluralize_1 = require("../utils/pluralize");
const preset_rules_1 = require("../utils/preset-rules");
class AloneExportNamedIdentifierDetector {
    constructor(context) {
        _AloneExportNamedIdentifierDetector_context.set(this, void 0);
        _AloneExportNamedIdentifierDetector_exportedIdentifiers.set(this, new Set());
        _AloneExportNamedIdentifierDetector_isExportAllDetected.set(this, false);
        _AloneExportNamedIdentifierDetector_isExportDefaultDetected.set(this, false);
        __classPrivateFieldSet(this, _AloneExportNamedIdentifierDetector_context, context, "f");
    }
    get aloneExportNamedIdentifier() {
        if (__classPrivateFieldGet(this, _AloneExportNamedIdentifierDetector_isExportAllDetected, "f") || __classPrivateFieldGet(this, _AloneExportNamedIdentifierDetector_isExportDefaultDetected, "f"))
            return;
        if (__classPrivateFieldGet(this, _AloneExportNamedIdentifierDetector_exportedIdentifiers, "f").size !== 1)
            return;
        return [...__classPrivateFieldGet(this, _AloneExportNamedIdentifierDetector_exportedIdentifiers, "f")][0];
    }
    detectExportNamedDeclaration(node) {
        var _a;
        if (((_a = node.parent) === null || _a === void 0 ? void 0 : _a.type) === 'TSModuleBlock')
            return;
        if (node.declaration) {
            /*
             * NOTE: https://eslint.org/docs/developer-guide/working-with-rules#the-context-object
             *   > If the node is a FunctionDeclaration or FunctionExpression,
             *   > the variable for the function name is returned,
             *   > in addition to variables for the function parameters.
             */
            __classPrivateFieldGet(this, _AloneExportNamedIdentifierDetector_context, "f")
                .getDeclaredVariables(node.declaration)
                .flatMap(variable => variable.defs)
                .filter(definition => definition.type !== 'Parameter')
                .forEach(definition => __classPrivateFieldGet(this, _AloneExportNamedIdentifierDetector_exportedIdentifiers, "f").add(definition.name));
        }
        else {
            node.specifiers.forEach(specifier => __classPrivateFieldGet(this, _AloneExportNamedIdentifierDetector_exportedIdentifiers, "f").add(specifier.exported));
        }
    }
    detectExportAllDeclaration() {
        __classPrivateFieldSet(this, _AloneExportNamedIdentifierDetector_isExportAllDetected, true, "f");
    }
    detectExportDefaultDeclaration() {
        __classPrivateFieldSet(this, _AloneExportNamedIdentifierDetector_isExportDefaultDetected, true, "f");
    }
}
_AloneExportNamedIdentifierDetector_context = new WeakMap(), _AloneExportNamedIdentifierDetector_exportedIdentifiers = new WeakMap(), _AloneExportNamedIdentifierDetector_isExportAllDetected = new WeakMap(), _AloneExportNamedIdentifierDetector_isExportDefaultDetected = new WeakMap();
const fetchFilename = (context) => {
    const absolutePath = path_1.default.resolve(context.getFilename());
    const [parentDirname, basename] = absolutePath.split(path_1.default.sep).slice(-2);
    const [filename, ...extnames] = basename.split('.');
    return [filename === 'index' && parentDirname !== '' ? parentDirname : filename, extnames.join('.')];
};
const getNameToCompare = (name) => name.replace(/[-_]/g, '').toLowerCase();
const isSameName = (name1, name2) => getNameToCompare(name1) === getNameToCompare(name2);
exports.namedExport = {
    meta: {
        type: 'suggestion',
        messages: {
            invalidFilename: 'The filename/dirname does not match the exported module name.' +
                'We recommend renaming to `{{ filename }}.{{ extname }}` or `{{ filename }}/index.{{ extname }}`.',
        },
        schema: [{ enum: ['always', 'singular', 'plural'] }],
    },
    create: context => {
        var _a;
        const pluralize = (0, pluralize_1.getPluralize)(context);
        const rule = (_a = context.options[0]) !== null && _a !== void 0 ? _a : 'always';
        const [filename, extname] = fetchFilename(context);
        const detector = new AloneExportNamedIdentifierDetector(context);
        return {
            ExportAllDeclaration: () => detector.detectExportAllDeclaration(),
            ExportDefaultDeclaration: () => detector.detectExportDefaultDeclaration(),
            ExportNamedDeclaration: node => detector.detectExportNamedDeclaration(node),
            'Program:exit': () => {
                if (!(rule === 'always' || pluralize.isValidName(filename, rule)))
                    return;
                const exportedIdentifier = detector.aloneExportNamedIdentifier;
                if (!exportedIdentifier)
                    return;
                if (isSameName(exportedIdentifier.name, filename))
                    return;
                context.report({
                    node: exportedIdentifier,
                    messageId: 'invalidFilename',
                    data: {
                        filename: preset_rules_1.presetRules['kebab-case'].recommendationBuilder(exportedIdentifier.name),
                        extname,
                    },
                });
            },
        };
    },
};
