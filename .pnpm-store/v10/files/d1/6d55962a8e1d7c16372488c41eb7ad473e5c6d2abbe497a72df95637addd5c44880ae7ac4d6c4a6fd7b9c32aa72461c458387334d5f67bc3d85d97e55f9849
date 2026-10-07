import { Linter } from "../index";

export interface NodeJSAndCommonJS extends Linter.RulesRecord {
    /**
     * Rule to require `return` statements after callbacks.
     *
     * @since 1.0.0-rc-1
     * @see https://eslint.org/docs/rules/callback-return
     */
    "callback-return": Linter.RuleEntry<[string[]]>;

    /**
     * Rule to require `require()` calls to be placed at top-level module scope.
     *
     * @since 1.4.0
     * @see https://eslint.org/docs/rules/global-require
     */
    "global-require": Linter.RuleEntry<[]>;

    /**
     * Rule to require error handling in callbacks.
     *
     * @since 0.4.5
     * @see https://eslint.org/docs/rules/handle-callback-err
     */
    "handle-callback-err": Linter.RuleEntry<[string]>;

    /**
     * Rule to disallow use of the `Buffer()` constructor.
     *
     * @since 4.0.0-alpha.0
     * @see https://eslint.org/docs/rules/no-buffer-constructor
     */
    "no-buffer-constructor": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow `require` calls to be mixed with regular variable declarations.
     *
     * @since 0.0.9
     * @see https://eslint.org/docs/rules/no-mixed-requires
     */
    "no-mixed-requires": Linter.RuleEntry<
        [
            Partial<{
                /**
                 * @default false
                 */
                grouping: boolean;
                /**
                 * @default false
                 */
                allowCall: boolean;
            }>,
        ]
    >;

    /**
     * Rule to disallow `new` operators with calls to `require`.
     *
     * @since 0.6.0
     * @see https://eslint.org/docs/rules/no-new-require
     */
    "no-new-require": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow string concatenation when using `__dirname` and `__filename`.
     *
     * @since 0.4.0
     * @see https://eslint.org/docs/rules/no-path-concat
     */
    "no-path-concat": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow the use of `process.env`.
     *
     * @since 0.9.0
     * @see https://eslint.org/docs/rules/no-process-env
     */
    "no-process-env": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow the use of `process.exit()`.
     *
     * @since 0.4.0
     * @see https://eslint.org/docs/rules/no-process-exit
     */
    "no-process-exit": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow specified modules when loaded by `require`.
     *
     * @since 0.6.0
     * @see https://eslint.org/docs/rules/no-restricted-modules
     */
    "no-restricted-modules": Linter.RuleEntry<
        [
            ...Array<
                | string
                | {
                    name: string;
                    message?: string | undefined;
                }
                | Partial<{
                    paths: Array<
                        | string
                        | {
                            name: string;
                            message?: string | undefined;
                        }
                    >;
                    patterns: string[];
                }>
            >,
        ]
    >;

    /**
     * Rule to disallow synchronous methods.
     *
     * @since 0.0.9
     * @see https://eslint.org/docs/rules/no-sync
     */
    "no-sync": Linter.RuleEntry<
        [
            {
                /**
                 * @default false
                 */
                allowAtRootLevel: boolean;
            },
        ]
    >;
}
