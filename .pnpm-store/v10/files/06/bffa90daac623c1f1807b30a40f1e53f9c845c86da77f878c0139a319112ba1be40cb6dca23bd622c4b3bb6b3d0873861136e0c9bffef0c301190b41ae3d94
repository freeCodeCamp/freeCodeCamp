"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixLocalFilePath = exports.clearExtension = exports.resolveImportSource = exports.resolveRelativeImport = exports.generateImportStatement = exports.generateFragmentImportStatement = void 0;
const tslib_1 = require("tslib");
const path_1 = require("path");
const parse_filepath_1 = tslib_1.__importDefault(require("parse-filepath"));
function generateFragmentImportStatement(statement, kind) {
    const { importSource: fragmentImportSource, ...rest } = statement;
    const { identifiers, path, namespace } = fragmentImportSource;
    const importSource = {
        identifiers: identifiers
            .filter(fragmentImport => kind === 'both' || kind === fragmentImport.kind)
            .map(({ name }) => name),
        path,
        namespace,
    };
    return generateImportStatement({
        importSource,
        ...rest,
        typesImport: kind === 'type' ? statement.typesImport : false,
    });
}
exports.generateFragmentImportStatement = generateFragmentImportStatement;
function generateImportStatement(statement) {
    var _a;
    const { baseDir, importSource, outputPath, typesImport } = statement;
    const importPath = resolveImportPath(baseDir, outputPath, importSource.path);
    const importNames = ((_a = importSource.identifiers) === null || _a === void 0 ? void 0 : _a.length)
        ? `{ ${Array.from(new Set(importSource.identifiers)).join(', ')} }`
        : '*';
    const importExtension = importPath.startsWith('/') || importPath.startsWith('.') ? (statement.emitLegacyCommonJSImports ? '' : '.js') : '';
    const importAlias = importSource.namespace ? ` as ${importSource.namespace}` : '';
    const importStatement = typesImport ? 'import type' : 'import';
    return `${importStatement} ${importNames}${importAlias} from '${importPath}${importExtension}';${importAlias ? '\n' : ''}`;
    // return `${importStatement} ${importNames}${importAlias} from '${importPath}';${importAlias ? '\n' : ''}`;
}
exports.generateImportStatement = generateImportStatement;
function resolveImportPath(baseDir, outputPath, sourcePath) {
    const shouldAbsolute = !sourcePath.startsWith('~');
    if (shouldAbsolute) {
        const absGeneratedFilePath = (0, path_1.resolve)(baseDir, outputPath);
        const absImportFilePath = (0, path_1.resolve)(baseDir, sourcePath);
        return resolveRelativeImport(absGeneratedFilePath, absImportFilePath);
    }
    return sourcePath.replace(`~`, '');
}
function resolveRelativeImport(from, to) {
    if (!(0, path_1.isAbsolute)(from)) {
        throw new Error(`Argument 'from' must be an absolute path, '${from}' given.`);
    }
    if (!(0, path_1.isAbsolute)(to)) {
        throw new Error(`Argument 'to' must be an absolute path, '${to}' given.`);
    }
    return fixLocalFilePath(clearExtension((0, path_1.relative)((0, path_1.dirname)(from), to)));
}
exports.resolveRelativeImport = resolveRelativeImport;
function resolveImportSource(source) {
    return typeof source === 'string' ? { path: source } : source;
}
exports.resolveImportSource = resolveImportSource;
function clearExtension(path) {
    const parsedPath = (0, parse_filepath_1.default)(path);
    return (0, path_1.join)(parsedPath.dir, parsedPath.name).replace(/\\/g, '/');
}
exports.clearExtension = clearExtension;
function fixLocalFilePath(path) {
    return !path.startsWith('..') ? `./${path}` : path;
}
exports.fixLocalFilePath = fixLocalFilePath;
