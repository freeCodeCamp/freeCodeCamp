import { Action, Event, EventObject, SingleOrArray, SendAction, SendActionOptions, CancelAction, ActionObject, ActionType, Assigner, PropertyAssigner, AssignAction, ActionFunction, ActionFunctionMap, ActivityActionObject, ActionTypes, ActivityDefinition, RaiseAction, RaiseActionObject, DoneEvent, ErrorPlatformEvent, DoneEventObject, SendExpr, SendActionObject, PureAction, LogExpr, LogAction, LogActionObject, DelayFunctionMap, SCXML, ExprWithMeta, ChooseCondition, ChooseAction, AnyEventObject, Expr, StopAction, StopActionObject, Cast, EventFrom, AnyActorRef, PredictableActionArgumentsExec, RaiseActionOptions, NoInfer, BaseActionObject, LowInfer } from './types';
import * as actionTypes from './actionTypes';
import { State } from './State';
import { StateNode } from './StateNode';
export { actionTypes };
export declare const initEvent: SCXML.Event<{
    type: ActionTypes;
}>;
export declare function getActionFunction<TContext, TEvent extends EventObject>(actionType: ActionType, actionFunctionMap?: ActionFunctionMap<TContext, TEvent>): ActionObject<TContext, TEvent> | ActionFunction<TContext, TEvent> | undefined;
export declare function toActionObject<TContext, TEvent extends EventObject>(action: Action<TContext, TEvent>, actionFunctionMap?: ActionFunctionMap<TContext, TEvent>): ActionObject<TContext, TEvent>;
export declare const toActionObjects: <TContext, TEvent extends EventObject>(action?: SingleOrArray<Action<TContext, TEvent, TEvent>> | undefined, actionFunctionMap?: ActionFunctionMap<TContext, TEvent, BaseActionObject> | undefined) => ActionObject<TContext, TEvent, TEvent, BaseActionObject>[];
export declare function toActivityDefinition<TContext, TEvent extends EventObject>(action: string | ActivityDefinition<TContext, TEvent>): ActivityDefinition<TContext, TEvent>;
/**
 * Raises an event. This places the event in the internal event queue, so that
 * the event is immediately consumed by the machine in the current step.
 *
 * @param eventType The event to raise.
 */
export declare function raise<TContext, TExpressionEvent extends EventObject, TEvent extends EventObject = TExpressionEvent>(event: NoInfer<Event<TEvent>> | SendExpr<TContext, TExpressionEvent, TEvent>, options?: RaiseActionOptions<TContext, TExpressionEvent>): RaiseAction<TContext, TExpressionEvent, TEvent>;
export declare function resolveRaise<TContext, TEvent extends EventObject, TExpressionEvent extends EventObject>(action: RaiseAction<TContext, TExpressionEvent, TEvent>, ctx: TContext, _event: SCXML.Event<TExpressionEvent>, delaysMap?: DelayFunctionMap<TContext, TEvent>): RaiseActionObject<TContext, TExpressionEvent, TEvent>;
/**
 * Sends an event. This returns an action that will be read by an interpreter to
 * send the event in the next step, after the current step is finished executing.
 *
 * @deprecated Use the `sendTo(...)` action creator instead.
 *
 * @param event The event to send.
 * @param options Options to pass into the send event:
 *  - `id` - The unique send event identifier (used with `cancel()`).
 *  - `delay` - The number of milliseconds to delay the sending of the event.
 *  - `to` - The target of this event (by default, the machine the event was sent from).
 */
export declare function send<TContext, TEvent extends EventObject, TSentEvent extends EventObject = AnyEventObject>(event: Event<AnyEventObject> | SendExpr<TContext, TEvent, AnyEventObject>, options?: SendActionOptions<TContext, TEvent>): SendAction<TContext, TEvent, TSentEvent>;
export declare function resolveSend<TContext, TEvent extends EventObject, TSentEvent extends EventObject>(action: SendAction<TContext, TEvent, TSentEvent>, ctx: TContext, _event: SCXML.Event<TEvent>, delaysMap?: DelayFunctionMap<TContext, TEvent>): SendActionObject<TContext, TEvent, TSentEvent>;
/**
 * Sends an event to this machine's parent.
 *
 * @param event The event to send to the parent machine.
 * @param options Options to pass into the send event.
 */
