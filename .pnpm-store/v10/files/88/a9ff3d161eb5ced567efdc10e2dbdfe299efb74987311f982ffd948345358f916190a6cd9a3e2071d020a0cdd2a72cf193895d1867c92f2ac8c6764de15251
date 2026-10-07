interface UIOptions {
    width: number;
    wrap?: boolean;
    rows?: string[];
}
interface Column {
    text: string;
    width?: number;
    align?: "right" | "left" | "center";
    padding: number[];
    border?: boolean;
}
interface ColumnArray extends Array<Column> {
    span: boolean;
}
interface Line {
    hidden?: boolean;
    text: string;
    span?: boolean;
}
declare class UI {
    width: number;
    wrap: boolean;
    rows: ColumnArray[];
    constructor(opts: UIOptions);
    span(...args: ColumnArray): void;
    resetOutput(): void;
    div(...args: (Column | string)[]): ColumnArray;
    private shouldApplyLayoutDSL;
    private applyLayoutDSL;
    private colFromString;
    private measurePadding;
    toString(): string;
    rowToString(row: ColumnArray, lines: Line[]): Line[];
    // if the full 'source' can render in
    // the target line, do so.
    private renderInline;
    private rasterize;
    private negatePadding;
    private columnWidths;
}
declare function ui(opts: UIOptions): UI;
export { ui as default };
