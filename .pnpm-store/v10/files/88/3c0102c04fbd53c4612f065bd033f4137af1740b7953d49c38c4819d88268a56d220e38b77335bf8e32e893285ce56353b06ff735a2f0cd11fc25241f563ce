import type { Client } from '@sentry/core';
import type { OpenTelemetryClient as OpenTelemetryClientInterface } from '../types';
/**
 * Wrap an Client class with things we need for OpenTelemetry support.
 * Make sure that the Client class passed in is non-abstract!
 *
 * Usage:
 * const OpenTelemetryClient = getWrappedClientClass(NodeClient);
 * const client = new OpenTelemetryClient(options);
 */
export declare function wrapClientClass<ClassConstructor extends new (...args: any[]) => Client, WrappedClassConstructor extends new (...args: any[]) => Client & OpenTelemetryClientInterface>(ClientClass: ClassConstructor): WrappedClassConstructor;
//# sourceMappingURL=client.d.ts.map