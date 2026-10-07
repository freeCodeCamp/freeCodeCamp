export interface LintMessage {
    ruleId: string | null;
    severity: number;
    message: string;
    line: number;
    column: number;
    endColumn?: number;
    endLine?: number;
    [key: string]: any;
}
export interface LintResult {
    filePath: string;
    messages: LintMessage[];
    [key: string]: any;
}
export interface LintReport {
    results: LintResult[];
    [key: string]: any;
}
export interface CLIEngine {
    version: string;
    executeOnFiles(filesPatterns: string[]): LintReport;
    resolveFileGlobPatterns(filesPatterns: string[]): string[];
    isPathIgnored(filePath: string): boolean;
}
export interface ESLint {
    version: string;
    lintFiles(filesPatterns: string[]): Promise<LintResult[]>;
    isPathIgnored(filePath: string): Promise<boolean>;
}
export declare type ESLintOrCLIEngine = CLIEngine | ESLint;
export interface CLIEngineOptions {
    cwd?: string;
    extensions?: string[];
    fix?: boolean;
    [key: string]: any;
}
