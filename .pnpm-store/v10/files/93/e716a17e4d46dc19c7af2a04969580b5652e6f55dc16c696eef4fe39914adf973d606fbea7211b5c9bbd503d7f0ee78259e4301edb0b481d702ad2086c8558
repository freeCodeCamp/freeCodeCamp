import { AnyColor } from "../types";
import { Plugin } from "../extend";
declare module "../colord" {
    interface Colord {
        /**
         * Produces a mixture of two colors through CIE LAB color space and returns a new Colord instance.
         */
        mix(color2: AnyColor | Colord, ratio?: number): Colord;
        /**
         * Generates a tints palette based on original color.
         */
        tints(count?: number): Colord[];
        /**
         * Generates a shades palette based on original color.
         */
        shades(count?: number): Colord[];
        /**
         * Generates a tones palette based on original color.
         */
        tones(count?: number): Colord[];
    }
}
/**
 * A plugin adding a color mixing utilities.
 */
declare const mixPlugin: Plugin;
export default mixPlugin;
