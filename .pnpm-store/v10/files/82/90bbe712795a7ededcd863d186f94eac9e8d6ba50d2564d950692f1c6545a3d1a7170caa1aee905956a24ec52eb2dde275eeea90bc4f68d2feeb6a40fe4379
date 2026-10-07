import { createDraftSafeSelector, createSelector } from '@reduxjs/toolkit'
import { produce } from 'immer'

type State = { value: number }
const selectSelf = (state: State) => state

test('handles normal values correctly', () => {
  const unsafeSelector = createSelector(selectSelf, (x) => x.value)
  const draftSafeSelector = createDraftSafeSelector(selectSelf, (x) => x.value)

  let state = { value: 1 }
  expect(unsafeSelector(state)).toBe(1)
  expect(draftSafeSelector(state)).toBe(1)
  expect(draftSafeSelector).toHaveProperty('resultFunc')
  expect(draftSafeSelector).toHaveProperty('memoizedResultFunc')
  expect(draftSafeSelector).toHaveProperty('lastResult')
  expect(draftSafeSelector).toHaveProperty('dependencies')
  expect(draftSafeSelector).toHaveProperty('recomputations')
  expect(draftSafeSelector).toHaveProperty('resetRecomputations')
  expect(draftSafeSelector).toHaveProperty('clearCache')

  state = { value: 2 }
  expect(unsafeSelector(state)).toBe(2)
  expect(draftSafeSelector(state)).toBe(2)
})

test('handles drafts correctly', () => {
  const unsafeSelector = createSelector(selectSelf, (state) => state.value)
  const draftSafeSelector = createDraftSafeSelector(
    selectSelf,
    (state) => state.value,
  )

  produce({ value: 1 }, (state) => {
    expect(unsafeSelector(state)).toBe(1)
    expect(draftSafeSelector(state)).toBe(1)

    state.value = 2

    expect(unsafeSelector(state)).toBe(1)
    expect(draftSafeSelector(state)).toBe(2)
  })
})
