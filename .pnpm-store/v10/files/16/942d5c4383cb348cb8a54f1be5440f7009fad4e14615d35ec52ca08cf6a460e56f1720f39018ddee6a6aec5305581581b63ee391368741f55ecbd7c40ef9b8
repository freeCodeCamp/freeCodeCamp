import { StateValue, ActivityMap, EventObject, HistoryValue, ActionObject, StateConfig, SCXML, StateSchema, TransitionDefinition, Typestate, ActorRef, StateMachine, SimpleEventsOf } from './types';
import { StateNode } from './StateNode';
import { TypegenDisabled, TypegenEnabled } from './typegenTypes';
import { BaseActionObject, Prop } from './types';
export declare function stateValuesEqual(a: StateValue | undefined, b: StateValue | undefined): boolean;
export declare function isStateConfig<TContext, TEvent extends EventObject>(state: any): state is StateConfig<TContext, TEvent>;
/**
 * @deprecated Use `isStateConfig(object)` or `state instanceof State` instead.
 */
export declare const isState: typeof isStateConfig;
export declare function bindActionToState<TC, TE extends EventObject>(action: ActionObject<TC, TE>, state: State<TC, TE, any, any, any>): ActionObject<TC, TE>;
export declare class State<TContext, TEvent extends EventObject = EventObject, TStateSchema extends StateSchema<TContext> = any, TTypestate extends Typestate<TContext> = {
    value: any;
    context: TContext;
}, TResolvedTypesMeta = TypegenDisabled> {
    value: StateValue;
    context: TContext;
    historyValue?: HistoryValue | undefined;
    history?: State<TContext, TEvent, TStateSchema, TTypestate, TResolvedTypesMeta>;
    actions: Array<ActionObject<TContext, TEvent>>;
    activities: ActivityMap;
    meta: any;
    events: TEvent[];
    event: TEvent;
    _event: SCXML.Event<TEvent>;
    _sessionid: string | null;
    /**
     * Indicates whether the state has changed from the previous state. A state is considered "changed" if:
     *
     * - Its value is not equal to its previous value, or:
     * - It has any new actions (side-effects) to execute.
     *
     * An initial state (with no history) will return `undefined`.
     */
    changed: boolean | undefined;
    /**
     * Indicates whether the state is a final state.
     */
    done: boolean | undefined;
    /**
     * The enabled state nodes representative of the state value.
     */
    configuration: Array<StateNode<TContext, any, TEvent, any, any>>;
    /**
     * The next events that will cause a transition from the current state.
     */
    nextEvents: Array<TEvent['type']>;
    /**
     * The transition definitions that resulted in this state.
     */
    transitions: Array<TransitionDefinition<TContext, TEvent>>;
    /**
     * An object mapping actor IDs to spawned actors/invoked services.
     */
    children: Record<string, ActorRef<any>>;
    tags: Set<string>;
    machine: StateMachine<TContext, any, TEvent, TTypestate, BaseActionObject, any, TResolvedTypesMeta> | undefined;
    /**
     * Creates a new State instance for the given `stateValue` and `context`.
     * @param stateValue
     * @param context
     */
    static from<TC, TE extends EventObject = EventObject>(stateValue: State<TC, TE, any, any, any> | StateValue, context?: TC | undefined): State<TC, TE, any, any, any>;
    /**
     * Creates a new State instance for the given `config`.
     * @param config The state config
     */
    static create<TC, TE extends EventObject = EventObject>(config: StateConfig<TC, TE>): State<TC, TE, any, any, any>;
    /**
     * Creates a new `State` instance for the given `stateValue` and `context` with no actions (side-effects).
     * @param stateValue
     * @param context
     */
    static inert<TC, TE extends EventObject = EventObject>(stateValue: State<TC, TE, any, any, any> | StateValue, context: TC): State<TC, TE>;
    /**
     * Creates a new State instance.
     * @param value The state value
     * @param context The extended state
     * @param historyValue The tree representing historical values of the state nodes
     * @param history The previous state
     * @param actions An array of action objects to execute as side-effects
     * @param activities A mapping of activities and whether they are started (`true`) or stopped (`false`).
     * @param meta
     * @param events Internal event queue. Should be empty with run-to-completion semantics.
     * @param configuration
     */
    constructor(config: StateConfig<TContext, TEvent>);
    /**
     * Returns an array of all the string leaf state node paths.
     * @param stateValue
     * @param delimiter The character(s) that separate each subpath in the string state node path.
     */
    toStrings(stateValue?: StateValue, delimiter?: string): string[];
    toJSON(): Omit<this, "configuration" | "transitions" | "tags" | "machine" | "toStrings" | "toJSON" | "matches" | "hasTag" | "can"> & {
        tags: string[];
    };
    /**
     * Whether the current state value is a subset of the given parent state value.
     * @param parentStateValue
     */
    matches<TSV extends TResolvedTypesMeta extends TypegenEnabled ? Prop<Prop<TResolvedTypesMeta, 'resolved'>, 'matchesStates'> : never>(parentStateValue: TSV): boolean;
    matches<TSV extends TResolvedTypesMeta extends TypegenDisabled ? TTypestate['value'] : never>(parentStateValue: TSV): this is State<(TTypestate extends any ? {
        value: TSV;
        context: any;
    } extends TTypestate ? TTypestate : never : never)['context'], TEvent, TStateSchema, TTypestate, TResolvedTypesMeta> & {
        value: TSV;
    };
    /**
     * Whether the current state configuration has a state node with the specified `tag`.
     * @param tag
     */
    hasTag(tag: TResolvedTypesMeta extends TypegenEnabled ? Prop<Prop<TResolvedTypesMeta, 'resolved'>, 'tags'> : string): boolean;
    /**
     * Determines whether sending the `event` will cause a non-forbidden transition
     * to be selected, even if the transitions have no actions nor
     * change the state value.
     *
     * @param event The event to test
     * @returns Whether the event will cause a transition
     */
    can(event: TEvent | SimpleEventsOf<TEvent>['type']): boolean;
}
//# sourceMappingURL=State.d.ts.map