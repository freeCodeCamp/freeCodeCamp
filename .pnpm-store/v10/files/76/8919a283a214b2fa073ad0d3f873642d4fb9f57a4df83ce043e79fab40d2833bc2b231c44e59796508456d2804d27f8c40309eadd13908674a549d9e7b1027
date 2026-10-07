interface Position {
    offset: number;
    line: number;
    column: number;
}
interface SourceLocation {
    start: Position;
    end: Position;
    source: string;
}
export interface SFCBlock {
    type: string;
    content: string;
    attrs: Record<string, string | true>;
    loc: SourceLocation;
    lang?: string;
    src?: string;
}
interface SFCDescriptor {
    filename: string;
    template: SFCBlock | null;
    script: SFCBlock | null;
    styles: SFCBlock[];
    customBlocks: SFCBlock[];
}
interface CompilerError extends SyntaxError {
    code: number;
    loc?: SourceLocation;
}
interface SFCParseResult {
    descriptor: SFCDescriptor;
    errors: CompilerError[];
}
export interface VueTemplateCompilerV3 {
    parse(template: string, options?: any): SFCParseResult;
}
export {};
