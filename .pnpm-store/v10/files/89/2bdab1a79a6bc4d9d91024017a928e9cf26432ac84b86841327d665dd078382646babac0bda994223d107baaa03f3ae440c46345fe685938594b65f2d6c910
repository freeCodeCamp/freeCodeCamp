// from https://github.com/Rantanen/node-dtls/blob/25a7dc861bda38cfeac93a723500eea4f0ac2e86/Certificate.js
// thanks to @Rantanen

'use strict';

var asn = require('asn1.js');

var Time = asn.define('Time', function () {
	this.choice({
		utcTime: this.utctime(),
		generalTime: this.gentime()
	});
});

var AttributeTypeValue = asn.define('AttributeTypeValue', function () {
	this.seq().obj(
		this.key('type').objid(),
		this.key('value').any()
	);
});

var AlgorithmIdentifier = asn.define('AlgorithmIdentifier', function () {
	this.seq().obj(
		this.key('algorithm').objid(),
		this.key('parameters').optional(),
		this.key('curve').objid().optional()
	);
});

var SubjectPublicKeyInfo = asn.define('SubjectPublicKeyInfo', function () {
	this.seq().obj(
		this.key('algorithm').use(AlgorithmIdentifier),
		this.key('subjectPublicKey').bitstr()
	);
});

var RelativeDistinguishedName = asn.define('RelativeDistinguishedName', function () {
	this.setof(AttributeTypeValue);
});

var RDNSequence = asn.define('RDNSequence', function () {
	this.seqof(RelativeDistinguishedName);
});

var Name = asn.define('Name', function () {
	this.choice({
		rdnSequence: this.use(RDNSequence)
	});
});

var Validity = asn.define('Validity', function () {
	this.seq().obj(
		this.key('notBefore').use(Time),
		this.key('notAfter').use(Time)
	);
});

var Extension = asn.define('Extension', function () {
	this.seq().obj(
		this.key('extnID').objid(),
		this.key('critical').bool().def(false),
		this.key('extnValue').octstr()
	);
});

var TBSCertificate = asn.define('TBSCertificate', function () {
	this.seq().obj(
		this.key('version').explicit(0)['int']().optional(),
		this.key('serialNumber')['int'](),
		this.key('signature').use(AlgorithmIdentifier),
		this.key('issuer').use(Name),
		this.key('validity').use(Validity),
		this.key('subject').use(Name),
		this.key('subjectPublicKeyInfo').use(SubjectPublicKeyInfo),
		this.key('issuerUniqueID').implicit(1).bitstr().optional(),
		this.key('subjectUniqueID').implicit(2).bitstr().optional(),
		this.key('extensions').explicit(3).seqof(Extension).optional()
	);
});

var X509Certificate = asn.define('X509Certificate', function () {
	this.seq().obj(
		this.key('tbsCertificate').use(TBSCertificate),
		this.key('signatureAlgorithm').use(AlgorithmIdentifier),
		this.key('signatureValue').bitstr()
	);
});

module.exports = X509Certificate;
