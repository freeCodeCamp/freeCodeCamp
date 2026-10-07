import type { SpanningCellManager } from './spanningCellManager';
/**
 * Shared function to draw horizontal borders, rows or the entire table
 */
declare type DrawContentParameters = {
    contents: string[];
    drawSeparator: (index: number, size: number) => boolean;
    separatorGetter: (index: number, size: number) => string;
    spanningCellManager?: SpanningCellManager;
    rowIndex?: number;
    elementType?: 'border' | 'cell' | 'row';
};
export declare const drawContent: (parameters: DrawContentParameters) => string;
export {};
