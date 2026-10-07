export declare const help = "yaml: A command-line YAML processor and inspector\n\nReads stdin and writes output to stdout and errors & warnings to stderr.\n\nUsage:\n  yaml          Process a YAML stream, outputting it as YAML\n  yaml cst      Parse the CST of a YAML stream\n  yaml lex      Parse the lexical tokens of a YAML stream\n  yaml valid    Validate a YAML stream, returning 0 on success\n\nOptions:\n  --help, -h    Show this message.\n  --json, -j    Output JSON.\n  --indent 2    Output pretty-printed data, indented by the given number of spaces.\n  --merge, -m   Enable support for \"<<\" merge keys.\n\nAdditional options for bare \"yaml\" command:\n  --doc, -d     Output pretty-printed JS Document objects.\n  --single, -1  Require the input to consist of a single YAML document.\n  --strict, -s  Stop on errors.\n  --visit, -v   Apply a visitor to each document (requires a path to import)\n  --yaml 1.1    Set the YAML version. (default: 1.2)";
export declare class UserError extends Error {
    static ARGS: number;
    static SINGLE: number;
    code: number;
    constructor(code: number, message: string);
}
export declare function cli(stdin: NodeJS.ReadableStream, done: (error?: Error) => void, argv?: string[]): Promise<void>;
