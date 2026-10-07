import { XyzaColor } from "../types";
import { Plugin } from "../extend";
declare module "../colord" {
    interface Colord {
        toXyz(): XyzaColor;
    }
}
/**
 * A plugin adding support for CIE XYZ colorspace.
 * Wikipedia: https://en.wikipedia.org/wiki/CIE_1931_color_space
 * Helpful article: https://www.sttmedia.com/colormodel-xyz
 */
declare const xyzPlugin: Plugin;
export default xyzPlugin;
