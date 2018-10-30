var bind = require('function-bind');
var has = bind.call(Function.call, Object.prototype.hasOwnProperty);

var $assign = Object.assign;

module.exports = function assign(target, source) {
	if ($assign) {
		return $assign(target, source);
	}

	for (var key in source) {
		if (has(source, key)) {
			target[key] = source[key];
		}
	}
	return target;
};
