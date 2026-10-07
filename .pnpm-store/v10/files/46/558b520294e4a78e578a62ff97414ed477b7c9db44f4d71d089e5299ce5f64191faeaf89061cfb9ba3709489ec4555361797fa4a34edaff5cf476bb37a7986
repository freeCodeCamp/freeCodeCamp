import type { Draft } from 'immer'
import { current, isDraft } from '../utils/immerImports'

export function getCurrent<T>(value: T | Draft<T>): T {
  return (isDraft(value) ? current(value) : value) as T
}
