/// <reference types="node" />
import { Readable } from 'stream';
export interface ProxyResponse {
    statusCode: number;
    buffered: Buffer;
}
export default function parseProxyResponse(socket: Readable): Promise<ProxyResponse>;
