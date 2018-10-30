// Copyright 2015 Joyent, Inc.

module.exports = {
	read: read,
	write: write
};

var assert = require('assert-plus');
var asn1 = require('asn1');
var crypto = require('crypto');
var Buffer = require('safer-buffer').Buffer;
var algs = require('../algs');
var utils = require('../utils');
var Key = require('../key');
var PrivateKey = require('../private-key');

var pkcs1 = require('./pkcs1');
var pkcs8 = require('./pkcs8');
var sshpriv = require('./ssh-private');
var rfc4253 = require('./rfc4253');

var errors = require('../errors');

/*
 * For reading we support both PKCS#1 and PKCS#8. If we find a private key,
 * we just take the public component of it and use that.
 */
function read(buf, options, forceType) {
	var input = buf;
	if (typeof (buf) !== 'string') {
		assert.buffer(buf, 'buf');
		buf = buf.toString('ascii');
	}

	var lines = buf.trim().split('\n');

	var m = lines[0].match(/*JSSTYLED*/
	    /[-]+[ ]*BEGIN ([A-Z0-9][A-Za-z0-9]+ )?(PUBLIC|PRIVATE) KEY[ ]*[-]+/);
	assert.ok(m, 'invalid PEM header');

	var m2 = lines[lines.length - 1].match(/*JSSTYLED*/
	    /[-]+[ ]*END ([A-Z0-9][A-Za-z0-9]+ )?(PUBLIC|PRIVATE) KEY[ ]*[-]+/);
	assert.ok(m2, 'invalid PEM footer');

	/* Begin and end banners must match key type */
	assert.equal(m[2], m2[2]);
	var type = m[2].toLowerCase();

	var alg;
	if (m[1]) {
		/* They also must match algorithms, if given */
		assert.equal(m[1], m2[1], 'PEM header and footer mismatch');
		alg = m[1].trim();
	}

	var headers = {};
	while (true) {
		lines = lines.slice(1);
		m = lines[0].match(/*JSSTYLED*/
		    /^([A-Za-z0-9-]+): (.+)$/);
		if (!m)
			break;
		headers[m[1].toLowerCase()] = m[2];
	}

	var cipher, key, iv;
	if (headers['proc-type']) {
		var parts = headers['proc-type'].split(',');
		if (parts[0] === '4' && parts[1] === 'ENCRYPTED') {
			if (typeof (options.passphrase) === 'string') {
				options.passphrase = Buffer.from(
				    options.passphrase, 'utf-8');
			}
			if (!Buffer.isBuffer(options.passphrase)) {
				throw (new errors.KeyEncryptedError(
				    options.filename, 'PEM'));
			} else {
				parts = headers['dek-info'].split(',');
				assert.ok(parts.length === 2);
				cipher = parts[0].toLowerCase();
				iv = Buffer.from(parts[1], 'hex');
				key = utils.opensslKeyDeriv(cipher, iv,
				    options.passphrase, 1).key;
			}
		}
	}

	/* Chop off the first and last lines */
	lines = lines.slice(0, -1).join('');
	buf = Buffer.from(lines, 'base64');

	if (cipher && key && iv) {
		var cipherStream = crypto.createDecipheriv(cipher, key, iv);
		var chunk, chunks = [];
		cipherStream.once('error', function (e) {
			if (e.toString().indexOf('bad decrypt') !== -1) {
				throw (new Error('Incorrect passphrase ' +
				    'supplied, could not decrypt key'));
			}
			throw (e);
		});
		cipherStream.write(buf);
		cipherStream.end();
		while ((chunk = cipherStream.read()) !== null)
			chunks.push(chunk);
		buf = Buffer.concat(chunks);
	}

	/* The new OpenSSH internal format abuses PEM headers */
	if (alg && alg.toLowerCase() === 'openssh')
		return (sshpriv.readSSHPrivate(type, buf, options));
	if (alg && alg.toLowerCase() === 'ssh2')
		return (rfc4253.readType(type, buf, options));

	var der = new asn1.BerReader(buf);
	der.originalInput = input;

	/*
	 * All of the PEM file types start with a sequence tag, so chop it
	 * off here
	 */
	der.readSequence();

	/* PKCS#1 type keys name an algorithm in the banner explicitly */
	if (alg) {
		if (forceType)
			assert.strictEqual(forceType, 'pkcs1');
		return (pkcs1.readPkcs1(alg, type, der));
	} else {
		if (forceType)
			assert.strictEqual(forceType, 'pkcs8');
		return (pkcs8.readPkcs8(alg, type, der));
	}
}

function write(key, options, type) {
	assert.object(key);

	var alg = {
	    'ecdsa': 'EC',
	    'rsa': 'RSA',
	    'dsa': 'DSA',
	    'ed25519': 'EdDSA'
	}[key.type];
	var header;

	var der = new asn1.BerWriter();

	if (PrivateKey.isPrivateKey(key)) {
		if (type && type === 'pkcs8') {
			header = 'PRIVATE KEY';
			pkcs8.writePkcs8(der, key);
		} else {
			if (type)
				assert.strictEqual(type, 'pkcs1');
			header = alg + ' PRIVATE KEY';
			pkcs1.writePkcs1(der, key);
		}

	} else if (Key.isKey(key)) {
		if (type && type === 'pkcs1') {
			header = alg + ' PUBLIC KEY';
			pkcs1.writePkcs1(der, key);
		} else {
			if (type)
				assert.strictEqual(type, 'pkcs8');
			header = 'PUBLIC KEY';
			pkcs8.writePkcs8(der, key);
		}

	} else {
		throw (new Error('key is not a Key or PrivateKey'));
	}

	var tmp = der.buffer.toString('base64');
	var len = tmp.length + (tmp.length / 64) +
	    18 + 16 + header.length*2 + 10;
	var buf = Buffer.alloc(len);
	var o = 0;
	o += buf.write('-----BEGIN ' + header + '-----\n', o);
	for (var i = 0; i < tmp.length; ) {
		var limit = i + 64;
		if (limit > tmp.length)
			limit = tmp.length;
		o += buf.write(tmp.slice(i, limit), o);
		buf[o++] = 10;
		i = limit;
	}
	o += buf.write('-----END ' + header + '-----\n', o);

	return (buf.slice(0, o));
}
