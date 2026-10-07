import { Credentials, Profile } from "@aws-sdk/types";
import { FromIniInit } from "./fromIni";
export interface ProcessProfile extends Profile {
  credential_process: string;
}
export declare const isProcessProfile: (arg: any) => arg is ProcessProfile;
export declare const resolveProcessCredentials: (
  options: FromIniInit,
  profile: string
) => Promise<Credentials>;
