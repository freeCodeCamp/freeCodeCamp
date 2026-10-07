/**
 * Current protocol version.
 */
export declare const protocol = 3;
/**
 * Packet types.
 */
export declare const packets: {
    open: number;
    close: number;
    ping: number;
    pong: number;
    message: number;
    upgrade: number;
    noop: number;
};
/**
 * Encodes a packet.
 *
 *     <packet type id> [ <data> ]
 *
 * Example:
 *
 *     5hello world
 *     3
 *     4
 *
 * Binary is encoded in an identical principle
 *
 * @api private
 */
export declare function encodePacket(packet: any, supportsBinary?: any, utf8encode?: any, callback?: any): any;
/**
 * Encodes a packet with binary data in a base64 string
 *
 * @param {Object} packet, has `type` and `data`
 * @return {String} base64 encoded message
 */
export declare function encodeBase64Packet(packet: any, callback: any): any;
/**
 * Decodes a packet. Data also available as an ArrayBuffer if requested.
 *
 * @return {import('engine.io-parser').Packet} with `type` and `data` (if any)
 * @api private
 */
export declare function decodePacket(data: any, binaryType?: any, utf8decode?: any): any;
/**
 * Decodes a packet encoded in a base64 string.
 *
 * @param {String} base64 encoded message
 * @return {Object} with `type` and `data` (if any)
 */
export declare function decodeBase64Packet(msg: any, binaryType: any): {
    type: string;
    data: Buffer;
};
/**
 * Encodes multiple messages (payload).
 *
 *     <length>:data
 *
 * Example:
 *
 *     11:hello world2:hi
 *
 * If any contents are binary, they will be encoded as base64 strings. Base64
 * encoded strings are marked with a b before the length specifier
 *
 * @param {Array} packets
 * @api private
 */
export declare function encodePayload(packets: any, supportsBinary: any, callback: any): any;
export declare function decodePayload(data: any, binaryType?: any, callback?: any): any;
/**
 * Encodes multiple messages (payload) as binary.
 *
 * <1 = binary, 0 = string><number from 0-9><number from 0-9>[...]<number
 * 255><data>
 *
 * Example:
 * 1 3 255 1 2 3, if the binary contents are interpreted as 8 bit integers
 *
 * @param {Array} packets
 * @return {Buffer} encoded payload
 * @api private
 */
export declare function encodePayloadAsBinary(packets: any, callback: any): any;
export declare function decodePayloadAsBinary(data: any, binaryType: any, callback: any): any;
