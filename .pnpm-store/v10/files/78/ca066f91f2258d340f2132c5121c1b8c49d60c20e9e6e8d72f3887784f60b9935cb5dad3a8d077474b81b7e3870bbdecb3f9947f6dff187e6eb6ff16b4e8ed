export class ServiceException extends Error {
    constructor(options) {
        super(options.message);
        Object.setPrototypeOf(this, ServiceException.prototype);
        this.name = options.name;
        this.$fault = options.$fault;
        this.$metadata = options.$metadata;
    }
}
export const decorateServiceException = (exception, additions = {}) => {
    Object.entries(additions)
        .filter(([, v]) => v !== undefined)
        .forEach(([k, v]) => {
        if (exception[k] == undefined || exception[k] === "") {
            exception[k] = v;
        }
    });
    const message = exception.message || exception.Message || "UnknownError";
    exception.message = message;
    delete exception.Message;
    return exception;
};
