import { AnyEventObject, BaseActionObject, DefaultContext, EventObject, MachineConfig, InternalMachineOptions, StateMachine, StateSchema, Typestate, ServiceMap } from './types';
import { TypegenConstraint, TypegenDisabled, ResolveTypegenMeta } from './typegenTypes';
/**
 * @deprecated Use `createMachine(...)` instead.
 */
export declare function Machine<TContext = any, TEvent extends EventObject = AnyEventObject>(config: MachineConfig<TContext, any, TEvent>, options?: InternalMachineOptions<TContext, TEvent, ResolveTypegenMeta<TypegenDisabled, TEvent, BaseActionObject, ServiceMap>>, initialContext?: TContext): StateMachine<TContext, any, TEvent, any, BaseActionObject, ServiceMap, ResolveTypegenMeta<TypegenDisabled, TEvent, BaseActionObject, ServiceMap>>;
export declare function Machine<TContext = DefaultContext, TStateSchema extends StateSchema = any, TEvent extends EventObject = AnyEventObject>(config: MachineConfig<TContext, TStateSchema, TEvent>, options?: InternalMachineOptions<TContext, TEvent, ResolveTypegenMeta<TypegenDisabled, TEvent, BaseActionObject, ServiceMap>>, initialContext?: TContext): StateMachine<TContext, TStateSchema, TEvent, any, BaseActionObject, ServiceMap, ResolveTypegenMeta<TypegenDisabled, TEvent, BaseActionObject, ServiceMap>>;
export declare function createMachine<TContext, TEvent extends EventObject = AnyEventObject, TTypestate extends Typestate<TContext> = {
    value: any;
    context: TContext;
}, TServiceMap extends ServiceMap = ServiceMap, TTypesMeta extends TypegenConstraint = TypegenDisabled>(config: MachineConfig<TContext, any, TEvent, BaseActionObject, TServiceMap, TTypesMeta>, options?: InternalMachineOptions<TContext, TEvent, ResolveTypegenMeta<TTypesMeta, TEvent, BaseActionObject, TServiceMap>>): StateMachine<TContext, any, TEvent, TTypestate, BaseActionObject, TServiceMap, ResolveTypegenMeta<TTypesMeta, TEvent, BaseActionObject, TServiceMap>>;
//# sourceMappingURL=Machine.d.ts.map