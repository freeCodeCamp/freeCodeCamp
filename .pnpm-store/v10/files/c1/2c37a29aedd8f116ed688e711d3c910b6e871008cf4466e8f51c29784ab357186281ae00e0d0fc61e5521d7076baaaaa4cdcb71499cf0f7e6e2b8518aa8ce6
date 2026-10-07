import type {
  $OmitArrayKeys,
  $PreservedValue,
  $Dictionary,
  $SpecialObject,
  $StringKeyPathToRecord,
  $NoInfer,
  $Prune,
  $Turtles,
} from './helpers.js';
import type {
  TypeOptions,
  Namespace,
  FlatNamespace,
  DefaultNamespace,
  TOptions,
  TOptionsBase,
} from './options.js';

/** @todo consider to replace {} with Record<string, never> */

// Type Options
type _ReturnObjects = TypeOptions['returnObjects'];
type _ReturnEmptyString = TypeOptions['returnEmptyString'];
type _ReturnNull = TypeOptions['returnNull'];
type _KeySeparator = TypeOptions['keySeparator'];
type _NsSeparator = TypeOptions['nsSeparator'];
type _PluralSeparator = TypeOptions['pluralSeparator'];
type _ContextSeparator = TypeOptions['contextSeparator'];
type _FallbackNamespace = TypeOptions['fallbackNS'];
type _Resources = TypeOptions['resources'];
type _CompatibilityJSON = TypeOptions['compatibilityJSON'];
type _InterpolationPrefix = TypeOptions['interpolationPrefix'];
type _InterpolationSuffix = TypeOptions['interpolationSuffix'];
type _UnescapePrefix = TypeOptions['unescapePrefix'];
type _UnescapeSuffix = TypeOptions['unescapeSuffix'];
type _StrictKeyChecks = TypeOptions['strictKeyChecks'];
type _EnableSelector = TypeOptions['enableSelector'];
type _InterpolationFormatTypeMap = TypeOptions['interpolationFormatTypeMap'];

type $IsResourcesDefined = [keyof _Resources] extends [never] ? false : true;
type $ValueIfResourcesDefined<Value, Fallback> = $IsResourcesDefined extends true
  ? Value
  : Fallback;
type $FirstNamespace<Ns extends Namespace> = Ns extends readonly any[] ? Ns[0] : Ns;

type Resources = $ValueIfResourcesDefined<_Resources, $Dictionary<string>>;

type PluralSuffix = 'zero' | 'one' | 'two' | 'few' | 'many' | 'other';

type WithOrWithoutPlural<Key> = _CompatibilityJSON extends 'v4'
  ? Key extends `${infer KeyWithoutOrdinalPlural}${_PluralSeparator}ordinal${_PluralSeparator}${PluralSuffix}`
    ? KeyWithoutOrdinalPlural | Key
    : Key extends `${infer KeyWithoutPlural}${_PluralSeparator}${PluralSuffix}`
      ? KeyWithoutPlural | Key
      : Key
  : Key;

type JoinKeys<K1, K2> = `${K1 & string}${_KeySeparator}${K2 & string}`;
type AppendNamespace<Ns, Keys> = `${Ns & string}${_NsSeparator}${Keys & string}`;

type TrimSpaces<T extends string, Acc extends string = ''> = T extends `${infer Char}${infer Rest}`
  ? Char extends ' '
    ? TrimSpaces<Rest, Acc>
    : TrimSpaces<Rest, `${Acc}${Char}`>
  : T extends ''
    ? Acc
    : never;

interface Branded<Ns extends Namespace> {
  $TFunctionBrand: $IsResourcesDefined extends true
    ? `${Ns extends readonly any[] ? Ns[0] : Ns}`
    : never;
}

/** ****************************************************
 * Build all keys and key prefixes based on Resources *
 ***************************************************** */
type KeysBuilderWithReturnObjects<Res, Key = keyof Res> = Key extends keyof Res
  ? Res[Key] extends $Dictionary | readonly unknown[]
    ?
        | JoinKeys<Key, WithOrWithoutPlural<keyof $OmitArrayKeys<Res[Key]>>>
        | JoinKeys<Key, KeysBuilderWithReturnObjects<Res[Key]>>
    : never
  : never;

