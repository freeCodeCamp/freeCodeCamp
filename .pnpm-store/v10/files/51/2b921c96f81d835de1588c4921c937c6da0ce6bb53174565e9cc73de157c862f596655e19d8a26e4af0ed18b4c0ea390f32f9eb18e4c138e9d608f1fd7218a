import type * as PostCSS from 'postcss';
import type { GlobbyOptions } from 'globby';
import type { cosmiconfig, TransformSync as CosmiconfigTransformSync } from 'cosmiconfig';

type ConfigExtends = string | string[];

type ConfigPlugins = string | stylelint.Plugin | (string | stylelint.Plugin)[];

type ConfigIgnoreFiles = string | string[];

type ConfigRules = {
	[ruleName: string]: stylelint.ConfigRuleSettings<any, Object>;
};

type ConfigOverride = Omit<stylelint.Config, 'overrides'> & {
	files: string | string[];
	name?: string;
};

type ConfigProcessors = string[];

type DisableSettings = stylelint.ConfigRuleSettings<boolean, stylelint.DisableOptions>;

// A meta-type that returns a union over all properties of `T` whose values
// have type `U`.
// see sindresorhus/type-fest#630
type PropertyNamesOfType<T, U> = {
	[K in keyof T]-?: T[K] extends U ? K : never;
}[keyof T];

type FileCache = {
	calcHashOfConfig: (config: stylelint.Config) => void;
	hasFileChanged: (absoluteFilepath: string) => boolean;
	reconcile: () => void;
	destroy: () => void;
	removeEntry: (absoluteFilepath: string) => void;
};

type RuleFuncArgs = (string | RegExp | number | boolean | (string | RegExp)[])[];

// Note: With strict function types enabled, function signatures are checked contravariantly.
// This means that it would not be possible for rule authors to narrow the message function
// parameters to e.g. just `string`. Declaring the type for rule message functions through
// method declarations tricks TypeScript into bivariant signature checking. More details can
// be found here: https://stackoverflow.com/questions/52667959/what-is-the-purpose-of-bivariancehack-in-typescript-types.
// and in the original discussion: https://github.com/stylelint/stylelint/pull/6147#issuecomment-1155337016.
type RuleMessageFunc = {
	bivariance(...args: RuleFuncArgs): string;
}['bivariance'];

type RuleSeverityFunc = {
	bivariance(...args: RuleFuncArgs): stylelint.Severity | null;
}['bivariance'];

type RuleOptionsPossibleFunc = (value: unknown) => boolean;

type DisableReportEntry = {
	source?: string;
	ranges: stylelint.DisableReportRange[];
};

declare namespace stylelint {
	/**
	 * Rule severity.
	 */
	export type Severity = 'warning' | 'error';

	/**
	 * A Stylelint plugin.
	 */
	export type Plugin =
		| { default?: { ruleName: string; rule: Rule } }
		| { ruleName: string; rule: Rule };

	/** @internal */
	export type ConfigRuleSettings<T, O extends Object> =
		| null
		| undefined
		| NonNullable<T>
		| [NonNullable<T>]
		| [NonNullable<T>, O];

	/** @internal */
	export type DisableOptions = {
		except?: Array<StringOrRegex>;
		severity?: Severity;
	};

	type LanguageOptions = {
		syntax?: {
			atRules?: Record<
				string,
				{
					comment?: string;
					prelude?: string;
					descriptors?: Record<string, string>;
				}
			>;
			cssWideKeywords?: string[];
			properties?: Record<string, string>;
			types?: Record<string, string>;
		};
	};

	/**
	 * Configuration.
	 */
	export type Config = {
		/**
		 * Allows to extend an existing configuration. Configurations can bundle plugins, custom syntaxes,
		 * options, and configure rules. They can also extend other configurations
		 *
		 * @see [extends](https://stylelint.io/user-guide/configure/#extends)
		 */
		extends?: ConfigExtends;
		/**
		 * Custom rules or sets of custom rules built to support methodologies, toolsets,
		 * non-standard CSS features, or very specific use cases
		 *
		 * @see [plugins](https://stylelint.io/user-guide/configure/#plugins)
		 */
		plugins?: ConfigPlugins;
		pluginFunctions?: {
			[pluginName: string]: Rule;
		};
		/**
		 * A glob or array of globs to ignore specific files
		 *
		 * @default 'node_modules'
		 *
		 * @see [ignoreFiles](https://stylelint.io/user-guide/configure/#ignorefiles)
		 */
		ignoreFiles?: ConfigIgnoreFiles;
		ignorePatterns?: string;
		/**
		 * An object containing the configured rules
		 *
		 * @see [rules](https://stylelint.io/user-guide/configure/#rules)
		 */
		rules?: ConfigRules;
		/**
		 * Only register problems for rules with an "error"-level severity (ignore "warning"-level)
		 *
		 * @see [quiet](https://stylelint.io/user-guide/options/#quiet)
		 */
		quiet?: boolean;
		/**
		 * A string to specify the name of a formatter or a path to a custom formatter function
		 *
		 * @see [formatter](https://stylelint.io/user-guide/configure#formatter)
		 */
		formatter?: FormatterType | Formatter;
		/**
		 * A string to set the default severity level for all rules that do not have a severity
		 * specified in their secondary options
		 *
		 * @see [defaultSeverity](https://stylelint.io/user-guide/configure#defaultseverity)
		 */
		defaultSeverity?: Severity;
		/**
		 * A boolean value indicating if 'stylelint-disable' comments will be ignored
		 *
		 * @see [ignoreDisables](https://stylelint.io/user-guide/configure#ignoredisables)
		 */
		ignoreDisables?: boolean;
		/**
		 * Report configuration comments that don't match any lints that need to be disabled
		 *
		 * @see [reportNeedlessDisables](https://stylelint.io/user-guide/configure#reportneedlessdisables)
		 */
		reportNeedlessDisables?: DisableSettings;
		/**
		 * Report configuration comments that don't match rules that are specified in the configuration object
		 *
		 * @see [reportInvalidScopeDisables](https://stylelint.io/user-guide/configure#reportinvalidscopedisables)
		 */
		reportInvalidScopeDisables?: DisableSettings;
		/**
		 * Report configuration comments without a description
		 *
		 * @see [reportDescriptionlessDisables](https://stylelint.io/user-guide/configure#reportdescriptionlessdisables)
		 */
		reportDescriptionlessDisables?: DisableSettings;
		/**
		 * Report configuration comments that are not scoped to at least one rule
		 *
		 * @see [reportUnscopedDisables](https://stylelint.io/user-guide/configure#reportunscopeddisables)
		 */
		reportUnscopedDisables?: DisableSettings;
		/**
		 * A string to set what configuration comments like 'stylelint-disable' start with.
		 * Сan be useful when using multiple instances of Stylelint with different configurations.
		 *
		 * @see [configurationComment](https://stylelint.io/user-guide/configure#configurationcomment)
		 */
		configurationComment?: string;
		/**
		 * An array of objects to specify what subset of files to apply a configuration to
		 *
		 * @see [overrides](https://stylelint.io/user-guide/configure#overrides)
		 */
		overrides?: ConfigOverride[];
		/**
		 * Allows to specify a custom syntax to use in code
		 *
		 * @see [customSyntax](https://stylelint.io/user-guide/configure#customsyntax)
		 */
		customSyntax?: CustomSyntax;
		/**
		 * Functions that allow to hook into Stylelint's pipeline
		 *
		 * @experimental
		 *
		 * @see [processors](https://stylelint.io/user-guide/configure#processors)
		 */
		processors?: ConfigProcessors;
		languageOptions?: LanguageOptions;
		/** @internal */
		_processorFunctions?: Map<string, ReturnType<Processor>['postprocess']>;
		/**
		 * If true, Stylelint does not throw an error when the glob pattern matches no files.
		 *
		 * Should not be overridden on a per-file basis
		 *
		 * @see [allowEmptyInput](https://stylelint.io/user-guide/configure#allowemptyinput)
		 */
		allowEmptyInput?: boolean;
		/**
		 * If true, store the results of processed files so that Stylelint only operates on the changed ones.
		 *
		 * Should not be overridden on a per-file basis
		 *
		 * @see [cache](https://stylelint.io/user-guide/configure#cache)
		 */
		cache?: boolean;
		/**
		 * If true, automatically fix, where possible, problems reported by rules.
		 *
		 * Should not be overridden on a per-file basis
		 *
		 * @see [fix](https://stylelint.io/user-guide/configure#fix)
		 */
		fix?: boolean;
		computeEditInfo?: boolean;
		/**
		 * Force enable/disable the validation of the rules' options
		 *
		 * @default true
		 *
		 * @see [validate](https://stylelint.io/user-guide/options/#validate)
		 */
		validate?: boolean;
	};

