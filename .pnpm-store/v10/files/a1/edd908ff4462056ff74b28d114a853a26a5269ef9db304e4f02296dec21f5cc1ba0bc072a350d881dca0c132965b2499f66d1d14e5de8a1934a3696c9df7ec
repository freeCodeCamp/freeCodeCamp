import { expectType, expectError } from 'tsd'
import sjson from '..'

expectError(sjson.parse(null))
expectType<any>(sjson.parse('{"anything":0}'))

sjson.parse('"test"', null, { protoAction: 'remove' })
expectError(sjson.parse('"test"', null, { protoAction: 'incorrect' }))
sjson.parse('"test"', null, { constructorAction: 'ignore' })
expectError(sjson.parse('"test"', null, { constructorAction: 'incorrect' }))
expectError(sjson.parse('"test"', { constructorAction: 'incorrect' }))
sjson.parse('test', { constructorAction: 'remove' })
sjson.parse('test', { protoAction: 'ignore' })
sjson.parse('test', () => {}, { protoAction: 'ignore', constructorAction: 'remove' })
sjson.parse('"test"', null, { safe: true })
sjson.parse('"test"', { safe: true })
sjson.parse('test', () => {}, { safe: false })
sjson.parse('test', { protoAction: 'remove', safe: true })
expectError(sjson.parse('"test"', null, { safe: 'incorrect' }))

sjson.safeParse('"test"', null)
sjson.safeParse('"test"')
expectError(sjson.safeParse(null))

sjson.scan({}, { protoAction: 'remove' })
sjson.scan({}, { protoAction: 'ignore' })
sjson.scan({}, { constructorAction: 'error' })
sjson.scan({}, { constructorAction: 'ignore' })
sjson.scan([], {})
sjson.scan({}, { safe: true })
sjson.scan({}, { protoAction: 'remove', safe: false })
expectError(sjson.scan({}, { safe: 'incorrect' }))

declare const input: Buffer
sjson.parse(input)
sjson.safeParse(input)

sjson.parse('{"anything":0}', (key, value) => {
  expectType<string>(key)
})
sjson.safeParse('{"anything":0}', (key, value) => {
  expectType<string>(key)
})
