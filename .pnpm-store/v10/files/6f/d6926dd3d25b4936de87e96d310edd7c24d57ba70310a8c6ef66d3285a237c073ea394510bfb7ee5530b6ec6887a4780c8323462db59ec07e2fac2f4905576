import { CaptureLogArgs } from './capture';
/**
 * @summary Capture a log with the `trace` level. Requires the `enableLogs` option to be enabled.
 *
 * You can either pass a message and attributes or a message template, params and attributes.
 *
 * @example
 *
 * ```
 * Sentry.logger.trace('Starting database connection', {
 *   database: 'users',
 *   connectionId: 'conn_123'
 * });
 * ```
 *
 * @example With template strings
 *
 * ```
 * Sentry.logger.trace('Database connection %s established for %s',
 *   ['successful', 'users'],
 *   { connectionId: 'conn_123' }
 * );
 * ```
 */
export declare function trace(...args: CaptureLogArgs): void;
/**
 * @summary Capture a log with the `debug` level. Requires the `enableLogs` option to be enabled.
 *
 * You can either pass a message and attributes or a message template, params and attributes.
 *
 * @example
 *
 * ```
 * Sentry.logger.debug('Cache miss for user profile', {
 *   userId: 'user_123',
 *   cacheKey: 'profile:user_123'
 * });
 * ```
 *
 * @example With template strings
 *
 * ```
 * Sentry.logger.debug('Cache %s for %s: %s',
 *   ['miss', 'user profile', 'key not found'],
 *   { userId: 'user_123' }
 * );
 * ```
 */
export declare function debug(...args: CaptureLogArgs): void;
/**
 * @summary Capture a log with the `info` level. Requires the `enableLogs` option to be enabled.
 *
 * You can either pass a message and attributes or a message template, params and attributes.
 *
 * @example
 *
 * ```
 * Sentry.logger.info('User profile updated', {
 *   userId: 'user_123',
 *   updatedFields: ['email', 'preferences']
 * });
 * ```
 *
 * @example With template strings
 *
 * ```
 * Sentry.logger.info('User %s updated their %s',
 *   ['John Doe', 'profile settings'],
 *   { userId: 'user_123' }
 * );
 * ```
 */
export declare function info(...args: CaptureLogArgs): void;
/**
 * @summary Capture a log with the `warn` level. Requires the `enableLogs` option to be enabled.
 *
 * You can either pass a message and attributes or a message template, params and attributes.
 *
 * @example
 *
 * ```
 * Sentry.logger.warn('Rate limit approaching', {
 *   endpoint: '/api/users',
 *   currentRate: '95/100',
 *   resetTime: '2024-03-20T10:00:00Z'
 * });
 * ```
 *
 * @example With template strings
 *
 * ```
 * Sentry.logger.warn('Rate limit %s for %s: %s',
 *   ['approaching', '/api/users', '95/100 requests'],
 *   { resetTime: '2024-03-20T10:00:00Z' }
 * );
 * ```
 */
export declare function warn(...args: CaptureLogArgs): void;
/**
 * @summary Capture a log with the `error` level. Requires the `enableLogs` option to be enabled.
 *
 * You can either pass a message and attributes or a message template, params and attributes.
 *
 * @example
 *
 * ```
 * Sentry.logger.error('Failed to process payment', {
 *   orderId: 'order_123',
 *   errorCode: 'PAYMENT_FAILED',
 *   amount: 99.99
 * });
 * ```
 *
 * @example With template strings
 *
 * ```
 * Sentry.logger.error('Payment processing failed for order %s: %s',
 *   ['order_123', 'insufficient funds'],
 *   { amount: 99.99 }
 * );
 * ```
 */
export declare function error(...args: CaptureLogArgs): void;
/**
 * @summary Capture a log with the `fatal` level. Requires the `enableLogs` option to be enabled.
 *
 * You can either pass a message and attributes or a message template, params and attributes.
 *
 * @example
 *
 * ```
 * Sentry.logger.fatal('Database connection pool exhausted', {
 *   database: 'users',
 *   activeConnections: 100,
 *   maxConnections: 100
 * });
 * ```
 *
 * @example With template strings
 *
 * ```
 * Sentry.logger.fatal('Database %s: %s connections active',
 *   ['connection pool exhausted', '100/100'],
 *   { database: 'users' }
 * );
 * ```
 */
export declare function fatal(...args: CaptureLogArgs): void;
export { fmt } from '@sentry/core';
//# sourceMappingURL=exports.d.ts.map
