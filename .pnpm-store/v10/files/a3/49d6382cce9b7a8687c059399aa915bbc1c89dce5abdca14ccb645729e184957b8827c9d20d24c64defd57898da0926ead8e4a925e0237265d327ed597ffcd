import { AnyFunction, AssignAction, Assigner, BaseActionObject, Compute, EventObject, MachineConfig, Prop, PropertyAssigner, StateMachine, InternalMachineOptions, ServiceMap } from './types';
import { ResolveTypegenMeta, TypegenConstraint, TypegenDisabled } from './typegenTypes';
declare type SimplisticExtractEvent<TEvent extends EventObject, TEventType extends TEvent['type']> = TEvent extends {
    type: TEventType;
} ? TEvent : never;
export interface Model<TContext, TEvent extends EventObject, TAction extends BaseActionObject = BaseActionObject, TModelCreators = void> {
    initialContext: TContext;
    assign: <TEventType extends TEvent['type'] = TEvent['type']>(assigner: Assigner<TContext, SimplisticExtractEvent<TEvent, TEventType>> | PropertyAssigner<TContext, SimplisticExtractEvent<TEvent, TEventType>>, eventType?: TEventType) => AssignAction<TContext, SimplisticExtractEvent<TEvent, TEventType>, TEvent>;
    events: Prop<TModelCreators, 'events'>;
    actions: Prop<TModelCreators, 'actions'>;
    reset: () => AssignAction<TContext, any>;
    createMachine: {
        <TServiceMap extends ServiceMap = ServiceMap, TTypesMeta extends TypegenConstraint = TypegenDisabled>(config: MachineConfig<TContext, any, TEvent, TAction, TServiceMap, TTypesMeta>, implementations?: InternalMachineOptions<TContext, TEvent, ResolveTypegenMeta<TTypesMeta, TEvent, TAction, TServiceMap>>): StateMachine<TContext, any, TEvent, {
            value: any;
            context: TContext;
        }, TAction, TServiceMap, ResolveTypegenMeta<TTypesMeta, TEvent, TAction, TServiceMap>>;
    };
}
export declare type ModelContextFrom<TModel extends Model<any, any, any, any>> = TModel extends Model<infer TContext, any, any, any> ? TContext : never;
export declare type ModelEventsFrom<TModel extends Model<any, any, any, any> | undefined> = TModel extends Model<any, infer TEvent, any, any> ? TEvent : EventObject;
export declare type ModelActionsFrom<TModel extends Model<any, any, any, any>> = TModel extends Model<any, any, infer TAction, any> ? TAction : never;
export declare type EventCreator<Self extends AnyFunction, Return = ReturnType<Self>> = Return extends object ? Return extends {
    type: any;
} ? "An event creator can't return an object with a type property" : Self : 'An event creator must return an object';
export declare type EventCreators<Self> = {
    [K in keyof Self]: Self[K] extends AnyFunction ? EventCreator<Self[K]> : 'An event creator must be a function';
};
export declare type FinalEventCreators<Self> = {
    [K in keyof Self]: Self[K] extends AnyFunction ? (...args: Parameters<Self[K]>) => Compute<ReturnType<Self[K]> & {
        type: K;
    }> : never;
};
export declare type ActionCreator<Self extends AnyFunction, Return = ReturnType<Self>> = Return extends object ? Return extends {
    type: any;
} ? "An action creator can't return an object with a type property" : Self : 'An action creator must return an object';
export declare type ActionCreators<Self> = {
    [K in keyof Self]: Self[K] extends AnyFunction ? ActionCreator<Self[K]> : 'An action creator must be a function';
};
export declare type FinalActionCreators<Self> = {
    [K in keyof Self]: Self[K] extends AnyFunction ? (...args: Parameters<Self[K]>) => Compute<ReturnType<Self[K]> & {
        type: K;
    }> : never;
};
export interface ModelCreators<Self> {
    events?: EventCreators<Prop<Self, 'events'>>;
    actions?: ActionCreators<Prop<Self, 'actions'>>;
}
export interface FinalModelCreators<Self> {
    events: FinalEventCreators<Prop<Self, 'events'>>;
    actions: FinalActionCreators<Prop<Self, 'actions'>>;
}
export declare type UnionFromCreatorsReturnTypes<TCreators> = {
    [K in keyof TCreators]: TCreators[K] extends AnyFunction ? ReturnType<TCreators[K]> : never;
}[keyof TCreators];
export {};
//# sourceMappingURL=model.types.d.ts.map