	/** @internal */
	export type DisablePropertyName = PropertyNamesOfType<Config, DisableSettings>;

	/** @internal */
	export type CosmiconfigResult =
		| (ReturnType<CosmiconfigTransformSync> & { config: Config })
		| null;

	/** @internal */
	export type DisabledRange = {
		node: PostCSS.Node;
		start: number;
		strictStart: boolean;
		end?: number;
		strictEnd?: boolean;
		rules?: string[];
		description?: string;
	};

	/** @internal */
	export type DisabledRangeObject = {
		[ruleName: string]: DisabledRange[];
	};

	/** @internal */
	export type DisabledWarning = { line: number; rule: string };

	/** @internal */
	export type StylelintPostcssResult = {
		ruleSeverities: { [ruleName: string]: RuleSeverity };
		customMessages: { [ruleName: string]: RuleMessage };
		customUrls: { [ruleName: string]: string };
		ruleMetadata: { [ruleName: string]: Partial<RuleMeta> };
		rangesOfComputedEditInfos: Array<EditInfo['range']>;
		fixersData: { [ruleName: string]: number };
		quiet?: boolean;
		quietDeprecationWarnings?: boolean;
		disabledRanges: DisabledRangeObject;
		disabledWarnings?: DisabledWarning[];
		ignored?: boolean;
		stylelintError?: boolean;
		stylelintWarning?: boolean;
		config?: Config;
	};

	type StylelintWarningType = 'deprecation' | 'invalidOption' | 'parseError';

	/** @internal */
	export type WarningOptions = PostCSS.WarningOptions & {
		stylelintType?: StylelintWarningType;
		severity?: Severity;
		url?: string;
		rule?: string;
		fix?: EditInfo;
	};

	/** @internal */
	export type PostcssResult = PostCSS.Result & {
		stylelint: StylelintPostcssResult;
		warn(message: string, options?: WarningOptions): void;
	};

	/** @internal */
	export type Formatter = (results: LintResult[], returnValue: LinterResult) => string;

	type Formatters = {
		readonly compact: Promise<Formatter>;
		/** @deprecated */
		readonly github: Promise<Formatter>;
		readonly json: Promise<Formatter>;
		readonly string: Promise<Formatter>;
		readonly tap: Promise<Formatter>;
		readonly unix: Promise<Formatter>;
		readonly verbose: Promise<Formatter>;
	};

	/** @internal */
	export type FormatterType = keyof Formatters;

	/** @internal */
	export type CustomSyntax = string | PostCSS.Syntax;

	/**
	 * WARNING: This is an experimental feature. The API may change in the future.
	 */
	export type Processor = () => {
		name: string;
		postprocess: (result: LintResult, root?: PostCSS.Root) => void;
	};

	/** @internal */
	export type RuleMessage = string | RuleMessageFunc;

	/** @internal */
	export type RuleMessages = { [message: string]: RuleMessage };

	/** @internal */
	export type RuleOptionsPossible = boolean | number | string | RuleOptionsPossibleFunc;

	/** @internal */
	export type RuleOptions = {
		actual: unknown;
		possible?:
			| RuleOptionsPossibleFunc
			| RuleOptionsPossible[]
			| Record<string, RuleOptionsPossible[]>;
		optional?: boolean;
	};

	/** @internal */
	type RuleSeverity = Severity | RuleSeverityFunc;

	/**
	 * A rule context.
	 */
	export type RuleContext = {
		configurationComment?: string | undefined;
		fix?: boolean | undefined;
		newline?: string | undefined;
		/** @internal */
		lexer?: unknown | undefined;
	};

	/** @internal */
	export type RuleBase<P = any, S = any> = (
		primaryOption: P,
		secondaryOptions: S,
		context: RuleContext,
	) => (root: PostCSS.Root, result: PostcssResult) => Promise<void> | void;

	/** @internal */
	export type RuleMeta = {
		url: string;
		deprecated?: boolean;
		fixable?: boolean;
	};

	/** @internal */
	export type Range = {
		start: Position;
		end: Position;
	};

