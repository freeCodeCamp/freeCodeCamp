export class ProviderError extends Error {
    constructor(message, tryNextLink = true) {
        super(message);
        this.tryNextLink = tryNextLink;
        this.name = "ProviderError";
        Object.setPrototypeOf(this, ProviderError.prototype);
    }
    static from(error, tryNextLink = true) {
        return Object.assign(new this(error.message, tryNextLink), error);
    }
}
