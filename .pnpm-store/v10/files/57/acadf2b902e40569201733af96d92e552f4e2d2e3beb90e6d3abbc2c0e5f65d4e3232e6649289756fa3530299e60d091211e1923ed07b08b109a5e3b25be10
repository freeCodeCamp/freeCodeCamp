import { EventObject, Subscribable, InvokeDefinition, AnyEventObject, StateMachine, Spawnable, SCXML, ActorRef, BaseActorRef } from './types';
export interface Actor<TContext = any, TEvent extends EventObject = AnyEventObject> extends Subscribable<TContext> {
    id: string;
    send: (event: TEvent) => any;
    stop?: () => any | undefined;
    toJSON: () => {
        id: string;
    };
    meta?: InvokeDefinition<TContext, TEvent>;
    state?: any;
    deferred?: boolean;
}
export declare function createNullActor(id: string): ActorRef<any>;
/**
 * Creates a deferred actor that is able to be invoked given the provided
 * invocation information in its `.meta` value.
 *
 * @param invokeDefinition The meta information needed to invoke the actor.
 */
export declare function createInvocableActor<TC, TE extends EventObject>(invokeDefinition: InvokeDefinition<TC, TE>, machine: StateMachine<TC, any, TE, any>, context: TC, _event: SCXML.Event<TE>): ActorRef<any>;
export declare function createDeferredActor(entity: Spawnable, id: string, data?: any): ActorRef<any, undefined>;
export declare function isActor(item: any): item is ActorRef<any>;
export declare function isSpawnedActor(item: any): item is ActorRef<any>;
export declare function toActorRef<TEvent extends EventObject, TEmitted = any, TActorRefLike extends BaseActorRef<TEvent> = BaseActorRef<TEvent>>(actorRefLike: TActorRefLike): ActorRef<TEvent, TEmitted> & Omit<TActorRefLike, keyof ActorRef<any, any>>;
//# sourceMappingURL=Actor.d.ts.map