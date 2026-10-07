// Should be no imports here!

/**
 * The sentinel value returned by producers to replace the draft with undefined.
 */
export const NOTHING: unique symbol = Symbol.for("immer-nothing")

/**
 * To let Immer treat your class instances as plain immutable objects
 * (albeit with a custom prototype), you must define either an instance property
 * or a static property on each of your custom classes.
 *
 * Otherwise, your class instance will never be drafted, which means it won't be
 * safe to mutate in a produce callback.
 */
export const DRAFTABLE: unique symbol = Symbol.for("immer-draftable")

export const DRAFT_STATE: unique symbol = Symbol.for("immer-state")
