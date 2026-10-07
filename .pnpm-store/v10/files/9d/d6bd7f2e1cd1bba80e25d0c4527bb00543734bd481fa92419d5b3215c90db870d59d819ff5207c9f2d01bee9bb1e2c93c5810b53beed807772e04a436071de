import { ThunkAction } from './src/index'

/**
 * Globally alter the Redux `bindActionCreators` and `Dispatch` types to assume
 * that the thunk middleware always exists, for ease of use.
 * This is kept as a separate file that may be optionally imported, to
 * avoid polluting the default types in case the thunk middleware is _not_
 * actually being used.
 *
 * To add these types to your app:
 * import 'redux-thunk/extend-redux'
 */
declare module 'redux' {
  /**
   * Overload for bindActionCreators redux function, returns expects responses
   * from thunk actions
   */
  function bindActionCreators<
    ActionCreators extends ActionCreatorsMapObject<any>
  >(
    actionCreators: ActionCreators,
    dispatch: Dispatch
  ): {
    [ActionCreatorName in keyof ActionCreators]: ReturnType<
      ActionCreators[ActionCreatorName]
    > extends ThunkAction<any, any, any, any>
      ? (
          ...args: Parameters<ActionCreators[ActionCreatorName]>
        ) => ReturnType<ReturnType<ActionCreators[ActionCreatorName]>>
      : ActionCreators[ActionCreatorName]
  }

  /*
   * Overload to add thunk support to Redux's dispatch() function.
   * Useful for react-redux or any other library which could use this type.
   */
  export interface Dispatch<A extends Action = AnyAction> {
    <ReturnType = any, State = any, ExtraThunkArg = any>(
      thunkAction: ThunkAction<ReturnType, State, ExtraThunkArg, A>
    ): ReturnType
  }
}
