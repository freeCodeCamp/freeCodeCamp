import type { SpanningCellManager } from './spanningCellManager';
import type { BorderConfig, DrawVerticalLine } from './types/api';
import type { SeparatorGetter } from './types/internal';
declare type Separator = {
    readonly left: string;
    readonly right: string;
    readonly body: string;
    readonly bodyJoinOuter?: string;
    readonly bodyJoinInner?: string;
    readonly join: string;
    readonly joinUp?: string;
    readonly joinDown?: string;
    readonly joinLeft?: string;
    readonly joinRight?: string;
};
export declare const drawBorderSegments: (columnWidths: number[], parameters: Parameters<typeof drawBorder>[1]) => string[];
export declare const createSeparatorGetter: (dependencies: Parameters<typeof drawBorder>[1]) => (verticalBorderIndex: number, columnCount: number) => string;
export declare const drawBorder: (columnWidths: number[], parameters: Omit<DrawBorderParameters, 'border'> & {
    separator: Separator;
}) => string;
export declare const drawBorderTop: (columnWidths: number[], parameters: DrawBorderParameters) => string;
export declare const drawBorderJoin: (columnWidths: number[], parameters: DrawBorderParameters) => string;
export declare const drawBorderBottom: (columnWidths: number[], parameters: DrawBorderParameters) => string;
export declare type BorderGetterParameters = {
    border: BorderConfig;
    drawVerticalLine: DrawVerticalLine;
    spanningCellManager?: SpanningCellManager;
    rowCount?: number;
};
export declare type DrawBorderParameters = Omit<BorderGetterParameters, 'outputColumnWidths'> & {
    horizontalBorderIndex?: number;
};
export declare const createTableBorderGetter: (columnWidths: number[], parameters: BorderGetterParameters) => SeparatorGetter;
export {};
