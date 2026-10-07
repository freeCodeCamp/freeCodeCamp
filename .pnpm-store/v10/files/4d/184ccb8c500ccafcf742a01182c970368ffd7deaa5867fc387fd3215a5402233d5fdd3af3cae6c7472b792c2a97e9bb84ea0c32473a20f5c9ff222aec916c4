import { truncate } from './helpers.js';
export default function inspectFunction(func, options) {
    const functionType = func[Symbol.toStringTag] || 'Function';
    const name = func.name;
    if (!name) {
        return options.stylize(`[${functionType}]`, 'special');
    }
    return options.stylize(`[${functionType} ${truncate(name, options.truncate - 11)}]`, 'special');
}
