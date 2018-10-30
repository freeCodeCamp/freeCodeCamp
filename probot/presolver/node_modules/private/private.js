"use strict";

var originalObject = Object;
var originalDefProp = Object.defineProperty;
var originalCreate = Object.create;

function defProp(obj, name, value) {
  if (originalDefProp) try {
    originalDefProp.call(originalObject, obj, name, { value: value });
  } catch (definePropertyIsBrokenInIE8) {
    obj[name] = value;
  } else {
    obj[name] = value;
  }
}

// For functions that will be invoked using .call or .apply, we need to
// define those methods on the function objects themselves, rather than
// inheriting them from Function.prototype, so that a malicious or clumsy
// third party cannot interfere with the functionality of this module by
// redefining Function.prototype.call or .apply.
function makeSafeToCall(fun) {
  if (fun) {
    defProp(fun, "call", fun.call);
    defProp(fun, "apply", fun.apply);
  }
  return fun;
}

makeSafeToCall(originalDefProp);
makeSafeToCall(originalCreate);

var hasOwn = makeSafeToCall(Object.prototype.hasOwnProperty);
var numToStr = makeSafeToCall(Number.prototype.toString);
var strSlice = makeSafeToCall(String.prototype.slice);

var cloner = function(){};
function create(prototype) {
  if (originalCreate) {
    return originalCreate.call(originalObject, prototype);
  }
  cloner.prototype = prototype || null;
  return new cloner;
}

var rand = Math.random;
var uniqueKeys = create(null);

function makeUniqueKey() {
  // Collisions are highly unlikely, but this module is in the business of
  // making guarantees rather than safe bets.
  do var uniqueKey = internString(strSlice.call(numToStr.call(rand(), 36), 2));
  while (hasOwn.call(uniqueKeys, uniqueKey));
  return uniqueKeys[uniqueKey] = uniqueKey;
}

function internString(str) {
  var obj = {};
  obj[str] = true;
  return Object.keys(obj)[0];
}

// External users might find this function useful, but it is not necessary
// for the typical use of this module.
exports.makeUniqueKey = makeUniqueKey;

// Object.getOwnPropertyNames is the only way to enumerate non-enumerable
// properties, so if we wrap it to ignore our secret keys, there should be
// no way (except guessing) to access those properties.
var originalGetOPNs = Object.getOwnPropertyNames;
Object.getOwnPropertyNames = function getOwnPropertyNames(object) {
  for (var names = originalGetOPNs(object),
           src = 0,
           dst = 0,
           len = names.length;
       src < len;
       ++src) {
    if (!hasOwn.call(uniqueKeys, names[src])) {
      if (src > dst) {
        names[dst] = names[src];
      }
      ++dst;
    }
  }
  names.length = dst;
  return names;
};

function defaultCreatorFn(object) {
  return create(null);
}

function makeAccessor(secretCreatorFn) {
  var brand = makeUniqueKey();
  var passkey = create(null);

  secretCreatorFn = secretCreatorFn || defaultCreatorFn;

  function register(object) {
    var secret; // Created lazily.

    function vault(key, forget) {
      // Only code that has access to the passkey can retrieve (or forget)
      // the secret object.
      if (key === passkey) {
        return forget
          ? secret = null
          : secret || (secret = secretCreatorFn(object));
      }
    }

    defProp(object, brand, vault);
  }

  function accessor(object) {
    if (!hasOwn.call(object, brand))
      register(object);
    return object[brand](passkey);
  }

  accessor.forget = function(object) {
    if (hasOwn.call(object, brand))
      object[brand](passkey, true);
  };

  return accessor;
}

exports.makeAccessor = makeAccessor;
