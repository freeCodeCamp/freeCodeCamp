'use strict';
const autoBind = require('.');

const excludedReactMethods = [
	'componentWillMount',
	'UNSAFE_componentWillMount',
	'render',
	'getSnapshotBeforeUpdate',
	'componentDidMount',
	'componentWillReceiveProps',
	'UNSAFE_componentWillReceiveProps',
	'shouldComponentUpdate',
	'componentWillUpdate',
	'UNSAFE_componentWillUpdate',
	'componentDidUpdate',
	'componentWillUnmount',
	'componentDidCatch',
	'setState',
	'forceUpdate'
];

module.exports = (self, {exclude = [], ...options} = {}) => {
	options.exclude = [
		...exclude,
		...excludedReactMethods
	];

	return autoBind(self, options);
};
