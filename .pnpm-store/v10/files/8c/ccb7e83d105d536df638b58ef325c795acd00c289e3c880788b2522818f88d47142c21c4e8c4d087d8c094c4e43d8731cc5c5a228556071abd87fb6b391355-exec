'use strict';

const canonicalProperties = require('unicode-canonical-property-names-ecmascript');
const propertyAliases = require('unicode-property-aliases-ecmascript');

const matchProperty = function(property) {
	if (canonicalProperties.has(property)) {
		return property;
	}
	if (propertyAliases.has(property)) {
		return propertyAliases.get(property);
	}
	throw new Error(`Unknown property: ${ property }`);
};

module.exports = matchProperty;
