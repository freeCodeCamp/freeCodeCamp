import { Line, BlockMarkers } from '../primitives.js';
export interface Options {
    startLine: number;
    markers: BlockMarkers;
}
export type Parser = (source: string) => Line[] | null;
export default function getParser({ startLine, markers, }?: Partial<Options>): Parser;