	/**
	 * A rule.
	 */
	export type Rule<P = any, S = any, M = RuleMessages> = RuleBase<P, S> & {
		ruleName: string;
		messages: M;
		primaryOptionArray?: boolean;
		meta?: RuleMeta;
	};

	type StringOrRegex = string | RegExp;
	type OneOrMany<S> = S | S[];
	type Primary = number | true | OneOrMany<StringOrRegex> | Record<string, any>;
	type Secondary = Record<string, any>;

	// see sindresorhus/type-fest#821
	type Messages = {
		[key in `expected${string}` | `rejected${string}`]: RuleMessage;
	};

	type ExpectedMessage<T extends unknown[]> = { expected: (...args: T) => string };
	type RejectedMessage<T extends unknown[]> = { rejected: (...args: T) => string };
	type AutofixMessage = ExpectedMessage<[actual: string, expected: string]>;
	type PatternMessage = ExpectedMessage<[input: string, pattern: StringOrRegex]>;
	type MaximumMessage = ExpectedMessage<[selector: string, maximum: number]>;

	type CoreRule<
		P extends Primary,
		S extends Secondary = Secondary,
		M extends Messages = Messages,
	> = Rule<P, S, M>;
	type NotationRule<P extends string, S extends object = {}> = CoreRule<
		P,
		S,
		ExpectedMessage<[primary: P]>
	>;
	type PatternRule<S extends object = {}> = CoreRule<StringOrRegex, S, PatternMessage>;
	type MaxRule<S extends object = {}> = CoreRule<number, S, MaximumMessage>;

