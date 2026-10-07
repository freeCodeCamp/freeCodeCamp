import Resolver from "enhanced-resolve/lib/Resolver";
/**
 * To support Yarn PNP and pnpm we have to make sure dependencies resolved from
 * the .cache folder should be resolved from the gatsby package directory
 * If you see error like
 *
 * ModuleNotFoundError: Module not found: Error: Can't resolve 'prop-types'
 * in 'site-directory/.cache'
 *
 * it probably means this plugin is not enabled when it should be and there
 * might be need to adjust conditions for setting `this.isEnabled` in the
 * constructor.
 *
 * It's not enabled always because of legacy behavior and to limit potential
 * regressions. Might be good idea to enable it always in the future
 * OR remove the need for the plugin completely by not copying `cache-dir`
 * contents to `.cache` folder and instead adjust setup to use those browser/node
 * html renderer runtime files directly from gatsby package
 */
export declare class CacheFolderResolver {
    private requestsFolder;
    private isEnabled;
    constructor(requestsFolder: string);
    apply(resolver: Resolver): void;
}
