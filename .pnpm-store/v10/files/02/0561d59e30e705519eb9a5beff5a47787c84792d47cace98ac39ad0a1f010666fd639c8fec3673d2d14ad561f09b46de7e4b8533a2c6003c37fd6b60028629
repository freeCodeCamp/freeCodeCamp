import { wrapMapToPropsConstant, wrapMapToPropsFunc } from './wrapMapToProps'
import { createInvalidArgFactory } from './invalidArgFactory'
import type { MapStateToPropsParam } from './selectorFactory'

export function mapStateToPropsFactory<TStateProps, TOwnProps, State>(
  mapStateToProps: MapStateToPropsParam<TStateProps, TOwnProps, State>
) {
  return !mapStateToProps
    ? wrapMapToPropsConstant(() => ({}))
    : typeof mapStateToProps === 'function'
    ? // @ts-ignore
      wrapMapToPropsFunc(mapStateToProps, 'mapStateToProps')
    : createInvalidArgFactory(mapStateToProps, 'mapStateToProps')
}
