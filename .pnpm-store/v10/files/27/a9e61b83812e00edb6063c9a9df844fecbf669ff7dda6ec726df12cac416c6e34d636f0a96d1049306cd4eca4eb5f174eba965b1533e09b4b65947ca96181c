"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAggregateError = exports.AggregateError = void 0;
let AggregateErrorImpl;
exports.AggregateError = AggregateErrorImpl;
if (typeof AggregateError === 'undefined') {
    class AggregateErrorClass extends Error {
        constructor(errors, message = '') {
            super(message);
            this.errors = errors;
            this.name = 'AggregateError';
            Error.captureStackTrace(this, AggregateErrorClass);
        }
    }
    exports.AggregateError = AggregateErrorImpl = function (errors, message) {
        return new AggregateErrorClass(errors, message);
    };
}
else {
    exports.AggregateError = AggregateErrorImpl = AggregateError;
}
function isAggregateError(error) {
    return 'errors' in error && Array.isArray(error['errors']);
}
exports.isAggregateError = isAggregateError;
