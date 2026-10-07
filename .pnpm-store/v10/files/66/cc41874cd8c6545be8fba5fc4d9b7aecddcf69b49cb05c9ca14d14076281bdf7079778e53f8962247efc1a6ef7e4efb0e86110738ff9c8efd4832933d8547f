"use strict";
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRPCMetadata = exports.deleteRPCMetadata = exports.setRPCMetadata = exports.RPCType = void 0;
const api_1 = require("@opentelemetry/api");
const RPC_METADATA_KEY = (0, api_1.createContextKey)('OpenTelemetry SDK Context Key RPC_METADATA');
var RPCType;
(function (RPCType) {
    RPCType["HTTP"] = "http";
})(RPCType = exports.RPCType || (exports.RPCType = {}));
function setRPCMetadata(context, meta) {
    return context.setValue(RPC_METADATA_KEY, meta);
}
exports.setRPCMetadata = setRPCMetadata;
function deleteRPCMetadata(context) {
    return context.deleteValue(RPC_METADATA_KEY);
}
exports.deleteRPCMetadata = deleteRPCMetadata;
function getRPCMetadata(context) {
    return context.getValue(RPC_METADATA_KEY);
}
exports.getRPCMetadata = getRPCMetadata;
//# sourceMappingURL=rpc-metadata.js.map