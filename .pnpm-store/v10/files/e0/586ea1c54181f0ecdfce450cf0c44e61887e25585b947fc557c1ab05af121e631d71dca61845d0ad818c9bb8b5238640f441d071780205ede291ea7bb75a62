declare const PACKET_TYPES: any;
declare const PACKET_TYPES_REVERSE: any;
declare const ERROR_PACKET: Packet;
export { PACKET_TYPES, PACKET_TYPES_REVERSE, ERROR_PACKET };
export type PacketType = "open" | "close" | "ping" | "pong" | "message" | "upgrade" | "noop" | "error";
export type RawData = any;
export interface Packet {
    type: PacketType;
    options?: {
        compress: boolean;
    };
    data?: RawData;
}
export type BinaryType = "nodebuffer" | "arraybuffer" | "blob";
