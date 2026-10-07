import { tryCatch } from './tryCatch'

test('returns the function payload', () => {
  const result = tryCatch(() => 'hello')
  expect(result).toEqual('hello')
})

test('silences exceptions by default', () => {
  const result = tryCatch(() => {
    throw new Error('Exception')
  })

  expect(result).toBeUndefined()
})

test('executes a custom callback function when an exception occurs', async () => {
  await new Promise<void>((resolve) => {
    tryCatch(
      () => {
        throw new Error('Exception')
      },
      (error) => {
        expect(error).toBeInstanceOf(Error)
        expect(error.message).toEqual('Exception')
        resolve()
      },
    )
  })
})
