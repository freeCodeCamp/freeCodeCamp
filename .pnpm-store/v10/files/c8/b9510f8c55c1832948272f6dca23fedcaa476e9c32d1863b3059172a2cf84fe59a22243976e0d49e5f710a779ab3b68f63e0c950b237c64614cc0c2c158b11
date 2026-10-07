export = pluginCreator;
/**
 * @typedef {{precision: boolean | number, angle?: boolean, time?: boolean, length?: boolean} & browserslist.Options} Options */
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
    precision: boolean | number;
    angle?: boolean;
    time?: boolean;
    length?: boolean;
} & browserslist.Options;
declare var postcss: true;
import browserslist = require("browserslist");
