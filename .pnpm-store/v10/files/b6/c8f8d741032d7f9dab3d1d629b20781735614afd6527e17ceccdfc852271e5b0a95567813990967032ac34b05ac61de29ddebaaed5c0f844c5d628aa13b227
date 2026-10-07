import { ParsedIniData } from "@smithy/types";
import { SharedConfigInit } from "./loadSharedConfigFiles";
export interface SourceProfileInit extends SharedConfigInit {
    /**
     * The configuration profile to use.
     */
    profile?: string;
}
/**
 * Load profiles from credentials and config INI files and normalize them into a
 * single profile list.
 *
 * @internal
 */
export declare const parseKnownFiles: (init: SourceProfileInit) => Promise<ParsedIniData>;
