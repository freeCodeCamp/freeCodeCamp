import { Linter } from "../index";

export interface PossibleErrors extends Linter.RulesRecord {
    /**
     * Rule to enforce `for` loop update clause moving the counter in the right direction.
     *
     * @remarks
     * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
     *
     * @since 4.0.0-beta.0
     * @see https://eslint.org/docs/rules/for-direction
     */
    "for-direction": Linter.RuleEntry<[]>;

    /**
     * Rule to enforce `return` statements in getters.
     *
     * @remarks
     * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
     *
     * @since 4.2.0
     * @see https://eslint.org/docs/rules/getter-return
     */
    "getter-return": Linter.RuleEntry<
        [
            Partial<{
                /**
                 * @default false
                 */
                allowImplicit: boolean;
            }>,
        ]
    >;

    /**
     * Rule to disallow using an async function as a `Promise` executor.
     *
     * @remarks
     * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
     *
     * @since 5.3.0
     * @see https://eslint.org/docs/rules/no-async-promise-executor
     */
    "no-async-promise-executor": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow `await` inside of loops.
     *
     * @since 3.12.0
     * @see https://eslint.org/docs/rules/no-await-in-loop
     */
    "no-await-in-loop": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow comparing against `-0`.
     *
     * @remarks
     * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
     *
     * @since 3.17.0
     * @see https://eslint.org/docs/rules/no-compare-neg-zero
     */
    "no-compare-neg-zero": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow assignment operators in conditional statements.
     *
     * @remarks
     * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
     *
     * @since 0.0.9
     * @see https://eslint.org/docs/rules/no-cond-assign
     */
    "no-cond-assign": Linter.RuleEntry<["except-parens" | "always"]>;

    /**
     * Rule to disallow the use of `console`.
     *
     * @since 0.0.2
     * @see https://eslint.org/docs/rules/no-console
     */
    "no-console": Linter.RuleEntry<
        [
            Partial<{
                allow: Array<keyof Console>;
            }>,
        ]
    >;

    /**
     * Rule to disallow constant expressions in conditions.
     *
     * @remarks
     * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
     *
     * @since 0.4.1
     * @see https://eslint.org/docs/rules/no-constant-condition
     */
    "no-constant-condition": Linter.RuleEntry<
        [
            {
                /**
                 * @default true
                 */
                checkLoops: boolean;
            },
        ]
    >;

    /**
     * Rule to disallow control characters in regular expressions.
     *
     * @remarks
     * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
     *
     * @since 0.1.0
     * @see https://eslint.org/docs/rules/no-control-regex
     */
    "no-control-regex": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow the use of `debugger`.
     *
     * @remarks
     * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
     *
     * @since 0.0.2
     * @see https://eslint.org/docs/rules/no-debugger
     */
    "no-debugger": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow duplicate arguments in `function` definitions.
     *
     * @remarks
     * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
     *
     * @since 0.16.0
     * @see https://eslint.org/docs/rules/no-dupe-args
     */
    "no-dupe-args": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow duplicate keys in object literals.
     *
     * @remarks
     * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
     *
     * @since 0.0.9
     * @see https://eslint.org/docs/rules/no-dupe-keys
     */
    "no-dupe-keys": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow a duplicate case label.
     *
     * @remarks
     * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
     *
     * @since 0.17.0
     * @see https://eslint.org/docs/rules/no-duplicate-case
     */
    "no-duplicate-case": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow empty block statements.
     *
     * @remarks
     * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
     *
     * @since 0.0.2
     * @see https://eslint.org/docs/rules/no-empty
     */
    "no-empty": Linter.RuleEntry<
        [
            Partial<{
                /**
                 * @default false
                 */
                allowEmptyCatch: boolean;
            }>,
        ]
    >;

    /**
     * Rule to disallow empty character classes in regular expressions.
     *
     * @remarks
     * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
     *
     * @since 0.22.0
     * @see https://eslint.org/docs/rules/no-empty-character-class
     */
    "no-empty-character-class": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow reassigning exceptions in `catch` clauses.
     *
     * @remarks
     * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
     *
     * @since 0.0.9
     * @see https://eslint.org/docs/rules/no-ex-assign
     */
    "no-ex-assign": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow unnecessary boolean casts.
     *
     * @remarks
     * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
     *
     * @since 0.4.0
     * @see https://eslint.org/docs/rules/no-extra-boolean-cast
     */
    "no-extra-boolean-cast": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow unnecessary parentheses.
     *
     * @since 0.1.4
     * @see https://eslint.org/docs/rules/no-extra-parens
     */
    "no-extra-parens":
        | Linter.RuleEntry<
            [
                "all",
                Partial<{
                    /**
                     * @default true,
                     */
                    conditionalAssign: boolean;
                    /**
                     * @default true
                     */
                    returnAssign: boolean;
                    /**
                     * @default true
                     */
                    nestedBinaryExpressions: boolean;
                    /**
                     * @default 'none'
                     */
                    ignoreJSX: "none" | "all" | "multi-line" | "single-line";
                    /**
                     * @default true
                     */
                    enforceForArrowConditionals: boolean;
                }>,
            ]
        >
        | Linter.RuleEntry<["functions"]>;

