import Resolver from "enhanced-resolve/lib/Resolver";
/**
 * Babel-preset is set to corejs@3 which will add automatic polyfills. If a project has core-js@2 installed in their root or a package got compiled with core-js@2
 * we need to convert it to corejs@3 because core-js@2 isn't available or we might add multiple polyfills for the same problem.
 *
 * The resolver converts core-js@2 imports to core-js@3 imports to make our bundle as small as possible.
 */
export declare class CoreJSResolver {
    _coreJSNodeModulesPath: string;
    constructor();
    apply(resolver: Resolver): void;
}
