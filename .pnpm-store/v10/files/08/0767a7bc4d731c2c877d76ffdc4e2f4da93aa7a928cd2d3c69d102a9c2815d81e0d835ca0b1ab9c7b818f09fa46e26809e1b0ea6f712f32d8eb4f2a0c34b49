import { truncate } from './helpers.js';
export default function inspectRegExp(value, options) {
    const flags = value.toString().split('/')[2];
    const sourceLength = options.truncate - (2 + flags.length);
    const source = value.source;
    return options.stylize(`/${truncate(source, sourceLength)}/${flags}`, 'regexp');
}
