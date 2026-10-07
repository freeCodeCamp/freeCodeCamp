/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
const nodePath = __importStar(require("path"));
const posixPath = nodePath.posix || nodePath;
const slash = '/';
var Utils;
(function (Utils) {
    /**
     * Joins one or more input paths to the path of URI.
     * '/' is used as the directory separation character.
     *
     * The resolved path will be normalized. That means:
     *  - all '..' and '.' segments are resolved.
     *  - multiple, sequential occurences of '/' are replaced by a single instance of '/'.
     *  - trailing separators are preserved.
     *
     * @param uri The input URI.
     * @param paths The paths to be joined with the path of URI.
     * @returns A URI with the joined path. All other properties of the URI (scheme, authority, query, fragments, ...) will be taken from the input URI.
     */
    function joinPath(uri, ...paths) {
        return uri.with({ path: posixPath.join(uri.path, ...paths) });
    }
    Utils.joinPath = joinPath;
    /**
     * Resolves one or more paths against the path of a URI.
     * '/' is used as the directory separation character.
     *
     * The resolved path will be normalized. That means:
     *  - all '..' and '.' segments are resolved.
     *  - multiple, sequential occurences of '/' are replaced by a single instance of '/'.
     *  - trailing separators are removed.
     *
     * @param uri The input URI.
     * @param paths The paths to resolve against the path of URI.
     * @returns A URI with the resolved path. All other properties of the URI (scheme, authority, query, fragments, ...) will be taken from the input URI.
     */
    function resolvePath(uri, ...paths) {
        let path = uri.path;
        let slashAdded = false;
        if (path[0] !== slash) {
            path = slash + path; // make the path abstract: for posixPath.resolve the first segments has to be absolute or cwd is used.
            slashAdded = true;
        }
        let resolvedPath = posixPath.resolve(path, ...paths);
        if (slashAdded && resolvedPath[0] === slash && !uri.authority) {
            resolvedPath = resolvedPath.substring(1);
        }
        return uri.with({ path: resolvedPath });
    }
    Utils.resolvePath = resolvePath;
    /**
     * Returns a URI where the path is the directory name of the input uri, similar to the Unix dirname command.
     * In the path, '/' is recognized as the directory separation character. Trailing directory separators are ignored.
     * The orignal URI is returned if the URIs path is empty or does not contain any path segments.
     *
     * @param uri The input URI.
     * @return The last segment of the URIs path.
     */
    function dirname(uri) {
        if (uri.path.length === 0 || uri.path === slash) {
            return uri;
        }
        let path = posixPath.dirname(uri.path);
        if (path.length === 1 && path.charCodeAt(0) === 46 /* CharCode.Period */) {
            path = '';
        }
        return uri.with({ path });
    }
    Utils.dirname = dirname;
    /**
     * Returns the last segment of the path of a URI, similar to the Unix basename command.
     * In the path, '/' is recognized as the directory separation character. Trailing directory separators are ignored.
     * The empty string is returned if the URIs path is empty or does not contain any path segments.
     *
     * @param uri The input URI.
     * @return The base name of the URIs path.
     */
    function basename(uri) {
        return posixPath.basename(uri.path);
    }
    Utils.basename = basename;
    /**
     * Returns the extension name of the path of a URI, similar to the Unix extname command.
     * In the path, '/' is recognized as the directory separation character. Trailing directory separators are ignored.
     * The empty string is returned if the URIs path is empty or does not contain any path segments.
     *
     * @param uri The input URI.
     * @return The extension name of the URIs path.
     */
    function extname(uri) {
        return posixPath.extname(uri.path);
    }
    Utils.extname = extname;
})(Utils || (exports.Utils = Utils = {}));
