/**
 * @fileoverview Universal module importer
 */

//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------

const { createRequire } = require("module");
const { pathToFileURL }  = require("url");

//-----------------------------------------------------------------------------
// Helpers
//-----------------------------------------------------------------------------

const SLASHES = new Set(["/", "\\"]);

/**
 * Normalizes directories to have a trailing slash.
 * Resolve is pretty finicky -- if the directory name doesn't have
 * a trailing slash then it tries to look in the parent directory.
 * i.e., if the directory is "/usr/nzakas/foo" it will start the 
 * search in /usr/nzakas. However, if the directory is "/user/nzakas/foo/",
 * then it will start the search in /user/nzakas/foo.
 * @param {string} directory The directory to check. 
 * @returns {string} The normalized directory.
 */
function normalizeDirectory(directory) {
    if (!SLASHES.has(directory[directory.length-1])) {
        return directory + "/";
    }

    return directory;
}

//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------

/**
 * Class for importing both CommonJS and ESM modules in Node.js.
 */
exports.ModuleImporter = class ModuleImporter {

    /**
     * Creates a new instance.
     * @param {string} [cwd] The current working directory to resolve from. 
     */
    constructor(cwd = process.cwd()) {

        /**
         * The base directory from which paths should be resolved.
         * @type {string}
         */
        this.cwd = normalizeDirectory(cwd);
    }

    /**
     * Resolves a module based on its name or location.
     * @param {string} specifier Either an npm package name or
     *      relative file path.
     * @returns {string|undefined} The location of the import.
     * @throws {Error} If specifier cannot be located.
     */
    resolve(specifier) {
        const require = createRequire(this.cwd);
        return require.resolve(specifier);
    }

    /**
     * Imports a module based on its name or location.
     * @param {string} specifier Either an npm package name or
     *      relative file path.
     * @returns {Promise<object>} The module's object.
     */
    import(specifier) {
        const location = this.resolve(specifier);
        return import(pathToFileURL(location).href);
    }

}
