"use strict";

const nodeCrypto = require("crypto");
const DOMException = require("../generated/DOMException");

// https://w3c.github.io/webcrypto/#crypto-interface
class CryptoImpl {
  constructor(globalObject) {
    this._globalObject = globalObject;
  }

  // https://w3c.github.io/webcrypto/#Crypto-method-getRandomValues
  getRandomValues(array) {
    const typeName = getTypedArrayTypeName(array);
    if (!(typeName === "Int8Array" ||
        typeName === "Uint8Array" ||
        typeName === "Uint8ClampedArray" ||
        typeName === "Int16Array" ||
        typeName === "Uint16Array" ||
        typeName === "Int32Array" ||
        typeName === "Uint32Array" ||
        typeName === "BigInt64Array" ||
        typeName === "BigUint64Array")) {
      throw DOMException.create(this._globalObject, [
        `getRandomValues() only accepts integer typed arrays`,
        "TypeMismatchError"
      ]);
    }

    if (array.byteLength > 65536) {
      throw DOMException.create(this._globalObject, [
        `getRandomValues() cannot generate more than 65536 bytes of random values; ` +
        `${array.byteLength} bytes were requested`,
        "QuotaExceededError"
      ]);
    }
    nodeCrypto.randomFillSync(array);
    return array;
  }

  // https://w3c.github.io/webcrypto/#Crypto-method-randomUUID
  randomUUID() {
    return nodeCrypto.randomUUID();
  }
}

exports.implementation = CryptoImpl;

// See #3395. Subclasses of TypedArrays should properly work, but we can't rely
// on instanceof because Uint8Array may be different across different windows -
// which can happen in JSDOM when running { runScripts: "dangerously" }. As a
// solution, we imitate the behavior of instanceof by walking the proottype
// chain.
function getTypedArrayTypeName(array) {
  const target = array.constructor;
  const chain = [target.name];
  let proto = Object.getPrototypeOf(target);
  while (proto) {
    chain.push(proto.name);
    proto = Object.getPrototypeOf(proto);
  }

  while (chain.length > 0 && chain[chain.length - 1] !== "TypedArray") {
    chain.pop();
  }
  chain.reverse();
  return chain[1];
}
