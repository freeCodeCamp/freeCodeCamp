'use strict';

require('../auto');

var test = require('tape');
var forEach = require('for-each');

var shims = require('../');

forEach(shims, function (shim) {
	var shimTests;
	try {
		shimTests = require('./' + shim); // eslint-disable-line global-require
	} catch (e) {
		test(shim + ': shimmed', { todo: true });
	}
	if (shimTests) {
		shimTests.shimmed();
	}
});

test('integration', function (t) {
	var seenMapEveryMap = [];
	var seenMapEveryEvery = [];
	var mapEveryResult = Iterator.from([1, 2, 3, 4, 5]).map(function (x) {
		seenMapEveryMap.push(x);
		return x * x;
	}).every(function (x) {
		seenMapEveryEvery.push(x);
		return x < 10;
	});
	t.equal(mapEveryResult, false, 'map + every: every predicate returned false nonzero times');
	t.deepEqual(seenMapEveryMap, [1, 2, 3, 4], 'map + every, map: all values are seen until after the first one that is > 10 when squared');
	t.deepEqual(seenMapEveryEvery, [1, 4, 9, 16], 'map + every, every: all values are seen until after the first one that is > 10 when squared');

	var seenMapSomeMap = [];
	var seenMapSomeSome = [];
	var mapSomeResult = Iterator.from([1, 2, 3, 4, 5]).map(function (x) {
		seenMapSomeMap.push(x);
		return x * x;
	}).some(function (x) {
		seenMapSomeSome.push(x);
		return x > 10;
	});
	t.equal(mapSomeResult, true, 'map + some: some predicate returned true nonzero times');
	t.deepEqual(seenMapSomeMap, [1, 2, 3, 4], 'map + some, map: all values are seen until after the first one that is > 10 when squared');
	t.deepEqual(seenMapSomeSome, [1, 4, 9, 16], 'map + some, some: all values are seen until after the first one that is > 10 when squared');

	var seenMapFind = [];
	var mapFindResult = Iterator.from([1, 2, 3, 4, 5]).map(function (x) {
		seenMapFind.push(x);
		return x * x;
	}).find(function (x) {
		return x > 10;
	});
	t.equal(mapFindResult, 16, 'map + find: find found the first mapped value over 10');
	t.deepEqual(seenMapFind, [1, 2, 3, 4], 'map + find: all values are seen until after the first one that is > 10 when squared');

	var seenFilterEvery = [];
	var filterEveryResult = Iterator.from([1, 2, 3, 4, 5]).filter(function (x) {
		seenFilterEvery.push(x);
		return x;
	}).every(function (x) {
		return x <= 3;
	});
	t.equal(filterEveryResult, false, 'filter + every: every predicate returned false nonzero times');
	t.deepEqual(seenMapFind, [1, 2, 3, 4], 'filter + every: all values are seen until after the first one that is > 10 when squared');

	t.end();
});
