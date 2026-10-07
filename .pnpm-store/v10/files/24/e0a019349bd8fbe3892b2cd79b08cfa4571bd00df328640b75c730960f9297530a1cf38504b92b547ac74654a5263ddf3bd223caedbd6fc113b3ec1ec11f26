module.exports = {
	deepEqual: deepEqual
}

function deepEqual(a,b) {
	if (typeof a != typeof b) {
		return false
	}
	if (typeof a != 'object') {
		return a === b
	}
	var key
	for (key in a) {
		if (!deepEqual(a[key], b[key])) {
			return false
		}
	}
	for (key in b) {
		if (!deepEqual(b[key], a[key])) {
			return false
		}
	}
	return true
}
