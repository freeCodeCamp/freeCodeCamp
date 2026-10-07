import { Clock, Interpreter } from './interpreter';
import { Model } from './model.types';
import { State } from './State';
import { StateNode } from './StateNode';
import { MarkAllImplementationsAsProvided, TypegenDisabled, ResolveTypegenMeta, TypegenConstraint, AreAllImplementationsAssumedToBeProvided, TypegenEnabled } from './typegenTypes';
export declare type AnyFunction = (...args: any[]) => any;
declare type ReturnTypeOrValue<T> = T extends AnyFunction ? ReturnType<T> : T;
export declare type IsNever<T> = [T] extends [never] ? true : false;
export declare type Compute<A extends any> = {
    [K in keyof A]: A[K];
} & unknown;
export declare type Prop<T, K> = K extends keyof T ? T[K] : never;
export declare type Values<T> = T[keyof T];
export declare type Merge<M, N> = Omit<M, keyof N> & N;
export declare type IndexByType<T extends {
    type: string;
}> = {
    [K in T['type']]: T extends any ? (K extends T['type'] ? T : never) : never;
};
export declare type Equals<A1 extends any, A2 extends any> = (<A>() => A extends A2 ? true : false) extends <A>() => A extends A1 ? true : false ? true : false;
export declare type IsAny<T> = Equals<T, any>;
export declare type Cast<A, B> = A extends B ? A : B;
export declare type NoInfer<T> = [T][T extends any ? 0 : any];
export declare type LowInfer<T> = T & {};
export declare type EventType = string;
export declare type ActionType = string;
export declare type MetaObject = Record<string, any>;
/**
 * The full definition of an event, with a string `type`.
 */
export interface EventObject {
    /**
     * The type of event that is sent.
     */
    type: string;
}
export interface AnyEventObject extends EventObject {
    [key: string]: any;
}
export interface BaseActionObject {
    /**
     * The type of action that is executed.
     */
    type: string;
    [other: string]: any;
    [notAnArrayLike: number]: never;
}
/**
 * The full definition of an action, with a string `type` and an
 * `exec` implementation function.
 */
export interface ActionObject<TContext, TExpressionEvent extends EventObject, TEvent extends EventObject = TExpressionEvent, TAction extends BaseActionObject = BaseActionObject> {
    type: string;
    /**
     * The implementation for executing the action.
     */
    exec?: ActionFunction<TContext, TExpressionEvent, BaseActionObject, TEvent> | undefined;
    /** @deprecated an internal signature that doesn't exist at runtime. Its existence helps TS to choose a better code path in the inference algorithm  */
    (arg: TContext, ev: TExpressionEvent, meta: ActionMeta<TContext, TEvent, TAction>): void;
}
export declare type DefaultContext = Record<string, any> | undefined;
export declare type EventData = Record<string, any> & {
    type?: never;
};
/**
 * The specified string event types or the specified event objects.
 */
export declare type Event<TEvent extends EventObject> = TEvent['type'] | TEvent;
export interface ActionMeta<TContext, TEvent extends EventObject, TAction extends BaseActionObject = BaseActionObject> extends StateMeta<TContext, TEvent> {
    action: TAction;
    _event: SCXML.Event<TEvent>;
}
export interface AssignMeta<TContext, TEvent extends EventObject> {
    state?: State<TContext, TEvent>;
    action: AssignAction<TContext, TEvent>;
    _event: SCXML.Event<TEvent>;
}
export declare type ActionFunction<TContext, TExpressionEvent extends EventObject, TAction extends BaseActionObject = BaseActionObject, TEvent extends EventObject = TExpressionEvent> = {
    bivarianceHack(context: TContext, event: TExpressionEvent, meta: ActionMeta<TContext, TEvent, TAction>): void;
}['bivarianceHack'];
export interface ChooseCondition<TContext, TExpressionEvent extends EventObject, TEvent extends EventObject = TExpressionEvent> {
    cond?: Condition<TContext, TExpressionEvent>;
    actions: Actions<TContext, TExpressionEvent, TEvent>;
}
export declare type Action<TContext, TExpressionEvent extends EventObject, TEvent extends EventObject = TExpressionEvent> = ActionType | BaseActionObject | ActionObject<TContext, TExpressionEvent, TEvent> | ActionFunction<TContext, TExpressionEvent, BaseActionObject, TEvent>;
/**
 * Extracts action objects that have no extra properties.
 */
declare type SimpleActionsOf<T extends BaseActionObject> = ActionObject<any, any> extends T ? T : ExtractWithSimpleSupport<T>;
/**
 * Events that do not require payload
 */
export declare type SimpleEventsOf<TEvent extends EventObject> = ExtractWithSimpleSupport<TEvent>;
export declare type BaseAction<TContext, TExpressionEvent extends EventObject, TAction extends BaseActionObject, TEvent extends EventObject = TExpressionEvent> = SimpleActionsOf<TAction>['type'] | TAction | RaiseAction<TContext, TExpressionEvent, TEvent> | SendAction<TContext, TExpressionEvent, TEvent> | AssignAction<TContext, TExpressionEvent, TEvent> | LogAction<TContext, TExpressionEvent, TEvent> | CancelAction<TContext, TExpressionEvent, TEvent> | StopAction<TContext, TExpressionEvent, TEvent> | ChooseAction<TContext, TExpressionEvent, TEvent> | PureAction<TContext, TExpressionEvent, TEvent> | ActionFunction<TContext, TExpressionEvent, TAction, TEvent>;
export declare type BaseActions<TContext, TExpressionEvent extends EventObject, TEvent extends EventObject, TAction extends BaseActionObject> = SingleOrArray<BaseAction<TContext, TExpressionEvent, TAction, TEvent>>;
export declare type Actions<TContext, TExpressionEvent extends EventObject, TEvent extends EventObject = TExpressionEvent> = SingleOrArray<Action<TContext, TExpressionEvent, TEvent>>;
export declare type StateKey = string | AnyState;
export interface StateValueMap {
    [key: string]: StateValue;
}
/**
 * The string or object representing the state value relative to the parent state node.
 *
 * - For a child atomic state node, this is a string, e.g., `"pending"`.
 * - For complex state nodes, this is an object, e.g., `{ success: "someChildState" }`.
 */
