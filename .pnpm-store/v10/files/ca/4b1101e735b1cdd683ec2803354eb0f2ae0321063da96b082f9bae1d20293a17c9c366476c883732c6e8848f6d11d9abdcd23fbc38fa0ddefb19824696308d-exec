import { Linter } from "../index";

export interface BestPractices extends Linter.RulesRecord {
    /**
     * Rule to enforce getter and setter pairs in objects.
     *
     * @since 0.22.0
     * @see https://eslint.org/docs/rules/accessor-pairs
     */
    "accessor-pairs": Linter.RuleEntry<
        [
            Partial<{
                /**
                 * @default true
                 */
                setWithoutGet: boolean;
                /**
                 * @default false
                 */
                getWithoutSet: boolean;
            }>,
        ]
    >;

    /**
     * Rule to enforce `return` statements in callbacks of array methods.
     *
     * @since 2.0.0-alpha-1
     * @see https://eslint.org/docs/rules/array-callback-return
     */
    "array-callback-return": Linter.RuleEntry<
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
     * Rule to enforce the use of variables within the scope they are defined.
     *
     * @since 0.1.0
     * @see https://eslint.org/docs/rules/block-scoped-var
     */
    "block-scoped-var": Linter.RuleEntry<[]>;

    /**
     * Rule to enforce that class methods utilize `this`.
     *
     * @since 3.4.0
     * @see https://eslint.org/docs/rules/class-methods-use-this
     */
    "class-methods-use-this": Linter.RuleEntry<
        [
            Partial<{
                exceptMethods: string[];
            }>,
        ]
    >;

    /**
     * Rule to enforce a maximum cyclomatic complexity allowed in a program.
     *
     * @since 0.0.9
     * @see https://eslint.org/docs/rules/complexity
     */
    complexity: Linter.RuleEntry<
        [
            | Partial<{
                  /**
                   * @default 20
                   */
                  max: number;
                  /**
                   * @deprecated
                   * @default 20
                   */
                  maximum: number;
              }>
            | number,
        ]
    >;

    /**
     * Rule to require `return` statements to either always or never specify values.
     *
     * @since 0.4.0
     * @see https://eslint.org/docs/rules/consistent-return
     */
    "consistent-return": Linter.RuleEntry<
        [
            Partial<{
                /**
                 * @default false
                 */
                treatUndefinedAsUnspecified: boolean;
            }>,
        ]
    >;

    /**
     * Rule to enforce consistent brace style for all control statements.
     *
     * @since 0.0.2
     * @see https://eslint.org/docs/rules/curly
     */
    curly: Linter.RuleEntry<["all" | "multi" | "multi-line" | "multi-or-nest" | "consistent"]>;

    /**
     * Rule to require `default` cases in `switch` statements.
     *
     * @since 0.6.0
     * @see https://eslint.org/docs/rules/default-case
     */
    "default-case": Linter.RuleEntry<
        [
            Partial<{
                /**
                 * @default '^no default$'
                 */
                commentPattern: string;
            }>,
        ]
    >;

    /**
     * Rule to enforce consistent newlines before and after dots.
     *
     * @since 0.21.0
     * @see https://eslint.org/docs/rules/dot-location
     */
    "dot-location": Linter.RuleEntry<["object" | "property"]>;

    /**
     * Rule to enforce dot notation whenever possible.
     *
     * @since 0.0.7
     * @see https://eslint.org/docs/rules/dot-notation
     */
    "dot-notation": Linter.RuleEntry<
        [
            Partial<{
                /**
                 * @default true
                 */
                allowKeywords: boolean;
                allowPattern: string;
            }>,
        ]
    >;

    /**
     * Rule to require the use of `===` and `!==`.
     *
     * @since 0.0.2
     * @see https://eslint.org/docs/rules/eqeqeq
     */
    eqeqeq:
        | Linter.RuleEntry<
              [
                  "always",
                  Partial<{
                      /**
                       * @default 'always'
                       */
                      null: "always" | "never" | "ignore";
                  }>,
              ]
          >
        | Linter.RuleEntry<["smart" | "allow-null"]>;

