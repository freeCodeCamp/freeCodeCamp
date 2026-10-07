import { StateMachine, Event, EventObject, DefaultContext, StateSchema, StateValue, InterpreterOptions, SingleOrArray, DoneEvent, MachineOptions, SCXML, EventData, Observer, Spawnable, Typestate, ActorRef, ActorRefFrom, Behavior, Subscription, StateConfig, InteropSubscribable } from './types';
import { State } from './State';
import { symbolObservable } from './utils';
import { AreAllImplementationsAssumedToBeProvided, MissingImplementationsError, TypegenDisabled } from './typegenTypes';
export declare type StateListener<TContext, TEvent extends EventObject, TStateSchema extends StateSchema<TContext> = any, TTypestate extends Typestate<TContext> = {
    value: any;
    context: TContext;
}, TResolvedTypesMeta = TypegenDisabled> = (state: State<TContext, TEvent, TStateSchema, TTypestate, TResolvedTypesMeta>, event: TEvent) => void;
export declare type ContextListener<TContext = DefaultContext> = (context: TContext, prevContext: TContext | undefined) => void;
export declare type EventListener<TEvent extends EventObject = EventObject> = (event: TEvent) => void;
export declare type Listener = () => void;
export interface Clock {
    setTimeout(fn: (...args: any[]) => void, timeout: number): any;
    clearTimeout(id: any): void;
}
interface SpawnOptions {
    name?: string;
    autoForward?: boolean;
    sync?: boolean;
}
export declare enum InterpreterStatus {
    NotStarted = 0,
    Running = 1,
    Stopped = 2
}
export declare class Interpreter<TContext, TStateSchema extends StateSchema = any, TEvent extends EventObject = EventObject, TTypestate extends Typestate<TContext> = {
    value: any;
    context: TContext;
}, TResolvedTypesMeta = TypegenDisabled> implements ActorRef<TEvent, State<TContext, TEvent, TStateSchema, TTypestate, TResolvedTypesMeta>> {
    machine: StateMachine<TContext, TStateSchema, TEvent, TTypestate, any, any, TResolvedTypesMeta>;
    /**
     * The default interpreter options:
     *
     * - `clock` uses the global `setTimeout` and `clearTimeout` functions
     * - `logger` uses the global `console.log()` method
     */
    static defaultOptions: {
        execute: boolean;
        deferEvents: boolean;
        clock: Clock;
        logger: any;
        devTools: boolean;
    };
    /**
     * The current state of the interpreted machine.
     */
    private _state?;
    private _initialState?;
    /**
     * The clock that is responsible for setting and clearing timeouts, such as delayed events and transitions.
     */
    clock: Clock;
    options: Readonly<InterpreterOptions>;
    private scheduler;
    private delayedEventsMap;
    private listeners;
    private contextListeners;
    private stopListeners;
    private doneListeners;
    private eventListeners;
    private sendListeners;
    private logger;
    /**
     * Whether the service is started.
     */
    initialized: boolean;
    status: InterpreterStatus;
    parent?: Interpreter<any>;
    id: string;
    /**
     * The globally unique process ID for this invocation.
     */
    sessionId: string;
    children: Map<string | number, ActorRef<any>>;
    private forwardTo;
    private _outgoingQueue;
    private devTools?;
    private _doneEvent?;
    /**
     * Creates a new Interpreter instance (i.e., service) for the given machine with the provided options, if any.
     *
     * @param machine The machine to be interpreted
     * @param options Interpreter options
     */
    constructor(machine: StateMachine<TContext, TStateSchema, TEvent, TTypestate, any, any, TResolvedTypesMeta>, options?: InterpreterOptions);
    get initialState(): State<TContext, TEvent, TStateSchema, TTypestate, TResolvedTypesMeta>;
    /**
     * @deprecated Use `.getSnapshot()` instead.
     */
    get state(): State<TContext, TEvent, TStateSchema, TTypestate, TResolvedTypesMeta>;
    static interpret: typeof interpret;
    /**
     * Executes the actions of the given state, with that state's `context` and `event`.
     *
     * @param state The state whose actions will be executed
     * @param actionsConfig The action implementations to use
     */
    execute(state: State<TContext, TEvent, TStateSchema, TTypestate, TResolvedTypesMeta>, actionsConfig?: MachineOptions<TContext, TEvent>['actions']): void;
    private update;
    onTransition(listener: StateListener<TContext, TEvent, TStateSchema, TTypestate, TResolvedTypesMeta>): this;
    subscribe(observer: Partial<Observer<State<TContext, TEvent, any, TTypestate, TResolvedTypesMeta>>>): Subscription;
    subscribe(nextListener?: (state: State<TContext, TEvent, any, TTypestate, TResolvedTypesMeta>) => void, errorListener?: (error: any) => void, completeListener?: () => void): Subscription;
    /**
     * Adds an event listener that is notified whenever an event is sent to the running interpreter.
     * @param listener The event listener
     */
    onEvent(listener: EventListener): this;
    /**
     * Adds an event listener that is notified whenever a `send` event occurs.
     * @param listener The event listener
     */
    onSend(listener: EventListener): this;
    /**
     * Adds a context listener that is notified whenever the state context changes.
     * @param listener The context listener
     */
    onChange(listener: ContextListener<TContext>): this;
    /**
     * Adds a listener that is notified when the machine is stopped.
     * @param listener The listener
     */
    onStop(listener: Listener): this;
    /**
     * Adds a state listener that is notified when the statechart has reached its final state.
     * @param listener The state listener
     */
    onDone(listener: EventListener<DoneEvent>): this;
    /**
     * Removes a listener.
     * @param listener The listener to remove
     */
    off(listener: (...args: any[]) => void): this;
    /**
     * Alias for Interpreter.prototype.start
     */
    init: (initialState?: State<TContext, TEvent, TStateSchema, TTypestate, TResolvedTypesMeta> | StateConfig<TContext, TEvent> | StateValue) => this;
    /**
     * Starts the interpreter from the given state, or the initial state.
     * @param initialState The state to start the statechart from
     */
    start(initialState?: State<TContext, TEvent, TStateSchema, TTypestate, TResolvedTypesMeta> | StateConfig<TContext, TEvent> | StateValue): this;
    private _stopChildren;
    private _stop;
    /**
     * Stops the interpreter and unsubscribe all listeners.
     *
     * This will also notify the `onStop` listeners.
     */
    stop(): this;
    /**
     * Sends an event to the running interpreter to trigger a transition.
     *
     * An array of events (batched) can be sent as well, which will send all
     * batched events to the running interpreter. The listeners will be
     * notified only **once** when all events are processed.
     *
     * @param event The event(s) to send
     */
    send: (event: SingleOrArray<Event<TEvent>> | SCXML.Event<TEvent>, payload?: EventData) => State<TContext, TEvent, TStateSchema, TTypestate, TResolvedTypesMeta>;
    private batch;
    /**
     * Returns a send function bound to this interpreter instance.
     *
     * @param event The event to be sent by the sender.
     */
    sender(event: Event<TEvent>): () => State<TContext, TEvent, TStateSchema, TTypestate>;
    private sendTo;
    private _nextState;
    /**
     * Returns the next state given the interpreter's current state and the event.
     *
     * This is a pure method that does _not_ update the interpreter's state.
     *
     * @param event The event to determine the next state
     */
    nextState(event: Event<TEvent> | SCXML.Event<TEvent>): State<TContext, TEvent, TStateSchema, TTypestate, TResolvedTypesMeta>;
    private forward;
    private defer;
    private cancel;
    private _exec;
    private exec;
    private removeChild;
    private stopChild;
    spawn(entity: Spawnable, name: string, options?: SpawnOptions): ActorRef<any>;
    spawnMachine<TChildContext, TChildStateSchema extends StateSchema, TChildEvent extends EventObject>(machine: StateMachine<TChildContext, TChildStateSchema, TChildEvent>, options?: {
        id?: string;
        autoForward?: boolean;
        sync?: boolean;
    }): ActorRef<TChildEvent, State<TChildContext, TChildEvent>>;
    private spawnBehavior;
    private spawnPromise;
    private spawnCallback;
    private spawnObservable;
    private spawnActor;
    private spawnActivity;
    private spawnEffect;
    private attachDev;
    toJSON(): {
        id: string;
    };
    [Symbol.observable](): InteropSubscribable<State<TContext, TEvent, TStateSchema, TTypestate, TResolvedTypesMeta>>;
    getSnapshot(): State<TContext, TEvent, TStateSchema, TTypestate, TResolvedTypesMeta>;
}
export declare function spawn<T extends Behavior<any, any>>(entity: T, nameOrOptions?: string | SpawnOptions): ActorRefFrom<T>;
export declare function spawn<TC, TE extends EventObject>(entity: StateMachine<TC, any, TE, any, any, any, any>, nameOrOptions?: string | SpawnOptions): ActorRefFrom<StateMachine<TC, any, TE, any, any, any, any>>;
export declare function spawn(entity: Spawnable, nameOrOptions?: string | SpawnOptions): ActorRef<any>;
/**
 * Creates a new Interpreter instance for the given machine with the provided options, if any.
 *
 * @param machine The machine to interpret
 * @param options Interpreter options
 */
export declare function interpret<TContext = DefaultContext, TStateSchema extends StateSchema = any, TEvent extends EventObject = EventObject, TTypestate extends Typestate<TContext> = {
    value: any;
    context: TContext;
}, TResolvedTypesMeta = TypegenDisabled>(machine: AreAllImplementationsAssumedToBeProvided<TResolvedTypesMeta> extends true ? StateMachine<TContext, TStateSchema, TEvent, TTypestate, any, any, TResolvedTypesMeta> : MissingImplementationsError<TResolvedTypesMeta>, options?: InterpreterOptions): Interpreter<TContext, TStateSchema, TEvent, TTypestate, TResolvedTypesMeta>;
export {};
//# sourceMappingURL=interpreter.d.ts.map