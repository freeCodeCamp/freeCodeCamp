import PrettyError from "pretty-error";
import stackTrace from "stack-trace";
import { ErrorWithCodeFrame } from "./prepare-stack-trace";
import { IStructuredStackFrame } from "../structured-errors/types";
export declare const sanitizeStructuredStackTrace: (stack: Array<stackTrace.StackFrame>) => Array<IStructuredStackFrame>;
export declare function getErrorFormatter(): PrettyError;
type ErrorWithPotentialForcedLocation = Error & {
    forcedLocation?: {
        fileName: string;
        lineNumber?: number;
        columnNumber?: number;
        endLineNumber?: number;
        endColumnNumber?: number;
        functionName?: string;
    };
};
/**
 * Convert a stringified webpack compilation error back into
 * an Error instance so it can be formatted properly
 */
export declare function createErrorFromString(errorOrErrorStack: string | ErrorWithPotentialForcedLocation | undefined, sourceMapFile: string): ErrorWithCodeFrame;
export {};
