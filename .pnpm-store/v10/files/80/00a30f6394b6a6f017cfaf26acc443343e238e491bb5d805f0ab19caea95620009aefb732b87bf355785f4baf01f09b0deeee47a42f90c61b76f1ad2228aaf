import { ActorContext, ActorRef, Behavior, EventObject } from './types';
/**
 * Returns an actor behavior from a reducer and its initial state.
 *
 * @param transition The pure reducer that returns the next state given the current state and event.
 * @param initialState The initial state of the reducer.
 * @returns An actor behavior
 */
export declare function fromReducer<TState, TEvent extends EventObject>(transition: (state: TState, event: TEvent, actorContext: ActorContext<TEvent, TState>) => TState, initialState: TState): Behavior<TEvent, TState>;
declare type PromiseEvents<T> = {
    type: 'fulfill';
    data: T;
} | {
    type: 'reject';
    error: unknown;
};
declare type PromiseState<T> = {
    status: 'pending';
    data: undefined;
    error: undefined;
} | {
    status: 'fulfilled';
    data: T;
    error: undefined;
} | {
    status: 'rejected';
    data: undefined;
    error: any;
};
export declare function fromPromise<T>(promiseFn: () => Promise<T>): Behavior<PromiseEvents<T>, PromiseState<T>>;
interface SpawnBehaviorOptions {
    id?: string;
    parent?: ActorRef<any>;
}
export declare function spawnBehavior<TEvent extends EventObject, TEmitted>(behavior: Behavior<TEvent, TEmitted>, options?: SpawnBehaviorOptions): ActorRef<TEvent, TEmitted>;
export {};
//# sourceMappingURL=behaviors.d.ts.map