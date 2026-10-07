export class ModuleImporter {
    /**
     * Creates a new instance.
     * @param {string} [cwd] The current working directory to resolve from.
     */
    constructor(cwd?: string);
    /**
     * The base directory from which paths should be resolved.
     * @type {string}
     */
    cwd: string;
    /**
     * Resolves a module based on its name or location.
     * @param {string} specifier Either an npm package name or
     *      relative file path.
     * @returns {string|undefined} The location of the import.
     * @throws {Error} If specifier cannot be located.
     */
    resolve(specifier: string): string | undefined;
    /**
     * Imports a module based on its name or location.
     * @param {string} specifier Either an npm package name or
     *      relative file path.
     * @returns {Promise<object>} The module's object.
     */
    import(specifier: string): Promise<object>;
}
