import { SENSITIVE_STRING } from "@smithy/smithy-client";
import { SSOOIDCServiceException as __BaseException } from "./SSOOIDCServiceException";
export class AccessDeniedException extends __BaseException {
    constructor(opts) {
        super({
            name: "AccessDeniedException",
            $fault: "client",
            ...opts,
        });
        this.name = "AccessDeniedException";
        this.$fault = "client";
        Object.setPrototypeOf(this, AccessDeniedException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
export class AuthorizationPendingException extends __BaseException {
    constructor(opts) {
        super({
            name: "AuthorizationPendingException",
            $fault: "client",
            ...opts,
        });
        this.name = "AuthorizationPendingException";
        this.$fault = "client";
        Object.setPrototypeOf(this, AuthorizationPendingException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
export class ExpiredTokenException extends __BaseException {
    constructor(opts) {
        super({
            name: "ExpiredTokenException",
            $fault: "client",
            ...opts,
        });
        this.name = "ExpiredTokenException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ExpiredTokenException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
export class InternalServerException extends __BaseException {
    constructor(opts) {
        super({
            name: "InternalServerException",
            $fault: "server",
            ...opts,
        });
        this.name = "InternalServerException";
        this.$fault = "server";
        Object.setPrototypeOf(this, InternalServerException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
export class InvalidClientException extends __BaseException {
    constructor(opts) {
        super({
            name: "InvalidClientException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidClientException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidClientException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
export class InvalidGrantException extends __BaseException {
    constructor(opts) {
        super({
            name: "InvalidGrantException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidGrantException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidGrantException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
export class InvalidRequestException extends __BaseException {
    constructor(opts) {
        super({
            name: "InvalidRequestException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidRequestException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidRequestException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
export class InvalidScopeException extends __BaseException {
    constructor(opts) {
        super({
            name: "InvalidScopeException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidScopeException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidScopeException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
export class SlowDownException extends __BaseException {
    constructor(opts) {
        super({
            name: "SlowDownException",
            $fault: "client",
            ...opts,
        });
        this.name = "SlowDownException";
        this.$fault = "client";
        Object.setPrototypeOf(this, SlowDownException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
export class UnauthorizedClientException extends __BaseException {
    constructor(opts) {
        super({
            name: "UnauthorizedClientException",
            $fault: "client",
            ...opts,
        });
        this.name = "UnauthorizedClientException";
        this.$fault = "client";
        Object.setPrototypeOf(this, UnauthorizedClientException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
export class UnsupportedGrantTypeException extends __BaseException {
    constructor(opts) {
        super({
            name: "UnsupportedGrantTypeException",
            $fault: "client",
            ...opts,
        });
        this.name = "UnsupportedGrantTypeException";
        this.$fault = "client";
        Object.setPrototypeOf(this, UnsupportedGrantTypeException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
export class InvalidRequestRegionException extends __BaseException {
    constructor(opts) {
        super({
            name: "InvalidRequestRegionException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidRequestRegionException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidRequestRegionException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
        this.endpoint = opts.endpoint;
        this.region = opts.region;
    }
}
export class InvalidClientMetadataException extends __BaseException {
    constructor(opts) {
        super({
            name: "InvalidClientMetadataException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidClientMetadataException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidClientMetadataException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
export const CreateTokenRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.clientSecret && { clientSecret: SENSITIVE_STRING }),
    ...(obj.refreshToken && { refreshToken: SENSITIVE_STRING }),
});
export const CreateTokenResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.accessToken && { accessToken: SENSITIVE_STRING }),
    ...(obj.refreshToken && { refreshToken: SENSITIVE_STRING }),
    ...(obj.idToken && { idToken: SENSITIVE_STRING }),
});
export const CreateTokenWithIAMRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.refreshToken && { refreshToken: SENSITIVE_STRING }),
    ...(obj.assertion && { assertion: SENSITIVE_STRING }),
    ...(obj.subjectToken && { subjectToken: SENSITIVE_STRING }),
});
export const CreateTokenWithIAMResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.accessToken && { accessToken: SENSITIVE_STRING }),
    ...(obj.refreshToken && { refreshToken: SENSITIVE_STRING }),
    ...(obj.idToken && { idToken: SENSITIVE_STRING }),
});
export const RegisterClientResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.clientSecret && { clientSecret: SENSITIVE_STRING }),
});
export const StartDeviceAuthorizationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.clientSecret && { clientSecret: SENSITIVE_STRING }),
});
