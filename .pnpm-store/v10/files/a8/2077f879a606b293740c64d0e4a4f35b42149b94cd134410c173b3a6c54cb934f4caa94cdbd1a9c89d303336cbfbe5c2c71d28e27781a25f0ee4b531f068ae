/**
 * @fileoverview This file contains the rule types for ESLint. It was initially extracted
 * from the `@types/eslint` package.
 */

/*
 * MIT License
 * Copyright (c) Microsoft Corporation.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE
 */

//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------

import { Linter } from "./index";

//-----------------------------------------------------------------------------
// Helper types
//-----------------------------------------------------------------------------

interface NoRestrictedImportPathCommonOptions {
	name: string;
	message?: string;
	allowTypeImports?: boolean;
}

type EitherImportNamesOrAllowImportName =
	| { importNames?: string[]; allowImportNames?: never }
	| { allowImportNames?: string[]; importNames?: never };

type ValidNoRestrictedImportPathOptions = NoRestrictedImportPathCommonOptions &
	EitherImportNamesOrAllowImportName;

interface NoRestrictedImportPatternCommonOptions {
	message?: string;
	caseSensitive?: boolean;
	allowTypeImports?: boolean;
}

// Base type for group or regex constraint, ensuring mutual exclusivity
type EitherGroupOrRegEx =
	| { group: string[]; regex?: never }
	| { regex: string; group?: never };

// Base type for import name specifiers, ensuring mutual exclusivity
type EitherNameSpecifiers =
	| {
			importNames?: string[];
			importNamePattern?: string;
			allowImportNames?: never;
			allowImportNamePattern?: never;
	  }
	| {
			allowImportNames?: string[];
			importNames?: never;
			importNamePattern?: never;
			allowImportNamePattern?: never;
	  }
	| {
			allowImportNamePattern?: string;
			importNames?: never;
			allowImportNames?: never;
			importNamePattern?: never;
	  };

// Adds oneOf and not constraints, ensuring group or regex are present and mutually exclusive sets for importNames, allowImportNames, etc., as per the schema.
type ValidNoRestrictedImportPatternOptions =
	NoRestrictedImportPatternCommonOptions &
		EitherGroupOrRegEx &
		EitherNameSpecifiers;

interface CapitalizedCommentsCommonOptions {
	ignorePattern?: string;
	/**
	 * @default false
	 */
	ignoreInlineComments?: boolean;
	/**
	 * @default false
	 */
	ignoreConsecutiveComments?: boolean;
}

//-----------------------------------------------------------------------------
// Public types
//-----------------------------------------------------------------------------

