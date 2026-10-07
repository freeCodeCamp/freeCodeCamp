import { Message } from "./eventStream";
export interface MessageEncoder {
    encode(message: Message): Uint8Array;
}
export interface MessageDecoder {
    decode(message: ArrayBufferView): Message;
    feed(message: ArrayBufferView): void;
    endOfStream(): void;
    getMessage(): AvailableMessage;
    getAvailableMessages(): AvailableMessages;
}
export interface AvailableMessage {
    getMessage(): Message | undefined;
    isEndOfStream(): boolean;
}
export interface AvailableMessages {
    getMessages(): Message[];
    isEndOfStream(): boolean;
}
