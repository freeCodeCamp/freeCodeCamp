import { Compiler } from "webpack";
/**
 * Remove the export query param from a path that can
 * a) contain only the ?export= query param
 * b) but also contain ?__contentFilePath&export=
 */
export declare const removeExportQueryParam: (path: string | undefined) => string | undefined;
export declare class StaticQueryMapper {
    private store;
    private name;
    constructor(store: any);
    apply(compiler: Compiler): void;
}
