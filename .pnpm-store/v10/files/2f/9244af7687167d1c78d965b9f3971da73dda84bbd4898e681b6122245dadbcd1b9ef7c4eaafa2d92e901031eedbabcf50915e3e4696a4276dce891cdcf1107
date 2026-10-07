import { jsonParse } from './jsonParse'

test('parses a given valid JSON string', () => {
  expect(jsonParse(`{"property":"value"}`)).toEqual({
    property: 'value',
  })
})

test('returns undefined without an error given an invalid JSON string', () => {
  const parse = () => jsonParse(`{"property:val"ue$}`)
  expect(parse).not.toThrow()
  expect(parse()).toBeUndefined()
})
