import { Attributes } from '@opentelemetry/api';
import type * as Hapi from './hapi-types';
import { HapiPluginObject, PatchableExtMethod, ServerExtDirectInput } from './internal-types';
import { SemconvStability } from '@opentelemetry/instrumentation';
export declare function getPluginName<T>(plugin: Hapi.Plugin<T>): string;
export declare const isLifecycleExtType: (variableToCheck: unknown) => variableToCheck is Hapi.ServerRequestExtType;
export declare const isLifecycleExtEventObj: (variableToCheck: unknown) => variableToCheck is Hapi.ServerExtEventsRequestObject;
export declare const isDirectExtInput: (variableToCheck: unknown) => variableToCheck is ServerExtDirectInput;
export declare const isPatchableExtMethod: (variableToCheck: PatchableExtMethod | PatchableExtMethod[]) => variableToCheck is PatchableExtMethod;
export declare const getRouteMetadata: (route: Hapi.ServerRoute, semconvStability: SemconvStability, pluginName?: string) => {
    attributes: Attributes;
    name: string;
};
export declare const getExtMetadata: (extPoint: Hapi.ServerRequestExtType, pluginName?: string, methodName?: string) => {
    attributes: Attributes;
    name: string;
};
export declare const getPluginFromInput: <T>(pluginObj: HapiPluginObject<T>) => Hapi.Plugin<T, void>;
//# sourceMappingURL=utils.d.ts.map