    /**
     * Rule to require `for-in` loops to include an `if` statement.
     *
     * @since 0.0.6
     * @see https://eslint.org/docs/rules/guard-for-in
     */
    "guard-for-in": Linter.RuleEntry<[]>;

    /**
     * Rule to enforce a maximum number of classes per file.
     *
     * @since 5.0.0-alpha.3
     * @see https://eslint.org/docs/rules/max-classes-per-file
     */
    "max-classes-per-file": Linter.RuleEntry<[number]>;

    /**
     * Rule to disallow the use of `alert`, `confirm`, and `prompt`.
     *
     * @since 0.0.5
     * @see https://eslint.org/docs/rules/no-alert
     */
    "no-alert": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow the use of `arguments.caller` or `arguments.callee`.
     *
     * @since 0.0.6
     * @see https://eslint.org/docs/rules/no-caller
     */
    "no-caller": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow lexical declarations in case clauses.
     *
     * @remarks
     * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
     *
     * @since 1.9.0
     * @see https://eslint.org/docs/rules/no-case-declarations
     */
    "no-case-declarations": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow division operators explicitly at the beginning of regular expressions.
     *
     * @since 0.1.0
     * @see https://eslint.org/docs/rules/no-div-regex
     */
    "no-div-regex": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow `else` blocks after `return` statements in `if` statements.
     *
     * @since 0.0.9
     * @see https://eslint.org/docs/rules/no-else-return
     */
    "no-else-return": Linter.RuleEntry<
        [
            Partial<{
                /**
                 * @default true
                 */
                allowElseIf: boolean;
            }>,
        ]
    >;

    /**
     * Rule to disallow empty functions.
     *
     * @since 2.0.0
     * @see https://eslint.org/docs/rules/no-empty-function
     */
    "no-empty-function": Linter.RuleEntry<
        [
            Partial<{
                /**
                 * @default []
                 */
                allow: Array<
                    | "functions"
                    | "arrowFunctions"
                    | "generatorFunctions"
                    | "methods"
                    | "generatorMethods"
                    | "getters"
                    | "setters"
                    | "constructors"
                >;
            }>,
        ]
    >;

    /**
     * Rule to disallow empty destructuring patterns.
     *
     * @remarks
     * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
     *
     * @since 1.7.0
     * @see https://eslint.org/docs/rules/no-empty-pattern
     */
    "no-empty-pattern": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow `null` comparisons without type-checking operators.
     *
     * @since 0.0.9
     * @see https://eslint.org/docs/rules/no-eq-null
     */
    "no-eq-null": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow the use of `eval()`.
     *
     * @since 0.0.2
     * @see https://eslint.org/docs/rules/no-eval
     */
    "no-eval": Linter.RuleEntry<
        [
            Partial<{
                /**
                 * @default false
                 */
                allowIndirect: boolean;
            }>,
        ]
    >;

    /**
     * Rule to disallow extending native types.
     *
     * @since 0.1.4
     * @see https://eslint.org/docs/rules/no-extend-native
     */
    "no-extend-native": Linter.RuleEntry<
        [
            Partial<{
                exceptions: string[];
            }>,
        ]
    >;

    /**
     * Rule to disallow unnecessary calls to `.bind()`.
     *
     * @since 0.8.0
     * @see https://eslint.org/docs/rules/no-extra-bind
     */
    "no-extra-bind": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow unnecessary labels.
     *
     * @since 2.0.0-rc.0
     * @see https://eslint.org/docs/rules/no-extra-label
     */
    "no-extra-label": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow fallthrough of `case` statements.
     *
     * @remarks
     * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
     *
     * @since 0.0.7
     * @see https://eslint.org/docs/rules/no-fallthrough
     */
    "no-fallthrough": Linter.RuleEntry<
        [
            Partial<{
                /**
                 * @default 'falls?\s?through'
                 */
                commentPattern: string;
            }>,
        ]
    >;

