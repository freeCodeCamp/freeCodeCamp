import { ActorRef, EmittedFrom } from '.';
interface WaitForOptions {
    /**
     * How long to wait before rejecting, if no emitted
     * state satisfies the predicate.
     *
     * @default 10_000 (10 seconds)
     */
    timeout: number;
}
/**
 * Subscribes to an actor ref and waits for its emitted value to satisfy
 * a predicate, and then resolves with that value.
 * Will throw if the desired state is not reached after a timeout
 * (defaults to 10 seconds).
 *
 * @example
 * ```js
 * const state = await waitFor(someService, state => {
 *   return state.hasTag('loaded');
 * });
 *
 * state.hasTag('loaded'); // true
 * ```
 *
 * @param actorRef The actor ref to subscribe to
 * @param predicate Determines if a value matches the condition to wait for
 * @param options
 * @returns A promise that eventually resolves to the emitted value
 * that matches the condition
 */
export declare function waitFor<TActorRef extends ActorRef<any, any>>(actorRef: TActorRef, predicate: (emitted: EmittedFrom<TActorRef>) => boolean, options?: Partial<WaitForOptions>): Promise<EmittedFrom<TActorRef>>;
export {};
//# sourceMappingURL=waitFor.d.ts.map