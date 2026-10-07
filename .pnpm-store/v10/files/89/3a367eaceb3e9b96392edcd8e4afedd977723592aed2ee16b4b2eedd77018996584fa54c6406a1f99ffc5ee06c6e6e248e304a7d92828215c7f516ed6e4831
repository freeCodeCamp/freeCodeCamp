'use strict';

var test = require('tape');
var satisfies = require('semver').satisfies;

var algorithms = ['sha1', 'sha224', 'sha256', 'sha384', 'sha512', 'md5', 'rmd160'];
var encodings = ['hex', 'base64']; // FIXME: test binary
var vectors = require('hash-test-vectors');

function runTest(name, createHash, algorithm) {
	var isUnsupported = satisfies(process.version, '^17') && (
		algorithm === 'rmd160'
		|| algorithm === 'hmac(rmd160)'
	);
	test(
		name + ' test ' + algorithm + ' against test vectors',
		{ skip: isUnsupported && 'this node version does not support ' + algorithm },
		function (t) {
			vectors.forEach(function (obj, i) {
				var input = new Buffer(obj.input, 'base64');
				var node = obj[algorithm];
				var js = createHash(algorithm).update(input).digest('hex');
				t.equal(js, node, algorithm + '(testVector[' + i + ']) == ' + node);

				encodings.forEach(function (encoding) {
					var eInput = new Buffer(obj.input, 'base64').toString(encoding);
					var eNode = obj[algorithm];
					var eJS = createHash(algorithm).update(eInput, encoding).digest('hex');
					t.equal(eJS, eNode, algorithm + '(testVector[' + i + '], ' + encoding + ') == ' + eNode);
				});
				input = new Buffer(obj.input, 'base64');
				node = obj[algorithm];
				var hash = createHash(algorithm);
				hash.end(input);
				js = hash.read().toString('hex');
				t.equal(js, node, algorithm + '(testVector[' + i + ']) == ' + node);
			});

			t.end();
		}
	);
}

function testLib(name, createHash) {
	algorithms.forEach(function (algorithm) {
		runTest(name, createHash, algorithm);
	});
}

testLib('createHash in crypto-browserify', require('../').createHash);
testLib('create-hash/browser', require('create-hash/browser'));
