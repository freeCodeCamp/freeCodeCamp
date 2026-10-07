import { trackForMutations } from '@internal/immutableStateInvariantMiddleware'
import { noop } from '@internal/listenerMiddleware/utils'
import type {
  ImmutableStateInvariantMiddlewareOptions,
  Middleware,
  MiddlewareAPI,
  Store,
} from '@reduxjs/toolkit'
import {
  createImmutableStateInvariantMiddleware,
  isImmutableDefault,
} from '@reduxjs/toolkit'

type MWNext = Parameters<ReturnType<Middleware>>[0]

describe('createImmutableStateInvariantMiddleware', () => {
  let state: { foo: { bar: number[]; baz: string } }
  const getState: Store['getState'] = () => state

  function middleware(options: ImmutableStateInvariantMiddlewareOptions = {}) {
    return createImmutableStateInvariantMiddleware(options)({
      getState,
    } as MiddlewareAPI)
  }

  beforeEach(() => {
    state = { foo: { bar: [2, 3, 4], baz: 'baz' } }
  })

  it('sends the action through the middleware chain', () => {
    const next: MWNext = vi.fn()
    const dispatch = middleware()(next)
    dispatch({ type: 'SOME_ACTION' })

    expect(next).toHaveBeenCalledWith({
      type: 'SOME_ACTION',
    })
  })

  it('throws if mutating inside the dispatch', () => {
    const next: MWNext = (action) => {
      state.foo.bar.push(5)
      return action
    }

    const dispatch = middleware()(next)

    expect(() => {
      dispatch({ type: 'SOME_ACTION' })
    }).toThrow(new RegExp('foo\\.bar\\.3'))
  })

  it('throws if mutating between dispatches', () => {
    const next: MWNext = (action) => action

    const dispatch = middleware()(next)

    dispatch({ type: 'SOME_ACTION' })
    state.foo.bar.push(5)
    expect(() => {
      dispatch({ type: 'SOME_OTHER_ACTION' })
    }).toThrow(new RegExp('foo\\.bar\\.3'))
  })

  it('does not throw if not mutating inside the dispatch', () => {
    const next: MWNext = (action) => {
      state = { ...state, foo: { ...state.foo, baz: 'changed!' } }
      return action
    }

    const dispatch = middleware()(next)

    expect(() => {
      dispatch({ type: 'SOME_ACTION' })
    }).not.toThrow()
  })

  it('does not throw if not mutating between dispatches', () => {
    const next: MWNext = (action) => action

    const dispatch = middleware()(next)

    dispatch({ type: 'SOME_ACTION' })
    state = { ...state, foo: { ...state.foo, baz: 'changed!' } }
    expect(() => {
      dispatch({ type: 'SOME_OTHER_ACTION' })
    }).not.toThrow()
  })

  it('works correctly with circular references', () => {
    const next: MWNext = (action) => action

    const dispatch = middleware()(next)

    let x: any = {}
    let y: any = {}
    x.y = y
    y.x = x

    expect(() => {
      dispatch({ type: 'SOME_ACTION', x })
    }).not.toThrow()
  })

  it('respects "isImmutable" option', function () {
    const isImmutable = (value: any) => true
    const next: MWNext = (action) => {
      state.foo.bar.push(5)
      return action
    }

    const dispatch = middleware({ isImmutable })(next)

    expect(() => {
      dispatch({ type: 'SOME_ACTION' })
    }).not.toThrow()
  })

  it('respects "ignoredPaths" option', () => {
    const next: MWNext = (action) => {
      state.foo.bar.push(5)
      return action
    }

    const dispatch1 = middleware({ ignoredPaths: ['foo.bar'] })(next)

    expect(() => {
      dispatch1({ type: 'SOME_ACTION' })
    }).not.toThrow()

    const dispatch2 = middleware({ ignoredPaths: [/^foo/] })(next)

    expect(() => {
      dispatch2({ type: 'SOME_ACTION' })
    }).not.toThrow()
  })

  it('Should print a warning if execution takes too long', () => {
    state.foo.bar = new Array(10000).fill({ value: 'more' })

    const next: MWNext = (action) => action

    const dispatch = middleware({ warnAfter: 4 })(next)

    const consoleWarnSpy = vi.spyOn(console, 'warn').mockImplementation(noop)

    try {
      dispatch({ type: 'SOME_ACTION' })

      expect(consoleWarnSpy).toHaveBeenCalledOnce()

      expect(consoleWarnSpy).toHaveBeenLastCalledWith(
        expect.stringMatching(
          /^ImmutableStateInvariantMiddleware took \d*ms, which is more than the warning threshold of 4ms./,
        ),
      )
    } finally {
      consoleWarnSpy.mockRestore()
    }
  })

  it('Should not print a warning if "next" takes too long', () => {
    const next: MWNext = (action) => {
      const started = Date.now()
      while (Date.now() - started < 8) {}
      return action
    }

    const dispatch = middleware({ warnAfter: 4 })(next)

    const consoleWarnSpy = vi.spyOn(console, 'warn').mockImplementation(noop)

    try {
      dispatch({ type: 'SOME_ACTION' })

      expect(consoleWarnSpy).not.toHaveBeenCalled()
    } finally {
      consoleWarnSpy.mockRestore()
    }
  })
})

