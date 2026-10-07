"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
function createRpcMessageChannel(servicePort, clientPort, linkPorts, unlinkPorts) {
    // if there is not link and unlink function provided, we assume that channel is automatically linked
    let arePortsLinked = !linkPorts && !unlinkPorts;
    return {
        servicePort,
        clientPort,
        isOpen: () => servicePort.isOpen() && clientPort.isOpen() && arePortsLinked,
        open: () => __awaiter(this, void 0, void 0, function* () {
            if (!servicePort.isOpen()) {
                yield servicePort.open();
            }
            if (!clientPort.isOpen()) {
                yield clientPort.open();
            }
            if (!arePortsLinked) {
                if (linkPorts) {
                    yield linkPorts();
                }
                arePortsLinked = true;
            }
        }),
        close: () => __awaiter(this, void 0, void 0, function* () {
            if (arePortsLinked) {
                if (unlinkPorts) {
                    yield unlinkPorts();
                }
                arePortsLinked = false;
            }
            if (servicePort.isOpen()) {
                yield servicePort.close();
            }
            if (clientPort.isOpen()) {
                yield clientPort.close();
            }
        }),
    };
}
exports.createRpcMessageChannel = createRpcMessageChannel;
