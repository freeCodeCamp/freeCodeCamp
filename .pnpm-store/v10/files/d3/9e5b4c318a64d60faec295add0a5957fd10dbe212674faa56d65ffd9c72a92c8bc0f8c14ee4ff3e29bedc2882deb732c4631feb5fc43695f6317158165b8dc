import { ProviderError } from "./ProviderError";
export class CredentialsProviderError extends ProviderError {
    constructor(message, tryNextLink = true) {
        super(message, tryNextLink);
        this.tryNextLink = tryNextLink;
        this.name = "CredentialsProviderError";
        Object.setPrototypeOf(this, CredentialsProviderError.prototype);
    }
}
