export = pluginCreator;
/** @typedef {{encode?: boolean, plugins?: object[]} & import('svgo').OptimizeOptions} Options */
/**
 * @type {import('postcss').PluginCreator<Options>}
 * @param {Options} opts
 * @return {import('postcss').Plugin}
 */
declare function pluginCreator(opts?: Options): import('postcss').Plugin;
declare namespace pluginCreator {
    export { postcss, Options };
}
type Options = {
    encode?: boolean;
    plugins?: object[];
} & import('svgo').OptimizeOptions;
declare var postcss: true;
import { encode } from "./lib/url";
