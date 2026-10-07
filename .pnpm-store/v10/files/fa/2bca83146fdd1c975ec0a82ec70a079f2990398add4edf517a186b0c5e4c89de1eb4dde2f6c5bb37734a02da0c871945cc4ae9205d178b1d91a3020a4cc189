import { inspectList, inspectProperty, truncate, truncator } from './helpers.js';
const getArrayName = (array) => {
    // We need to special case Node.js' Buffers, which report to be Uint8Array
    // @ts-ignore
    if (typeof Buffer === 'function' && array instanceof Buffer) {
        return 'Buffer';
    }
    if (array[Symbol.toStringTag]) {
        return array[Symbol.toStringTag];
    }
    return array.constructor.name;
};
export default function inspectTypedArray(array, options) {
    const name = getArrayName(array);
    options.truncate -= name.length + 4;
    // Object.keys will always output the Array indices first, so we can slice by
    // `array.length` to get non-index properties
    const nonIndexProperties = Object.keys(array).slice(array.length);
    if (!array.length && !nonIndexProperties.length)
        return `${name}[]`;
    // As we know TypedArrays only contain Unsigned Integers, we can skip inspecting each one and simply
    // stylise the toString() value of them
    let output = '';
    for (let i = 0; i < array.length; i++) {
        const string = `${options.stylize(truncate(array[i], options.truncate), 'number')}${i === array.length - 1 ? '' : ', '}`;
        options.truncate -= string.length;
        if (array[i] !== array.length && options.truncate <= 3) {
            output += `${truncator}(${array.length - array[i] + 1})`;
            break;
        }
        output += string;
    }
    let propertyContents = '';
    if (nonIndexProperties.length) {
        propertyContents = inspectList(nonIndexProperties.map(key => [key, array[key]]), options, inspectProperty);
    }
    return `${name}[ ${output}${propertyContents ? `, ${propertyContents}` : ''} ]`;
}
