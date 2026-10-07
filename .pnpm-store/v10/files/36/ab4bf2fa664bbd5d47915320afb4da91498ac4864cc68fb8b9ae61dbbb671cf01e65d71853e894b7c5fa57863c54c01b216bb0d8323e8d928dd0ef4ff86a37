import { Tracer } from '@opentelemetry/api';
import { InstrumentationBase } from '@opentelemetry/instrumentation';
import { InstrumentationNodeModuleDefinition } from '@opentelemetry/instrumentation';
import { FirebaseFunctions, FirebaseInstrumentationConfig, OverloadedParameters } from '../types';
/**
 * Patches Firebase Functions v2 to add OpenTelemetry instrumentation
 * @param tracer - Opentelemetry Tracer
 * @param functionsSupportedVersions - supported versions of firebase-functions
 * @param wrap - reference to native instrumentation wrap function
 * @param unwrap - reference to native instrumentation unwrap function
 * @param config - Firebase instrumentation config
 */
export declare function patchFunctions(tracer: Tracer, functionsSupportedVersions: string[], wrap: InstrumentationBase['_wrap'], unwrap: InstrumentationBase['_unwrap'], config: FirebaseInstrumentationConfig): InstrumentationNodeModuleDefinition;
/**
 * Patches Cloud Functions for Firebase (v2) to add OpenTelemetry instrumentation
 *
 * @param tracer - Opentelemetry Tracer
 * @param functionsConfig - Firebase instrumentation config
 * @param triggerType - Type of trigger
 * @returns A function that patches the function
 */
export declare function patchV2Functions<T extends FirebaseFunctions = FirebaseFunctions>(tracer: Tracer, functionsConfig: FirebaseInstrumentationConfig['functions'], triggerType: string): (original: T) => (...args: OverloadedParameters<T>) => ReturnType<T>;
//# sourceMappingURL=functions.d.ts.map
