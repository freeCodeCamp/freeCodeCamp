import { defaultSerializeQueryArgs } from '@internal/query/defaultSerializeQueryArgs'

const endpointDefinition: any = {}
const endpointName = 'test'

test('string arg', () => {
  expect(
    defaultSerializeQueryArgs({
      endpointDefinition,
      endpointName,
      queryArgs: 'arg',
    }),
  ).toMatchInlineSnapshot(`"test("arg")"`)
})

test('number arg', () => {
  expect(
    defaultSerializeQueryArgs({
      endpointDefinition,
      endpointName,
      queryArgs: 5,
    }),
  ).toMatchInlineSnapshot(`"test(5)"`)
})

test('bigint arg has non-default serialization (intead of throwing)', () => {
  expect(
    defaultSerializeQueryArgs({
      endpointDefinition,
      endpointName,
      queryArgs: BigInt(10),
    }),
  ).toMatchInlineSnapshot(`"test({"$bigint":"10"})"`)
})

test('simple object arg is sorted', () => {
  expect(
    defaultSerializeQueryArgs({
      endpointDefinition,
      endpointName,
      queryArgs: { name: 'arg', age: 5 },
    }),
  ).toMatchInlineSnapshot(`"test({"age":5,"name":"arg"})"`)
})

test('nested object arg is sorted recursively', () => {
  expect(
    defaultSerializeQueryArgs({
      endpointDefinition,
      endpointName,
      queryArgs: { name: { last: 'Split', first: 'Banana' }, age: 5 },
    }),
  ).toMatchInlineSnapshot(
    `"test({"age":5,"name":{"first":"Banana","last":"Split"}})"`,
  )
})

test('Fully serializes a deeply nested object', () => {
  const nestedObj = {
    a: {
      a1: {
        a11: {
          a111: 1,
        },
      },
    },
    b: {
      b2: {
        b21: 3,
      },
      b1: {
        b11: 2,
      },
    },
  }

  const res = defaultSerializeQueryArgs({
    endpointDefinition,
    endpointName,
    queryArgs: nestedObj,
  })
  expect(res).toMatchInlineSnapshot(
    `"test({"a":{"a1":{"a11":{"a111":1}}},"b":{"b1":{"b11":2},"b2":{"b21":3}}})"`,
  )
})

test('Caches results for plain objects', () => {
  const testData = Array.from({ length: 10000 }).map((_, i) => {
    return {
      albumId: i,
      id: i,
      title: 'accusamus beatae ad facilis cum similique qui sunt',
      url: 'https://via.placeholder.com/600/92c952',
      thumbnailUrl: 'https://via.placeholder.com/150/92c952',
    }
  })

  const data = {
    testData,
  }

  const runWithTimer = (data: any) => {
    const start = Date.now()
    const res = defaultSerializeQueryArgs({
      endpointDefinition,
      endpointName,
      queryArgs: data,
    })
    const end = Date.now()
    const duration = end - start
    return [res, duration] as const
  }

  const [res1, time1] = runWithTimer(data)
  const [res2, time2] = runWithTimer(data)

  expect(res1).toBe(res2)
  expect(time2).toBeLessThanOrEqual(time1)
  // Locally, stringifying 10K items takes 25-30ms.
  // Assuming the WeakMap cache hit, this _should_ be 0
  expect(time2).toBeLessThan(2)
})
