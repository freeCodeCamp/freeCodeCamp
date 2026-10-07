import { inspectList } from './helpers.js';
// IE11 doesn't support `Array.from(set)`
function arrayFromSet(set) {
    const values = [];
    set.forEach(value => {
        values.push(value);
    });
    return values;
}
export default function inspectSet(set, options) {
    if (set.size === 0)
        return 'Set{}';
    options.truncate -= 7;
    return `Set{ ${inspectList(arrayFromSet(set), options)} }`;
}