describe('trackForMutations', () => {
  function testCasesForMutation(spec: any) {
    it('returns true and the mutated path', () => {
      const state = spec.getState()
      const options = spec.middlewareOptions || {}
      const { isImmutable = isImmutableDefault, ignoredPaths } = options
      const tracker = trackForMutations(isImmutable, ignoredPaths, state)
      const newState = spec.fn(state)

      expect(tracker.detectMutations()).toEqual({
        wasMutated: true,
        path: spec.path.join('.'),
      })
    })
  }

  function testCasesForNonMutation(spec: any) {
    it('returns false', () => {
      const state = spec.getState()
      const options = spec.middlewareOptions || {}
      const { isImmutable = isImmutableDefault, ignoredPaths } = options
      const tracker = trackForMutations(isImmutable, ignoredPaths, state)
      const newState = spec.fn(state)

      expect(tracker.detectMutations()).toEqual({ wasMutated: false })
    })
  }

  interface TestConfig {
    getState: Store['getState']
    fn: (s: any) => typeof s | object
    middlewareOptions?: ImmutableStateInvariantMiddlewareOptions
    path?: string[]
  }

  const mutations: Record<string, TestConfig> = {
    'adding to nested array': {
      getState: () => ({
        foo: {
          bar: [2, 3, 4],
          baz: 'baz',
        },
        stuff: [],
      }),
      fn: (s) => {
        s.foo.bar.push(5)
        return s
      },
      path: ['foo', 'bar', '3'],
    },
    'adding to nested array and setting new root object': {
      getState: () => ({
        foo: {
          bar: [2, 3, 4],
          baz: 'baz',
        },
        stuff: [],
      }),
      fn: (s) => {
        s.foo.bar.push(5)
        return { ...s }
      },
      path: ['foo', 'bar', '3'],
    },
    'changing nested string': {
      getState: () => ({
        foo: {
          bar: [2, 3, 4],
          baz: 'baz',
        },
        stuff: [],
      }),
      fn: (s) => {
        s.foo.baz = 'changed!'
        return s
      },
      path: ['foo', 'baz'],
    },
    'removing nested state': {
      getState: () => ({
        foo: {
          bar: [2, 3, 4],
          baz: 'baz',
        },
        stuff: [],
      }),
      fn: (s) => {
        delete s.foo
        return s
      },
      path: ['foo'],
    },
    'adding to array': {
      getState: () => ({
        foo: {
          bar: [2, 3, 4],
          baz: 'baz',
        },
        stuff: [],
      }),
      fn: (s) => {
        s.stuff.push(1)
        return s
      },
      path: ['stuff', '0'],
    },
    'adding object to array': {
      getState: () => ({
        stuff: [],
      }),
      fn: (s) => {
        s.stuff.push({ foo: 1, bar: 2 })
        return s
      },
      path: ['stuff', '0'],
    },
    'mutating previous state and returning new state': {
      getState: () => ({ counter: 0 }),
      fn: (s) => {
        s.mutation = true
        return { ...s, counter: s.counter + 1 }
      },
      path: ['mutation'],
    },
    'mutating previous state with non immutable type and returning new state': {
      getState: () => ({ counter: 0 }),
      fn: (s) => {
        s.mutation = [1, 2, 3]
        return { ...s, counter: s.counter + 1 }
      },
      path: ['mutation'],
    },
    'mutating previous state with non immutable type and returning new state without that property':
      {
        getState: () => ({ counter: 0 }),
        fn: (s) => {
          s.mutation = [1, 2, 3]
          return { counter: s.counter + 1 }
        },
        path: ['mutation'],
      },
    'mutating previous state with non immutable type and returning new simple state':
      {
        getState: () => ({ counter: 0 }),
        fn: (s) => {
          s.mutation = [1, 2, 3]
          return 1
        },
        path: ['mutation'],
      },
    'mutating previous state by deleting property and returning new state without that property':
      {
        getState: () => ({ counter: 0, toBeDeleted: true }),
        fn: (s) => {
          delete s.toBeDeleted
          return { counter: s.counter + 1 }
        },
        path: ['toBeDeleted'],
      },
    'mutating previous state by deleting nested property': {
      getState: () => ({ nested: { counter: 0, toBeDeleted: true }, foo: 1 }),
      fn: (s) => {
        delete s.nested.toBeDeleted
        return { nested: { counter: s.counter + 1 } }
      },
      path: ['nested', 'toBeDeleted'],
    },
    'update reference': {
      getState: () => ({ foo: {} }),
      fn: (s) => {
        s.foo = {}
        return s
      },
      path: ['foo'],
    },
    'cannot ignore root state': {
      getState: () => ({ foo: {} }),
      fn: (s) => {
        s.foo = {}
        return s
      },
      middlewareOptions: {
        ignoredPaths: [''],
      },
      path: ['foo'],
    },
    'catching state mutation in non-ignored branch': {
      getState: () => ({
        foo: {
          bar: [1, 2],
        },
        boo: {
          yah: [1, 2],
        },
      }),
      fn: (s) => {
        s.foo.bar.push(3)
        s.boo.yah.push(3)
        return s
      },
      middlewareOptions: {
        ignoredPaths: ['foo'],
      },
      path: ['boo', 'yah', '2'],
    },
  }

  Object.keys(mutations).forEach((mutationDesc) => {
    describe(mutationDesc, () => {
      testCasesForMutation(mutations[mutationDesc])
    })
  })

  const nonMutations: Record<string, TestConfig> = {
    'not doing anything': {
      getState: () => ({ a: 1, b: 2 }),
      fn: (s) => s,
    },
    'from undefined to something': {
      getState: () => undefined,
      fn: (s) => ({ foo: 'bar' }),
    },
    'returning same state': {
      getState: () => ({
        foo: {
          bar: [2, 3, 4],
          baz: 'baz',
        },
        stuff: [],
      }),
      fn: (s) => s,
    },
    'returning a new state object with nested new string': {
      getState: () => ({
        foo: {
          bar: [2, 3, 4],
          baz: 'baz',
        },
        stuff: [],
      }),
      fn: (s) => {
        return { ...s, foo: { ...s.foo, baz: 'changed!' } }
      },
    },
    'returning a new state object with nested new array': {
      getState: () => ({
        foo: {
          bar: [2, 3, 4],
          baz: 'baz',
        },
        stuff: [],
      }),
      fn: (s) => {
        return { ...s, foo: { ...s.foo, bar: [...s.foo.bar, 5] } }
      },
    },
    'removing nested state': {
      getState: () => ({
        foo: {
          bar: [2, 3, 4],
          baz: 'baz',
        },
        stuff: [],
      }),
      fn: (s) => {
        return { ...s, foo: {} }
      },
    },
    'having a NaN in the state': {
      getState: () => ({ a: NaN, b: Number.NaN }),
      fn: (s) => s,
    },
    'ignoring branches from mutation detection': {
      getState: () => ({
        foo: {
          bar: 'bar',
        },
      }),
      fn: (s) => {
        s.foo.bar = 'baz'
        return s
      },
      middlewareOptions: {
        ignoredPaths: ['foo'],
      },
    },
    'ignoring nested branches from mutation detection': {
      getState: () => ({
        foo: {
          bar: [1, 2],
          boo: {
            yah: [1, 2],
          },
        },
      }),
      fn: (s) => {
        s.foo.bar.push(3)
        s.foo.boo.yah.push(3)
        return s
      },
      middlewareOptions: {
        ignoredPaths: ['foo.bar', 'foo.boo.yah'],
      },
    },
    'ignoring nested array indices from mutation detection': {
      getState: () => ({
        stuff: [{ a: 1 }, { a: 2 }],
      }),
      fn: (s) => {
        s.stuff[1].a = 3
        return s
      },
      middlewareOptions: {
        ignoredPaths: ['stuff.1'],
      },
    },
  }

  Object.keys(nonMutations).forEach((nonMutationDesc) => {
    describe(nonMutationDesc, () => {
      testCasesForNonMutation(nonMutations[nonMutationDesc])
    })
  })
})
