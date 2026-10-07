import { HwbaColor } from "../types";
import { Plugin } from "../extend";
declare module "../colord" {
    interface Colord {
        /**
         * Converts a color to HWB (Hue-Whiteness-Blackness) color space and returns an object.
         * https://en.wikipedia.org/wiki/HWB_color_model
         */
        toHwb(): HwbaColor;
        /**
         * Converts a color to HWB (Hue-Whiteness-Blackness) color space and returns a string.
         * https://www.w3.org/TR/css-color-4/#the-hwb-notation
         */
        toHwbString(): string;
    }
}
/**
 * A plugin adding support for HWB (Hue-Whiteness-Blackness) color model.
 * https://en.wikipedia.org/wiki/HWB_color_model
 * https://www.w3.org/TR/css-color-4/#the-hwb-notation
 */
declare const hwbPlugin: Plugin;
export default hwbPlugin;
