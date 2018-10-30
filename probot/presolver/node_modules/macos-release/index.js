'use strict';
var os = require('os');

var nameMap = {
	17: 'High Sierra',
	16: 'Sierra',
	15: 'El Capitan',
	14: 'Yosemite',
	13: 'Mavericks',
	12: 'Mountain Lion',
	11: 'Lion',
	10: 'Snow Leopard',
	9: 'Leopard',
	8: 'Tiger',
	7: 'Panther',
	6: 'Jaguar',
	5: 'Puma'
};

module.exports = function (release) {
	release = (release || os.release()).split('.')[0];
	return {
		name: nameMap[release],
		version: '10.' + (Number(release) - 4)
	};
};
