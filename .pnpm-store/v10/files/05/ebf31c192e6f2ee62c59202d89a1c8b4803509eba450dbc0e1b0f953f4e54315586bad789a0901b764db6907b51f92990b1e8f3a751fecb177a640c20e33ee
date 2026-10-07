import { memoize } from "@smithy/property-provider";
import bowser from "bowser";
import { DEFAULTS_MODE_OPTIONS } from "./constants";
export const resolveDefaultsModeConfig = ({ defaultsMode, } = {}) => memoize(async () => {
    const mode = typeof defaultsMode === "function" ? await defaultsMode() : defaultsMode;
    switch (mode?.toLowerCase()) {
        case "auto":
            return Promise.resolve(isMobileBrowser() ? "mobile" : "standard");
        case "mobile":
        case "in-region":
        case "cross-region":
        case "standard":
        case "legacy":
            return Promise.resolve(mode?.toLocaleLowerCase());
        case undefined:
            return Promise.resolve("legacy");
        default:
            throw new Error(`Invalid parameter for "defaultsMode", expect ${DEFAULTS_MODE_OPTIONS.join(", ")}, got ${mode}`);
    }
});
const isMobileBrowser = () => {
    const parsedUA = typeof window !== "undefined" && window?.navigator?.userAgent
        ? bowser.parse(window.navigator.userAgent)
        : undefined;
    const platform = parsedUA?.platform?.type;
    return platform === "tablet" || platform === "mobile";
};
