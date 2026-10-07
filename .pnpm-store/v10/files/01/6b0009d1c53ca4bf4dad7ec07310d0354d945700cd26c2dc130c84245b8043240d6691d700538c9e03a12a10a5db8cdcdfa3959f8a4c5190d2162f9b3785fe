import { AwsCredentialIdentity, Profile } from "@smithy/types";
import { FromIniInit } from "./fromIni";
/**
 * @internal
 */
export interface StaticCredsProfile extends Profile {
    aws_access_key_id: string;
    aws_secret_access_key: string;
    aws_session_token?: string;
    aws_credential_scope?: string;
}
/**
 * @internal
 */
export declare const isStaticCredsProfile: (arg: any) => arg is StaticCredsProfile;
/**
 * @internal
 */
export declare const resolveStaticCredentials: (profile: StaticCredsProfile, options?: FromIniInit) => Promise<AwsCredentialIdentity>;
