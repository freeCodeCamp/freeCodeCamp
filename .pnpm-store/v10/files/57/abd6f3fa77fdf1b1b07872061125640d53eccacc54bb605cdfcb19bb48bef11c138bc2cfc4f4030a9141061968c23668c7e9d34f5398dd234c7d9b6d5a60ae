import { SharedConfigFiles } from "@smithy/types";
export interface SharedConfigInit {
    /**
     * The path at which to locate the ini credentials file. Defaults to the
     * value of the `AWS_SHARED_CREDENTIALS_FILE` environment variable (if
     * defined) or `~/.aws/credentials` otherwise.
     */
    filepath?: string;
    /**
     * The path at which to locate the ini config file. Defaults to the value of
     * the `AWS_CONFIG_FILE` environment variable (if defined) or
     * `~/.aws/config` otherwise.
     */
    configFilepath?: string;
    /**
     * Configuration files are normally cached after the first time they are loaded. When this
     * property is set, the provider will always reload any configuration files loaded before.
     */
    ignoreCache?: boolean;
}
export declare const CONFIG_PREFIX_SEPARATOR = ".";
export declare const loadSharedConfigFiles: (init?: SharedConfigInit) => Promise<SharedConfigFiles>;
