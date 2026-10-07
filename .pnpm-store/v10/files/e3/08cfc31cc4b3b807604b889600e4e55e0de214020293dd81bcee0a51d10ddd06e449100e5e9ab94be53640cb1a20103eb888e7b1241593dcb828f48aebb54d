import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { useState } from 'react'

const mockSuccessResponse = { value: 'success' }

const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://example.com' }),
  endpoints: (build) => ({
    update: build.mutation<typeof mockSuccessResponse, any>({
      query: () => ({ url: 'success' }),
    }),
    failedUpdate: build.mutation<typeof mockSuccessResponse, any>({
      query: () => ({ url: 'error' }),
    }),
  }),
})

describe('type tests', () => {
  test('a mutation is unwrappable and has the correct types', () => {
    function User() {
      const [manualError, setManualError] = useState<any>()

      const [update, { isLoading, data, error }] =
        api.endpoints.update.useMutation()

      return (
        <div>
          <div data-testid="isLoading">{String(isLoading)}</div>
          <div data-testid="data">{JSON.stringify(data)}</div>
          <div data-testid="error">{JSON.stringify(error)}</div>
          <div data-testid="manuallySetError">
            {JSON.stringify(manualError)}
          </div>
          <button
            onClick={() => {
              update({ name: 'hello' })
                .unwrap()
                .then((result) => {
                  expectTypeOf(result).toEqualTypeOf(mockSuccessResponse)

                  setManualError(undefined)
                })
                .catch(setManualError)
            }}
          >
            Update User
          </button>
        </div>
      )
    }
  })
})
