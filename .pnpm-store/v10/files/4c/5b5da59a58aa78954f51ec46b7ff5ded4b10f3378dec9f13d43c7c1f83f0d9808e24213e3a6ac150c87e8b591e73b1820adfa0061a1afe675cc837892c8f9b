import type { DefaultsMode, ResolvedDefaultsMode } from "@smithy/smithy-client";
import type { Provider } from "@smithy/types";
/**
 * @internal
 */
export interface ResolveDefaultsModeConfigOptions {
    defaultsMode?: DefaultsMode | Provider<DefaultsMode>;
    region?: string | Provider<string>;
}
/**
 * Validate the defaultsMode configuration. If the value is set to "auto", it
 * resolves the value to "in-region", "cross-region", or "standard".
 *
 * @default "legacy"
 * @internal
 */
export declare const resolveDefaultsModeConfig: ({ region, defaultsMode, }?: ResolveDefaultsModeConfigOptions) => Provider<ResolvedDefaultsMode>;
