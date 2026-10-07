import { StackFrame } from './stackframe';
/** JSDoc */
export interface Stacktrace {
    frames?: StackFrame[];
    frames_omitted?: [
        number,
        number
    ];
}
export type StackParser = (stack: string, skipFirstLines?: number, framesToPop?: number) => StackFrame[];
export type StackLineParserFn = (line: string) => StackFrame | undefined;
export type StackLineParser = [
    number,
    StackLineParserFn
];
//# sourceMappingURL=stacktrace.d.ts.map
