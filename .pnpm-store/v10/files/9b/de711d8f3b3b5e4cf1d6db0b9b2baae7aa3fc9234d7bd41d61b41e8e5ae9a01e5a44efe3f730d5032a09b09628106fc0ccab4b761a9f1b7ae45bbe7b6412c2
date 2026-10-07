import { expectType, expectError } from 'tsd'
import sjson from '..'

expectError(sjson.parse(null))
expectType<any>(sjson.parse('{"anything":0}'))

sjson.parse('"test"', null, { protoAction: 'remove' })
expectError(sjson.parse('"test"', null, { protoAction: 'incorrect' }))
sjson.parse('"test"', null, { constructorAction: 'ignore' })
expectError(sjson.parse('"test"', null, { constructorAction: 'incorrect' }))

sjson.safeParse('"test"', null)
sjson.safeParse('"test"')
expectError(sjson.safeParse(null))

sjson.scan({}, { protoAction: 'remove' })
sjson.scan({}, { protoAction: 'ignore' })
sjson.scan({}, { constructorAction: 'error' })
sjson.scan({}, { constructorAction: 'ignore' })
sjson.scan(new Array(), {})

declare const input: Buffer
sjson.parse(input)
sjson.safeParse(input)

sjson.parse('{"anything":0}', (key, value) => {
  expectType<string>(key)
})
sjson.safeParse('{"anything":0}', (key, value) => {
  expectType<string>(key)
})
