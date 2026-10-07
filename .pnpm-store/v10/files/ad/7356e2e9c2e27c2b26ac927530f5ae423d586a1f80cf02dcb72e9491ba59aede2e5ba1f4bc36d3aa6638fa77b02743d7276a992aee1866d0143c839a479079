import { dirname, isAbsolute, join, relative, resolve } from 'path';
import parse from 'parse-filepath';
export function generateFragmentImportStatement(statement, kind) {
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
export function generateImportStatement(statement) {
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
function resolveImportPath(baseDir, outputPath, sourcePath) {
    const shouldAbsolute = !sourcePath.startsWith('~');
    if (shouldAbsolute) {
        const absGeneratedFilePath = resolve(baseDir, outputPath);
        const absImportFilePath = resolve(baseDir, sourcePath);
        return resolveRelativeImport(absGeneratedFilePath, absImportFilePath);
    }
    return sourcePath.replace(`~`, '');
}
export function resolveRelativeImport(from, to) {
    if (!isAbsolute(from)) {
        throw new Error(`Argument 'from' must be an absolute path, '${from}' given.`);
    }
    if (!isAbsolute(to)) {
        throw new Error(`Argument 'to' must be an absolute path, '${to}' given.`);
    }
    return fixLocalFilePath(clearExtension(relative(dirname(from), to)));
}
export function resolveImportSource(source) {
    return typeof source === 'string' ? { path: source } : source;
}
export function clearExtension(path) {
    const parsedPath = parse(path);
    return join(parsedPath.dir, parsedPath.name).replace(/\\/g, '/');
}
export function fixLocalFilePath(path) {
    return !path.startsWith('..') ? `./${path}` : path;
}
