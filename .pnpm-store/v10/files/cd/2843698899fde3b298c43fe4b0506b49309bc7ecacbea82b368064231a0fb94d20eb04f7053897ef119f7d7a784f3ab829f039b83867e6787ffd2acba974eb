import { InvalidTestCase, ValidTestCase } from '../eslint-utils/rule-tester/RuleTester';
/**
 * Converts a batch of single line tests into a number of separate test cases.
 * This makes it easier to write tests which use the same options.
 *
 * Why wouldn't you just leave them as one test?
 * Because it makes the test error messages harder to decipher.
 * This way each line will fail separately, instead of them all failing together.
 */
declare function batchedSingleLineTests<TOptions extends Readonly<unknown[]>>(test: ValidTestCase<TOptions>): ValidTestCase<TOptions>[];
/**
 * Converts a batch of single line tests into a number of separate test cases.
 * This makes it easier to write tests which use the same options.
 *
 * Why wouldn't you just leave them as one test?
 * Because it makes the test error messages harder to decipher.
 * This way each line will fail separately, instead of them all failing together.
 *
 * Make sure you have your line numbers correct for error reporting, as it will match
 * the line numbers up with the split tests!
 */
declare function batchedSingleLineTests<TMessageIds extends string, TOptions extends Readonly<unknown[]>>(test: InvalidTestCase<TMessageIds, TOptions>): InvalidTestCase<TMessageIds, TOptions>[];
export { batchedSingleLineTests };
//# sourceMappingURL=batchedSingleLineTests.d.ts.map
