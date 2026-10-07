import type { AttributeValue } from '@opentelemetry/api';
import type { ResourceDetectionConfig } from './config';
/**
 * Interface for a Resource Detector.
 * A resource detector returns a set of detected resource attributes.
 * A detected resource attribute may be an {@link AttributeValue} or a Promise of an AttributeValue.
 */
export interface ResourceDetector {
    /**
     * Detect resource attributes.
     *
     * @returns a {@link DetectedResource} object containing detected resource attributes
     */
    detect(config?: ResourceDetectionConfig): DetectedResource;
}
export type DetectedResource = {
    /**
     * Detected resource attributes.
     */
    attributes?: DetectedResourceAttributes;
};
/**
 * An object representing detected resource attributes.
 * Value may be {@link AttributeValue}s, a promise to an {@link AttributeValue}, or undefined.
 */
type DetectedResourceAttributeValue = MaybePromise<AttributeValue | undefined>;
/**
 * An object representing detected resource attributes.
 * Values may be {@link AttributeValue}s or a promise to an {@link AttributeValue}.
 */
export type DetectedResourceAttributes = Record<string, DetectedResourceAttributeValue>;
export type MaybePromise<T> = T | Promise<T>;
export type RawResourceAttribute = [
    string,
    MaybePromise<AttributeValue | undefined>
];
/**
 * Options for creating a {@link Resource}.
 */
export type ResourceOptions = {
    schemaUrl?: string;
};
export {};
//# sourceMappingURL=types.d.ts.map