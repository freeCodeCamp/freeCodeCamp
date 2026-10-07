/**
 * Mark AI provider modules to skip instrumentation wrapping.
 *
 * This prevents duplicate spans when a higher-level integration (like LangChain)
 * already instruments AI providers at a higher abstraction level.
 *
 * @internal
 * @param modules - Array of npm module names to skip (e.g., '@anthropic-ai/sdk', 'openai')
 *
 * @example
 * ```typescript
 * // In LangChain integration
 * _INTERNAL_skipAiProviderWrapping(['@anthropic-ai/sdk', 'openai', '@google/generative-ai']);
 * ```
 */
export declare function _INTERNAL_skipAiProviderWrapping(modules: string[]): void;
/**
 * Check if an AI provider module should skip instrumentation wrapping.
 *
 * @internal
 * @param module - The npm module name (e.g., '@anthropic-ai/sdk', 'openai')
 * @returns true if wrapping should be skipped
 *
 * @example
 * ```typescript
 * // In AI provider instrumentation
 * if (_INTERNAL_shouldSkipAiProviderWrapping('@anthropic-ai/sdk')) {
 *   return Reflect.construct(Original, args); // Don't instrument
 * }
 * ```
 */
export declare function _INTERNAL_shouldSkipAiProviderWrapping(module: string): boolean;
/**
 * Clear all AI provider skip registrations.
 *
 * This is automatically called at the start of Sentry.init() to ensure a clean state
 * between different client initializations.
 *
 * @internal
 */
export declare function _INTERNAL_clearAiProviderSkips(): void;
//# sourceMappingURL=providerSkip.d.ts.map