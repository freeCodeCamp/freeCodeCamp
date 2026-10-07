import * as find from "empathic/find";
/**
* Find the closest "package.json" file while walking parent directories.
* @returns The absolute path to a "package.json", if found.
*/
export declare function up(options?: find.Options): string | undefined;
/**
* Construct a path to a `node_modules/.cache/<name>` directory.
*
* This may return `undefined` if:
*   1. no "package.json" could be found
*   2. the nearest "node_modules" directory is not writable
*   3. the "node_modules" parent directory is not writable
*
* > [NOTE]
* > You may define a `CACHE_DIR` environment variable, which will be
* > used (as defined) instead of traversing the filesystem for the
* > closest "package.json" and inferring a "node_modules" location.
*
* @see find-cache-dir for more information.
*
* @param name The name of your module/cache.
* @returns The absolute path of the cache directory, if found.
*/
export declare function cache(name: string, options?: find.Options & {
	create?: boolean;
}): string | undefined;
