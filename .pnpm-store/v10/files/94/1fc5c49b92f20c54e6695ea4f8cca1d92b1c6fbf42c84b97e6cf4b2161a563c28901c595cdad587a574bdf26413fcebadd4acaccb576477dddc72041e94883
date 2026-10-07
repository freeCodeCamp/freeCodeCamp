import { mergeRight } from './mergeRight'

test('shallowly merges two given objects', () => {
  expect(mergeRight({ a: 1, b: 2 }, { b: 3, c: 4 })).toEqual({
    a: 1,
    b: 3,
    c: 4,
  })
})

test('deeply merges two given objects', () => {
  expect(
    mergeRight(
      {
        a: 'string',
        b: [1, 2],
        c: {
          d: 2,
        },
      },
      {
        a: 'another-string',
        b: [3],
        c: {
          e: 'five',
          f: {
            g: true,
          },
        },
      },
    ),
  ).toEqual({
    a: 'another-string',
    b: [1, 2, 3],
    c: {
      d: 2,
      e: 'five',
      f: {
        g: true,
      },
    },
  })
})
