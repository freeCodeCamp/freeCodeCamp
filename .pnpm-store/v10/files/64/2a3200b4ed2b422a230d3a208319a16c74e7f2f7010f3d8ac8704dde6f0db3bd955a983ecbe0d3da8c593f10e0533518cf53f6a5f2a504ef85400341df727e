(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./cssNavigation", "../parser/cssNodes", "vscode-uri", "../utils/strings", "../utils/resources"], factory);
    }
})(function (require, exports) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SCSSNavigation = void 0;
    const cssNavigation_1 = require("./cssNavigation");
    const nodes = require("../parser/cssNodes");
    const vscode_uri_1 = require("vscode-uri");
    const strings_1 = require("../utils/strings");
    const resources_1 = require("../utils/resources");
    class SCSSNavigation extends cssNavigation_1.CSSNavigation {
        constructor(fileSystemProvider) {
            super(fileSystemProvider, true);
        }
        isRawStringDocumentLinkNode(node) {
            return (super.isRawStringDocumentLinkNode(node) ||
                node.type === nodes.NodeType.Use ||
                node.type === nodes.NodeType.Forward);
        }
        async mapReference(target, isRawLink) {
            if (this.fileSystemProvider && target && isRawLink) {
                const pathVariations = toPathVariations(target);
                for (const variation of pathVariations) {
                    if (await this.fileExists(variation)) {
                        return variation;
                    }
                }
            }
            return target;
        }
        async resolveReference(target, documentUri, documentContext, isRawLink = false) {
            if ((0, strings_1.startsWith)(target, 'sass:')) {
                return undefined; // sass library
            }
            // Following the [sass package importer](https://github.com/sass/sass/blob/f6832f974c61e35c42ff08b3640ff155071a02dd/js-api-doc/importer.d.ts#L349),
            // look for the `exports` field of the module and any `sass`, `style` or `default` that matches the import.
            // If it's only `pkg:module`, also look for `sass` and `style` on the root of package.json.
            if (target.startsWith('pkg:')) {
                return this.resolvePkgModulePath(target, documentUri, documentContext);
            }
            return super.resolveReference(target, documentUri, documentContext, isRawLink);
        }
        async resolvePkgModulePath(target, documentUri, documentContext) {
            const bareTarget = target.replace('pkg:', '');
            const moduleName = bareTarget.includes('/') ? (0, cssNavigation_1.getModuleNameFromPath)(bareTarget) : bareTarget;
            const rootFolderUri = documentContext.resolveReference('/', documentUri);
            const documentFolderUri = (0, resources_1.dirname)(documentUri);
            const modulePath = await this.resolvePathToModule(moduleName, documentFolderUri, rootFolderUri);
            if (!modulePath) {
                return undefined;
            }
            // Since submodule exports import strings don't match the file system,
            // we need the contents of `package.json` to look up the correct path.
            let packageJsonContent = await this.getContent((0, resources_1.joinPath)(modulePath, 'package.json'));
            if (!packageJsonContent) {
                return undefined;
            }
            let packageJson;
            try {
                packageJson = JSON.parse(packageJsonContent);
            }
            catch (e) {
                // problems parsing package.json
                return undefined;
            }
            const subpath = bareTarget.substring(moduleName.length + 1);
            if (packageJson.exports) {
                if (!subpath) {
                    // exports may look like { "sass": "./_index.scss" } or { ".": { "sass": "./_index.scss" } }
                    const rootExport = packageJson.exports["."] || packageJson.exports;
                    // look for the default/index export
                    // @ts-expect-error If ['.'] is a string this just produces undefined
                    const entry = rootExport && (rootExport['sass'] || rootExport['style'] || rootExport['default']);
                    // the 'default' entry can be whatever, typically .js – confirm it looks like `scss`
                    if (entry && entry.endsWith('.scss')) {
                        const entryPath = (0, resources_1.joinPath)(modulePath, entry);
                        return entryPath;
                    }
                }
                else {
                    // The import string may be with or without .scss.
                    // Likewise the exports entry. Look up both paths.
                    // However, they need to be relative (start with ./).
                    const lookupSubpath = subpath.endsWith('.scss') ? `./${subpath.replace('.scss', '')}` : `./${subpath}`;
                    const lookupSubpathScss = subpath.endsWith('.scss') ? `./${subpath}` : `./${subpath}.scss`;
                    const subpathObject = packageJson.exports[lookupSubpathScss] || packageJson.exports[lookupSubpath];
                    if (subpathObject) {
                        // @ts-expect-error If subpathObject is a string this just produces undefined
                        const entry = subpathObject['sass'] || subpathObject['styles'] || subpathObject['default'];
                        // the 'default' entry can be whatever, typically .js – confirm it looks like `scss`
                        if (entry && entry.endsWith('.scss')) {
                            const entryPath = (0, resources_1.joinPath)(modulePath, entry);
                            return entryPath;
                        }
                    }
                    else {
                        // We have a subpath, but found no matches on direct lookup.
                        // It may be a [subpath pattern](https://nodejs.org/api/packages.html#subpath-patterns).
                        for (const [maybePattern, subpathObject] of Object.entries(packageJson.exports)) {
                            if (!maybePattern.includes("*")) {
                                continue;
                            }
                            // Patterns may also be without `.scss` on the left side, so compare without on both sides
                            const re = new RegExp((0, strings_1.convertSimple2RegExpPattern)(maybePattern.replace('.scss', '')).replace(/\.\*/g, '(.*)'));
                            const match = re.exec(lookupSubpath);
                            if (match) {
                                // @ts-expect-error If subpathObject is a string this just produces undefined
                                const entry = subpathObject['sass'] || subpathObject['styles'] || subpathObject['default'];
                                // the 'default' entry can be whatever, typically .js – confirm it looks like `scss`
                                if (entry && entry.endsWith('.scss')) {
                                    // The right-hand side of a subpath pattern is also a pattern.
                                    // Replace the pattern with the match from our regexp capture group above.
                                    const expandedPattern = entry.replace('*', match[1]);
                                    const entryPath = (0, resources_1.joinPath)(modulePath, expandedPattern);
                                    return entryPath;
                                }
                            }
                        }
                    }
                }
            }
            else if (!subpath && (packageJson.sass || packageJson.style)) {
                // Fall back to a direct lookup on `sass` and `style` on package root
                const entry = packageJson.sass || packageJson.style;
                if (entry) {
                    const entryPath = (0, resources_1.joinPath)(modulePath, entry);
                    return entryPath;
                }
            }
            return undefined;
        }
    }
    exports.SCSSNavigation = SCSSNavigation;
    function toPathVariations(target) {
        // No variation for links that ends with .css suffix
        if (target.endsWith('.css')) {
            return [target];
        }
        // If a link is like a/, try resolving a/index.scss and a/_index.scss
        if (target.endsWith('/')) {
            return [target + 'index.scss', target + '_index.scss'];
        }
        const targetUri = vscode_uri_1.URI.parse(target.replace(/\.scss$/, ''));
        const basename = vscode_uri_1.Utils.basename(targetUri);
        const dirname = vscode_uri_1.Utils.dirname(targetUri);
        if (basename.startsWith('_')) {
            // No variation for links such as _a
            return [vscode_uri_1.Utils.joinPath(dirname, basename + '.scss').toString(true)];
        }
        return [
            vscode_uri_1.Utils.joinPath(dirname, basename + '.scss').toString(true),
            vscode_uri_1.Utils.joinPath(dirname, '_' + basename + '.scss').toString(true),
            target + '/index.scss',
            target + '/_index.scss',
            vscode_uri_1.Utils.joinPath(dirname, basename + '.css').toString(true)
        ];
    }
});
