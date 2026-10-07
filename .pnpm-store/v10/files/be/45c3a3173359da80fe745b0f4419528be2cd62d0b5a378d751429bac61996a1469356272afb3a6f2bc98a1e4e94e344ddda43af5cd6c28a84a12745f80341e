import type { ActionCreatorsMapObject, Dispatch } from 'redux'

export default function bindActionCreators(
  actionCreators: ActionCreatorsMapObject,
  dispatch: Dispatch
): ActionCreatorsMapObject {
  const boundActionCreators: ActionCreatorsMapObject = {}

  for (const key in actionCreators) {
    const actionCreator = actionCreators[key]
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = (...args) => dispatch(actionCreator(...args))
    }
  }
  return boundActionCreators
}
