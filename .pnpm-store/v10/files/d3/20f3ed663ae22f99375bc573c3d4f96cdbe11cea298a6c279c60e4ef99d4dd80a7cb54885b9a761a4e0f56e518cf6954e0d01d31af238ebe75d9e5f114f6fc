let AggregateErrorImpl;
if (typeof AggregateError === 'undefined') {
    class AggregateErrorClass extends Error {
        constructor(errors, message = '') {
            super(message);
            this.errors = errors;
            this.name = 'AggregateError';
            Error.captureStackTrace(this, AggregateErrorClass);
        }
    }
    AggregateErrorImpl = function (errors, message) {
        return new AggregateErrorClass(errors, message);
    };
}
else {
    AggregateErrorImpl = AggregateError;
}
export { AggregateErrorImpl as AggregateError };
export function isAggregateError(error) {
    return 'errors' in error && Array.isArray(error['errors']);
}
