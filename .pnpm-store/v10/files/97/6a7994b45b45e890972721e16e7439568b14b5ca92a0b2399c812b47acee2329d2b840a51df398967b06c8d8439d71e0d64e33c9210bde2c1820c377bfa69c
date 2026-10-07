import { encodePacket } from "./encodePacket.js";
import { decodePacket } from "./decodePacket.js";
import { Packet, PacketType, RawData, BinaryType } from "./commons.js";
declare const encodePayload: (packets: Packet[], callback: (encodedPayload: string) => void) => void;
declare const decodePayload: (encodedPayload: string, binaryType?: BinaryType) => Packet[];
export declare function createPacketEncoderStream(): any;
export declare function createPacketDecoderStream(maxPayload: number, binaryType: BinaryType): any;
export declare const protocol = 4;
export { encodePacket, encodePayload, decodePacket, decodePayload, Packet, PacketType, RawData, BinaryType, };
