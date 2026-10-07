/**
 * @public
 */
export declare enum IniSectionType {
    PROFILE = "profile",
    SSO_SESSION = "sso-session",
    SERVICES = "services"
}
/**
 * @public
 */
export type IniSection = Record<string, string | undefined>;
/**
 * @public
 *
 * @deprecated Please use {@link IniSection}
 */
export interface Profile extends IniSection {
}
/**
 * @public
 */
export type ParsedIniData = Record<string, IniSection>;
/**
 * @public
 */
export interface SharedConfigFiles {
    credentialsFile: ParsedIniData;
    configFile: ParsedIniData;
}
