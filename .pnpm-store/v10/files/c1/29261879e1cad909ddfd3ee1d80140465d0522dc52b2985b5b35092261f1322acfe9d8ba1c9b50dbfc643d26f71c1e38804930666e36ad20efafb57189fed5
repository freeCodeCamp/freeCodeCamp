import { Event, StateValue, ActionType, Action, EventObject, PropertyMapper, Mapper, EventType, HistoryValue, AssignAction, Condition, Subscribable, ConditionPredicate, SCXML, StateLike, EventData, TransitionConfig, TransitionConfigTarget, NullEvent, SingleOrArray, Guard, InvokeSourceDefinition, Observer, Behavior, RaiseActionObject, SendActionObject } from './types';
import { StateNode } from './StateNode';
import { State } from './State';
import { Actor } from './Actor';
import { ActionObject, AnyStateMachine } from '.';
export declare function keys<T extends object>(value: T): Array<keyof T & string>;
export declare function matchesState(parentStateId: StateValue, childStateId: StateValue, delimiter?: string): boolean;
export declare function getEventType<TEvent extends EventObject = EventObject>(event: Event<TEvent>): TEvent['type'];
export declare function getActionType(action: Action<any, any>): ActionType;
export declare function toStatePath(stateId: string | string[], delimiter: string): string[];
export declare function isStateLike(state: any): state is StateLike<any>;
export declare function toStateValue(stateValue: StateLike<any> | StateValue | string[], delimiter: string): StateValue;
export declare function pathToStateValue(statePath: string[]): StateValue;
export declare function mapValues<P, O extends Record<string, unknown>>(collection: O, iteratee: (item: O[keyof O], key: keyof O, collection: O, i: number) => P): {
    [key in keyof O]: P;
};
export declare function mapFilterValues<T, P>(collection: {
    [key: string]: T;
}, iteratee: (item: T, key: string, collection: {
    [key: string]: T;
}) => P, predicate: (item: T) => boolean): {
    [key: string]: P;
};
/**
 * Retrieves a value at the given path.
 * @param props The deep path to the prop of the desired value
 */
export declare const path: <T extends Record<string, any>>(props: string[]) => any;
/**
 * Retrieves a value at the given path via the nested accessor prop.
 * @param props The deep path to the prop of the desired value
 */
export declare function nestedPath<T extends Record<string, any>>(props: string[], accessorProp: keyof T): (object: T) => T;
export declare function toStatePaths(stateValue: StateValue | undefined): string[][];
export declare function pathsToStateValue(paths: string[][]): StateValue;
export declare function flatten<T>(array: Array<T | T[]>): T[];
export declare function toArrayStrict<T>(value: T[] | T): T[];
export declare function toArray<T>(value: T[] | T | undefined): T[];
export declare function mapContext<TContext, TEvent extends EventObject>(mapper: Mapper<TContext, TEvent, any> | PropertyMapper<TContext, TEvent, any>, context: TContext, _event: SCXML.Event<TEvent>): any;
export declare function isBuiltInEvent(eventType: EventType): boolean;
export declare function isPromiseLike(value: any): value is PromiseLike<any>;
export declare function isBehavior(value: any): value is Behavior<any, any>;
export declare function partition<T, A extends T, B extends T>(items: T[], predicate: (item: T) => item is A): [A[], B[]];
export declare function updateHistoryStates(hist: HistoryValue, stateValue: StateValue): Record<string, HistoryValue | undefined>;
export declare function updateHistoryValue(hist: HistoryValue, stateValue: StateValue): HistoryValue;
export declare function updateContext<TContext, TEvent extends EventObject>(context: TContext, _event: SCXML.Event<TEvent>, assignActions: Array<AssignAction<TContext, TEvent>>, state?: State<TContext, TEvent>): TContext;
declare let warn: (condition: boolean | Error, message: string) => void;
export { warn };
export declare function isArray(value: any): value is any[];
export declare function isFunction(value: any): value is Function;
export declare function isString(value: any): value is string;
export declare function toGuard<TContext, TEvent extends EventObject>(condition?: Condition<TContext, TEvent>, guardMap?: Record<string, ConditionPredicate<TContext, TEvent>>): Guard<TContext, TEvent> | undefined;
export declare function isObservable<T>(value: any): value is Subscribable<T>;
export declare const symbolObservable: typeof Symbol.observable;
export declare const interopSymbols: {
    [Symbol.observable]: () => any;
};
export declare function isMachine(value: any): value is AnyStateMachine;
export declare function isActor(value: any): value is Actor;
export declare const uniqueId: () => string;
export declare function toEventObject<TEvent extends EventObject>(event: Event<TEvent>, payload?: EventData): TEvent;
export declare function toSCXMLEvent<TEvent extends EventObject>(event: Event<TEvent> | SCXML.Event<TEvent>, scxmlEvent?: Partial<SCXML.Event<TEvent>>): SCXML.Event<TEvent>;
export declare function toTransitionConfigArray<TContext, TEvent extends EventObject>(event: TEvent['type'] | NullEvent['type'] | '*', configLike: SingleOrArray<TransitionConfig<TContext, TEvent> | TransitionConfigTarget<TContext, TEvent>>): Array<TransitionConfig<TContext, TEvent> & {
    event: TEvent['type'] | NullEvent['type'] | '*';
}>;
export declare function normalizeTarget<TContext, TEvent extends EventObject>(target: SingleOrArray<string | StateNode<TContext, any, TEvent>> | undefined): Array<string | StateNode<TContext, any, TEvent>> | undefined;
export declare function reportUnhandledExceptionOnInvocation(originalError: any, currentError: any, id: string): void;
export declare function evaluateGuard<TContext, TEvent extends EventObject>(machine: StateNode<TContext, any, TEvent, any, any>, guard: Guard<TContext, TEvent>, context: TContext, _event: SCXML.Event<TEvent>, state: State<TContext, TEvent>): boolean;
export declare function toInvokeSource(src: string | InvokeSourceDefinition): InvokeSourceDefinition;
export declare function toObserver<T>(nextHandler?: Partial<Observer<T>> | ((value: T) => void), errorHandler?: (error: any) => void, completionHandler?: () => void): Observer<T>;
export declare function createInvokeId(stateNodeId: string, index: number): string;
export declare function isRaisableAction<TContext, TExpressionEvent extends EventObject, TEvent extends EventObject>(action: ActionObject<TContext, TExpressionEvent, TEvent>): action is RaiseActionObject<TContext, TExpressionEvent, TEvent> | SendActionObject<TContext, TExpressionEvent, TEvent>;
//# sourceMappingURL=utils.d.ts.map