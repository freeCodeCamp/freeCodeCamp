import type { DrawHorizontalLine, DrawVerticalLine, SpanningCellConfig } from './types/api';
import type { CellCoordinates, ColumnConfig, ResolvedRangeConfig, Row } from './types/internal';
export declare type SpanningCellManager = {
    getContainingRange: (cell: CellCoordinates, options?: {
        mapped: true;
    }) => ResolvedRangeConfig | undefined;
    inSameRange: (cell1: CellCoordinates, cell2: CellCoordinates) => boolean;
    rowHeights: number[];
    setRowHeights: (rowHeights: number[]) => void;
    rowIndexMapping: number[];
    setRowIndexMapping: (mappedRowHeights: number[]) => void;
};
export declare type SpanningCellParameters = {
    spanningCellConfigs: SpanningCellConfig[];
    rows: Row[];
    columnsConfig: ColumnConfig[];
    drawVerticalLine: DrawVerticalLine;
    drawHorizontalLine: DrawHorizontalLine;
};
export declare type SpanningCellContext = SpanningCellParameters & {
    rowHeights: number[];
};
export declare const createSpanningCellManager: (parameters: SpanningCellParameters) => SpanningCellManager;
