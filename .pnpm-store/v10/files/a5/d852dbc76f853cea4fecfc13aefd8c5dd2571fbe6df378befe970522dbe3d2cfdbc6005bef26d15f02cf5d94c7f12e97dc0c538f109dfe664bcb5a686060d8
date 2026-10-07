export = pluginCreator;
/** @typedef {{preferredQuote?: 'double' | 'single'}} Options */
/**
 * @type {import('postcss').PluginCreator<Options>}
 * @param {Options} opts
 * @return {import('postcss').Plugin}
 */
declare function pluginCreator(opts: Options): import('postcss').Plugin;
declare namespace pluginCreator {
    export { postcss, StringAstNode, StringAst, Options };
}
type Options = {
    preferredQuote?: 'double' | 'single';
};
declare var postcss: true;
type StringAstNode = {
    type: string;
    value: string;
} | {
    type: string;
    value: string;
} | {
    type: string;
    value: string;
} | {
    type: string;
    value: string;
};
type StringAst = {
    nodes: StringAstNode[];
    types: {
        escapedSingleQuote: number;
        escapedDoubleQuote: number;
        singleQuote: number;
        doubleQuote: number;
    };
    quotes: boolean;
};
