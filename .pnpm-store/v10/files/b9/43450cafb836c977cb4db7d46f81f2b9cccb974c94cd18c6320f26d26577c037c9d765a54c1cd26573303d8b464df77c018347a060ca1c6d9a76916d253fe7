import hyphenate from 'hyphenate-style-name'
import mq from './mediaQuery'
import { MediaQueryAllQueryable } from './types'

const negate = (cond: string) => `not ${cond}`

const keyVal = (k: string, v: unknown): string => {
  const realKey = hyphenate(k)

  // px shorthand
  if (typeof v === 'number') {
    v = `${v}px`
  }
  if (v === true) {
    return realKey
  }
  if (v === false) {
    return negate(realKey)
  }
  return `(${realKey}: ${v})`
}

const join = (conds: string[]): string => conds.join(' and ')

const toQuery = (obj: Partial<MediaQueryAllQueryable>): string => {
  const rules: string[] = []
  Object.keys(mq.all).forEach((k) => {
    const v = obj[k as keyof MediaQueryAllQueryable]
    if (v != null) {
      rules.push(keyVal(k, v))
    }
  })
  return join(rules)
}

export default toQuery
