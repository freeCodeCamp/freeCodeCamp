'use strict';

module.exports = function () {
	var value, iterator = this.values(), item;
	while (true) {
		item = iterator.next();
		if (item.done) break;
		value = item.value;
	}
	return value;
};
