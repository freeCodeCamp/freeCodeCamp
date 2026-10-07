import type { ResourceDetectionConfig } from '../config';
import type { DetectedResource, ResourceDetector } from '../types';
/**
 * EnvDetector can be used to detect the presence of and create a Resource
 * from the OTEL_RESOURCE_ATTRIBUTES environment variable.
 */
declare class EnvDetector implements ResourceDetector {
    private readonly _MAX_LENGTH;
    private readonly _COMMA_SEPARATOR;
    private readonly _LABEL_KEY_VALUE_SPLITTER;
    /**
     * Returns a {@link Resource} populated with attributes from the
     * OTEL_RESOURCE_ATTRIBUTES environment variable. Note this is an async
     * function to conform to the Detector interface.
     *
     * @param config The resource detection config
     */
    detect(_config?: ResourceDetectionConfig): DetectedResource;
    /**
     * Creates an attribute map from the OTEL_RESOURCE_ATTRIBUTES environment
     * variable.
     *
     * OTEL_RESOURCE_ATTRIBUTES: A comma-separated list of attributes in the
     * format "key1=value1,key2=value2". The ',' and '=' characters in keys
     * and values MUST be percent-encoded. Other characters MAY be percent-encoded.
     *
     * Per the spec, on any error (e.g., decoding failure), the entire environment
     * variable value is discarded.
     *
     * @param rawEnvAttributes The resource attributes as a comma-separated list
     * of key/value pairs.
     * @returns The parsed resource attributes.
     * @throws Error if parsing fails (caller handles by discarding all attributes)
     */
    private _parseResourceAttributes;
}
export declare const envDetector: EnvDetector;
export {};
//# sourceMappingURL=EnvDetector.d.ts.map