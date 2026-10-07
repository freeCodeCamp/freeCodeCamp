"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebTransport = void 0;
const transport_1 = require("../transport");
const debug_1 = require("debug");
const engine_io_parser_1 = require("engine.io-parser");
const debug = (0, debug_1.default)("engine:webtransport");
/**
 * Reference: https://developer.mozilla.org/en-US/docs/Web/API/WebTransport_API
 */
class WebTransport extends transport_1.Transport {
    constructor(session, stream, reader) {
        super({ _query: { EIO: "4" } });
        this.session = session;
        const transformStream = (0, engine_io_parser_1.createPacketEncoderStream)();
        transformStream.readable.pipeTo(stream.writable).catch(() => {
            debug("the stream was closed");
        });
        this.writer = transformStream.writable.getWriter();
        (async () => {
            try {
                while (true) {
                    const { value, done } = await reader.read();
                    if (done) {
                        debug("session is closed");
                        break;
                    }
                    debug("received chunk: %o", value);
                    this.onPacket(value);
                }
            }
            catch (e) {
                debug("error while reading: %s", e.message);
            }
        })();
        session.closed.then(() => this.onClose());
        this.writable = true;
    }
    get name() {
        return "webtransport";
    }
    async send(packets) {
        this.writable = false;
        try {
            for (let i = 0; i < packets.length; i++) {
                const packet = packets[i];
                await this.writer.write(packet);
            }
        }
        catch (e) {
            debug("error while writing: %s", e.message);
        }
        this.emit("drain");
        this.writable = true;
        this.emit("ready");
    }
    doClose(fn) {
        debug("closing WebTransport session");
        this.session.close();
        fn && fn();
    }
}
exports.WebTransport = WebTransport;
