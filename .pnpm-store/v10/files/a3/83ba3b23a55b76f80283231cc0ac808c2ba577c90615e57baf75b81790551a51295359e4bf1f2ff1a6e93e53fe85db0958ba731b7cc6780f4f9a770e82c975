declare type FilterOpts = {
    hideFields: {
        [fieldPath: string]: string;
    };
    hideFieldsNote?: string;
};
declare type PathsFilter = string | string[];
export declare function filterByDotPaths(obj: Record<any, any>, pathsFilter?: PathsFilter | null, opts?: FilterOpts): Record<any, any>;
export declare function preparePathsFilter(pathsFilter: PathsFilter | null | undefined): string[] | null;
export declare function hideComplexValue(val: any, msg?: string): string;
export declare function isPresentInDotFilter(name: string, pathsFilter?: string | string[] | null): boolean;
export declare function partialCloneSubpath(res: any, path: string[]): void;
export declare function hideField(result: Record<any, any>, key: string, msg?: string, pathsFilter?: PathsFilter | null): string[];
export {};
//# sourceMappingURL=filterByDotPaths.d.ts.map