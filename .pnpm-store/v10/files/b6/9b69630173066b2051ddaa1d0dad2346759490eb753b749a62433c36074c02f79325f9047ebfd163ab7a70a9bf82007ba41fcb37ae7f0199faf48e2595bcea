import * as actions from './actions';
import { Actor, toActorRef } from './Actor';
import { interpret, Interpreter, InterpreterStatus, spawn } from './interpreter';
import { createMachine, Machine } from './Machine';
import { mapState } from './mapState';
import { matchState } from './match';
import { createSchema, t } from './schema';
import { State } from './State';
import { StateNode } from './StateNode';
export { spawnBehavior } from './behaviors';
export { XStateDevInterface } from './devTools';
export * from './typegenTypes';
export * from './types';
export { matchesState, toEventObject, toObserver, toSCXMLEvent } from './utils';
export { Actor, toActorRef, Machine, StateNode, State, mapState, actions, assign, cancel, send, sendTo, sendParent, sendUpdate, raise, log, pure, choose, stop, forwardTo, interpret, Interpreter, InterpreterStatus, matchState, spawn, doneInvoke, createMachine, createSchema, t };
declare const assign: <TContext, TExpressionEvent extends import("./types").EventObject = import("./types").EventObject, TEvent extends import("./types").EventObject = TExpressionEvent>(assignment: import("./types").Assigner<import("./types").LowInfer<TContext>, TExpressionEvent> | import("./types").PropertyAssigner<import("./types").LowInfer<TContext>, TExpressionEvent>) => import("./types").AssignAction<TContext, TExpressionEvent, TEvent>, cancel: <TContext, TExpressionEvent extends import("./types").EventObject, TEvent extends import("./types").EventObject>(sendId: string | number) => import("./types").CancelAction<TContext, TExpressionEvent, TEvent>, send: typeof actions.send, sendTo: typeof actions.sendTo, sendParent: typeof actions.sendParent, sendUpdate: typeof actions.sendUpdate, forwardTo: typeof actions.forwardTo, doneInvoke: typeof actions.doneInvoke, raise: typeof actions.raise, log: typeof actions.log, pure: typeof actions.pure, choose: typeof actions.choose, stop: typeof actions.stop;
declare global {
    interface SymbolConstructor {
        readonly observable: symbol;
    }
}
//# sourceMappingURL=index.d.ts.map