export interface TSettings {
    /**
     * Determines whether types should be instantiated as immutable using `Object.freeze(...)`.
     * This helps prevent unintended schema mutation. Enabling this option introduces a slight
     * performance overhead during instantiation.
     * @default false
     */
    immutableTypes: boolean;
    /**
     * Specifies the maximum number of errors to buffer during diagnostics collection. TypeBox
     * performs exhaustive checks to gather diagnostics for invalid values, which can result in
     * excessive buffering for large or complex types. This setting limits the number of buffered
     * errors and acts as a safeguard against potential denial-of-service (DoS) attacks.
     * @default 8
     */
    maxErrors: number;
    /**
     * Enables or disables the use of runtime code evaluation to accelerate validation. By default,
     * TypeBox checks for `unsafe-eval` support in the environment before attempting to evaluate
     * generated code. If evaluation is not permitted, it falls back to dynamic checking. Setting
     * this to `false` disables evaluation entirely, which may be desirable in applications that
     * restrict runtime code evaluation, regardless of Content Security Policy (CSP).
     * @default true
     */
    useAcceleration: boolean;
    /**
     * Enables or disables 'exactOptionalPropertyTypes' check semantics. By default, TypeScript
     * allows optional properties to be assigned 'undefined'. While this behavior differs from the
     * common interpretation of 'optional' as meaning 'key may be absent', TypeBox adopts the default
     * TypeScript semantics to remain consistent with the language. This option is provided to align
     * runtime check semantics with projects that configure 'exactOptionalPropertyTypes: true' in
     * tsconfig.json.
     * @default false
     */
    exactOptionalPropertyTypes: boolean;
    /**
     * Controls whether internal compositor properties (`~kind`, `~readonly`, `~optional`) are enumerable.
     * @default false
     */
    enumerableKind: boolean;
    /**
     * Controls whether TypeBox uses corrective Parse. When enabled, TypeBox will attempt to recover invalid
     * values during Parse by running a sequence of `Value.*` operations to `Convert`, `Default`, and `Clean`
     * the value, followed by a subsequent `Assert`. Enabling this option may incur significant performance
     * overhead for invalid values. It is recommended to keep this disabled in performance-sensitive
     * applications.
     * @default false
     */
    correctiveParse: boolean;
}
/** Resets system settings to defaults */
export declare function Reset(): void;
/** Sets system settings */
export declare function Set(options: Partial<TSettings>): void;
/** Gets current system settings */
export declare function Get(): Readonly<TSettings>;
