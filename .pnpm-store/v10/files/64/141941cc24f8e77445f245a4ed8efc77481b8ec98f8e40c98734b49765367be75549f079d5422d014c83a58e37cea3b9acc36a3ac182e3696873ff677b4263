import { Credentials, Profile } from "@aws-sdk/types";
import { FromIniInit } from "./fromIni";
/**
 * @internal
 */
export interface ProcessProfile extends Profile {
    credential_process: string;
}
/**
 * @internal
 */
export declare const isProcessProfile: (arg: any) => arg is ProcessProfile;
/**
 * @internal
 */
export declare const resolveProcessCredentials: (options: FromIniInit, profile: string) => Promise<Credentials>;
