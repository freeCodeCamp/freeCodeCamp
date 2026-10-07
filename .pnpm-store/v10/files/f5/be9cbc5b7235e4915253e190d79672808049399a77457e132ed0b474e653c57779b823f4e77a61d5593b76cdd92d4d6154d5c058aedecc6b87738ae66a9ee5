type SYMBOLS = " " | "D" | "∞" | "λ";
export interface IComponentWithPageModes {
    SSG: Set<string>;
    DSG: Set<string>;
    SSR: Set<string>;
    FN: Set<string>;
}
export interface ITreeLine {
    text: string;
    symbol: SYMBOLS;
}
export declare function generatePageTree(collections: IComponentWithPageModes, LIMIT?: number): Array<ITreeLine>;
export declare function generateSliceTree(slices: Set<string>, LIMIT?: number): Array<ITreeLine>;
export {};
