'use strict';

var asn1 = require('./asn1');
var aesid = require('./aesid.json');
var fixProc = require('./fixProc');
var ciphers = require('browserify-aes');
var pbkdf2Sync = require('pbkdf2').pbkdf2Sync;
var Buffer = require('safe-buffer').Buffer;

function decrypt(data, password) {
	var salt = data.algorithm.decrypt.kde.kdeparams.salt;
	var iters = parseInt(data.algorithm.decrypt.kde.kdeparams.iters.toString(), 10);
	var algo = aesid[data.algorithm.decrypt.cipher.algo.join('.')];
	var iv = data.algorithm.decrypt.cipher.iv;
	var cipherText = data.subjectPrivateKey;
	var keylen = parseInt(algo.split('-')[1], 10) / 8;
	var key = pbkdf2Sync(password, salt, iters, keylen, 'sha1');
	var cipher = ciphers.createDecipheriv(algo, key, iv);
	var out = [];
	out.push(cipher.update(cipherText));
	out.push(cipher['final']());
	return Buffer.concat(out);
}

function parseKeys(buffer) {
	var password;
	if (typeof buffer === 'object' && !Buffer.isBuffer(buffer)) {
		password = buffer.passphrase;
		buffer = buffer.key;
	}
	if (typeof buffer === 'string') {
		buffer = Buffer.from(buffer);
	}

	var stripped = fixProc(buffer, password);

	var type = stripped.tag;
	var data = stripped.data;
	var subtype, ndata;
	switch (type) {
		case 'CERTIFICATE':
			ndata = asn1.certificate.decode(data, 'der').tbsCertificate.subjectPublicKeyInfo;
			// falls through
		case 'PUBLIC KEY':
			if (!ndata) {
				ndata = asn1.PublicKey.decode(data, 'der');
			}
			subtype = ndata.algorithm.algorithm.join('.');
			switch (subtype) {
				case '1.2.840.113549.1.1.1':
					return asn1.RSAPublicKey.decode(ndata.subjectPublicKey.data, 'der');
				case '1.2.840.10045.2.1':
					ndata.subjectPrivateKey = ndata.subjectPublicKey;
					return {
						type: 'ec',
						data: ndata
					};
				case '1.2.840.10040.4.1':
					ndata.algorithm.params.pub_key = asn1.DSAparam.decode(ndata.subjectPublicKey.data, 'der');
					return {
						type: 'dsa',
						data: ndata.algorithm.params
					};
				default: throw new Error('unknown key id ' + subtype);
			}
			// throw new Error('unknown key type ' + type)
		case 'ENCRYPTED PRIVATE KEY':
			data = asn1.EncryptedPrivateKey.decode(data, 'der');
			data = decrypt(data, password);
			// falls through
		case 'PRIVATE KEY':
			ndata = asn1.PrivateKey.decode(data, 'der');
			subtype = ndata.algorithm.algorithm.join('.');
			switch (subtype) {
				case '1.2.840.113549.1.1.1':
					return asn1.RSAPrivateKey.decode(ndata.subjectPrivateKey, 'der');
				case '1.2.840.10045.2.1':
					return {
						curve: ndata.algorithm.curve,
						privateKey: asn1.ECPrivateKey.decode(ndata.subjectPrivateKey, 'der').privateKey
					};
				case '1.2.840.10040.4.1':
					ndata.algorithm.params.priv_key = asn1.DSAparam.decode(ndata.subjectPrivateKey, 'der');
					return {
						type: 'dsa',
						params: ndata.algorithm.params
					};
				default: throw new Error('unknown key id ' + subtype);
			}
			// throw new Error('unknown key type ' + type)
		case 'RSA PUBLIC KEY':
			return asn1.RSAPublicKey.decode(data, 'der');
		case 'RSA PRIVATE KEY':
			return asn1.RSAPrivateKey.decode(data, 'der');
		case 'DSA PRIVATE KEY':
			return {
				type: 'dsa',
				params: asn1.DSAPrivateKey.decode(data, 'der')
			};
		case 'EC PRIVATE KEY':
			data = asn1.ECPrivateKey.decode(data, 'der');
			return {
				curve: data.parameters.value,
				privateKey: data.privateKey
			};
		default: throw new Error('unknown key type ' + type);
	}
}
parseKeys.signature = asn1.signature;

module.exports = parseKeys;
