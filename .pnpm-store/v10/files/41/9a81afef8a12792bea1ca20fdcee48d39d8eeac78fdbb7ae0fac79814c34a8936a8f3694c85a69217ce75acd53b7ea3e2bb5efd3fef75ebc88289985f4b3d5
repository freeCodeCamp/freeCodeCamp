import { inspectList, inspectProperty, truncate } from './helpers.js';
const errorKeys = [
    'stack',
    'line',
    'column',
    'name',
    'message',
    'fileName',
    'lineNumber',
    'columnNumber',
    'number',
    'description',
    'cause',
];
export default function inspectObject(error, options) {
    const properties = Object.getOwnPropertyNames(error).filter(key => errorKeys.indexOf(key) === -1);
    const name = error.name;
    options.truncate -= name.length;
    let message = '';
    if (typeof error.message === 'string') {
        message = truncate(error.message, options.truncate);
    }
    else {
        properties.unshift('message');
    }
    message = message ? `: ${message}` : '';
    options.truncate -= message.length + 5;
    options.seen = options.seen || [];
    if (options.seen.includes(error)) {
        return '[Circular]';
    }
    options.seen.push(error);
    const propertyContents = inspectList(properties.map(key => [key, error[key]]), options, inspectProperty);
    return `${name}${message}${propertyContents ? ` { ${propertyContents} }` : ''}`;
}
