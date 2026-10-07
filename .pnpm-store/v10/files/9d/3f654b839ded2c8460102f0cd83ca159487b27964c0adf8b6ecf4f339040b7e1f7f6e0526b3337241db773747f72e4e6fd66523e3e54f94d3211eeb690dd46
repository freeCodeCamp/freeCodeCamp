"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseVisitor = void 0;
const tslib_1 = require("tslib");
const auto_bind_1 = tslib_1.__importDefault(require("auto-bind"));
const naming_js_1 = require("./naming.js");
class BaseVisitor {
    constructor(rawConfig, additionalConfig) {
        var _a;
        this._declarationBlockConfig = {};
        this._parsedConfig = {
            convert: (0, naming_js_1.convertFactory)(rawConfig),
            typesPrefix: rawConfig.typesPrefix || '',
            typesSuffix: rawConfig.typesSuffix || '',
            externalFragments: rawConfig.externalFragments || [],
            fragmentImports: rawConfig.fragmentImports || [],
            addTypename: !rawConfig.skipTypename,
            nonOptionalTypename: !!rawConfig.nonOptionalTypename,
            useTypeImports: !!rawConfig.useTypeImports,
            dedupeFragments: !!rawConfig.dedupeFragments,
            allowEnumStringTypes: !!rawConfig.allowEnumStringTypes,
            inlineFragmentTypes: (_a = rawConfig.inlineFragmentTypes) !== null && _a !== void 0 ? _a : 'inline',
            emitLegacyCommonJSImports: rawConfig.emitLegacyCommonJSImports === undefined ? true : !!rawConfig.emitLegacyCommonJSImports,
            ...(additionalConfig || {}),
        };
        this.scalars = {};
        Object.keys(this.config.scalars || {}).forEach(key => {
            this.scalars[key] = this.config.scalars[key].type;
        });
        (0, auto_bind_1.default)(this);
    }
    getVisitorKindContextFromAncestors(ancestors) {
        if (!ancestors) {
            return [];
        }
        return ancestors.map(t => t.kind).filter(Boolean);
    }
    get config() {
        return this._parsedConfig;
    }
    convertName(node, options) {
        const useTypesPrefix = typeof (options === null || options === void 0 ? void 0 : options.useTypesPrefix) === 'boolean' ? options.useTypesPrefix : true;
        const useTypesSuffix = typeof (options === null || options === void 0 ? void 0 : options.useTypesSuffix) === 'boolean' ? options.useTypesSuffix : true;
        let convertedName = '';
        if (useTypesPrefix) {
            convertedName += this.config.typesPrefix;
        }
        convertedName += this.config.convert(node, options);
        if (useTypesSuffix) {
            convertedName += this.config.typesSuffix;
        }
        return convertedName;
    }
    getOperationSuffix(node, operationType) {
        const { omitOperationSuffix = false, dedupeOperationSuffix = false } = this.config;
        const operationName = typeof node === 'string' ? node : node.name ? node.name.value : '';
        return omitOperationSuffix
            ? ''
            : dedupeOperationSuffix && operationName.toLowerCase().endsWith(operationType.toLowerCase())
                ? ''
                : operationType;
    }
    getFragmentSuffix(node) {
        return this.getOperationSuffix(node, 'Fragment');
    }
    getFragmentName(node) {
        return this.convertName(node, {
            suffix: this.getFragmentSuffix(node),
            useTypesPrefix: false,
        });
    }
    getFragmentVariableName(node) {
        const { omitOperationSuffix = false, dedupeOperationSuffix = false, fragmentVariableSuffix = 'FragmentDoc', fragmentVariablePrefix = '', } = this.config;
        const fragmentName = typeof node === 'string' ? node : node.name.value;
        const suffix = omitOperationSuffix
            ? ''
            : dedupeOperationSuffix &&
                fragmentName.toLowerCase().endsWith('fragment') &&
                fragmentVariableSuffix.toLowerCase().startsWith('fragment')
                ? fragmentVariableSuffix.substring('fragment'.length)
                : fragmentVariableSuffix;
        return this.convertName(node, {
            prefix: fragmentVariablePrefix,
            suffix,
            useTypesPrefix: false,
        });
    }
    getPunctuation(_declarationKind) {
        return '';
    }
}
exports.BaseVisitor = BaseVisitor;