type KeysBuilderWithoutReturnObjects<Res, Key = keyof $OmitArrayKeys<Res>> = Key extends keyof Res
  ? Res[Key] extends $Dictionary | readonly unknown[]
    ? JoinKeys<Key, KeysBuilderWithoutReturnObjects<Res[Key]>>
    : Key
  : never;

type KeysBuilder<Res, WithReturnObjects> = $IsResourcesDefined extends true
  ? WithReturnObjects extends true
    ? keyof Res | KeysBuilderWithReturnObjects<Res>
    : KeysBuilderWithoutReturnObjects<Res>
  : string;

type KeysWithReturnObjects = {
  [Ns in FlatNamespace]: WithOrWithoutPlural<KeysBuilder<Resources[Ns], true>>;
};
type KeysWithoutReturnObjects = {
  [Ns in FlatNamespace]: WithOrWithoutPlural<KeysBuilder<Resources[Ns], false>>;
};

type ResourceKeys<WithReturnObjects = _ReturnObjects> = WithReturnObjects extends true
  ? KeysWithReturnObjects
  : KeysWithoutReturnObjects;

/** **********************************************************************
 * Parse t function keys based on the namespace, options and key prefix *
 *********************************************************************** */
export type KeysByTOptions<TOpt extends TOptions> = TOpt['returnObjects'] extends true
  ? ResourceKeys<true>
  : ResourceKeys;

export type NsByTOptions<Ns extends Namespace, TOpt extends TOptions> = TOpt['ns'] extends Namespace
  ? TOpt['ns']
  : Ns;

type ParseKeysByKeyPrefix<Keys, KPrefix> = KPrefix extends string
  ? Keys extends `${KPrefix}${_KeySeparator}${infer Key}`
    ? Key
    : never
  : Keys;

type ParseKeysByNamespaces<Ns extends Namespace, Keys> = Ns extends readonly (infer UnionNsps)[]
  ? UnionNsps extends keyof Keys
    ? AppendNamespace<UnionNsps, Keys[UnionNsps]>
    : never
  : never;

type ParseKeysByFallbackNs<Keys extends $Dictionary> = _FallbackNamespace extends false
  ? never
  : _FallbackNamespace extends (infer UnionFallbackNs extends string)[]
    ? Keys[UnionFallbackNs]
    : Keys[_FallbackNamespace & string];

export type FilterKeysByContext<Keys, Context> = Context extends string
  ? Keys extends
      | `${infer Prefix}${_ContextSeparator}${Context}${_PluralSeparator}${PluralSuffix}`
      | `${infer Prefix}${_ContextSeparator}${Context}`
    ? Prefix
    : never
  : Keys;

export type ParseKeys<
  Ns extends Namespace = DefaultNamespace,
  TOpt extends TOptions = {},
  KPrefix = undefined,
  Keys extends $Dictionary = KeysByTOptions<TOpt>,
  ActualNS extends Namespace = NsByTOptions<Ns, TOpt>,
  Context extends TOpt['context'] = TOpt['context'],
> = $IsResourcesDefined extends true
  ? FilterKeysByContext<
      | ParseKeysByKeyPrefix<Keys[$FirstNamespace<ActualNS>], KPrefix>
      | ParseKeysByNamespaces<ActualNS, Keys>
      | ParseKeysByFallbackNs<Keys>,
      Context
    >
  : string;

/** *******************************************************
 * Parse t function return type and interpolation values *
 ******************************************************** */
type ParseActualValue<Ret> = Ret extends `${_UnescapePrefix}${infer ActualValue}${_UnescapeSuffix}`
  ? TrimSpaces<ActualValue>
  : Ret;

/** Parses interpolation entries as `[variableName, formatSpecifier | never]` tuples. */
type ParseInterpolationEntries<Ret> =
  Ret extends `${string}${_InterpolationPrefix}${infer Value}${_InterpolationSuffix}${infer Rest}`
    ?
        | (Value extends `${infer ActualValue},${infer Format}`
            ? [ParseActualValue<ActualValue>, TrimSpaces<Format>]
            : [ParseActualValue<Value>, never])
        | ParseInterpolationEntries<Rest>
    : never;

/** Extracts just the variable names (kept for backward compat with ParseInterpolationValues usage). */
type ParseInterpolationValues<Ret> = ParseInterpolationEntries<Ret>[0];

