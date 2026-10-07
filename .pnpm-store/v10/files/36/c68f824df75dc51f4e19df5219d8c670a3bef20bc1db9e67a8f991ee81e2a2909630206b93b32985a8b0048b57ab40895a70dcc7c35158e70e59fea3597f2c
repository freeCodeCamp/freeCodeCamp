import type {
  CaseReducer,
  Draft,
  PayloadAction,
  Reducer,
  UnknownAction,
} from '@reduxjs/toolkit'
import {
  createAction,
  createAsyncThunk,
  createNextState,
  createReducer,
  isPlainObject,
} from '@reduxjs/toolkit'
import { waitMs } from './utils/helpers'

interface Todo {
  text: string
  completed?: boolean
}

interface AddTodoPayload {
  newTodo: Todo
}

interface ToggleTodoPayload {
  index: number
}

type TodoState = Todo[]
type TodosReducer = Reducer<TodoState, PayloadAction<any>>
type AddTodoReducer = CaseReducer<
  TodoState,
  PayloadAction<AddTodoPayload, 'ADD_TODO'>
>

type ToggleTodoReducer = CaseReducer<
  TodoState,
  PayloadAction<ToggleTodoPayload, 'TOGGLE_TODO'>
>

type CreateReducer = typeof createReducer

const addTodoThunk = createAsyncThunk('todos/add', (todo: Todo) => todo)