export declare type StateValue = string | StateValueMap;
export interface HistoryValue {
    states: Record<string, HistoryValue | undefined>;
    current: StateValue | undefined;
}
export declare type ConditionPredicate<TContext, TEvent extends EventObject> = (context: TContext, event: TEvent, meta: GuardMeta<TContext, TEvent>) => boolean;
export declare type DefaultGuardType = 'xstate.guard';
export interface GuardPredicate<TContext, TEvent extends EventObject> {
    type: DefaultGuardType;
    name: string | undefined;
    predicate: ConditionPredicate<TContext, TEvent>;
}
export declare type Guard<TContext, TEvent extends EventObject> = GuardPredicate<TContext, TEvent> | (Record<string, any> & {
    type: string;
});
export interface GuardMeta<TContext, TEvent extends EventObject> extends StateMeta<TContext, TEvent> {
    cond: Guard<TContext, TEvent>;
}
export declare type Condition<TContext, TEvent extends EventObject> = string | ConditionPredicate<TContext, TEvent> | Guard<TContext, TEvent>;
export declare type TransitionTarget<TContext, TEvent extends EventObject> = SingleOrArray<string | StateNode<TContext, any, TEvent>>;
export declare type TransitionTargets<TContext> = Array<string | StateNode<TContext, any>>;
export interface TransitionConfig<TContext, TExpressionEvent extends EventObject, TEvent extends EventObject = TExpressionEvent> {
    cond?: Condition<TContext, TExpressionEvent>;
    actions?: BaseActions<TContext, TExpressionEvent, TEvent, BaseActionObject>;
    in?: StateValue;
    internal?: boolean;
    target?: TransitionTarget<TContext, TEvent> | undefined;
    meta?: Record<string, any>;
    description?: string;
}
export interface TargetTransitionConfig<TContext, TEvent extends EventObject> extends TransitionConfig<TContext, TEvent> {
    target: TransitionTarget<TContext, TEvent>;
}
export declare type ConditionalTransitionConfig<TContext, TEvent extends EventObject = EventObject> = Array<TransitionConfig<TContext, TEvent>>;
export declare type Transition<TContext, TEvent extends EventObject = EventObject> = string | TransitionConfig<TContext, TEvent> | ConditionalTransitionConfig<TContext, TEvent>;
export declare type DisposeActivityFunction = () => void;
export declare type ActivityConfig<TContext, TEvent extends EventObject> = (ctx: TContext, activity: ActivityDefinition<TContext, TEvent>) => DisposeActivityFunction | void;
export declare type Activity<TContext, TEvent extends EventObject> = string | ActivityDefinition<TContext, TEvent>;
export interface ActivityDefinition<TContext, TEvent extends EventObject> extends ActionObject<TContext, TEvent> {
    id: string;
    type: string;
}
export declare type Sender<TEvent extends EventObject> = (event: Event<TEvent>) => void;
declare type ExcludeType<A> = {
    [K in Exclude<keyof A, 'type'>]: A[K];
};
declare type ExtractExtraParameters<A, T> = A extends {
    type: T;
} ? ExcludeType<A> : never;
declare type ExtractWithSimpleSupport<T extends {
    type: string;
}> = T extends any ? {
    type: T['type'];
} extends T ? T : never : never;
declare type NeverIfEmpty<T> = {} extends T ? never : T;
export interface PayloadSender<TEvent extends EventObject> {
    /**
     * Send an event object or just the event type, if the event has no other payload
     */
    (event: TEvent | ExtractWithSimpleSupport<TEvent>['type']): void;
    /**
     * Send an event type and its payload
     */
    <K extends TEvent['type']>(eventType: K, payload: NeverIfEmpty<ExtractExtraParameters<TEvent, K>>): void;
}
export declare type Receiver<TEvent extends EventObject> = (listener: {
    bivarianceHack(event: TEvent): void;
}['bivarianceHack']) => void;
export declare type InvokeCallback<TEvent extends EventObject = AnyEventObject, TSentEvent extends EventObject = AnyEventObject> = (callback: Sender<TSentEvent>, onReceive: Receiver<TEvent>) => (() => void) | Promise<any> | void;
export interface InvokeMeta {
    data: any;
    src: InvokeSourceDefinition;
    meta?: MetaObject;
}
/**
 * Returns either a Promises or a callback handler (for streams of events) given the
 * machine's current `context` and `event` that invoked the service.
 *
 * For Promises, the only events emitted to the parent will be:
 * - `done.invoke.<id>` with the `data` containing the resolved payload when the promise resolves, or:
 * - `error.platform.<id>` with the `data` containing the caught error, and `src` containing the service `id`.
 *
 * For callback handlers, the `callback` will be provided, which will send events to the parent service.
 *
 * @param context The current machine `context`
 * @param event The event that invoked the service
 */
