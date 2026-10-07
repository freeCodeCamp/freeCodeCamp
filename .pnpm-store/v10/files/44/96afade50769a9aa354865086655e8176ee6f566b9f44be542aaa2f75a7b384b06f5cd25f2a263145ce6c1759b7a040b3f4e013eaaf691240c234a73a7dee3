import { createApi } from '@reduxjs/toolkit/query'

const baseQuery = (args?: any) => ({ data: args })

const api = createApi({
  baseQuery,
  tagTypes: ['Banana', 'Bread'],
  endpoints: (build) => ({
    getBanana: build.query<unknown, number>({
      query(id) {
        return { url: `banana/${id}` }
      },
      providesTags: ['Banana'],
    }),
    getBananas: build.query<unknown, void>({
      query() {
        return { url: 'bananas' }
      },
      providesTags: ['Banana'],
    }),
    getBread: build.query<unknown, number>({
      query(id) {
        return { url: `bread/${id}` }
      },
      providesTags: ['Bread'],
    }),
  }),
})

describe('type tests', () => {
  it('should allow for an array of string TagTypes', () => {
    api.util.invalidateTags(['Banana', 'Bread'])
  })

  it('should allow for an array of full TagTypes descriptions', () => {
    api.util.invalidateTags([{ type: 'Banana' }, { type: 'Bread', id: 1 }])
  })

  it('should allow for a mix of full descriptions as well as plain strings', () => {
    api.util.invalidateTags(['Banana', { type: 'Bread', id: 1 }])
  })

  it('should error when using non-existing TagTypes', () => {
    // @ts-expect-error
    api.util.invalidateTags(['Missing Tag'])
  })

  it('should error when using non-existing TagTypes in the full format', () => {
    // @ts-expect-error
    api.util.invalidateTags([{ type: 'Missing' }])
  })

  it('should allow pre-fetching for an endpoint that takes an arg', () => {
    api.util.prefetch('getBanana', 5, { force: true })
    api.util.prefetch('getBanana', 5, { force: false })
    api.util.prefetch('getBanana', 5, { ifOlderThan: false })
    api.util.prefetch('getBanana', 5, { ifOlderThan: 30 })
    api.util.prefetch('getBanana', 5, {})
  })

  it('should error when pre-fetching with the incorrect arg type', () => {
    // @ts-expect-error arg should be number, not string
    api.util.prefetch('getBanana', '5', { force: true })
  })

  it('should allow pre-fetching for an endpoint with a void arg', () => {
    api.util.prefetch('getBananas', undefined, { force: true })
    api.util.prefetch('getBananas', undefined, { force: false })
    api.util.prefetch('getBananas', undefined, { ifOlderThan: false })
    api.util.prefetch('getBananas', undefined, { ifOlderThan: 30 })
    api.util.prefetch('getBananas', undefined, {})
  })

  it('should error when pre-fetching with a defined arg when expecting void', () => {
    // @ts-expect-error arg should be void, not number
    api.util.prefetch('getBananas', 5, { force: true })
  })

  it('should error when pre-fetching for an incorrect endpoint name', () => {
    // @ts-expect-error endpoint name does not exist
    api.util.prefetch('getPomegranates', undefined, { force: true })
  })
})