    /**
     * Rule to disallow leading or trailing decimal points in numeric literals.
     *
     * @since 0.0.6
     * @see https://eslint.org/docs/rules/no-floating-decimal
     */
    "no-floating-decimal": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow assignments to native objects or read-only global variables.
     *
     * @remarks
     * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
     *
     * @since 3.3.0
     * @see https://eslint.org/docs/rules/no-global-assign
     */
    "no-global-assign": Linter.RuleEntry<
        [
            Partial<{
                exceptions: string[];
            }>,
        ]
    >;

    /**
     * Rule to disallow shorthand type conversions.
     *
     * @since 1.0.0-rc-2
     * @see https://eslint.org/docs/rules/no-implicit-coercion
     */
    "no-implicit-coercion": Linter.RuleEntry<
        [
            Partial<{
                /**
                 * @default true
                 */
                boolean: boolean;
                /**
                 * @default true
                 */
                number: boolean;
                /**
                 * @default true
                 */
                string: boolean;
                /**
                 * @default []
                 */
                allow: Array<"~" | "!!" | "+" | "*">;
            }>,
        ]
    >;

    /**
     * Rule to disallow variable and `function` declarations in the global scope.
     *
     * @since 2.0.0-alpha-1
     * @see https://eslint.org/docs/rules/no-implicit-globals
     */
    "no-implicit-globals": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow the use of `eval()`-like methods.
     *
     * @since 0.0.7
     * @see https://eslint.org/docs/rules/no-implied-eval
     */
    "no-implied-eval": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow `this` keywords outside of classes or class-like objects.
     *
     * @since 1.0.0-rc-2
     * @see https://eslint.org/docs/rules/no-invalid-this
     */
    "no-invalid-this": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow the use of the `__iterator__` property.
     *
     * @since 0.0.9
     * @see https://eslint.org/docs/rules/no-iterator
     */
    "no-iterator": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow labeled statements.
     *
     * @since 0.4.0
     * @see https://eslint.org/docs/rules/no-labels
     */
    "no-labels": Linter.RuleEntry<
        [
            Partial<{
                /**
                 * @default false
                 */
                allowLoop: boolean;
                /**
                 * @default false
                 */
                allowSwitch: boolean;
            }>,
        ]
    >;

    /**
     * Rule to disallow unnecessary nested blocks.
     *
     * @since 0.4.0
     * @see https://eslint.org/docs/rules/no-lone-blocks
     */
    "no-lone-blocks": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow function declarations that contain unsafe references inside loop statements.
     *
     * @since 0.0.9
     * @see https://eslint.org/docs/rules/no-loop-func
     */
    "no-loop-func": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow magic numbers.
     *
     * @since 1.7.0
     * @see https://eslint.org/docs/rules/no-magic-numbers
     */
    "no-magic-numbers": Linter.RuleEntry<
        [
            Partial<{
                /**
                 * @default []
                 */
                ignore: number[];
                /**
                 * @default false
                 */
                ignoreArrayIndexes: boolean;
                /**
                 * @default false
                 */
                enforceConst: boolean;
                /**
                 * @default false
                 */
                detectObjects: boolean;
            }>,
        ]
    >;

    /**
     * Rule to disallow multiple spaces.
     *
     * @since 0.9.0
     * @see https://eslint.org/docs/rules/no-multi-spaces
     */
    "no-multi-spaces": Linter.RuleEntry<
        [
            Partial<{
                /**
                 * @default false
                 */
                ignoreEOLComments: boolean;
                /**
                 * @default { Property: true }
                 */
                exceptions: Record<string, boolean>;
            }>,
        ]
    >;

