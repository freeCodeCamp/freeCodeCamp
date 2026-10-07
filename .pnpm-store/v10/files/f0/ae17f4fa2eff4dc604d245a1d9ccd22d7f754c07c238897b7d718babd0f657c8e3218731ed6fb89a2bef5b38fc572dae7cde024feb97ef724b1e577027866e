import type {
  Action,
  ActionCreator,
  ActionCreatorWithNonInferrablePayload,
  ActionCreatorWithOptionalPayload,
  ActionCreatorWithPayload,
  ActionCreatorWithPreparedPayload,
  ActionCreatorWithoutPayload,
  PayloadAction,
  PayloadActionCreator,
  UnknownAction,
} from '@reduxjs/toolkit'
import { createAction } from '@reduxjs/toolkit'

describe('type tests', () => {
  describe('PayloadAction', () => {
    test('PayloadAction has type parameter for the payload.', () => {
      const action: PayloadAction<number> = { type: '', payload: 5 }

      expectTypeOf(action.payload).toBeNumber()

      expectTypeOf(action.payload).not.toBeString()
    })

    test('PayloadAction type parameter is required.', () => {
      expectTypeOf({ type: '', payload: 5 }).not.toMatchTypeOf<PayloadAction>()
    })

    test('PayloadAction has a string type tag.', () => {
      expectTypeOf({ type: '', payload: 5 }).toEqualTypeOf<
        PayloadAction<number>
      >()

      expectTypeOf({ type: 1, payload: 5 }).not.toMatchTypeOf<PayloadAction>()
    })

    test('PayloadAction is compatible with Action<string>', () => {
      const action: PayloadAction<number> = { type: '', payload: 5 }

      expectTypeOf(action).toMatchTypeOf<Action<string>>()
    })
  })

  describe('PayloadActionCreator', () => {
    test('PayloadActionCreator returns correctly typed PayloadAction depending on whether a payload is passed.', () => {
      const actionCreator = Object.assign(
        (payload?: number) => ({
          type: 'action',
          payload,
        }),
        { type: 'action' },
      ) as PayloadActionCreator<number | undefined>

      expectTypeOf(actionCreator(1)).toEqualTypeOf<
        PayloadAction<number | undefined>
      >()

      expectTypeOf(actionCreator()).toEqualTypeOf<
        PayloadAction<number | undefined>
      >()

      expectTypeOf(actionCreator(undefined)).toEqualTypeOf<
        PayloadAction<number | undefined>
      >()

      expectTypeOf(actionCreator()).not.toMatchTypeOf<PayloadAction<number>>()

      expectTypeOf(actionCreator(1)).not.toMatchTypeOf<
        PayloadAction<undefined>
      >()
    })

    test('PayloadActionCreator is compatible with ActionCreator.', () => {
      const payloadActionCreator = Object.assign(
        (payload?: number) => ({
          type: 'action',
          payload,
        }),
        { type: 'action' },
      ) as PayloadActionCreator

      expectTypeOf(payloadActionCreator).toMatchTypeOf<
        ActionCreator<UnknownAction>
      >()

      const payloadActionCreator2 = Object.assign(
        (payload?: number) => ({
          type: 'action',
          payload: payload || 1,
        }),
        { type: 'action' },
      ) as PayloadActionCreator<number>

      expectTypeOf(payloadActionCreator2).toMatchTypeOf<
        ActionCreator<PayloadAction<number>>
      >()
    })
  })

  test('createAction() has type parameter for the action payload.', () => {
    const increment = createAction<number, 'increment'>('increment')

    expectTypeOf(increment).parameter(0).toBeNumber()

    expectTypeOf(increment).parameter(0).not.toBeString()
  })

  test('createAction() type parameter is required, not inferred (defaults to `void`).', () => {
    const increment = createAction('increment')

    expectTypeOf(increment).parameter(0).not.toBeNumber()

    expectTypeOf(increment().payload).not.toBeNumber()
  })

  test('createAction().type is a string literal.', () => {
    const increment = createAction<number, 'increment'>('increment')

    expectTypeOf(increment(1).type).toBeString()

    expectTypeOf(increment(1).type).toEqualTypeOf<'increment'>()

    expectTypeOf(increment(1).type).not.toMatchTypeOf<'other'>()

    expectTypeOf(increment(1).type).not.toBeNumber()
  })

  test('type still present when using prepareAction', () => {
    const strLenAction = createAction('strLen', (payload: string) => ({
      payload: payload.length,
    }))

    expectTypeOf(strLenAction('test').type).toBeString()
  })

  test('changing payload type with prepareAction', () => {
    const strLenAction = createAction('strLen', (payload: string) => ({
      payload: payload.length,
    }))

    expectTypeOf(strLenAction('test').payload).toBeNumber()

    expectTypeOf(strLenAction('test').payload).not.toBeString()

    expectTypeOf(strLenAction('test')).not.toHaveProperty('error')
  })

  test('adding metadata with prepareAction', () => {
    const strLenMetaAction = createAction('strLenMeta', (payload: string) => ({
      payload,
      meta: payload.length,
    }))

    expectTypeOf(strLenMetaAction('test').meta).toBeNumber()

    expectTypeOf(strLenMetaAction('test').meta).not.toBeString()

    expectTypeOf(strLenMetaAction('test')).not.toHaveProperty('error')
  })

  test('adding boolean error with prepareAction', () => {
    const boolErrorAction = createAction('boolError', (payload: string) => ({
      payload,
      error: true,
    }))

    expectTypeOf(boolErrorAction('test').error).toBeBoolean()

    expectTypeOf(boolErrorAction('test').error).not.toBeString()
  })

  test('adding string error with prepareAction', () => {
    const strErrorAction = createAction('strError', (payload: string) => ({
      payload,
      error: 'this is an error',
    }))

    expectTypeOf(strErrorAction('test').error).toBeString()

    expectTypeOf(strErrorAction('test').error).not.toBeBoolean()
  })

  test('regression test for https://github.com/reduxjs/redux-toolkit/issues/214', () => {
    const action = createAction<{ input?: string }>('ACTION')

    expectTypeOf(action({ input: '' }).payload.input).toEqualTypeOf<
      string | undefined
    >()

    expectTypeOf(action({ input: '' }).payload.input).not.toBeNumber()

    expectTypeOf(action).parameter(0).not.toMatchTypeOf({ input: 3 })
  })

  test('regression test for https://github.com/reduxjs/redux-toolkit/issues/224', () => {
    const oops = createAction('oops', (x: any) => ({
      payload: x,
      error: x,
      meta: x,
    }))

    expectTypeOf(oops('').payload).toBeAny()

    expectTypeOf(oops('').error).toBeAny()

    expectTypeOf(oops('').meta).toBeAny()
  })

  describe('createAction.match()', () => {
    test('simple use case', () => {
      const actionCreator = createAction<string, 'test'>('test')

      const x: Action<string> = {} as any

      if (actionCreator.match(x)) {
        expectTypeOf(x.type).toEqualTypeOf<'test'>()

        expectTypeOf(x.payload).toBeString()
      } else {
        expectTypeOf(x.type).not.toMatchTypeOf<'test'>()

        expectTypeOf(x).not.toHaveProperty('payload')
      }
    })

    test('special case: optional argument', () => {
      const actionCreator = createAction<string | undefined, 'test'>('test')

      const x: Action<string> = {} as any

      if (actionCreator.match(x)) {
        expectTypeOf(x.type).toEqualTypeOf<'test'>()

        expectTypeOf(x.payload).toEqualTypeOf<string | undefined>()
      }
    })

    test('special case: without argument', () => {
      const actionCreator = createAction('test')

      const x: Action<string> = {} as any

      if (actionCreator.match(x)) {
        expectTypeOf(x.type).toEqualTypeOf<'test'>()

        expectTypeOf(x.payload).not.toMatchTypeOf<{}>()
      }
    })

    test('special case: with prepareAction', () => {
      const actionCreator = createAction('test', () => ({
        payload: '',
        meta: '',
        error: false,
      }))

      const x: Action<string> = {} as any

      if (actionCreator.match(x)) {
        expectTypeOf(x.type).toEqualTypeOf<'test'>()

        expectTypeOf(x.payload).toBeString()

        expectTypeOf(x.meta).toBeString()

        expectTypeOf(x.error).toBeBoolean()

        expectTypeOf(x.payload).not.toBeNumber()

        expectTypeOf(x.meta).not.toBeNumber()

        expectTypeOf(x.error).not.toBeNumber()
      }
    })
    test('potential use: as array filter', () => {
      const actionCreator = createAction<string, 'test'>('test')

      const x: Action<string>[] = []

      expectTypeOf(x.filter(actionCreator.match)).toEqualTypeOf<
        PayloadAction<string, 'test'>[]
      >()
    })
  })

  test('ActionCreatorWithOptionalPayload', () => {
    expectTypeOf(createAction<string | undefined>('')).toEqualTypeOf<
      ActionCreatorWithOptionalPayload<string | undefined>
    >()

    expectTypeOf(
      createAction<void>(''),
    ).toEqualTypeOf<ActionCreatorWithoutPayload>()

    assertType<ActionCreatorWithNonInferrablePayload>(createAction(''))

    expectTypeOf(createAction<string>('')).toEqualTypeOf<
      ActionCreatorWithPayload<string>
    >()

    expectTypeOf(
      createAction('', (_: 0) => ({
        payload: 1 as 1,
        error: 2 as 2,
        meta: 3 as 3,
      })),
    ).toEqualTypeOf<ActionCreatorWithPreparedPayload<[0], 1, '', 2, 3>>()

    const anyCreator = createAction<any>('')

    expectTypeOf(anyCreator).toEqualTypeOf<ActionCreatorWithPayload<any>>()

    expectTypeOf(anyCreator({}).payload).toBeAny()
  })

  test("Verify action creators should not be passed directly as arguments to React event handlers if there shouldn't be a payload", () => {
    const emptyAction = createAction<void>('empty/action')

    function TestComponent() {
      // This typically leads to an error like:
      //  // A non-serializable value was detected in an action, in the path: `payload`.
      // @ts-expect-error Should error because `void` and `MouseEvent` aren't compatible
      return <button onClick={emptyAction}>+</button>
    }
  })
})
