import { Compiler } from "webpack";
/**
 * This is total hack that is meant to handle:
 *  - https://github.com/webpack-contrib/mini-css-extract-plugin/issues/706
 *  - https://github.com/webpack-contrib/mini-css-extract-plugin/issues/708
 * The way it works it is looking up what HotModuleReplacementPlugin checks internally
 * and tricks it by checking up if any modules that uses mini-css-extract-plugin
 * changed or was newly added and then modifying blank.css hash.
 * blank.css is css module that is used by all pages and is there from the start
 * so changing hash of that _should_ ensure that:
 *  - when new css is imported it will reload css
 *  - when css imported by not loaded (by runtime) page template changes it will reload css
 */
export declare class ForceCssHMRForEdgeCases {
    private name;
    private originalBlankCssHash;
    private blankCssKey;
    private hackCounter;
    private previouslySeenCss;
    constructor();
    apply(compiler: Compiler): void;
}
