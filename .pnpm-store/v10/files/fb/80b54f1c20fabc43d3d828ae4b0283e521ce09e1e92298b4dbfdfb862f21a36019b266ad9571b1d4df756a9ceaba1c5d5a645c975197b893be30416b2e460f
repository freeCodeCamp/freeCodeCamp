import type { Action, Dispatch } from 'redux'
import bindActionCreators from '../utils/bindActionCreators'
import { wrapMapToPropsConstant, wrapMapToPropsFunc } from './wrapMapToProps'
import { createInvalidArgFactory } from './invalidArgFactory'
import type { MapDispatchToPropsParam } from './selectorFactory'

export function mapDispatchToPropsFactory<TDispatchProps, TOwnProps>(
  mapDispatchToProps:
    | MapDispatchToPropsParam<TDispatchProps, TOwnProps>
    | undefined
) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object'
    ? wrapMapToPropsConstant((dispatch: Dispatch<Action<unknown>>) =>
        // @ts-ignore
        bindActionCreators(mapDispatchToProps, dispatch)
      )
    : !mapDispatchToProps
    ? wrapMapToPropsConstant((dispatch: Dispatch<Action<unknown>>) => ({
        dispatch,
      }))
    : typeof mapDispatchToProps === 'function'
    ? // @ts-ignore
      wrapMapToPropsFunc(mapDispatchToProps, 'mapDispatchToProps')
    : createInvalidArgFactory(mapDispatchToProps, 'mapDispatchToProps')
}
