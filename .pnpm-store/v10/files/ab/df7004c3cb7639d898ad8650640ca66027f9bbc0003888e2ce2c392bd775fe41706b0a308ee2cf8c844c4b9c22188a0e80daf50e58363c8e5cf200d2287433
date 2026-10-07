import { RuleSetRule, WebpackPluginInstance } from "webpack";
import { GraphQLSchema } from "graphql";
import { Plugin as PostCSSPlugin } from "postcss";
import { builtinPlugins } from "./webpack-plugins";
import { IProgram, Stage } from "../commands/types";
type Loader = string | {
    loader: string;
    options?: {
        [name: string]: any;
    };
};
type LoaderResolver<T = Record<string, unknown>> = (options?: T) => Loader;
type LoaderOptions = Record<string, any>;
type RuleFactory<T = Record<string, unknown>> = (options?: T & LoaderOptions) => RuleSetRule;
type ContextualRuleFactory<T = Record<string, unknown>> = RuleFactory<T> & {
    internal?: RuleFactory<T>;
    external?: RuleFactory<T>;
};
type PluginFactory = (...args: any) => WebpackPluginInstance | null;
type BuiltinPlugins = typeof builtinPlugins;
type CSSModulesOptions = boolean | string | {
    mode?: "local" | "global" | "pure" | ((resourcePath: string) => "local" | "global" | "pure");
    auto?: boolean;
    exportGlobals?: boolean;
    localIdentName?: string;
    localIdentContext?: string;
    localIdentHashPrefix?: string;
    namedExport?: boolean;
    exportLocalsConvention?: "asIs" | "camelCaseOnly" | "camelCase" | "dashes" | "dashesOnly";
    exportOnlyLocals?: boolean;
};
/**
 * Utils that produce webpack `loader` objects
 */
interface ILoaderUtils {
    yaml: LoaderResolver;
    style: LoaderResolver;
    css: LoaderResolver<{
        url?: boolean | ((url: string, resourcePath: string) => boolean);
        import?: boolean | ((url: string, media: string, resourcePath: string) => boolean);
        modules?: CSSModulesOptions;
        sourceMap?: boolean;
        importLoaders?: number;
        esModule?: boolean;
    }>;
    postcss: LoaderResolver<{
        browsers?: Array<string>;
        overrideBrowserslist?: Array<string>;
        plugins?: Array<PostCSSPlugin> | ((loader: Loader) => Array<PostCSSPlugin>);
    }>;
    file: LoaderResolver;
    url: LoaderResolver;
    js: LoaderResolver;
    json: LoaderResolver;
    null: LoaderResolver;
    raw: LoaderResolver;
    dependencies: LoaderResolver;
    miniCssExtract: LoaderResolver;
    imports?: LoaderResolver;
    exports?: LoaderResolver;
}
interface IModuleThatUseGatsby {
    name: string;
    path: string;
}
type CssLoaderModuleOption = boolean | Record<string, any> | string;
/**
 * Utils that produce webpack rule objects
 */
interface IRuleUtils {
    /**
     * Handles JavaScript compilation via babel
     */
    js: RuleFactory<{
        modulesThatUseGatsby?: Array<IModuleThatUseGatsby>;
    }>;
    dependencies: RuleFactory<{
        modulesThatUseGatsby?: Array<IModuleThatUseGatsby>;
    }>;
    yaml: RuleFactory;
    fonts: RuleFactory;
    images: RuleFactory;
    miscAssets: RuleFactory;
    media: RuleFactory;
    css: ContextualRuleFactory<{
        browsers?: Array<string>;
        modules?: CssLoaderModuleOption;
    }>;
    cssModules: RuleFactory;
    postcss: ContextualRuleFactory<{
        overrideBrowserOptions: Array<string>;
    }>;
    eslint: (schema: GraphQLSchema) => RuleSetRule;
    eslintRequired: () => RuleSetRule;
}
type PluginUtils = BuiltinPlugins & {
    extractText: PluginFactory;
    uglify: PluginFactory;
    moment: PluginFactory;
    extractStats: PluginFactory;
    minifyJs: PluginFactory;
    minifyCss: PluginFactory;
    fastRefresh: PluginFactory;
    eslintGraphqlSchemaReload: PluginFactory;
    virtualModules: PluginFactory;
    eslint: PluginFactory;
    eslintRequired: PluginFactory;
};
/**
 * webpack atoms namespace
 */
interface IWebpackUtils {
    loaders: ILoaderUtils;
    rules: IRuleUtils;
    plugins: PluginUtils;
}
/**
 * A factory method that produces an atoms namespace
 */
export declare const createWebpackUtils: (stage: Stage, program: IProgram) => IWebpackUtils;
export {};
