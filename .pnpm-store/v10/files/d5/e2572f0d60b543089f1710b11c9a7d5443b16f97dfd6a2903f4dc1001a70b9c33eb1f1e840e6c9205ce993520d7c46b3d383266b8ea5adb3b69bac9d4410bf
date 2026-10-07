import { type Token } from './lexer/Token';
import { type IntermediateResult } from './result/IntermediateResult';
export declare class NoParsletFoundError extends Error {
    private readonly token;
    constructor(token: Token);
    getToken(): Token;
}
export declare class EarlyEndOfParseError extends Error {
    private readonly token;
    constructor(token: Token);
    getToken(): Token;
}
export declare class UnexpectedTypeError extends Error {
    constructor(result: IntermediateResult, message?: string);
}
