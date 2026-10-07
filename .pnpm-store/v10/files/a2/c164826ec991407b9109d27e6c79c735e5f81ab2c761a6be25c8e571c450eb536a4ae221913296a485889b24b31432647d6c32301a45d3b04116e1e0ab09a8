const LZString = require('./lib/lz-string')

module.exports = compressionPlugin

function compressionPlugin() {
	return {
		get: get,
		set: set,
	}

	function get(super_fn, key) {
		var val = super_fn(key)
		if (!val) { return val }
		var decompressed = LZString.decompress(val)
		// fallback to existing values that are not compressed
		return (decompressed == null) ? val : this._deserialize(decompressed)
	}

	function set(super_fn, key, val) {
		var compressed = LZString.compress(this._serialize(val))
		super_fn(key, compressed)
	}
}
