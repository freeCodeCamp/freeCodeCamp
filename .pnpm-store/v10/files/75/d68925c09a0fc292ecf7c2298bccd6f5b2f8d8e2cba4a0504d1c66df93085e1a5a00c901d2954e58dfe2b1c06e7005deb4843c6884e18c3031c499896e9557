import { ITelemetryService } from '../../telemetry/common/telemetry.js';
import { IDataChannelService } from '../common/dataChannel.js';

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
class InterceptingTelemetryService {
    constructor(_baseService, _intercept) {
        this._baseService = _baseService;
        this._intercept = _intercept;
    }
    publicLog2(eventName, data) {
        this._intercept(eventName, data);
        this._baseService.publicLog2(eventName, data);
    }
}
let DataChannelForwardingTelemetryService = class DataChannelForwardingTelemetryService extends InterceptingTelemetryService {
    constructor(telemetryService, dataChannelService) {
        super(telemetryService, (eventName, data) => {
            // filter for extension
            let forward = true;
            if (data && shouldForwardToChannel in data) {
                forward = Boolean(data[shouldForwardToChannel]);
            }
            if (forward) {
                dataChannelService.getDataChannel('editTelemetry').sendData({ eventName, data: data ?? {} });
            }
        });
    }
};
DataChannelForwardingTelemetryService = __decorate([
    __param(0, ITelemetryService),
    __param(1, IDataChannelService)
], DataChannelForwardingTelemetryService);
const shouldForwardToChannel = Symbol('shouldForwardToChannel');
function forwardToChannelIf(value) {
    return {
        // This will not be sent via telemetry, it is just a marker
        [shouldForwardToChannel]: value
    };
}
function isCopilotLikeExtension(extensionId) {
    if (!extensionId) {
        return false;
    }
    const extIdLowerCase = extensionId.toLowerCase();
    return extIdLowerCase === 'github.copilot' || extIdLowerCase === 'github.copilot-chat';
}

export { DataChannelForwardingTelemetryService, InterceptingTelemetryService, forwardToChannelIf, isCopilotLikeExtension };
