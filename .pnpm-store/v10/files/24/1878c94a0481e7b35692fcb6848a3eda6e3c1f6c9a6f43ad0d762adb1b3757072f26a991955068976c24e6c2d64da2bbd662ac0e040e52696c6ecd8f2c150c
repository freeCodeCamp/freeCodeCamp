import { RefResolver } from '..'
import { expectType } from 'tsd'

const resolver = new RefResolver({
  allowEqualDuplicates: true
})

expectType<void>(resolver.addSchema({}))
expectType<void>(resolver.addSchema({}, 'schemaId'))

expectType<any | null>(resolver.getSchema('schemaId'))
expectType<any | null>(resolver.getSchema('schemaId', 'jsonPointer'))

expectType<boolean>(resolver.hasSchema('schemaId'))

expectType<{ schemaId: string; jsonPointer: string }[]>(resolver.getSchemaRefs('schemaId'))

expectType<{ [key: string]: any }>(resolver.getSchemaDependencies('schemaId'))

expectType<void>(resolver.derefSchema('schemaId'))

expectType<any | null>(resolver.getDerefSchema('schemaId'))
expectType<any | null>(resolver.getDerefSchema('schemaId', 'jsonPointer'))