/** Built-in i18next formatter name → value type mapping. */
type _BuiltInFormatTypeMap = {
  number: number;
  currency: number;
  datetime: Date;
  relativetime: number;
  list: readonly string[];
};

/** Resolves the type for a single interpolation entry based on name and format. */
type _ResolveEntryType<Name extends string, Format> = [Format] extends [never]
  ? Name extends 'count'
    ? number
    : string
  : Format extends keyof _InterpolationFormatTypeMap
    ? _InterpolationFormatTypeMap[Format]
    : Format extends keyof _BuiltInFormatTypeMap
      ? _BuiltInFormatTypeMap[Format]
      : string;

/** Local union-to-intersection (not exported from helpers). */
type _UnionToIntersection<T> = (T extends unknown ? (k: T) => void : never) extends (
  k: infer I,
) => void
  ? I
  : never;

/** Builds a per-entry typed record from parsed interpolation entries and intersects them. */
type _InterpolationMapFromEntries<E> = _UnionToIntersection<
  E extends [infer Name extends string, infer Format]
    ? $StringKeyPathToRecord<Name, _ResolveEntryType<Name, Format>>
    : never
>;

export type InterpolationMap<Ret> = $PreservedValue<
  _InterpolationMapFromEntries<ParseInterpolationEntries<Ret>>,
  Record<string, unknown>
>;

type ParseTReturnPlural<
  Res,
  Key,
  KeyWithPlural = `${Key & string}${_PluralSeparator}${PluralSuffix}`,
> = Res[(KeyWithPlural | Key) & keyof Res];

type ParseTReturnPluralOrdinal<
  Res,
  Key,
  KeyWithOrdinalPlural = `${Key &
    string}${_PluralSeparator}ordinal${_PluralSeparator}${PluralSuffix}`,
> = Res[(KeyWithOrdinalPlural | Key) & keyof Res];

type ParseTReturnWithFallback<Key, Val> = Val extends ''
  ? _ReturnEmptyString extends true
    ? ''
    : Key
  : Val extends null
    ? _ReturnNull extends true
      ? null
      : Key
    : Val;

type ParseTReturn<Key, Res, TOpt extends TOptions = {}> = ParseTReturnWithFallback<
  Key,
  Key extends `${infer K1}${_KeySeparator}${infer RestKey}`
    ? ParseTReturn<RestKey, Res[K1 & keyof Res], TOpt>
    : // Process plurals only if count is provided inside options
      TOpt['count'] extends number
      ? TOpt['ordinal'] extends boolean
        ? ParseTReturnPluralOrdinal<Res, Key>
        : ParseTReturnPlural<Res, Key>
      : // otherwise access plain key without adding plural and ordinal suffixes
        Res extends readonly unknown[]
        ? Key extends `${infer NKey extends number}`
          ? Res[NKey]
          : never
        : Res[Key & keyof Res]
>;

type TReturnOptionalNull = _ReturnNull extends true ? null : never;
type TReturnOptionalObjects<TOpt extends { returnObjects?: unknown }> = _ReturnObjects extends true
  ? $SpecialObject | string
  : TOpt['returnObjects'] extends true
    ? $SpecialObject
    : string;
type DefaultTReturn<TOpt extends { returnObjects?: unknown }> =
  | TReturnOptionalObjects<TOpt>
  | TReturnOptionalNull;

export type KeyWithContext<Key, TOpt extends TOptions> = TOpt['context'] extends string
  ? `${Key & string}${_ContextSeparator}${TOpt['context']}`
  : Key;

export type ContextOfKey<
  Key extends string,
  Ns extends Namespace = DefaultNamespace,
  TOpt extends TOptions = {},
  KPrefix = undefined,
  Keys extends $Dictionary = KeysByTOptions<TOpt>,
  ActualNS extends Namespace = NsByTOptions<Ns, TOpt>,
  ActualKeys =
    | ParseKeysByKeyPrefix<Keys[$FirstNamespace<ActualNS>], KPrefix>
    | ParseKeysByNamespaces<ActualNS, Keys>
    | ParseKeysByFallbackNs<Keys>,
