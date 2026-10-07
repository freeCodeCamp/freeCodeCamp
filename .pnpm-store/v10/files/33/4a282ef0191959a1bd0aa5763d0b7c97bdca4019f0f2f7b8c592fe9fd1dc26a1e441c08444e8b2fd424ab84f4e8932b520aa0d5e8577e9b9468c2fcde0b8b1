// Unless explicitly stated otherwise all files in this repository are licensed under the Apache 2.0 License.
//
// This product includes software developed at Datadog (https://www.datadoghq.com/). Copyright 2021 Datadog, Inc.

const importHooks = [] // TODO should this be a Set?
const setters = new WeakMap()
const getters = new WeakMap()
const specifiers = new Map()
const toHook = []

const proxyHandler = {
  set (target, name, value) {
    const set = setters.get(target)
    const setter = set && set[name]
    if (typeof setter === 'function') {
      return setter(value)
    }
    // If a module doesn't export the property being assigned (e.g. no default
    // export), there is no setter to call. Don't crash userland code.
    return true
  },

  get (target, name) {
    if (name === Symbol.toStringTag) {
      return 'Module'
    }

    const getter = getters.get(target)[name]

    if (typeof getter === 'function') {
      return getter()
    }
  },

  defineProperty (target, property, descriptor) {
    if ((!('value' in descriptor))) {
      throw new Error('Getters/setters are not supported for exports property descriptors.')
    }

    const set = setters.get(target)
    const setter = set && set[property]
    if (typeof setter === 'function') {
      return setter(descriptor.value)
    }
    return true
  }
}

function register (name, namespace, set, get, specifier) {
  specifiers.set(name, specifier)
  setters.set(namespace, set)
  getters.set(namespace, get)
  const proxy = new Proxy(namespace, proxyHandler)
  importHooks.forEach(hook => hook(name, proxy, specifier))
  toHook.push([name, proxy, specifier])
}

exports.register = register
exports.importHooks = importHooks
exports.specifiers = specifiers
exports.toHook = toHook
