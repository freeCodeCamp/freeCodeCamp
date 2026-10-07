import { IntegrationFn } from '../../types/integration';
interface GrowthBookLike {
    isOn(this: GrowthBookLike, featureKey: string, ...rest: unknown[]): boolean;
    getFeatureValue(this: GrowthBookLike, featureKey: string, defaultValue: unknown, ...rest: unknown[]): unknown;
}
export type GrowthBookClassLike = new (...args: unknown[]) => GrowthBookLike;
/**
 * Sentry integration for capturing feature flag evaluations from GrowthBook.
 *
 * Only boolean results are captured at this time.
 *
 * @example
 * ```typescript
 * import { GrowthBook } from '@growthbook/growthbook';
 * import * as Sentry from '@sentry/browser'; // or '@sentry/node'
 *
 * Sentry.init({
 *   dsn: 'your-dsn',
 *   integrations: [
 *     Sentry.growthbookIntegration({ growthbookClass: GrowthBook })
 *   ]
 * });
 * ```
 */
export declare const growthbookIntegration: IntegrationFn;
export {};
//# sourceMappingURL=growthbook.d.ts.map
