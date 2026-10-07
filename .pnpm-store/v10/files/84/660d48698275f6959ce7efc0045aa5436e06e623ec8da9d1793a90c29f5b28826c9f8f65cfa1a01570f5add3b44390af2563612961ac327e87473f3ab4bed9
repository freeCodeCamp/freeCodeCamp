import { type Integration, type IntegrationFn } from '../../types/integration';
export interface FeatureFlagsIntegration extends Integration {
    addFeatureFlag: (name: string, value: unknown) => void;
}
/**
 * Sentry integration for buffering feature flag evaluations manually with an API, and
 * capturing them on error events and spans.
 *
 * See the [feature flag documentation](https://develop.sentry.dev/sdk/expected-features/#feature-flags) for more information.
 *
 * @example
 * ```
 * import * as Sentry from '@sentry/browser';
 * import { type FeatureFlagsIntegration } from '@sentry/browser';
 *
 * // Setup
 * Sentry.init(..., integrations: [Sentry.featureFlagsIntegration()])
 *
 * // Verify
 * const flagsIntegration = Sentry.getClient()?.getIntegrationByName<FeatureFlagsIntegration>('FeatureFlags');
 * if (flagsIntegration) {
 *   flagsIntegration.addFeatureFlag('my-flag', true);
 * } else {
 *   // check your setup
 * }
 * Sentry.captureException(Exception('broke')); // 'my-flag' should be captured to this Sentry event.
 * ```
 */
export declare const featureFlagsIntegration: IntegrationFn<FeatureFlagsIntegration>;
//# sourceMappingURL=featureFlagsIntegration.d.ts.map