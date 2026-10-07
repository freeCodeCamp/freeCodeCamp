declare module "node:sea" {
    type AssetKey = string;
    /**
     * @since v20.12.0
     * @return Whether this script is running inside a single-executable application.
     */
    function isSea(): boolean;
    /**
     * This method can be used to retrieve the assets configured to be bundled into the
     * single-executable application at build time.
     * An error is thrown when no matching asset can be found.
     * @since v20.12.0
     */
    function getAsset(key: AssetKey): ArrayBuffer;
    function getAsset(key: AssetKey, encoding: string): string;
    /**
     * Similar to `sea.getAsset()`, but returns the result in a [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob).
     * An error is thrown when no matching asset can be found.
     * @since v20.12.0
     */
    function getAssetAsBlob(key: AssetKey, options?: {
        type: string;
    }): Blob;
    /**
     * This method can be used to retrieve the assets configured to be bundled into the
     * single-executable application at build time.
     * An error is thrown when no matching asset can be found.
     *
     * Unlike `sea.getRawAsset()` or `sea.getAssetAsBlob()`, this method does not
     * return a copy. Instead, it returns the raw asset bundled inside the executable.
     *
     * For now, users should avoid writing to the returned array buffer. If the
     * injected section is not marked as writable or not aligned properly,
     * writes to the returned array buffer is likely to result in a crash.
     * @since v20.12.0
     */
    function getRawAsset(key: AssetKey): ArrayBuffer;
    /**
     * This method can be used to retrieve an array of all the keys of assets
     * embedded into the single-executable application.
     * An error is thrown when not running inside a single-executable application.
     * @since v24.8.0
     * @returns An array containing all the keys of the assets
     * embedded in the executable. If no assets are embedded, returns an empty array.
     */
    function getAssetKeys(): string[];
}