export declare type InvokeCreator<TContext, TSourceEvent extends EventObject, TFinalContext = any, TInputEvent extends EventObject = any, // keeping a slot for it here, but it's actually not used right now to ensure that the communication contract between actors is satisfied
TOutputEvent extends EventObject = TSourceEvent> = (context: TContext, event: TSourceEvent, meta: InvokeMeta) => PromiseLike<TFinalContext> | StateMachine<TFinalContext, any, any, any, any, any, any> | Subscribable<EventObject> | InvokeCallback<TInputEvent, TOutputEvent> | Behavior<any>;
export interface InvokeDefinition<TContext, TEvent extends EventObject> extends ActivityDefinition<TContext, TEvent> {
    /**
     * The source of the machine to be invoked, or the machine itself.
     */
    src: string | InvokeSourceDefinition;
    /**
     * If `true`, events sent to the parent service will be forwarded to the invoked service.
     *
     * Default: `false`
     */
    autoForward?: boolean;
    /**
     * @deprecated
     *
     *  Use `autoForward` property instead of `forward`. Support for `forward` will get removed in the future.
     */
    forward?: boolean;
    /**
     * Data from the parent machine's context to set as the (partial or full) context
     * for the invoked child machine.
     *
     * Data should be mapped to match the child machine's context shape.
     */
    data?: Mapper<TContext, TEvent, any> | PropertyMapper<TContext, TEvent, any>;
    meta?: MetaObject;
}
export interface Delay {
    id: string;
    /**
     * The time to delay the event, in milliseconds.
     */
    delay: number;
}
export declare type DelayedTransitions<TContext, TEvent extends EventObject> = Record<string | number, string | SingleOrArray<TransitionConfig<TContext, TEvent>>> | Array<TransitionConfig<TContext, TEvent> & {
    delay: number | string | Expr<TContext, TEvent, number>;
}>;
export declare type StateTypes = 'atomic' | 'compound' | 'parallel' | 'final' | 'history' | string;
export declare type SingleOrArray<T> = T[] | T;
export declare type StateNodesConfig<TContext, TStateSchema extends StateSchema, TEvent extends EventObject> = {
    [K in keyof TStateSchema['states']]: StateNode<TContext, TStateSchema['states'][K] & {}, TEvent>;
};
export declare type StatesConfig<TContext, TStateSchema extends StateSchema, TEvent extends EventObject, TAction extends BaseActionObject = BaseActionObject> = {
    [K in keyof TStateSchema['states']]: StateNodeConfig<TContext, TStateSchema['states'][K] & {}, TEvent, TAction>;
};
export declare type StatesDefinition<TContext, TStateSchema extends StateSchema, TEvent extends EventObject> = {
    [K in keyof TStateSchema['states']]: StateNodeDefinition<TContext, TStateSchema['states'][K] & {}, TEvent>;
};
export declare type TransitionConfigTarget<TContext, TEvent extends EventObject> = string | undefined | StateNode<TContext, any, TEvent>;
export declare type TransitionConfigOrTarget<TContext, TExpressionEvent extends EventObject, TEvent extends EventObject = TExpressionEvent> = SingleOrArray<TransitionConfigTarget<TContext, TEvent> | TransitionConfig<TContext, TExpressionEvent, TEvent>>;
export declare type TransitionsConfigMap<TContext, TEvent extends EventObject> = {
    [K in TEvent['type'] | '' | '*']?: K extends '' | '*' ? TransitionConfigOrTarget<TContext, TEvent> : TransitionConfigOrTarget<TContext, ExtractEvent<TEvent, K>, TEvent>;
};
declare type TransitionsConfigArray<TContext, TEvent extends EventObject> = Array<(TEvent extends EventObject ? TransitionConfig<TContext, TEvent> & {
    event: TEvent['type'];
} : never) | (TransitionConfig<TContext, TEvent> & {
    event: '';
}) | (TransitionConfig<TContext, TEvent> & {
    event: '*';
})>;
export declare type TransitionsConfig<TContext, TEvent extends EventObject> = TransitionsConfigMap<TContext, TEvent> | TransitionsConfigArray<TContext, TEvent>;
export interface InvokeSourceDefinition {
    [key: string]: any;
    type: string;
}
export interface InvokeConfig<TContext, TEvent extends EventObject> {
    /**
     * The unique identifier for the invoked machine. If not specified, this
     * will be the machine's own `id`, or the URL (from `src`).
     */
    id?: string;
    /**
     * The source of the machine to be invoked, or the machine itself.
     */
    src: string | InvokeSourceDefinition | AnyStateMachine | InvokeCreator<TContext, TEvent, any>;
    /**
     * If `true`, events sent to the parent service will be forwarded to the invoked service.
     *
     * Default: `false`
     */
    autoForward?: boolean;
    /**
     * @deprecated
     *
     *  Use `autoForward` property instead of `forward`. Support for `forward` will get removed in the future.
     */
    forward?: boolean;
    /**
     * Data from the parent machine's context to set as the (partial or full) context
     * for the invoked child machine.
     *
     * Data should be mapped to match the child machine's context shape.
     */
    data?: Mapper<TContext, TEvent, any> | PropertyMapper<TContext, TEvent, any>;
    /**
     * The transition to take upon the invoked child machine reaching its final top-level state.
     */
    onDone?: string | SingleOrArray<TransitionConfigOrTarget<TContext, DoneInvokeEvent<any>>>;
    /**
     * The transition to take upon the invoked child machine sending an error event.
     */
    onError?: string | SingleOrArray<TransitionConfigOrTarget<TContext, DoneInvokeEvent<any>>>;
    /**
     * Meta data related to this invocation
     */
    meta?: MetaObject;
}
export interface StateNodeConfig<TContext, TStateSchema extends StateSchema, TEvent extends EventObject, TAction extends BaseActionObject = BaseActionObject> {
    /**
     * The relative key of the state node, which represents its location in the overall state value.
     * This is automatically determined by the configuration shape via the key where it was defined.
     */
    key?: string;
    /**
     * The initial state node key.
     */
    initial?: keyof TStateSchema['states'] | undefined;
    /**
     * @deprecated
     */
    parallel?: boolean | undefined;
    /**
     * The type of this state node:
     *
     *  - `'atomic'` - no child state nodes
     *  - `'compound'` - nested child state nodes (XOR)
     *  - `'parallel'` - orthogonal nested child state nodes (AND)
     *  - `'history'` - history state node
     *  - `'final'` - final state node
     */
    type?: 'atomic' | 'compound' | 'parallel' | 'final' | 'history';
    /**
     * Indicates whether the state node is a history state node, and what
     * type of history:
     * shallow, deep, true (shallow), false (none), undefined (none)
     */
    history?: 'shallow' | 'deep' | boolean | undefined;
    /**
     * The mapping of state node keys to their state node configurations (recursive).
     */
    states?: StatesConfig<TContext, TStateSchema, TEvent, TAction> | undefined;
    /**
     * The services to invoke upon entering this state node. These services will be stopped upon exiting this state node.
     */
    invoke?: SingleOrArray<InvokeConfig<TContext, TEvent> | AnyStateMachine>;
    /**
     * The mapping of event types to their potential transition(s).
     */
    on?: TransitionsConfig<TContext, TEvent>;
    /**
     * The action(s) to be executed upon entering the state node.
     *
     * @deprecated Use `entry` instead.
     */
    onEntry?: Actions<TContext, TEvent>;
    /**
     * The action(s) to be executed upon entering the state node.
     */
    entry?: BaseActions<TContext, TEvent, TEvent, TAction>;
    /**
     * The action(s) to be executed upon exiting the state node.
     *
     * @deprecated Use `exit` instead.
     */
    onExit?: Actions<TContext, TEvent>;
    /**
     * The action(s) to be executed upon exiting the state node.
     */
    exit?: BaseActions<TContext, TEvent, TEvent, TAction>;
    /**
     * The potential transition(s) to be taken upon reaching a final child state node.
     *
     * This is equivalent to defining a `[done(id)]` transition on this state node's `on` property.
     */
    onDone?: string | SingleOrArray<TransitionConfig<TContext, DoneEventObject>> | undefined;
    /**
     * The mapping (or array) of delays (in milliseconds) to their potential transition(s).
     * The delayed transitions are taken after the specified delay in an interpreter.
     */
    after?: DelayedTransitions<TContext, TEvent>;
    /**
     * An eventless transition that is always taken when this state node is active.
     * Equivalent to a transition specified as an empty `''`' string in the `on` property.
     */
    always?: TransitionConfigOrTarget<TContext, TEvent>;
    /**
     * The activities to be started upon entering the state node,
     * and stopped upon exiting the state node.
     *
     * @deprecated Use `invoke` instead.
     */
    activities?: SingleOrArray<Activity<TContext, TEvent>>;
    /**
     * @private
     */
    parent?: StateNode<TContext, any, TEvent>;
    strict?: boolean | undefined;
    /**
     * The meta data associated with this state node, which will be returned in State instances.
     */
    meta?: TStateSchema extends {
        meta: infer D;
    } ? D : any;
    /**
     * The data sent with the "done.state._id_" event if this is a final state node.
     *
     * The data will be evaluated with the current `context` and placed on the `.data` property
     * of the event.
     */
    data?: Mapper<TContext, TEvent, any> | PropertyMapper<TContext, TEvent, any>;
    /**
     * The unique ID of the state node, which can be referenced as a transition target via the
     * `#id` syntax.
     */
    id?: string | undefined;
    /**
     * The string delimiter for serializing the path to a string. The default is "."
     */
    delimiter?: string;
    /**
     * The order this state node appears. Corresponds to the implicit SCXML document order.
     */
    order?: number;
    /**
     * The tags for this state node, which are accumulated into the `state.tags` property.
     */
    tags?: SingleOrArray<string>;
    /**
     * Whether actions should be called in order.
     * When `false` (default), `assign(...)` actions are prioritized before other actions.
     *
     * @default false
     */
    preserveActionOrder?: boolean;
    /**
     * Whether XState calls actions with the event directly responsible for the related transition.
     *
     * @default false
     */
    predictableActionArguments?: boolean;
    /**
     * A text description of the state node
     */
    description?: string;
}
export interface StateNodeDefinition<TContext, TStateSchema extends StateSchema, TEvent extends EventObject> {
    id: string;
    version: string | undefined;
    key: string;
    context: TContext;
    type: 'atomic' | 'compound' | 'parallel' | 'final' | 'history';
    initial: StateNodeConfig<TContext, TStateSchema, TEvent>['initial'];
    history: boolean | 'shallow' | 'deep' | undefined;
    states: StatesDefinition<TContext, TStateSchema, TEvent>;
    on: TransitionDefinitionMap<TContext, TEvent>;
    transitions: Array<TransitionDefinition<TContext, TEvent>>;
    entry: Array<ActionObject<TContext, TEvent>>;
    exit: Array<ActionObject<TContext, TEvent>>;
    /**
     * @deprecated
     */
    activities: Array<ActivityDefinition<TContext, TEvent>>;
    meta: any;
    order: number;
    data?: FinalStateNodeConfig<TContext, TEvent>['data'];
    invoke: Array<InvokeDefinition<TContext, TEvent>>;
    description?: string;
    tags: string[];
}
export declare type AnyStateNodeDefinition = StateNodeDefinition<any, any, any>;
export declare type AnyState = State<any, any, any, any, any>;
export declare type AnyStateMachine = StateMachine<any, any, any, any, any, any, any>;
export interface AtomicStateNodeConfig<TContext, TEvent extends EventObject> extends StateNodeConfig<TContext, StateSchema, TEvent> {
    initial?: undefined;
    parallel?: false | undefined;
    states?: undefined;
    onDone?: undefined;
}
export interface HistoryStateNodeConfig<TContext, TEvent extends EventObject> extends AtomicStateNodeConfig<TContext, TEvent> {
    history: 'shallow' | 'deep' | true;
    target: StateValue | undefined;
}
export interface FinalStateNodeConfig<TContext, TEvent extends EventObject> extends AtomicStateNodeConfig<TContext, TEvent> {
    type: 'final';
    /**
     * The data to be sent with the "done.state.<id>" event. The data can be
     * static or dynamic (based on assigners).
     */
    data?: Mapper<TContext, TEvent, any> | PropertyMapper<TContext, TEvent, any>;
}
export declare type SimpleOrStateNodeConfig<TContext, TStateSchema extends StateSchema, TEvent extends EventObject> = AtomicStateNodeConfig<TContext, TEvent> | StateNodeConfig<TContext, TStateSchema, TEvent>;
export declare type ActionFunctionMap<TContext, TEvent extends EventObject, TAction extends BaseActionObject = BaseActionObject> = {
    [K in TAction['type']]?: ActionObject<TContext, TEvent> | ActionFunction<TContext, TEvent, TAction extends {
        type: K;
    } ? TAction : never>;
};
export declare type DelayFunctionMap<TContext, TEvent extends EventObject> = Record<string, DelayConfig<TContext, TEvent>>;
export declare type ServiceConfig<TContext, TEvent extends EventObject = AnyEventObject> = string | AnyStateMachine | InvokeCreator<TContext, TEvent>;
export declare type DelayConfig<TContext, TEvent extends EventObject> = number | DelayExpr<TContext, TEvent>;
declare type MachineOptionsActions<TContext, TResolvedTypesMeta, TEventsCausingActions = Prop<Prop<TResolvedTypesMeta, 'resolved'>, 'eventsCausingActions'>, TIndexedEvents = Prop<Prop<TResolvedTypesMeta, 'resolved'>, 'indexedEvents'>, TIndexedActions = Prop<Prop<TResolvedTypesMeta, 'resolved'>, 'indexedActions'>> = {
    [K in keyof TEventsCausingActions]?: ActionObject<TContext, Cast<Prop<TIndexedEvents, TEventsCausingActions[K]>, EventObject>, Cast<Prop<TIndexedEvents, keyof TIndexedEvents>, EventObject>, Cast<Prop<TIndexedActions, K>, BaseActionObject>> | ActionFunction<TContext, Cast<Prop<TIndexedEvents, TEventsCausingActions[K]>, EventObject>, Cast<Prop<TIndexedActions, K>, BaseActionObject>, Cast<Prop<TIndexedEvents, keyof TIndexedEvents>, EventObject>>;
};
declare type MachineOptionsDelays<TContext, TResolvedTypesMeta, TEventsCausingDelays = Prop<Prop<TResolvedTypesMeta, 'resolved'>, 'eventsCausingDelays'>, TIndexedEvents = Prop<Prop<TResolvedTypesMeta, 'resolved'>, 'indexedEvents'>> = {
    [K in keyof TEventsCausingDelays]?: DelayConfig<TContext, Cast<Prop<TIndexedEvents, TEventsCausingDelays[K]>, EventObject>>;
};
declare type MachineOptionsGuards<TContext, TResolvedTypesMeta, TEventsCausingGuards = Prop<Prop<TResolvedTypesMeta, 'resolved'>, 'eventsCausingGuards'>, TIndexedEvents = Prop<Prop<TResolvedTypesMeta, 'resolved'>, 'indexedEvents'>> = {
    [K in keyof TEventsCausingGuards]?: ConditionPredicate<TContext, Cast<Prop<TIndexedEvents, TEventsCausingGuards[K]>, EventObject>>;
};
declare type MachineOptionsServices<TContext, TResolvedTypesMeta, TEventsCausingServices = Prop<Prop<TResolvedTypesMeta, 'resolved'>, 'eventsCausingServices'>, TIndexedEvents = Prop<Prop<TResolvedTypesMeta, 'resolved'>, 'indexedEvents'>, TInvokeSrcNameMap = Prop<Prop<TResolvedTypesMeta, 'resolved'>, 'invokeSrcNameMap'>> = {
    [K in keyof TEventsCausingServices]?: AnyStateMachine | InvokeCreator<TContext, Cast<Prop<TIndexedEvents, TEventsCausingServices[K]>, EventObject>, Prop<Prop<TIndexedEvents, Prop<TInvokeSrcNameMap, K>>, 'data'>, EventObject, Cast<TIndexedEvents[keyof TIndexedEvents], EventObject>>;
};
declare type MakeKeysRequired<T extends string> = {
    [K in T]: unknown;
};
declare type MaybeMakeMissingImplementationsRequired<TImplementationType, TMissingImplementationsForType, TRequireMissingImplementations> = TRequireMissingImplementations extends true ? IsNever<TMissingImplementationsForType> extends true ? {} : {
    [K in Cast<TImplementationType, string>]: MakeKeysRequired<Cast<TMissingImplementationsForType, string>>;
} : {};
declare type GenerateActionsConfigPart<TContext, TResolvedTypesMeta, TRequireMissingImplementations, TMissingImplementations> = MaybeMakeMissingImplementationsRequired<'actions', Prop<TMissingImplementations, 'actions'>, TRequireMissingImplementations> & {
    actions?: MachineOptionsActions<TContext, TResolvedTypesMeta>;
};
declare type GenerateDelaysConfigPart<TContext, TResolvedTypesMeta, TRequireMissingImplementations, TMissingImplementations> = MaybeMakeMissingImplementationsRequired<'delays', Prop<TMissingImplementations, 'delays'>, TRequireMissingImplementations> & {
    delays?: MachineOptionsDelays<TContext, TResolvedTypesMeta>;
};
declare type GenerateGuardsConfigPart<TContext, TResolvedTypesMeta, TRequireMissingImplementations, TMissingImplementations> = MaybeMakeMissingImplementationsRequired<'guards', Prop<TMissingImplementations, 'guards'>, TRequireMissingImplementations> & {
    guards?: MachineOptionsGuards<TContext, TResolvedTypesMeta>;
};
declare type GenerateServicesConfigPart<TContext, TResolvedTypesMeta, TRequireMissingImplementations, TMissingImplementations> = MaybeMakeMissingImplementationsRequired<'services', Prop<TMissingImplementations, 'services'>, TRequireMissingImplementations> & {
    services?: MachineOptionsServices<TContext, TResolvedTypesMeta>;
};
export declare type InternalMachineOptions<TContext, TEvent extends EventObject, TResolvedTypesMeta, TRequireMissingImplementations extends boolean = false, TMissingImplementations = Prop<Prop<TResolvedTypesMeta, 'resolved'>, 'missingImplementations'>> = GenerateActionsConfigPart<TContext, TResolvedTypesMeta, TRequireMissingImplementations, TMissingImplementations> & GenerateDelaysConfigPart<TContext, TResolvedTypesMeta, TRequireMissingImplementations, TMissingImplementations> & GenerateGuardsConfigPart<TContext, TResolvedTypesMeta, TRequireMissingImplementations, TMissingImplementations> & GenerateServicesConfigPart<TContext, TResolvedTypesMeta, TRequireMissingImplementations, TMissingImplementations> & {
    /**
     * @deprecated Use `services` instead.
     */
    activities?: Record<string, ActivityConfig<TContext, TEvent>>;
};
export declare type MachineOptions<TContext, TEvent extends EventObject, TAction extends BaseActionObject = BaseActionObject, TServiceMap extends ServiceMap = ServiceMap, TTypesMeta extends TypegenConstraint = TypegenDisabled> = InternalMachineOptions<TContext, TEvent, ResolveTypegenMeta<TTypesMeta, TEvent, TAction, TServiceMap>>;
export interface MachineConfig<TContext, TStateSchema extends StateSchema, TEvent extends EventObject, TAction extends BaseActionObject = BaseActionObject, TServiceMap extends ServiceMap = ServiceMap, TTypesMeta = TypegenDisabled> extends StateNodeConfig<NoInfer<TContext>, TStateSchema, NoInfer<TEvent>, TAction> {
    /**
     * The initial context (extended state)
     */
    context?: LowInfer<TContext | (() => TContext)>;
    /**
     * The machine's own version.
     */
    version?: string;
    schema?: MachineSchema<TContext, TEvent, TServiceMap>;
    tsTypes?: TTypesMeta;
}
export declare type ServiceMap = Record<string, {
    data: any;
}>;
export interface MachineSchema<TContext, TEvent extends EventObject, TServiceMap extends ServiceMap = ServiceMap> {
    context?: TContext;
    events?: TEvent;
    actions?: {
        type: string;
        [key: string]: any;
    };
    guards?: {
        type: string;
        [key: string]: any;
    };
    services?: TServiceMap;
}
export interface StandardMachineConfig<TContext, TStateSchema extends StateSchema, TEvent extends EventObject> extends StateNodeConfig<TContext, TStateSchema, TEvent> {
}
export interface ParallelMachineConfig<TContext, TStateSchema extends StateSchema, TEvent extends EventObject> extends StateNodeConfig<TContext, TStateSchema, TEvent> {
    initial?: undefined;
    type?: 'parallel';
}
export interface EntryExitEffectMap<TContext, TEvent extends EventObject> {
    entry: Array<ActionObject<TContext, TEvent>>;
    exit: Array<ActionObject<TContext, TEvent>>;
}
export interface HistoryStateNode<TContext> extends StateNode<TContext> {
    history: 'shallow' | 'deep';
    target: StateValue | undefined;
}
/** @ts-ignore TS complains about withConfig & withContext not being compatible here when extending StateNode */
export interface StateMachine<TContext, TStateSchema extends StateSchema, TEvent extends EventObject, TTypestate extends Typestate<TContext> = {
    value: any;
    context: TContext;
}, TAction extends BaseActionObject = BaseActionObject, TServiceMap extends ServiceMap = ServiceMap, TResolvedTypesMeta = ResolveTypegenMeta<TypegenDisabled, NoInfer<TEvent>, TAction, TServiceMap>> extends StateNode<TContext, TStateSchema, TEvent, TTypestate, TServiceMap, TResolvedTypesMeta> {
    id: string;
    states: StateNode<TContext, TStateSchema, TEvent, TTypestate, TServiceMap, TResolvedTypesMeta>['states'];
    withConfig(options: InternalMachineOptions<TContext, TEvent, TResolvedTypesMeta, true>, context?: TContext | (() => TContext)): StateMachine<TContext, TStateSchema, TEvent, TTypestate, TAction, TServiceMap, AreAllImplementationsAssumedToBeProvided<TResolvedTypesMeta> extends false ? MarkAllImplementationsAsProvided<TResolvedTypesMeta> : TResolvedTypesMeta>;
    withContext(context: TContext | (() => TContext)): StateMachine<TContext, TStateSchema, TEvent, TTypestate, TAction, TServiceMap, TResolvedTypesMeta>;
    /** @deprecated an internal property acting as a "phantom" type, not meant to be used at runtime */
    __TContext: TContext;
    /** @deprecated an internal property acting as a "phantom" type, not meant to be used at runtime */
    __TStateSchema: TStateSchema;
    /** @deprecated an internal property acting as a "phantom" type, not meant to be used at runtime */
    __TEvent: TEvent;
    /** @deprecated an internal property acting as a "phantom" type, not meant to be used at runtime */
    __TTypestate: TTypestate;
    /** @deprecated an internal property acting as a "phantom" type, not meant to be used at runtime */
    __TAction: TAction;
    /** @deprecated an internal property acting as a "phantom" type, not meant to be used at runtime */
    __TServiceMap: TServiceMap;
    /** @deprecated an internal property acting as a "phantom" type, not meant to be used at runtime */
    __TResolvedTypesMeta: TResolvedTypesMeta;
}
export declare type StateFrom<T extends AnyStateMachine | ((...args: any[]) => AnyStateMachine)> = T extends AnyStateMachine ? ReturnType<T['transition']> : T extends (...args: any[]) => AnyStateMachine ? ReturnType<ReturnType<T>['transition']> : never;
export interface ActionMap<TContext, TEvent extends EventObject> {
    onEntry: Array<Action<TContext, TEvent>>;
    actions: Array<Action<TContext, TEvent>>;
    onExit: Array<Action<TContext, TEvent>>;
}
export interface EntryExitStates<TContext> {
    entry: Set<StateNode<TContext>>;
    exit: Set<StateNode<TContext>>;
}
export interface EntryExitStateArrays<TContext> {
    entry: Array<StateNode<TContext>>;
    exit: Array<StateNode<TContext>>;
}
export interface ActivityMap {
    [activityKey: string]: ActivityDefinition<any, any> | false;
}
export interface StateTransition<TContext, TEvent extends EventObject> {
    transitions: Array<TransitionDefinition<TContext, TEvent>>;
    configuration: Array<StateNode<TContext, any, TEvent, any, any, any>>;
    exitSet: Array<StateNode<TContext, any, TEvent, any, any, any>>;
    /**
     * The source state that preceded the transition.
     */
    source: State<TContext, any, any, any, any> | undefined;
    actions: Array<ActionObject<TContext, TEvent>>;
}
export interface TransitionData<TContext, TEvent extends EventObject> {
    value: StateValue | undefined;
    actions: ActionMap<TContext, TEvent>;
    activities?: ActivityMap;
}
export declare enum ActionTypes {
    Start = "xstate.start",
    Stop = "xstate.stop",
    Raise = "xstate.raise",
    Send = "xstate.send",
    Cancel = "xstate.cancel",
    NullEvent = "",
    Assign = "xstate.assign",
    After = "xstate.after",
    DoneState = "done.state",
    DoneInvoke = "done.invoke",
    Log = "xstate.log",
    Init = "xstate.init",
    Invoke = "xstate.invoke",
    ErrorExecution = "error.execution",
    ErrorCommunication = "error.communication",
    ErrorPlatform = "error.platform",
    ErrorCustom = "xstate.error",
    Update = "xstate.update",
    Pure = "xstate.pure",
    Choose = "xstate.choose"
}
export interface RaiseAction<TContext, TExpressionEvent extends EventObject, TEvent extends EventObject = TExpressionEvent> extends ActionObject<TContext, TExpressionEvent, TEvent> {
    type: ActionTypes.Raise;
    event: TEvent | SendExpr<TContext, TExpressionEvent, TEvent>;
    delay: number | string | undefined | DelayExpr<TContext, TExpressionEvent>;
    id: string | number | undefined;
}
export interface RaiseActionObject<TContext, TExpressionEvent extends EventObject, TEvent extends EventObject = TExpressionEvent> extends RaiseAction<TContext, TExpressionEvent, TEvent> {
    type: ActionTypes.Raise;
    _event: SCXML.Event<TEvent>;
    delay: number | undefined;
    id: string | number | undefined;
}
export interface DoneInvokeEvent<TData> extends EventObject {
    data: TData;
}
export interface ErrorExecutionEvent extends EventObject {
    src: string;
    type: ActionTypes.ErrorExecution;
    data: any;
}
export interface ErrorPlatformEvent extends EventObject {
    data: any;
}
export interface DoneEventObject extends EventObject {
    data?: any;
    toString(): string;
}
export interface UpdateObject extends EventObject {
    id: string | number;
    state: AnyState;
}
export declare type DoneEvent = DoneEventObject & string;
export interface NullEvent {
    type: ActionTypes.NullEvent;
}
export interface ActivityActionObject<TContext, TEvent extends EventObject> extends ActionObject<TContext, TEvent> {
    type: ActionTypes.Start | ActionTypes.Stop;
    activity: ActivityDefinition<TContext, TEvent> | undefined;
    exec: ActionFunction<TContext, TEvent> | undefined;
}
export interface InvokeActionObject<TContext, TEvent extends EventObject> extends ActivityActionObject<TContext, TEvent> {
    activity: InvokeDefinition<TContext, TEvent>;
}
export declare type DelayExpr<TContext, TEvent extends EventObject> = ExprWithMeta<TContext, TEvent, number>;
export declare type LogExpr<TContext, TEvent extends EventObject> = ExprWithMeta<TContext, TEvent, any>;
export interface LogAction<TContext, TExpressionEvent extends EventObject, TEvent extends EventObject = TExpressionEvent> extends ActionObject<TContext, TExpressionEvent, TEvent> {
    type: ActionTypes.Log;
    label: string | undefined;
    expr: string | LogExpr<TContext, TExpressionEvent>;
}
export interface LogActionObject<TContext, TEvent extends EventObject> extends LogAction<TContext, TEvent> {
    value: any;
}
export interface SendAction<TContext, TEvent extends EventObject, TSentEvent extends EventObject> extends ActionObject<TContext, TEvent, TSentEvent> {
    type: ActionTypes.Send;
    to: string | number | ActorRef<any> | ExprWithMeta<TContext, TEvent, string | number | ActorRef<any>> | undefined;
    event: TSentEvent | SendExpr<TContext, TEvent, TSentEvent>;
    delay?: number | string | DelayExpr<TContext, TEvent>;
    id: string | number;
}
export interface SendActionObject<TContext, TEvent extends EventObject, TSentEvent extends EventObject = AnyEventObject> extends SendAction<TContext, TEvent, TSentEvent> {
    to: string | number | ActorRef<any> | undefined;
    _event: SCXML.Event<TSentEvent>;
    event: TSentEvent;
    delay?: number;
    id: string | number;
}
export interface StopAction<TContext, TExpressionEvent extends EventObject, TEvent extends EventObject = TExpressionEvent> extends ActionObject<TContext, TExpressionEvent, TEvent> {
    type: ActionTypes.Stop;
    activity: string | {
        id: string;
    } | Expr<TContext, TExpressionEvent, string | {
        id: string;
    }>;
}
export interface StopActionObject {
    type: ActionTypes.Stop;
    activity: {
        id: string;
    };
}
export declare type Expr<TContext, TEvent extends EventObject, T> = (context: TContext, event: TEvent) => T;
export declare type ExprWithMeta<TContext, TEvent extends EventObject, T> = (context: TContext, event: TEvent, meta: SCXMLEventMeta<TEvent>) => T;
export declare type SendExpr<TContext, TEvent extends EventObject, TSentEvent extends EventObject = AnyEventObject> = ExprWithMeta<TContext, TEvent, TSentEvent>;
export declare enum SpecialTargets {
    Parent = "#_parent",
    Internal = "#_internal"
}
export interface SendActionOptions<TContext, TEvent extends EventObject> extends RaiseActionOptions<TContext, TEvent> {
    to?: string | ActorRef<any> | ExprWithMeta<TContext, TEvent, string | ActorRef<any>>;
}
export interface RaiseActionOptions<TContext, TEvent extends EventObject> {
    id?: string | number;
    delay?: number | string | DelayExpr<TContext, TEvent>;
}
export interface CancelAction<TContext, TExpressionEvent extends EventObject, TEvent extends EventObject = TExpressionEvent> extends ActionObject<TContext, TExpressionEvent, TEvent> {
    type: ActionTypes.Cancel;
    sendId: string | number;
}
export declare type Assigner<TContext, TEvent extends EventObject> = (context: TContext, event: TEvent, meta: AssignMeta<TContext, TEvent>) => Partial<TContext>;
export declare type PartialAssigner<TContext, TEvent extends EventObject, TKey extends keyof TContext> = (context: TContext, event: TEvent, meta: AssignMeta<TContext, TEvent>) => TContext[TKey];
export declare type PropertyAssigner<TContext, TEvent extends EventObject> = {
    [K in keyof TContext]?: PartialAssigner<TContext, TEvent, K> | TContext[K];
};
export declare type Mapper<TContext, TEvent extends EventObject, TParams extends {}> = (context: TContext, event: TEvent) => TParams;
export declare type PropertyMapper<TContext, TEvent extends EventObject, TParams extends {}> = {
    [K in keyof TParams]?: ((context: TContext, event: TEvent) => TParams[K]) | TParams[K];
};
export interface AnyAssignAction<TContext, TEvent extends EventObject> extends ActionObject<TContext, TEvent> {
    type: ActionTypes.Assign;
    assignment: any;
}
export interface AssignAction<TContext, TExpressionEvent extends EventObject, TEvent extends EventObject = TExpressionEvent> extends ActionObject<TContext, TExpressionEvent, TEvent> {
    type: ActionTypes.Assign;
    assignment: Assigner<TContext, TExpressionEvent> | PropertyAssigner<TContext, TExpressionEvent>;
}
export interface PureAction<TContext, TExpressionEvent extends EventObject, TEvent extends EventObject = TExpressionEvent> extends ActionObject<TContext, TExpressionEvent, TEvent> {
    type: ActionTypes.Pure;
    get: (context: TContext, event: TEvent) => SingleOrArray<ActionObject<TContext, TEvent> | ActionObject<TContext, TEvent>['type'] | ActionFunction<TContext, TEvent>> | undefined;
}
export interface ChooseAction<TContext, TExpressionEvent extends EventObject, TEvent extends EventObject = TExpressionEvent> extends ActionObject<TContext, TExpressionEvent, TEvent> {
    type: ActionTypes.Choose;
    conds: Array<ChooseCondition<TContext, TEvent>>;
}
export interface TransitionDefinition<TContext, TEvent extends EventObject> extends Omit<TransitionConfig<TContext, TEvent, any>, 'actions'> {
    target: Array<StateNode<TContext, any, TEvent>> | undefined;
    source: StateNode<TContext, any, TEvent>;
    actions: Array<ActionObject<TContext, TEvent>>;
    cond?: Guard<TContext, TEvent>;
    eventType: TEvent['type'] | NullEvent['type'] | '*';
    toJSON: () => {
        target: string[] | undefined;
        source: string;
        actions: Array<ActionObject<TContext, TEvent>>;
        cond?: Guard<TContext, TEvent>;
        eventType: TEvent['type'] | NullEvent['type'] | '*';
        meta?: Record<string, any>;
    };
}
export declare type TransitionDefinitionMap<TContext, TEvent extends EventObject> = {
    [K in TEvent['type'] | NullEvent['type'] | '*']: Array<TransitionDefinition<TContext, K extends TEvent['type'] ? Extract<TEvent, {
        type: K;
    }> : EventObject>>;
};
export interface DelayedTransitionDefinition<TContext, TEvent extends EventObject> extends TransitionDefinition<TContext, TEvent> {
    delay: number | string | DelayExpr<TContext, TEvent>;
}
export interface Edge<TContext, TEvent extends EventObject, TEventType extends TEvent['type'] = string> {
    event: TEventType;
    source: StateNode<TContext, any, TEvent>;
    target: StateNode<TContext, any, TEvent>;
    cond?: Condition<TContext, TEvent & {
        type: TEventType;
    }>;
    actions: Array<Action<TContext, TEvent>>;
    meta?: MetaObject;
    transition: TransitionDefinition<TContext, TEvent>;
}
export interface NodesAndEdges<TContext, TEvent extends EventObject> {
    nodes: StateNode[];
    edges: Array<Edge<TContext, TEvent, TEvent['type']>>;
}
export interface Segment<TContext, TEvent extends EventObject> {
    /**
     * From state.
     */
    state: State<TContext, TEvent>;
    /**
     * Event from state.
     */
    event: TEvent;
}
export interface PathItem<TContext, TEvent extends EventObject> {
    state: State<TContext, TEvent>;
    path: Array<Segment<TContext, TEvent>>;
    weight?: number;
}
export interface PathMap<TContext, TEvent extends EventObject> {
    [key: string]: PathItem<TContext, TEvent>;
}
export interface PathsItem<TContext, TEvent extends EventObject> {
    state: State<TContext, TEvent>;
    paths: Array<Array<Segment<TContext, TEvent>>>;
}
export interface PathsMap<TContext, TEvent extends EventObject> {
    [key: string]: PathsItem<TContext, TEvent>;
}
export interface TransitionMap {
    state: StateValue | undefined;
}
export interface AdjacencyMap {
    [stateId: string]: Record<string, TransitionMap>;
}
export interface ValueAdjacencyMap<TContext, TEvent extends EventObject> {
    [stateId: string]: Record<string, State<TContext, TEvent>>;
}
export interface SCXMLEventMeta<TEvent extends EventObject> {
    _event: SCXML.Event<TEvent>;
}
export interface StateMeta<TContext, TEvent extends EventObject> {
    state: State<TContext, TEvent, any, any, any>;
    _event: SCXML.Event<TEvent>;
}
export interface Typestate<TContext> {
    value: StateValue;
    context: TContext;
}
export interface StateLike<TContext> {
    value: StateValue;
    context: TContext;
    event: EventObject;
    _event: SCXML.Event<EventObject>;
}
export interface StateConfig<TContext, TEvent extends EventObject> {
    value: StateValue;
    context: TContext;
    _event: SCXML.Event<TEvent>;
    _sessionid: string | null;
    historyValue?: HistoryValue | undefined;
    history?: State<TContext, TEvent, any, any, any>;
    actions?: Array<ActionObject<TContext, TEvent>>;
    /**
     * @deprecated
     */
    activities?: ActivityMap;
    meta?: any;
    /**
     * @deprecated
     */
    events?: TEvent[];
    configuration: Array<StateNode<TContext, any, TEvent>>;
    transitions: Array<TransitionDefinition<TContext, TEvent>>;
    children: Record<string, ActorRef<any>>;
    done?: boolean;
    tags?: Set<string>;
    machine?: StateMachine<TContext, any, TEvent, any, any, any, any>;
}
export declare type AnyStateConfig = StateConfig<any, AnyEventObject>;
export interface StateSchema<TC = any> {
    meta?: any;
    context?: Partial<TC>;
    states?: {
        [key: string]: StateSchema<TC>;
    };
}
export interface InterpreterOptions {
    /**
     * Whether state actions should be executed immediately upon transition. Defaults to `true`.
     */
    execute?: boolean;
    clock?: Clock;
    logger?: (...args: any[]) => void;
    parent?: AnyInterpreter;
    /**
     * If `true`, defers processing of sent events until the service
     * is initialized (`.start()`). Otherwise, an error will be thrown
     * for events sent to an uninitialized service.
     *
     * Default: `true`
     */
    deferEvents?: boolean;
    /**
     * The custom `id` for referencing this service.
     */
    id?: string;
    /**
     * If `true`, states and events will be logged to Redux DevTools.
     *
     * Default: `false`
     */
    devTools?: boolean | object;
}
export declare namespace SCXML {
    interface Event<TEvent extends EventObject> {
        /**
         * This is a character string giving the name of the event.
         * The SCXML Processor must set the name field to the name of this event.
         * It is what is matched against the 'event' attribute of <transition>.
         * Note that transitions can do additional tests by using the value of this field
         * inside boolean expressions in the 'cond' attribute.
         */
        name: string;
        /**
         * This field describes the event type.
         * The SCXML Processor must set it to: "platform" (for events raised by the platform itself, such as error events),
         * "internal" (for events raised by <raise> and <send> with target '_internal')
         * or "external" (for all other events).
         */
        type: 'platform' | 'internal' | 'external';
        /**
         * If the sending entity has specified a value for this, the Processor must set this field to that value
         * (see C Event I/O Processors for details).
         * Otherwise, in the case of error events triggered by a failed attempt to send an event,
         * the Processor must set this field to the send id of the triggering <send> element.
         * Otherwise it must leave it blank.
         */
        sendid?: string;
        /**
         * This is a URI, equivalent to the 'target' attribute on the <send> element.
         * For external events, the SCXML Processor should set this field to a value which,
         * when used as the value of 'target', will allow the receiver of the event to <send>
         * a response back to the originating entity via the Event I/O Processor specified in 'origintype'.
         * For internal and platform events, the Processor must leave this field blank.
         */
        origin?: string;
        /**
         * This is equivalent to the 'type' field on the <send> element.
         * For external events, the SCXML Processor should set this field to a value which,
         * when used as the value of 'type', will allow the receiver of the event to <send>
         * a response back to the originating entity at the URI specified by 'origin'.
         * For internal and platform events, the Processor must leave this field blank.
         */
        origintype?: string;
        /**
         * If this event is generated from an invoked child process, the SCXML Processor
         * must set this field to the invoke id of the invocation that triggered the child process.
         * Otherwise it must leave it blank.
         */
        invokeid?: string;
        /**
         * This field contains whatever data the sending entity chose to include in this event.
         * The receiving SCXML Processor should reformat this data to match its data model,
         * but must not otherwise modify it.
         *
         * If the conversion is not possible, the Processor must leave the field blank
         * and must place an error 'error.execution' in the internal event queue.
         */
        data: TEvent;
        /**
         * @private
         */
        $$type: 'scxml';
    }
}
export interface Observer<T> {
    next: (value: T) => void;
    error: (err: any) => void;
    complete: () => void;
}
export interface Subscription {
    unsubscribe(): void;
}
export interface InteropObservable<T> {
    [Symbol.observable]: () => InteropSubscribable<T>;
}
export interface InteropSubscribable<T> {
    subscribe(observer: Observer<T>): Subscription;
}
export interface Subscribable<T> extends InteropSubscribable<T> {
    subscribe(observer: Observer<T>): Subscription;
    subscribe(next: (value: T) => void, error?: (error: any) => void, complete?: () => void): Subscription;
}
export declare type Spawnable = AnyStateMachine | PromiseLike<any> | InvokeCallback | InteropObservable<any> | Subscribable<any> | Behavior<any>;
export declare type ExtractEvent<TEvent extends EventObject, TEventType extends TEvent['type']> = TEvent extends any ? TEventType extends TEvent['type'] ? TEvent : never : never;
export interface BaseActorRef<TEvent extends EventObject> {
    send: (event: TEvent) => void;
}
export interface ActorRef<TEvent extends EventObject, TEmitted = any> extends Subscribable<TEmitted>, InteropObservable<TEmitted> {
    send: Sender<TEvent>;
    id: string;
    getSnapshot: () => TEmitted | undefined;
    stop?: () => void;
    toJSON?: () => any;
}
export declare type AnyActorRef = ActorRef<any, any>;
/**
 * @deprecated Use `ActorRef` instead.
 */