export declare function sendParent<TContext, TEvent extends EventObject, TSentEvent extends EventObject = AnyEventObject>(event: Event<AnyEventObject> | SendExpr<TContext, TEvent, AnyEventObject>, options?: SendActionOptions<TContext, TEvent>): SendAction<TContext, TEvent, TSentEvent>;
declare type InferEvent<E extends EventObject> = {
    [T in E['type']]: {
        type: T;
    } & Extract<E, {
        type: T;
    }>;
}[E['type']];
/**
 * Sends an event to an actor.
 *
 * @param actor The `ActorRef` to send the event to.
 * @param event The event to send, or an expression that evaluates to the event to send
 * @param options Send action options
 * @returns An XState send action object
 */
export declare function sendTo<TContext, TEvent extends EventObject, TActor extends AnyActorRef>(actor: string | TActor | ((ctx: TContext, event: TEvent) => TActor), event: EventFrom<TActor> | SendExpr<TContext, TEvent, InferEvent<Cast<EventFrom<TActor>, EventObject>>>, options?: SendActionOptions<TContext, TEvent>): SendAction<TContext, TEvent, any>;
/**
 * Sends an update event to this machine's parent.
 */
export declare function sendUpdate<TContext, TEvent extends EventObject>(): SendAction<TContext, TEvent, any>;
/**
 * Sends an event back to the sender of the original event.
 *
 * @param event The event to send back to the sender
 * @param options Options to pass into the send event
 */
export declare function respond<TContext, TEvent extends EventObject, TSentEvent extends EventObject = AnyEventObject>(event: Event<TEvent> | SendExpr<TContext, TEvent, TSentEvent>, options?: SendActionOptions<TContext, TEvent>): SendAction<TContext, TEvent, AnyEventObject>;
/**
 *
 * @param expr The expression function to evaluate which will be logged.
 *  Takes in 2 arguments:
 *  - `ctx` - the current state context
 *  - `event` - the event that caused this action to be executed.
 * @param label The label to give to the logged expression.
 */
export declare function log<TContext, TExpressionEvent extends EventObject, TEvent extends EventObject = TExpressionEvent>(expr?: string | LogExpr<TContext, TExpressionEvent>, label?: string): LogAction<TContext, TExpressionEvent, TEvent>;
export declare const resolveLog: <TContext, TEvent extends EventObject>(action: LogAction<TContext, TEvent, TEvent>, ctx: TContext, _event: SCXML.Event<TEvent>) => LogActionObject<TContext, TEvent>;
/**
 * Cancels an in-flight `send(...)` action. A canceled sent action will not
 * be executed, nor will its event be sent, unless it has already been sent
 * (e.g., if `cancel(...)` is called after the `send(...)` action's `delay`).
 *
 * @param sendId The `id` of the `send(...)` action to cancel.
 */
export declare const cancel: <TContext, TExpressionEvent extends EventObject, TEvent extends EventObject>(sendId: string | number) => CancelAction<TContext, TExpressionEvent, TEvent>;
/**
 * Starts an activity.
 *
 * @param activity The activity to start.
 */
export declare function start<TContext, TEvent extends EventObject>(activity: string | ActivityDefinition<TContext, TEvent>): ActivityActionObject<TContext, TEvent>;
/**
 * Stops an activity.
 *
 * @param actorRef The activity to stop.
 */
