import { EventEmitter } from '../utils/EventEmitter.js';
/**
 * Implements simple transport that allows sending string messages via
 * `sendCommand` and receiving them via `on('message')`.
 */
export declare class SimpleTransport extends EventEmitter<Record<'message', string>> {
    #private;
    /**
     * @param sendCommandDelegate delegate to be called in `sendCommand`.
     */
    constructor(sendCommandDelegate: (plainCommand: string) => Promise<void>);
    sendCommand(plainCommand: string): Promise<void>;
}
