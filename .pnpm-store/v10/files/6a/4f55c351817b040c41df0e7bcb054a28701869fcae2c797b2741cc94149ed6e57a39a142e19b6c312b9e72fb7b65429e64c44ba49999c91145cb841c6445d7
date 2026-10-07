import { Action } from '../types/actions'
import isPlainObject from './isPlainObject'

export default function isAction(action: unknown): action is Action<string> {
  return (
    isPlainObject(action) &&
    'type' in action &&
    typeof (action as Record<'type', unknown>).type === 'string'
  )
}