    /**
     * Rule to disallow multiline strings.
     *
     * @since 0.0.9
     * @see https://eslint.org/docs/rules/no-multi-str
     */
    "no-multi-str": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow `new` operators outside of assignments or comparisons.
     *
     * @since 0.0.7
     * @see https://eslint.org/docs/rules/no-new
     */
    "no-new": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow `new` operators with the `Function` object.
     *
     * @since 0.0.7
     * @see https://eslint.org/docs/rules/no-new-func
     */
    "no-new-func": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow `new` operators with the `String`, `Number`, and `Boolean` objects.
     *
     * @since 0.0.6
     * @see https://eslint.org/docs/rules/no-new-wrappers
     */
    "no-new-wrappers": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow octal literals.
     *
     * @remarks
     * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
     *
     * @since 0.0.6
     * @see https://eslint.org/docs/rules/no-octal
     */
    "no-octal": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow octal escape sequences in string literals.
     *
     * @since 0.0.9
     * @see https://eslint.org/docs/rules/no-octal-escape
     */
    "no-octal-escape": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow reassigning `function` parameters.
     *
     * @since 0.18.0
     * @see https://eslint.org/docs/rules/no-param-reassign
     */
    "no-param-reassign": Linter.RuleEntry<
        [
            Partial<{
                /**
                 * @default false
                 */
                props: boolean;
                /**
                 * @default []
                 */
                ignorePropertyModificationsFor: string[];
            }>,
        ]
    >;

    /**
     * Rule to disallow the use of the `__proto__` property.
     *
     * @since 0.0.9
     * @see https://eslint.org/docs/rules/no-proto
     */
    "no-proto": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow variable redeclaration.
     *
     * @remarks
     * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
     *
     * @since 0.0.9
     * @see https://eslint.org/docs/rules/no-redeclare
     */
    "no-redeclare": Linter.RuleEntry<
        [
            Partial<{
                /**
                 * @default true
                 */
                builtinGlobals: boolean;
            }>,
        ]
    >;

    /**
     * Rule to disallow certain properties on certain objects.
     *
     * @since 3.5.0
     * @see https://eslint.org/docs/rules/no-restricted-properties
     */
    "no-restricted-properties": Linter.RuleEntry<
        [
            ...Array<
                | {
                      object: string;
                      property?: string | undefined;
                      message?: string | undefined;
                  }
                | {
                      property: string;
                      message?: string | undefined;
                  }
            >
        ]
    >;

    /**
     * Rule to disallow assignment operators in `return` statements.
     *
     * @since 0.0.9
     * @see https://eslint.org/docs/rules/no-return-assign
     */
    "no-return-assign": Linter.RuleEntry<["except-parens" | "always"]>;

    /**
     * Rule to disallow unnecessary `return await`.
     *
     * @since 3.10.0
     * @see https://eslint.org/docs/rules/no-return-await
     */
    "no-return-await": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow `javascript:` urls.
     *
     * @since 0.0.9
     * @see https://eslint.org/docs/rules/no-script-url
     */
    "no-script-url": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow assignments where both sides are exactly the same.
     *
     * @remarks
     * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
     *
     * @since 2.0.0-rc.0
     * @see https://eslint.org/docs/rules/no-self-assign
     */
    "no-self-assign": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow comparisons where both sides are exactly the same.
     *
     * @since 0.0.9
     * @see https://eslint.org/docs/rules/no-self-compare
     */
    "no-self-compare": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow comma operators.
     *
     * @since 0.5.1
     * @see https://eslint.org/docs/rules/no-sequences
     */
    "no-sequences": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow throwing literals as exceptions.
     *
     * @since 0.15.0
     * @see https://eslint.org/docs/rules/no-throw-literal
     */
    "no-throw-literal": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow unmodified loop conditions.
     *
     * @since 2.0.0-alpha-2
     * @see https://eslint.org/docs/rules/no-unmodified-loop-condition
     */
    "no-unmodified-loop-condition": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow unused expressions.
     *
     * @since 0.1.0
     * @see https://eslint.org/docs/rules/no-unused-expressions
     */
    "no-unused-expressions": Linter.RuleEntry<
        [
            Partial<{
                /**
                 * @default false
                 */
                allowShortCircuit: boolean;
                /**
                 * @default false
                 */
                allowTernary: boolean;
                /**
                 * @default false
                 */
                allowTaggedTemplates: boolean;
            }>,
        ]
    >;

