import { inspectList } from './helpers.js';
function inspectMapEntry([key, value], options) {
    options.truncate -= 4;
    key = options.inspect(key, options);
    options.truncate -= key.length;
    value = options.inspect(value, options);
    return `${key} => ${value}`;
}
// IE11 doesn't support `map.entries()`
function mapToEntries(map) {
    const entries = [];
    map.forEach((value, key) => {
        entries.push([key, value]);
    });
    return entries;
}
export default function inspectMap(map, options) {
    if (map.size === 0)
        return 'Map{}';
    options.truncate -= 7;
    return `Map{ ${inspectList(mapToEntries(map), options, inspectMapEntry)} }`;
}
