import { vi, it, expect } from 'vitest'
import { createProxy } from './createProxy'

it('does not interfere with default constructors', () => {
  const ProxyClass = createProxy(
    class {
      constructor(public name: string) {}
    },
    {}
  )

  const instance = new ProxyClass('John')
  expect(instance.name).toBe('John')
})

it('does not interfere with default getters', () => {
  const proxy = createProxy({ foo: 'initial' }, {})
  expect(proxy.foo).toBe('initial')
})

it('does not interfere with default setters', () => {
  const proxy = createProxy({ foo: 'initial' }, {})
  proxy.foo = 'next'

  expect(proxy.foo).toBe('next')
})

it('does not interfere with default methods', () => {
  const proxy = createProxy({ getValue: () => 'initial' }, {})
  expect(proxy.getValue()).toBe('initial')
})

it('does not interfere with existing descriptors', () => {
  const target = {} as { foo: string; bar: number }
  let internalBar = 0

  Object.defineProperties(target, {
    foo: {
      get: () => 'initial',
    },
    bar: {
      set: (value) => {
        internalBar = value + 10
      },
    },
  })

  const proxy = createProxy(target, {
    getProperty(data, next) {
      return next()
    },
  })
  expect(proxy.foo).toBe('initial')

  proxy.bar = 5
  expect(proxy.bar).toBeUndefined()
  expect(internalBar).toBe(15)
})

it('infer prototype descriptors', () => {
  class Child {
    ok: boolean

    set status(nextStatus: number) {
      this.ok = nextStatus >= 200 && nextStatus < 300
    }
  }

  Object.defineProperties(Child.prototype, {
    status: { enumerable: true },
  })

  const scope = {} as { child: typeof Child }

  Object.defineProperty(scope, 'child', {
    enumerable: true,
    value: Child,
  })

  const ProxyClass = createProxy(scope.child, {})
  const instance = new ProxyClass()

  instance.status = 201
  expect(instance.ok).toBe(true)
})

it('spies on the constructor', () => {
  const OriginalClass = class {
    constructor(public name: string, public age: number) {}
  }

  const constructorCall = vi.fn<
    (
      args: ConstructorParameters<typeof OriginalClass>,
      next: () => typeof OriginalClass
    ) => typeof OriginalClass
  >((args, next) => next())

  const ProxyClass = createProxy(OriginalClass, {
    constructorCall,
  })

  new ProxyClass('John', 32)

  expect(constructorCall).toHaveBeenCalledTimes(1)
  expect(constructorCall).toHaveBeenCalledWith(
    ['John', 32],
    expect.any(Function)
  )
})

it('spies on property getters', () => {
  const getProperty = vi.fn((args, next) => next())
  const proxy = createProxy({ foo: 'initial' }, { getProperty })

  proxy.foo

  expect(getProperty).toHaveBeenCalledTimes(1)
  expect(getProperty).toHaveBeenCalledWith(['foo', proxy], expect.any(Function))
})

it('spies on property setters', () => {
  const setProperty = vi.fn((args, next) => next())
  const proxy = createProxy({ foo: 'initial' }, { setProperty })

  proxy.foo = 'next'

  expect(setProperty).toHaveBeenCalledTimes(1)
  expect(setProperty).toHaveBeenCalledWith(
    ['foo', 'next'],
    expect.any(Function)
  )
})

it('spies on method calls', () => {
  const methodCall = vi.fn((args, next) => next())
  const proxy = createProxy(
    {
      greet: (name: string) => `hello ${name}`,
    },
    { methodCall }
  )

  proxy.greet('Clair')

  expect(methodCall).toHaveBeenCalledTimes(1)
  expect(methodCall).toHaveBeenCalledWith(
    ['greet', ['Clair']],
    expect.any(Function)
  )
})

it('proxies properties on the prototype level', () => {
  const method = vi.fn()
  const prototype = { method }

  const proxy = createProxy(Object.create(prototype), {})
  const proxyMethod = vi.fn()
  proxy.method = proxyMethod

  prototype.method()
  expect(method).toHaveBeenCalledTimes(0)
  expect(proxyMethod).toHaveBeenCalledTimes(1)
})
