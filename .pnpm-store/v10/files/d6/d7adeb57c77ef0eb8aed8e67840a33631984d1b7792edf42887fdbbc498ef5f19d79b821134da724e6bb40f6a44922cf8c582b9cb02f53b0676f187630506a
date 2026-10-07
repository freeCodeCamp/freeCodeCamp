"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StreamDescription = void 0;
const bson_1 = require("../bson");
const common_1 = require("../sdam/common");
const server_description_1 = require("../sdam/server_description");
const RESPONSE_FIELDS = [
    'minWireVersion',
    'maxWireVersion',
    'maxBsonObjectSize',
    'maxMessageSizeBytes',
    'maxWriteBatchSize',
    'logicalSessionTimeoutMinutes'
];
/** @public */
class StreamDescription {
    constructor(address, options) {
        this.hello = null;
        this.address = address;
        this.type = common_1.ServerType.Unknown;
        this.minWireVersion = undefined;
        this.maxWireVersion = undefined;
        this.maxBsonObjectSize = 16777216;
        this.maxMessageSizeBytes = 48000000;
        this.maxWriteBatchSize = 100000;
        this.logicalSessionTimeoutMinutes = options?.logicalSessionTimeoutMinutes;
        this.loadBalanced = !!options?.loadBalanced;
        this.compressors =
            options && options.compressors && Array.isArray(options.compressors)
                ? options.compressors
                : [];
        this.serverConnectionId = null;
    }
    receiveResponse(response) {
        if (response == null) {
            return;
        }
        this.hello = response;
        this.type = (0, server_description_1.parseServerType)(response);
        if ('connectionId' in response) {
            this.serverConnectionId = this.parseServerConnectionID(response.connectionId);
        }
        else {
            this.serverConnectionId = null;
        }
        for (const field of RESPONSE_FIELDS) {
            if (response[field] != null) {
                this[field] = response[field];
            }
            // testing case
            if ('__nodejs_mock_server__' in response) {
                this.__nodejs_mock_server__ = response['__nodejs_mock_server__'];
            }
        }
        if (response.compression) {
            this.compressor = this.compressors.filter(c => response.compression?.includes(c))[0];
        }
    }
    /* @internal */
    parseServerConnectionID(serverConnectionId) {
        // Connection ids are always integral, so it's safe to coerce doubles as well as
        // any integral type.
        return bson_1.Long.isLong(serverConnectionId)
            ? serverConnectionId.toBigInt()
            : // @ts-expect-error: Doubles are coercible to number
                BigInt(serverConnectionId);
    }
}
exports.StreamDescription = StreamDescription;
//# sourceMappingURL=stream_description.js.map