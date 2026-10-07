import { until } from './index.js'

it('infers the data type if no type arguments were provided', async () => {
  const [error, data] = await until(() => Promise.resolve(123))

  if (error) {
    expectTypeOf(error).toEqualTypeOf<Error>()
    expectTypeOf(data).toEqualTypeOf<null>()
  } else {
    expectTypeOf(error).toEqualTypeOf<null>()
    expectTypeOf(data).toEqualTypeOf<number>()
  }
})

it('treats error/data as a discriminated union type', async () => {
  const [error, data] = await until<Error, number>(() => Promise.resolve(123))

  if (error) {
    expectTypeOf(error).toEqualTypeOf<Error>()
    expectTypeOf(data).toEqualTypeOf<null>()
  } else {
    expectTypeOf(error).toEqualTypeOf<null>()
    expectTypeOf(data).toEqualTypeOf<number>()
  }
})
