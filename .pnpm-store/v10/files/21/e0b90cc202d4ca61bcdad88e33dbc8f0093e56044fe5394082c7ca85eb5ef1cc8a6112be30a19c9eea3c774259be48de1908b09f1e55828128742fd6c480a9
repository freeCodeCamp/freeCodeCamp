import { Disposable } from '../../../../base/common/lifecycle.js';
import '../../../../base/common/observableInternal/index.js';
import { IContextKeyService } from '../../../../platform/contextkey/common/contextkey.js';
import { IDataChannelService } from '../../../../platform/dataChannel/common/dataChannel.js';
import { observableFromEvent } from '../../../../base/common/observableInternal/observables/observableFromEvent.js';

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
/**
 * The sourceLabel must not contain '@'!
*/
function formatRecordableLogEntry(entry) {
    // eslint-disable-next-line local/code-no-any-casts
    return entry.sourceId + ' @@ ' + JSON.stringify({ ...entry, modelUri: entry.modelUri?.toString(), sourceId: undefined });
}
let StructuredLogger = class StructuredLogger extends Disposable {
    static cast() {
        return this;
    }
    constructor(_key, _contextKeyService, _dataChannelService) {
        super();
        this._key = _key;
        this._contextKeyService = _contextKeyService;
        this._dataChannelService = _dataChannelService;
        this._isEnabledContextKeyValue = observableContextKey('structuredLogger.enabled:' + this._key, this._contextKeyService).recomputeInitiallyAndOnChange(this._store);
        this.isEnabled = this._isEnabledContextKeyValue.map(v => v !== undefined);
    }
    log(data) {
        const enabled = this._isEnabledContextKeyValue.get();
        if (!enabled) {
            return false;
        }
        this._dataChannelService.getDataChannel('structuredLogger:' + this._key).sendData(data);
        return true;
    }
};
StructuredLogger = __decorate([
    __param(1, IContextKeyService),
    __param(2, IDataChannelService)
], StructuredLogger);
function observableContextKey(key, contextKeyService) {
    return observableFromEvent(contextKeyService.onDidChangeContext, () => contextKeyService.getContextKeyValue(key));
}

export { StructuredLogger, formatRecordableLogEntry };
