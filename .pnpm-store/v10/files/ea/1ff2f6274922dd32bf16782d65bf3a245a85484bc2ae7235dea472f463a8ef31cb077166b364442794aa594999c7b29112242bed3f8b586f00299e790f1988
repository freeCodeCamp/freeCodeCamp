import { Event, StateValue, StateTransition, MachineOptions, EventObject, HistoryValue, StateNodeDefinition, TransitionDefinition, DelayedTransitionDefinition, ActivityDefinition, StateNodeConfig, StateSchema, StateNodesConfig, InvokeDefinition, ActionObject, Mapper, PropertyMapper, SCXML, Typestate, TransitionDefinitionMap, MachineSchema, InternalMachineOptions, ServiceMap, StateConfig, PredictableActionArgumentsExec } from './types';
import { State } from './State';
import { TypegenDisabled } from './typegenTypes';
declare class StateNode<TContext = any, TStateSchema extends StateSchema = any, TEvent extends EventObject = EventObject, TTypestate extends Typestate<TContext> = {
    value: any;
    context: TContext;
}, TServiceMap extends ServiceMap = ServiceMap, TResolvedTypesMeta = TypegenDisabled> {
    /**
     * The raw config used to create the machine.
     */
    config: StateNodeConfig<TContext, TStateSchema, TEvent>;
    /**
     * The initial extended state
     */
    private _context;
    /**
     * The relative key of the state node, which represents its location in the overall state value.
     */
    key: string;
    /**
     * The unique ID of the state node.
     */
    id: string;
    /**
     * The machine's own version.
     */
    version?: string;
    /**
     * The type of this state node:
     *
     *  - `'atomic'` - no child state nodes
     *  - `'compound'` - nested child state nodes (XOR)
     *  - `'parallel'` - orthogonal nested child state nodes (AND)
     *  - `'history'` - history state node
     *  - `'final'` - final state node
     */
    type: 'atomic' | 'compound' | 'parallel' | 'final' | 'history';
    /**
     * The string path from the root machine node to this node.
     */
    path: string[];
    /**
     * The initial state node key.
     */
    initial?: keyof TStateSchema['states'];
    /**
     * (DEPRECATED) Whether the state node is a parallel state node.
     *
     * Use `type: 'parallel'` instead.
     */
    parallel?: boolean;
    /**
     * Whether the state node is "transient". A state node is considered transient if it has
     * an immediate transition from a "null event" (empty string), taken upon entering the state node.
     */
    private _transient;
    /**
     * The child state nodes.
     */
    states: StateNodesConfig<TContext, TStateSchema, TEvent>;
    /**
     * The type of history on this state node. Can be:
     *
     *  - `'shallow'` - recalls only top-level historical state value
     *  - `'deep'` - recalls historical state value at all levels
     */
    history: false | 'shallow' | 'deep';
    /**
     * The action(s) to be executed upon entering the state node.
     */
    onEntry: Array<ActionObject<TContext, TEvent>>;
    /**
     * The action(s) to be executed upon exiting the state node.
     */
    onExit: Array<ActionObject<TContext, TEvent>>;
    /**
     * The activities to be started upon entering the state node,
     * and stopped upon exiting the state node.
     */
    activities: Array<ActivityDefinition<TContext, TEvent>>;
    strict: boolean;
    /**
     * The parent state node.
     */
    parent?: StateNode<TContext, any, TEvent, any, any, any>;
    /**
     * The root machine node.
     */
    machine: StateNode<TContext, any, TEvent, TTypestate>;
    /**
     * The meta data associated with this state node, which will be returned in State instances.
     */
    meta?: TStateSchema extends {
        meta: infer D;
    } ? D : any;
    /**
     * The data sent with the "done.state._id_" event if this is a final state node.
     */
    doneData?: Mapper<TContext, TEvent, any> | PropertyMapper<TContext, TEvent, any>;
    /**
     * The string delimiter for serializing the path to a string. The default is "."
     */
    delimiter: string;
    /**
     * The order this state node appears. Corresponds to the implicit SCXML document order.
     */
    order: number;
    /**
     * The services invoked by this state node.
     */
    invoke: Array<InvokeDefinition<TContext, TEvent>>;
    options: MachineOptions<TContext, TEvent>;
    schema: MachineSchema<TContext, TEvent>;
    __xstatenode: true;
    description?: string;
    private __cache;
    private idMap;
    tags: string[];
    constructor(
    /**
     * The raw config used to create the machine.
     */
    config: StateNodeConfig<TContext, TStateSchema, TEvent>, options?: MachineOptions<TContext, TEvent>, 
    /**
     * The initial extended state
     */
    _context?: Readonly<TContext> | (() => Readonly<TContext>), // TODO: this is unsafe, but we're removing it in v5 anyway
    _stateInfo?: {
        parent: StateNode<any, any, any, any, any, any>;
        key: string;
    });
    private _init;
    /**
     * Clones this state machine with custom options and context.
     *
     * @param options Options (actions, guards, activities, services) to recursively merge with the existing options.
     * @param context Custom context (will override predefined context)
     */
    withConfig(options: InternalMachineOptions<TContext, TEvent, TResolvedTypesMeta, true>, context?: TContext | (() => TContext)): StateNode<TContext, TStateSchema, TEvent, TTypestate, TServiceMap, TResolvedTypesMeta>;
    /**
     * Clones this state machine with custom context.
     *
     * @param context Custom context (will override predefined context, not recursive)
     */
    withContext(context: TContext | (() => TContext)): StateNode<TContext, TStateSchema, TEvent, TTypestate>;
    get context(): TContext;
    /**
     * The well-structured state node definition.
     */
    get definition(): StateNodeDefinition<TContext, TStateSchema, TEvent>;
    toJSON(): StateNodeDefinition<TContext, TStateSchema, TEvent>;
    /**
     * The mapping of events to transitions.
     */
    get on(): TransitionDefinitionMap<TContext, TEvent>;
    get after(): Array<DelayedTransitionDefinition<TContext, TEvent>>;
    /**
     * All the transitions that can be taken from this state node.
     */
    get transitions(): Array<TransitionDefinition<TContext, TEvent>>;
    private getCandidates;
    /**
     * All delayed transitions from the config.
     */
    private getDelayedTransitions;
    /**
     * Returns the state nodes represented by the current state value.
     *
     * @param state The state value or State instance
     */
    getStateNodes(state: StateValue | State<TContext, TEvent, any, TTypestate, TResolvedTypesMeta>): Array<StateNode<TContext, any, TEvent, TTypestate, TServiceMap, TResolvedTypesMeta>>;
    /**
     * Returns `true` if this state node explicitly handles the given event.
     *
     * @param event The event in question
     */
    handles(event: Event<TEvent>): boolean;
    /**
     * Resolves the given `state` to a new `State` instance relative to this machine.
     *
     * This ensures that `.events` and `.nextEvents` represent the correct values.
     *
     * @param state The state to resolve
     */
    resolveState(state: State<TContext, TEvent, any, any> | StateConfig<TContext, TEvent>): State<TContext, TEvent, TStateSchema, TTypestate, TResolvedTypesMeta>;
    private transitionLeafNode;
    private transitionCompoundNode;
    private transitionParallelNode;
    private _transition;
    getTransitionData(state: State<TContext, TEvent, any, any, any>, event: Event<TEvent> | SCXML.Event<TEvent>): StateTransition<TContext, TEvent> | undefined;
    private next;
    private getPotentiallyReenteringNodes;
    private getActions;
    /**
     * Determines the next state given the current `state` and sent `event`.
     *
     * @param state The current State instance or state value
     * @param event The event that was sent at the current state
     * @param context The current context (extended state) of the current state
     */
    transition(state: StateValue | State<TContext, TEvent, any, TTypestate, TResolvedTypesMeta> | undefined, event: Event<TEvent> | SCXML.Event<TEvent>, context?: TContext, exec?: PredictableActionArgumentsExec): State<TContext, TEvent, TStateSchema, TTypestate, TResolvedTypesMeta>;
    private resolveRaisedTransition;
    private resolveTransition;
    /**
     * Returns the child state node from its relative `stateKey`, or throws.
     */
    getStateNode(stateKey: string): StateNode<TContext, any, TEvent, TTypestate, TServiceMap, TResolvedTypesMeta>;
    /**
     * Returns the state node with the given `stateId`, or throws.
     *
     * @param stateId The state ID. The prefix "#" is removed.
     */
    getStateNodeById(stateId: string): StateNode<TContext, any, TEvent, any, TServiceMap, TResolvedTypesMeta>;
    /**
     * Returns the relative state node from the given `statePath`, or throws.
     *
     * @param statePath The string or string array relative path to the state node.
     */
    getStateNodeByPath(statePath: string | string[]): StateNode<TContext, any, TEvent, any, any, any>;
    /**
     * Resolves a partial state value with its full representation in this machine.
     *
     * @param stateValue The partial state value to resolve.
     */
    resolve(stateValue: StateValue): StateValue;
    private getResolvedPath;
    private get initialStateValue();
    getInitialState(stateValue: StateValue, context?: TContext): State<TContext, TEvent, TStateSchema, TTypestate, TResolvedTypesMeta>;
    /**
     * The initial State instance, which includes all actions to be executed from
     * entering the initial state.
     */
    get initialState(): State<TContext, TEvent, TStateSchema, TTypestate, TResolvedTypesMeta>;
    /**
     * The target state value of the history state node, if it exists. This represents the
     * default state value to transition to if no history value exists yet.
     */
    get target(): StateValue | undefined;
    /**
     * Returns the leaf nodes from a state path relative to this state node.
     *
     * @param relativeStateId The relative state path to retrieve the state nodes
     * @param history The previous state to retrieve history
     * @param resolve Whether state nodes should resolve to initial child state nodes
     */
    getRelativeStateNodes(relativeStateId: StateNode<TContext, any, TEvent>, historyValue?: HistoryValue, resolve?: boolean): Array<StateNode<TContext, any, TEvent>>;
    get initialStateNodes(): Array<StateNode<TContext, any, TEvent, any, any, any>>;
    /**
     * Retrieves state nodes from a relative path to this state node.
     *
     * @param relativePath The relative path from this state node
     * @param historyValue
     */
    getFromRelativePath(relativePath: string[]): Array<StateNode<TContext, any, TEvent, any, any, any>>;
    private historyValue;
    /**
     * Resolves to the historical value(s) of the parent state node,
     * represented by state nodes.
     *
     * @param historyValue
     */
    private resolveHistory;
    /**
     * All the state node IDs of this state node and its descendant state nodes.
     */
    get stateIds(): string[];
    /**
     * All the event types accepted by this state node and its descendants.
     */
    get events(): Array<TEvent['type']>;
    /**
     * All the events that have transitions directly from this state node.
     *
     * Excludes any inert events.
     */
    get ownEvents(): Array<TEvent['type']>;
    private resolveTarget;
    private formatTransition;
    private formatTransitions;
}
export { StateNode };
//# sourceMappingURL=StateNode.d.ts.map