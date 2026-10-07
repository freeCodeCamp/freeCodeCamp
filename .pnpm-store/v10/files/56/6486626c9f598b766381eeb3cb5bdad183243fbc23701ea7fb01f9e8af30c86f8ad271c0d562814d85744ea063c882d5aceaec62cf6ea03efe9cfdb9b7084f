import { inspectList, inspectProperty } from './helpers.js';
export default function inspectArray(array, options) {
    // Object.keys will always output the Array indices first, so we can slice by
    // `array.length` to get non-index properties
    const nonIndexProperties = Object.keys(array).slice(array.length);
    if (!array.length && !nonIndexProperties.length)
        return '[]';
    options.truncate -= 4;
    const listContents = inspectList(array, options);
    options.truncate -= listContents.length;
    let propertyContents = '';
    if (nonIndexProperties.length) {
        propertyContents = inspectList(nonIndexProperties.map(key => [key, array[key]]), options, inspectProperty);
    }
    return `[ ${listContents}${propertyContents ? `, ${propertyContents}` : ''} ]`;
}
