declare const exts: readonly ["js", "html", "css", "jsx", "ts", "tsx", "py"];
export type Ext = (typeof exts)[number];
export interface IncompleteChallengeFile {
    fileKey: string;
    ext: Ext;
    name: string;
    contents: string;
    head?: string;
    tail?: string;
}
export interface ChallengeFile extends IncompleteChallengeFile {
    editableRegionBoundaries?: number[];
    editableContents?: string;
    usesMultifileEditor?: boolean;
    error?: unknown;
    head: string;
    tail: string;
    seed?: string;
    source?: string;
    path: string;
    history: string[];
}
type PolyProps = {
    name: string;
    ext: string;
    contents: string;
    history?: string[];
};
type AddedProperties = {
    path: string;
    fileKey: string;
    error: null;
};
export declare function createPoly<Rest>({ name, ext, contents, history, ...rest }: PolyProps & Rest): PolyProps & AddedProperties & Rest;
export declare function isPoly(poly: unknown): poly is ChallengeFile;
export declare function setContent(contents: string, poly: ChallengeFile, source?: string): ChallengeFile;
export declare function regenerateMissingProperties(file: IncompleteChallengeFile): {
    path: string;
    history: string[];
    head: string;
    tail: string;
    fileKey: string;
    ext: Ext;
    name: string;
    contents: string;
};
export declare function compileHeadTail(padding: string | undefined, poly: ChallengeFile): Promise<{
    head: string;
    tail: string;
    editableRegionBoundaries?: number[];
    editableContents?: string;
    usesMultifileEditor?: boolean;
    error?: unknown;
    seed?: string;
    source?: string;
    path: string;
    history: string[];
    fileKey: string;
    ext: Ext;
    name: string;
    contents: string;
}>;
type Wrapper = (x: string) => Promise<string> | string;
export declare function transformContents(wrap: Wrapper, polyP: ChallengeFile | Promise<ChallengeFile>): Promise<ChallengeFile>;
export declare function transformHeadTailAndContents(wrap: Wrapper, polyP: ChallengeFile | Promise<ChallengeFile>): Promise<{
    head: string;
    tail: string;
    editableRegionBoundaries?: number[];
    editableContents?: string;
    usesMultifileEditor?: boolean;
    error?: unknown;
    seed?: string;
    source?: string;
    path: string;
    history: string[];
    fileKey: string;
    ext: Ext;
    name: string;
    contents: string;
}>;
export declare function createSource<Rest>(poly: Pick<ChallengeFile, 'contents' | 'source'> & Rest): Rest & {
    contents: string;
    source: string;
};
export {};