	/** @internal */
	export type CoreRules = {
		'alpha-value-notation': CoreRule<
			'number' | 'percentage',
			{ exceptProperties: OneOrMany<StringOrRegex> },
			AutofixMessage
		>;
		'annotation-no-unknown': CoreRule<
			true,
			{ ignoreAnnotations: OneOrMany<StringOrRegex> },
			RejectedMessage<[annotation: string]>
		>;
		'at-rule-allowed-list': CoreRule<OneOrMany<string>, {}, RejectedMessage<[atRule: string]>>;
		'at-rule-descriptor-no-unknown': CoreRule<
			true,
			{},
			RejectedMessage<[atRule: string, descriptor: string]>
		>;
		'at-rule-descriptor-value-no-unknown': CoreRule<
			true,
			{},
			RejectedMessage<[descriptor: string, value: string]>
		>;
		'at-rule-disallowed-list': CoreRule<OneOrMany<string>, {}, RejectedMessage<[atRule: string]>>;
		'at-rule-empty-line-before': CoreRule<
			'always' | 'never',
			{
				except: OneOrMany<
					| 'after-same-name'
					| 'inside-block'
					| 'blockless-after-same-name-blockless'
					| 'blockless-after-blockless'
					| 'first-nested'
				>;
				ignore: OneOrMany<
					| 'after-comment'
					| 'first-nested'
					| 'inside-block'
					| 'blockless-after-same-name-blockless'
					| 'blockless-after-blockless'
				>;
				ignoreAtRules: OneOrMany<StringOrRegex>;
			}
		>;
		'at-rule-no-deprecated': CoreRule<
			true,
			{ ignoreAtRules: OneOrMany<StringOrRegex> },
			RejectedMessage<[atRule: string]>
		>;
		'at-rule-no-unknown': CoreRule<
			true,
			{ ignoreAtRules: OneOrMany<StringOrRegex> },
			RejectedMessage<[atRule: string]>
		>;
		'at-rule-no-vendor-prefix': CoreRule<true, {}, RejectedMessage<[atRule: string]>>;
		'at-rule-prelude-no-invalid': CoreRule<
			true,
			{ ignoreAtRules: OneOrMany<StringOrRegex> },
			RejectedMessage<[atRule: string, prelude: string]>
		>;
		'at-rule-property-required-list': CoreRule<
			Record<string, OneOrMany<string>>,
			{},
			ExpectedMessage<[atRule: string, property: string] | [atRule: string, descriptor: string]>
		>;
		'block-no-empty': CoreRule<true, { ignore: OneOrMany<'comments'> }>;
		'block-no-redundant-nested-style-rules': CoreRule<true>;
		'color-function-alias-notation': CoreRule<'with-alpha' | 'without-alpha', {}, AutofixMessage>;
		'color-function-notation': CoreRule<
			'modern' | 'legacy',
			{ ignore: OneOrMany<'with-var-inside'> }
		>;
		'color-hex-alpha': CoreRule<
			'always' | 'never',
			{},
			ExpectedMessage<[hex: string]> & RejectedMessage<[hex: string]>
		>;
		'color-hex-length': CoreRule<'short' | 'long', {}, AutofixMessage>;
		'color-named': CoreRule<
			'never' | 'always-where-possible',
			{ ignoreProperties: OneOrMany<StringOrRegex>; ignore: OneOrMany<'inside-function'> },
			AutofixMessage & RejectedMessage<[keyword: string]>
		>;
		'color-no-hex': CoreRule<true, {}, RejectedMessage<[hex: string]>>;
		'color-no-invalid-hex': CoreRule<true, {}, RejectedMessage<[hex: string]>>;
		'comment-empty-line-before': CoreRule<
			'always' | 'never',
			{
				except: OneOrMany<'first-nested'>;
				ignore: OneOrMany<'stylelint-commands' | 'after-comment'>;
				ignoreComments: OneOrMany<StringOrRegex>;
			}
		>;
		'comment-no-empty': CoreRule<true>;
		'comment-pattern': CoreRule<StringOrRegex, {}, ExpectedMessage<[pattern: StringOrRegex]>>;
		'comment-whitespace-inside': CoreRule<'always' | 'never'>;
		'comment-word-disallowed-list': CoreRule<
			OneOrMany<StringOrRegex>,
			{},
			RejectedMessage<[pattern: StringOrRegex]>
		>;
		'container-name-pattern': PatternRule;
		'custom-media-pattern': PatternRule;
		'custom-property-empty-line-before': CoreRule<
			'always' | 'never',
			{
				except: OneOrMany<'after-comment' | 'after-custom-property' | 'first-nested'>;
				ignore: OneOrMany<
					'after-comment' | 'after-custom-property' | 'first-nested' | 'inside-single-line-block'
				>;
			}
		>;
		'custom-property-no-missing-var-function': CoreRule<
			true,
			{},
			RejectedMessage<[property: string]>
		>;
		'custom-property-pattern': PatternRule;
		'declaration-block-no-duplicate-custom-properties': CoreRule<
			true,
			{ ignoreProperties: OneOrMany<StringOrRegex> },
			RejectedMessage<[property: string]>
		>;
		'declaration-block-no-duplicate-properties': CoreRule<
			true,
			{
				ignore: OneOrMany<
					| 'consecutive-duplicates'
					| 'consecutive-duplicates-with-different-values'
					| 'consecutive-duplicates-with-different-syntaxes'
					| 'consecutive-duplicates-with-same-prefixless-values'
				>;
				ignoreProperties: OneOrMany<StringOrRegex>;
			},
			RejectedMessage<[property: string]>
		>;
		'rule-nesting-at-rule-required-list': CoreRule<
			OneOrMany<StringOrRegex>,
			{},
			ExpectedMessage<[patterns: StringOrRegex[]]>
		>;
		'declaration-block-no-redundant-longhand-properties': CoreRule<
			true,
			{
				ignoreShorthands: OneOrMany<StringOrRegex>;
				ignoreLonghands: OneOrMany<string>;
			},
			ExpectedMessage<[property: string]>
		>;
		'declaration-block-no-shorthand-property-overrides': CoreRule<
			true,
			{},
			RejectedMessage<[shorthand: string, property: string]>
		>;
		'declaration-block-single-line-max-declarations': CoreRule<
			number,
			{},
			ExpectedMessage<[maximum: number]>
		>;
		'declaration-empty-line-before': CoreRule<
			'always' | 'never',
			{
				except: OneOrMany<'first-nested' | 'after-comment' | 'after-declaration'>;
				ignore: OneOrMany<
					'after-comment' | 'after-declaration' | 'first-nested' | 'inside-single-line-block'
				>;
			}
		>;
		'declaration-no-important': CoreRule<true>;
		'declaration-property-max-values': CoreRule<
			Record<string, number>,
			{},
			ExpectedMessage<[property: string, maximum: number]>
		>;
		'declaration-property-unit-allowed-list': CoreRule<
			Record<string, OneOrMany<string>>,
			{ ignore: OneOrMany<'inside-function'> },
			RejectedMessage<[property: string, unit: string]>
		>;
		'declaration-property-unit-disallowed-list': CoreRule<
			Record<string, OneOrMany<string>>,
			{},
			RejectedMessage<[property: string, unit: string]>
		>;
		'declaration-property-value-allowed-list': CoreRule<
			Record<string, OneOrMany<StringOrRegex>>,
			{},
			RejectedMessage<[property: string, value: string]>
		>;
		'declaration-property-value-disallowed-list': CoreRule<
			Record<string, OneOrMany<StringOrRegex>>,
			{},
			RejectedMessage<[property: string, value: string]>
		>;
		'declaration-property-value-keyword-no-deprecated': CoreRule<
			true,
			{ ignoreKeywords: OneOrMany<StringOrRegex> },
			AutofixMessage & { rejected: (property: string, keyword: string) => string }
		>;
		'declaration-property-value-no-unknown': CoreRule<
			true,
			{
				ignoreProperties: Record<string, OneOrMany<StringOrRegex>>;
				propertiesSyntax: Record<string, string>;
				typesSyntax: Record<string, string>;
			},
			RejectedMessage<[property: string, value: string]> & {
				rejectedParseError: (property: string, value: string) => string;
			}
		>;
		'font-family-name-quotes': CoreRule<
			'always-where-required' | 'always-where-recommended' | 'always-unless-keyword',
			{},
			ExpectedMessage<[name: string]> & RejectedMessage<[name: string]>
		>;
		'font-family-no-duplicate-names': CoreRule<
			true,
			{ ignoreFontFamilyNames: OneOrMany<StringOrRegex> },
			RejectedMessage<[name: string]>
		>;
		'font-family-no-missing-generic-family-keyword': CoreRule<
			true,
			{ ignoreFontFamilies: OneOrMany<StringOrRegex> }
		>;
		'font-weight-notation': CoreRule<
			'numeric' | 'named-where-possible',
			{ ignore: OneOrMany<'relative'> }
		>;
		'function-allowed-list': CoreRule<
			OneOrMany<StringOrRegex>,
			{ exceptWithoutPropertyFallback: OneOrMany<StringOrRegex> },
			RejectedMessage<[name: string]>
		>;
		'function-calc-no-unspaced-operator': CoreRule<
			true,
			{},
			{
				expectedAfter: (operator: string) => string;
				expectedBefore: (operator: string) => string;
			}
		>;
		'function-disallowed-list': CoreRule<
			OneOrMany<StringOrRegex>,
			{},
			RejectedMessage<[name: string]>
		>;
		'function-linear-gradient-no-nonstandard-direction': CoreRule<true>;
		'function-name-case': CoreRule<
			'lower' | 'upper',
			{ ignoreFunctions: OneOrMany<StringOrRegex> },
			AutofixMessage
		>;
		'function-no-unknown': CoreRule<
			true,
			{ ignoreFunctions: OneOrMany<StringOrRegex> },
			RejectedMessage<[name: string]>
		>;
		'function-url-no-scheme-relative': CoreRule<true>;
		'function-url-quotes': CoreRule<'always' | 'never', { except: OneOrMany<'empty'> }>;
		'function-url-scheme-allowed-list': CoreRule<
			OneOrMany<StringOrRegex>,
			{},
			RejectedMessage<[scheme: string]>
		>;
		'function-url-scheme-disallowed-list': CoreRule<
			OneOrMany<StringOrRegex>,
			{},
			RejectedMessage<[scheme: string]>
		>;
		'hue-degree-notation': CoreRule<'angle' | 'number', {}, AutofixMessage>;
		'import-notation': CoreRule<'string' | 'url', {}, AutofixMessage>;
		'keyframe-block-no-duplicate-selectors': CoreRule<
			true,
			{},
			RejectedMessage<[selector: string]>
		>;
		'keyframe-declaration-no-important': CoreRule<true>;
		'keyframe-selector-notation': CoreRule<
			'keyword' | 'percentage' | 'percentage-unless-within-keyword-only-block',
			{},
			AutofixMessage
		>;
		'keyframes-name-pattern': PatternRule;
		'layer-name-pattern': PatternRule;
		'length-zero-no-unit': CoreRule<
			true,
			{
				ignore: OneOrMany<'custom-properties'>;
				ignoreFunctions: OneOrMany<StringOrRegex>;
				ignorePreludeOfAtRules: OneOrMany<StringOrRegex>;
			}
		>;
		'lightness-notation': CoreRule<'percentage' | 'number', {}, AutofixMessage>;
		'max-nesting-depth': CoreRule<
			number,
			{
				ignore: OneOrMany<'blockless-at-rules' | 'pseudo-classes'>;
				ignoreAtRules: OneOrMany<StringOrRegex>;
				ignoreRules: OneOrMany<StringOrRegex>;
				ignorePseudoClasses: OneOrMany<StringOrRegex>;
			},
			ExpectedMessage<[depth: number]>
		>;
		'media-feature-name-allowed-list': CoreRule<
			OneOrMany<StringOrRegex>,
			{},
			RejectedMessage<[name: string]>
		>;
		'media-feature-name-disallowed-list': CoreRule<
			OneOrMany<StringOrRegex>,
			{},
			RejectedMessage<[name: string]>
		>;
		'media-feature-name-no-unknown': CoreRule<
			true,
			{ ignoreMediaFeatureNames: OneOrMany<StringOrRegex> },
			RejectedMessage<[name: string]>
		>;
		'media-feature-name-no-vendor-prefix': CoreRule<true>;
		'media-feature-name-unit-allowed-list': CoreRule<
			Record<string, OneOrMany<string>>,
			{},
			RejectedMessage<[unit: string, name: string]>
		>;
		'media-feature-name-value-allowed-list': CoreRule<
			Record<string, OneOrMany<StringOrRegex>>,
			{},
			RejectedMessage<[name: string, value: string]>
		>;
		'media-feature-name-value-no-unknown': CoreRule<
			true,
			{},
			RejectedMessage<[name: string, value: string]>
		>;
		'media-feature-range-notation': NotationRule<
			'prefix' | 'context',
			{ except: OneOrMany<'exact-value'> }
		>;
		'media-query-no-invalid': CoreRule<
			true,
			{ ignoreFunctions: OneOrMany<StringOrRegex> },
			RejectedMessage<[query: string, reason: string]>
		>;
		'media-type-no-deprecated': CoreRule<
			true,
			{ ignoreMediaTypes: OneOrMany<StringOrRegex> },
			RejectedMessage<[name: string]>
		>;
		'named-grid-areas-no-invalid': CoreRule<true>;
		'nesting-selector-no-missing-scoping-root': CoreRule<
			true,
			{ ignoreAtRules: OneOrMany<StringOrRegex> }
		>;
		'no-descending-specificity': CoreRule<
			true,
			{ ignore: OneOrMany<'selectors-within-list'> },
			ExpectedMessage<[selector: string, selector: string, line: number]>
		>;
		'no-duplicate-at-import-rules': CoreRule<true, {}, RejectedMessage<[url: string]>>;
		'no-duplicate-selectors': CoreRule<
			true,
			{ disallowInList: boolean },
			RejectedMessage<[selector: string, line: number]>
		>;
		'no-empty-source': CoreRule<true>;
		'no-invalid-double-slash-comments': CoreRule<true>;
		'no-invalid-position-at-import-rule': CoreRule<
			true,
			{ ignoreAtRules: OneOrMany<StringOrRegex> }
		>;
		'no-invalid-position-declaration': CoreRule<true, { ignoreAtRules: OneOrMany<StringOrRegex> }>;
		'no-irregular-whitespace': CoreRule<true>;
		'no-unknown-animations': CoreRule<true, {}, RejectedMessage<[name: string]>>;
		'no-unknown-custom-media': CoreRule<true, {}, RejectedMessage<[name: string]>>;
		'no-unknown-custom-properties': CoreRule<true, {}, RejectedMessage<[property: string]>>;
		'number-max-precision': CoreRule<
			number,
			{
				ignoreProperties: OneOrMany<StringOrRegex>;
				ignoreUnits: OneOrMany<StringOrRegex>;
				insideFunctions: Record<string, number>;
			},
			AutofixMessage
		>;
		'property-allowed-list': CoreRule<
			OneOrMany<StringOrRegex>,
			{},
			RejectedMessage<[property: string]>
		>;
		'property-disallowed-list': CoreRule<
			OneOrMany<StringOrRegex>,
			{},
			RejectedMessage<[property: string]>
		>;
		'property-no-deprecated': CoreRule<
			true,
			{
				ignoreProperties: OneOrMany<StringOrRegex>;
			},
			AutofixMessage & RejectedMessage<[property: string]>
		>;
		'property-no-unknown': CoreRule<
			true,
			{
				checkPrefixed: boolean;
				ignoreAtRules: OneOrMany<StringOrRegex>;
				ignoreProperties: OneOrMany<StringOrRegex>;
				ignoreSelectors: OneOrMany<StringOrRegex>;
			},
			RejectedMessage<[property: string]>
		>;
		'property-no-vendor-prefix': CoreRule<
			true,
			{ ignoreProperties: OneOrMany<StringOrRegex> },
			RejectedMessage<[property: string]>
		>;
		'rule-empty-line-before': CoreRule<
			'always' | 'never' | 'always-multi-line' | 'never-multi-line',
			{
				ignore: OneOrMany<'after-comment' | 'first-nested' | 'inside-block'>;
				except: OneOrMany<
					| 'after-rule'
					| 'after-single-line-comment'
					| 'first-nested'
					| 'inside-block-and-after-rule'
					| 'inside-block'
				>;
			}
		>;
		'rule-selector-property-disallowed-list': CoreRule<
			Record<string, OneOrMany<StringOrRegex>>,
			{
				ignore: OneOrMany<'keyframe-selectors'>;
			},
			RejectedMessage<[selector: string, property: string]>
		>;
		'selector-anb-no-unmatchable': CoreRule<true, {}, RejectedMessage<[selector: string]>>;
		'selector-attribute-name-disallowed-list': CoreRule<
			OneOrMany<StringOrRegex>,
			{},
			RejectedMessage<[name: string]>
		>;
		'selector-attribute-operator-allowed-list': CoreRule<
			OneOrMany<string>,
			{},
			RejectedMessage<[operator: string]>
		>;
		'selector-attribute-operator-disallowed-list': CoreRule<
			OneOrMany<string>,
			{},
			RejectedMessage<[operator: string]>
		>;
		'selector-attribute-quotes': CoreRule<
			'always' | 'never',
			{},
			ExpectedMessage<[value: string]> & RejectedMessage<[value: string]>
		>;
		'selector-class-pattern': PatternRule<{ resolveNestedSelectors: boolean }>;
		'selector-combinator-allowed-list': CoreRule<
			OneOrMany<string>,
			{},
			RejectedMessage<[combinator: string]>
		>;
		'selector-combinator-disallowed-list': CoreRule<
			OneOrMany<string>,
			{},
			RejectedMessage<[combinator: string]>
		>;
		'selector-disallowed-list': CoreRule<
			OneOrMany<StringOrRegex>,
			{ splitList: boolean; ignore: OneOrMany<'inside-block' | 'keyframe-selectors'> },
			RejectedMessage<[selector: string]>
		>;
		'selector-id-pattern': PatternRule;
		'selector-max-attribute': MaxRule<{ ignoreAttributes: OneOrMany<StringOrRegex> }>;
		'selector-max-class': MaxRule;
		'selector-max-combinators': MaxRule;
		'selector-max-compound-selectors': MaxRule<{ ignoreSelectors: OneOrMany<StringOrRegex> }>;
		'selector-max-id': MaxRule<{
			ignoreContextFunctionalPseudoClasses: OneOrMany<StringOrRegex>;
			checkContextFunctionalPseudoClasses: OneOrMany<StringOrRegex>;
		}>;
		'selector-max-pseudo-class': MaxRule;
		'selector-max-specificity': CoreRule<
			string,
			{ ignoreSelectors: OneOrMany<StringOrRegex> },
			ExpectedMessage<[selector: string, specificity: string]>
		>;
		'selector-max-type': MaxRule<{
			ignore: OneOrMany<'descendant' | 'child' | 'compounded' | 'next-sibling' | 'custom-elements'>;
			ignoreTypes: OneOrMany<StringOrRegex>;
		}>;
		'selector-max-universal': MaxRule<{ ignoreAfterCombinators: OneOrMany<string> }>;
		'selector-nested-pattern': PatternRule<{ splitList: boolean }>;
		'selector-no-qualifying-type': CoreRule<
			true,
			{ ignore: OneOrMany<'attribute' | 'class' | 'id'> },
			RejectedMessage<[selector: string]>
		>;
		'selector-no-vendor-prefix': CoreRule<
			true,
			{ ignoreSelectors: OneOrMany<StringOrRegex> },
			RejectedMessage<[selector: string]>
		>;
		'selector-not-notation': NotationRule<'simple' | 'complex'>;
		'selector-pseudo-class-allowed-list': CoreRule<
			OneOrMany<StringOrRegex>,
			{},
			RejectedMessage<[selector: string]>
		>;
		'selector-pseudo-class-disallowed-list': CoreRule<
			OneOrMany<StringOrRegex>,
			{},
			RejectedMessage<[selector: string]>
		>;
		'selector-pseudo-class-no-unknown': CoreRule<
			true,
			{ ignorePseudoClasses: OneOrMany<StringOrRegex> },
			RejectedMessage<[selector: string]>
		>;
		'selector-pseudo-element-allowed-list': CoreRule<
			OneOrMany<StringOrRegex>,
			{},
			RejectedMessage<[selector: string]>
		>;
		'selector-pseudo-element-colon-notation': NotationRule<'single' | 'double'>;
		'selector-pseudo-element-disallowed-list': CoreRule<
			OneOrMany<StringOrRegex>,
			{},
			RejectedMessage<[selector: string]>
		>;
		'selector-pseudo-element-no-unknown': CoreRule<
			true,
			{ ignorePseudoElements: OneOrMany<StringOrRegex> },
			RejectedMessage<[selector: string]>
		>;
		'selector-type-case': CoreRule<
			'lower' | 'upper',
			{ ignoreTypes: OneOrMany<StringOrRegex> },
			AutofixMessage
		>;
		'selector-type-no-unknown': CoreRule<
			true,
			{
				ignore: OneOrMany<'custom-elements' | 'default-namespace'>;
				ignoreNamespaces: OneOrMany<StringOrRegex>;
				ignoreTypes: OneOrMany<StringOrRegex>;
			},
			RejectedMessage<[selector: string]>
		>;
		'shorthand-property-no-redundant-values': CoreRule<
			true,
			{
				ignore: OneOrMany<'four-into-three-edge-values'>;
			},
			AutofixMessage
		>;
		'string-no-newline': CoreRule<
			true,
			{ ignore: OneOrMany<'at-rule-preludes' | 'declaration-values'> }
		>;
		'syntax-string-no-invalid': CoreRule<true, {}, RejectedMessage<[component: string]>>;
		'time-min-milliseconds': CoreRule<
			number,
			{ ignore: OneOrMany<'delay'> },
			ExpectedMessage<[ms: number]>
		>;
		'unit-allowed-list': CoreRule<
			OneOrMany<string>,
			{
				ignoreFunctions: OneOrMany<StringOrRegex>;
				ignoreProperties: Record<string, OneOrMany<StringOrRegex>>;
			},
			RejectedMessage<[unit: string]>
		>;
		'unit-disallowed-list': CoreRule<
			OneOrMany<string>,
			{
				ignoreFunctions: OneOrMany<StringOrRegex>;
				ignoreProperties: Record<string, OneOrMany<StringOrRegex>>;
				ignoreMediaFeatureNames: Record<string, OneOrMany<StringOrRegex>>;
			},
			RejectedMessage<[unit: string]>
		>;
		'unit-no-unknown': CoreRule<
			true,
			{
				ignoreUnits: OneOrMany<StringOrRegex>;
				ignoreFunctions: OneOrMany<StringOrRegex>;
			},
			RejectedMessage<[unit: string]>
		>;
		'value-keyword-case': CoreRule<
			'lower' | 'upper',
			{
				ignoreProperties: OneOrMany<StringOrRegex>;
				ignoreKeywords: OneOrMany<StringOrRegex>;
				ignoreFunctions: OneOrMany<StringOrRegex>;
				camelCaseSvgKeywords: boolean;
			},
			AutofixMessage
		>;
		'value-no-vendor-prefix': CoreRule<
			true,
			{ ignoreValues: OneOrMany<StringOrRegex> },
			RejectedMessage<[value: string]>
		>;
	};

