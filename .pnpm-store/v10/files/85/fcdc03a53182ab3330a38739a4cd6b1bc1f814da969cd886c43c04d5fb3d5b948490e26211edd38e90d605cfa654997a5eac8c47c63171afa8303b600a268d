/**
 * An *action* is a plain object that represents an intention to change the
 * state. Actions are the only way to get data into the store. Any data,
 * whether from UI events, network callbacks, or other sources such as
 * WebSockets needs to eventually be dispatched as actions.
 *
 * Actions must have a `type` field that indicates the type of action being
 * performed. Types can be defined as constants and imported from another
 * module. These must be strings, as strings are serializable.
 *
 * Other than `type`, the structure of an action object is really up to you.
 * If you're interested, check out Flux Standard Action for recommendations on
 * how actions should be constructed.
 *
 * @template T the type of the action's `type` tag.
 */
// this needs to be a type, not an interface
// https://github.com/microsoft/TypeScript/issues/15300
export type Action<T extends string = string> = {
  type: T
}

/**
 * An Action type which accepts any other properties.
 * This is mainly for the use of the `Reducer` type.
 * This is not part of `Action` itself to prevent types that extend `Action` from
 * having an index signature.
 */
export interface UnknownAction extends Action {
  // Allows any extra properties to be defined in an action.
  [extraProps: string]: unknown
}

/**
 * An Action type which accepts any other properties.
 * This is mainly for the use of the `Reducer` type.
 * This is not part of `Action` itself to prevent types that extend `Action` from
 * having an index signature.
 * @deprecated use Action or UnknownAction instead
 */
export interface AnyAction extends Action {
  // Allows any extra properties to be defined in an action.
  [extraProps: string]: any
}

/* action creators */

/**
 * An *action creator* is, quite simply, a function that creates an action. Do
 * not confuse the two terms—again, an action is a payload of information, and
 * an action creator is a factory that creates an action.
 *
 * Calling an action creator only produces an action, but does not dispatch
 * it. You need to call the store's `dispatch` function to actually cause the
 * mutation. Sometimes we say *bound action creators* to mean functions that
 * call an action creator and immediately dispatch its result to a specific
 * store instance.
 *
 * If an action creator needs to read the current state, perform an API call,
 * or cause a side effect, like a routing transition, it should return an
 * async action instead of an action.
 *
 * @template A Returned action type.
 */
export interface ActionCreator<A, P extends any[] = any[]> {
  (...args: P): A
}

/**
 * Object whose values are action creator functions.
 */
export interface ActionCreatorsMapObject<A = any, P extends any[] = any[]> {
  [key: string]: ActionCreator<A, P>
}
