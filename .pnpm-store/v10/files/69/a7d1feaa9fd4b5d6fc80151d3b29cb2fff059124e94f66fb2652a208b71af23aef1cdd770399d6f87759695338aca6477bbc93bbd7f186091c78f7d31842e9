import { localize } from '../../../nls.js';
import { Emitter } from '../../../base/common/event.js';
import { Registry } from '../../../platform/registry/common/platform.js';
import { Disposable } from '../../../base/common/lifecycle.js';
import { Mimes } from '../../../base/common/mime.js';
import { Extensions as Extensions$1 } from '../../../platform/configuration/common/configurationRegistry.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
// Define extension point ids
const Extensions = {
    ModesRegistry: 'editor.modesRegistry'
};
class EditorModesRegistry extends Disposable {
    constructor() {
        super();
        this._onDidChangeLanguages = this._register(new Emitter());
        this.onDidChangeLanguages = this._onDidChangeLanguages.event;
        this._languages = [];
    }
    registerLanguage(def) {
        this._languages.push(def);
        this._onDidChangeLanguages.fire(undefined);
        return {
            dispose: () => {
                for (let i = 0, len = this._languages.length; i < len; i++) {
                    if (this._languages[i] === def) {
                        this._languages.splice(i, 1);
                        return;
                    }
                }
            }
        };
    }
    getLanguages() {
        return this._languages;
    }
}
const ModesRegistry = new EditorModesRegistry();
Registry.add(Extensions.ModesRegistry, ModesRegistry);
const PLAINTEXT_LANGUAGE_ID = 'plaintext';
const PLAINTEXT_EXTENSION = '.txt';
ModesRegistry.registerLanguage({
    id: PLAINTEXT_LANGUAGE_ID,
    extensions: [PLAINTEXT_EXTENSION],
    aliases: [localize(784, "Plain Text"), 'text'],
    mimetypes: [Mimes.text]
});
Registry.as(Extensions$1.Configuration)
    .registerDefaultConfigurations([{
        overrides: {
            '[plaintext]': {
                'editor.unicodeHighlight.ambiguousCharacters': false,
                'editor.unicodeHighlight.invisibleCharacters': false
            },
            // TODO: Below is a workaround for: https://github.com/microsoft/vscode/issues/240567
            '[go]': {
                'editor.insertSpaces': false
            },
            '[makefile]': {
                'editor.insertSpaces': false,
            },
            '[shellscript]': {
                'files.eol': '\n'
            },
            '[yaml]': {
                'editor.insertSpaces': true,
                'editor.tabSize': 2
            }
        }
    }]);

export { EditorModesRegistry, Extensions, ModesRegistry, PLAINTEXT_EXTENSION, PLAINTEXT_LANGUAGE_ID };