export interface ESLintRules extends Linter.RulesRecord {
	/**
	 * Rule to enforce getter and setter pairs in objects and classes.
	 *
	 * @since 0.22.0
	 * @see https://eslint.org/docs/latest/rules/accessor-pairs
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
				/**
				 * @default true
				 */
				enforceForClassMembers: boolean;
				/**
				 * @default false
				 */
				enforceForTSTypes: boolean;
			}>,
		]
	>;

	/**
	 * Rule to enforce linebreaks after opening and before closing array brackets.
	 *
	 * @since 4.0.0-alpha.1
	 * @deprecated since 8.53.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`array-bracket-newline`](https://eslint.style/rules/array-bracket-newline) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/array-bracket-newline
	 */
	"array-bracket-newline": Linter.RuleEntry<
		[
			| "always"
			| "never"
			| "consistent"
			| Partial<{
					/**
					 * @default true
					 */
					multiline: boolean;
					/**
					 * @default null
					 */
					minItems: number | null;
			  }>,
		]
	>;

	/**
	 * Rule to enforce consistent spacing inside array brackets.
	 *
	 * @since 0.24.0
	 * @deprecated since 8.53.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`array-bracket-spacing`](https://eslint.style/rules/array-bracket-spacing) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/array-bracket-spacing
	 */
	"array-bracket-spacing":
		| Linter.RuleEntry<
				[
					"never",
					Partial<{
						/**
						 * @default false
						 */
						singleValue: boolean;
						/**
						 * @default false
						 */
						objectsInArrays: boolean;
						/**
						 * @default false
						 */
						arraysInArrays: boolean;
					}>,
				]
		  >
		| Linter.RuleEntry<
				[
					"always",
					Partial<{
						/**
						 * @default true
						 */
						singleValue: boolean;
						/**
						 * @default true
						 */
						objectsInArrays: boolean;
						/**
						 * @default true
						 */
						arraysInArrays: boolean;
					}>,
				]
		  >;

	/**
	 * Rule to enforce `return` statements in callbacks of array methods.
	 *
	 * @since 2.0.0-alpha-1
	 * @see https://eslint.org/docs/latest/rules/array-callback-return
	 */
	"array-callback-return": Linter.RuleEntry<
		[
			Partial<{
				/**
				 * @default false
				 */
				allowImplicit: boolean;
				/**
				 * @default false
				 */
				checkForEach: boolean;
				/**
				 * @default false
				 */
				allowVoid: boolean;
			}>,
		]
	>;

	/**
	 * Rule to enforce line breaks after each array element.
	 *
	 * @since 4.0.0-rc.0
	 * @deprecated since 8.53.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`array-element-newline`](https://eslint.style/rules/array-element-newline) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/array-element-newline
	 */
	"array-element-newline": Linter.RuleEntry<
		[
			| "always"
			| "never"
			| "consistent"
			| Partial<{
					/**
					 * @default true
					 */
					multiline: boolean;
					/**
					 * @default null
					 */
					minItems: number | null;
			  }>,
		]
	>;

	/**
	 * Rule to require braces around arrow function bodies.
	 *
	 * @since 1.8.0
	 * @see https://eslint.org/docs/latest/rules/arrow-body-style
	 */
	"arrow-body-style":
		| Linter.RuleEntry<
				[
					"as-needed",
					Partial<{
						/**
						 * @default false
						 */
						requireReturnForObjectLiteral: boolean;
					}>,
				]
		  >
		| Linter.RuleEntry<["always" | "never"]>;

	/**
	 * Rule to require parentheses around arrow function arguments.
	 *
	 * @since 1.0.0-rc-1
	 * @deprecated since 8.53.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`arrow-parens`](https://eslint.style/rules/arrow-parens) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/arrow-parens
	 */
	"arrow-parens":
		| Linter.RuleEntry<["always"]>
		| Linter.RuleEntry<
				[
					"as-needed",
					Partial<{
						/**
						 * @default false
						 */
						requireForBlockBody: boolean;
					}>,
				]
		  >;

	/**
	 * Rule to enforce consistent spacing before and after the arrow in arrow functions.
	 *
	 * @since 1.0.0-rc-1
	 * @deprecated since 8.53.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`arrow-spacing`](https://eslint.style/rules/arrow-spacing) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/arrow-spacing
	 */
	"arrow-spacing": Linter.RuleEntry<[]>;

	/**
	 * Rule to enforce the use of variables within the scope they are defined.
	 *
	 * @since 0.1.0
	 * @see https://eslint.org/docs/latest/rules/block-scoped-var
	 */
	"block-scoped-var": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow or enforce spaces inside of blocks after opening block and before closing block.
	 *
	 * @since 1.2.0
	 * @deprecated since 8.53.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`block-spacing`](https://eslint.style/rules/block-spacing) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/block-spacing
	 */
	"block-spacing": Linter.RuleEntry<["always" | "never"]>;

	/**
	 * Rule to enforce consistent brace style for blocks.
	 *
	 * @since 0.0.7
	 * @deprecated since 8.53.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`brace-style`](https://eslint.style/rules/brace-style) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/brace-style
	 */
	"brace-style": Linter.RuleEntry<
		[
			"1tbs" | "stroustrup" | "allman",
			Partial<{
				/**
				 * @default false
				 */
				allowSingleLine: boolean;
			}>,
		]
	>;

	/**
	 * Rule to require `return` statements after callbacks.
	 *
	 * @since 1.0.0-rc-1
	 * @deprecated since 7.0.0.
	 * Node.js rules were moved out of ESLint core.
	 * Please, use [`callback-return`](https://github.com/eslint-community/eslint-plugin-n/tree/master/docs/rules/callback-return.md) in [`eslint-plugin-n`](https://github.com/eslint-community/eslint-plugin-n).
	 * @see https://eslint.org/docs/latest/rules/callback-return
	 */
	"callback-return": Linter.RuleEntry<[string[]]>;

	/**
	 * Rule to enforce camelcase naming convention.
	 *
	 * @since 0.0.2
	 * @see https://eslint.org/docs/latest/rules/camelcase
	 */
	camelcase: Linter.RuleEntry<
		[
			Partial<{
				/**
				 * @default 'always'
				 */
				properties: "always" | "never";
				/**
				 * @default false
				 */
				ignoreDestructuring: boolean;
				/**
				 * @since 6.7.0
				 * @default false
				 */
				ignoreImports: boolean;
				/**
				 * @since 7.4.0
				 * @default false
				 */
				ignoreGlobals: boolean;
				/**
				 * @remarks
				 * Also accept for regular expression patterns
				 */
				allow: string[];
			}>,
		]
	>;

	/**
	 * Rule to enforce or disallow capitalization of the first letter of a comment.
	 *
	 * @since 3.11.0
	 * @see https://eslint.org/docs/latest/rules/capitalized-comments
	 */
	"capitalized-comments": Linter.RuleEntry<
		[
			"always" | "never",
			(
				| CapitalizedCommentsCommonOptions
				| Partial<{
						line: CapitalizedCommentsCommonOptions;
						block: CapitalizedCommentsCommonOptions;
				  }>
			),
		]
	>;

	/**
	 * Rule to enforce that class methods utilize `this`.
	 *
	 * @since 3.4.0
	 * @see https://eslint.org/docs/latest/rules/class-methods-use-this
	 */
	"class-methods-use-this": Linter.RuleEntry<
		[
			Partial<{
				exceptMethods: string[];
				/**
				 * @default true
				 */
				enforceForClassFields: boolean;
				/**
				 * @default false
				 */
				ignoreOverrideMethods: boolean;
				ignoreClassesWithImplements: "all" | "public-fields";
			}>,
		]
	>;

	/**
	 * Rule to require or disallow trailing commas.
	 *
	 * @since 0.16.0
	 * @deprecated since 8.53.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`comma-dangle`](https://eslint.style/rules/comma-dangle) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/comma-dangle
	 */
	"comma-dangle": Linter.RuleEntry<
		[
			| "never"
			| "always"
			| "always-multiline"
			| "only-multiline"
			| Partial<{
					/**
					 * @default 'never'
					 */
					arrays:
						| "never"
						| "always"
						| "always-multiline"
						| "only-multiline";
					/**
					 * @default 'never'
					 */
					objects:
						| "never"
						| "always"
						| "always-multiline"
						| "only-multiline";
					/**
					 * @default 'never'
					 */
					imports:
						| "never"
						| "always"
						| "always-multiline"
						| "only-multiline";
					/**
					 * @default 'never'
					 */
					exports:
						| "never"
						| "always"
						| "always-multiline"
						| "only-multiline";
					/**
					 * @default 'never'
					 */
					functions:
						| "never"
						| "always"
						| "always-multiline"
						| "only-multiline";
			  }>,
		]
	>;

	/**
	 * Rule to enforce consistent spacing before and after commas.
	 *
	 * @since 0.9.0
	 * @deprecated since 8.53.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`comma-spacing`](https://eslint.style/rules/comma-spacing) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/comma-spacing
	 */
	"comma-spacing": Linter.RuleEntry<
		[
			Partial<{
				/**
				 * @default false
				 */
				before: boolean;
				/**
				 * @default true
				 */
				after: boolean;
			}>,
		]
	>;

	/**
	 * Rule to enforce consistent comma style.
	 *
	 * @since 0.9.0
	 * @deprecated since 8.53.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`comma-style`](https://eslint.style/rules/comma-style) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/comma-style
	 */
	"comma-style": Linter.RuleEntry<
		[
			"last" | "first",
			Partial<{
				exceptions: Record<string, boolean>;
			}>,
		]
	>;

	/**
	 * Rule to enforce a maximum cyclomatic complexity allowed in a program.
	 *
	 * @since 0.0.9
	 * @see https://eslint.org/docs/latest/rules/complexity
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
					/**
					 * @default "classic"
					 * @since 9.12.0
					 */
					variant: "classic" | "modified";
			  }>
			| number,
		]
	>;

	/**
	 * Rule to enforce consistent spacing inside computed property brackets.
	 *
	 * @since 0.23.0
	 * @deprecated since 8.53.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`computed-property-spacing`](https://eslint.style/rules/computed-property-spacing) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/computed-property-spacing
	 */
	"computed-property-spacing": Linter.RuleEntry<["never" | "always"]>;

	/**
	 * Rule to require `return` statements to either always or never specify values.
	 *
	 * @since 0.4.0
	 * @see https://eslint.org/docs/latest/rules/consistent-return
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
	 * Rule to enforce consistent naming when capturing the current execution context.
	 *
	 * @since 0.0.9
	 * @see https://eslint.org/docs/latest/rules/consistent-this
	 */
	"consistent-this": Linter.RuleEntry<[...string[]]>;

	/**
	 * Rule to require `super()` calls in constructors.
	 *
	 * @remarks
	 * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
	 *
	 * @since 0.24.0
	 * @see https://eslint.org/docs/latest/rules/constructor-super
	 */
	"constructor-super": Linter.RuleEntry<[]>;

	/**
	 * Rule to enforce consistent brace style for all control statements.
	 *
	 * @since 0.0.2
	 * @see https://eslint.org/docs/latest/rules/curly
	 */
	curly: Linter.RuleEntry<
		["all"] | ["multi" | "multi-line" | "multi-or-nest", "consistent"?]
	>;

	/**
	 * Rule to require `default` cases in `switch` statements.
	 *
	 * @since 0.6.0
	 * @see https://eslint.org/docs/latest/rules/default-case
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
	 * Rule to enforce `default` clauses in `switch` statements to be last.
	 *
	 * @since 7.0.0-alpha.0
	 * @see https://eslint.org/docs/latest/rules/default-case-last
	 */
	"default-case-last": Linter.RuleEntry<[]>;

	/**
	 * Rule to enforce default parameters to be last.
	 *
	 * @since 6.4.0
	 * @see https://eslint.org/docs/latest/rules/default-param-last
	 */
	"default-param-last": Linter.RuleEntry<[]>;

	/**
	 * Rule to enforce consistent newlines before and after dots.
	 *
	 * @since 0.21.0
	 * @deprecated since 8.53.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`dot-location`](https://eslint.style/rules/dot-location) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/dot-location
	 */
	"dot-location": Linter.RuleEntry<["object" | "property"]>;

	/**
	 * Rule to enforce dot notation whenever possible.
	 *
	 * @since 0.0.7
	 * @see https://eslint.org/docs/latest/rules/dot-notation
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
	 * Rule to require or disallow newline at the end of files.
	 *
	 * @since 0.7.1
	 * @deprecated since 8.53.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`eol-last`](https://eslint.style/rules/eol-last) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/eol-last
	 */
	"eol-last": Linter.RuleEntry<
		[
			"always" | "never", // | 'unix' | 'windows'
		]
	>;

	/**
	 * Rule to require the use of `===` and `!==`.
	 *
	 * @since 0.0.2
	 * @see https://eslint.org/docs/latest/rules/eqeqeq
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
	 * Rule to enforce `for` loop update clause moving the counter in the right direction.
	 *
	 * @remarks
	 * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
	 *
	 * @since 4.0.0-beta.0
	 * @see https://eslint.org/docs/latest/rules/for-direction
	 */
	"for-direction": Linter.RuleEntry<[]>;

	/**
	 * Rule to require or disallow spacing between function identifiers and their invocations.
	 *
	 * @since 3.3.0
	 * @deprecated since 8.53.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`function-call-spacing`](https://eslint.style/rules/function-call-spacing) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/func-call-spacing
	 */
	"func-call-spacing": Linter.RuleEntry<["never" | "always"]>;

	/**
	 * Rule to require function names to match the name of the variable or property to which they are assigned.
	 *
	 * @since 3.8.0
	 * @see https://eslint.org/docs/latest/rules/func-name-matching
	 */
	"func-name-matching":
		| Linter.RuleEntry<
				[
					"always" | "never",
					Partial<{
						/**
						 * @default false
						 */
						considerPropertyDescriptor: boolean;
						/**
						 * @default false
						 */
						includeCommonJSModuleExports: boolean;
					}>,
				]
		  >
		| Linter.RuleEntry<
				[
					Partial<{
						/**
						 * @default false
						 */
						considerPropertyDescriptor: boolean;
						/**
						 * @default false
						 */
						includeCommonJSModuleExports: boolean;
					}>,
				]
		  >;

	/**
	 * Rule to require or disallow named `function` expressions.
	 *
	 * @since 0.4.0
	 * @see https://eslint.org/docs/latest/rules/func-names
	 */
	"func-names": Linter.RuleEntry<
		[
			"always" | "as-needed" | "never",
			Partial<{
				generators: "always" | "as-needed" | "never";
			}>,
		]
	>;

	/**
	 * Rule to enforce the consistent use of either `function` declarations or expressions assigned to variables.
	 *
	 * @since 0.2.0
	 * @see https://eslint.org/docs/latest/rules/func-style
	 */
	"func-style": Linter.RuleEntry<
		[
			"expression" | "declaration",
			Partial<{
				/**
				 * @default false
				 */
				allowArrowFunctions: boolean;
				/**
				 * @default false
				 */
				allowTypeAnnotation: boolean;
				overrides: {
					namedExports: "declaration" | "expression" | "ignore";
				};
			}>,
		]
	>;

	/**
	 * Rule to enforce line breaks between arguments of a function call.
	 *
	 * @since 6.2.0
	 * @deprecated since 8.53.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`function-call-argument-newline`](https://eslint.style/rules/function-call-argument-newline) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/function-call-argument-newline
	 */
	"function-call-argument-newline": Linter.RuleEntry<
		[
			/**
			 * @default "always"
			 */
			"always" | "never" | "consistent",
		]
	>;

	/**
	 * Rule to enforce consistent line breaks inside function parentheses.
	 *
	 * @since 4.6.0
	 * @deprecated since 8.53.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`function-paren-newline`](https://eslint.style/rules/function-paren-newline) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/function-paren-newline
	 */
	"function-paren-newline": Linter.RuleEntry<
		[
			| "always"
			| "never"
			| "multiline"
			| "multiline-arguments"
			| "consistent"
			| Partial<{
					minItems: number;
			  }>,
		]
	>;

	/**
	 * Rule to enforce consistent spacing around `*` operators in generator functions.
	 *
	 * @since 0.17.0
	 * @deprecated since 8.53.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`generator-star-spacing`](https://eslint.style/rules/generator-star-spacing) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/generator-star-spacing
	 */
	"generator-star-spacing": Linter.RuleEntry<
		[
			| Partial<{
					before: boolean;
					after: boolean;
					named:
						| Partial<{
								before: boolean;
								after: boolean;
						  }>
						| "before"
						| "after"
						| "both"
						| "neither";
					anonymous:
						| Partial<{
								before: boolean;
								after: boolean;
						  }>
						| "before"
						| "after"
						| "both"
						| "neither";
					method:
						| Partial<{
								before: boolean;
								after: boolean;
						  }>
						| "before"
						| "after"
						| "both"
						| "neither";
			  }>
			| "before"
			| "after"
			| "both"
			| "neither",
		]
	>;

	/**
	 * Rule to enforce `return` statements in getters.
	 *
	 * @remarks
	 * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
	 *
	 * @since 4.2.0
	 * @see https://eslint.org/docs/latest/rules/getter-return
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
	 * Rule to require `require()` calls to be placed at top-level module scope.
	 *
	 * @since 1.4.0
	 * @deprecated since 7.0.0.
	 * Node.js rules were moved out of ESLint core.
	 * Please, use [`global-require`](https://github.com/eslint-community/eslint-plugin-n/tree/master/docs/rules/global-require.md) in [`eslint-plugin-n`](https://github.com/eslint-community/eslint-plugin-n).
	 * @see https://eslint.org/docs/latest/rules/global-require
	 */
	"global-require": Linter.RuleEntry<[]>;

	/**
	 * Rule to require grouped accessor pairs in object literals and classes.
	 *
	 * @since 6.7.0
	 * @see https://eslint.org/docs/latest/rules/grouped-accessor-pairs
	 */
	"grouped-accessor-pairs": Linter.RuleEntry<
		[
			"anyOrder" | "getBeforeSet" | "setBeforeGet",
			Partial<{
				/**
				 * @default false
				 */
				enforceForTSTypes: boolean;
			}>,
		]
	>;

	/**
	 * Rule to require `for-in` loops to include an `if` statement.
	 *
	 * @since 0.0.6
	 * @see https://eslint.org/docs/latest/rules/guard-for-in
	 */
	"guard-for-in": Linter.RuleEntry<[]>;

	/**
	 * Rule to require error handling in callbacks.
	 *
	 * @since 0.4.5
	 * @deprecated since 7.0.0.
	 * Node.js rules were moved out of ESLint core.
	 * Please, use [`handle-callback-err`](https://github.com/eslint-community/eslint-plugin-n/tree/master/docs/rules/handle-callback-err.md) in [`eslint-plugin-n`](https://github.com/eslint-community/eslint-plugin-n).
	 * @see https://eslint.org/docs/latest/rules/handle-callback-err
	 */
	"handle-callback-err": Linter.RuleEntry<[string]>;

	/**
	 * Rule to disallow specified identifiers.
	 *
	 * @since 2.0.0-beta.2
	 * @deprecated since 7.5.0.
	 * The rule was renamed.
	 * Please, use [`id-denylist`](https://eslint.org/docs/rules/id-denylist).
	 * @see https://eslint.org/docs/latest/rules/id-blacklist
	 */
	"id-blacklist": Linter.RuleEntry<[...string[]]>;

	/**
	 * Rule to disallow specified identifiers.
	 *
	 * @since 7.4.0
	 * @see https://eslint.org/docs/latest/rules/id-denylist
	 */
	"id-denylist": Linter.RuleEntry<string[]>;

	/**
	 * Rule to enforce minimum and maximum identifier lengths.
	 *
	 * @since 1.0.0
	 * @see https://eslint.org/docs/latest/rules/id-length
	 */
	"id-length": Linter.RuleEntry<
		[
			Partial<{
				/**
				 * @default 2
				 */
				min: number;
				/**
				 * @default Infinity
				 */
				max: number;
				/**
				 * @default 'always'
				 */
				properties: "always" | "never";
				exceptions: string[];
				exceptionPatterns: string[];
			}>,
		]
	>;

	/**
	 * Rule to require identifiers to match a specified regular expression.
	 *
	 * @since 1.0.0
	 * @see https://eslint.org/docs/latest/rules/id-match
	 */
	"id-match": Linter.RuleEntry<
		[
			string,
			Partial<{
				/**
				 * @default false
				 */
				properties: boolean;
				/**
				 * @default false
				 */
				classFields: boolean;
				/**
				 * @default false
				 */
				onlyDeclarations: boolean;
				/**
				 * @default false
				 */
				ignoreDestructuring: boolean;
			}>,
		]
	>;

	/**
	 * Rule to enforce the location of arrow function bodies.
	 *
	 * @since 4.12.0
	 * @deprecated since 8.53.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`implicit-arrow-linebreak`](https://eslint.style/rules/implicit-arrow-linebreak) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/implicit-arrow-linebreak
	 */
	"implicit-arrow-linebreak": Linter.RuleEntry<["beside" | "below"]>;

	/**
	 * Rule to enforce consistent indentation.
	 *
	 * @since 0.14.0
	 * @deprecated since 8.53.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`indent`](https://eslint.style/rules/indent) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/indent
	 */
	indent: Linter.RuleEntry<
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
	 * Rule to enforce consistent indentation.
	 *
	 * @since 4.0.0-alpha.0
	 * @deprecated since 4.0.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`indent`](https://eslint.style/rules/indent) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/indent-legacy
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
	 * Rule to require or disallow initialization in variable declarations.
	 *
	 * @since 1.0.0-rc-1
	 * @see https://eslint.org/docs/latest/rules/init-declarations
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
	 * Rule to enforce the consistent use of either double or single quotes in JSX attributes.
	 *
	 * @since 1.4.0
	 * @deprecated since 8.53.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`jsx-quotes`](https://eslint.style/rules/jsx-quotes) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/jsx-quotes
	 */
	"jsx-quotes": Linter.RuleEntry<["prefer-double" | "prefer-single"]>;

	/**
	 * Rule to enforce consistent spacing between keys and values in object literal properties.
	 *
	 * @since 0.9.0
	 * @deprecated since 8.53.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`key-spacing`](https://eslint.style/rules/key-spacing) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/key-spacing
	 */
	"key-spacing": Linter.RuleEntry<
		[
			| Partial<
					| {
							/**
							 * @default false
							 */
							beforeColon: boolean;
							/**
							 * @default true
							 */
							afterColon: boolean;
							/**
							 * @default 'strict'
							 */
							mode: "strict" | "minimum";
							align:
								| Partial<{
										/**
										 * @default false
										 */
										beforeColon: boolean;
										/**
										 * @default true
										 */
										afterColon: boolean;
										/**
										 * @default 'colon'
										 */
										on: "value" | "colon";
										/**
										 * @default 'strict'
										 */
										mode: "strict" | "minimum";
								  }>
								| "value"
								| "colon";
					  }
					| {
							singleLine?:
								| Partial<{
										/**
										 * @default false
										 */
										beforeColon: boolean;
										/**
										 * @default true
										 */
										afterColon: boolean;
										/**
										 * @default 'strict'
										 */
										mode: "strict" | "minimum";
								  }>
								| undefined;
							multiLine?:
								| Partial<{
										/**
										 * @default false
										 */
										beforeColon: boolean;
										/**
										 * @default true
										 */
										afterColon: boolean;
										/**
										 * @default 'strict'
										 */
										mode: "strict" | "minimum";
										align:
											| Partial<{
													/**
													 * @default false
													 */
													beforeColon: boolean;
													/**
													 * @default true
													 */
													afterColon: boolean;
													/**
													 * @default 'colon'
													 */
													on: "value" | "colon";
													/**
													 * @default 'strict'
													 */
													mode: "strict" | "minimum";
											  }>
											| "value"
											| "colon";
								  }>
								| undefined;
					  }
			  >
			| {
					align: Partial<{
						/**
						 * @default false
						 */
						beforeColon: boolean;
						/**
						 * @default true
						 */
						afterColon: boolean;
						/**
						 * @default 'colon'
						 */
						on: "value" | "colon";
						/**
						 * @default 'strict'
						 */
						mode: "strict" | "minimum";
					}>;
					singleLine?:
						| Partial<{
								/**
								 * @default false
								 */
								beforeColon: boolean;
								/**
								 * @default true
								 */
								afterColon: boolean;
								/**
								 * @default 'strict'
								 */
								mode: "strict" | "minimum";
						  }>
						| undefined;
					multiLine?:
						| Partial<{
								/**
								 * @default false
								 */
								beforeColon: boolean;
								/**
								 * @default true
								 */
								afterColon: boolean;
								/**
								 * @default 'strict'
								 */
								mode: "strict" | "minimum";
						  }>
						| undefined;
			  },
		]
	>;

	/**
	 * Rule to enforce consistent spacing before and after keywords.
	 *
	 * @since 2.0.0-beta.1
	 * @deprecated since 8.53.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`keyword-spacing`](https://eslint.style/rules/keyword-spacing) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/keyword-spacing
	 */
	"keyword-spacing": Linter.RuleEntry<
		[
			Partial<{
				/**
				 * @default true
				 */
				before: boolean;
				/**
				 * @default true
				 */
				after: boolean;
				overrides: Record<
					string,
					Partial<{
						before: boolean;
						after: boolean;
					}>
				>;
			}>,
		]
	>;

	/**
	 * Rule to enforce position of line comments.
	 *
	 * @since 3.5.0
	 * @deprecated since 9.3.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`line-comment-position`](https://eslint.style/rules/line-comment-position) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/line-comment-position
	 */
	"line-comment-position": Linter.RuleEntry<
		[
			Partial<{
				/**
				 * @default 'above'
				 */
				position: "above" | "beside";
				ignorePattern: string;
				/**
				 * @default true
				 */
				applyDefaultIgnorePatterns: boolean;
			}>,
		]
	>;

	/**
	 * Rule to enforce consistent linebreak style.
	 *
	 * @since 0.21.0
	 * @deprecated since 8.53.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`linebreak-style`](https://eslint.style/rules/linebreak-style) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/linebreak-style
	 */
	"linebreak-style": Linter.RuleEntry<["unix" | "windows"]>;

	/**
	 * Rule to require empty lines around comments.
	 *
	 * @since 0.22.0
	 * @deprecated since 8.53.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`lines-around-comment`](https://eslint.style/rules/lines-around-comment) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/lines-around-comment
	 */
	"lines-around-comment": Linter.RuleEntry<
		[
			Partial<{
				/**
				 * @default true
				 */
				beforeBlockComment: boolean;
				/**
				 * @default false
				 */
				afterBlockComment: boolean;
				/**
				 * @default false
				 */
				beforeLineComment: boolean;
				/**
				 * @default false
				 */
				afterLineComment: boolean;
				/**
				 * @default false
				 */
				allowBlockStart: boolean;
				/**
				 * @default false
				 */
				allowBlockEnd: boolean;
				/**
				 * @default false
				 */
				allowObjectStart: boolean;
				/**
				 * @default false
				 */
				allowObjectEnd: boolean;
				/**
				 * @default false
				 */
				allowArrayStart: boolean;
				/**
				 * @default false
				 */
				allowArrayEnd: boolean;
				/**
				 * @default false
				 */
				allowClassStart: boolean;
				/**
				 * @default false
				 */
				allowClassEnd: boolean;
				ignorePattern: string;
				/**
				 * @default true
				 */
				applyDefaultIgnorePatterns: boolean;
			}>,
		]
	>;

	/**
	 * Rule to require or disallow newlines around directives.
	 *
	 * @since 3.5.0
	 * @deprecated since 4.0.0.
	 * The rule was replaced with a more general rule.
	 * Please, use [`padding-line-between-statements`](https://eslint.style/rules/padding-line-between-statements) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/lines-around-directive
	 */
	"lines-around-directive": Linter.RuleEntry<["always" | "never"]>;

	/**
	 * Rule to require or disallow an empty line between class members.
	 *
	 * @since 4.9.0
	 * @deprecated since 8.53.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`lines-between-class-members`](https://eslint.style/rules/lines-between-class-members) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/lines-between-class-members
	 */
	"lines-between-class-members": Linter.RuleEntry<
		[
			(
				| "always"
				| "never"
				| {
						enforce: Array<{
							blankLine: "always" | "never";
							prev: "method" | "field" | "*";
							next: "method" | "field" | "*";
						}>;
				  }
			),
			Partial<{
				/**
				 * @default false
				 */
				exceptAfterSingleLine: boolean;
			}>,
		]
	>;

	/**
	 * Rule to require or disallow logical assignment operator shorthand.
	 *
	 * @since 8.24.0
	 * @see https://eslint.org/docs/latest/rules/logical-assignment-operators
	 */
	"logical-assignment-operators":
		| Linter.RuleEntry<
				[
					"always",
					Partial<{
						/**
						 * @default false
						 */
						enforceForIfStatements: boolean;
					}>,
				]
		  >
		| Linter.RuleEntry<["never"]>;

	/**
	 * Rule to enforce a maximum number of classes per file.
	 *
	 * @since 5.0.0-alpha.3
	 * @see https://eslint.org/docs/latest/rules/max-classes-per-file
	 */
	"max-classes-per-file": Linter.RuleEntry<
		[
			| number
			| Partial<{
					/**
					 * @default false
					 */
					ignoreExpressions: boolean;
					/**
					 * @default 1
					 */
					max: number;
			  }>,
		]
	>;

	/**
	 * Rule to enforce a maximum depth that blocks can be nested.
	 *
	 * @since 0.0.9
	 * @see https://eslint.org/docs/latest/rules/max-depth
	 */
	"max-depth": Linter.RuleEntry<
		[
			| number
			| Partial<{
					/**
					 * @deprecated
					 * @default 4
					 */
					maximum: number;
					/**
					 * @default 4
					 */
					max: number;
			  }>,
		]
	>;

	/**
	 * Rule to enforce a maximum line length.
	 *
	 * @since 0.0.9
	 * @deprecated since 8.53.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`max-len`](https://eslint.style/rules/max-len) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/max-len
	 */
	"max-len": Linter.RuleEntry<
		[
			Partial<{
				/**
				 * @default 80
				 */
				code: number;
				/**
				 * @default 4
				 */
				tabWidth: number;
				comments: number;
				ignorePattern: string;
				/**
				 * @default false
				 */
				ignoreComments: boolean;
				/**
				 * @default false
				 */
				ignoreTrailingComments: boolean;
				/**
				 * @default false
				 */
				ignoreUrls: boolean;
				/**
				 * @default false
				 */
				ignoreStrings: boolean;
				/**
				 * @default false
				 */
				ignoreTemplateLiterals: boolean;
				/**
				 * @default false
				 */
				ignoreRegExpLiterals: boolean;
			}>,
		]
	>;

	/**
	 * Rule to enforce a maximum number of lines per file.
	 *
	 * @since 2.12.0
	 * @see https://eslint.org/docs/latest/rules/max-lines
	 */
	"max-lines": Linter.RuleEntry<
		[
			| Partial<{
					/**
					 * @default 300
					 */
					max: number;
					/**
					 * @default false
					 */
					skipBlankLines: boolean;
					/**
					 * @default false
					 */
					skipComments: boolean;
			  }>
			| number,
		]
	>;

	/**
	 * Rule to enforce a maximum number of lines of code in a function.
	 *
	 * @since 5.0.0
	 * @see https://eslint.org/docs/latest/rules/max-lines-per-function
	 */
	"max-lines-per-function": Linter.RuleEntry<
		[
			| number
			| Partial<{
					/**
					 * @default 50
					 */
					max: number;
					/**
					 * @default false
					 */
					skipBlankLines: boolean;
					/**
					 * @default false
					 */
					skipComments: boolean;
					/**
					 * @default false
					 */
					IIFEs: boolean;
			  }>,
		]
	>;

	/**
	 * Rule to enforce a maximum depth that callbacks can be nested.
	 *
	 * @since 0.2.0
	 * @see https://eslint.org/docs/latest/rules/max-nested-callbacks
	 */
	"max-nested-callbacks": Linter.RuleEntry<
		[
			| number
			| Partial<{
					/**
					 * @deprecated
					 * @default 10
					 */
					maximum: number;
					/**
					 * @default 10
					 */
					max: number;
			  }>,
		]
	>;

	/**
	 * Rule to enforce a maximum number of parameters in function definitions.
	 *
	 * @since 0.0.9
	 * @see https://eslint.org/docs/latest/rules/max-params
	 */
	"max-params": Linter.RuleEntry<
		[
			| number
			| Partial<{
					/**
					 * @deprecated
					 * @default 3
					 */
					maximum: number;
					/**
					 * @default 3
					 */
					max: number;
					/**
					 * @default false
					 */
					countVoidThis: boolean;
			  }>,
		]
	>;

	/**
	 * Rule to enforce a maximum number of statements allowed in function blocks.
	 *
	 * @since 0.0.9
	 * @see https://eslint.org/docs/latest/rules/max-statements
	 */
	"max-statements": Linter.RuleEntry<
		[
			(
				| number
				| Partial<{
						/**
						 * @deprecated
						 * @default 10
						 */
						maximum: number;
						/**
						 * @default 10
						 */
						max: number;
				  }>
			),
			Partial<{
				/**
				 * @default false
				 */
				ignoreTopLevelFunctions: boolean;
			}>,
		]
	>;

	/**
	 * Rule to enforce a maximum number of statements allowed per line.
	 *
	 * @since 2.5.0
	 * @deprecated since 8.53.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`max-statements-per-line`](https://eslint.style/rules/max-statements-per-line) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/max-statements-per-line
	 */
	"max-statements-per-line": Linter.RuleEntry<
		[
			| Partial<{
					/**
					 * @default 1
					 */
					max: number;
			  }>
			| number,
		]
	>;

	/**
	 * Rule to enforce a particular style for multiline comments.
	 *
	 * @since 4.10.0
	 * @deprecated since 9.3.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`multiline-comment-style`](https://eslint.style/rules/multiline-comment-style) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/multiline-comment-style
	 */
	"multiline-comment-style": Linter.RuleEntry<
		["starred-block" | "bare-block" | "separate-lines"]
	>;

	/**
	 * Rule to enforce newlines between operands of ternary expressions.
	 *
	 * @since 3.1.0
	 * @deprecated since 8.53.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`multiline-ternary`](https://eslint.style/rules/multiline-ternary) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/multiline-ternary
	 */
	"multiline-ternary": Linter.RuleEntry<
		["always" | "always-multiline" | "never"]
	>;

	/**
	 * Rule to require constructor names to begin with a capital letter.
	 *
	 * @since 0.0.3-0
	 * @see https://eslint.org/docs/latest/rules/new-cap
	 */
	"new-cap": Linter.RuleEntry<
		[
			Partial<{
				/**
				 * @default true
				 */
				newIsCap: boolean;
				/**
				 * @default true
				 */
				capIsNew: boolean;
				newIsCapExceptions: string[];
				newIsCapExceptionPattern: string;
				capIsNewExceptions: string[];
				capIsNewExceptionPattern: string;
				/**
				 * @default true
				 */
				properties: boolean;
			}>,
		]
	>;

	/**
	 * Rule to enforce or disallow parentheses when invoking a constructor with no arguments.
	 *
	 * @since 0.0.6
	 * @deprecated since 8.53.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`new-parens`](https://eslint.style/rules/new-parens) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/new-parens
	 */
	"new-parens": Linter.RuleEntry<["always" | "never"]>;

	/**
	 * Rule to require or disallow an empty line after variable declarations.
	 *
	 * @since 0.18.0
	 * @deprecated since 4.0.0.
	 * The rule was replaced with a more general rule.
	 * Please, use [`padding-line-between-statements`](https://eslint.style/rules/padding-line-between-statements) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/newline-after-var
	 */
	"newline-after-var": Linter.RuleEntry<["always" | "never"]>;

	/**
	 * Rule to require an empty line before `return` statements.
	 *
	 * @since 2.3.0
	 * @deprecated since 4.0.0.
	 * The rule was replaced with a more general rule.
	 * Please, use [`padding-line-between-statements`](https://eslint.style/rules/padding-line-between-statements) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/newline-before-return
	 */
	"newline-before-return": Linter.RuleEntry<[]>;

	/**
	 * Rule to require a newline after each call in a method chain.
	 *
	 * @since 2.0.0-rc.0
	 * @deprecated since 8.53.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`newline-per-chained-call`](https://eslint.style/rules/newline-per-chained-call) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/newline-per-chained-call
	 */
	"newline-per-chained-call": Linter.RuleEntry<
		[
			{
				/**
				 * @default 2
				 */
				ignoreChainWithDepth: number;
			},
		]
	>;

	/**
	 * Rule to disallow the use of `alert`, `confirm`, and `prompt`.
	 *
	 * @since 0.0.5
	 * @see https://eslint.org/docs/latest/rules/no-alert
	 */
	"no-alert": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow `Array` constructors.
	 *
	 * @since 0.4.0
	 * @see https://eslint.org/docs/latest/rules/no-array-constructor
	 */
	"no-array-constructor": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow using an async function as a Promise executor.
	 *
	 * @remarks
	 * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
	 *
	 * @since 5.3.0
	 * @see https://eslint.org/docs/latest/rules/no-async-promise-executor
	 */
	"no-async-promise-executor": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow `await` inside of loops.
	 *
	 * @since 3.12.0
	 * @see https://eslint.org/docs/latest/rules/no-await-in-loop
	 */
	"no-await-in-loop": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow bitwise operators.
	 *
	 * @since 0.0.2
	 * @see https://eslint.org/docs/latest/rules/no-bitwise
	 */
	"no-bitwise": Linter.RuleEntry<
		[
			Partial<{
				/**
				 * @default []
				 */
				allow: Array<
					| "^"
					| "|"
					| "&"
					| "<<"
					| ">>"
					| ">>>"
					| "^="
					| "|="
					| "&="
					| "<<="
					| ">>="
					| ">>>="
					| "~"
				>;
				/**
				 * @default false
				 */
				int32Hint: boolean;
			}>,
		]
	>;

	/**
	 * Rule to disallow use of the `Buffer()` constructor.
	 *
	 * @since 4.0.0-alpha.0
	 * @deprecated since 7.0.0.
	 * Node.js rules were moved out of ESLint core.
	 * Please, use [`no-deprecated-api`](https://github.com/eslint-community/eslint-plugin-n/tree/master/docs/rules/no-deprecated-api.md) in [`eslint-plugin-n`](https://github.com/eslint-community/eslint-plugin-n).
	 * @see https://eslint.org/docs/latest/rules/no-buffer-constructor
	 */
	"no-buffer-constructor": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow the use of `arguments.caller` or `arguments.callee`.
	 *
	 * @since 0.0.6
	 * @see https://eslint.org/docs/latest/rules/no-caller
	 */
	"no-caller": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow lexical declarations in case clauses.
	 *
	 * @remarks
	 * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
	 *
	 * @since 1.9.0
	 * @see https://eslint.org/docs/latest/rules/no-case-declarations
	 */
	"no-case-declarations": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow `catch` clause parameters from shadowing variables in the outer scope.
	 *
	 * @since 0.0.9
	 * @deprecated since 5.1.0.
	 * This rule was renamed.
	 * Please, use [`no-shadow`](https://eslint.org/docs/rules/no-shadow).
	 * @see https://eslint.org/docs/latest/rules/no-catch-shadow
	 */
	"no-catch-shadow": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow reassigning class members.
	 *
	 * @remarks
	 * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
	 *
	 * @since 1.0.0-rc-1
	 * @see https://eslint.org/docs/latest/rules/no-class-assign
	 */
	"no-class-assign": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow comparing against `-0`.
	 *
	 * @remarks
	 * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
	 *
	 * @since 3.17.0
	 * @see https://eslint.org/docs/latest/rules/no-compare-neg-zero
	 */
	"no-compare-neg-zero": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow assignment operators in conditional expressions.
	 *
	 * @remarks
	 * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
	 *
	 * @since 0.0.9
	 * @see https://eslint.org/docs/latest/rules/no-cond-assign
	 */
	"no-cond-assign": Linter.RuleEntry<["except-parens" | "always"]>;

	/**
	 * Rule to disallow arrow functions where they could be confused with comparisons.
	 *
	 * @since 2.0.0-alpha-2
	 * @deprecated since 8.53.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`no-confusing-arrow`](https://eslint.style/rules/no-confusing-arrow) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/no-confusing-arrow
	 */
	"no-confusing-arrow": Linter.RuleEntry<
		[
			Partial<{
				/**
				 * @default true
				 */
				allowParens: boolean;
			}>,
		]
	>;

	/**
	 * Rule to disallow the use of `console`.
	 *
	 * @since 0.0.2
	 * @see https://eslint.org/docs/latest/rules/no-console
	 */
	"no-console": Linter.RuleEntry<
		[
			Partial<{
				allow: Array<keyof Console>;
			}>,
		]
	>;

	/**
	 * Rule to disallow reassigning `const`, `using`, and `await using` variables.
	 *
	 * @remarks
	 * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
	 *
	 * @since 1.0.0-rc-1
	 * @see https://eslint.org/docs/latest/rules/no-const-assign
	 */
	"no-const-assign": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow expressions where the operation doesn't affect the value.
	 *
	 * @remarks
	 * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
	 *
	 * @since 8.14.0
	 * @see https://eslint.org/docs/latest/rules/no-constant-binary-expression
	 */
	"no-constant-binary-expression": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow constant expressions in conditions.
	 *
	 * @remarks
	 * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
	 *
	 * @since 0.4.1
	 * @see https://eslint.org/docs/latest/rules/no-constant-condition
	 */
	"no-constant-condition": Linter.RuleEntry<
		[
			{
				/**
				 * @default "allExceptWhileTrue"
				 */
				checkLoops: "all" | "allExceptWhileTrue" | "none" | boolean;
			},
		]
	>;

	/**
	 * Rule to disallow returning value from constructor.
	 *
	 * @since 6.7.0
	 * @see https://eslint.org/docs/latest/rules/no-constructor-return
	 */
	"no-constructor-return": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow `continue` statements.
	 *
	 * @since 0.19.0
	 * @see https://eslint.org/docs/latest/rules/no-continue
	 */
	"no-continue": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow control characters in regular expressions.
	 *
	 * @remarks
	 * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
	 *
	 * @since 0.1.0
	 * @see https://eslint.org/docs/latest/rules/no-control-regex
	 */
	"no-control-regex": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow the use of `debugger`.
	 *
	 * @remarks
	 * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
	 *
	 * @since 0.0.2
	 * @see https://eslint.org/docs/latest/rules/no-debugger
	 */
	"no-debugger": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow deleting variables.
	 *
	 * @remarks
	 * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
	 *
	 * @since 0.0.9
	 * @see https://eslint.org/docs/latest/rules/no-delete-var
	 */
	"no-delete-var": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow equal signs explicitly at the beginning of regular expressions.
	 *
	 * @since 0.1.0
	 * @see https://eslint.org/docs/latest/rules/no-div-regex
	 */
	"no-div-regex": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow duplicate arguments in `function` definitions.
	 *
	 * @remarks
	 * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
	 *
	 * @since 0.16.0
	 * @see https://eslint.org/docs/latest/rules/no-dupe-args
	 */
	"no-dupe-args": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow duplicate class members.
	 *
	 * @remarks
	 * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
	 *
	 * @since 1.2.0
	 * @see https://eslint.org/docs/latest/rules/no-dupe-class-members
	 */
	"no-dupe-class-members": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow duplicate conditions in if-else-if chains.
	 *
	 * @remarks
	 * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
	 *
	 * @since 6.7.0
	 * @see https://eslint.org/docs/latest/rules/no-dupe-else-if
	 */
	"no-dupe-else-if": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow duplicate keys in object literals.
	 *
	 * @remarks
	 * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
	 *
	 * @since 0.0.9
	 * @see https://eslint.org/docs/latest/rules/no-dupe-keys
	 */
	"no-dupe-keys": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow duplicate case labels.
	 *
	 * @remarks
	 * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
	 *
	 * @since 0.17.0
	 * @see https://eslint.org/docs/latest/rules/no-duplicate-case
	 */
	"no-duplicate-case": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow duplicate module imports.
	 *
	 * @since 2.5.0
	 * @see https://eslint.org/docs/latest/rules/no-duplicate-imports
	 */
	"no-duplicate-imports": Linter.RuleEntry<
		[
			Partial<{
				/**
				 * @default false
				 */
				includeExports: boolean;
				/**
				 * @default false
				 */
				allowSeparateTypeImports: boolean;
			}>,
		]
	>;

	/**
	 * Rule to disallow `else` blocks after `return` statements in `if` statements.
	 *
	 * @since 0.0.9
	 * @see https://eslint.org/docs/latest/rules/no-else-return
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
	 * Rule to disallow empty block statements.
	 *
	 * @remarks
	 * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
	 *
	 * @since 0.0.2
	 * @see https://eslint.org/docs/latest/rules/no-empty
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
	 * @see https://eslint.org/docs/latest/rules/no-empty-character-class
	 */
	"no-empty-character-class": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow empty functions.
	 *
	 * @since 2.0.0
	 * @see https://eslint.org/docs/latest/rules/no-empty-function
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
					| "asyncFunctions"
					| "asyncMethods"
					| "privateConstructors"
					| "protectedConstructors"
					| "decoratedFunctions"
					| "overrideMethods"
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
	 * @see https://eslint.org/docs/latest/rules/no-empty-pattern
	 */
	"no-empty-pattern": Linter.RuleEntry<
		[
			Partial<{
				/**
				 * @default false
				 */
				allowObjectPatternsAsParameters: boolean;
			}>,
		]
	>;

	/**
	 * Rule to disallow empty static blocks.
	 *
	 * @remarks
	 * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
	 *
	 * @since 8.27.0
	 * @see https://eslint.org/docs/latest/rules/no-empty-static-block
	 */
	"no-empty-static-block": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow `null` comparisons without type-checking operators.
	 *
	 * @since 0.0.9
	 * @see https://eslint.org/docs/latest/rules/no-eq-null
	 */
	"no-eq-null": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow the use of `eval()`.
	 *
	 * @since 0.0.2
	 * @see https://eslint.org/docs/latest/rules/no-eval
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
	 * Rule to disallow reassigning exceptions in `catch` clauses.
	 *
	 * @remarks
	 * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
	 *
	 * @since 0.0.9
	 * @see https://eslint.org/docs/latest/rules/no-ex-assign
	 */
	"no-ex-assign": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow extending native types.
	 *
	 * @since 0.1.4
	 * @see https://eslint.org/docs/latest/rules/no-extend-native
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
	 * @see https://eslint.org/docs/latest/rules/no-extra-bind
	 */
	"no-extra-bind": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow unnecessary boolean casts.
	 *
	 * @remarks
	 * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
	 *
	 * @since 0.4.0
	 * @see https://eslint.org/docs/latest/rules/no-extra-boolean-cast
	 */
	"no-extra-boolean-cast": Linter.RuleEntry<
		[
			| Partial<{
					/**
					 * @since 9.3.0
					 * @default false
					 */
					enforceForInnerExpressions: boolean;
					/**
					 * @deprecated
					 */
					enforceForLogicalOperands: never;
			  }>
			| Partial<{
					/**
					 * @deprecated
					 * @since 7.0.0-alpha.2
					 * @default false
					 */
					enforceForLogicalOperands: boolean;
					enforceForInnerExpressions: never;
			  }>,
		]
	>;

	/**
	 * Rule to disallow unnecessary labels.
	 *
	 * @since 2.0.0-rc.0
	 * @see https://eslint.org/docs/latest/rules/no-extra-label
	 */
	"no-extra-label": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow unnecessary parentheses.
	 *
	 * @since 0.1.4
	 * @deprecated since 8.53.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`no-extra-parens`](https://eslint.style/rules/no-extra-parens) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/no-extra-parens
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
						ignoreJSX:
							| "none"
							| "all"
							| "multi-line"
							| "single-line";
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
	 * @since 0.0.9
	 * @deprecated since 8.53.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`no-extra-semi`](https://eslint.style/rules/no-extra-semi) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/no-extra-semi
	 */
	"no-extra-semi": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow fallthrough of `case` statements.
	 *
	 * @remarks
	 * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
	 *
	 * @since 0.0.7
	 * @see https://eslint.org/docs/latest/rules/no-fallthrough
	 */
	"no-fallthrough": Linter.RuleEntry<
		[
			Partial<{
				/**
				 * @default 'falls?\s?through'
				 */
				commentPattern: string;
				/**
				 * @default false
				 */
				allowEmptyCase: boolean;
				/**
				 * @default false
				 */
				reportUnusedFallthroughComment: boolean;
			}>,
		]
	>;

	/**
	 * Rule to disallow leading or trailing decimal points in numeric literals.
	 *
	 * @since 0.0.6
	 * @deprecated since 8.53.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`no-floating-decimal`](https://eslint.style/rules/no-floating-decimal) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/no-floating-decimal
	 */
	"no-floating-decimal": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow reassigning `function` declarations.
	 *
	 * @remarks
	 * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
	 *
	 * @since 0.0.9
	 * @see https://eslint.org/docs/latest/rules/no-func-assign
	 */
	"no-func-assign": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow assignments to native objects or read-only global variables.
	 *
	 * @remarks
	 * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
	 *
	 * @since 3.3.0
	 * @see https://eslint.org/docs/latest/rules/no-global-assign
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
	 * @see https://eslint.org/docs/latest/rules/no-implicit-coercion
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
				 * @default false
				 */
				disallowTemplateShorthand: boolean;
				/**
				 * @default []
				 */
				allow: Array<"~" | "!!" | "+" | "- -" | "-" | "*">;
			}>,
		]
	>;

	/**
	 * Rule to disallow declarations in the global scope.
	 *
	 * @since 2.0.0-alpha-1
	 * @see https://eslint.org/docs/latest/rules/no-implicit-globals
	 */
	"no-implicit-globals": Linter.RuleEntry<
		[
			Partial<{
				/**
				 * @default false
				 */
				lexicalBindings: boolean;
			}>,
		]
	>;

	/**
	 * Rule to disallow the use of `eval()`-like methods.
	 *
	 * @since 0.0.7
	 * @see https://eslint.org/docs/latest/rules/no-implied-eval
	 */
	"no-implied-eval": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow assigning to imported bindings.
	 *
	 * @remarks
	 * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
	 *
	 * @since 6.4.0
	 * @see https://eslint.org/docs/latest/rules/no-import-assign
	 */
	"no-import-assign": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow inline comments after code.
	 *
	 * @since 0.10.0
	 * @see https://eslint.org/docs/latest/rules/no-inline-comments
	 */
	"no-inline-comments": Linter.RuleEntry<
		[
			Partial<{
				ignorePattern: string;
			}>,
		]
	>;

	/**
	 * Rule to disallow variable or `function` declarations in nested blocks.
	 *
	 * @since 0.6.0
	 * @see https://eslint.org/docs/latest/rules/no-inner-declarations
	 */
	"no-inner-declarations": Linter.RuleEntry<
		[
			"functions" | "both",
			Partial<{
				/**
				 * @default "allow"
				 */
				blockScopedFunctions: "allow" | "disallow";
			}>,
		]
	>;

	/**
	 * Rule to disallow invalid regular expression strings in `RegExp` constructors.
	 *
	 * @remarks
	 * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
	 *
	 * @since 0.1.4
	 * @see https://eslint.org/docs/latest/rules/no-invalid-regexp
	 */
	"no-invalid-regexp": Linter.RuleEntry<
		[
			Partial<{
				allowConstructorFlags: string[];
			}>,
		]
	>;

	/**
	 * Rule to disallow use of `this` in contexts where the value of `this` is `undefined`.
	 *
	 * @since 1.0.0-rc-2
	 * @see https://eslint.org/docs/latest/rules/no-invalid-this
	 */
	"no-invalid-this": Linter.RuleEntry<
		[
			Partial<{
				/**
				 * @default true
				 */
				capIsConstructor: boolean;
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
	 * @see https://eslint.org/docs/latest/rules/no-irregular-whitespace
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
				/**
				 * @default false
				 */
				skipJSXText: boolean;
			}>,
		]
	>;

	/**
	 * Rule to disallow the use of the `__iterator__` property.
	 *
	 * @since 0.0.9
	 * @see https://eslint.org/docs/latest/rules/no-iterator
	 */
	"no-iterator": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow labels that share a name with a variable.
	 *
	 * @since 0.0.9
	 * @see https://eslint.org/docs/latest/rules/no-label-var
	 */
	"no-label-var": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow labeled statements.
	 *
	 * @since 0.4.0
	 * @see https://eslint.org/docs/latest/rules/no-labels
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
	 * @see https://eslint.org/docs/latest/rules/no-lone-blocks
	 */
	"no-lone-blocks": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow `if` statements as the only statement in `else` blocks.
	 *
	 * @since 0.6.0
	 * @see https://eslint.org/docs/latest/rules/no-lonely-if
	 */
	"no-lonely-if": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow function declarations that contain unsafe references inside loop statements.
	 *
	 * @since 0.0.9
	 * @see https://eslint.org/docs/latest/rules/no-loop-func
	 */
	"no-loop-func": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow literal numbers that lose precision.
	 *
	 * @remarks
	 * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
	 *
	 * @since 7.1.0
	 * @see https://eslint.org/docs/latest/rules/no-loss-of-precision
	 */
	"no-loss-of-precision": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow magic numbers.
	 *
	 * @since 1.7.0
	 * @see https://eslint.org/docs/latest/rules/no-magic-numbers
	 */
	"no-magic-numbers": Linter.RuleEntry<
		[
			Partial<{
				/**
				 * @default []
				 */
				ignore: Array<number | string>;
				/**
				 * @default false
				 */
				ignoreArrayIndexes: boolean;
				/**
				 * @default false
				 */
				ignoreDefaultValues: boolean;
				/**
				 * @default false
				 */
				ignoreClassFieldInitialValues: boolean;
				/**
				 * @default false
				 */
				enforceConst: boolean;
				/**
				 * @default false
				 */
				detectObjects: boolean;
				/**
				 * @default false
				 */
				ignoreEnums: boolean;
				/**
				 * @default false
				 */
				ignoreNumericLiteralTypes: boolean;
				/**
				 * @default false
				 */
				ignoreReadonlyClassProperties: boolean;
				/**
				 * @default false
				 */
				ignoreTypeIndexes: boolean;
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
	 * @see https://eslint.org/docs/latest/rules/no-misleading-character-class
	 */
	"no-misleading-character-class": Linter.RuleEntry<
		[
			Partial<{
				/**
				 * @since 9.3.0
				 * @default false
				 */
				allowEscape: boolean;
			}>,
		]
	>;

	/**
	 * Rule to disallow mixed binary operators.
	 *
	 * @since 2.12.0
	 * @deprecated since 8.53.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`no-mixed-operators`](https://eslint.style/rules/no-mixed-operators) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/no-mixed-operators
	 */
	"no-mixed-operators": Linter.RuleEntry<
		[
			Partial<{
				/**
				 * @default
				 * [
				 *     ["+", "-", "*", "/", "%", "**"],
				 *     ["&", "|", "^", "~", "<<", ">>", ">>>"],
				 *     ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
				 *     ["&&", "||"],
				 *     ["in", "instanceof"]
				 * ]
				 */
				groups: string[][];
				/**
				 * @default true
				 */
				allowSamePrecedence: boolean;
			}>,
		]
	>;

	/**
	 * Rule to disallow `require` calls to be mixed with regular variable declarations.
	 *
	 * @since 0.0.9
	 * @deprecated since 7.0.0.
	 * Node.js rules were moved out of ESLint core.
	 * Please, use [`no-mixed-requires`](https://github.com/eslint-community/eslint-plugin-n/tree/master/docs/rules/no-mixed-requires.md) in [`eslint-plugin-n`](https://github.com/eslint-community/eslint-plugin-n).
	 * @see https://eslint.org/docs/latest/rules/no-mixed-requires
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
	 * Rule to disallow mixed spaces and tabs for indentation.
	 *
	 * @since 0.7.1
	 * @deprecated since 8.53.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`no-mixed-spaces-and-tabs`](https://eslint.style/rules/no-mixed-spaces-and-tabs) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/no-mixed-spaces-and-tabs
	 */
	"no-mixed-spaces-and-tabs": Linter.RuleEntry<["smart-tabs"]>;

	/**
	 * Rule to disallow use of chained assignment expressions.
	 *
	 * @since 3.14.0
	 * @see https://eslint.org/docs/latest/rules/no-multi-assign
	 */
	"no-multi-assign": Linter.RuleEntry<
		[
			Partial<{
				/**
				 * @default false
				 */
				ignoreNonDeclaration: boolean;
			}>,
		]
	>;

	/**
	 * Rule to disallow multiple spaces.
	 *
	 * @since 0.9.0
	 * @deprecated since 8.53.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`no-multi-spaces`](https://eslint.style/rules/no-multi-spaces) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/no-multi-spaces
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
	 * @see https://eslint.org/docs/latest/rules/no-multi-str
	 */
	"no-multi-str": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow multiple empty lines.
	 *
	 * @since 0.9.0
	 * @deprecated since 8.53.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`no-multiple-empty-lines`](https://eslint.style/rules/no-multiple-empty-lines) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/no-multiple-empty-lines
	 */
	"no-multiple-empty-lines": Linter.RuleEntry<
		[
			| Partial<{
					/**
					 * @default 2
					 */
					max: number;
					maxEOF: number;
					maxBOF: number;
			  }>
			| number,
		]
	>;

	/**
	 * Rule to disallow assignments to native objects or read-only global variables.
	 *
	 * @since 0.0.9
	 * @deprecated since 3.3.0.
	 * Renamed rule.
	 * Please, use [`no-global-assign`](https://eslint.org/docs/rules/no-global-assign).
	 * @see https://eslint.org/docs/latest/rules/no-native-reassign
	 */
	"no-native-reassign": Linter.RuleEntry<
		[
			Partial<{
				exceptions: string[];
			}>,
		]
	>;

	/**
	 * Rule to disallow negated conditions.
	 *
	 * @since 1.6.0
	 * @see https://eslint.org/docs/latest/rules/no-negated-condition
	 */
	"no-negated-condition": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow negating the left operand in `in` expressions.
	 *
	 * @since 0.1.2
	 * @deprecated since 3.3.0.
	 * Renamed rule.
	 * Please, use [`no-unsafe-negation`](https://eslint.org/docs/rules/no-unsafe-negation).
	 * @see https://eslint.org/docs/latest/rules/no-negated-in-lhs
	 */
	"no-negated-in-lhs": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow nested ternary expressions.
	 *
	 * @since 0.2.0
	 * @see https://eslint.org/docs/latest/rules/no-nested-ternary
	 */
	"no-nested-ternary": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow `new` operators outside of assignments or comparisons.
	 *
	 * @since 0.0.7
	 * @see https://eslint.org/docs/latest/rules/no-new
	 */
	"no-new": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow `new` operators with the `Function` object.
	 *
	 * @since 0.0.7
	 * @see https://eslint.org/docs/latest/rules/no-new-func
	 */
	"no-new-func": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow `new` operators with global non-constructor functions.
	 *
	 * @remarks
	 * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
	 *
	 * @since 8.27.0
	 * @see https://eslint.org/docs/latest/rules/no-new-native-nonconstructor
	 */
	"no-new-native-nonconstructor": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow `Object` constructors.
	 *
	 * @since 0.0.9
	 * @deprecated since 8.50.0.
	 * The new rule flags more situations where object literal syntax can be used, and it does not report a problem when the `Object` constructor is invoked with an argument.
	 * Please, use [`no-object-constructor`](https://eslint.org/docs/rules/no-object-constructor).
	 * @see https://eslint.org/docs/latest/rules/no-new-object
	 */
	"no-new-object": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow `new` operators with calls to `require`.
	 *
	 * @since 0.6.0
	 * @deprecated since 7.0.0.
	 * Node.js rules were moved out of ESLint core.
	 * Please, use [`no-new-require`](https://github.com/eslint-community/eslint-plugin-n/tree/master/docs/rules/no-new-require.md) in [`eslint-plugin-n`](https://github.com/eslint-community/eslint-plugin-n).
	 * @see https://eslint.org/docs/latest/rules/no-new-require
	 */
	"no-new-require": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow `new` operators with the `Symbol` object.
	 *
	 * @since 2.0.0-beta.1
	 * @deprecated since 9.0.0.
	 * The rule was replaced with a more general rule.
	 * Please, use [`no-new-native-nonconstructor`](https://eslint.org/docs/latest/rules/no-new-native-nonconstructor).
	 * @see https://eslint.org/docs/latest/rules/no-new-symbol
	 */
	"no-new-symbol": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow `new` operators with the `String`, `Number`, and `Boolean` objects.
	 *
	 * @since 0.0.6
	 * @see https://eslint.org/docs/latest/rules/no-new-wrappers
	 */
	"no-new-wrappers": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow `\8` and `\9` escape sequences in string literals.
	 *
	 * @remarks
	 * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
	 *
	 * @since 7.14.0
	 * @see https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape
	 */
	"no-nonoctal-decimal-escape": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow calling global object properties as functions.
	 *
	 * @remarks
	 * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
	 *
	 * @since 0.0.9
	 * @see https://eslint.org/docs/latest/rules/no-obj-calls
	 */
	"no-obj-calls": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow calls to the `Object` constructor without an argument.
	 *
	 * @since 8.50.0
	 * @see https://eslint.org/docs/latest/rules/no-object-constructor
	 */
	"no-object-constructor": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow octal literals.
	 *
	 * @remarks
	 * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
	 *
	 * @since 0.0.6
	 * @see https://eslint.org/docs/latest/rules/no-octal
	 */
	"no-octal": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow octal escape sequences in string literals.
	 *
	 * @since 0.0.9
	 * @see https://eslint.org/docs/latest/rules/no-octal-escape
	 */
	"no-octal-escape": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow reassigning function parameters.
	 *
	 * @since 0.18.0
	 * @see https://eslint.org/docs/latest/rules/no-param-reassign
	 */
	"no-param-reassign": Linter.RuleEntry<
		[
			| {
					props?: false;
			  }
			| ({
					props: true;
			  } & Partial<{
					/**
					 * @default []
					 */
					ignorePropertyModificationsFor: string[];
					/**
					 * @since 6.6.0
					 * @default []
					 */
					ignorePropertyModificationsForRegex: string[];
			  }>),
		]
	>;

	/**
	 * Rule to disallow string concatenation with `__dirname` and `__filename`.
	 *
	 * @since 0.4.0
	 * @deprecated since 7.0.0.
	 * Node.js rules were moved out of ESLint core.
	 * Please, use [`no-path-concat`](https://github.com/eslint-community/eslint-plugin-n/tree/master/docs/rules/no-path-concat.md) in [`eslint-plugin-n`](https://github.com/eslint-community/eslint-plugin-n).
	 * @see https://eslint.org/docs/latest/rules/no-path-concat
	 */
	"no-path-concat": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow the unary operators `++` and `--`.
	 *
	 * @since 0.0.9
	 * @see https://eslint.org/docs/latest/rules/no-plusplus
	 */
	"no-plusplus": Linter.RuleEntry<
		[
			Partial<{
				/**
				 * @default false
				 */
				allowForLoopAfterthoughts: boolean;
			}>,
		]
	>;

	/**
	 * Rule to disallow the use of `process.env`.
	 *
	 * @since 0.9.0
	 * @deprecated since 7.0.0.
	 * Node.js rules were moved out of ESLint core.
	 * Please, use [`no-process-env`](https://github.com/eslint-community/eslint-plugin-n/tree/master/docs/rules/no-process-env.md) in [`eslint-plugin-n`](https://github.com/eslint-community/eslint-plugin-n).
	 * @see https://eslint.org/docs/latest/rules/no-process-env
	 */
	"no-process-env": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow the use of `process.exit()`.
	 *
	 * @since 0.4.0
	 * @deprecated since 7.0.0.
	 * Node.js rules were moved out of ESLint core.
	 * Please, use [`no-process-exit`](https://github.com/eslint-community/eslint-plugin-n/tree/master/docs/rules/no-process-exit.md) in [`eslint-plugin-n`](https://github.com/eslint-community/eslint-plugin-n).
	 * @see https://eslint.org/docs/latest/rules/no-process-exit
	 */
	"no-process-exit": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow returning values from Promise executor functions.
	 *
	 * @since 7.3.0
	 * @see https://eslint.org/docs/latest/rules/no-promise-executor-return
	 */
	"no-promise-executor-return": Linter.RuleEntry<
		[
			{
				/**
				 * @default false
				 */
				allowVoid?: boolean;
			},
		]
	>;

	/**
	 * Rule to disallow the use of the `__proto__` property.
	 *
	 * @since 0.0.9
	 * @see https://eslint.org/docs/latest/rules/no-proto
	 */
	"no-proto": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow calling some `Object.prototype` methods directly on objects.
	 *
	 * @remarks
	 * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
	 *
	 * @since 2.11.0
	 * @see https://eslint.org/docs/latest/rules/no-prototype-builtins
	 */
	"no-prototype-builtins": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow variable redeclaration.
	 *
	 * @remarks
	 * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
	 *
	 * @since 0.0.9
	 * @see https://eslint.org/docs/latest/rules/no-redeclare
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
	 * Rule to disallow multiple spaces in regular expressions.
	 *
	 * @remarks
	 * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
	 *
	 * @since 0.4.0
	 * @see https://eslint.org/docs/latest/rules/no-regex-spaces
	 */
	"no-regex-spaces": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow specified names in exports.
	 *
	 * @since 7.0.0-alpha.0
	 * @see https://eslint.org/docs/latest/rules/no-restricted-exports
	 */
	"no-restricted-exports": Linter.RuleEntry<
		[
			Partial<{
				/**
				 * @default []
				 */
				restrictedNamedExports: string[];
				/**
				 * @since 9.3.0
				 */
				restrictedNamedExportsPattern: string;
				/**
				 * @since 8.33.0
				 */
				restrictDefaultExports: Partial<{
					/**
					 * @default false
					 */
					direct: boolean;
					/**
					 * @default false
					 */
					named: boolean;
					/**
					 * @default false
					 */
					defaultFrom: boolean;
					/**
					 * @default false
					 */
					namedFrom: boolean;
					/**
					 * @default false
					 */
					namespaceFrom: boolean;
				}>;
			}>,
		]
	>;

	/**
	 * Rule to disallow specified global variables.
	 *
	 * @since 2.3.0
	 * @see https://eslint.org/docs/latest/rules/no-restricted-globals
	 */
	"no-restricted-globals": Linter.RuleEntry<
		[
			...(
				| Array<
						| string
						| {
								name: string;
								message?: string | undefined;
						  }
				  >
				| Array<{
						globals: Array<
							| string
							| {
									name: string;
									message?: string | undefined;
							  }
						>;
						checkGlobalObject?: boolean;
						globalObjects?: string[];
				  }>
			),
		]
	>;

	/**
	 * Rule to disallow specified modules when loaded by `import`.
	 *
	 * @since 2.0.0-alpha-1
	 * @see https://eslint.org/docs/latest/rules/no-restricted-imports
	 */
	"no-restricted-imports": Linter.RuleEntry<
		[
			...Array<
				| string
				| ValidNoRestrictedImportPathOptions
				| Partial<{
						paths: Array<
							string | ValidNoRestrictedImportPathOptions
						>;
						patterns:
							| Array<string>
							| Array<ValidNoRestrictedImportPatternOptions>;
				  }>
			>,
		]
	>;

	/**
	 * Rule to disallow specified modules when loaded by `require`.
	 *
	 * @since 0.6.0
	 * @deprecated since 7.0.0.
	 * Node.js rules were moved out of ESLint core.
	 * Please, use [`no-restricted-require`](https://github.com/eslint-community/eslint-plugin-n/tree/master/docs/rules/no-restricted-require.md) in [`eslint-plugin-n`](https://github.com/eslint-community/eslint-plugin-n).
	 * @see https://eslint.org/docs/latest/rules/no-restricted-modules
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
	 * Rule to disallow certain properties on certain objects.
	 *
	 * @since 3.5.0
	 * @see https://eslint.org/docs/latest/rules/no-restricted-properties
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
						allowObjects?: string[];
						message?: string | undefined;
				  }
				| {
						object: string;
						allowProperties?: string[];
						message?: string | undefined;
				  }
			>,
		]
	>;

	/**
	 * Rule to disallow specified syntax.
	 *
	 * @since 1.4.0
	 * @see https://eslint.org/docs/latest/rules/no-restricted-syntax
	 */
	"no-restricted-syntax": Linter.RuleEntry<
		[
			...Array<
				| string
				| {
						selector: string;
						message?: string | undefined;
				  }
			>,
		]
	>;

	/**
	 * Rule to disallow assignment operators in `return` statements.
	 *
	 * @since 0.0.9
	 * @see https://eslint.org/docs/latest/rules/no-return-assign
	 */
	"no-return-assign": Linter.RuleEntry<["except-parens" | "always"]>;

	/**
	 * Rule to disallow unnecessary `return await`.
	 *
	 * @since 3.10.0
	 * @deprecated since 8.46.0.
	 * The original assumption of the rule no longer holds true because of engine optimization.
	 * @see https://eslint.org/docs/latest/rules/no-return-await
	 */
	"no-return-await": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow `javascript:` URLs.
	 *
	 * @since 0.0.9
	 * @see https://eslint.org/docs/latest/rules/no-script-url
	 */
	"no-script-url": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow assignments where both sides are exactly the same.
	 *
	 * @remarks
	 * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
	 *
	 * @since 2.0.0-rc.0
	 * @see https://eslint.org/docs/latest/rules/no-self-assign
	 */
	"no-self-assign": Linter.RuleEntry<
		[
			Partial<{
				/**
				 * @default true
				 */
				props: boolean;
			}>,
		]
	>;

	/**
	 * Rule to disallow comparisons where both sides are exactly the same.
	 *
	 * @since 0.0.9
	 * @see https://eslint.org/docs/latest/rules/no-self-compare
	 */
	"no-self-compare": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow comma operators.
	 *
	 * @since 0.5.1
	 * @see https://eslint.org/docs/latest/rules/no-sequences
	 */
	"no-sequences": Linter.RuleEntry<
		[
			Partial<{
				/**
				 * @since 7.23.0
				 * @default true
				 */
				allowInParentheses: boolean;
			}>,
		]
	>;

	/**
	 * Rule to disallow returning values from setters.
	 *
	 * @remarks
	 * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
	 *
	 * @since 6.7.0
	 * @see https://eslint.org/docs/latest/rules/no-setter-return
	 */
	"no-setter-return": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow variable declarations from shadowing variables declared in the outer scope.
	 *
	 * @since 0.0.9
	 * @see https://eslint.org/docs/latest/rules/no-shadow
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
				hoist:
					| "functions"
					| "all"
					| "never"
					| "types"
					| "functions-and-types";
				allow: string[];
				/**
				 * @since 8.10.0
				 * @default false
				 */
				ignoreOnInitialization: boolean;
				/**
				 * @default true
				 */
				ignoreTypeValueShadow: boolean;
				/**
				 * @default true
				 */
				ignoreFunctionTypeParameterNameValueShadow: boolean;
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
	 * @see https://eslint.org/docs/latest/rules/no-shadow-restricted-names
	 */
	"no-shadow-restricted-names": Linter.RuleEntry<
		[
			Partial<{
				/**
				 * @default false
				 */
				reportGlobalThis: boolean;
			}>,
		]
	>;

	/**
	 * Rule to disallow spacing between function identifiers and their applications (deprecated).
	 *
	 * @since 0.1.2
	 * @deprecated since 3.3.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`function-call-spacing`](https://eslint.style/rules/function-call-spacing) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/no-spaced-func
	 */
	"no-spaced-func": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow sparse arrays.
	 *
	 * @remarks
	 * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
	 *
	 * @since 0.4.0
	 * @see https://eslint.org/docs/latest/rules/no-sparse-arrays
	 */
	"no-sparse-arrays": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow synchronous methods.
	 *
	 * @since 0.0.9
	 * @deprecated since 7.0.0.
	 * Node.js rules were moved out of ESLint core.
	 * Please, use [`no-sync`](https://github.com/eslint-community/eslint-plugin-n/tree/master/docs/rules/no-sync.md) in [`eslint-plugin-n`](https://github.com/eslint-community/eslint-plugin-n).
	 * @see https://eslint.org/docs/latest/rules/no-sync
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

	/**
	 * Rule to disallow all tabs.
	 *
	 * @since 3.2.0
	 * @deprecated since 8.53.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`no-tabs`](https://eslint.style/rules/no-tabs) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/no-tabs
	 */
	"no-tabs": Linter.RuleEntry<
		[
			Partial<{
				/**
				 * @default false
				 */
				allowIndentationTabs: boolean;
			}>,
		]
	>;

	/**
	 * Rule to disallow template literal placeholder syntax in regular strings.
	 *
	 * @since 3.3.0
	 * @see https://eslint.org/docs/latest/rules/no-template-curly-in-string
	 */
	"no-template-curly-in-string": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow ternary operators.
	 *
	 * @since 0.0.9
	 * @see https://eslint.org/docs/latest/rules/no-ternary
	 */
	"no-ternary": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow `this`/`super` before calling `super()` in constructors.
	 *
	 * @remarks
	 * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
	 *
	 * @since 0.24.0
	 * @see https://eslint.org/docs/latest/rules/no-this-before-super
	 */
	"no-this-before-super": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow throwing literals as exceptions.
	 *
	 * @since 0.15.0
	 * @see https://eslint.org/docs/latest/rules/no-throw-literal
	 */
	"no-throw-literal": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow trailing whitespace at the end of lines.
	 *
	 * @since 0.7.1
	 * @deprecated since 8.53.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`no-trailing-spaces`](https://eslint.style/rules/no-trailing-spaces) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/no-trailing-spaces
	 */
	"no-trailing-spaces": Linter.RuleEntry<
		[
			Partial<{
				/**
				 * @default false
				 */
				skipBlankLines: boolean;
				/**
				 * @default false
				 */
				ignoreComments: boolean;
			}>,
		]
	>;

	/**
	 * Rule to disallow `let` or `var` variables that are read but never assigned.
	 *
	 * @since 9.27.0
	 * @see https://eslint.org/docs/latest/rules/no-unassigned-vars
	 */
	"no-unassigned-vars": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow the use of undeclared variables unless mentioned in \/*global *\/ comments.
	 *
	 * @remarks
	 * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
	 *
	 * @since 0.0.9
	 * @see https://eslint.org/docs/latest/rules/no-undef
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
	 * @see https://eslint.org/docs/latest/rules/no-undef-init
	 */
	"no-undef-init": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow the use of `undefined` as an identifier.
	 *
	 * @since 0.7.1
	 * @see https://eslint.org/docs/latest/rules/no-undefined
	 */
	"no-undefined": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow dangling underscores in identifiers.
	 *
	 * @since 0.0.9
	 * @see https://eslint.org/docs/latest/rules/no-underscore-dangle
	 */
	"no-underscore-dangle": Linter.RuleEntry<
		[
			Partial<{
				allow: string[];
				/**
				 * @default false
				 */
				allowAfterThis: boolean;
				/**
				 * @default false
				 */
				allowAfterSuper: boolean;
				/**
				 * @since 6.7.0
				 * @default false
				 */
				allowAfterThisConstructor: boolean;
				/**
				 * @default false
				 */
				enforceInMethodNames: boolean;
				/**
				 * @since 8.15.0
				 * @default false
				 */
				enforceInClassFields: boolean;
				/**
				 * @since 8.31.0
				 * @default true
				 */
				allowInArrayDestructuring: boolean;
				/**
				 * @since 8.31.0
				 * @default true
				 */
				allowInObjectDestructuring: boolean;
				/**
				 * @since 7.7.0
				 * @default true
				 */
				allowFunctionParams: boolean;
			}>,
		]
	>;

	/**
	 * Rule to disallow confusing multiline expressions.
	 *
	 * @remarks
	 * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
	 *
	 * @since 0.24.0
	 * @see https://eslint.org/docs/latest/rules/no-unexpected-multiline
	 */
	"no-unexpected-multiline": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow unmodified loop conditions.
	 *
	 * @since 2.0.0-alpha-2
	 * @see https://eslint.org/docs/latest/rules/no-unmodified-loop-condition
	 */
	"no-unmodified-loop-condition": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow ternary operators when simpler alternatives exist.
	 *
	 * @since 0.21.0
	 * @see https://eslint.org/docs/latest/rules/no-unneeded-ternary
	 */
	"no-unneeded-ternary": Linter.RuleEntry<
		[
			Partial<{
				/**
				 * @default true
				 */
				defaultAssignment: boolean;
			}>,
		]
	>;

	/**
	 * Rule to disallow unreachable code after `return`, `throw`, `continue`, and `break` statements.
	 *
	 * @remarks
	 * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
	 *
	 * @since 0.0.6
	 * @see https://eslint.org/docs/latest/rules/no-unreachable
	 */
	"no-unreachable": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow loops with a body that allows only one iteration.
	 *
	 * @since 7.3.0
	 * @see https://eslint.org/docs/latest/rules/no-unreachable-loop
	 */
	"no-unreachable-loop": Linter.RuleEntry<
		[
			Partial<{
				/**
				 * @default []
				 */
				ignore: Array<
					| "WhileStatement"
					| "DoWhileStatement"
					| "ForStatement"
					| "ForInStatement"
					| "ForOfStatement"
				>;
			}>,
		]
	>;

	/**
	 * Rule to disallow control flow statements in `finally` blocks.
	 *
	 * @remarks
	 * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
	 *
	 * @since 2.9.0
	 * @see https://eslint.org/docs/latest/rules/no-unsafe-finally
	 */
	"no-unsafe-finally": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow negating the left operand of relational operators.
	 *
	 * @remarks
	 * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
	 *
	 * @since 3.3.0
	 * @see https://eslint.org/docs/latest/rules/no-unsafe-negation
	 */
	"no-unsafe-negation": Linter.RuleEntry<
		[
			Partial<{
				/**
				 * @since 6.6.0
				 * @default false
				 */
				enforceForOrderingRelations: boolean;
			}>,
		]
	>;

	/**
	 * Rule to disallow use of optional chaining in contexts where the `undefined` value is not allowed.
	 *
	 * @remarks
	 * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
	 *
	 * @since 7.15.0
	 * @see https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining
	 */
	"no-unsafe-optional-chaining": Linter.RuleEntry<
		[
			Partial<{
				/**
				 * @default false
				 */
				disallowArithmeticOperators: boolean;
			}>,
		]
	>;

	/**
	 * Rule to disallow unused expressions.
	 *
	 * @since 0.1.0
	 * @see https://eslint.org/docs/latest/rules/no-unused-expressions
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
				/**
				 * @since 7.20.0
				 * @default false
				 */
				enforceForJSX: boolean;
				/**
				 * @default false
				 */
				ignoreDirectives: boolean;
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
	 * @see https://eslint.org/docs/latest/rules/no-unused-labels
	 */
	"no-unused-labels": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow unused private class members.
	 *
	 * @remarks
	 * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
	 *
	 * @since 8.1.0
	 * @see https://eslint.org/docs/latest/rules/no-unused-private-class-members
	 */
	"no-unused-private-class-members": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow unused variables.
	 *
	 * @remarks
	 * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
	 *
	 * @since 0.0.9
	 * @see https://eslint.org/docs/latest/rules/no-unused-vars
	 */
	"no-unused-vars": Linter.RuleEntry<
		[
			| "all"
			| "local"
			| Partial<{
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
					 * @default 'all'
					 */
					caughtErrors: "none" | "all";
					caughtErrorsIgnorePattern: string;
					destructuredArrayIgnorePattern: string;
					/**
					 * @default false
					 */
					ignoreClassWithStaticInitBlock: boolean;
					/**
					 * @default false
					 */
					ignoreUsingDeclarations: boolean;
					/**
					 * @default false
					 */
					reportUsedIgnorePattern: boolean;
			  }>,
		]
	>;

	/**
	 * Rule to disallow the use of variables before they are defined.
	 *
	 * @since 0.0.9
	 * @see https://eslint.org/docs/latest/rules/no-use-before-define
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
					/**
					 * @default false
					 */
					allowNamedExports: boolean;
					/**
					 * @default true
					 */
					enums: boolean;
					/**
					 * @default true
					 */
					typedefs: boolean;
					/**
					 * @default true
					 */
					ignoreTypeReferences: boolean;
			  }>
			| "nofunc",
		]
	>;

	/**
	 * Rule to disallow variable assignments when the value is not used.
	 *
	 * @since 9.0.0-alpha.1
	 * @see https://eslint.org/docs/latest/rules/no-useless-assignment
	 */
	"no-useless-assignment": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow useless backreferences in regular expressions.
	 *
	 * @remarks
	 * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
	 *
	 * @since 7.0.0-alpha.0
	 * @see https://eslint.org/docs/latest/rules/no-useless-backreference
	 */
	"no-useless-backreference": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow unnecessary calls to `.call()` and `.apply()`.
	 *
	 * @since 1.0.0-rc-1
	 * @see https://eslint.org/docs/latest/rules/no-useless-call
	 */
	"no-useless-call": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow unnecessary `catch` clauses.
	 *
	 * @remarks
	 * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
	 *
	 * @since 5.11.0
	 * @see https://eslint.org/docs/latest/rules/no-useless-catch
	 */
	"no-useless-catch": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow unnecessary computed property keys in objects and classes.
	 *
	 * @since 2.9.0
	 * @see https://eslint.org/docs/latest/rules/no-useless-computed-key
	 */
	"no-useless-computed-key": Linter.RuleEntry<
		[
			Partial<{
				/**
				 * @default true
				 */
				enforceForClassMembers: boolean;
			}>,
		]
	>;

	/**
	 * Rule to disallow unnecessary concatenation of literals or template literals.
	 *
	 * @since 1.3.0
	 * @see https://eslint.org/docs/latest/rules/no-useless-concat
	 */
	"no-useless-concat": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow unnecessary constructors.
	 *
	 * @since 2.0.0-beta.1
	 * @see https://eslint.org/docs/latest/rules/no-useless-constructor
	 */
	"no-useless-constructor": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow unnecessary escape characters.
	 *
	 * @remarks
	 * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
	 *
	 * @since 2.5.0
	 * @see https://eslint.org/docs/latest/rules/no-useless-escape
	 */
	"no-useless-escape": Linter.RuleEntry<
		[
			Partial<{
				allowRegexCharacters: string[];
			}>,
		]
	>;

	/**
	 * Rule to disallow renaming import, export, and destructured assignments to the same name.
	 *
	 * @since 2.11.0
	 * @see https://eslint.org/docs/latest/rules/no-useless-rename
	 */
	"no-useless-rename": Linter.RuleEntry<
		[
			Partial<{
				/**
				 * @default false
				 */
				ignoreImport: boolean;
				/**
				 * @default false
				 */
				ignoreExport: boolean;
				/**
				 * @default false
				 */
				ignoreDestructuring: boolean;
			}>,
		]
	>;

	/**
	 * Rule to disallow redundant return statements.
	 *
	 * @since 3.9.0
	 * @see https://eslint.org/docs/latest/rules/no-useless-return
	 */
	"no-useless-return": Linter.RuleEntry<[]>;

	/**
	 * Rule to require `let` or `const` instead of `var`.
	 *
	 * @since 0.12.0
	 * @see https://eslint.org/docs/latest/rules/no-var
	 */
	"no-var": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow `void` operators.
	 *
	 * @since 0.8.0
	 * @see https://eslint.org/docs/latest/rules/no-void
	 */
	"no-void": Linter.RuleEntry<
		[
			Partial<{
				/**
				 * @default false
				 */
				allowAsStatement: boolean;
			}>,
		]
	>;

	/**
	 * Rule to disallow specified warning terms in comments.
	 *
	 * @since 0.4.4
	 * @see https://eslint.org/docs/latest/rules/no-warning-comments
	 */
	"no-warning-comments": Linter.RuleEntry<
		[
			Partial<{
				/**
				 * @default ["todo", "fixme", "xxx"]
				 */
				terms: string[];
				/**
				 * @default 'start'
				 */
				location: "start" | "anywhere";
				decoration: string[];
			}>,
		]
	>;

	/**
	 * Rule to disallow whitespace before properties.
	 *
	 * @since 2.0.0-beta.1
	 * @deprecated since 8.53.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`no-whitespace-before-property`](https://eslint.style/rules/no-whitespace-before-property) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/no-whitespace-before-property
	 */
	"no-whitespace-before-property": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow `with` statements.
	 *
	 * @remarks
	 * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
	 *
	 * @since 0.0.2
	 * @see https://eslint.org/docs/latest/rules/no-with
	 */
	"no-with": Linter.RuleEntry<[]>;

	/**
	 * Rule to enforce the location of single-line statements.
	 *
	 * @since 3.17.0
	 * @deprecated since 8.53.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`nonblock-statement-body-position`](https://eslint.style/rules/nonblock-statement-body-position) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/nonblock-statement-body-position
	 */
	"nonblock-statement-body-position": Linter.RuleEntry<
		[
			"beside" | "below" | "any",
			Partial<{
				overrides: Record<string, "beside" | "below" | "any">;
			}>,
		]
	>;

	/**
	 * Rule to enforce consistent line breaks after opening and before closing braces.
	 *
	 * @since 2.12.0
	 * @deprecated since 8.53.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`object-curly-newline`](https://eslint.style/rules/object-curly-newline) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/object-curly-newline
	 */
	"object-curly-newline": Linter.RuleEntry<
		[
			| "always"
			| "never"
			| Partial<{
					/**
					 * @default false
					 */
					multiline: boolean;
					minProperties: number;
					/**
					 * @default true
					 */
					consistent: boolean;
			  }>
			| Partial<
					Record<
						| "ObjectExpression"
						| "ObjectPattern"
						| "ImportDeclaration"
						| "ExportDeclaration",
						| "always"
						| "never"
						| Partial<{
								/**
								 * @default false
								 */
								multiline: boolean;
								minProperties: number;
								/**
								 * @default true
								 */
								consistent: boolean;
						  }>
					>
			  >,
		]
	>;

	/**
	 * Rule to enforce consistent spacing inside braces.
	 *
	 * @since 0.22.0
	 * @deprecated since 8.53.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`object-curly-spacing`](https://eslint.style/rules/object-curly-spacing) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/object-curly-spacing
	 */
	"object-curly-spacing":
		| Linter.RuleEntry<
				[
					"never",
					{
						/**
						 * @default false
						 */
						arraysInObjects: boolean;
						/**
						 * @default false
						 */
						objectsInObjects: boolean;
					},
				]
		  >
		| Linter.RuleEntry<
				[
					"always",
					{
						/**
						 * @default true
						 */
						arraysInObjects: boolean;
						/**
						 * @default true
						 */
						objectsInObjects: boolean;
					},
				]
		  >;

	/**
	 * Rule to enforce placing object properties on separate lines.
	 *
	 * @since 2.10.0
	 * @deprecated since 8.53.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`object-property-newline`](https://eslint.style/rules/object-property-newline) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/object-property-newline
	 */
	"object-property-newline": Linter.RuleEntry<
		[
			Partial<{
				/**
				 * @default false
				 */
				allowAllPropertiesOnSameLine: boolean;
			}>,
		]
	>;

	/**
	 * Rule to require or disallow method and property shorthand syntax for object literals.
	 *
	 * @since 0.20.0
	 * @see https://eslint.org/docs/latest/rules/object-shorthand
	 */
	"object-shorthand":
		| Linter.RuleEntry<
				[
					"always" | "methods",
					Partial<{
						/**
						 * @default false
						 */
						avoidQuotes: boolean;
						/**
						 * @default false
						 */
						ignoreConstructors: boolean;
						/**
						 * @since 8.22.0
						 */
						methodsIgnorePattern: string;
						/**
						 * @default false
						 */
						avoidExplicitReturnArrows: boolean;
					}>,
				]
		  >
		| Linter.RuleEntry<
				[
					"properties",
					Partial<{
						/**
						 * @default false
						 */
						avoidQuotes: boolean;
					}>,
				]
		  >
		| Linter.RuleEntry<["never" | "consistent" | "consistent-as-needed"]>;

	/**
	 * Rule to enforce variables to be declared either together or separately in functions.
	 *
	 * @since 0.0.9
	 * @see https://eslint.org/docs/latest/rules/one-var
	 */
	"one-var": Linter.RuleEntry<
		[
			| "always"
			| "never"
			| "consecutive"
			| Partial<
					{
						/**
						 * @default false
						 */
						separateRequires: boolean;
					} & Record<
						"var" | "let" | "const" | "using" | "awaitUsing",
						"always" | "never" | "consecutive"
					>
			  >
			| Partial<
					Record<
						"initialized" | "uninitialized",
						"always" | "never" | "consecutive"
					>
			  >,
		]
	>;

	/**
	 * Rule to require or disallow newlines around variable declarations.
	 *
	 * @since 2.0.0-beta.3
	 * @deprecated since 8.53.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`one-var-declaration-per-line`](https://eslint.style/rules/one-var-declaration-per-line) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/one-var-declaration-per-line
	 */
	"one-var-declaration-per-line": Linter.RuleEntry<
		["initializations" | "always"]
	>;

	/**
	 * Rule to require or disallow assignment operator shorthand where possible.
	 *
	 * @since 0.10.0
	 * @see https://eslint.org/docs/latest/rules/operator-assignment
	 */
	"operator-assignment": Linter.RuleEntry<["always" | "never"]>;

	/**
	 * Rule to enforce consistent linebreak style for operators.
	 *
	 * @since 0.19.0
	 * @deprecated since 8.53.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`operator-linebreak`](https://eslint.style/rules/operator-linebreak) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/operator-linebreak
	 */
	"operator-linebreak": Linter.RuleEntry<
		[
			"after" | "before" | "none",
			Partial<{
				overrides: Record<string, "after" | "before" | "none">;
			}>,
		]
	>;

	/**
	 * Rule to require or disallow padding within blocks.
	 *
	 * @since 0.9.0
	 * @deprecated since 8.53.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`padded-blocks`](https://eslint.style/rules/padded-blocks) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/padded-blocks
	 */
	"padded-blocks": Linter.RuleEntry<
		[
			(
				| "always"
				| "never"
				| Partial<
						Record<
							"blocks" | "classes" | "switches",
							"always" | "never"
						>
				  >
			),
			{
				/**
				 * @default false
				 */
				allowSingleLineBlocks: boolean;
			},
		]
	>;

	/**
	 * Rule to require or disallow padding lines between statements.
	 *
	 * @since 4.0.0-beta.0
	 * @deprecated since 8.53.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`padding-line-between-statements`](https://eslint.style/rules/padding-line-between-statements) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/padding-line-between-statements
	 */
	"padding-line-between-statements": Linter.RuleEntry<
		[
			...Array<
				{
					blankLine: "any" | "never" | "always";
				} & Record<"prev" | "next", string | string[]>
			>,
		]
	>;

	/**
	 * Rule to require using arrow functions for callbacks.
	 *
	 * @since 1.2.0
	 * @see https://eslint.org/docs/latest/rules/prefer-arrow-callback
	 */
	"prefer-arrow-callback": Linter.RuleEntry<
		[
			Partial<{
				/**
				 * @default false
				 */
				allowNamedFunctions: boolean;
				/**
				 * @default true
				 */
				allowUnboundThis: boolean;
			}>,
		]
	>;

	/**
	 * Rule to require `const` declarations for variables that are never reassigned after declared.
	 *
	 * @since 0.23.0
	 * @see https://eslint.org/docs/latest/rules/prefer-const
	 */
	"prefer-const": Linter.RuleEntry<
		[
			Partial<{
				/**
				 * @default 'any'
				 */
				destructuring: "any" | "all";
				/**
				 * @default false
				 */
				ignoreReadBeforeAssign: boolean;
			}>,
		]
	>;

	/**
	 * Rule to require destructuring from arrays and/or objects.
	 *
	 * @since 3.13.0
	 * @see https://eslint.org/docs/latest/rules/prefer-destructuring
	 */
	"prefer-destructuring": Linter.RuleEntry<
		[
			Partial<
				| {
						VariableDeclarator: Partial<{
							array: boolean;
							object: boolean;
						}>;
						AssignmentExpression: Partial<{
							array: boolean;
							object: boolean;
						}>;
				  }
				| {
						array: boolean;
						object: boolean;
				  }
			>,
			Partial<{
				enforceForRenamedProperties: boolean;
			}>,
		]
	>;

	/**
	 * Rule to disallow the use of `Math.pow` in favor of the `**` operator.
	 *
	 * @since 6.7.0
	 * @see https://eslint.org/docs/latest/rules/prefer-exponentiation-operator
	 */
	"prefer-exponentiation-operator": Linter.RuleEntry<[]>;

	/**
	 * Rule to enforce using named capture group in regular expression.
	 *
	 * @since 5.15.0
	 * @see https://eslint.org/docs/latest/rules/prefer-named-capture-group
	 */
	"prefer-named-capture-group": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals.
	 *
	 * @since 3.5.0
	 * @see https://eslint.org/docs/latest/rules/prefer-numeric-literals
	 */
	"prefer-numeric-literals": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow use of `Object.prototype.hasOwnProperty.call()` and prefer use of `Object.hasOwn()`.
	 *
	 * @since 8.5.0
	 * @see https://eslint.org/docs/latest/rules/prefer-object-has-own
	 */
	"prefer-object-has-own": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow using `Object.assign` with an object literal as the first argument and prefer the use of object spread instead.
	 *
	 * @since 5.0.0-alpha.3
	 * @see https://eslint.org/docs/latest/rules/prefer-object-spread
	 */
	"prefer-object-spread": Linter.RuleEntry<[]>;

	/**
	 * Rule to require using Error objects as Promise rejection reasons.
	 *
	 * @since 3.14.0
	 * @see https://eslint.org/docs/latest/rules/prefer-promise-reject-errors
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
	 * Rule to require `Reflect` methods where applicable.
	 *
	 * @since 1.0.0-rc-2
	 * @deprecated since 3.9.0.
	 * The original intention of this rule was misguided.
	 * @see https://eslint.org/docs/latest/rules/prefer-reflect
	 */
	"prefer-reflect": Linter.RuleEntry<
		[
			Partial<{
				exceptions: string[];
			}>,
		]
	>;

	/**
	 * Rule to disallow use of the `RegExp` constructor in favor of regular expression literals.
	 *
	 * @since 6.4.0
	 * @see https://eslint.org/docs/latest/rules/prefer-regex-literals
	 */
	"prefer-regex-literals": Linter.RuleEntry<
		[
			Partial<{
				/**
				 * @default false
				 */
				disallowRedundantWrapping: boolean;
			}>,
		]
	>;

	/**
	 * Rule to require rest parameters instead of `arguments`.
	 *
	 * @since 2.0.0-alpha-1
	 * @see https://eslint.org/docs/latest/rules/prefer-rest-params
	 */
	"prefer-rest-params": Linter.RuleEntry<[]>;

	/**
	 * Rule to require spread operators instead of `.apply()`.
	 *
	 * @since 1.0.0-rc-1
	 * @see https://eslint.org/docs/latest/rules/prefer-spread
	 */
	"prefer-spread": Linter.RuleEntry<[]>;

	/**
	 * Rule to require template literals instead of string concatenation.
	 *
	 * @since 1.2.0
	 * @see https://eslint.org/docs/latest/rules/prefer-template
	 */
	"prefer-template": Linter.RuleEntry<[]>;

	/**
	 * Rule to disallow losing originally caught error when re-throwing custom errors.
	 *
	 * @since 9.35.0
	 * @see https://eslint.org/docs/latest/rules/preserve-caught-error
	 */
	"preserve-caught-error": Linter.RuleEntry<
		[
			Partial<{
				/**
				 * @default false
				 */
				requireCatchParameter: boolean;
			}>,
		]
	>;

	/**
	 * Rule to require quotes around object literal property names.
	 *
	 * @since 0.0.6
	 * @deprecated since 8.53.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`quote-props`](https://eslint.style/rules/quote-props) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/quote-props
	 */
	"quote-props":
		| Linter.RuleEntry<["always" | "consistent"]>
		| Linter.RuleEntry<
				[
					"as-needed",
					Partial<{
						/**
						 * @default false
						 */
						keywords: boolean;
						/**
						 * @default true
						 */
						unnecessary: boolean;
						/**
						 * @default false
						 */
						numbers: boolean;
					}>,
				]
		  >
		| Linter.RuleEntry<
				[
					"consistent-as-needed",
					Partial<{
						/**
						 * @default false
						 */
						keywords: boolean;
					}>,
				]
		  >;

	/**
	 * Rule to enforce the consistent use of either backticks, double, or single quotes.
	 *
	 * @since 0.0.7
	 * @deprecated since 8.53.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`quotes`](https://eslint.style/rules/quotes) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/quotes
	 */
	quotes: Linter.RuleEntry<
		[
			"double" | "single" | "backtick",
			Partial<{
				/**
				 * @default false
				 */
				avoidEscape: boolean;
				/**
				 * @default false
				 */
				allowTemplateLiterals: boolean;
			}>,
		]
	>;

	/**
	 * Rule to enforce the consistent use of the radix argument when using `parseInt()`.
	 *
	 * @since 0.0.7
	 * @see https://eslint.org/docs/latest/rules/radix
	 */
	radix: Linter.RuleEntry<["always" | "as-needed"]>;

	/**
	 * Rule to disallow assignments that can lead to race conditions due to usage of `await` or `yield`.
	 *
	 * @since 5.3.0
	 * @see https://eslint.org/docs/latest/rules/require-atomic-updates
	 */
	"require-atomic-updates": Linter.RuleEntry<
		[
			Partial<{
				/**
				 * @since 8.3.0
				 * @default false
				 */
				allowProperties: boolean;
			}>,
		]
	>;

	/**
	 * Rule to disallow async functions which have no `await` expression.
	 *
	 * @since 3.11.0
	 * @see https://eslint.org/docs/latest/rules/require-await
	 */
	"require-await": Linter.RuleEntry<[]>;

	/**
	 * Rule to enforce the use of `u` or `v` flag on regular expressions.
	 *
	 * @since 5.3.0
	 * @see https://eslint.org/docs/latest/rules/require-unicode-regexp
	 */
	"require-unicode-regexp": Linter.RuleEntry<
		[
			Partial<{
				/**
				 * @default false
				 */
				requireFlag: "u" | "v";
			}>,
		]
	>;

	/**
	 * Rule to require generator functions to contain `yield`.
	 *
	 * @remarks
	 * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
	 *
	 * @since 1.0.0-rc-1
	 * @see https://eslint.org/docs/latest/rules/require-yield
	 */
	"require-yield": Linter.RuleEntry<[]>;

	/**
	 * Rule to enforce spacing between rest and spread operators and their expressions.
	 *
	 * @since 2.12.0
	 * @deprecated since 8.53.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`rest-spread-spacing`](https://eslint.style/rules/rest-spread-spacing) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/rest-spread-spacing
	 */
	"rest-spread-spacing": Linter.RuleEntry<["never" | "always"]>;

	/**
	 * Rule to require or disallow semicolons instead of ASI.
	 *
	 * @since 0.0.6
	 * @deprecated since 8.53.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`semi`](https://eslint.style/rules/semi) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/semi
	 */
	semi:
		| Linter.RuleEntry<
				[
					"always",
					Partial<{
						/**
						 * @default false
						 */
						omitLastInOneLineBlock: boolean;
					}>,
				]
		  >
		| Linter.RuleEntry<
				[
					"never",
					Partial<{
						/**
						 * @default 'any'
						 */
						beforeStatementContinuationChars:
							| "any"
							| "always"
							| "never";
					}>,
				]
		  >;

	/**
	 * Rule to enforce consistent spacing before and after semicolons.
	 *
	 * @since 0.16.0
	 * @deprecated since 8.53.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`semi-spacing`](https://eslint.style/rules/semi-spacing) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/semi-spacing
	 */
	"semi-spacing": Linter.RuleEntry<
		[
			Partial<{
				/**
				 * @default false
				 */
				before: boolean;
				/**
				 * @default true
				 */
				after: boolean;
			}>,
		]
	>;

	/**
	 * Rule to enforce location of semicolons.
	 *
	 * @since 4.0.0-beta.0
	 * @deprecated since 8.53.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`semi-style`](https://eslint.style/rules/semi-style) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/semi-style
	 */
	"semi-style": Linter.RuleEntry<["last" | "first"]>;

	/**
	 * Rule to enforce sorted `import` declarations within modules.
	 *
	 * @since 2.0.0-beta.1
	 * @see https://eslint.org/docs/latest/rules/sort-imports
	 */
	"sort-imports": Linter.RuleEntry<
		[
			Partial<{
				/**
				 * @default false
				 */
				ignoreCase: boolean;
				/**
				 * @default false
				 */
				ignoreDeclarationSort: boolean;
				/**
				 * @default false
				 */
				ignoreMemberSort: boolean;
				/**
				 * @default ['none', 'all', 'multiple', 'single']
				 */
				memberSyntaxSortOrder: Array<
					"none" | "all" | "multiple" | "single"
				>;
				/**
				 * @default false
				 */
				allowSeparatedGroups: boolean;
			}>,
		]
	>;

	/**
	 * Rule to require object keys to be sorted.
	 *
	 * @since 3.3.0
	 * @see https://eslint.org/docs/latest/rules/sort-keys
	 */
	"sort-keys": Linter.RuleEntry<
		[
			"asc" | "desc",
			Partial<{
				/**
				 * @default true
				 */
				caseSensitive: boolean;
				/**
				 * @default 2
				 */
				minKeys: number;
				/**
				 * @default false
				 */
				natural: boolean;
				/**
				 * @default false
				 */
				allowLineSeparatedGroups: boolean;
				/**
				 * @default false
				 */
				ignoreComputedKeys: boolean;
			}>,
		]
	>;

	/**
	 * Rule to require variables within the same declaration block to be sorted.
	 *
	 * @since 0.2.0
	 * @see https://eslint.org/docs/latest/rules/sort-vars
	 */
	"sort-vars": Linter.RuleEntry<
		[
			Partial<{
				/**
				 * @default false
				 */
				ignoreCase: boolean;
			}>,
		]
	>;

	/**
	 * Rule to enforce consistent spacing before blocks.
	 *
	 * @since 0.9.0
	 * @deprecated since 8.53.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`space-before-blocks`](https://eslint.style/rules/space-before-blocks) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/space-before-blocks
	 */
	"space-before-blocks": Linter.RuleEntry<
		[
			| "always"
			| "never"
			| Partial<
					Record<
						"functions" | "keywords" | "classes",
						"always" | "never" | "off"
					>
			  >,
		]
	>;

	/**
	 * Rule to enforce consistent spacing before `function` definition opening parenthesis.
	 *
	 * @since 0.18.0
	 * @deprecated since 8.53.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`space-before-function-paren`](https://eslint.style/rules/space-before-function-paren) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/space-before-function-paren
	 */
	"space-before-function-paren": Linter.RuleEntry<
		[
			| "always"
			| "never"
			| Partial<
					Record<
						"anonymous" | "named" | "asyncArrow",
						"always" | "never" | "ignore"
					>
			  >,
		]
	>;

	/**
	 * Rule to enforce consistent spacing inside parentheses.
	 *
	 * @since 0.8.0
	 * @deprecated since 8.53.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`space-in-parens`](https://eslint.style/rules/space-in-parens) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/space-in-parens
	 */
	"space-in-parens": Linter.RuleEntry<
		[
			"never" | "always",
			Partial<{
				exceptions: string[];
			}>,
		]
	>;

	/**
	 * Rule to require spacing around infix operators.
	 *
	 * @since 0.2.0
	 * @deprecated since 8.53.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`space-infix-ops`](https://eslint.style/rules/space-infix-ops) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/space-infix-ops
	 */
	"space-infix-ops": Linter.RuleEntry<
		[
			Partial<{
				/**
				 * @default false
				 */
				int32Hint: boolean;
			}>,
		]
	>;

	/**
	 * Rule to enforce consistent spacing before or after unary operators.
	 *
	 * @since 0.10.0
	 * @deprecated since 8.53.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`space-unary-ops`](https://eslint.style/rules/space-unary-ops) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/space-unary-ops
	 */
	"space-unary-ops": Linter.RuleEntry<
		[
			Partial<{
				/**
				 * @default true
				 */
				words: boolean;
				/**
				 * @default false
				 */
				nonwords: boolean;
				overrides: Record<string, boolean>;
			}>,
		]
	>;

	/**
	 * Rule to enforce consistent spacing after the `//` or `/*` in a comment.
	 *
	 * @since 0.23.0
	 * @deprecated since 8.53.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`spaced-comment`](https://eslint.style/rules/spaced-comment) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/spaced-comment
	 */
	"spaced-comment": Linter.RuleEntry<
		[
			"always" | "never",
			{
				exceptions: string[];
				markers: string[];
				line: {
					exceptions: string[];
					markers: string[];
				};
				block: {
					exceptions: string[];
					markers: string[];
					/**
					 * @default false
					 */
					balanced: boolean;
				};
			},
		]
	>;

	/**
	 * Rule to require or disallow strict mode directives.
	 *
	 * @since 0.1.0
	 * @see https://eslint.org/docs/latest/rules/strict
	 */
	strict: Linter.RuleEntry<["safe" | "global" | "function" | "never"]>;

	/**
	 * Rule to enforce spacing around colons of switch statements.
	 *
	 * @since 4.0.0-beta.0
	 * @deprecated since 8.53.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`switch-colon-spacing`](https://eslint.style/rules/switch-colon-spacing) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/switch-colon-spacing
	 */
	"switch-colon-spacing": Linter.RuleEntry<
		[
			Partial<{
				/**
				 * @default false
				 */
				before: boolean;
				/**
				 * @default true
				 */
				after: boolean;
			}>,
		]
	>;

	/**
	 * Rule to require symbol descriptions.
	 *
	 * @since 3.4.0
	 * @see https://eslint.org/docs/latest/rules/symbol-description
	 */
	"symbol-description": Linter.RuleEntry<[]>;

	/**
	 * Rule to require or disallow spacing around embedded expressions of template strings.
	 *
	 * @since 2.0.0-rc.0
	 * @deprecated since 8.53.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`template-curly-spacing`](https://eslint.style/rules/template-curly-spacing) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/template-curly-spacing
	 */
	"template-curly-spacing": Linter.RuleEntry<["never" | "always"]>;

	/**
	 * Rule to require or disallow spacing between template tags and their literals.
	 *
	 * @since 3.15.0
	 * @deprecated since 8.53.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`template-tag-spacing`](https://eslint.style/rules/template-tag-spacing) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/template-tag-spacing
	 */
	"template-tag-spacing": Linter.RuleEntry<["never" | "always"]>;

	/**
	 * Rule to require or disallow Unicode byte order mark (BOM).
	 *
	 * @since 2.11.0
	 * @see https://eslint.org/docs/latest/rules/unicode-bom
	 */
	"unicode-bom": Linter.RuleEntry<["never" | "always"]>;

	/**
	 * Rule to require calls to `isNaN()` when checking for `NaN`.
	 *
	 * @remarks
	 * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
	 *
	 * @since 0.0.6
	 * @see https://eslint.org/docs/latest/rules/use-isnan
	 */
	"use-isnan": Linter.RuleEntry<
		[
			Partial<{
				/**
				 * @default true
				 */
				enforceForSwitchCase: boolean;
				/**
				 * @default false
				 */
				enforceForIndexOf: boolean;
			}>,
		]
	>;

	/**
	 * Rule to enforce comparing `typeof` expressions against valid strings.
	 *
	 * @remarks
	 * Recommended by ESLint, the rule was enabled in `eslint:recommended`.
	 *
	 * @since 0.5.0
	 * @see https://eslint.org/docs/latest/rules/valid-typeof
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

	/**
	 * Rule to require `var` declarations be placed at the top of their containing scope.
	 *
	 * @since 0.8.0
	 * @see https://eslint.org/docs/latest/rules/vars-on-top
	 */
	"vars-on-top": Linter.RuleEntry<[]>;

	/**
	 * Rule to require parentheses around immediate `function` invocations.
	 *
	 * @since 0.0.9
	 * @deprecated since 8.53.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`wrap-iife`](https://eslint.style/rules/wrap-iife) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/wrap-iife
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
	 * Rule to require parenthesis around regex literals.
	 *
	 * @since 0.1.0
	 * @deprecated since 8.53.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`wrap-regex`](https://eslint.style/rules/wrap-regex) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/wrap-regex
	 */
	"wrap-regex": Linter.RuleEntry<[]>;

	/**
	 * Rule to require or disallow spacing around the `*` in `yield*` expressions.
	 *
	 * @since 2.0.0-alpha-1
	 * @deprecated since 8.53.0.
	 * Formatting rules are being moved out of ESLint core.
	 * Please, use [`yield-star-spacing`](https://eslint.style/rules/yield-star-spacing) in [`@stylistic/eslint-plugin`](https://eslint.style).
	 * @see https://eslint.org/docs/latest/rules/yield-star-spacing
	 */
	"yield-star-spacing": Linter.RuleEntry<
		[
			| Partial<{
					before: boolean;
					after: boolean;
			  }>
			| "before"
			| "after"
			| "both"
			| "neither",
		]
	>;

	/**
	 * Rule to require or disallow "Yoda" conditions.
	 *
	 * @since 0.7.1
	 * @see https://eslint.org/docs/latest/rules/yoda
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
