import { Plugin } from "../extend";
interface MinificationOptions {
    hex?: boolean;
    alphaHex?: boolean;
    rgb?: boolean;
    hsl?: boolean;
    name?: boolean;
    transparent?: boolean;
}
declare module "../colord" {
    interface Colord {
        /** Returns the shortest string representation of the color */
        minify(options?: MinificationOptions): string;
    }
}
/**
 * A plugin adding a color minification utilities.
 */
declare const minifyPlugin: Plugin;
export default minifyPlugin;
