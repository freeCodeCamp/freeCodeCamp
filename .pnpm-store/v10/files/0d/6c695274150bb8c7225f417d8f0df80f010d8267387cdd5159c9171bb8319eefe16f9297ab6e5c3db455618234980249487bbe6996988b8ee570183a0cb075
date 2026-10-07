import { createCustomError } from '../utils/create-custom-error.js';

export function SyntaxError(message, input, offset) {
    return Object.assign(createCustomError('SyntaxError', message), {
        input,
        offset,
        rawMessage: message,
        message: message + '\n' +
            '  ' + input + '\n' +
            '--' + new Array((offset || input.length) + 1).join('-') + '^'
    });
};
