import { LabaColor, AnyColor } from "../types";
import { Plugin } from "../extend";
declare module "../colord" {
    interface Colord {
        /**
         * Converts a color to CIELAB color space and returns an object.
         * The object always includes `alpha` value [0, 1].
         */
        toLab(): LabaColor;
        /**
         * Calculates the perceived color difference for two colors according to
         * [Delta E2000](https://en.wikipedia.org/wiki/Color_difference#CIEDE2000).
         * Returns a value in [0, 1] range.
         */
        delta(color?: AnyColor | Colord): number;
    }
}
/**
 * A plugin adding support for CIELAB color space.
 * https://en.wikipedia.org/wiki/CIELAB_color_space
 */
declare const labPlugin: Plugin;
export default labPlugin;
