export declare type DrawLinePredicate = (index: number, size: number) => boolean;
export declare type DrawVerticalLine = DrawLinePredicate;
export declare type DrawHorizontalLine = DrawLinePredicate;
export declare type BorderUserConfig = {
    readonly topLeft?: string;
    readonly topRight?: string;
    readonly topBody?: string;
    readonly topJoin?: string;
    readonly bottomLeft?: string;
    readonly bottomRight?: string;
    readonly bottomBody?: string;
    readonly bottomJoin?: string;
    readonly joinLeft?: string;
    readonly joinRight?: string;
    readonly joinBody?: string;
    readonly joinJoin?: string;
    readonly joinMiddleUp?: string;
    readonly joinMiddleDown?: string;
    readonly joinMiddleLeft?: string;
    readonly joinMiddleRight?: string;
    readonly headerJoin?: string;
    readonly bodyRight?: string;
    readonly bodyLeft?: string;
    readonly bodyJoin?: string;
};
export declare type BorderConfig = Required<BorderUserConfig>;
export declare type Alignment = 'center' | 'justify' | 'left' | 'right';
export declare type VerticalAlignment = 'bottom' | 'middle' | 'top';
export declare type CellUserConfig = {
    /**
     * Cell content horizontal alignment (default: left)
     */
    readonly alignment?: Alignment;
    /**
     * Cell content vertical alignment (default: top)
     */
    readonly verticalAlignment?: VerticalAlignment;
    /**
     * Number of characters are which the content will be truncated (default: Infinity)
     */
    readonly truncate?: number;
    /**
     * Cell content padding width left (default: 1)
     */
    readonly paddingLeft?: number;
    /**
     * Cell content padding width right (default: 1)
     */
    readonly paddingRight?: number;
    /**
     * If true, the text is broken at the nearest space or one of the special characters: "\|/_.,;-"
     */
    readonly wrapWord?: boolean;
};
export declare type ColumnUserConfig = CellUserConfig & {
    /**
     * Column width (default: auto calculation based on the cell content)
     */
    readonly width?: number;
};
/**
 * @deprecated Use spanning cell API instead
 */
export declare type HeaderUserConfig = Omit<ColumnUserConfig, 'verticalAlignment' | 'width'> & {
    readonly content: string;
};
export declare type BaseUserConfig = {
    /**
     * Custom border
     */
    readonly border?: BorderUserConfig;
    /**
     * Default values for all columns. Column specific settings overwrite the default values.
     */
    readonly columnDefault?: ColumnUserConfig;
    /**
     * Column specific configuration.
     */
    readonly columns?: Indexable<ColumnUserConfig>;
    /**
     * Used to tell whether to draw a vertical line.
     * This callback is called for each non-content line of the table.
     * The default behavior is to always return true.
     */
    readonly drawVerticalLine?: DrawVerticalLine;
};
export declare type TableUserConfig = BaseUserConfig & {
    /**
     * The header configuration
     */
    readonly header?: HeaderUserConfig;
    /**
     * Used to tell whether to draw a horizontal line.
     * This callback is called for each non-content line of the table.
     * The default behavior is to always return true.
     */
    readonly drawHorizontalLine?: DrawHorizontalLine;
    /**
     * Horizontal lines inside the table are not drawn.
     */
    readonly singleLine?: boolean;
    readonly spanningCells?: SpanningCellConfig[];
};
export declare type SpanningCellConfig = CellUserConfig & {
    readonly row: number;
    readonly col: number;
    readonly rowSpan?: number;
    readonly colSpan?: number;
};
export declare type StreamUserConfig = BaseUserConfig & {
    /**
     * The number of columns
     */
    readonly columnCount: number;
    /**
     * Default values for all columns. Column specific settings overwrite the default values.
     */
    readonly columnDefault: ColumnUserConfig & {
        /**
         * The default width for each column
         */
        readonly width: number;
    };
};
export declare type WritableStream = {
    readonly write: (rows: string[]) => void;
};
export declare type Indexable<T> = {
    readonly [index: number]: T;
};
