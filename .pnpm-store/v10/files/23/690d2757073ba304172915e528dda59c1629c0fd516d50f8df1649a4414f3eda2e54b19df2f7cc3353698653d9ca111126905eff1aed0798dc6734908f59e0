type PathConditionsMap = {
    [condition: string]: PathConditions | null;
};
type PathOrMap = string | PathConditionsMap;
type PathConditions = PathOrMap | readonly PathOrMap[];

declare const resolveExports: (exports: PathConditions, request: string, conditions: readonly string[]) => string[];

declare const resolveImports: (imports: PathConditionsMap, request: string, conditions: readonly string[]) => string[];

export { PathConditions, PathConditionsMap, resolveExports, resolveImports };
