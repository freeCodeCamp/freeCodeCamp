'use strict';

var has = require('has');
var toPrimitive = require('es-to-primitive/es6');

var GetIntrinsic = require('./GetIntrinsic');

var $TypeError = GetIntrinsic('%TypeError%');
var $SyntaxError = GetIntrinsic('%SyntaxError%');
var $Array = GetIntrinsic('%Array%');
var $String = GetIntrinsic('%String%');
var $Object = GetIntrinsic('%Object%');
var $Number = GetIntrinsic('%Number%');
var $Symbol = GetIntrinsic('%Symbol%', true);
var $RegExp = GetIntrinsic('%RegExp%');

var hasSymbols = !!$Symbol;

var $isNaN = require('./helpers/isNaN');
var $isFinite = require('./helpers/isFinite');
var MAX_SAFE_INTEGER = $Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1;

var assign = require('./helpers/assign');
var sign = require('./helpers/sign');
var mod = require('./helpers/mod');
var isPrimitive = require('./helpers/isPrimitive');
var parseInteger = parseInt;
var bind = require('function-bind');
var arraySlice = bind.call(Function.call, $Array.prototype.slice);
var strSlice = bind.call(Function.call, $String.prototype.slice);
var isBinary = bind.call(Function.call, $RegExp.prototype.test, /^0b[01]+$/i);
var isOctal = bind.call(Function.call, $RegExp.prototype.test, /^0o[0-7]+$/i);
var regexExec = bind.call(Function.call, $RegExp.prototype.exec);
var nonWS = ['\u0085', '\u200b', '\ufffe'].join('');
var nonWSregex = new $RegExp('[' + nonWS + ']', 'g');
var hasNonWS = bind.call(Function.call, $RegExp.prototype.test, nonWSregex);
var invalidHexLiteral = /^[-+]0x[0-9a-f]+$/i;
var isInvalidHexLiteral = bind.call(Function.call, $RegExp.prototype.test, invalidHexLiteral);
var $charCodeAt = bind.call(Function.call, $String.prototype.charCodeAt);

var toStr = bind.call(Function.call, Object.prototype.toString);

var $floor = Math.floor;
var $abs = Math.abs;

var $ObjectCreate = Object.create;
var $gOPD = $Object.getOwnPropertyDescriptor;

var $isExtensible = $Object.isExtensible;

// whitespace from: http://es5.github.io/#x15.5.4.20
// implementation from https://github.com/es-shims/es5-shim/blob/v3.4.0/es5-shim.js#L1304-L1324
var ws = [
	'\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003',
	'\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028',
	'\u2029\uFEFF'
].join('');
var trimRegex = new RegExp('(^[' + ws + ']+)|([' + ws + ']+$)', 'g');
var replace = bind.call(Function.call, $String.prototype.replace);
var trim = function (value) {
	return replace(value, trimRegex, '');
};

var ES5 = require('./es5');

var hasRegExpMatcher = require('is-regex');

// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-abstract-operations
var ES6 = assign(assign({}, ES5), {

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-call-f-v-args
	Call: function Call(F, V) {
		var args = arguments.length > 2 ? arguments[2] : [];
		if (!this.IsCallable(F)) {
			throw new $TypeError(F + ' is not a function');
		}
		return F.apply(V, args);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toprimitive
	ToPrimitive: toPrimitive,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toboolean
	// ToBoolean: ES5.ToBoolean,

	// https://ecma-international.org/ecma-262/6.0/#sec-tonumber
	ToNumber: function ToNumber(argument) {
		var value = isPrimitive(argument) ? argument : toPrimitive(argument, $Number);
		if (typeof value === 'symbol') {
			throw new $TypeError('Cannot convert a Symbol value to a number');
		}
		if (typeof value === 'string') {
			if (isBinary(value)) {
				return this.ToNumber(parseInteger(strSlice(value, 2), 2));
			} else if (isOctal(value)) {
				return this.ToNumber(parseInteger(strSlice(value, 2), 8));
			} else if (hasNonWS(value) || isInvalidHexLiteral(value)) {
				return NaN;
			} else {
				var trimmed = trim(value);
				if (trimmed !== value) {
					return this.ToNumber(trimmed);
				}
			}
		}
		return $Number(value);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tointeger
	// ToInteger: ES5.ToNumber,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toint32
	// ToInt32: ES5.ToInt32,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-touint32
	// ToUint32: ES5.ToUint32,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toint16
	ToInt16: function ToInt16(argument) {
		var int16bit = this.ToUint16(argument);
		return int16bit >= 0x8000 ? int16bit - 0x10000 : int16bit;
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-touint16
	// ToUint16: ES5.ToUint16,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toint8
	ToInt8: function ToInt8(argument) {
		var int8bit = this.ToUint8(argument);
		return int8bit >= 0x80 ? int8bit - 0x100 : int8bit;
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-touint8
	ToUint8: function ToUint8(argument) {
		var number = this.ToNumber(argument);
		if ($isNaN(number) || number === 0 || !$isFinite(number)) { return 0; }
		var posInt = sign(number) * $floor($abs(number));
		return mod(posInt, 0x100);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-touint8clamp
	ToUint8Clamp: function ToUint8Clamp(argument) {
		var number = this.ToNumber(argument);
		if ($isNaN(number) || number <= 0) { return 0; }
		if (number >= 0xFF) { return 0xFF; }
		var f = $floor(argument);
		if (f + 0.5 < number) { return f + 1; }
		if (number < f + 0.5) { return f; }
		if (f % 2 !== 0) { return f + 1; }
		return f;
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tostring
	ToString: function ToString(argument) {
		if (typeof argument === 'symbol') {
			throw new $TypeError('Cannot convert a Symbol value to a string');
		}
		return $String(argument);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toobject
	ToObject: function ToObject(value) {
		this.RequireObjectCoercible(value);
		return $Object(value);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-topropertykey
	ToPropertyKey: function ToPropertyKey(argument) {
		var key = this.ToPrimitive(argument, $String);
		return typeof key === 'symbol' ? key : this.ToString(key);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
	ToLength: function ToLength(argument) {
		var len = this.ToInteger(argument);
		if (len <= 0) { return 0; } // includes converting -0 to +0
		if (len > MAX_SAFE_INTEGER) { return MAX_SAFE_INTEGER; }
		return len;
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-canonicalnumericindexstring
	CanonicalNumericIndexString: function CanonicalNumericIndexString(argument) {
		if (toStr(argument) !== '[object String]') {
			throw new $TypeError('must be a string');
		}
		if (argument === '-0') { return -0; }
		var n = this.ToNumber(argument);
		if (this.SameValue(this.ToString(n), argument)) { return n; }
		return void 0;
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-requireobjectcoercible
	RequireObjectCoercible: ES5.CheckObjectCoercible,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isarray
	IsArray: $Array.isArray || function IsArray(argument) {
		return toStr(argument) === '[object Array]';
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-iscallable
	// IsCallable: ES5.IsCallable,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isconstructor
	IsConstructor: function IsConstructor(argument) {
		return typeof argument === 'function' && !!argument.prototype; // unfortunately there's no way to truly check this without try/catch `new argument`
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isextensible-o
	IsExtensible: Object.preventExtensions
		? function IsExtensible(obj) {
			if (isPrimitive(obj)) {
				return false;
			}
			return $isExtensible(obj);
		}
		: function isExtensible(obj) { return true; }, // eslint-disable-line no-unused-vars

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isinteger
	IsInteger: function IsInteger(argument) {
		if (typeof argument !== 'number' || $isNaN(argument) || !$isFinite(argument)) {
			return false;
		}
		var abs = $abs(argument);
		return $floor(abs) === abs;
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ispropertykey
	IsPropertyKey: function IsPropertyKey(argument) {
		return typeof argument === 'string' || typeof argument === 'symbol';
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-isregexp
	IsRegExp: function IsRegExp(argument) {
		if (!argument || typeof argument !== 'object') {
			return false;
		}
		if (hasSymbols) {
			var isRegExp = argument[$Symbol.match];
			if (typeof isRegExp !== 'undefined') {
				return ES5.ToBoolean(isRegExp);
			}
		}
		return hasRegExpMatcher(argument);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevalue
	// SameValue: ES5.SameValue,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero
	SameValueZero: function SameValueZero(x, y) {
		return (x === y) || ($isNaN(x) && $isNaN(y));
	},

	/**
	 * 7.3.2 GetV (V, P)
	 * 1. Assert: IsPropertyKey(P) is true.
	 * 2. Let O be ToObject(V).
	 * 3. ReturnIfAbrupt(O).
	 * 4. Return O.[[Get]](P, V).
	 */
	GetV: function GetV(V, P) {
		// 7.3.2.1
		if (!this.IsPropertyKey(P)) {
			throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
		}

		// 7.3.2.2-3
		var O = this.ToObject(V);

		// 7.3.2.4
		return O[P];
	},

	/**
	 * 7.3.9 - https://ecma-international.org/ecma-262/6.0/#sec-getmethod
	 * 1. Assert: IsPropertyKey(P) is true.
	 * 2. Let func be GetV(O, P).
	 * 3. ReturnIfAbrupt(func).
	 * 4. If func is either undefined or null, return undefined.
	 * 5. If IsCallable(func) is false, throw a TypeError exception.
	 * 6. Return func.
	 */
	GetMethod: function GetMethod(O, P) {
		// 7.3.9.1
		if (!this.IsPropertyKey(P)) {
			throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
		}

		// 7.3.9.2
		var func = this.GetV(O, P);

		// 7.3.9.4
		if (func == null) {
			return void 0;
		}

		// 7.3.9.5
		if (!this.IsCallable(func)) {
			throw new $TypeError(P + 'is not a function');
		}

		// 7.3.9.6
		return func;
	},

	/**
	 * 7.3.1 Get (O, P) - https://ecma-international.org/ecma-262/6.0/#sec-get-o-p
	 * 1. Assert: Type(O) is Object.
	 * 2. Assert: IsPropertyKey(P) is true.
	 * 3. Return O.[[Get]](P, O).
	 */
	Get: function Get(O, P) {
		// 7.3.1.1
		if (this.Type(O) !== 'Object') {
			throw new $TypeError('Assertion failed: Type(O) is not Object');
		}
		// 7.3.1.2
		if (!this.IsPropertyKey(P)) {
			throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
		}
		// 7.3.1.3
		return O[P];
	},

	Type: function Type(x) {
		if (typeof x === 'symbol') {
			return 'Symbol';
		}
		return ES5.Type(x);
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-speciesconstructor
	SpeciesConstructor: function SpeciesConstructor(O, defaultConstructor) {
		if (this.Type(O) !== 'Object') {
			throw new $TypeError('Assertion failed: Type(O) is not Object');
		}
		var C = O.constructor;
		if (typeof C === 'undefined') {
			return defaultConstructor;
		}
		if (this.Type(C) !== 'Object') {
			throw new $TypeError('O.constructor is not an Object');
		}
		var S = hasSymbols && $Symbol.species ? C[$Symbol.species] : void 0;
		if (S == null) {
			return defaultConstructor;
		}
		if (this.IsConstructor(S)) {
			return S;
		}
		throw new $TypeError('no constructor found');
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-completepropertydescriptor
	CompletePropertyDescriptor: function CompletePropertyDescriptor(Desc) {
		if (!this.IsPropertyDescriptor(Desc)) {
			throw new $TypeError('Desc must be a Property Descriptor');
		}

		if (this.IsGenericDescriptor(Desc) || this.IsDataDescriptor(Desc)) {
			if (!has(Desc, '[[Value]]')) {
				Desc['[[Value]]'] = void 0;
			}
			if (!has(Desc, '[[Writable]]')) {
				Desc['[[Writable]]'] = false;
			}
		} else {
			if (!has(Desc, '[[Get]]')) {
				Desc['[[Get]]'] = void 0;
			}
			if (!has(Desc, '[[Set]]')) {
				Desc['[[Set]]'] = void 0;
			}
		}
		if (!has(Desc, '[[Enumerable]]')) {
			Desc['[[Enumerable]]'] = false;
		}
		if (!has(Desc, '[[Configurable]]')) {
			Desc['[[Configurable]]'] = false;
		}
		return Desc;
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-set-o-p-v-throw
	Set: function Set(O, P, V, Throw) {
		if (this.Type(O) !== 'Object') {
			throw new $TypeError('O must be an Object');
		}
		if (!this.IsPropertyKey(P)) {
			throw new $TypeError('P must be a Property Key');
		}
		if (this.Type(Throw) !== 'Boolean') {
			throw new $TypeError('Throw must be a Boolean');
		}
		if (Throw) {
			O[P] = V;
			return true;
		} else {
			try {
				O[P] = V;
			} catch (e) {
				return false;
			}
		}
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-hasownproperty
	HasOwnProperty: function HasOwnProperty(O, P) {
		if (this.Type(O) !== 'Object') {
			throw new $TypeError('O must be an Object');
		}
		if (!this.IsPropertyKey(P)) {
			throw new $TypeError('P must be a Property Key');
		}
		return has(O, P);
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-hasproperty
	HasProperty: function HasProperty(O, P) {
		if (this.Type(O) !== 'Object') {
			throw new $TypeError('O must be an Object');
		}
		if (!this.IsPropertyKey(P)) {
			throw new $TypeError('P must be a Property Key');
		}
		return P in O;
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-isconcatspreadable
	IsConcatSpreadable: function IsConcatSpreadable(O) {
		if (this.Type(O) !== 'Object') {
			return false;
		}
		if (hasSymbols && typeof $Symbol.isConcatSpreadable === 'symbol') {
			var spreadable = this.Get(O, Symbol.isConcatSpreadable);
			if (typeof spreadable !== 'undefined') {
				return this.ToBoolean(spreadable);
			}
		}
		return this.IsArray(O);
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-invoke
	Invoke: function Invoke(O, P) {
		if (!this.IsPropertyKey(P)) {
			throw new $TypeError('P must be a Property Key');
		}
		var argumentsList = arraySlice(arguments, 2);
		var func = this.GetV(O, P);
		return this.Call(func, O, argumentsList);
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-getiterator
	GetIterator: function GetIterator(obj, method) {
		if (!hasSymbols) {
			throw new SyntaxError('ES.GetIterator depends on native iterator support.');
		}

		var actualMethod = method;
		if (arguments.length < 2) {
			actualMethod = this.GetMethod(obj, $Symbol.iterator);
		}
		var iterator = this.Call(actualMethod, obj);
		if (this.Type(iterator) !== 'Object') {
			throw new $TypeError('iterator must return an object');
		}

		return iterator;
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-iteratornext
	IteratorNext: function IteratorNext(iterator, value) {
		var result = this.Invoke(iterator, 'next', arguments.length < 2 ? [] : [value]);
		if (this.Type(result) !== 'Object') {
			throw new $TypeError('iterator next must return an object');
		}
		return result;
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-iteratorcomplete
	IteratorComplete: function IteratorComplete(iterResult) {
		if (this.Type(iterResult) !== 'Object') {
			throw new $TypeError('Assertion failed: Type(iterResult) is not Object');
		}
		return this.ToBoolean(this.Get(iterResult, 'done'));
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-iteratorvalue
	IteratorValue: function IteratorValue(iterResult) {
		if (this.Type(iterResult) !== 'Object') {
			throw new $TypeError('Assertion failed: Type(iterResult) is not Object');
		}
		return this.Get(iterResult, 'value');
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-iteratorstep
	IteratorStep: function IteratorStep(iterator) {
		var result = this.IteratorNext(iterator);
		var done = this.IteratorComplete(result);
		return done === true ? false : result;
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-iteratorclose
	IteratorClose: function IteratorClose(iterator, completion) {
		if (this.Type(iterator) !== 'Object') {
			throw new $TypeError('Assertion failed: Type(iterator) is not Object');
		}
		if (!this.IsCallable(completion)) {
			throw new $TypeError('Assertion failed: completion is not a thunk for a Completion Record');
		}
		var completionThunk = completion;

		var iteratorReturn = this.GetMethod(iterator, 'return');

		if (typeof iteratorReturn === 'undefined') {
			return completionThunk();
		}

		var completionRecord;
		try {
			var innerResult = this.Call(iteratorReturn, iterator, []);
		} catch (e) {
			// if we hit here, then "e" is the innerResult completion that needs re-throwing

			// if the completion is of type "throw", this will throw.
			completionRecord = completionThunk();
			completionThunk = null; // ensure it's not called twice.

			// if not, then return the innerResult completion
			throw e;
		}
		completionRecord = completionThunk(); // if innerResult worked, then throw if the completion does
		completionThunk = null; // ensure it's not called twice.

		if (this.Type(innerResult) !== 'Object') {
			throw new $TypeError('iterator .return must return an object');
		}

		return completionRecord;
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-createiterresultobject
	CreateIterResultObject: function CreateIterResultObject(value, done) {
		if (this.Type(done) !== 'Boolean') {
			throw new $TypeError('Assertion failed: Type(done) is not Boolean');
		}
		return {
			value: value,
			done: done
		};
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-regexpexec
	RegExpExec: function RegExpExec(R, S) {
		if (this.Type(R) !== 'Object') {
			throw new $TypeError('R must be an Object');
		}
		if (this.Type(S) !== 'String') {
			throw new $TypeError('S must be a String');
		}
		var exec = this.Get(R, 'exec');
		if (this.IsCallable(exec)) {
			var result = this.Call(exec, R, [S]);
			if (result === null || this.Type(result) === 'Object') {
				return result;
			}
			throw new $TypeError('"exec" method must return `null` or an Object');
		}
		return regexExec(R, S);
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-arrayspeciescreate
	ArraySpeciesCreate: function ArraySpeciesCreate(originalArray, length) {
		if (!this.IsInteger(length) || length < 0) {
			throw new $TypeError('Assertion failed: length must be an integer >= 0');
		}
		var len = length === 0 ? 0 : length;
		var C;
		var isArray = this.IsArray(originalArray);
		if (isArray) {
			C = this.Get(originalArray, 'constructor');
			// TODO: figure out how to make a cross-realm normal Array, a same-realm Array
			// if (this.IsConstructor(C)) {
			// 	if C is another realm's Array, C = undefined
			// 	Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Array))) === null ?
			// }
			if (this.Type(C) === 'Object' && hasSymbols && $Symbol.species) {
				C = this.Get(C, $Symbol.species);
				if (C === null) {
					C = void 0;
				}
			}
		}
		if (typeof C === 'undefined') {
			return $Array(len);
		}
		if (!this.IsConstructor(C)) {
			throw new $TypeError('C must be a constructor');
		}
		return new C(len); // this.Construct(C, len);
	},

	CreateDataProperty: function CreateDataProperty(O, P, V) {
		if (this.Type(O) !== 'Object') {
			throw new $TypeError('Assertion failed: Type(O) is not Object');
		}
		if (!this.IsPropertyKey(P)) {
			throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
		}
		var oldDesc = $gOPD(O, P);
		var extensible = oldDesc || (typeof $isExtensible !== 'function' || $isExtensible(O));
		var immutable = oldDesc && (!oldDesc.writable || !oldDesc.configurable);
		if (immutable || !extensible) {
			return false;
		}
		var newDesc = {
			configurable: true,
			enumerable: true,
			value: V,
			writable: true
		};
		Object.defineProperty(O, P, newDesc);
		return true;
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-createdatapropertyorthrow
	CreateDataPropertyOrThrow: function CreateDataPropertyOrThrow(O, P, V) {
		if (this.Type(O) !== 'Object') {
			throw new $TypeError('Assertion failed: Type(O) is not Object');
		}
		if (!this.IsPropertyKey(P)) {
			throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
		}
		var success = this.CreateDataProperty(O, P, V);
		if (!success) {
			throw new $TypeError('unable to create data property');
		}
		return success;
	},

	// https://www.ecma-international.org/ecma-262/6.0/#sec-objectcreate
	ObjectCreate: function ObjectCreate(proto, internalSlotsList) {
		if (proto !== null && this.Type(proto) !== 'Object') {
			throw new $TypeError('Assertion failed: proto must be null or an object');
		}
		var slots = arguments.length < 2 ? [] : internalSlotsList;
		if (slots.length > 0) {
			throw new $SyntaxError('es-abstract does not yet support internal slots');
		}

		if (proto === null && !$ObjectCreate) {
			throw new $SyntaxError('native Object.create support is required to create null objects');
		}

		return $ObjectCreate(proto);
	},

	// https://ecma-international.org/ecma-262/6.0/#sec-advancestringindex
	AdvanceStringIndex: function AdvanceStringIndex(S, index, unicode) {
		if (this.Type(S) !== 'String') {
			throw new $TypeError('S must be a String');
		}
		if (!this.IsInteger(index) || index < 0 || index > MAX_SAFE_INTEGER) {
			throw new $TypeError('Assertion failed: length must be an integer >= 0 and <= 2**53');
		}
		if (this.Type(unicode) !== 'Boolean') {
			throw new $TypeError('Assertion failed: unicode must be a Boolean');
		}
		if (!unicode) {
			return index + 1;
		}
		var length = S.length;
		if ((index + 1) >= length) {
			return index + 1;
		}

		var first = $charCodeAt(S, index);
		if (first < 0xD800 || first > 0xDBFF) {
			return index + 1;
		}

		var second = $charCodeAt(S, index + 1);
		if (second < 0xDC00 || second > 0xDFFF) {
			return index + 1;
		}

		return index + 2;
	}
});

delete ES6.CheckObjectCoercible; // renamed in ES6 to RequireObjectCoercible

module.exports = ES6;