> = $IsResourcesDefined extends true
  ? Key extends ActualKeys
    ? string
    : ActualKeys extends
          | `${Key}${_ContextSeparator}${infer Context}${_PluralSeparator}${PluralSuffix}`
          | `${Key}${_ContextSeparator}${infer Context}`
      ? Context
      : never
  : string;

// helper that maps the configured fallbackNS value to the matching resources slice
type FallbackResourcesOf<FallbackNS, R> = FallbackNS extends readonly (infer FN)[]
  ? R[FN & keyof R]
  : [FallbackNS] extends [false]
    ? never
    : R[Extract<FallbackNS, keyof R> & keyof R];

/* reuse the parse helpers as top-level aliases (no nested type declarations) */
type _PrimaryParse<
  ActualKey,
  PrimaryNS extends keyof Resources,
  TOpt extends TOptions,
> = ParseTReturn<ActualKey, Resources[PrimaryNS], TOpt>;

type _FallbackParse<ActualKey, FallbackNS, TOpt extends TOptions> = [
  FallbackResourcesOf<FallbackNS, Resources>,
] extends [never]
  ? never
  : ParseTReturn<ActualKey, FallbackResourcesOf<FallbackNS, Resources>, TOpt>;

export type TFunctionReturn<
  Ns extends Namespace,
  Key,
  TOpt extends TOptions,
  ActualNS extends Namespace = NsByTOptions<Ns, TOpt>,
  ActualKey = KeyWithContext<Key, TOpt>,
> = $IsResourcesDefined extends true
  ? ActualKey extends `${infer Nsp}${_NsSeparator}${infer RestKey}`
    ? ParseTReturn<RestKey, Resources[Nsp & keyof Resources], TOpt>
    : $FirstNamespace<ActualNS> extends infer PrimaryNS
      ? [PrimaryNS] extends [keyof Resources]
        ? [_PrimaryParse<ActualKey, PrimaryNS & keyof Resources, TOpt>] extends [never]
          ? [_FallbackParse<ActualKey, _FallbackNamespace, TOpt>] extends [never]
            ? DefaultTReturn<TOpt>
            : _FallbackParse<ActualKey, _FallbackNamespace, TOpt>
          : _PrimaryParse<ActualKey, PrimaryNS & keyof Resources, TOpt>
        : never
      : never
  : DefaultTReturn<TOpt>;

export type TFunctionDetailedResult<T = string, TOpt extends TOptions = {}> = {
  /**
   * The plain used key
   */
  usedKey: string;
  /**
   * The translation result.
   */
  res: T;
  /**
   * The key with context / plural
   */
  exactUsedKey: string;
  /**
   * The used language for this translation.
   */
  usedLng: string;
  /**
   * The used namespace for this translation.
   */
  usedNS: string;
  /**
   * The parameters used for interpolation.
   */
  usedParams: InterpolationMap<T> & { count?: TOpt['count'] };
};

type TFunctionProcessReturnValue<Ret, DefaultValue> = Ret extends string | $SpecialObject | null
  ? Ret
  : [DefaultValue] extends [never]
    ? Ret
    : DefaultValue;

type TFunctionReturnOptionalDetails<Ret, TOpt extends TOptions> = TOpt['returnDetails'] extends true
  ? TFunctionDetailedResult<Ret, TOpt>
  : Ret;

type AppendKeyPrefix<Key, KPrefix> = KPrefix extends string
  ? `${KPrefix}${_KeySeparator}${Key & string}`
  : Key;

/**
 * Resolves the effective key prefix by preferring a per-call `keyPrefix` from
 * options over the interface-level `KPrefix` (set via getFixedT's 3rd argument).
 */
type EffectiveKPrefix<KPrefix, TOpt> = TOpt extends { keyPrefix: infer OptKP extends string }
  ? OptKP
  : KPrefix;

/** ************************
 * T function declaration *
 ************************* */

interface TFunctionStrict<
  Ns extends Namespace = DefaultNamespace,
  KPrefix = undefined,
