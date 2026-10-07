'use strict';

var test = require('tape');
var bcCrypto = require('browserify-cipher/browser');
var bcCyphers = bcCrypto.getCiphers();
var randomBytes = require('pseudorandombytes');

for (var i = 0; i < 4; i += 1) {
	bcCrypto.listCiphers().forEach(function (cipher) {
		test('run: ' + i, function (t) {
			/* eslint no-loop-func: 0 */
			t.test('ciphers: ' + cipher, function (st) {
				st.plan(1);
				var data = randomBytes(562);
				var password = randomBytes(20);
				var crypter = bcCrypto.createCipher(cipher, password);
				var decrypter = bcCrypto.createDecipher(cipher, password);
				var out = [];
				out.push(decrypter.update(crypter.update(data)));
				out.push(decrypter.update(crypter['final']()));
				if (cipher.indexOf('gcm') > -1) {
					decrypter.setAuthTag(crypter.getAuthTag());
				}
				out.push(decrypter['final']());

				st.equals(data.toString('hex'), Buffer.concat(out).toString('hex'));
			});
		});
	});
}

test('getCiphers', function (t) {
	t.plan(1);
	t.ok(bcCyphers.length, 'get ciphers returns an array');
});

// eslint-disable-next-line global-require
test('through crypto browserify works', { skip: !require('crypto').createCipher && 'node 22+ removes createCipher' }, function (t) {
	t.plan(2);
	var crypto = require('../'); // eslint-disable-line global-require
	var cipher = 'aes-128-ctr';
	var data = randomBytes(562);
	var password = randomBytes(20);
	var crypter = crypto.createCipher(cipher, password);
	var decrypter = crypto.createDecipher(cipher, password);
	var out = [];
	out.push(decrypter.update(crypter.update(data)));
	out.push(decrypter.update(crypter['final']()));
	out.push(decrypter['final']());

	t.equals(data.toString('hex'), Buffer.concat(out).toString('hex'));

	t.ok(crypto.getCiphers().length, 'get ciphers returns an array');
});