describe('createReducer', () => {
  describe('given impure reducers with immer', () => {
    const addTodo: AddTodoReducer = (state, action) => {
      const { newTodo } = action.payload

      // Can safely call state.push() here
      state.push({ ...newTodo, completed: false })
    }

    const toggleTodo: ToggleTodoReducer = (state, action) => {
      const { index } = action.payload

      const todo = state[index]
      // Can directly modify the todo object
      todo.completed = !todo.completed
    }

    const todosReducer = createReducer([] as TodoState, (builder) => {
      builder.addCase('ADD_TODO', addTodo).addCase('TOGGLE_TODO', toggleTodo)
    })

    behavesLikeReducer(todosReducer)
  })

  describe('Deprecation warnings', () => {
    beforeEach(() => {
      vi.resetModules()
    })

    afterEach(() => {
      vi.unstubAllEnvs()
    })

    it('Throws an error if the legacy object notation is used', async () => {
      const { createReducer } = await import('../createReducer')
      const wrapper = () => {
        const dummyReducer = (createReducer as CreateReducer)(
          [] as TodoState,
          // @ts-ignore
          {},
        )
      }

      expect(wrapper).toThrowError(
        /The object notation for `createReducer` has been removed/,
      )

      expect(wrapper).toThrowError(
        /The object notation for `createReducer` has been removed/,
      )
    })

    it('Crashes in production', async () => {
      vi.stubEnv('NODE_ENV', 'production')
      const { createReducer } = await import('../createReducer')
      const wrapper = () => {
        const dummyReducer = (createReducer as CreateReducer)(
          [] as TodoState,
          // @ts-ignore
          {},
        )
      }

      expect(wrapper).toThrowError()
    })
  })

  describe('Immer in a production environment', () => {
    beforeEach(() => {
      vi.resetModules()
      vi.stubEnv('NODE_ENV', 'production')
    })

    afterEach(() => {
      vi.unstubAllEnvs()
    })

    test('Freezes data in production', async () => {
      const { createReducer } = await import('../createReducer')
      const addTodo: AddTodoReducer = (state, action) => {
        const { newTodo } = action.payload
        state.push({ ...newTodo, completed: false })
      }

      const toggleTodo: ToggleTodoReducer = (state, action) => {
        const { index } = action.payload
        const todo = state[index]
        todo.completed = !todo.completed
      }

      const todosReducer = createReducer([] as TodoState, (builder) => {
        builder.addCase('ADD_TODO', addTodo).addCase('TOGGLE_TODO', toggleTodo)
      })

      const result = todosReducer([], {
        type: 'ADD_TODO',
        payload: { text: 'Buy milk' },
      })

      const mutateStateOutsideReducer = () => (result[0].text = 'edited')
      expect(mutateStateOutsideReducer).toThrowError(
        'Cannot add property text, object is not extensible',
      )
    })

    test('Freezes initial state', () => {
      const initialState = [{ text: 'Buy milk' }]
      const todosReducer = createReducer(initialState, () => {})
      const frozenInitialState = todosReducer(undefined, { type: 'dummy' })

      const mutateStateOutsideReducer = () =>
        (frozenInitialState[0].text = 'edited')
      expect(mutateStateOutsideReducer).toThrowError(
        /Cannot assign to read only property/,
      )
    })
    test('does not throw error if initial state is not draftable', () => {
      expect(() =>
        createReducer(new URLSearchParams(), () => {}),
      ).not.toThrowError()
    })
  })

  describe('given pure reducers with immutable updates', () => {
    const addTodo: AddTodoReducer = (state, action) => {
      const { newTodo } = action.payload

      // Updates the state immutably without relying on immer
      return state.concat({ ...newTodo, completed: false })
    }

    const toggleTodo: ToggleTodoReducer = (state, action) => {
      const { index } = action.payload

      // Updates the todo object immutably withot relying on immer
      return state.map((todo, i) => {
        if (i !== index) return todo
        return { ...todo, completed: !todo.completed }
      })
    }

    const todosReducer = createReducer([] as TodoState, (builder) => {
      builder.addCase('ADD_TODO', addTodo).addCase('TOGGLE_TODO', toggleTodo)
    })

    behavesLikeReducer(todosReducer)
  })

  describe('Accepts a lazy state init function to generate initial state', () => {
    const addTodo: AddTodoReducer = (state, action) => {
      const { newTodo } = action.payload
      state.push({ ...newTodo, completed: false })
    }

    const toggleTodo: ToggleTodoReducer = (state, action) => {
      const { index } = action.payload
      const todo = state[index]
      todo.completed = !todo.completed
    }

    const lazyStateInit = () => [] as TodoState

    const todosReducer = createReducer([] as TodoState, (builder) => {
      builder.addCase('ADD_TODO', addTodo).addCase('TOGGLE_TODO', toggleTodo)
    })

    behavesLikeReducer(todosReducer)

    it('Should only call the init function when `undefined` state is passed in', () => {
      const spy = vi.fn().mockReturnValue(42)

      const dummyReducer = createReducer(spy, () => {})
      expect(spy).not.toHaveBeenCalled()

      dummyReducer(123, { type: 'dummy' })
      expect(spy).not.toHaveBeenCalled()

      const initialState = dummyReducer(undefined, { type: 'dummy' })
      expect(spy).toHaveBeenCalledOnce()
    })
  })

  describe('given draft state from immer', () => {
    const addTodo: AddTodoReducer = (state, action) => {
      const { newTodo } = action.payload

      // Can safely call state.push() here
      state.push({ ...newTodo, completed: false })
    }

    const toggleTodo: ToggleTodoReducer = (state, action) => {
      const { index } = action.payload

      const todo = state[index]
      // Can directly modify the todo object
      todo.completed = !todo.completed
    }

    const todosReducer = createReducer([] as TodoState, (builder) => {
      builder.addCase('ADD_TODO', addTodo).addCase('TOGGLE_TODO', toggleTodo)
    })

    const wrappedReducer: TodosReducer = (state = [], action) => {
      return createNextState(state, (draft: Draft<TodoState>) => {
        todosReducer(draft, action)
      })
    }

    behavesLikeReducer(wrappedReducer)
  })

  describe('builder callback for actionMap', () => {
    const increment = createAction<number, 'increment'>('increment')
    const decrement = createAction<number, 'decrement'>('decrement')

    test('can be used with ActionCreators', () => {
      const reducer = createReducer(0, (builder) =>
        builder
          .addCase(increment, (state, action) => state + action.payload)
          .addCase(decrement, (state, action) => state - action.payload),
      )
      expect(reducer(0, increment(5))).toBe(5)
      expect(reducer(5, decrement(5))).toBe(0)
    })
    test('can be used with string types', () => {
      const reducer = createReducer(0, (builder) =>
        builder
          .addCase(
            'increment',
            (state, action: { type: 'increment'; payload: number }) =>
              state + action.payload,
          )
          .addCase(
            'decrement',
            (state, action: { type: 'decrement'; payload: number }) =>
              state - action.payload,
          ),
      )
      expect(reducer(0, increment(5))).toBe(5)
      expect(reducer(5, decrement(5))).toBe(0)
    })
    test('can be used with ActionCreators and string types combined', () => {
      const reducer = createReducer(0, (builder) =>
        builder
          .addCase(increment, (state, action) => state + action.payload)
          .addCase(
            'decrement',
            (state, action: { type: 'decrement'; payload: number }) =>
              state - action.payload,
          ),
      )
      expect(reducer(0, increment(5))).toBe(5)
      expect(reducer(5, decrement(5))).toBe(0)
    })
    test('will throw an error when returning undefined from a non-draftable state', () => {
      const reducer = createReducer(0, (builder) =>
        builder.addCase(
          'decrement',
          (state, action: { type: 'decrement'; payload: number }) => {},
        ),
      )
      expect(() => reducer(5, decrement(5))).toThrowErrorMatchingInlineSnapshot(
        `[Error: A case reducer on a non-draftable value must not return undefined]`,
      )
    })
    test('allows you to return undefined if the state was null, thus skipping an update', () => {
      const reducer = createReducer(null as number | null, (builder) =>
        builder.addCase(
          'decrement',
          (state, action: { type: 'decrement'; payload: number }) => {
            if (typeof state === 'number') {
              return state - action.payload
            }
            return undefined
          },
        ),
      )
      expect(reducer(0, decrement(5))).toBe(-5)
      expect(reducer(null, decrement(5))).toBe(null)
    })
    test('allows you to return null', () => {
      const reducer = createReducer(0 as number | null, (builder) =>
        builder.addCase(
          'decrement',
          (state, action: { type: 'decrement'; payload: number }) => {
            return null
          },
        ),
      )
      expect(reducer(5, decrement(5))).toBe(null)
    })
    test('allows you to return 0', () => {
      const reducer = createReducer(0, (builder) =>
        builder.addCase(
          'decrement',
          (state, action: { type: 'decrement'; payload: number }) =>
            state - action.payload,
        ),
      )
      expect(reducer(5, decrement(5))).toBe(0)
    })
    test('will throw if the same type is used twice', () => {
      expect(() => {
        createReducer(0, (builder) => {
          builder
            .addCase(increment, (state, action) => state + action.payload)
            .addCase(increment, (state, action) => state + action.payload)
            .addCase(decrement, (state, action) => state - action.payload)
        })
      }).toThrowErrorMatchingInlineSnapshot(
        `[Error: \`builder.addCase\` cannot be called with two reducers for the same action type 'increment']`,
      )
      expect(() => {
        createReducer(0, (builder) => {
          builder
            .addCase(increment, (state, action) => state + action.payload)
            .addCase('increment', (state) => state + 1)
            .addCase(decrement, (state, action) => state - action.payload)
        })
      }).toThrowErrorMatchingInlineSnapshot(
        `[Error: \`builder.addCase\` cannot be called with two reducers for the same action type 'increment']`,
      )
    })

    test('will throw if an empty type is used', () => {
      const customActionCreator = (payload: number) => ({
        type: 'custom_action',
        payload,
      })
      customActionCreator.type = ''
      expect(() => {
        createReducer(0, (builder) => {
          builder.addCase(
            customActionCreator,
            (state, action) => state + action.payload,
          )
        })
      }).toThrowErrorMatchingInlineSnapshot(
        `[Error: \`builder.addCase\` cannot be called with an empty action type]`,
      )
    })
  })

  describe('builder "addMatcher" method', () => {
    const prepareNumberAction = (payload: number) => ({
      payload,
      meta: { type: 'number_action' },
    })
    const prepareStringAction = (payload: string) => ({
      payload,
      meta: { type: 'string_action' },
    })

    const numberActionMatcher = (
      a: UnknownAction,
    ): a is PayloadAction<number> =>
      isPlainObject(a.meta) &&
      'type' in a.meta &&
      (a.meta as Record<'type', unknown>).type === 'number_action'

    const stringActionMatcher = (
      a: UnknownAction,
    ): a is PayloadAction<string> =>
      isPlainObject(a.meta) &&
      'type' in a.meta &&
      (a.meta as Record<'type', unknown>).type === 'string_action'

    const incrementBy = createAction('increment', prepareNumberAction)
    const decrementBy = createAction('decrement', prepareNumberAction)
    const concatWith = createAction('concat', prepareStringAction)

    const initialState = { numberActions: 0, stringActions: 0 }

    test('uses the reducer of matching actionMatchers', () => {
      const reducer = createReducer(initialState, (builder) =>
        builder
          .addMatcher(numberActionMatcher, (state) => {
            state.numberActions += 1
          })
          .addMatcher(stringActionMatcher, (state) => {
            state.stringActions += 1
          }),
      )
      expect(reducer(undefined, incrementBy(1))).toEqual({
        numberActions: 1,
        stringActions: 0,
      })
      expect(reducer(undefined, decrementBy(1))).toEqual({
        numberActions: 1,
        stringActions: 0,
      })
      expect(reducer(undefined, concatWith('foo'))).toEqual({
        numberActions: 0,
        stringActions: 1,
      })
    })
    test('falls back to defaultCase', () => {
      const reducer = createReducer(initialState, (builder) =>
        builder
          .addCase(concatWith, (state) => {
            state.stringActions += 1
          })
          .addMatcher(numberActionMatcher, (state) => {
            state.numberActions += 1
          })
          .addDefaultCase((state) => {
            state.numberActions = -1
            state.stringActions = -1
          }),
      )
      expect(reducer(undefined, { type: 'somethingElse' })).toEqual({
        numberActions: -1,
        stringActions: -1,
      })
    })
    test('runs reducer cases followed by all matching actionMatchers', () => {
      const reducer = createReducer(initialState, (builder) =>
        builder
          .addCase(incrementBy, (state) => {
            state.numberActions = state.numberActions * 10 + 1
          })
          .addMatcher(numberActionMatcher, (state) => {
            state.numberActions = state.numberActions * 10 + 2
          })
          .addMatcher(stringActionMatcher, (state) => {
            state.stringActions = state.stringActions * 10 + 1
          })
          .addMatcher(numberActionMatcher, (state) => {
            state.numberActions = state.numberActions * 10 + 3
          }),
      )
      expect(reducer(undefined, incrementBy(1))).toEqual({
        numberActions: 123,
        stringActions: 0,
      })
      expect(reducer(undefined, decrementBy(1))).toEqual({
        numberActions: 23,
        stringActions: 0,
      })
      expect(reducer(undefined, concatWith('foo'))).toEqual({
        numberActions: 0,
        stringActions: 1,
      })
    })
    test('works with `actionCreator.match`', () => {
      const reducer = createReducer(initialState, (builder) =>
        builder.addMatcher(incrementBy.match, (state) => {
          state.numberActions += 100
        }),
      )
      expect(reducer(undefined, incrementBy(1))).toEqual({
        numberActions: 100,
        stringActions: 0,
      })
    })
    test('calling addCase, addMatcher and addDefaultCase in a nonsensical order should result in an error in development mode', () => {
      expect(() =>
        createReducer(initialState, (builder: any) =>
          builder
            .addMatcher(numberActionMatcher, () => {})
            .addCase(incrementBy, () => {}),
        ),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: \`builder.addCase\` should only be called before calling \`builder.addMatcher\`]`,
      )
      expect(() =>
        createReducer(initialState, (builder: any) =>
          builder.addDefaultCase(() => {}).addCase(incrementBy, () => {}),
        ),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: \`builder.addCase\` should only be called before calling \`builder.addDefaultCase\`]`,
      )
      expect(() =>
        createReducer(initialState, (builder: any) =>
          builder
            .addDefaultCase(() => {})
            .addMatcher(numberActionMatcher, () => {}),
        ),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: \`builder.addMatcher\` should only be called before calling \`builder.addDefaultCase\`]`,
      )
      expect(() =>
        createReducer(initialState, (builder: any) =>
          builder.addDefaultCase(() => {}).addDefaultCase(() => {}),
        ),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: \`builder.addDefaultCase\` can only be called once]`,
      )
    })
  })
  describe('builder "addAsyncThunk" method', () => {
    const initialState = { todos: [] as Todo[], loading: false, errored: false }
    test('uses the matching reducer for each action type', () => {
      const reducer = createReducer(initialState, (builder) =>
        builder.addAsyncThunk(addTodoThunk, {
          pending(state) {
            state.loading = true
          },
          fulfilled(state, action) {
            state.todos.push(action.payload)
          },
          rejected(state) {
            state.errored = true
          },
          settled(state) {
            state.loading = false
          },
        }),
      )
      const todo: Todo = { text: 'test' }
      expect(reducer(undefined, addTodoThunk.pending('test', todo))).toEqual({
        todos: [],
        loading: true,
        errored: false,
      })
      expect(
        reducer(undefined, addTodoThunk.fulfilled(todo, 'test', todo)),
      ).toEqual({
        todos: [todo],
        loading: false,
        errored: false,
      })
      expect(
        reducer(undefined, addTodoThunk.rejected(new Error(), 'test', todo)),
      ).toEqual({
        todos: [],
        loading: false,
        errored: true,
      })
    })
    test('calling addAsyncThunk after addDefaultCase should result in an error in development mode', () => {
      expect(() =>
        createReducer(initialState, (builder: any) =>
          builder.addDefaultCase(() => {}).addAsyncThunk(addTodoThunk, {}),
        ),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: \`builder.addAsyncThunk\` should only be called before calling \`builder.addDefaultCase\`]`,
      )
    })
  })
})

