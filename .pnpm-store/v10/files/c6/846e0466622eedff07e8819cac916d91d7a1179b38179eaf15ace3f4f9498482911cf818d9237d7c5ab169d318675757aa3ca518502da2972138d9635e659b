// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

const canElideFrames = "captureStackTrace" in Error;
class AssertionError extends Error {
    message;
    get name() {
        return "AssertionError";
    }
    get ok() {
        return false;
    }
    constructor(message = "Unspecified AssertionError", props, ssf){
        super(message);
        this.message = message;
        if (canElideFrames) {
            Error.captureStackTrace(this, ssf || AssertionError);
        }
        for(const key in props){
            if (!(key in this)) {
                this[key] = props[key];
            }
        }
    }
    toJSON(stack) {
        return {
            ...this,
            name: this.name,
            message: this.message,
            ok: false,
            stack: stack !== false ? this.stack : undefined
        };
    }
}
class AssertionResult {
    get name() {
        return "AssertionResult";
    }
    get ok() {
        return true;
    }
    constructor(props){
        for(const key in props){
            if (!(key in this)) {
                this[key] = props[key];
            }
        }
    }
    toJSON() {
        return {
            ...this,
            name: this.name,
            ok: this.ok
        };
    }
}
export { AssertionError as AssertionError };
export { AssertionResult as AssertionResult };

