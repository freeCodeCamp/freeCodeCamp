/// <reference types="node" />
import { Readable } from 'stream';
interface FormData extends Readable {
    getBoundary: () => string;
    getLength: (callback: (error: Error | null, length: number) => void) => void;
}
declare const _default: (body: unknown) => body is FormData;
export default _default;
