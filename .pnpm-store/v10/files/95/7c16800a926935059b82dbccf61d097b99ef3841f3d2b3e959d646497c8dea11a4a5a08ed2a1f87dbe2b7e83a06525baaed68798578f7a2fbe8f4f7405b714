'use strict';

var GetIntrinsic = require('get-intrinsic');

var constructors = {
	__proto__: null,
	$Int8Array: GetIntrinsic('%Int8Array%', true),
	$Uint8Array: GetIntrinsic('%Uint8Array%', true),
	$Uint8ClampedArray: GetIntrinsic('%Uint8ClampedArray%', true),
	$Int16Array: GetIntrinsic('%Int16Array%', true),
	$Uint16Array: GetIntrinsic('%Uint16Array%', true),
	$Int32Array: GetIntrinsic('%Int32Array%', true),
	$Uint32Array: GetIntrinsic('%Uint32Array%', true),
	$BigInt64Array: GetIntrinsic('%BigInt64Array%', true),
	$BigUint64Array: GetIntrinsic('%BigUint64Array%', true),
	$Float16Array: GetIntrinsic('%Float16Array%', true),
	$Float32Array: GetIntrinsic('%Float32Array%', true),
	$Float64Array: GetIntrinsic('%Float64Array%', true)
};

module.exports = function getConstructor(kind) {
	return constructors['$' + kind];
};
