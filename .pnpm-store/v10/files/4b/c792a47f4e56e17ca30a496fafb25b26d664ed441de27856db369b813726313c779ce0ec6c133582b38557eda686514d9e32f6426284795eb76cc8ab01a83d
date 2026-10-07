import { Emitter } from "@socket.io/component-emitter";
/**
 * Protocol version.
 *
 * @public
 */
export declare const protocol: number;
export declare enum PacketType {
    CONNECT = 0,
    DISCONNECT = 1,
    EVENT = 2,
    ACK = 3,
    CONNECT_ERROR = 4,
    BINARY_EVENT = 5,
    BINARY_ACK = 6
}
export interface Packet {
    type: PacketType;
    nsp: string;
    data?: any;
    id?: number;
    attachments?: number;
}
/**
 * A socket.io Encoder instance
 */
export declare class Encoder {
    private replacer?;
    /**
     * Encoder constructor
     *
     * @param {function} replacer - custom replacer to pass down to JSON.parse
     */
    constructor(replacer?: (this: any, key: string, value: any) => any);
    /**
     * Encode a packet as a single string if non-binary, or as a
     * buffer sequence, depending on packet type.
     *
     * @param {Object} obj - packet object
     */
    encode(obj: Packet): any[];
    /**
     * Encode packet as string.
     */
    private encodeAsString;
    /**
     * Encode packet as 'buffer sequence' by removing blobs, and
     * deconstructing packet into object with placeholders and
     * a list of buffers.
     */
    private encodeAsBinary;
}
interface DecoderReservedEvents {
    decoded: (packet: Packet) => void;
}
/**
 * A socket.io Decoder instance
 *
 * @return {Object} decoder
 */
export declare class Decoder extends Emitter<{}, {}, DecoderReservedEvents> {
    private reviver?;
    private reconstructor;
    /**
     * Decoder constructor
     *
     * @param {function} reviver - custom reviver to pass down to JSON.stringify
     */
    constructor(reviver?: (this: any, key: string, value: any) => any);
    /**
     * Decodes an encoded packet string into packet JSON.
     *
     * @param {String} obj - encoded packet
     */
    add(obj: any): void;
    /**
     * Decode a packet String (JSON data)
     *
     * @param {String} str
     * @return {Object} packet
     */
    private decodeString;
    private tryParse;
    private static isPayloadValid;
    /**
     * Deallocates a parser's resources
     */
    destroy(): void;
}
export declare function isPacketValid(packet: Packet): boolean;
export {};