export declare type SpawnedActorRef<TEvent extends EventObject, TEmitted = any> = ActorRef<TEvent, TEmitted>;
export declare type ActorRefWithDeprecatedState<TContext, TEvent extends EventObject, TTypestate extends Typestate<TContext>, TResolvedTypesMeta = TypegenDisabled> = ActorRef<TEvent, State<TContext, TEvent, any, TTypestate, TResolvedTypesMeta>> & {
    /**
     * @deprecated Use `.getSnapshot()` instead.
     */
    state: State<TContext, TEvent, any, TTypestate, TResolvedTypesMeta>;
};
export declare type ActorRefFrom<T> = ReturnTypeOrValue<T> extends infer R ? R extends StateMachine<infer TContext, any, infer TEvent, infer TTypestate, any, any, infer TResolvedTypesMeta> ? ActorRefWithDeprecatedState<TContext, TEvent, TTypestate, AreAllImplementationsAssumedToBeProvided<TResolvedTypesMeta> extends false ? MarkAllImplementationsAsProvided<TResolvedTypesMeta> : TResolvedTypesMeta> : R extends Promise<infer U> ? ActorRef<never, U> : R extends Behavior<infer TEvent, infer TEmitted> ? ActorRef<TEvent, TEmitted> : never : never;
export declare type AnyInterpreter = Interpreter<any, any, any, any, any>;
export declare type InterpreterFrom<T extends AnyStateMachine | ((...args: any[]) => AnyStateMachine)> = ReturnTypeOrValue<T> extends StateMachine<infer TContext, infer TStateSchema, infer TEvent, infer TTypestate, any, any, infer TResolvedTypesMeta> ? Interpreter<TContext, TStateSchema, TEvent, TTypestate, AreAllImplementationsAssumedToBeProvided<TResolvedTypesMeta> extends false ? MarkAllImplementationsAsProvided<TResolvedTypesMeta> : TResolvedTypesMeta> : never;
export declare type MachineOptionsFrom<T extends AnyStateMachine | ((...args: any[]) => AnyStateMachine), TRequireMissingImplementations extends boolean = false> = ReturnTypeOrValue<T> extends StateMachine<infer TContext, any, infer TEvent, any, any, any, infer TResolvedTypesMeta> ? InternalMachineOptions<TContext, TEvent, TResolvedTypesMeta, TRequireMissingImplementations> : never;
export declare type __ResolvedTypesMetaFrom<T> = T extends StateMachine<any, any, any, any, any, any, infer TResolvedTypesMeta> ? TResolvedTypesMeta : never;
export interface ActorContext<TEvent extends EventObject, TEmitted> {
    parent?: ActorRef<any, any>;
    self: ActorRef<TEvent, TEmitted>;
    id: string;
    observers: Set<Observer<TEmitted>>;
}
export interface Behavior<TEvent extends EventObject, TEmitted = any> {
    transition: (state: TEmitted, event: TEvent, actorCtx: ActorContext<TEvent, TEmitted>) => TEmitted;
    initialState: TEmitted;
    start?: (actorCtx: ActorContext<TEvent, TEmitted>) => TEmitted;
}
export declare type EmittedFrom<T> = ReturnTypeOrValue<T> extends infer R ? R extends StateMachine<infer _, infer __, infer ___, infer ____, infer _____, infer ______, infer _______> ? R['initialState'] : R extends Interpreter<infer _, infer __, infer ___, infer ____, infer _____> ? R['initialState'] : R extends ActorRef<infer _, infer TEmitted> ? TEmitted : R extends Behavior<infer _, infer TEmitted> ? TEmitted : R extends ActorContext<infer _, infer TEmitted> ? TEmitted : never : never;
declare type ResolveEventType<T> = ReturnTypeOrValue<T> extends infer R ? R extends StateMachine<infer _, infer __, infer TEvent, infer ___, infer ____, infer _____, infer ______> ? TEvent : R extends Model<infer _, infer TEvent, infer __, infer ___> ? TEvent : R extends State<infer _, infer TEvent, infer __, infer ___, infer ____> ? TEvent : R extends Interpreter<infer _, infer __, infer TEvent, infer ___, infer ____> ? TEvent : R extends ActorRef<infer TEvent, infer _> ? TEvent : never : never;
export declare type EventFrom<T, K extends Prop<TEvent, 'type'> = never, TEvent extends EventObject = ResolveEventType<T>> = IsNever<K> extends true ? TEvent : ExtractEvent<TEvent, K>;
export declare type ContextFrom<T> = ReturnTypeOrValue<T> extends infer R ? R extends StateMachine<infer TContext, infer _, infer __, infer ___, infer ____, infer _____, infer ______> ? TContext : R extends Model<infer TContext, infer _, infer __, infer ___> ? TContext : R extends State<infer TContext, infer _, infer __, infer ___, infer ____> ? TContext : R extends Interpreter<infer TContext, infer _, infer __, infer ___, infer ____> ? TContext : never : never;
declare type Matches<TypegenEnabledArg, TypegenDisabledArg> = {
    (stateValue: TypegenEnabledArg): any;
    (stateValue: TypegenDisabledArg): any;
};
export declare type StateValueFrom<TMachine extends AnyStateMachine> = StateFrom<TMachine>['matches'] extends Matches<infer TypegenEnabledArg, infer TypegenDisabledArg> ? TMachine['__TResolvedTypesMeta'] extends TypegenEnabled ? TypegenEnabledArg : TypegenDisabledArg : never;
export declare type PredictableActionArgumentsExec = (action: ActionObject<unknown, EventObject>, context: unknown, _event: SCXML.Event<EventObject>) => void;
export declare type TagsFrom<TMachine extends AnyStateMachine> = Parameters<StateFrom<TMachine>['hasTag']>[0];
export {};
//# sourceMappingURL=types.d.ts.map