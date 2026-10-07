import { Linter } from "../index";

export interface Variables extends Linter.RulesRecord {
    /**
     * Rule to require or disallow initialization in variable declarations.
     *
     * @since 1.0.0-rc-1
     * @see https://eslint.org/docs/rules/init-declarations
     */
    "init-declarations":
        | Linter.RuleEntry<["always"]>
        | Linter.RuleEntry<
            [
                "never",
                Partial<{
                    ignoreForLoopInit: boolean;
                }>,
            ]
        >;

    /**
     * Rule to disallow deleting variables.
     *
     * @remarks
     * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
     *
     * @since 0.0.9
     * @see https://eslint.org/docs/rules/no-delete-var
     */
    "no-delete-var": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow labels that share a name with a variable.
     *
     * @since 0.0.9
     * @see https://eslint.org/docs/rules/no-label-var
     */
    "no-label-var": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow specified global variables.
     *
     * @since 2.3.0
     * @see https://eslint.org/docs/rules/no-restricted-globals
     */
    "no-restricted-globals": Linter.RuleEntry<
        [
            ...Array<
                | string
                | {
                    name: string;
                    message?: string | undefined;
                }
            >,
        ]
    >;

    /**
     * Rule to disallow variable declarations from shadowing variables declared in the outer scope.
     *
     * @since 0.0.9
     * @see https://eslint.org/docs/rules/no-shadow
     */
    "no-shadow": Linter.RuleEntry<
        [
            Partial<{
                /**
                 * @default false
                 */
                builtinGlobals: boolean;
                /**
                 * @default 'functions'
                 */
                hoist: "functions" | "all" | "never";
                allow: string[];
            }>,
        ]
    >;

    /**
     * Rule to disallow identifiers from shadowing restricted names.
     *
     * @remarks
     * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
     *
     * @since 0.1.4
     * @see https://eslint.org/docs/rules/no-shadow-restricted-names
     */
    "no-shadow-restricted-names": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow the use of undeclared variables unless mentioned in `global` comments.
     *
     * @remarks
     * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
     *
     * @since 0.0.9
     * @see https://eslint.org/docs/rules/no-undef
     */
    "no-undef": Linter.RuleEntry<
        [
            Partial<{
                /**
                 * @default false
                 */
                typeof: boolean;
            }>,
        ]
    >;

    /**
     * Rule to disallow initializing variables to `undefined`.
     *
     * @since 0.0.6
     * @see https://eslint.org/docs/rules/no-undef-init
     */
    "no-undef-init": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow the use of `undefined` as an identifier.
     *
     * @since 0.7.1
     * @see https://eslint.org/docs/rules/no-undefined
     */
    "no-undefined": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow unused variables.
     *
     * @remarks
     * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
     *
     * @since 0.0.9
     * @see https://eslint.org/docs/rules/no-unused-vars
     */
    "no-unused-vars": Linter.RuleEntry<
        [
            Partial<{
                /**
                 * @default 'all'
                 */
                vars: "all" | "local";
                varsIgnorePattern: string;
                /**
                 * @default 'after-used'
                 */
                args: "after-used" | "all" | "none";
                /**
                 * @default false
                 */
                ignoreRestSiblings: boolean;
                argsIgnorePattern: string;
                /**
                 * @default 'none'
                 */
                caughtErrors: "none" | "all";
                caughtErrorsIgnorePattern: string;
            }>,
        ]
    >;

    /**
     * Rule to disallow the use of variables before they are defined.
     *
     * @since 0.0.9
     * @see https://eslint.org/docs/rules/no-use-before-define
     */
    "no-use-before-define": Linter.RuleEntry<
        [
            | Partial<{
                /**
                 * @default true
                 */
                functions: boolean;
                /**
                 * @default true
                 */
                classes: boolean;
                /**
                 * @default true
                 */
                variables: boolean;
            }>
            | "nofunc",
        ]
    >;
}
