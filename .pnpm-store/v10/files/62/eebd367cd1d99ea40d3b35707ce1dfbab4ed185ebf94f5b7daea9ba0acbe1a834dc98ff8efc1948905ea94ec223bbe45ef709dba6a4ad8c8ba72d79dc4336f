import type { StoreEnhancer } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'

declare const enhancer1: StoreEnhancer<
  {
    has1: true
  },
  { stateHas1: true }
>

declare const enhancer2: StoreEnhancer<
  {
    has2: true
  },
  { stateHas2: true }
>

describe('type tests', () => {
  test('prepend single element', () => {
    const store = configureStore({
      reducer: () => 0,
      enhancers: (gDE) => gDE().prepend(enhancer1),
    })

    expectTypeOf(store.has1).toEqualTypeOf<true>()

    expectTypeOf(store.getState().stateHas1).toEqualTypeOf<true>()

    expectTypeOf(store).not.toHaveProperty('has2')

    expectTypeOf(store.getState()).not.toHaveProperty('stateHas2')
  })

  test('prepend multiple (rest)', () => {
    const store = configureStore({
      reducer: () => 0,
      enhancers: (gDE) => gDE().prepend(enhancer1, enhancer2),
    })

    expectTypeOf(store.has1).toEqualTypeOf<true>()

    expectTypeOf(store.getState().stateHas1).toEqualTypeOf<true>()

    expectTypeOf(store.has2).toEqualTypeOf<true>()

    expectTypeOf(store.getState().stateHas2).toEqualTypeOf<true>()

    expectTypeOf(store).not.toHaveProperty('has3')

    expectTypeOf(store.getState()).not.toHaveProperty('stateHas3')
  })

  test('prepend multiple (array notation)', () => {
    const store = configureStore({
      reducer: () => 0,
      enhancers: (gDE) => gDE().prepend([enhancer1, enhancer2] as const),
    })

    expectTypeOf(store.has1).toEqualTypeOf<true>()

    expectTypeOf(store.getState().stateHas1).toEqualTypeOf<true>()

    expectTypeOf(store.has2).toEqualTypeOf<true>()

    expectTypeOf(store.getState().stateHas2).toEqualTypeOf<true>()

    expectTypeOf(store).not.toHaveProperty('has3')

    expectTypeOf(store.getState()).not.toHaveProperty('stateHas3')
  })

  test('concat single element', () => {
    const store = configureStore({
      reducer: () => 0,
      enhancers: (gDE) => gDE().concat(enhancer1),
    })

    expectTypeOf(store.has1).toEqualTypeOf<true>()

    expectTypeOf(store.getState().stateHas1).toEqualTypeOf<true>()

    expectTypeOf(store).not.toHaveProperty('has2')

    expectTypeOf(store.getState()).not.toHaveProperty('stateHas2')
  })

  test('prepend multiple (rest)', () => {
    const store = configureStore({
      reducer: () => 0,
      enhancers: (gDE) => gDE().concat(enhancer1, enhancer2),
    })

    expectTypeOf(store.has1).toEqualTypeOf<true>()

    expectTypeOf(store.getState().stateHas1).toEqualTypeOf<true>()

    expectTypeOf(store.has2).toEqualTypeOf<true>()

    expectTypeOf(store.getState().stateHas2).toEqualTypeOf<true>()

    expectTypeOf(store).not.toHaveProperty('has3')

    expectTypeOf(store.getState()).not.toHaveProperty('stateHas3')
  })

  test('concat multiple (array notation)', () => {
    const store = configureStore({
      reducer: () => 0,
      enhancers: (gDE) => gDE().concat([enhancer1, enhancer2] as const),
    })

    expectTypeOf(store.has1).toEqualTypeOf<true>()

    expectTypeOf(store.getState().stateHas1).toEqualTypeOf<true>()

    expectTypeOf(store.has2).toEqualTypeOf<true>()

    expectTypeOf(store.getState().stateHas2).toEqualTypeOf<true>()

    expectTypeOf(store).not.toHaveProperty('has3')

    expectTypeOf(store.getState()).not.toHaveProperty('stateHas3')
  })

  test('concat and prepend', () => {
    const store = configureStore({
      reducer: () => 0,
      enhancers: (gDE) => gDE().concat(enhancer1).prepend(enhancer2),
    })

    expectTypeOf(store.has1).toEqualTypeOf<true>()

    expectTypeOf(store.getState().stateHas1).toEqualTypeOf<true>()

    expectTypeOf(store.has2).toEqualTypeOf<true>()

    expectTypeOf(store.getState().stateHas2).toEqualTypeOf<true>()

    expectTypeOf(store).not.toHaveProperty('has3')

    expectTypeOf(store.getState()).not.toHaveProperty('stateHas3')
  })
})
