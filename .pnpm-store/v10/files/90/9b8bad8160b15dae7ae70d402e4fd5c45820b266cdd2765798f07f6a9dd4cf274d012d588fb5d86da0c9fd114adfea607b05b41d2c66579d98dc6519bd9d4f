import { cwd } from 'process';
export function applyDefaultOptions(options) {
    options.cache = options.cache || {};
    options.cwd = options.cwd || cwd();
    options.sort = 'sort' in options ? options.sort : true;
}