	/** @internal */
	export type GetPostcssOptions = {
		code?: string;
		codeFilename?: string;
		filePath?: string;
		customSyntax?: CustomSyntax;
	};

	/** @internal */
	export type GetLintSourceOptions = GetPostcssOptions & {
		existingPostcssResult?: PostCSS.Result;
		cache?: boolean;
	};

	/**
	 * Linter options.
	 */
	export type LinterOptions = {
		files?: OneOrMany<string>;
		globbyOptions?: GlobbyOptions;
		cache?: boolean;
		cacheLocation?: string;
		cacheStrategy?: string;
		code?: string;
		codeFilename?: string;
		config?: Config;
		configFile?: string;
		configBasedir?: string;
		/**
		 * The working directory to resolve files from. Defaults to the
		 * current working directory.
		 */
		cwd?: string;
		ignoreDisables?: boolean;
		ignorePath?: OneOrMany<string>;
		ignorePattern?: string[];
		reportDescriptionlessDisables?: boolean;
		reportNeedlessDisables?: boolean;
		reportInvalidScopeDisables?: boolean;
		reportUnscopedDisables?: boolean;
		maxWarnings?: number;
		customSyntax?: CustomSyntax;
		/** @internal */
		_defaultFormatter?: FormatterType;
		formatter?: FormatterType | Formatter;
		disableDefaultIgnores?: boolean;
		fix?: boolean | FixMode;
		computeEditInfo?: boolean;
		allowEmptyInput?: boolean;
		quiet?: boolean;
		quietDeprecationWarnings?: boolean;
		validate?: boolean;
		/** @experimental */
		suppressAll?: boolean;
		/** @experimental */
		suppressLocation?: string;
		/** @experimental */
		suppressRule?: string[];
	};

