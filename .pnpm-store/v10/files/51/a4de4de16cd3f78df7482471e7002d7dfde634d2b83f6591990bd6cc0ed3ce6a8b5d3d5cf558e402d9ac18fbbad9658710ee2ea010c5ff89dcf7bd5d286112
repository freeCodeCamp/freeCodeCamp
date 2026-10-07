import { LchaColor } from "../types";
import { Plugin } from "../extend";
declare module "../colord" {
    interface Colord {
        /**
         * Converts a color to CIELCH (Lightness-Chroma-Hue) color space and returns an object.
         * https://lea.verou.me/2020/04/lch-colors-in-css-what-why-and-how/
         * https://en.wikipedia.org/wiki/CIELAB_color_space#Cylindrical_model
         */
        toLch(): LchaColor;
        /**
         * Converts a color to CIELCH (Lightness-Chroma-Hue) color space and returns a string.
         * https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/lch()
         */
        toLchString(): string;
    }
}
/**
 * A plugin adding support for CIELCH color space.
 * https://lea.verou.me/2020/04/lch-colors-in-css-what-why-and-how/
 * https://en.wikipedia.org/wiki/CIELAB_color_space#Cylindrical_model
 */
declare const lchPlugin: Plugin;
export default lchPlugin;
