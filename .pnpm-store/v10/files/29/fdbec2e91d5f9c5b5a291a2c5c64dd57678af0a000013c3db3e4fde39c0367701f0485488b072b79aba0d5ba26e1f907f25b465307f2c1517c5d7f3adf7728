import { asArray } from '@graphql-tools/utils';
import { env } from 'process';
export function normalizePointers(unnormalizedPointerOrPointers) {
    if (env['DEBUG'] != null) {
        console.time(`@graphql-tools/load: normalizePointers`);
    }
    const ignore = [];
    const pointerOptionMap = {};
    const handlePointer = (rawPointer, options = {}) => {
        if (rawPointer.startsWith('!')) {
            ignore.push(rawPointer.replace('!', ''));
        }
        else {
            pointerOptionMap[rawPointer] = options;
        }
    };
    for (const rawPointer of asArray(unnormalizedPointerOrPointers)) {
        if (env['DEBUG'] != null) {
            console.time(`@graphql-tools/load: normalizePointers ${rawPointer}`);
        }
        if (typeof rawPointer === 'string') {
            handlePointer(rawPointer);
        }
        else if (typeof rawPointer === 'object') {
            for (const [path, options] of Object.entries(rawPointer)) {
                handlePointer(path, options);
            }
        }
        else {
            throw new Error(`Invalid pointer '${rawPointer}'.`);
        }
        if (env['DEBUG'] != null) {
            console.timeEnd(`@graphql-tools/load: normalizePointers ${rawPointer}`);
        }
    }
    if (env['DEBUG'] != null) {
        console.timeEnd(`@graphql-tools/load: normalizePointers`);
    }
    return { ignore, pointerOptionMap };
}
