'use strict';
module.exports = cb => new Promise(resolve => {
	resolve(cb());
});
