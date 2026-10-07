import type { Action } from 'redux'
import type { ThunkAction } from 'redux-thunk'
import { describe, expect, test } from 'vitest'
import { configureStore } from '../../configureStore'
import { createAsyncThunk } from '../../createAsyncThunk'
import { createSlice } from '../../createSlice'
import { addListener, createListenerMiddleware, removeListener } from '../index'

export interface CounterState {
  counter: number
}

const initialState: CounterState = {
  counter: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter++
    },
  },
})

export function fetchCount(amount = 1) {
  return new Promise<{ data: number }>((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500),
  )
}

export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount: number) => {
    const response = await fetchCount(amount)
    // The value we return becomes the `fulfilled` action payload
    return response.data
  },
)

const { increment } = counterSlice.actions

const store = configureStore({
  reducer: counterSlice.reducer,
})

type AppStore = typeof store
type AppDispatch = typeof store.dispatch
type RootState = ReturnType<typeof store.getState>
type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>

type ExtraArgument = { foo: string }

const listenerMiddleware = createListenerMiddleware()

const startAppListening = listenerMiddleware.startListening.withTypes<
  RootState,
  AppDispatch,
  ExtraArgument
>()

const stopAppListening = listenerMiddleware.stopListening.withTypes<
  RootState,
  AppDispatch,
  ExtraArgument
>()

const addAppListener = addListener.withTypes<RootState, AppDispatch, ExtraArgument>()

const removeAppListener = removeListener.withTypes<RootState, AppDispatch, ExtraArgument>()

describe('startAppListening.withTypes', () => {
  test('should return startListening', () => {
    expect(startAppListening.withTypes).toEqual(expect.any(Function))

    expect(startAppListening.withTypes().withTypes).toEqual(
      expect.any(Function),
    )

    expect(startAppListening).toBe(listenerMiddleware.startListening)
  })
})

describe('stopAppListening.withTypes', () => {
  test('should return stopListening', () => {
    expect(stopAppListening.withTypes).toEqual(expect.any(Function))

    expect(stopAppListening.withTypes().withTypes).toEqual(expect.any(Function))

    expect(stopAppListening).toBe(listenerMiddleware.stopListening)
  })
})

describe('addAppListener.withTypes', () => {
  test('should return addListener', () => {
    expect(addAppListener.withTypes).toEqual(expect.any(Function))

    expect(addAppListener.withTypes().withTypes).toEqual(expect.any(Function))

    expect(addAppListener).toBe(addListener)
  })
})

describe('removeAppListener.withTypes', () => {
  test('should return removeListener', () => {
    expect(removeAppListener.withTypes).toEqual(expect.any(Function))

    expect(removeAppListener.withTypes().withTypes).toEqual(
      expect.any(Function),
    )

    expect(removeAppListener).toBe(removeListener)
  })
})
