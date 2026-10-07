import { SENSITIVE_STRING } from "@smithy/smithy-client";
import { SSOServiceException as __BaseException } from "./SSOServiceException";
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
    }
}
export class ResourceNotFoundException extends __BaseException {
    constructor(opts) {
        super({
            name: "ResourceNotFoundException",
            $fault: "client",
            ...opts,
        });
        this.name = "ResourceNotFoundException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    }
}
export class TooManyRequestsException extends __BaseException {
    constructor(opts) {
        super({
            name: "TooManyRequestsException",
            $fault: "client",
            ...opts,
        });
        this.name = "TooManyRequestsException";
        this.$fault = "client";
        Object.setPrototypeOf(this, TooManyRequestsException.prototype);
    }
}
export class UnauthorizedException extends __BaseException {
    constructor(opts) {
        super({
            name: "UnauthorizedException",
            $fault: "client",
            ...opts,
        });
        this.name = "UnauthorizedException";
        this.$fault = "client";
        Object.setPrototypeOf(this, UnauthorizedException.prototype);
    }
}
export const GetRoleCredentialsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.accessToken && { accessToken: SENSITIVE_STRING }),
});
export const RoleCredentialsFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.secretAccessKey && { secretAccessKey: SENSITIVE_STRING }),
    ...(obj.sessionToken && { sessionToken: SENSITIVE_STRING }),
});
export const GetRoleCredentialsResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.roleCredentials && { roleCredentials: RoleCredentialsFilterSensitiveLog(obj.roleCredentials) }),
});
export const ListAccountRolesRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.accessToken && { accessToken: SENSITIVE_STRING }),
});
export const ListAccountsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.accessToken && { accessToken: SENSITIVE_STRING }),
});
export const LogoutRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.accessToken && { accessToken: SENSITIVE_STRING }),
});
