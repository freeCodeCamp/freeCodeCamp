export = pluginCreator;
/** @typedef {{lint?: boolean}} Options */
/**
 * @type {import('postcss').PluginCreator<Options>}
 * @param {Options} opts
 * @return {import('postcss').Plugin}
 */
declare function pluginCreator(opts?: Options): import('postcss').Plugin;
declare namespace pluginCreator {
    export { detect, postcss, Options };
}
type Options = {
    lint?: boolean;
};
declare function detect(node: import('postcss').Node): boolean;
declare var postcss: true;
