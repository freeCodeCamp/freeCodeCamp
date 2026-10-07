import { Analysis, DomainOptions } from './domain';
export interface EmailOptions extends DomainOptions {
    /**
     * Determines whether to ignore the standards maximum email length limit.
     *
     * @default false
     */
    readonly ignoreLength?: boolean;
}
/**
 * Analyzes a string to verify it is a valid email address.
 *
 * @param email - the email address to validate.
 * @param options - optional settings.
 *
 * @return - undefined when valid, otherwise an object with single error key with a string message value.
 */
export declare function analyzeEmail(email: string, options?: EmailOptions): Analysis | null;
/**
 * Analyzes a string to verify it is a valid email address.
 *
 * @param email - the email address to validate.
 * @param options - optional settings.
 *
 * @return - true when valid, otherwise false.
 */
export declare function isEmailValid(email: string, options?: EmailOptions): boolean;