function behavesLikeReducer(todosReducer: TodosReducer) {
  it('should handle initial state', () => {
    const initialAction = { type: '', payload: undefined }
    expect(todosReducer(undefined, initialAction)).toEqual([])
  })

  it('should handle ADD_TODO', () => {
    expect(
      todosReducer([], {
        type: 'ADD_TODO',
        payload: { newTodo: { text: 'Run the tests' } },
      }),
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
      },
    ])

    expect(
      todosReducer(
        [
          {
            text: 'Run the tests',
            completed: false,
          },
        ],
        {
          type: 'ADD_TODO',
          payload: { newTodo: { text: 'Use Redux' } },
        },
      ),
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
      },
      {
        text: 'Use Redux',
        completed: false,
      },
    ])

    expect(
      todosReducer(
        [
          {
            text: 'Run the tests',
            completed: false,
          },
          {
            text: 'Use Redux',
            completed: false,
          },
        ],
        {
          type: 'ADD_TODO',
          payload: { newTodo: { text: 'Fix the tests' } },
        },
      ),
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
      },
      {
        text: 'Use Redux',
        completed: false,
      },
      {
        text: 'Fix the tests',
        completed: false,
      },
    ])
  })

  it('should handle TOGGLE_TODO', () => {
    expect(
      todosReducer(
        [
          {
            text: 'Run the tests',
            completed: false,
          },
          {
            text: 'Use Redux',
            completed: false,
          },
        ],
        {
          type: 'TOGGLE_TODO',
          payload: { index: 0 },
        },
      ),
    ).toEqual([
      {
        text: 'Run the tests',
        completed: true,
      },
      {
        text: 'Use Redux',
        completed: false,
      },
    ])
  })
}
