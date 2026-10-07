import { ParameterizedString } from '../types/parameterize';
/**
 * Tagged template function which returns parameterized representation of the message
 * For example: parameterize`This is a log statement with ${x} and ${y} params`, would return:
 * "__sentry_template_string__": 'This is a log statement with %s and %s params',
 * "__sentry_template_values__": ['first', 'second']
 *
 * @param strings An array of string values splitted between expressions
 * @param values Expressions extracted from template string
 *
 * @returns A `ParameterizedString` object that can be passed into `captureMessage` or Sentry.logger.X methods.
 */
export declare function parameterize(strings: TemplateStringsArray, ...values: unknown[]): ParameterizedString;
/**
 * Tagged template function which returns parameterized representation of the message.
 *
 * @param strings An array of string values splitted between expressions
 * @param values Expressions extracted from template string
 * @returns A `ParameterizedString` object that can be passed into `captureMessage` or Sentry.logger.X methods.
 */
export declare const fmt: typeof parameterize;
//# sourceMappingURL=parameterize.d.ts.map
