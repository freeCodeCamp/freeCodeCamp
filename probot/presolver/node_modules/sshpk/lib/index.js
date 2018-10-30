// Copyright 2015 Joyent, Inc.

var Key = require('./key');
var Fingerprint = require('./fingerprint');
var Signature = require('./signature');
var PrivateKey = require('./private-key');
var Certificate = require('./certificate');
var Identity = require('./identity');
var errs = require('./errors');

module.exports = {
	/* top-level classes */
	Key: Key,
	parseKey: Key.parse,
	Fingerprint: Fingerprint,
	parseFingerprint: Fingerprint.parse,
	Signature: Signature,
	parseSignature: Signature.parse,
	PrivateKey: PrivateKey,
	parsePrivateKey: PrivateKey.parse,
	generatePrivateKey: PrivateKey.generate,
	Certificate: Certificate,
	parseCertificate: Certificate.parse,
	createSelfSignedCertificate: Certificate.createSelfSigned,
	createCertificate: Certificate.create,
	Identity: Identity,
	identityFromDN: Identity.parseDN,
	identityForHost: Identity.forHost,
	identityForUser: Identity.forUser,
	identityForEmail: Identity.forEmail,
	identityFromArray: Identity.fromArray,

	/* errors */
	FingerprintFormatError: errs.FingerprintFormatError,
	InvalidAlgorithmError: errs.InvalidAlgorithmError,
	KeyParseError: errs.KeyParseError,
	SignatureParseError: errs.SignatureParseError,
	KeyEncryptedError: errs.KeyEncryptedError,
	CertificateParseError: errs.CertificateParseError
};
