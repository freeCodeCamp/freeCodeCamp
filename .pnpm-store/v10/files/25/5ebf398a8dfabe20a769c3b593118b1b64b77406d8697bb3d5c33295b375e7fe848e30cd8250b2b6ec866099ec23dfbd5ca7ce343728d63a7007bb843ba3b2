import { BaseActionObject, EventObject, IndexByType, IsNever, Prop, Values, IsAny, ServiceMap, Cast, Compute } from './types';
export interface TypegenDisabled {
    '@@xstate/typegen': false;
}
export interface TypegenEnabled {
    '@@xstate/typegen': true;
}
export interface TypegenMeta extends TypegenEnabled {
    /**
     * Allows you to specify all the results of state.matches
     */
    matchesStates: string | {};
    /**
     * Allows you to specify all tags used by the machine
     */
    tags: string;
    /**
     * Allows you to specify all the missing implementations
     * of the machine
     */
    missingImplementations: {
        actions: string;
        delays: string;
        guards: string;
        services: string;
    };
    /**
     * A map for the internal events of the machine.
     *
     * key: 'done.invoke.myService'
     * value: {
     *   type: 'done.invoke.myService';
     *   data: unknown;
     *   __tip: 'Declare the type in event types!';
     * }
     */
    internalEvents: {};
    /**
     * Maps the name of the service to the event type
     * of the done.invoke action
     *
     * key: 'invokeSrc'
     * value: 'done.invoke.invokeName'
     */
    invokeSrcNameMap: Record<string, string>;
    /**
     * Keeps track of which events lead to which
     * actions.
     *
     * Key: 'EVENT_NAME'
     * Value: 'actionName' | 'otherActionName'
     */
    eventsCausingActions: Record<string, string>;
    /**
     * Keeps track of which events lead to which
     * delays.
     *
     * Key: 'EVENT_NAME'
     * Value: 'delayName' | 'otherDelayName'
     */
    eventsCausingDelays: Record<string, string>;
    /**
     * Keeps track of which events lead to which
     * guards.
     *
     * Key: 'EVENT_NAME'
     * Value: 'guardName' | 'otherGuardName'
     */
    eventsCausingGuards: Record<string, string>;
    /**
     * Keeps track of which events lead to which
     * services.
     *
     * Key: 'EVENT_NAME'
     * Value: 'serviceName' | 'otherServiceName'
     */
    eventsCausingServices: Record<string, string>;
}
export interface ResolvedTypegenMeta extends TypegenMeta {
    resolved: TypegenMeta & {
        indexedActions: Record<string, BaseActionObject>;
        indexedEvents: Record<string, EventObject>;
    };
}
export declare type TypegenConstraint = TypegenEnabled | TypegenDisabled;
export declare type AreAllImplementationsAssumedToBeProvided<TResolvedTypesMeta, TMissingImplementations = Prop<Prop<TResolvedTypesMeta, 'resolved'>, 'missingImplementations'>> = IsAny<TResolvedTypesMeta> extends true ? true : TResolvedTypesMeta extends TypegenEnabled ? IsNever<Values<{
    [K in keyof TMissingImplementations]: TMissingImplementations[K];
}>> extends true ? true : false : true;
export declare type MissingImplementationsError<TResolvedTypesMeta, TMissingImplementations = Prop<Prop<TResolvedTypesMeta, 'resolved'>, 'missingImplementations'>> = Compute<[
    'Some implementations missing',
    Values<{
        [K in keyof TMissingImplementations]: TMissingImplementations[K];
    }>
]>;
interface AllImplementationsProvided {
    missingImplementations: {
        actions: never;
        delays: never;
        guards: never;
        services: never;
    };
}
export interface MarkAllImplementationsAsProvided<TResolvedTypesMeta> {
    '@@xstate/typegen': Prop<TResolvedTypesMeta, '@@xstate/typegen'>;
    resolved: Prop<TResolvedTypesMeta, 'resolved'> & AllImplementationsProvided;
}
declare type GenerateServiceEvent<TServiceName, TEventType, TServiceMap extends ServiceMap> = TEventType extends any ? {
    type: TEventType;
} & Prop<TServiceMap, TServiceName> : never;
declare type GenerateServiceEvents<TServiceMap extends ServiceMap, TInvokeSrcNameMap> = string extends keyof TServiceMap ? never : Cast<{
    [K in keyof TInvokeSrcNameMap]: GenerateServiceEvent<K, TInvokeSrcNameMap[K], TServiceMap>;
}[keyof TInvokeSrcNameMap], EventObject>;
declare type MergeWithInternalEvents<TIndexedEvents, TInternalEvents> = TIndexedEvents & Pick<TInternalEvents, Exclude<keyof TInternalEvents, keyof TIndexedEvents>>;
declare type AllowAllEvents = {
    eventsCausingActions: Record<string, string>;
    eventsCausingDelays: Record<string, string>;
    eventsCausingGuards: Record<string, string>;
    eventsCausingServices: Record<string, string>;
};
export interface ResolveTypegenMeta<TTypesMeta extends TypegenConstraint, TEvent extends EventObject, TAction extends BaseActionObject, TServiceMap extends ServiceMap> {
    '@@xstate/typegen': TTypesMeta['@@xstate/typegen'];
    resolved: {
        enabled: TTypesMeta & {
            indexedActions: IndexByType<TAction>;
            indexedEvents: MergeWithInternalEvents<IndexByType<(string extends TEvent['type'] ? never : TEvent) | GenerateServiceEvents<TServiceMap, Prop<TTypesMeta, 'invokeSrcNameMap'>>>, Prop<TTypesMeta, 'internalEvents'>>;
        };
        disabled: TypegenDisabled & AllImplementationsProvided & AllowAllEvents & {
            indexedActions: IndexByType<TAction>;
            indexedEvents: Record<string, TEvent> & {
                __XSTATE_ALLOW_ANY_INVOKE_DATA_HACK__: {
                    data: any;
                };
            };
            invokeSrcNameMap: Record<string, '__XSTATE_ALLOW_ANY_INVOKE_DATA_HACK__'>;
        };
    }[IsNever<TTypesMeta> extends true ? 'disabled' : TTypesMeta extends TypegenEnabled ? 'enabled' : 'disabled'];
}
export {};
//# sourceMappingURL=typegenTypes.d.ts.map