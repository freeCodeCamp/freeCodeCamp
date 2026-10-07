// This entire implementation courtesy of Anders Hjelsberg:
// https://github.com/microsoft/TypeScript/pull/50831#issuecomment-1253830522

import { ReverseHead, ReverseTail } from '../types'

type UnknownFunction = (...args: any[]) => any

type LongestTuple<T> = T extends [infer U extends unknown[]]
  ? U
  : T extends [infer U, ...infer R extends unknown[][]]
  ? MostProperties<U, LongestTuple<R>>
  : never

type MostProperties<T, U> = keyof U extends keyof T ? T : U

type ElementAt<T, N extends keyof any> = N extends keyof T ? T[N] : unknown

type ElementsAt<T, N extends keyof any> = {
  [K in keyof T]: ElementAt<T[K], N>
}

type Intersect<T extends readonly unknown[]> = T extends []
  ? unknown
  : T extends [infer H, ...infer T]
  ? H & Intersect<T>
  : T[number]

type MergeTuples<T, L extends unknown[] = LongestTuple<T>> = {
  [K in keyof L]: Intersect<
    ElementsAt<T, K> extends readonly unknown[] ? ElementsAt<T, K> : never
  >
}

type ExtractParameters<T extends readonly UnknownFunction[]> = {
  [K in keyof T]: Parameters<T[K]>
}

export type MergeParameters<T extends readonly UnknownFunction[]> =
  '0' extends keyof T
    ? MergeTuples<MakeRestExplicit<ExtractParameters<T>>>
    : Parameters<T[number]>

type HasRest<S extends readonly unknown[]> = number extends S['length']
  ? true
  : false

type HasExplicit<S extends readonly unknown[]> = '0' extends keyof S
  ? true
  : false

type HasCombined<S extends readonly unknown[]> = true extends HasExplicit<S> &
  HasRest<S>
  ? true
  : false

type MakeRestExplicit<T extends readonly unknown[][]> =
  true extends HasCombined<T>
    ? [
        ...ReverseTail<T>,
        ReverseHead<T> extends readonly unknown[]
          ? ReverseHead<T>[number]
          : never
      ]
    : true extends HasRest<T>
    ? [...T]
    : T