> extends Branded<Ns> {
  <
    const Key extends ParseKeys<Ns, TOpt, EffectiveKPrefix<KPrefix, TOpt>> | TemplateStringsArray,
    const TOpt extends TOptions,
    Ret extends TFunctionReturn<Ns, AppendKeyPrefix<Key, EffectiveKPrefix<KPrefix, TOpt>>, TOpt>,
  >(
    key: Key | Key[],
    options?: TOpt &
      InterpolationMap<Ret> & {
        context?: Key extends string
          ? ContextOfKey<Key, Ns, TOpt, EffectiveKPrefix<KPrefix, TOpt>>
          : never;
      },
  ): TFunctionReturnOptionalDetails<TFunctionProcessReturnValue<$NoInfer<Ret>, never>, TOpt>;
  <
    const Key extends ParseKeys<Ns, TOpt, EffectiveKPrefix<KPrefix, TOpt>> | TemplateStringsArray,
    const TOpt extends TOptions,
    Ret extends TFunctionReturn<Ns, AppendKeyPrefix<Key, EffectiveKPrefix<KPrefix, TOpt>>, TOpt>,
  >(
    key: Key | Key[],
    defaultValue: string,
    options?: TOpt &
      InterpolationMap<Ret> & {
        context?: Key extends string
          ? ContextOfKey<Key, Ns, TOpt, EffectiveKPrefix<KPrefix, TOpt>>
          : never;
      },
  ): TFunctionReturnOptionalDetails<TFunctionProcessReturnValue<$NoInfer<Ret>, never>, TOpt>;
}

interface TFunctionNonStrict<
  Ns extends Namespace = DefaultNamespace,
  KPrefix = undefined,
> extends Branded<Ns> {
  <
    const Key extends ParseKeys<Ns, TOpt, EffectiveKPrefix<KPrefix, TOpt>> | TemplateStringsArray,
    const TOpt extends TOptions,
    Ret extends TFunctionReturn<Ns, AppendKeyPrefix<Key, EffectiveKPrefix<KPrefix, TOpt>>, TOpt>,
    const ActualOptions extends Omit<TOpt, 'context'> &
      InterpolationMap<Ret> & {
        context?: Key extends string
          ? ContextOfKey<Key, Ns, TOpt, EffectiveKPrefix<KPrefix, TOpt>>
          : never;
      } = TOpt &
      InterpolationMap<Ret> & {
        context?: Key extends string
          ? ContextOfKey<Key, Ns, TOpt, EffectiveKPrefix<KPrefix, TOpt>>
          : never;
      },
    DefaultValue extends string = never,
  >(
    ...args:
      | [key: Key | Key[], options?: ActualOptions]
      | [key: string | string[], options: TOpt & $Dictionary & { defaultValue: DefaultValue }]
      | [key: string | string[], defaultValue: DefaultValue, options?: TOpt & $Dictionary]
  ): TFunctionReturnOptionalDetails<TFunctionProcessReturnValue<$NoInfer<Ret>, DefaultValue>, TOpt>;
}

type TFunctionSignature<
  Ns extends Namespace = DefaultNamespace,
  KPrefix = undefined,
> = _EnableSelector extends true | 'optimize'
  ? TFunctionSelector<Ns, KPrefix, GetSource<Ns, KPrefix>>
  : _StrictKeyChecks extends true
    ? TFunctionStrict<Ns, KPrefix>
    : TFunctionNonStrict<Ns, KPrefix>;

export interface TFunction<
  Ns extends Namespace = DefaultNamespace,
  KPrefix = undefined,
> extends TFunctionSignature<Ns, KPrefix> {}

export type KeyPrefix<Ns extends Namespace> = ResourceKeys<true>[$FirstNamespace<Ns>] | undefined;

/** The raw (unfiltered) resource object for a given namespace. */
export type NsResource<Ns extends Namespace> = Ns extends readonly [keyof Resources, any, ...any]
  ? Resources[Ns[0]] & PickNamespaces<Resources, Ns[number]>
  : Resources[$FirstNamespace<Ns>];

/** A selector function that can be used as `keyPrefix` to scope `t()` to a sub-tree of the resource. */
export type KeyPrefixSelector<Ns extends Namespace> = (src: NsResource<Ns>) => object;

/**
 * The type of a selector function accepted by `t()` for a given namespace and optional key prefix.
 * Use this instead of `Parameters<TFunction<Ns>>[0]` for a stable, readable type.
 *
 * @example
 * ```ts
 * import type { SelectorParam } from 'i18next';
 *
 * interface CmpProps {
 *   i18nKey: SelectorParam<'myNamespace'>;
 * }
 * ```
 */
