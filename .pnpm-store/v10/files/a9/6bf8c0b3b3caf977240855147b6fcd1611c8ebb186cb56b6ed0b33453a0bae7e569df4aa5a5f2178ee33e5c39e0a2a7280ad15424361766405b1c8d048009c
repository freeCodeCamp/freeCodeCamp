import { AtomicStateNodeConfig, StatesConfig, Event, EventObject, StateSchema } from './types';
export declare function toggle<TEventType extends string = string>(onState: string, offState: string, eventType: TEventType): Record<string, AtomicStateNodeConfig<any, {
    type: TEventType;
}>>;
interface SequencePatternOptions<TEvent extends EventObject> {
    nextEvent: Event<TEvent> | undefined;
    prevEvent: Event<TEvent> | undefined;
}
export declare function sequence<TStateSchema extends StateSchema, TEvent extends EventObject>(items: Array<keyof TStateSchema['states']>, options?: Partial<SequencePatternOptions<TEvent>>): {
    initial: keyof TStateSchema['states'];
    states: StatesConfig<any, TStateSchema, TEvent>;
};
export {};
//# sourceMappingURL=patterns.d.ts.map