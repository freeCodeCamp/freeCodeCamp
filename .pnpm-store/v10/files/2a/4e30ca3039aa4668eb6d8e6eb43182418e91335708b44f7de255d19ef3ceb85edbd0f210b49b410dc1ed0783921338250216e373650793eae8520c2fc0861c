'use strict';

const createCustomError = require('../utils/create-custom-error.cjs');

function SyntaxError(message, input, offset) {
    return Object.assign(createCustomError.createCustomError('SyntaxError', message), {
        input,
        offset,
        rawMessage: message,
        message: message + '\n' +
            '  ' + input + '\n' +
            '--' + new Array((offset || input.length) + 1).join('-') + '^'
    });
}

exports.SyntaxError = SyntaxError;
