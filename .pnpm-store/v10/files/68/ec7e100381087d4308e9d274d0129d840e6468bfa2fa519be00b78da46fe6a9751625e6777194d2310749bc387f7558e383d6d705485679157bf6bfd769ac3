'use strict';

var test = require('tape');
var cryptoB = require('../../');
var crypto = require('crypto');
var satisfies = require('semver').satisfies;

test('diffie-hellman mod groups', function (t) {
	[
		'modp1',
		'modp2',
		'modp5',
		'modp14',
		'modp15',
		'modp16'
	].forEach(function (mod) {
		t.test(mod, function (st) {
			st.plan(3);
			var dh1 = cryptoB.getDiffieHellman(mod);
			var p1 = dh1.getPrime().toString('hex');
			dh1.generateKeys();

			var dh2 = crypto.getDiffieHellman(mod);
			var p2 = dh2.getPrime().toString('hex');
			dh2.generateKeys();
			st.equals(p1, p2, 'equal primes');

			var pubk1 = dh1.getPublicKey();
			var pubk2 = dh2.getPublicKey();
			st.notEquals(pubk1, pubk2, 'diff public keys');

			var pub1 = dh1.computeSecret(pubk2).toString('hex');
			var pub2 = dh2.computeSecret(pubk1).toString('hex');
			st.equals(pub1, pub2, 'equal secrets');
		});
	});
});

test('diffie-hellman key lengths', function (t) {
	[
		64,
		65,
		192,
		512,
		1024
	].forEach(function (len) {
		var modulusTooSmall = satisfies(process.version, '>= 17') && len < 512;
		t.test(String(len), { skip: modulusTooSmall && 'node 17+ requires a length >= 512' }, function (st) {
			var dh2 = cryptoB.createDiffieHellman(len);
			var prime2 = dh2.getPrime();
			var p2 = prime2.toString('hex');
			var dh1 = crypto.createDiffieHellman(prime2);
			var p1 = dh1.getPrime().toString('hex');
			dh1.generateKeys();
			dh2.generateKeys();
			st.equals(p1, p2, 'equal primes');

			var pubk1 = dh1.getPublicKey();
			var pubk2 = dh2.getPublicKey();
			st.notEquals(pubk1, pubk2, 'diff public keys');

			var pub1 = dh1.computeSecret(pubk2).toString('hex');
			var pub2 = dh2.computeSecret(dh1.getPublicKey()).toString('hex');
			st.equals(pub1, pub2, 'equal secrets');

			st.end();
		});
	});
});
