/**
 * This feature allows the distribution of a Node.js application conveniently to a
 * system that does not have Node.js installed.
 *
 * Node.js supports the creation of [single executable applications](https://github.com/nodejs/single-executable) by allowing
 * the injection of a blob prepared by Node.js, which can contain a bundled script,
 * into the `node` binary. During start up, the program checks if anything has been
 * injected. If the blob is found, it executes the script in the blob. Otherwise
 * Node.js operates as it normally does.
 *
 * The single executable application feature currently only supports running a
 * single embedded script using the `CommonJS` module system.
 *
 * Users can create a single executable application from their bundled script
 * with the `node` binary itself and any tool which can inject resources into the
 * binary.
 *
 * Here are the steps for creating a single executable application using one such
 * tool, [postject](https://github.com/nodejs/postject):
 *
 * 1. Create a JavaScript file:
 * ```bash
 * echo 'console.log(`Hello, ${process.argv[2]}!`);' > hello.js
 * ```
 * 2. Create a configuration file building a blob that can be injected into the
 * single executable application (see `Generating single executable preparation blobs` for details):
 * ```bash
 * echo '{ "main": "hello.js", "output": "sea-prep.blob" }' > sea-config.json
 * ```
 * 3. Generate the blob to be injected:
 * ```bash
 * node --experimental-sea-config sea-config.json
 * ```
 * 4. Create a copy of the `node` executable and name it according to your needs:
 *    * On systems other than Windows:
 * ```bash
 * cp $(command -v node) hello
 * ```
 *    * On Windows:
 * ```text
 * node -e "require('fs').copyFileSync(process.execPath, 'hello.exe')"
 * ```
 * The `.exe` extension is necessary.
 * 5. Remove the signature of the binary (macOS and Windows only):
 *    * On macOS:
 * ```bash
 * codesign --remove-signature hello
 * ```
 *    * On Windows (optional):
 * [signtool](https://learn.microsoft.com/en-us/windows/win32/seccrypto/signtool) can be used from the installed [Windows SDK](https://developer.microsoft.com/en-us/windows/downloads/windows-sdk/).
 * If this step is
 * skipped, ignore any signature-related warning from postject.
 * ```powershell
 * signtool remove /s hello.exe
 * ```
 * 6. Inject the blob into the copied binary by running `postject` with
 * the following options:
 *    * `hello` / `hello.exe` \- The name of the copy of the `node` executable
 *    created in step 4.
 *    * `NODE_SEA_BLOB` \- The name of the resource / note / section in the binary
 *    where the contents of the blob will be stored.
 *    * `sea-prep.blob` \- The name of the blob created in step 1.
 *    * `--sentinel-fuse NODE_SEA_FUSE_fce680ab2cc467b6e072b8b5df1996b2` \- The [fuse](https://www.electronjs.org/docs/latest/tutorial/fuses) used by the Node.js project to detect if a file has been
 * injected.
 *    * `--macho-segment-name NODE_SEA` (only needed on macOS) - The name of the
 *    segment in the binary where the contents of the blob will be
 *    stored.
 * To summarize, here is the required command for each platform:
 *    * On Linux:
 *    ```bash
 *    npx postject hello NODE_SEA_BLOB sea-prep.blob \
 *        --sentinel-fuse NODE_SEA_FUSE_fce680ab2cc467b6e072b8b5df1996b2
 *    ```
 *    * On Windows - PowerShell:
 *    ```powershell
 *    npx postject hello.exe NODE_SEA_BLOB sea-prep.blob `
 *        --sentinel-fuse NODE_SEA_FUSE_fce680ab2cc467b6e072b8b5df1996b2
 *    ```
 *    * On Windows - Command Prompt:
 *    ```text
 *    npx postject hello.exe NODE_SEA_BLOB sea-prep.blob ^
 *        --sentinel-fuse NODE_SEA_FUSE_fce680ab2cc467b6e072b8b5df1996b2
 *    ```
 *    * On macOS:
 *    ```bash
 *    npx postject hello NODE_SEA_BLOB sea-prep.blob \
 *        --sentinel-fuse NODE_SEA_FUSE_fce680ab2cc467b6e072b8b5df1996b2 \
 *        --macho-segment-name NODE_SEA
 *    ```
 * 7. Sign the binary (macOS and Windows only):
 *    * On macOS:
 * ```bash
 * codesign --sign - hello
 * ```
 *    * On Windows (optional):
 * A certificate needs to be present for this to work. However, the unsigned
 * binary would still be runnable.
 * ```powershell
 * signtool sign /fd SHA256 hello.exe
 * ```
 * 8. Run the binary:
 *    * On systems other than Windows
 * ```console
 * $ ./hello world
 * Hello, world!
 * ```
 *    * On Windows
 * ```console
 * $ .\hello.exe world
 * Hello, world!
 * ```
 * @since v19.7.0, v18.16.0
 * @experimental
 * @see [source](https://github.com/nodejs/node/blob/v24.x/src/node_sea.cc)
 */
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
