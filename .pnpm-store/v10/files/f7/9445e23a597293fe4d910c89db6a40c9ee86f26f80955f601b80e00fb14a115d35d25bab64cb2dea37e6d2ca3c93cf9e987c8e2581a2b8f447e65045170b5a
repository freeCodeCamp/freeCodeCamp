import type { RunDetails } from '../reporter/RunDetails.js';
/**
 * Format output of {@link check} using the default error reporting of {@link assert}
 *
 * Produce a string containing the formated error in case of failed run,
 * undefined otherwise.
 *
 * @remarks Since 1.25.0
 * @public
 */
declare function defaultReportMessage<Ts>(out: RunDetails<Ts> & {
    failed: false;
}): undefined;
/**
 * Format output of {@link check} using the default error reporting of {@link assert}
 *
 * Produce a string containing the formated error in case of failed run,
 * undefined otherwise.
 *
 * @remarks Since 1.25.0
 * @public
 */
declare function defaultReportMessage<Ts>(out: RunDetails<Ts> & {
    failed: true;
}): string;
/**
 * Format output of {@link check} using the default error reporting of {@link assert}
 *
 * Produce a string containing the formated error in case of failed run,
 * undefined otherwise.
 *
 * @remarks Since 1.25.0
 * @public
 */
declare function defaultReportMessage<Ts>(out: RunDetails<Ts>): string | undefined;
/**
 * Format output of {@link check} using the default error reporting of {@link assert}
 *
 * Produce a string containing the formated error in case of failed run,
 * undefined otherwise.
 *
 * @remarks Since 2.17.0
 * @public
 */
declare function asyncDefaultReportMessage<Ts>(out: RunDetails<Ts> & {
    failed: false;
}): Promise<undefined>;
/**
 * Format output of {@link check} using the default error reporting of {@link assert}
 *
 * Produce a string containing the formated error in case of failed run,
 * undefined otherwise.
 *
 * @remarks Since 2.17.0
 * @public
 */
declare function asyncDefaultReportMessage<Ts>(out: RunDetails<Ts> & {
    failed: true;
}): Promise<string>;
/**
 * Format output of {@link check} using the default error reporting of {@link assert}
 *
 * Produce a string containing the formated error in case of failed run,
 * undefined otherwise.
 *
 * @remarks Since 2.17.0
 * @public
 */
declare function asyncDefaultReportMessage<Ts>(out: RunDetails<Ts>): Promise<string | undefined>;
export { defaultReportMessage, asyncDefaultReportMessage };
