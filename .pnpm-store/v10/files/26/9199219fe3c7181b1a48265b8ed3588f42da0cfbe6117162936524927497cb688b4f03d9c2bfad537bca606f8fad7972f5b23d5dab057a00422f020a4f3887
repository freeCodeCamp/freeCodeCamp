// from https://github.com/indutny/self-signed/blob/gh-pages/lib/asn1.js
// Fedor, you are amazing.

'use strict';

var asn1 = require('asn1.js');

exports.certificate = require('./certificate');

var RSAPrivateKey = asn1.define('RSAPrivateKey', function () {
	this.seq().obj(
		this.key('version')['int'](),
		this.key('modulus')['int'](),
		this.key('publicExponent')['int'](),
		this.key('privateExponent')['int'](),
		this.key('prime1')['int'](),
		this.key('prime2')['int'](),
		this.key('exponent1')['int'](),
		this.key('exponent2')['int'](),
		this.key('coefficient')['int']()
	);
});
exports.RSAPrivateKey = RSAPrivateKey;

var RSAPublicKey = asn1.define('RSAPublicKey', function () {
	this.seq().obj(
		this.key('modulus')['int'](),
		this.key('publicExponent')['int']()
	);
});
exports.RSAPublicKey = RSAPublicKey;

var AlgorithmIdentifier = asn1.define('AlgorithmIdentifier', function () {
	this.seq().obj(
		this.key('algorithm').objid(),
		this.key('none').null_().optional(),
		this.key('curve').objid().optional(),
		this.key('params').seq().obj(
			this.key('p')['int'](),
			this.key('q')['int'](),
			this.key('g')['int']()
		).optional()
	);
});

var PublicKey = asn1.define('SubjectPublicKeyInfo', function () {
	this.seq().obj(
		this.key('algorithm').use(AlgorithmIdentifier),
		this.key('subjectPublicKey').bitstr()
	);
});
exports.PublicKey = PublicKey;

var PrivateKeyInfo = asn1.define('PrivateKeyInfo', function () {
	this.seq().obj(
		this.key('version')['int'](),
		this.key('algorithm').use(AlgorithmIdentifier),
		this.key('subjectPrivateKey').octstr()
	);
});
exports.PrivateKey = PrivateKeyInfo;
var EncryptedPrivateKeyInfo = asn1.define('EncryptedPrivateKeyInfo', function () {
	this.seq().obj(
		this.key('algorithm').seq().obj(
			this.key('id').objid(),
			this.key('decrypt').seq().obj(
				this.key('kde').seq().obj(
					this.key('id').objid(),
					this.key('kdeparams').seq().obj(
						this.key('salt').octstr(),
						this.key('iters')['int']()
					)
				),
				this.key('cipher').seq().obj(
					this.key('algo').objid(),
					this.key('iv').octstr()
				)
			)
		),
		this.key('subjectPrivateKey').octstr()
	);
});

exports.EncryptedPrivateKey = EncryptedPrivateKeyInfo;

var DSAPrivateKey = asn1.define('DSAPrivateKey', function () {
	this.seq().obj(
		this.key('version')['int'](),
		this.key('p')['int'](),
		this.key('q')['int'](),
		this.key('g')['int'](),
		this.key('pub_key')['int'](),
		this.key('priv_key')['int']()
	);
});
exports.DSAPrivateKey = DSAPrivateKey;

exports.DSAparam = asn1.define('DSAparam', function () {
	this['int']();
});

var ECParameters = asn1.define('ECParameters', function () {
	this.choice({
		namedCurve: this.objid()
	});
});

var ECPrivateKey = asn1.define('ECPrivateKey', function () {
	this.seq().obj(
		this.key('version')['int'](),
		this.key('privateKey').octstr(),
		this.key('parameters').optional().explicit(0).use(ECParameters),
		this.key('publicKey').optional().explicit(1).bitstr()
	);
});
exports.ECPrivateKey = ECPrivateKey;

exports.signature = asn1.define('signature', function () {
	this.seq().obj(
		this.key('r')['int'](),
		this.key('s')['int']()
	);
});
