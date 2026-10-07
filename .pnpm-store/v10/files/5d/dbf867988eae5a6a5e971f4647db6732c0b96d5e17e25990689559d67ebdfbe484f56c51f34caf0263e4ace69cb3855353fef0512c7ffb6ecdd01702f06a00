import { Plugin } from "../extend";
interface ConvertOptions {
    closest?: boolean;
}
declare module "../colord" {
    interface Colord {
        /** Finds CSS color keyword that matches with the color value */
        toName(options?: ConvertOptions): string | undefined;
    }
}
/**
 * Plugin to work with named colors.
 * Adds a parser to read CSS color names and `toName` method.
 * See https://www.w3.org/TR/css-color-4/#named-colors
 * Supports 'transparent' string as defined in
 * https://drafts.csswg.org/css-color/#transparent-color
 */
declare const namesPlugin: Plugin;
export default namesPlugin;
