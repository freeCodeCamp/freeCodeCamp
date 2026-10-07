export interface StartOfSourceMap {
    file?: string;
    sourceRoot?: string;
}

export interface RawSourceMap extends StartOfSourceMap {
    version: string;
    sources: string[];
    names: string[];
    sourcesContent?: string[];
    mappings: string;
}

export interface Position {
    line: number;
    column: number;
}

export interface LineRange extends Position {
    lastColumn: number;
}

export interface FindPosition extends Position {
    // SourceMapConsumer.GREATEST_LOWER_BOUND or SourceMapConsumer.LEAST_UPPER_BOUND
    bias?: number;
}

export interface SourceFindPosition extends FindPosition {
    source: string;
}

export interface MappedPosition extends Position {
    source: string;
    name?: string;
}

export interface MappingItem {
    source: string | null;
    generatedLine: number;
    generatedColumn: number;
    originalLine: number | null;
    originalColumn: number | null;
    name: string | null;
}

export class SourceMapConsumer {
    static GENERATED_ORDER: number;
    static ORIGINAL_ORDER: number;

    static GREATEST_LOWER_BOUND: number;
    static LEAST_UPPER_BOUND: number;

    constructor(rawSourceMap: RawSourceMap);
    readonly file: string | undefined | null;
    readonly sourceRoot: string | undefined | null;
    readonly sourcesContent: readonly string[] | null | undefined;
    readonly sources: readonly string[]

    computeColumnSpans(): void;
    originalPositionFor(generatedPosition: FindPosition): MappedPosition;
    generatedPositionFor(originalPosition: SourceFindPosition): LineRange;
    allGeneratedPositionsFor(originalPosition: MappedPosition): Position[];
    hasContentsOfAllSources(): boolean;
    sourceContentFor(source: string, returnNullOnMissing?: boolean): string | null;
    eachMapping(callback: (mapping: MappingItem) => void, context?: any, order?: number): void;
}

export interface Mapping {
    generated: Position;
    original?: Position | null;
    source?: string | null;
    name?: string | null;
}

export class SourceMapGenerator {
    constructor(startOfSourceMap?: StartOfSourceMap);
    static fromSourceMap(sourceMapConsumer: SourceMapConsumer, startOfSourceMap?: StartOfSourceMap): SourceMapGenerator;
    addMapping(mapping: Mapping): void;
    setSourceContent(sourceFile: string, sourceContent: string | null | undefined): void;
    applySourceMap(sourceMapConsumer: SourceMapConsumer, sourceFile?: string, sourceMapPath?: string): void;
    toString(): string;
    toJSON(): RawSourceMap;
}

export interface CodeWithSourceMap {
    code: string;
    map: SourceMapGenerator;
}

export class SourceNode {
    constructor();
    constructor(line: number, column: number, source: string);
    constructor(line: number, column: number, source: string, chunk?: string, name?: string);
    static fromStringWithSourceMap(code: string, sourceMapConsumer: SourceMapConsumer, relativePath?: string): SourceNode;
    add(chunk: string): void;
    prepend(chunk: string): void;
    setSourceContent(sourceFile: string, sourceContent: string): void;
    walk(fn: (chunk: string, mapping: MappedPosition) => void): void;
    walkSourceContents(fn: (file: string, content: string) => void): void;
    join(sep: string): SourceNode;
    replaceRight(pattern: string, replacement: string): SourceNode;
    toString(): string;
    toStringWithSourceMap(startOfSourceMap?: StartOfSourceMap): CodeWithSourceMap;
}
