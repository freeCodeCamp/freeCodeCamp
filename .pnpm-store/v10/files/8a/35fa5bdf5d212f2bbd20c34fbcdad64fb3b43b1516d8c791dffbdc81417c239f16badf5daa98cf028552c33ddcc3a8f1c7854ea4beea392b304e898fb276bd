import { createRequire } from 'module';
import { join as joinPaths } from 'path';
export function getCustomLoaderByPath(path, cwd) {
    try {
        const requireFn = createRequire(joinPaths(cwd, 'noop.js'));
        const requiredModule = requireFn(path);
        if (requiredModule) {
            if (requiredModule.default && typeof requiredModule.default === 'function') {
                return requiredModule.default;
            }
            if (typeof requiredModule === 'function') {
                return requiredModule;
            }
        }
    }
    catch (e) { }
    return null;
}
export async function useCustomLoader(loaderPointer, cwd) {
    let loader;
    if (typeof loaderPointer === 'string') {
        loader = await getCustomLoaderByPath(loaderPointer, cwd);
    }
    else if (typeof loaderPointer === 'function') {
        loader = loaderPointer;
    }
    if (typeof loader !== 'function') {
        throw new Error(`Failed to load custom loader: ${loaderPointer}`);
    }
    return loader;
}
export function useCustomLoaderSync(loaderPointer, cwd) {
    let loader;
    if (typeof loaderPointer === 'string') {
        loader = getCustomLoaderByPath(loaderPointer, cwd);
    }
    else if (typeof loaderPointer === 'function') {
        loader = loaderPointer;
    }
    if (typeof loader !== 'function') {
        throw new Error(`Failed to load custom loader: ${loaderPointer}`);
    }
    return loader;
}
