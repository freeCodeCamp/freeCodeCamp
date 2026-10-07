'use strict';

const propertyToValueAliases = require('./data/mappings.js');

const matchPropertyValue = function(property, value) {
	const aliasToValue = propertyToValueAliases.get(property);
	if (!aliasToValue) {
		throw new Error(`Unknown property \`${ property }\`.`);
	}
	const canonicalValue = aliasToValue.get(value);
	if (canonicalValue) {
		return canonicalValue;
	}
	throw new Error(
		`Unknown value \`${ value }\` for property \`${ property }\`.`
	);
};

module.exports = matchPropertyValue;
