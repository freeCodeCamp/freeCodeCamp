import { Plugin } from "../extend";
export declare type HarmonyType = "analogous" | "complementary" | "double-split-complementary" | "rectangle" | "split-complementary" | "tetradic" | "triadic";
declare module "../colord" {
    interface Colord {
        /**
         * Returns an array of harmony colors as `Colord` instances.
         */
        harmonies(type?: HarmonyType): Colord[];
    }
}
/**
 * A plugin adding functionality to generate harmony colors.
 * https://en.wikipedia.org/wiki/Harmony_(color)
 */
declare const harmoniesPlugin: Plugin;
export default harmoniesPlugin;
