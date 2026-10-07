import { AwsCredentialIdentity, ParsedIniData } from "@smithy/types";
import { FromIniInit } from "./fromIni";
export interface AssumeRoleParams {
  RoleArn: string;
  RoleSessionName: string;
  ExternalId?: string;
  SerialNumber?: string;
  TokenCode?: string;
  DurationSeconds?: number;
}
export declare const isAssumeRoleProfile: (arg: any) => boolean;
export declare const resolveAssumeRoleCredentials: (
  profileName: string,
  profiles: ParsedIniData,
  options: FromIniInit,
  visitedProfiles?: Record<string, true>
) => Promise<AwsCredentialIdentity>;
