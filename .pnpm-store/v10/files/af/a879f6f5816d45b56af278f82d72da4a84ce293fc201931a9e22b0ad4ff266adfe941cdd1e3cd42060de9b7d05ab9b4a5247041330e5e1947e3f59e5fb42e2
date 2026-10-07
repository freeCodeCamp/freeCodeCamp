/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { createContextKey } from '@opentelemetry/api';
const RPC_METADATA_KEY = createContextKey('OpenTelemetry SDK Context Key RPC_METADATA');
export var RPCType;
(function (RPCType) {
    RPCType["HTTP"] = "http";
})(RPCType || (RPCType = {}));
export function setRPCMetadata(context, meta) {
    return context.setValue(RPC_METADATA_KEY, meta);
}
export function deleteRPCMetadata(context) {
    return context.deleteValue(RPC_METADATA_KEY);
}
export function getRPCMetadata(context) {
    return context.getValue(RPC_METADATA_KEY);
}
//# sourceMappingURL=rpc-metadata.js.map