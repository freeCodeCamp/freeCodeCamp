/**
 *
 * audit/utils
 *
 */
import type { ExecutionResult } from 'graphql';
import { Audit, AuditName } from './common.mjs';
export * from '../utils.mjs';
/**
 * Wrap and prepare an audit for testing.
 *
 * @private
 */
export declare function audit(id: string, name: AuditName, fn: () => Promise<void>): Audit;
/**
 * Error thrown when an assertion test fails.
 *
 * @private
 */
export declare class AuditError {
    /**
     * Response from the server.
     */
    response: Response;
    /**
     * Reason for the failing audit.
     */
    reason: string;
    constructor(response: Response, reason: string);
}
/**
 * Will throw an AuditError if the assertion on Response fails.
 *
 * All fatal problems will throw an instance of an Error.
 *
 * The name "ressert" is a wordplay combining "response" and "assert".
 *
 * @private
 */
export declare function ressert(res: Response): {
    status: {
        toBe(code: number): void;
        toBeBetween: (min: number, max: number) => void;
    };
    header(key: 'content-type'): {
        toContain(part: string): void;
        notToContain(part: string): void;
    };
    bodyAsExecutionResult: {
        data: {
            toBe(val: ExecutionResult['data']): Promise<void>;
        };
        toHaveProperty(key: keyof ExecutionResult): Promise<void>;
        notToHaveProperty(key: keyof ExecutionResult): Promise<void>;
    };
};
