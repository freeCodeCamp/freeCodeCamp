var util = require('../src/util')
var bind = util.bind
var each = util.each
var create = util.create
var slice = util.slice

module.exports = eventsPlugin

function eventsPlugin() {
	var pubsub = _newPubSub()

	return {
		watch: watch,
		unwatch: unwatch,
		once: once,

		set: set,
		remove: remove,
		clearAll: clearAll
	}

	// new pubsub functions
	function watch(_, key, listener) {
		return pubsub.on(key, bind(this, listener))
	}
	function unwatch(_, subId) {
		pubsub.off(subId)
	}
	function once(_, key, listener) {
		pubsub.once(key, bind(this, listener))
	}

	// overwrite function to fire when appropriate
	function set(super_fn, key, val) {
		var oldVal = this.get(key)
		super_fn()
		pubsub.fire(key, val, oldVal)
	}
	function remove(super_fn, key) {
		var oldVal = this.get(key)
		super_fn()
		pubsub.fire(key, undefined, oldVal)
	}
	function clearAll(super_fn) {
		var oldVals = {}
		this.each(function(val, key) {
			oldVals[key] = val
		})
		super_fn()
		each(oldVals, function(oldVal, key) {
			pubsub.fire(key, undefined, oldVal)
		})
	}
}


function _newPubSub() {
	return create(_pubSubBase, {
		_id: 0,
		_subSignals: {},
		_subCallbacks: {}
	})
}

var _pubSubBase = {
	_id: null,
	_subCallbacks: null,
	_subSignals: null,
	on: function(signal, callback) {
		if (!this._subCallbacks[signal]) {
			this._subCallbacks[signal] = {}
		}
		this._id += 1
		this._subCallbacks[signal][this._id] = callback
		this._subSignals[this._id] = signal
		return this._id
	},
	off: function(subId) {
		var signal = this._subSignals[subId]
		delete this._subCallbacks[signal][subId]
		delete this._subSignals[subId]
	},
	once: function(signal, callback) {
		var subId = this.on(signal, bind(this, function() {
			callback.apply(this, arguments)
			this.off(subId)
		}))
	},
	fire: function(signal) {
		var args = slice(arguments, 1)
		each(this._subCallbacks[signal], function(callback) {
			callback.apply(this, args)
		})
	}
}
