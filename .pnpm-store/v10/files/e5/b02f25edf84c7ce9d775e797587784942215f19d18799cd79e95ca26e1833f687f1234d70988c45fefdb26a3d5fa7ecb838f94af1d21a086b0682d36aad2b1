import { AnyColor } from "../types";
import { Plugin } from "../extend";
interface ReadabilityOptions {
    level?: "AA" | "AAA";
    size?: "normal" | "large";
}
declare module "../colord" {
    interface Colord {
        /**
         * Returns the relative luminance of a color,
         * normalized to 0 for darkest black and 1 for lightest white.
         * https://www.w3.org/TR/WCAG20/#relativeluminancedef
         * https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_Colors_and_Luminance
         */
        luminance(): number;
        /**
         * Calculates a contrast ratio for a color pair.
         * This luminance difference is expressed as a ratio ranging
         * from 1 (e.g. white on white) to 21 (e.g., black on a white).
         * WCAG requires a ratio of at least 4.5 for normal text and 3 for large text.
         * https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html
         * https://webaim.org/articles/contrast/
         */
        contrast(color2?: AnyColor | Colord): number;
        /**
         * Checks that a background and text color pair conforms to WCAG 2.0 requirements.
         * https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html
         */
        isReadable(color2?: AnyColor | Colord, options?: ReadabilityOptions): boolean;
    }
}
/**
 * A plugin adding accessibility and color contrast utilities.
 * Follows Web Content Accessibility Guidelines 2.0.
 * https://www.w3.org/TR/WCAG20/
 */
declare const a11yPlugin: Plugin;
export default a11yPlugin;
