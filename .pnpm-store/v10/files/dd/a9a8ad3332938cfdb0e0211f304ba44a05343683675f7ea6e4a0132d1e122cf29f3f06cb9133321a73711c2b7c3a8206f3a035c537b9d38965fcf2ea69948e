import { Match } from './match';
interface FullOptions {
    sampleSize: number;
    offset: number;
}
export type Options = Partial<FullOptions>;
export type AnalyseResult = Match[];
export type DetectResult = string | null;
export declare const detect: (buffer: Uint8Array) => string | null;
export declare const analyse: (buffer: Uint8Array) => AnalyseResult;
export declare const detectFile: (filepath: string, opts?: Options) => Promise<DetectResult>;
export declare const detectFileSync: (filepath: string, opts?: Options) => DetectResult;
declare const _default: {
    analyse: (buffer: Uint8Array) => AnalyseResult;
    detect: (buffer: Uint8Array) => string | null;
    detectFileSync: (filepath: string, opts?: Options) => DetectResult;
    detectFile: (filepath: string, opts?: Options) => Promise<DetectResult>;
};
export default _default;
export { Match, EncodingName } from './match';
