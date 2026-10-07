import { expectType } from 'tsd'
import { createWarning, createDeprecation } from '..'

const WarnInstance = createWarning({
  name: 'TypeScriptWarning',
  code: 'CODE',
  message: 'message'
})

expectType<string>(WarnInstance.code)
expectType<string>(WarnInstance.message)
expectType<string>(WarnInstance.name)
expectType<boolean>(WarnInstance.emitted)
expectType<boolean>(WarnInstance.unlimited)

expectType<void>(WarnInstance())
expectType<void>(WarnInstance('foo'))
expectType<void>(WarnInstance('foo', 'bar'))

const buildWarnUnlimited = createWarning({
  name: 'TypeScriptWarning',
  code: 'CODE',
  message: 'message',
  unlimited: true
})
expectType<boolean>(buildWarnUnlimited.unlimited)

const DeprecationInstance = createDeprecation({
  code: 'CODE',
  message: 'message'
})
expectType<string>(DeprecationInstance.code)

DeprecationInstance()
DeprecationInstance('foo')
DeprecationInstance('foo', 'bar')
