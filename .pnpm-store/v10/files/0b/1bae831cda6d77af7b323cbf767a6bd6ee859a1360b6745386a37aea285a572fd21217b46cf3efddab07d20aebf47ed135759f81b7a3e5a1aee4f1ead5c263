export function createCustomError(name, message) {
    // use Object.create(), because some VMs prevent setting line/column otherwise
    // (iOS Safari 10 even throws an exception)
    const error = Object.create(SyntaxError.prototype);
    const errorStack = new Error();

    return Object.assign(error, {
        name,
        message,
        get stack() {
            return (errorStack.stack || '').replace(/^(.+\n){1,3}/, `${name}: ${message}\n`);
        }
    });
};
