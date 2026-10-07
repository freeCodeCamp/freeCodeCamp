var createCustomError = require('../utils/createCustomError');

module.exports = function SyntaxError(message, input, offset) {
    var error = createCustomError('SyntaxError', message);

    error.input = input;
    error.offset = offset;
    error.rawMessage = message;
    error.message = error.rawMessage + '\n' +
        '  ' + error.input + '\n' +
        '--' + new Array((error.offset || error.input.length) + 1).join('-') + '^';

    return error;
};
