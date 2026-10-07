import { windowOpenNoOpener } from '../../../base/browser/dom.js';
import { mainWindow } from '../../../base/browser/window.js';
import { CancellationToken } from '../../../base/common/cancellation.js';
import { LinkedList } from '../../../base/common/linkedList.js';
import { ResourceMap } from '../../../base/common/map.js';
import { parse } from '../../../base/common/marshalling.js';
import { matchesScheme, Schemas, matchesSomeScheme } from '../../../base/common/network.js';
import { normalizePath } from '../../../base/common/resources.js';
import { URI } from '../../../base/common/uri.js';
import { ICodeEditorService } from './codeEditorService.js';
import { ICommandService } from '../../../platform/commands/common/commands.js';
import { EditorOpenSource } from '../../../platform/editor/common/editor.js';
import { extractSelection } from '../../../platform/opener/common/opener.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
let CommandOpener = class CommandOpener {
    constructor(_commandService) {
        this._commandService = _commandService;
    }
    async open(target, options) {
        if (!matchesScheme(target, Schemas.command)) {
            return false;
        }
        if (!options?.allowCommands) {
            // silently ignore commands when command-links are disabled, also
            // suppress other openers by returning TRUE
            return true;
        }
        if (typeof target === 'string') {
            target = URI.parse(target);
        }
        if (Array.isArray(options.allowCommands)) {
            // Only allow specific commands
            if (!options.allowCommands.includes(target.path)) {
                // Suppress other openers by returning TRUE
                return true;
            }
        }
        // execute as command
        let args = [];
        try {
            args = parse(decodeURIComponent(target.query));
        }
        catch {
            // ignore and retry
            try {
                args = parse(target.query);
            }
            catch {
                // ignore error
            }
        }
        if (!Array.isArray(args)) {
            args = [args];
        }
        await this._commandService.executeCommand(target.path, ...args);
        return true;
    }
};
CommandOpener = __decorate([
    __param(0, ICommandService)
], CommandOpener);
let EditorOpener = class EditorOpener {
    constructor(_editorService) {
        this._editorService = _editorService;
    }
    async open(target, options) {
        if (typeof target === 'string') {
            target = URI.parse(target);
        }
        const { selection, uri } = extractSelection(target);
        target = uri;
        if (target.scheme === Schemas.file) {
            target = normalizePath(target); // workaround for non-normalized paths (https://github.com/microsoft/vscode/issues/12954)
        }
        await this._editorService.openCodeEditor({
            resource: target,
            options: {
                selection,
                source: options?.fromUserGesture ? EditorOpenSource.USER : EditorOpenSource.API,
                ...options?.editorOptions
            }
        }, this._editorService.getFocusedCodeEditor(), options?.openToSide);
        return true;
    }
};
EditorOpener = __decorate([
    __param(0, ICodeEditorService)
], EditorOpener);
let OpenerService = class OpenerService {
    constructor(editorService, commandService) {
        this._openers = new LinkedList();
        this._validators = new LinkedList();
        this._resolvers = new LinkedList();
        this._resolvedUriTargets = new ResourceMap(uri => uri.with({ path: null, fragment: null, query: null }).toString());
        this._externalOpeners = new LinkedList();
        // Default external opener is going through window.open()
        this._defaultExternalOpener = {
            openExternal: async (href) => {
                // ensure to open HTTP/HTTPS links into new windows
                // to not trigger a navigation. Any other link is
                // safe to be set as HREF to prevent a blank window
                // from opening.
                if (matchesSomeScheme(href, Schemas.http, Schemas.https)) {
                    windowOpenNoOpener(href);
                }
                else {
                    mainWindow.location.href = href;
                }
                return true;
            }
        };
        // Default opener: any external, maito, http(s), command, and catch-all-editors
        this._openers.push({
            open: async (target, options) => {
                if (options?.openExternal || matchesSomeScheme(target, Schemas.mailto, Schemas.http, Schemas.https, Schemas.vsls)) {
                    // open externally
                    await this._doOpenExternal(target, options);
                    return true;
                }
                return false;
            }
        });
        this._openers.push(new CommandOpener(commandService));
        this._openers.push(new EditorOpener(editorService));
    }
    registerOpener(opener) {
        const remove = this._openers.unshift(opener);
        return { dispose: remove };
    }
    async open(target, options) {
        // check with contributed validators
        if (!options?.skipValidation) {
            const targetURI = typeof target === 'string' ? URI.parse(target) : target;
            const validationTarget = this._resolvedUriTargets.get(targetURI) ?? target; // validate against the original URI that this URI resolves to, if one exists
            for (const validator of this._validators) {
                if (!(await validator.shouldOpen(validationTarget, options))) {
                    return false;
                }
            }
        }
        // check with contributed openers
        for (const opener of this._openers) {
            const handled = await opener.open(target, options);
            if (handled) {
                return true;
            }
        }
        return false;
    }
    async resolveExternalUri(resource, options) {
        for (const resolver of this._resolvers) {
            try {
                const result = await resolver.resolveExternalUri(resource, options);
                if (result) {
                    if (!this._resolvedUriTargets.has(result.resolved)) {
                        this._resolvedUriTargets.set(result.resolved, resource);
                    }
                    return result;
                }
            }
            catch {
                // noop
            }
        }
        throw new Error('Could not resolve external URI: ' + resource.toString());
    }
    async _doOpenExternal(resource, options) {
        //todo@jrieken IExternalUriResolver should support `uri: URI | string`
        const uri = typeof resource === 'string' ? URI.parse(resource) : resource;
        let externalUri;
        try {
            externalUri = (await this.resolveExternalUri(uri, options)).resolved;
        }
        catch {
            externalUri = uri;
        }
        let href;
        if (typeof resource === 'string' && uri.toString() === externalUri.toString()) {
            // open the url-string AS IS
            href = resource;
        }
        else {
            // open URI using the toString(noEncode)+encodeURI-trick
            href = encodeURI(externalUri.toString(true));
        }
        if (options?.allowContributedOpeners) {
            const preferredOpenerId = typeof options?.allowContributedOpeners === 'string' ? options?.allowContributedOpeners : undefined;
            for (const opener of this._externalOpeners) {
                const didOpen = await opener.openExternal(href, {
                    sourceUri: uri,
                    preferredOpenerId,
                }, CancellationToken.None);
                if (didOpen) {
                    return true;
                }
            }
        }
        return this._defaultExternalOpener.openExternal(href, { sourceUri: uri }, CancellationToken.None);
    }
    dispose() {
        this._validators.clear();
    }
};
OpenerService = __decorate([
    __param(0, ICodeEditorService),
    __param(1, ICommandService)
], OpenerService);

export { OpenerService };
