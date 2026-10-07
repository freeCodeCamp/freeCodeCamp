import type { AST_NODE_TYPES, AST_TOKEN_TYPES } from '../ts-estree';
import type { ClassicConfig } from './Config';
import type { Linter } from './Linter';
import type { ParserOptions } from './ParserOptions';
import type { ReportDescriptorMessageData, RuleCreateFunction, RuleModule, SharedConfigurationSettings } from './Rule';
/**
 * @deprecated Use `@typescript-eslint/rule-tester` instead.
 */
export interface ValidTestCase<Options extends readonly unknown[]> {
    /**
     * Code for the test case.
     */
    readonly code: string;
    /**
     * Environments for the test case.
     */
    readonly env?: Readonly<Linter.EnvironmentConfig>;
    /**
     * The fake filename for the test case. Useful for rules that make assertion about filenames.
     */
    readonly filename?: string;
    /**
     * The additional global variables.
     */
    readonly globals?: Readonly<Linter.GlobalsConfig>;
    /**
     * Name for the test case.
     */
    readonly name?: string;
    /**
     * Run this case exclusively for debugging in supported test frameworks.
     */
    readonly only?: boolean;
    /**
     * Options for the test case.
     */
    readonly options?: Readonly<Options>;
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
}
/**
 * @deprecated Use `@typescript-eslint/rule-tester` instead.
 */
export interface SuggestionOutput<MessageIds extends string> {
    /**
     * The data used to fill the message template.
     */
    readonly data?: ReportDescriptorMessageData;
    /**
     * Reported message ID.
     */
    readonly messageId: MessageIds;
    /**
     * NOTE: Suggestions will be applied as a stand-alone change, without triggering multi-pass fixes.
     * Each individual error has its own suggestion, so you have to show the correct, _isolated_ output for each suggestion.
     */
    readonly output: string;
}
/**
 * @deprecated Use `@typescript-eslint/rule-tester` instead.
 */
export interface InvalidTestCase<MessageIds extends string, Options extends readonly unknown[]> extends ValidTestCase<Options> {
    /**
     * Expected errors.
     */
    readonly errors: readonly TestCaseError<MessageIds>[];
    /**
     * The expected code after autofixes are applied. If set to `null`, the test runner will assert that no autofix is suggested.
     */
    readonly output?: string | string[] | null;
}
/**
 * @deprecated Use `@typescript-eslint/rule-tester` instead.
 */
export interface TestCaseError<MessageIds extends string> {
    /**
     * The 1-based column number of the reported start location.
     */
    readonly column?: number;
    /**
     * The data used to fill the message template.
     */
    readonly data?: ReportDescriptorMessageData;
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
    readonly messageId: MessageIds;
    /**
     * Reported suggestions.
     */
    readonly suggestions?: readonly SuggestionOutput<MessageIds>[] | null;
    /**
     * The type of the reported AST node.
     */
    readonly type?: AST_NODE_TYPES | AST_TOKEN_TYPES;
}
/**
 * @param text a string describing the rule
 * @deprecated Use `@typescript-eslint/rule-tester` instead.
 */
export type RuleTesterTestFrameworkFunction = (text: string, callback: () => void) => void;
/**
 * @deprecated Use `@typescript-eslint/rule-tester` instead.
 */
export interface RunTests<MessageIds extends string, Options extends readonly unknown[]> {
    readonly invalid: readonly InvalidTestCase<MessageIds, Options>[];
    readonly valid: readonly (string | ValidTestCase<Options>)[];
}
/**
 * @deprecated Use `@typescript-eslint/rule-tester` instead.
 */
export interface RuleTesterConfig extends ClassicConfig.Config {
    readonly parser: string;
    readonly parserOptions?: Readonly<ParserOptions>;
}
/**
 * @deprecated Use `@typescript-eslint/rule-tester` instead.
 */
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
     * @param tests The collection of tests to run.
     */
    run<MessageIds extends string, Options extends readonly unknown[]>(ruleName: string, rule: RuleModule<MessageIds, Options>, tests: RunTests<MessageIds, Options>): void;
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
    defineRule<MessageIds extends string, Options extends readonly unknown[]>(name: string, rule: RuleCreateFunction<MessageIds, Options> | RuleModule<MessageIds, Options>): void;
}
declare const RuleTester_base: typeof RuleTesterBase;
/**
 * @deprecated Use `@typescript-eslint/rule-tester` instead.
 */
export declare class RuleTester extends RuleTester_base {
}
export {};