	/** @internal */
	export type FixMode = 'lax' | 'strict';

	/**
	 * @internal
	 *
	 * file path -> rule name -> { count: number }
	 */
	export type SuppressedProblems = Map<string, Map<string, { count: number }>>;

	/**
	 * A CSS syntax error.
	 */
	export type CssSyntaxError = {
		file?: string;
		input: {
			column: number;
			file?: string;
			line: number;
			source: string;
		};
		/**
		 * The line of the inclusive start position of the error.
		 */
		line: number;
		/**
		 * The column of the inclusive start position of the error.
		 */
		column: number;
		/**
		 * The line of the exclusive end position of the error.
		 */
		endLine?: number;
		/**
		 * The column of the exclusive end position of the error.
		 */
		endColumn?: number;
		message: string;
		name: string;
		reason: string;
		source: string;
	};

	export type EditInfo = {
		/**
		 * The pair of 0-based indices in source code text to remove.
		 */
		range: [number, number];
		/**
		 * The text to add.
		 */
		text: string;
	};

	/**
	 * A lint warning.
	 */
	export type Warning = {
		/**
		 * The line of the inclusive start position of the warning.
		 */
		line: number;
		/**
		 * The column of the inclusive start position of the warning.
		 */
		column: number;
		/**
		 * The line of the exclusive end position of the warning.
		 */
		endLine?: number;
		/**
		 * The column of the exclusive end position of the warning.
		 */
		endColumn?: number;
		/**
		 * The `EditInfo` object of autofix. This property is undefined if this message is not fixable.
		 */
		fix?: EditInfo;
		rule: string;
		severity: Severity;
		text: string;
		url?: string;
		stylelintType?: StylelintWarningType;
	};

