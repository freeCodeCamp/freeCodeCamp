var dumpPlugin = require('./dump')
var json2Plugin = require('./json2')

module.exports = [dumpPlugin, json2Plugin, v1BackcompatPlugin]

function v1BackcompatPlugin() {
	this.disabled = !this.enabled
	return {
		has: backcompat_has,
		transact: backcompat_transact,
		clear: backcompat_clear,
		forEach: backcompat_forEach,
		getAll: backcompat_getAll,
		serialize: backcompat_serialize,
		deserialize: backcompat_deserialize,
	}
}

function backcompat_has(_, key) {
	return this.get(key) !== undefined
}
function backcompat_transact(_, key, defaultVal, transactionFn) {
	if (transactionFn == null) {
		transactionFn = defaultVal
		defaultVal = null
	}
	if (defaultVal == null) {
		defaultVal = {}
	}
	var val = this.get(key, defaultVal)
	var ret = transactionFn(val)
	this.set(key, ret === undefined ? val : ret)
}
function backcompat_clear(_) {
	return this.clearAll.call(this)
}
function backcompat_forEach(_, fn) {
	return this.each.call(this, function(val, key) {
		fn(key, val)
	})
}
function backcompat_getAll(_) {
	return this.dump.call(this)
}
function backcompat_serialize(_, value) {
	return JSON.stringify(value)
}
function backcompat_deserialize(_, value) {
	if (typeof value != 'string') { return undefined }
	try { return JSON.parse(value) }
	catch(e) { return value || undefined }
}