export declare function stop<TContext, TExpressionEvent extends EventObject, TEvent extends EventObject = TExpressionEvent>(actorRef: string | Expr<TContext, TExpressionEvent, string | {
    id: string;
}>): StopAction<TContext, TExpressionEvent, TEvent>;
export declare function resolveStop<TContext, TEvent extends EventObject>(action: StopAction<TContext, TEvent>, context: TContext, _event: SCXML.Event<TEvent>): StopActionObject;
/**
 * Updates the current context of the machine.
 *
 * @param assignment An object that represents the partial context to update.
 */
export declare const assign: <TContext, TExpressionEvent extends EventObject = EventObject, TEvent extends EventObject = TExpressionEvent>(assignment: Assigner<LowInfer<TContext>, TExpressionEvent> | PropertyAssigner<LowInfer<TContext>, TExpressionEvent>) => AssignAction<TContext, TExpressionEvent, TEvent>;
export declare function isActionObject<TContext, TEvent extends EventObject>(action: Action<TContext, TEvent>): action is ActionObject<TContext, TEvent>;
/**
 * Returns an event type that represents an implicit event that
 * is sent after the specified `delay`.
 *
 * @param delayRef The delay in milliseconds
 * @param id The state node ID where this event is handled
 */
export declare function after(delayRef: number | string, id?: string): string;
/**
 * Returns an event that represents that a final state node
 * has been reached in the parent state node.
 *
 * @param id The final state node's parent state node `id`
 * @param data The data to pass into the event
 */
export declare function done(id: string, data?: any): DoneEventObject;
/**
 * Returns an event that represents that an invoked service has terminated.
 *
 * An invoked service is terminated when it has reached a top-level final state node,
 * but not when it is canceled.
 *
 * @param id The final state node ID
 * @param data The data to pass into the event
 */
export declare function doneInvoke(id: string, data?: any): DoneEvent;
export declare function error(id: string, data?: any): ErrorPlatformEvent & string;
export declare function pure<TContext, TExpressionEvent extends EventObject, TEvent extends EventObject = TExpressionEvent>(getActions: (context: TContext, event: TExpressionEvent) => SingleOrArray<BaseActionObject | BaseActionObject['type'] | ActionObject<TContext, TExpressionEvent, TEvent> | ActionFunction<TContext, TExpressionEvent>> | undefined): PureAction<TContext, TExpressionEvent, TEvent>;
/**
 * Forwards (sends) an event to a specified service.
 *
 * @param target The target service to forward the event to.
 * @param options Options to pass into the send action creator.
 */
export declare function forwardTo<TContext, TEvent extends EventObject>(target: Required<SendActionOptions<TContext, TEvent>>['to'], options?: SendActionOptions<TContext, TEvent>): SendAction<TContext, TEvent, any>;
/**
 * Escalates an error by sending it as an event to this machine's parent.
 *
 * @param errorData The error data to send, or the expression function that
 * takes in the `context`, `event`, and `meta`, and returns the error data to send.
 * @param options Options to pass into the send action creator.
 */
export declare function escalate<TContext, TEvent extends EventObject, TErrorData = any>(errorData: TErrorData | ExprWithMeta<TContext, TEvent, TErrorData>, options?: SendActionOptions<TContext, TEvent>): SendAction<TContext, TEvent, any>;
export declare function choose<TContext, TExpressionEvent extends EventObject, TEvent extends EventObject = TExpressionEvent>(conds: Array<ChooseCondition<TContext, TExpressionEvent, TEvent>>): ChooseAction<TContext, TExpressionEvent, TEvent>;
export declare function resolveActions<TContext, TEvent extends EventObject>(machine: StateNode<TContext, any, TEvent, any, any, any>, currentState: State<TContext, TEvent, any, any, any> | undefined, currentContext: TContext, _event: SCXML.Event<TEvent>, actionBlocks: Array<{
    type: string;
    actions: Array<ActionObject<TContext, TEvent>>;
}>, predictableExec?: PredictableActionArgumentsExec, preserveActionOrder?: boolean): [Array<ActionObject<TContext, TEvent>>, TContext];
//# sourceMappingURL=actions.d.ts.map