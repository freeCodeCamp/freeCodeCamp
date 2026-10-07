import type { Transport } from '../utils/transport.js';
export declare class PipeTransport implements Transport {
    #private;
    constructor(pipeWrite: NodeJS.WritableStream, pipeRead: NodeJS.ReadableStream);
    setOnMessage(onMessage: (message: string) => void): void;
    sendMessage(message: string): void;
    close(): void;
}
