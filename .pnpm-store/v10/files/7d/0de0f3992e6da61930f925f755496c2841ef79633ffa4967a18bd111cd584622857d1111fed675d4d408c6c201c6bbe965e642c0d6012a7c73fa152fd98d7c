import { State } from './State';
import { StateValue, EventObject } from './types';
export declare type ValueFromStateGetter<T, TContext, TEvent extends EventObject> = (state: State<TContext, TEvent>) => T;
export declare type StatePatternTuple<T, TContext, TEvent extends EventObject> = [
    StateValue,
    ValueFromStateGetter<T, TContext, TEvent>
];
export declare function matchState<T, TContext, TEvent extends EventObject>(state: State<TContext, TEvent> | StateValue, patterns: Array<StatePatternTuple<T, TContext, TEvent>>, defaultValue: ValueFromStateGetter<T, TContext, TEvent>): T;
//# sourceMappingURL=match.d.ts.map