import { AwsCredentialIdentity, ParsedIniData } from "@smithy/types";
import { FromIniInit } from "./fromIni";
/**
 * @internal
 *
 * @see http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/STS.html#assumeRole-property
 * TODO update the above to link to V3 docs
 */
export interface AssumeRoleParams {
    /**
     * The identifier of the role to be assumed.
     */
    RoleArn: string;
    /**
     * A name for the assumed role session.
     */
    RoleSessionName: string;
    /**
     * A unique identifier that is used by third parties when assuming roles in
     * their customers' accounts.
     */
    ExternalId?: string;
    /**
     * The identification number of the MFA device that is associated with the
     * user who is making the `AssumeRole` call.
     */
    SerialNumber?: string;
    /**
     * The value provided by the MFA device.
     */
    TokenCode?: string;
    /**
     * The duration, in seconds, of the role session.
     */
    DurationSeconds?: number;
}
/**
 * @internal
 */
export declare const isAssumeRoleProfile: (arg: any) => boolean;
/**
 * @internal
 */
export declare const resolveAssumeRoleCredentials: (profileName: string, profiles: ParsedIniData, options: FromIniInit, visitedProfiles?: Record<string, true>) => Promise<AwsCredentialIdentity>;
