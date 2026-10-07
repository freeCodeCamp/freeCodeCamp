import { Attributes, Span } from '@opentelemetry/api';
import { Collection } from './mongoose-types';
import { MongooseResponseCustomAttributesFunction } from './types';
import { SemconvStability } from '@opentelemetry/instrumentation';
export declare function getAttributesFromCollection(collection: Collection, dbSemconvStability: SemconvStability, netSemconvStability: SemconvStability): Attributes;
export declare function handlePromiseResponse(execResponse: any, span: Span, responseHook?: MongooseResponseCustomAttributesFunction, moduleVersion?: string | undefined): any;
export declare function handleCallbackResponse(callback: Function, exec: Function, originalThis: any, span: Span, args: IArguments, responseHook?: MongooseResponseCustomAttributesFunction, moduleVersion?: string | undefined): any;
//# sourceMappingURL=utils.d.ts.map