    /**
     * Rule to disallow unnecessary semicolons.
     *
     * @remarks
     * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
     *
     * @since 0.0.9
     * @see https://eslint.org/docs/rules/no-extra-semi
     */
    "no-extra-semi": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow reassigning `function` declarations.
     *
     * @remarks
     * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
     *
     * @since 0.0.9
     * @see https://eslint.org/docs/rules/no-func-assign
     */
    "no-func-assign": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow variable or `function` declarations in nested blocks.
     *
     * @remarks
     * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
     *
     * @since 0.6.0
     * @see https://eslint.org/docs/rules/no-inner-declarations
     */
    "no-inner-declarations": Linter.RuleEntry<["functions" | "both"]>;

    /**
     * Rule to disallow invalid regular expression strings in `RegExp` constructors.
     *
     * @remarks
     * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
     *
     * @since 0.1.4
     * @see https://eslint.org/docs/rules/no-invalid-regexp
     */
    "no-invalid-regexp": Linter.RuleEntry<
        [
            Partial<{
                allowConstructorFlags: string[];
            }>,
        ]
    >;

    /**
     * Rule to disallow irregular whitespace.
     *
     * @remarks
     * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
     *
     * @since 0.9.0
     * @see https://eslint.org/docs/rules/no-irregular-whitespace
     */
    "no-irregular-whitespace": Linter.RuleEntry<
        [
            Partial<{
                /**
                 * @default true
                 */
                skipStrings: boolean;
                /**
                 * @default false
                 */
                skipComments: boolean;
                /**
                 * @default false
                 */
                skipRegExps: boolean;
                /**
                 * @default false
                 */
                skipTemplates: boolean;
            }>,
        ]
    >;

    /**
     * Rule to disallow characters which are made with multiple code points in character class syntax.
     *
     * @remarks
     * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
     *
     * @since 5.3.0
     * @see https://eslint.org/docs/rules/no-misleading-character-class
     */
    "no-misleading-character-class": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow calling global object properties as functions.
     *
     * @remarks
     * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
     *
     * @since 0.0.9
     * @see https://eslint.org/docs/rules/no-obj-calls
     */
    "no-obj-calls": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow use of `Object.prototypes` builtins directly.
     *
     * @remarks
     * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
     *
     * @since 2.11.0
     * @see https://eslint.org/docs/rules/no-prototype-builtins
     */
    "no-prototype-builtins": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow multiple spaces in regular expressions.
     *
     * @remarks
     * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
     *
     * @since 0.4.0
     * @see https://eslint.org/docs/rules/no-regex-spaces
     */
    "no-regex-spaces": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow sparse arrays.
     *
     * @remarks
     * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
     *
     * @since 0.4.0
     * @see https://eslint.org/docs/rules/no-sparse-arrays
     */
    "no-sparse-arrays": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow template literal placeholder syntax in regular strings.
     *
     * @since 3.3.0
     * @see https://eslint.org/docs/rules/no-template-curly-in-string
     */
    "no-template-curly-in-string": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow confusing multiline expressions.
     *
     * @remarks
     * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
     *
     * @since 0.24.0
     * @see https://eslint.org/docs/rules/no-unexpected-multiline
     */
    "no-unexpected-multiline": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow unreachable code after `return`, `throw`, `continue`, and `break` statements.
     *
     * @remarks
     * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
     *
     * @since 0.0.6
     * @see https://eslint.org/docs/rules/no-unreachable
     */
    "no-unreachable": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow control flow statements in `finally` blocks.
     *
     * @remarks
     * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
     *
     * @since 2.9.0
     * @see https://eslint.org/docs/rules/no-unsafe-finally
     */
    "no-unsafe-finally": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow negating the left operand of relational operators.
     *
     * @remarks
     * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
     *
     * @since 3.3.0
     * @see https://eslint.org/docs/rules/no-unsafe-negation
     */
    "no-unsafe-negation": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow assignments that can lead to race conditions due to usage of `await` or `yield`.
     *
     * @remarks
     * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
     *
     * @since 5.3.0
     * @see https://eslint.org/docs/rules/require-atomic-updates
     */
    "require-atomic-updates": Linter.RuleEntry<[]>;

    /**
     * Rule to require calls to `isNaN()` when checking for `NaN`.
     *
     * @remarks
     * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
     *
     * @since 0.0.6
     * @see https://eslint.org/docs/rules/use-isnan
     */
    "use-isnan": Linter.RuleEntry<[]>;

    /**
     * Rule to enforce comparing `typeof` expressions against valid strings.
     *
     * @remarks
     * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
     *
     * @since 0.5.0
     * @see https://eslint.org/docs/rules/valid-typeof
     */
    "valid-typeof": Linter.RuleEntry<
        [
            Partial<{
                /**
                 * @default false
                 */
                requireStringLiterals: boolean;
            }>,
        ]
    >;
}
