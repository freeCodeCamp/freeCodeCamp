"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createRpcMessage(procedure, id, type, payload, source) {
    return {
        rpc: true,
        type,
        id,
        procedure,
        payload,
        source,
    };
}
exports.createRpcMessage = createRpcMessage;
function createRpcCall(procedure, index, payload) {
    return createRpcMessage(procedure, index, 'call', payload);
}
exports.createRpcCall = createRpcCall;
function createRpcReturn(procedure, index, payload) {
    return createRpcMessage(procedure, index, 'return', payload);
}
exports.createRpcReturn = createRpcReturn;
function createRpcThrow(procedure, index, payload) {
    return createRpcMessage(procedure, index, 'throw', payload);
}
exports.createRpcThrow = createRpcThrow;
function isRpcMessage(candidate) {
    return !!(typeof candidate === 'object' && candidate && candidate.rpc);
}
exports.isRpcMessage = isRpcMessage;
function isRpcCallMessage(candidate) {
    return isRpcMessage(candidate) && candidate.type === 'call';
}
exports.isRpcCallMessage = isRpcCallMessage;
function isRpcReturnMessage(candidate) {
    return isRpcMessage(candidate) && candidate.type === 'return';
}
exports.isRpcReturnMessage = isRpcReturnMessage;
function isRpcThrowMessage(candidate) {
    return isRpcMessage(candidate) && candidate.type === 'throw';
}
exports.isRpcThrowMessage = isRpcThrowMessage;
function getRpcMessageKey(message) {
    return `${message.procedure}_${message.id}`;
}
exports.getRpcMessageKey = getRpcMessageKey;
