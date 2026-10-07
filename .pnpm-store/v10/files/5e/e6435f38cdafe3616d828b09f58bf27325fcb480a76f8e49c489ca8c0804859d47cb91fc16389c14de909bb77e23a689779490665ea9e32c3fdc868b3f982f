/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class InternalEditorAction {
    constructor(id, label, alias, metadata, _precondition, _run, _contextKeyService) {
        this.id = id;
        this.label = label;
        this.alias = alias;
        this.metadata = metadata;
        this._precondition = _precondition;
        this._run = _run;
        this._contextKeyService = _contextKeyService;
    }
    isSupported() {
        return this._contextKeyService.contextMatchesRules(this._precondition);
    }
    run(args) {
        if (!this.isSupported()) {
            return Promise.resolve(undefined);
        }
        return this._run(args);
    }
}

export { InternalEditorAction };
