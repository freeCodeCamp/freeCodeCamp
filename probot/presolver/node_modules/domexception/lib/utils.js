"use strict";

// Returns "Type(value) is Object" in ES terminology.
function isObject(value) {
  return typeof value === "object" && value !== null || typeof value === "function";
}

function getReferenceToBytes(bufferSource) {
  // Node.js' Buffer does not allow subclassing for now, so we can get away with a prototype object check for perf.
  if (Object.getPrototypeOf(bufferSource) === Buffer.prototype) {
    return bufferSource;
  }
  if (bufferSource instanceof ArrayBuffer) {
    return Buffer.from(bufferSource);
  }
  return Buffer.from(bufferSource.buffer, bufferSource.byteOffset, bufferSource.byteLength);
}

function getCopyToBytes(bufferSource) {
  return Buffer.from(getReferenceToBytes(bufferSource));
}

function mixin(target, source) {
  const keys = Object.getOwnPropertyNames(source);
  for (let i = 0; i < keys.length; ++i) {
    if (keys[i] in target) {
      continue;
    }

    Object.defineProperty(target, keys[i], Object.getOwnPropertyDescriptor(source, keys[i]));
  }
}

const wrapperSymbol = Symbol("wrapper");
const implSymbol = Symbol("impl");
const sameObjectCaches = Symbol("SameObject caches");

function getSameObject(wrapper, prop, creator) {
  if (!wrapper[sameObjectCaches]) {
    wrapper[sameObjectCaches] = Object.create(null);
  }

  if (prop in wrapper[sameObjectCaches]) {
    return wrapper[sameObjectCaches][prop];
  }

  wrapper[sameObjectCaches][prop] = creator();
  return wrapper[sameObjectCaches][prop];
}

function wrapperForImpl(impl) {
  return impl ? impl[wrapperSymbol] : null;
}

function implForWrapper(wrapper) {
  return wrapper ? wrapper[implSymbol] : null;
}

function tryWrapperForImpl(impl) {
  const wrapper = wrapperForImpl(impl);
  return wrapper ? wrapper : impl;
}

function tryImplForWrapper(wrapper) {
  const impl = implForWrapper(wrapper);
  return impl ? impl : wrapper;
}

const iterInternalSymbol = Symbol("internal");
const IteratorPrototype = Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()));

module.exports = exports = {
  isObject,
  getReferenceToBytes,
  getCopyToBytes,
  mixin,
  wrapperSymbol,
  implSymbol,
  getSameObject,
  wrapperForImpl,
  implForWrapper,
  tryWrapperForImpl,
  tryImplForWrapper,
  iterInternalSymbol,
  IteratorPrototype
};
