import { createDraftSafeSelector } from '@reduxjs/toolkit'

interface Todo {
  id: number
  completed: boolean
}

interface Alert {
  id: number
  read: boolean
}

interface RootState {
  todos: Todo[]
  alerts: Alert[]
}

const rootState: RootState = {
  todos: [
    { id: 0, completed: false },
    { id: 1, completed: false },
  ],
  alerts: [
    { id: 0, read: false },
    { id: 1, read: false },
  ],
}

describe(createDraftSafeSelector.withTypes, () => {
  const createTypedDraftSafeSelector =
    createDraftSafeSelector.withTypes<RootState>()

  test('should return createDraftSafeSelector', () => {
    expect(createTypedDraftSafeSelector.withTypes).toEqual(expect.any(Function))

    expect(createTypedDraftSafeSelector.withTypes().withTypes).toEqual(
      expect.any(Function),
    )

    expect(createTypedDraftSafeSelector).toBe(createDraftSafeSelector)

    const selectTodoIds = createTypedDraftSafeSelector(
      [(state) => state.todos],
      (todos) => todos.map(({ id }) => id),
    )

    expect(selectTodoIds(rootState)).to.be.an('array').that.is.not.empty
  })
})
