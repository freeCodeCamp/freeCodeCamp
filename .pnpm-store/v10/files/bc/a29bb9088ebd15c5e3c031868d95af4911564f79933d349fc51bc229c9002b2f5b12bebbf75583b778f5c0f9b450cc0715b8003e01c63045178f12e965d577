var util = require('../src/util')
var slice = util.slice
var assign = util.assign

var updatePlugin = require('./update')

module.exports = [updatePlugin, operationsPlugin]

function operationsPlugin() {
	return {
		// array
		push: push,
		pop: pop,
		shift: shift,
		unshift: unshift,

		// obj
		assign: assign_,
	}

	// array
	function push(_, key, val1, val2, val3, etc) {
		return _arrayOp.call(this, 'push', arguments)
	}
	function pop(_, key) {
		return _arrayOp.call(this, 'pop', arguments)
	}
	function shift(_, key) {
		return _arrayOp.call(this, 'shift', arguments)
	}
	function unshift(_, key, val1, val2, val3, etc) {
		return _arrayOp.call(this, 'unshift', arguments)
	}

	// obj
	function assign_(_, key, props1, props2, props3, etc) {
		var varArgs = slice(arguments, 2)
		return this.update(key, {}, function(val) {
			if (typeof val != 'object') {
				throw new Error('store.assign called for non-object value with key "'+key+'"')
			}
			varArgs.unshift(val)
			return assign.apply(Object, varArgs)
		})
	}

	// internal
	///////////
	function _arrayOp(arrayFn, opArgs) {
		var res
		var key = opArgs[1]
		var rest = slice(opArgs, 2)
		this.update(key, [], function(arrVal) {
			res = Array.prototype[arrayFn].apply(arrVal, rest)
		})
		return res
	}
}
