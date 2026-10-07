import { Transport } from "../transport.js";
export declare abstract class Polling extends Transport {
    private _polling;
    get name(): string;
    /**
     * Opens the socket (triggers polling). We write a PING message to determine
     * when the transport is open.
     *
     * @protected
     */
    doOpen(): void;
    /**
     * Pauses polling.
     *
     * @param {Function} onPause - callback upon buffers are flushed and transport is paused
     * @package
     */
    pause(onPause: any): void;
    /**
     * Starts polling cycle.
     *
     * @private
     */
    private _poll;
    /**
     * Overloads onData to detect payloads.
     *
     * @protected
     */
    onData(data: any): void;
    /**
     * For polling, send a close packet.
     *
     * @protected
     */
    doClose(): void;
    /**
     * Writes a packets payload.
     *
     * @param {Array} packets - data packets
     * @protected
     */
    write(packets: any): void;
    /**
     * Generates uri for connection.
     *
     * @private
     */
    protected uri(): string;
    abstract doPoll(): any;
    abstract doWrite(data: string, callback: () => void): any;
}