export type SelectorParam<Ns extends Namespace = DefaultNamespace, KPrefix = undefined> = (
  src: Select<GetSource<Ns, KPrefix>, undefined>,
) => string;

/// ////////////// ///
///  ↆ selector ↆ  ///
/// ////////////// ///

declare const $PluralBrand: unique symbol;
/** Marks a value as coming from a plural-form key, requiring `count` in the selector options. */
type PluralValue<T extends string> = T & { readonly [$PluralBrand]: typeof $PluralBrand };

declare const $SelectorKeyBrand: unique symbol;
/**
 * A branded string produced by {@link keyFromSelector}.
 * Can be passed directly to `t()` when the selector API is enabled.
 */
export type SelectorKey = string & { readonly [$SelectorKeyBrand]: typeof $SelectorKeyBrand };

/**
 * Type-safe signature for {@link keyFromSelector}.
 * Constrains the selector callback against the default namespace's resources
 * (same source that `t()` uses for selectors without explicit `ns`).
 * When resources are not defined, accepts any selector.
 */
export type KeyFromSelectorFn = <
  Ns extends Namespace = DefaultNamespace,
  KPrefix extends KeyPrefix<Ns> = undefined,
>(
  selector: (src: Select<GetSource<Ns, KPrefix>, undefined>) => any,
  opts?: { ns?: Ns; keyPrefix?: KPrefix },
) => SelectorKey;

/** Recursively strips the {@link PluralValue} brand from a type (handles nested objects for `returnObjects`). */
type DeepUnwrapPlural<T> =
  T extends PluralValue<infer U>
    ? U
    : T extends readonly any[]
      ? { [I in keyof T]: DeepUnwrapPlural<T[I]> }
      : T extends object
        ? { [K in keyof T]: DeepUnwrapPlural<T[K]> }
        : T;

type NsArg<Ns extends Namespace> = Ns[number] | readonly Ns[number][];

interface TFunctionSelector<Ns extends Namespace, KPrefix, Source> extends Branded<Ns> {
  // ── Pre-computed key(s) from keyFromSelector ────────────────────────────────
  // Accepts a branded `SelectorKey` (or array of them) produced by `keyFromSelector`.
  // Return-type precision is traded for the flexibility of decoupled key creation.
  // Placed first so that the more general selector overloads (below) are last —
  // TypeScript's `Parameters<>` utility resolves against the last call signature.
  <const Opts extends SelectorOptions<Ns[number]> = SelectorOptions<Ns[number]>>(
    key: SelectorKey | SelectorKey[],
    ...args: [options?: Opts & $Dictionary]
  ): DefaultTReturn<Opts>;

  // ── Selector(s) with explicit `ns` ───────────────────────────────────────────
  <
    Target extends ConstrainTarget<Opts>,
    const NewNs extends NsArg<Ns> & Namespace,
    const Opts extends SelectorOptions<NewNs>,
    NewSrc extends GetSource<NewNs, KPrefix>,
  >(
    selector:
      | SelectorFn<NewSrc, ApplyTarget<Target, Opts>, Opts>
      | readonly SelectorFn<NewSrc, ApplyTarget<Target, Opts>, Opts>[],
    options: Opts & InterpolationMap<Target> & { ns: NewNs },
  ): SelectorReturn<Target, Opts>;

  // ── Array of selectors with default `ns` ─────────────────────────────────────
  // Captures the selector tuple as `const Fns` so TypeScript preserves each
  // element's exact return type.  The union of return types is then extracted
  // via a distributive `infer`, which correctly handles mixed PluralValue<T> and
  // plain-string callbacks that would otherwise cause TypeScript to "lock in" the
  // type from the first element.
  <
    const Fns extends readonly ((src: Select<Source, Opts['context']>) => string | object)[],
    const Opts extends SelectorOptions<Ns[number]> = SelectorOptions<Ns[number]>,
  >(
    selectors: Fns,
    options?: Opts &
      InterpolationMap<
        DeepUnwrapPlural<Fns[number] extends (...args: any[]) => infer R ? R : never>
      >,
  ): SelectorReturn<Fns[number] extends (...args: any[]) => infer R ? R : never, Opts>;

