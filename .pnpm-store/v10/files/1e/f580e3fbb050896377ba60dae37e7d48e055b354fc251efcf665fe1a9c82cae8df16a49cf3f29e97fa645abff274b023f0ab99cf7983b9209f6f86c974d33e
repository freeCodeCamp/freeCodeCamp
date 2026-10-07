import { Linter } from "../index";

export interface Deprecated extends Linter.RulesRecord {
    /**
     * Rule to enforce consistent indentation.
     *
     * @since 4.0.0-alpha.0
     * @deprecated since 4.0.0, use [`indent`](https://eslint.org/docs/rules/indent) instead.
     * @see https://eslint.org/docs/rules/indent-legacy
     */
    "indent-legacy": Linter.RuleEntry<
        [
            number | "tab",
            Partial<{
                /**
                 * @default 0
                 */
                SwitchCase: number;
                /**
                 * @default 1
                 */
                VariableDeclarator:
                    | Partial<{
                        /**
                         * @default 1
                         */
                        var: number | "first";
                        /**
                         * @default 1
                         */
                        let: number | "first";
                        /**
                         * @default 1
                         */
                        const: number | "first";
                    }>
                    | number
                    | "first";
                /**
                 * @default 1
                 */
                outerIIFEBody: number;
                /**
                 * @default 1
                 */
                MemberExpression: number | "off";
                /**
                 * @default { parameters: 1, body: 1 }
                 */
                FunctionDeclaration: Partial<{
                    /**
                     * @default 1
                     */
                    parameters: number | "first" | "off";
                    /**
                     * @default 1
                     */
                    body: number;
                }>;
                /**
                 * @default { parameters: 1, body: 1 }
                 */
                FunctionExpression: Partial<{
                    /**
                     * @default 1
                     */
                    parameters: number | "first" | "off";
                    /**
                     * @default 1
                     */
                    body: number;
                }>;
                /**
                 * @default { arguments: 1 }
                 */
                CallExpression: Partial<{
                    /**
                     * @default 1
                     */
                    arguments: number | "first" | "off";
                }>;
                /**
                 * @default 1
                 */
                ArrayExpression: number | "first" | "off";
                /**
                 * @default 1
                 */
                ObjectExpression: number | "first" | "off";
                /**
                 * @default 1
                 */
                ImportDeclaration: number | "first" | "off";
                /**
                 * @default false
                 */
                flatTernaryExpressions: boolean;
                ignoredNodes: string[];
                /**
                 * @default false
                 */
                ignoreComments: boolean;
            }>,
        ]
    >;

    /**
     * Rule to require or disallow newlines around directives.
     *
     * @since 3.5.0
     * @deprecated since 4.0.0, use [`padding-line-between-statements`](https://eslint.org/docs/rules/padding-line-between-statements) instead.
     * @see https://eslint.org/docs/rules/lines-around-directive
     */
    "lines-around-directive": Linter.RuleEntry<["always" | "never"]>;

    /**
     * Rule to require or disallow an empty line after variable declarations.
     *
     * @since 0.18.0
     * @deprecated since 4.0.0, use [`padding-line-between-statements`](https://eslint.org/docs/rules/padding-line-between-statements) instead.
     * @see https://eslint.org/docs/rules/newline-after-var
     */
    "newline-after-var": Linter.RuleEntry<["always" | "never"]>;

    /**
     * Rule to require an empty line before `return` statements.
     *
     * @since 2.3.0
     * @deprecated since 4.0.0, use [`padding-line-between-statements`](https://eslint.org/docs/rules/padding-line-between-statements) instead.
     * @see https://eslint.org/docs/rules/newline-before-return
     */
    "newline-before-return": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow shadowing of variables inside of `catch`.
     *
     * @since 0.0.9
     * @deprecated since 5.1.0, use [`no-shadow`](https://eslint.org/docs/rules/no-shadow) instead.
     * @see https://eslint.org/docs/rules/no-catch-shadow
     */
    "no-catch-shadow": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow reassignment of native objects.
     *
     * @since 0.0.9
     * @deprecated since 3.3.0, use [`no-global-assign`](https://eslint.org/docs/rules/no-global-assign) instead.
     * @see https://eslint.org/docs/rules/no-native-reassign
     */
    "no-native-reassign": Linter.RuleEntry<
        [
            Partial<{
                exceptions: string[];
            }>,
        ]
    >;

    /**
     * Rule to disallow negating the left operand in `in` expressions.
     *
     * @since 0.1.2
     * @deprecated since 3.3.0, use [`no-unsafe-negation`](https://eslint.org/docs/rules/no-unsafe-negation) instead.
     * @see https://eslint.org/docs/rules/no-negated-in-lhs
     */
    "no-negated-in-lhs": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow spacing between function identifiers and their applications.
     *
     * @since 0.1.2
     * @deprecated since 3.3.0, use [`func-call-spacing`](https://eslint.org/docs/rules/func-call-spacing) instead.
     * @see https://eslint.org/docs/rules/no-spaced-func
     */
    "no-spaced-func": Linter.RuleEntry<[]>;

    /**
     * Rule to suggest using `Reflect` methods where applicable.
     *
     * @since 1.0.0-rc-2
     * @deprecated since 3.9.0
     * @see https://eslint.org/docs/rules/prefer-reflect
     */
    "prefer-reflect": Linter.RuleEntry<
        [
            Partial<{
                exceptions: string[];
            }>,
        ]
    >;

    /**
     * Rule to require JSDoc comments.
     *
     * @since 1.4.0
     * @deprecated since 5.10.0
     * @see https://eslint.org/docs/rules/require-jsdoc
     */
    "require-jsdoc": Linter.RuleEntry<
        [
            Partial<{
                require: Partial<{
                    /**
                     * @default true
                     */
                    FunctionDeclaration: boolean;
                    /**
                     * @default false
                     */
                    MethodDefinition: boolean;
                    /**
                     * @default false
                     */
                    ClassDeclaration: boolean;
                    /**
                     * @default false
                     */
                    ArrowFunctionExpression: boolean;
                    /**
                     * @default false
                     */
                    FunctionExpression: boolean;
                }>;
            }>,
        ]
    >;

    /**
     * Rule to enforce valid JSDoc comments.
     *
     * @since 0.4.0
     * @deprecated since 5.10.0
     * @see https://eslint.org/docs/rules/valid-jsdoc
     */
    "valid-jsdoc": Linter.RuleEntry<
        [
            Partial<{
                prefer: Record<string, string>;
                preferType: Record<string, string>;
                /**
                 * @default true
                 */
                requireReturn: boolean;
                /**
                 * @default true
                 */
                requireReturnType: boolean;
                /**
                 * @remarks
                 * Also accept for regular expression pattern
                 */
                matchDescription: string;
                /**
                 * @default true
                 */
                requireParamDescription: boolean;
                /**
                 * @default true
                 */
                requireReturnDescription: boolean;
                /**
                 * @default true
                 */
                requireParamType: boolean;
            }>,
        ]
    >;
}
