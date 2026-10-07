import { inspectList, truncator } from './helpers.js';
export function inspectAttribute([key, value], options) {
    options.truncate -= 3;
    if (!value) {
        return `${options.stylize(String(key), 'yellow')}`;
    }
    return `${options.stylize(String(key), 'yellow')}=${options.stylize(`"${value}"`, 'string')}`;
}
export function inspectNodeCollection(collection, options) {
    return inspectList(collection, options, inspectNode, '\n');
}
export function inspectNode(node, options) {
    switch (node.nodeType) {
        case 1:
            return inspectHTML(node, options);
        case 3:
            return options.inspect(node.data, options);
        default:
            return options.inspect(node, options);
    }
}
// @ts-ignore (Deno doesn't have Element)
export default function inspectHTML(element, options) {
    const properties = element.getAttributeNames();
    const name = element.tagName.toLowerCase();
    const head = options.stylize(`<${name}`, 'special');
    const headClose = options.stylize(`>`, 'special');
    const tail = options.stylize(`</${name}>`, 'special');
    options.truncate -= name.length * 2 + 5;
    let propertyContents = '';
    if (properties.length > 0) {
        propertyContents += ' ';
        propertyContents += inspectList(properties.map((key) => [key, element.getAttribute(key)]), options, inspectAttribute, ' ');
    }
    options.truncate -= propertyContents.length;
    const truncate = options.truncate;
    let children = inspectNodeCollection(element.children, options);
    if (children && children.length > truncate) {
        children = `${truncator}(${element.children.length})`;
    }
    return `${head}${propertyContents}${headClose}${children}${tail}`;
}
