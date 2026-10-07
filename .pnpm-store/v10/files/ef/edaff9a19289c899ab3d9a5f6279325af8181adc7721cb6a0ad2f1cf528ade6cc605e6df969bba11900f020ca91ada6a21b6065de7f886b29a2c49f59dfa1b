import { escape, unescape } from 'minimatch';
import { Glob } from './glob.js';
import { hasMagic } from './has-magic.js';
export { escape, unescape } from 'minimatch';
export { Glob } from './glob.js';
export { hasMagic } from './has-magic.js';
export { Ignore } from './ignore.js';
export function globStreamSync(pattern, options = {}) {
    return new Glob(pattern, options).streamSync();
}
export function globStream(pattern, options = {}) {
    return new Glob(pattern, options).stream();
}
export function globSync(pattern, options = {}) {
    return new Glob(pattern, options).walkSync();
}
async function glob_(pattern, options = {}) {
    return new Glob(pattern, options).walk();
}
export function globIterateSync(pattern, options = {}) {
    return new Glob(pattern, options).iterateSync();
}
export function globIterate(pattern, options = {}) {
    return new Glob(pattern, options).iterate();
}
// aliases: glob.sync.stream() glob.stream.sync() glob.sync() etc
export const streamSync = globStreamSync;
export const stream = Object.assign(globStream, { sync: globStreamSync });
export const iterateSync = globIterateSync;
export const iterate = Object.assign(globIterate, {
    sync: globIterateSync,
});
export const sync = Object.assign(globSync, {
    stream: globStreamSync,
    iterate: globIterateSync,
});
export const glob = Object.assign(glob_, {
    glob: glob_,
    globSync,
    sync,
    globStream,
    stream,
    globStreamSync,
    streamSync,
    globIterate,
    iterate,
    globIterateSync,
    iterateSync,
    Glob,
    hasMagic,
    escape,
    unescape,
});
glob.glob = glob;
//# sourceMappingURL=index.js.map