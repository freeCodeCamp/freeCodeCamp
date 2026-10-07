module.exports = dumpPlugin

function dumpPlugin() {
	return {
		dump: dump
	}
	
	function dump(_) {
		var res = {}
		this.each(function(val, key) {
			res[key] = val
		})
		return res
	}
}