  // ── Single selector with context — bypasses count enforcement ────────────────
  // When `context` is present in options, `Target` is derived from the
  // context-filtered source (third mapped type of FilterKeys), which does NOT
  // apply the PluralValue brand.  A separate overload avoids the circular
  // inference that would otherwise occur when `Opts['context']` sits inside the
  // conditional rest tuple of the overload below.
  <
    Target extends ConstrainTarget<Opts>,
    const NewNs extends NsArg<Ns> = Ns[number],
    const Opts extends SelectorOptions<NewNs> & { context: string } = SelectorOptions<NewNs> & {
      context: string;
    },
  >(
    selector: SelectorFn<Source, ApplyTarget<Target, Opts>, Opts>,
    options: Opts & InterpolationMap<Target>,
  ): SelectorReturn<Target, Opts>;

  // ── Single selector with defaultValue — preserves literal type of DV ────────
  // `const Opts` loses literal precision for `defaultValue` when inferred
  // through a conditional rest tuple (TypeScript limitation).  This dedicated
  // overload captures `DV` from a regular (non-conditional) parameter position,
  // preserving its literal type.  Count enforcement for plural keys is achieved
  // via a conditional intersection on the options parameter.
  <
    const Fn extends (src: Select<Source, undefined>) => ConstrainTarget<Opts>,
    const DV extends string,
    const Opts extends SelectorOptions<Ns[number]> = SelectorOptions<Ns[number]>,
  >(
    selector: Fn,
    options: Opts & { defaultValue: DV } & (ReturnType<Fn> extends PluralValue<string>
        ? { count: number }
        : {}) &
      InterpolationMap<DeepUnwrapPlural<ReturnType<Fn>>>,
  ): SelectorReturn<ReturnType<Fn>, Opts, DV>;

  // ── Single selector without context — enforces count for plural keys ──────────
  // Uses `const Fn` to capture the selector's exact return type independently of
  // `Opts`, breaking the circular dependency between `Target` inference and the
  // conditional rest tuple.  `ReturnType<Fn>` drives both the plural check and
  // the return type; `Opts` is inferred later from the resolved rest args.
  <
    const Fn extends (src: Select<Source, undefined>) => ConstrainTarget<Opts>,
    const Opts extends SelectorOptions<Ns[number]> = SelectorOptions<Ns[number]>,
  >(
    selector: Fn,
    ...args: ReturnType<Fn> extends PluralValue<string>
      ? [options: Opts & { count: number } & InterpolationMap<DeepUnwrapPlural<ReturnType<Fn>>>]
      : [options?: Opts & InterpolationMap<ReturnType<Fn>>]
  ): SelectorReturn<ReturnType<Fn>, Opts>;
}

interface SelectorOptions<Ns = Namespace>
  extends Omit<TOptionsBase, 'ns' | 'nsSeparator'>, $Dictionary {
  ns?: Ns;
}

type SelectorReturn<
  Target,
  Opts extends { defaultValue?: unknown; returnObjects?: boolean },
  DV = Opts['defaultValue'],
> = $IsResourcesDefined extends true
  ? TFunctionReturnOptionalDetails<ProcessReturnValue<DeepUnwrapPlural<Target>, DV>, Opts>
  : DefaultTReturn<Opts>;

interface SelectorFn<Source, Target, Opts extends SelectorOptions<unknown>> {
  (translations: Select<Source, Opts['context']>): Target;
}

type ApplyKeyPrefix<
  T extends [any],
  KPrefix,
> = KPrefix extends `${infer Head}${_KeySeparator}${infer Tail}`
  ? ApplyKeyPrefix<[T[0][Head]], Tail>
  : T[0][KPrefix & string];

type ApplyTarget<
  Target,
  Opts extends { returnObjects?: unknown },
> = Opts['returnObjects'] extends true ? unknown : Target;

type ConstrainTarget<Opts extends SelectorOptions<any>> = _ReturnObjects extends true
  ? unknown
  : Opts['returnObjects'] extends true
    ? unknown
    : $IsResourcesDefined extends false
      ? unknown
      : string;

type ProcessReturnValue<Target, DefaultValue> = $Turtles extends Target
  ? string
  : [DefaultValue] extends [never]
    ? Target
    : unknown extends DefaultValue
      ? Target
      : Target | DefaultValue;

type PickNamespaces<T, K extends keyof any> = {
  [P in K as P extends keyof T ? P : never]: T[P & keyof T];
};