	/**
	 * A lint result.
	 */
	export type LintResult = {
		source?: string;
		deprecations: {
			text: string;
			reference?: string;
		}[];
		invalidOptionWarnings: {
			text: string;
		}[];
		parseErrors: (PostCSS.Warning & {
			stylelintType: Extract<StylelintWarningType, 'parseError'>;
		})[];
		errored?: boolean;
		warnings: Warning[];
		ignored?: boolean;
		/**
		 * Internal use only. Do not use or rely on this property. It may
		 * change at any time.
		 * @internal
		 */
		_postcssResult?: PostcssResult;
	};

	/** @internal */
	export type DisableReportRange = {
		rule: string;
		start: number;
		end?: number;
	};

	/**
	 * A linter result.
	 */
	export type LinterResult = {
		/**
		 * The working directory from which the linter was run when the
		 * results were generated.
		 */
		cwd: string;
		results: LintResult[];
		errored: boolean;
		/**
		 * @deprecated Use `report` for the formatted problems, or use `code`
		 *   for the autofixed code instead. This will be removed in the next major version.
		 */
		output: string;
		/** @internal To show the deprecation warning. */
		_output?: string;
		/** @internal To show the deprecation warning. */
		_outputWarned?: boolean;
		/**
		 * A string that contains the formatted problems.
		 */
		report: string;
		/**
		 * A string that contains the autofixed code, if the `fix` option is set to `true`
		 * and the `code` option is provided.
		 */
		code?: string;
		maxWarningsExceeded?: {
			maxWarnings: number;
			foundWarnings: number;
		};
		reportedDisables: DisableOptionsReport;
		descriptionlessDisables?: DisableOptionsReport;
		needlessDisables?: DisableOptionsReport;
		invalidScopeDisables?: DisableOptionsReport;
		/**
		 * Each rule metadata by name.
		 */
		ruleMetadata: { [ruleName: string]: Partial<RuleMeta> };
	};

	type Position = {
		line: number;
		column: number;
	};

	export type FixCallback = () => void | undefined | never;

	export type FixObject = {
		apply?: FixCallback;
		node?: PostCSS.Node;
	};

	/**
	 * A lint problem.
	 */
	export type Problem = {
		ruleName: string;
		result: PostcssResult;
		message: RuleMessage;
		messageArgs?: Parameters<RuleMessageFunc> | undefined;
		node: PostCSS.Node;
		/**
		 * The inclusive start index of the problem, relative to the node's
		 * source text.
		 */
		index?: number;
		/**
		 * The exclusive end index of the problem, relative to the node's
		 * source text.
		 */
		endIndex?: number;
		/**
		 * The inclusive start position of the problem, relative to the
		 * node's source text. If provided, this will be used instead of
		 * `index`.
		 */
		start?: Position;
		/**
		 * The exclusive end position of the problem, relative to the
		 * node's source text. If provided, this will be used instead of
		 * `endIndex`.
		 */
		end?: Position;
		word?: string;
		/** @deprecated */
		line?: number;
		/**
		 * Optional severity override for the problem.
		 */
		severity?: RuleSeverity;
		fix?: FixCallback | FixObject;
	};

