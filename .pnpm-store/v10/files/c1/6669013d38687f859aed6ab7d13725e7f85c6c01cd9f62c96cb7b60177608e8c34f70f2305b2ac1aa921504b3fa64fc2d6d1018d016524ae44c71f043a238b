import { YError } from './yerror.js';
import { parseCommand } from './parse-command.js';
const positionName = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth'];
export function argsert(arg1, arg2, arg3) {
    function parseArgs() {
        return typeof arg1 === 'object'
            ? [{ demanded: [], optional: [] }, arg1, arg2]
            : [
                parseCommand(`cmd ${arg1}`),
                arg2,
                arg3,
            ];
    }
    try {
        let position = 0;
        const [parsed, callerArguments, _length] = parseArgs();
        const args = [].slice.call(callerArguments);
        while (args.length && args[args.length - 1] === undefined)
            args.pop();
        const length = _length || args.length;
        if (length < parsed.demanded.length) {
            throw new YError(`Not enough arguments provided. Expected ${parsed.demanded.length} but received ${args.length}.`);
        }
        const totalCommands = parsed.demanded.length + parsed.optional.length;
        if (length > totalCommands) {
            throw new YError(`Too many arguments provided. Expected max ${totalCommands} but received ${length}.`);
        }
        parsed.demanded.forEach(demanded => {
            const arg = args.shift();
            const observedType = guessType(arg);
            const matchingTypes = demanded.cmd.filter(type => type === observedType || type === '*');
            if (matchingTypes.length === 0)
                argumentTypeError(observedType, demanded.cmd, position);
            position += 1;
        });
        parsed.optional.forEach(optional => {
            if (args.length === 0)
                return;
            const arg = args.shift();
            const observedType = guessType(arg);
            const matchingTypes = optional.cmd.filter(type => type === observedType || type === '*');
            if (matchingTypes.length === 0)
                argumentTypeError(observedType, optional.cmd, position);
            position += 1;
        });
    }
    catch (err) {
        console.warn(err.stack);
    }
}
function guessType(arg) {
    if (Array.isArray(arg)) {
        return 'array';
    }
    else if (arg === null) {
        return 'null';
    }
    return typeof arg;
}
function argumentTypeError(observedType, allowedTypes, position) {
    throw new YError(`Invalid ${positionName[position] || 'manyith'} argument. Expected ${allowedTypes.join(' or ')} but received ${observedType}.`);
}
