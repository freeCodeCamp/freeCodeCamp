'use strict';

var aFrom          = require('es5-ext/array/from')
  , remove         = require('es5-ext/array/#/remove')
  , value          = require('es5-ext/object/valid-object')
  , d              = require('d')
  , emit           = require('./').methods.emit

  , defineProperty = Object.defineProperty
  , hasOwnProperty = Object.prototype.hasOwnProperty
  , getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

module.exports = function (e1, e2/*, name*/) {
	var pipes, pipe, desc, name;

	(value(e1) && value(e2));
	name = arguments[2];
	if (name === undefined) name = 'emit';

	pipe = {
		close: function () { remove.call(pipes, e2); }
	};
	if (hasOwnProperty.call(e1, '__eePipes__')) {
		(pipes = e1.__eePipes__).push(e2);
		return pipe;
	}
	defineProperty(e1, '__eePipes__', d('c', pipes = [e2]));
	desc = getOwnPropertyDescriptor(e1, name);
	if (!desc) {
		desc = d('c', undefined);
	} else {
		delete desc.get;
		delete desc.set;
	}
	desc.value = function () {
		var i, emitter, data = aFrom(pipes);
		emit.apply(this, arguments);
		for (i = 0; (emitter = data[i]); ++i) emit.apply(emitter, arguments);
	};
	defineProperty(e1, name, desc);
	return pipe;
};
