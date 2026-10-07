var eventsPlugin = require('./events')

module.exports = [eventsPlugin, observePlugin]

function observePlugin() {
	return {
		observe: observe,
		unobserve: unobserve
	}

	function observe(_, key, callback) {
		var subId = this.watch(key, callback)
		callback(this.get(key))
		return subId
	}
	function unobserve(_, subId) {
		this.unwatch(subId)
	}
}
