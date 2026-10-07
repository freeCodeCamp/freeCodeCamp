/**
 * @param {string} jsonPath
 * @param {{specifier: URL | string, base?: URL}} options
 * @returns {PackageConfig}
 */
export function read(jsonPath: string, { base, specifier }: {
    specifier: URL | string;
    base?: URL;
}): PackageConfig;
/**
 * @param {URL | string} resolved
 * @returns {PackageConfig}
 */
export function getPackageScopeConfig(resolved: URL | string): PackageConfig;
/**
 * Returns the package type for a given URL.
 * @param {URL} url - The URL to get the package type for.
 * @returns {PackageType}
 */
export function getPackageType(url: URL): PackageType;
export type PackageType = "commonjs" | "module" | "none";
export type PackageConfig = {
    pjsonPath: string;
    exists: boolean;
    main?: string | undefined;
    name?: string | undefined;
    type: PackageType;
    exports?: Record<string, unknown> | undefined;
    imports?: Record<string, unknown> | undefined;
};
//# sourceMappingURL=package-json-reader.d.ts.map