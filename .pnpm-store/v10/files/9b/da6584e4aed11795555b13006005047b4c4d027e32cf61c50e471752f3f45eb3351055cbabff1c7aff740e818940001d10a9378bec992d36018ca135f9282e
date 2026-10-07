import { Emitter } from '../../../base/common/event.js';
import { Disposable, toDisposable } from '../../../base/common/lifecycle.js';
import { Registry } from '../../registry/common/platform.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const Extensions = {
    JSONContribution: 'base.contributions.json'
};
function normalizeId(id) {
    if (id.length > 0 && id.charAt(id.length - 1) === '#') {
        return id.substring(0, id.length - 1);
    }
    return id;
}
class JSONContributionRegistry extends Disposable {
    constructor() {
        super(...arguments);
        this.schemasById = {};
        this._onDidChangeSchema = this._register(new Emitter());
    }
    registerSchema(uri, unresolvedSchemaContent, store) {
        const normalizedUri = normalizeId(uri);
        this.schemasById[normalizedUri] = unresolvedSchemaContent;
        this._onDidChangeSchema.fire(uri);
        if (store) {
            store.add(toDisposable(() => {
                delete this.schemasById[normalizedUri];
                this._onDidChangeSchema.fire(uri);
            }));
        }
    }
    notifySchemaChanged(uri) {
        this._onDidChangeSchema.fire(uri);
    }
}
const jsonContributionRegistry = new JSONContributionRegistry();
Registry.add(Extensions.JSONContribution, jsonContributionRegistry);

export { Extensions };
