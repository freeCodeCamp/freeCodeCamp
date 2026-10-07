'use strict';

var reflectSetProto = require('./Reflect.setPrototypeOf');
var originalSetProto = require('./Object.setPrototypeOf');

var setDunderProto = require('dunder-proto/set');

var $TypeError = require('es-errors/type');

/** @type {import('.')} */
module.exports = reflectSetProto
	? function setProto(O, proto) {
		// @ts-expect-error TS can't narrow inside a closure, for some reason
		if (reflectSetProto(O, proto)) {
			return O;
		}
		throw new $TypeError('Reflect.setPrototypeOf: failed to set [[Prototype]]');
	}
	: originalSetProto || (
		setDunderProto ? function setProto(O, proto) {
			// @ts-expect-error TS can't narrow inside a closure, for some reason
			setDunderProto(O, proto);
			return O;
		} : null
	);
