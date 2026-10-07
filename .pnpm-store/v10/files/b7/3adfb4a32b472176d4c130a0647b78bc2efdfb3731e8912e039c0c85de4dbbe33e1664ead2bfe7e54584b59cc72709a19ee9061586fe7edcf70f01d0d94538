export declare type SourceLocation = {
    line: number;
    column: number;
};
export declare class LinesAndColumns {
    private string;
    private offsets;
    constructor(string: string);
    locationForIndex(index: number): SourceLocation | null;
    indexForLocation(location: SourceLocation): number | null;
    private lengthOfLine;
}
export default LinesAndColumns;