    /**
     * Rule to disallow unused labels.
     *
     * @remarks
     * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
     *
     * @since 2.0.0-rc.0
     * @see https://eslint.org/docs/rules/no-unused-labels
     */
    "no-unused-labels": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow unnecessary calls to `.call()` and `.apply()`.
     *
     * @since 1.0.0-rc-1
     * @see https://eslint.org/docs/rules/no-useless-call
     */
    "no-useless-call": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow unnecessary `catch` clauses.
     *
     * @remarks
     * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
     *
     * @since 5.11.0
     * @see https://eslint.org/docs/rules/no-useless-catch
     */
    "no-useless-catch": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow unnecessary concatenation of literals or template literals.
     *
     * @since 1.3.0
     * @see https://eslint.org/docs/rules/no-useless-concat
     */
    "no-useless-concat": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow unnecessary escape characters.
     *
     * @remarks
     * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
     *
     * @since 2.5.0
     * @see https://eslint.org/docs/rules/no-useless-escape
     */
    "no-useless-escape": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow redundant return statements.
     *
     * @since 3.9.0
     * @see https://eslint.org/docs/rules/no-useless-return
     */
    "no-useless-return": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow `void` operators.
     *
     * @since 0.8.0
     * @see https://eslint.org/docs/rules/no-void
     */
    "no-void": Linter.RuleEntry<[]>;

    /**
     * Rule to disallow specified warning terms in comments.
     *
     * @since 0.4.4
     * @see https://eslint.org/docs/rules/no-warning-comments
     */
    "no-warning-comments": Linter.RuleEntry<
        [
            {
                /**
                 * @default ["todo", "fixme", "xxx"]
                 */
                terms: string[];
                /**
                 * @default 'start'
                 */
                location: "start" | "anywhere";
            },
        ]
    >;

    /**
     * Rule to disallow `with` statements.
     *
     * @remarks
     * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
     *
     * @since 0.0.2
     * @see https://eslint.org/docs/rules/no-with
     */
    "no-with": Linter.RuleEntry<[]>;

    /**
     * Rule to enforce using named capture group in regular expression.
     *
     * @since 5.15.0
     * @see https://eslint.org/docs/rules/prefer-named-capture-group
     */
    "prefer-named-capture-group": Linter.RuleEntry<[]>;

    /**
     * Rule to require using Error objects as Promise rejection reasons.
     *
     * @since 3.14.0
     * @see https://eslint.org/docs/rules/prefer-promise-reject-errors
     */
    "prefer-promise-reject-errors": Linter.RuleEntry<
        [
            Partial<{
                /**
                 * @default false
                 */
                allowEmptyReject: boolean;
            }>,
        ]
    >;

    /**
     * Rule to enforce the consistent use of the radix argument when using `parseInt()`.
     *
     * @since 0.0.7
     * @see https://eslint.org/docs/rules/radix
     */
    radix: Linter.RuleEntry<["always" | "as-needed"]>;

    /**
     * Rule to disallow async functions which have no `await` expression.
     *
     * @since 3.11.0
     * @see https://eslint.org/docs/rules/require-await
     */
    "require-await": Linter.RuleEntry<[]>;

    /**
     * Rule to enforce the use of `u` flag on RegExp.
     *
     * @since 5.3.0
     * @see https://eslint.org/docs/rules/require-unicode-regexp
     */
    "require-unicode-regexp": Linter.RuleEntry<[]>;

    /**
     * Rule to require `var` declarations be placed at the top of their containing scope.
     *
     * @since 0.8.0
     * @see https://eslint.org/docs/rules/vars-on-top
     */
    "vars-on-top": Linter.RuleEntry<[]>;

    /**
     * Rule to require parentheses around immediate `function` invocations.
     *
     * @since 0.0.9
     * @see https://eslint.org/docs/rules/wrap-iife
     */
    "wrap-iife": Linter.RuleEntry<
        [
            "outside" | "inside" | "any",
            Partial<{
                /**
                 * @default false
                 */
                functionPrototypeMethods: boolean;
            }>,
        ]
    >;

    /**
     * Rule to require or disallow “Yoda” conditions.
     *
     * @since 0.7.1
     * @see https://eslint.org/docs/rules/yoda
     */
    yoda:
        | Linter.RuleEntry<
              [
                  "never",
                  Partial<{
                      exceptRange: boolean;
                      onlyEquality: boolean;
                  }>,
              ]
          >
        | Linter.RuleEntry<["always"]>;
}