/** Extracts the sub-tree returned by a selector function used as keyPrefix. */
type SelectorReturnSource<KPrefix, Fallback> = KPrefix extends (...args: any[]) => infer R
  ? R extends object
    ? R
    : Fallback
  : Fallback;

type GetSource<Ns extends Namespace, KPrefix, Res = NsResource<Ns>> = KPrefix extends (
  ...args: any[]
) => any
  ? SelectorReturnSource<KPrefix, Res>
  : KPrefix extends keyof Res
    ? Res[KPrefix]
    : undefined extends KPrefix
      ? Res
      : ApplyKeyPrefix<[Res], KPrefix>;

type Select<T, Context> = $IsResourcesDefined extends false
  ? $Turtles
  : [_EnableSelector] extends ['optimize']
    ? T
    : FilterKeys<T, Context>;

type _HasContextVariant<T, K extends string, Context> = [
  keyof T &
    (
      | `${K}${_ContextSeparator}${Context & string}`
      | `${K}${_ContextSeparator}${Context & string}${_PluralSeparator}${PluralSuffix}`
    ),
] extends [never]
  ? false
  : true;

/** Checks whether key K has **any** context variant in T (excluding pure plural suffixes). */
type _IsContextualKey<T, K extends string> = [
  Exclude<
    keyof T & `${K}${_ContextSeparator}${string}`,
    | `${K}${_PluralSeparator}${PluralSuffix}`
    | `${K}${_PluralSeparator}ordinal${_PluralSeparator}${PluralSuffix}`
  >,
] extends [never]
  ? false
  : true;

type FilterKeys<T, Context> = never | T extends readonly any[]
  ? { [I in keyof T]: FilterKeys<T[I], Context> }
  : $Prune<
      {
        // Mapped type 1: object-valued keys (recurse) + plain leaf keys (non-plural, non-context)
        [K in keyof T as T[K] extends object
          ? K
          : [Context] extends [string]
            ? K extends
                | `${string}${_ContextSeparator}${Context}`
                | `${string}${_ContextSeparator}${Context}${_PluralSeparator}${PluralSuffix}`
              ? never // context keys handled by mapped type 3
              : K extends `${string}${_PluralSeparator}${PluralSuffix}`
                ? never // plural keys handled by mapped type 2
                : K extends string
                  ? _HasContextVariant<T, K, Context> extends true
                    ? never // context variant exists, drop base key (type 3 handles it)
                    : _IsContextualKey<T, K> extends true
                      ? never // key has context variants but not for this context
                      : K // no context variants at all, keep base key
                  : K
            : K extends `${string}${_PluralSeparator}${PluralSuffix}`
              ? never
              : K]: T[K] extends object ? FilterKeys<T[K], Context> : T[K];
      } & {
        // Mapped type 2: plural collapsing (active regardless of context)
        [K in keyof T as T[K] extends object
          ? never
          : [Context] extends [string]
            ? K extends
                | `${string}${_ContextSeparator}${Context}`
                | `${string}${_ContextSeparator}${Context}${_PluralSeparator}${PluralSuffix}`
              ? never // context keys handled by mapped type 3
              : K extends
                    | `${infer Prefix}${_PluralSeparator}${PluralSuffix}`
                    | `${infer Prefix}${_PluralSeparator}ordinal${_PluralSeparator}${PluralSuffix}`
                ? Prefix
                : never
            : K extends
                  | `${infer Prefix}${_PluralSeparator}${PluralSuffix}`
                  | `${infer Prefix}${_PluralSeparator}ordinal${_PluralSeparator}${PluralSuffix}`
              ? Prefix
              : never]: T[K] extends object
          ? FilterKeys<T[K], Context>
          : PluralValue<T[K] & string>;
      } & {
        // Mapped type 3: context key collapsing
        [K in keyof T as T[K] extends object
          ? never
          : [Context] extends [string]
            ? K extends
                | `${infer Prefix}${_ContextSeparator}${Context}`
                | `${infer Prefix}${_ContextSeparator}${Context}${_PluralSeparator}${PluralSuffix}`
              ? Prefix
              : never
            : never]: T[K] extends object ? FilterKeys<T[K], Context> : T[K];
      }
    >;
