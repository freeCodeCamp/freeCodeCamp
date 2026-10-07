// Type definitions for StackFrame v1.3
// Project: https://github.com/stacktracejs/stackframe
// Definitions by: Eric Wendelin <https://www.eriwen.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace StackFrame;  // global for non-module UMD users

export = StackFrame;

declare namespace StackFrame {
    export interface StackFrameOptions {
        isConstructor?: boolean;
        isEval?: boolean;
        isNative?: boolean;
        isToplevel?: boolean;
        columnNumber?: number;
        lineNumber?: number;
        fileName?: string;
        functionName?: string;
        source?: string;
        args?: any[];
        evalOrigin?: StackFrame;
    }
}

declare class StackFrame {
    constructor(obj: StackFrame.StackFrameOptions);

    args?: any[];
    getArgs(): any[] | undefined;
    setArgs(args: any[]): void;

    evalOrigin?: StackFrame;
    getEvalOrigin(): StackFrame | undefined;
    setEvalOrigin(stackframe: StackFrame): void;

    isConstructor?: boolean;
    getIsConstructor(): boolean | undefined;
    setIsConstructor(isConstructor: boolean): void;

    isEval?: boolean;
    getIsEval(): boolean | undefined;
    setIsEval(isEval: boolean): void;

    isNative?: boolean;
    getIsNative(): boolean | undefined;
    setIsNative(isNative: boolean): void;

    isToplevel?: boolean;
    getIsToplevel(): boolean | undefined;
    setIsToplevel(isToplevel: boolean): void;

    columnNumber?: number;
    getColumnNumber(): number | undefined;
    setColumnNumber(columnNumber: number): void;

    lineNumber?: number;
    getLineNumber(): number | undefined;
    setLineNumber(lineNumber: number): void;

    fileName?: string;
    getFileName(): string | undefined;
    setFileName(fileName: string): void;

    functionName?: string;
    getFunctionName(): string | undefined;
    setFunctionName(functionName: string): void;

    source?: string;
    getSource(): string | undefined;
    setSource(source: string): void;

    toString(): string;
}
