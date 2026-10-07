import type { AST_NODE_TYPES, AST_TOKEN_TYPES } from '../ts-estree';
import type { Linter } from './Linter';
import type { ParserOptions } from './ParserOptions';
import type { RuleCreateFunction, RuleModule, SharedConfigurationSettings } from './Rule';
interface ValidTestCase<TOptions extends Readonly<unknown[]>> {
    /**
     * Name for the test case.
     * @since 8.1.0
     */
    readonly name?: string;
    /**
     * Code for the test case.
     */
    readonly code: string;
    /**
     * Environments for the test case.
     */
    readonly env?: Readonly<Record<string, boolean>>;
    /**
     * The fake filename for the test case. Useful for rules that make assertion about filenames.
     */
    readonly filename?: string;
    /**
     * The additional global variables.
     */
    readonly globals?: Record<string, 'readonly' | 'writable' | 'off' | true>;
    /**
     * Options for the test case.
     */
    readonly options?: Readonly<TOptions>;
    /**
     * The absolute path for the parser.
     */
    readonly parser?: string;
    /**
     * Options for the parser.
     */
    readonly parserOptions?: Readonly<ParserOptions>;
    /**
     * Settings for the test case.
     */
    readonly settings?: Readonly<SharedConfigurationSettings>;
    /**
     * Run this case exclusively for debugging in supported test frameworks.
     * @since 7.29.0
     */
    readonly only?: boolean;
}
interface SuggestionOutput<TMessageIds extends string> {
    /**
     * Reported message ID.
     */
    readonly messageId: TMessageIds;
    /**
     * The data used to fill the message template.
     */
    readonly data?: Readonly<Record<string, unknown>>;
    /**
     * NOTE: Suggestions will be applied as a stand-alone change, without triggering multi-pass fixes.
     * Each individual error has its own suggestion, so you have to show the correct, _isolated_ output for each suggestion.
     */
    readonly output: string;
}
interface InvalidTestCase<TMessageIds extends string, TOptions extends Readonly<unknown[]>> extends ValidTestCase<TOptions> {
    /**
     * Expected errors.
     */
    readonly errors: readonly TestCaseError<TMessageIds>[];
    /**
     * The expected code after autofixes are applied. If set to `null`, the test runner will assert that no autofix is suggested.
     */
    readonly output?: string | null;
}
interface TestCaseError<TMessageIds extends string> {
    /**
     * The 1-based column number of the reported start location.
     */
    readonly column?: number;
    /**
     * The data used to fill the message template.
     */
    readonly data?: Readonly<Record<string, unknown>>;
    /**
     * The 1-based column number of the reported end location.
     */
    readonly endColumn?: number;
    /**
     * The 1-based line number of the reported end location.
     */
    readonly endLine?: number;
    /**
     * The 1-based line number of the reported start location.
     */
    readonly line?: number;
    /**
     * Reported message ID.
     */
    readonly messageId: TMessageIds;
    /**
     * Reported suggestions.
     */
    readonly suggestions?: readonly SuggestionOutput<TMessageIds>[] | null;
    /**
     * The type of the reported AST node.
     */
    readonly type?: AST_NODE_TYPES | AST_TOKEN_TYPES;
}
/**
 * @param text a string describing the rule
 * @param callback the test callback
 */
type RuleTesterTestFrameworkFunction = (text: string, callback: () => void) => void;
interface RunTests<TMessageIds extends string, TOptions extends Readonly<unknown[]>> {
    readonly valid: readonly (ValidTestCase<TOptions> | string)[];
    readonly invalid: readonly InvalidTestCase<TMessageIds, TOptions>[];
}
interface RuleTesterConfig extends Linter.Config {
    readonly parser: string;
    readonly parserOptions?: Readonly<ParserOptions>;
}
declare class RuleTesterBase {
    /**
     * Creates a new instance of RuleTester.
     * @param testerConfig extra configuration for the tester
     */
    constructor(testerConfig?: RuleTesterConfig);
    /**
     * Adds a new rule test to execute.
     * @param ruleName The name of the rule to run.
     * @param rule The rule to test.
     * @param test The collection of tests to run.
     */
    run<TMessageIds extends string, TOptions extends Readonly<unknown[]>>(ruleName: string, rule: RuleModule<TMessageIds, TOptions>, tests: RunTests<TMessageIds, TOptions>): void;
    /**
     * If you supply a value to this property, the rule tester will call this instead of using the version defined on
     * the global namespace.
     */
    static get describe(): RuleTesterTestFrameworkFunction;
    static set describe(value: RuleTesterTestFrameworkFunction | undefined);
    /**
     * If you supply a value to this property, the rule tester will call this instead of using the version defined on
     * the global namespace.
     */
    static get it(): RuleTesterTestFrameworkFunction;
    static set it(value: RuleTesterTestFrameworkFunction | undefined);
    /**
     * If you supply a value to this property, the rule tester will call this instead of using the version defined on
     * the global namespace.
     */
    static get itOnly(): RuleTesterTestFrameworkFunction;
    static set itOnly(value: RuleTesterTestFrameworkFunction | undefined);
    /**
     * Define a rule for one particular run of tests.
     */
    defineRule<TMessageIds extends string, TOptions extends Readonly<unknown[]>>(name: string, rule: RuleModule<TMessageIds, TOptions> | RuleCreateFunction<TMessageIds, TOptions>): void;
}
declare const RuleTester_base: typeof RuleTesterBase;
declare class RuleTester extends RuleTester_base {
}
export { InvalidTestCase, SuggestionOutput, RuleTester, RuleTesterConfig, RuleTesterTestFrameworkFunction, RunTests, TestCaseError, ValidTestCase, };
//# sourceMappingURL=RuleTester.d.ts.map