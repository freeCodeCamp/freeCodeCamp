import type { Node } from "@babel/core";
export interface ICollectedSlice {
    name: string;
    allowEmpty: boolean;
}
export type ICollectedSlices = Record<string, ICollectedSlice>;
export declare function mergePreviouslyCollectedSlices(newInfo: ICollectedSlices, previousInfo?: ICollectedSlices): ICollectedSlices;
export declare function collectSlices(ast: Node, filename: string): Record<string, ICollectedSlice> | null;