	/** @internal */
	export type ShorthandProperties =
		| 'animation'
		| 'background'
		| 'border'
		| 'border-block'
		| 'border-block-end'
		| 'border-block-start'
		| 'border-inline'
		| 'border-inline-end'
		| 'border-inline-start'
		| 'border-bottom'
		| 'border-color'
		| 'border-image'
		| 'border-inline-end'
		| 'border-inline-start'
		| 'border-left'
		| 'border-radius'
		| 'border-right'
		| 'border-style'
		| 'border-top'
		| 'border-width'
		| 'column-rule'
		| 'columns'
		| 'flex'
		| 'flex-flow'
		| 'font'
		| 'font-synthesis'
		| 'font-variant'
		| 'gap'
		| 'grid'
		| 'grid-area'
		| 'grid-column'
		| 'grid-gap'
		| 'grid-row'
		| 'grid-template'
		| 'inset'
		| 'inset-block'
		| 'inset-inline'
		| 'list-style'
		| 'margin'
		| 'margin-block'
		| 'margin-inline'
		| 'mask'
		| 'outline'
		| 'overflow'
		| 'overscroll-behavior'
		| 'padding'
		| 'padding-block'
		| 'padding-inline'
		| 'place-content'
		| 'place-items'
		| 'place-self'
		| 'scroll-margin'
		| 'scroll-margin-block'
		| 'scroll-margin-inline'
		| 'scroll-padding'
		| 'scroll-padding-block'
		| 'scroll-padding-inline'
		| 'text-decoration'
		| 'text-emphasis'
		| 'transition';

	/** @internal */
	export type LonghandSubPropertiesOfShorthandProperties = ReadonlyMap<
		ShorthandProperties,
		ReadonlySet<string>
	>;

	/**
	 * Utility functions.
	 */
	export type Utils = {
		/**
		 * Report a problem.
		 *
		 * This function accounts for `disabledRanges` attached to the result.
		 * That is, if the reported problem is within a disabledRange,
		 * it is ignored. Otherwise, it is attached to the result as a
		 * postcss warning.
		 *
		 * It also accounts for the rule's severity.
		 *
		 * You *must* pass *either* a node or a line number.
		 *
		 * @param problem - A problem
		 */
		report: (problem: Problem) => void;

		/**
		 * Given an object of problem messages, return another
		 * that provides the same messages postfixed with the rule
		 * that has been violated.
		 *
		 * @param ruleName - A rule name
		 * @param messages - An object whose keys are message identifiers
		 *   and values are either message strings or functions that return message strings
		 * @returns New message object, whose messages will be marked with the rule name
		 */
		ruleMessages: <T extends RuleMessages, R extends { [K in keyof T]: T[K] }>(
			ruleName: string,
			messages: T,
		) => R;

		/**
		 * Validate a rule's options.
		 *
		 * See existing rules for examples.
		 *
		 * @param result - PostCSS result
		 * @param ruleName - A rule name
		 * @param optionDescriptions - Each optionDescription can have the following properties:
		 *   - `actual` (required): the actual passed option value or object.
		 *   - `possible` (required): a schema representation of what values are
		 *      valid for those options. `possible` should be an object if the
		 *      options are an object, with corresponding keys; if the options are not an
		 *      object, `possible` isn't, either. All `possible` value representations
		 *      should be **arrays of either values or functions**. Values are === checked
		 *      against `actual`. Functions are fed `actual` as an argument and their
		 *      return value is interpreted: truthy = valid, falsy = invalid.
		 *    - `optional` (optional): If this is `true`, `actual` can be undefined.
		 * @returns Whether or not the options are valid (`true` = valid)
		 */
		validateOptions: (
			result: PostcssResult,
			ruleName: string,
			...optionDescriptions: RuleOptions[]
		) => boolean;

		/**
		 * Useful for third-party code (e.g. plugins) to run a PostCSS Root
		 * against a specific rule and do something with the warnings.
		 */
		checkAgainstRule: <T, O extends Object>(
			options: {
				ruleName: string;
				ruleSettings: ConfigRuleSettings<T, O>;
				root: PostCSS.Root;
				result?: PostcssResult;
				context?: RuleContext;
			},
			callback: (warning: PostCSS.Warning) => void,
		) => Promise<void>;
	};

	/**
	 * Internal use only. Do not use or rely on this type. It may change at
	 * any time.
	 * @internal
	 */
	export type InternalApi = {
		_options: LinterOptions & { cwd: string };
		_extendExplorer: ReturnType<typeof cosmiconfig>;
		_specifiedConfigCache: Map<Config, Map<string, CosmiconfigResult>>;
		_postcssResultCache: Map<string, PostCSS.Result>;
		_fileCache: FileCache;
	};

	/** @internal */
	export type DisableOptionsReport = DisableReportEntry[];

	/** @internal */
	export type PostcssPluginOptions = Omit<LinterOptions, 'customSyntax'> | Config;

	/**
	 * The Stylelint public API.
	 */
	export type PublicApi = PostCSS.PluginCreator<PostcssPluginOptions> & {
		/**
		 * Runs Stylelint with the given options and returns a Promise that
		 * resolves to the results.
		 *
		 * @param options - A lint options object
		 * @returns A lint result
		 */
		lint: (options: LinterOptions) => Promise<LinterResult>;

		/**
		 * Available rules.
		 */
		rules: { readonly [name in keyof CoreRules]: Promise<CoreRules[name]> };

		/**
		 * Result report formatters by name.
		 */
		formatters: Formatters;

		/**
		 * Creates a Stylelint plugin.
		 */
		createPlugin: (ruleName: string, rule: Rule) => Plugin;

		/**
		 * The Stylelint "internal API" is passed among functions
		 * so that methods on a Stylelint instance can invoke
		 * each other while sharing options and caches.
		 *
		 * @internal
		 */
		_createLinter: (options: LinterOptions) => InternalApi;

		/**
		 * Resolves the effective configuration for a given file. Resolves to
		 * `undefined` if no config is found.
		 *
		 * @param filePath - The path to the file to get the config for.
		 * @param options - The options to use when creating the Stylelint instance.
		 * @returns A resolved config or `undefined`.
		 */
		resolveConfig: (
			filePath: string,
			options?: Pick<LinterOptions, 'cwd' | 'config' | 'configBasedir' | 'configFile'>,
		) => Promise<Config | undefined>;

		/**
		 * Utility functions.
		 */
		utils: Utils;

		/**
		 * Reference objects.
		 */
		reference: {
			longhandSubPropertiesOfShorthandProperties: LonghandSubPropertiesOfShorthandProperties;
		};
	};
}

declare const stylelint: stylelint.PublicApi;

export = stylelint;
