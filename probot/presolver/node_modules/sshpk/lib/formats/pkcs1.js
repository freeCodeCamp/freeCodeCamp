// Copyright 2015 Joyent, Inc.

module.exports = {
	read: read,
	readPkcs1: readPkcs1,
	write: write,
	writePkcs1: writePkcs1
};

var assert = require('assert-plus');
var asn1 = require('asn1');
var Buffer = require('safer-buffer').Buffer;
var algs = require('../algs');
var utils = require('../utils');

var Key = require('../key');
var PrivateKey = require('../private-key');
var pem = require('./pem');

var pkcs8 = require('./pkcs8');
var readECDSACurve = pkcs8.readECDSACurve;

function read(buf, options) {
	return (pem.read(buf, options, 'pkcs1'));
}

function write(key, options) {
	return (pem.write(key, options, 'pkcs1'));
}

/* Helper to read in a single mpint */
function readMPInt(der, nm) {
	assert.strictEqual(der.peek(), asn1.Ber.Integer,
	    nm + ' is not an Integer');
	return (utils.mpNormalize(der.readString(asn1.Ber.Integer, true)));
}

function readPkcs1(alg, type, der) {
	switch (alg) {
	case 'RSA':
		if (type === 'public')
			return (readPkcs1RSAPublic(der));
		else if (type === 'private')
			return (readPkcs1RSAPrivate(der));
		throw (new Error('Unknown key type: ' + type));
	case 'DSA':
		if (type === 'public')
			return (readPkcs1DSAPublic(der));
		else if (type === 'private')
			return (readPkcs1DSAPrivate(der));
		throw (new Error('Unknown key type: ' + type));
	case 'EC':
	case 'ECDSA':
		if (type === 'private')
			return (readPkcs1ECDSAPrivate(der));
		else if (type === 'public')
			return (readPkcs1ECDSAPublic(der));
		throw (new Error('Unknown key type: ' + type));
	case 'EDDSA':
	case 'EdDSA':
		if (type === 'private')
			return (readPkcs1EdDSAPrivate(der));
		throw (new Error(type + ' keys not supported with EdDSA'));
	default:
		throw (new Error('Unknown key algo: ' + alg));
	}
}

function readPkcs1RSAPublic(der) {
	// modulus and exponent
	var n = readMPInt(der, 'modulus');
	var e = readMPInt(der, 'exponent');

	// now, make the key
	var key = {
		type: 'rsa',
		parts: [
			{ name: 'e', data: e },
			{ name: 'n', data: n }
		]
	};

	return (new Key(key));
}

function readPkcs1RSAPrivate(der) {
	var version = readMPInt(der, 'version');
	assert.strictEqual(version[0], 0);

	// modulus then public exponent
	var n = readMPInt(der, 'modulus');
	var e = readMPInt(der, 'public exponent');
	var d = readMPInt(der, 'private exponent');
	var p = readMPInt(der, 'prime1');
	var q = readMPInt(der, 'prime2');
	var dmodp = readMPInt(der, 'exponent1');
	var dmodq = readMPInt(der, 'exponent2');
	var iqmp = readMPInt(der, 'iqmp');

	// now, make the key
	var key = {
		type: 'rsa',
		parts: [
			{ name: 'n', data: n },
			{ name: 'e', data: e },
			{ name: 'd', data: d },
			{ name: 'iqmp', data: iqmp },
			{ name: 'p', data: p },
			{ name: 'q', data: q },
			{ name: 'dmodp', data: dmodp },
			{ name: 'dmodq', data: dmodq }
		]
	};

	return (new PrivateKey(key));
}

function readPkcs1DSAPrivate(der) {
	var version = readMPInt(der, 'version');
	assert.strictEqual(version.readUInt8(0), 0);

	var p = readMPInt(der, 'p');
	var q = readMPInt(der, 'q');
	var g = readMPInt(der, 'g');
	var y = readMPInt(der, 'y');
	var x = readMPInt(der, 'x');

	// now, make the key
	var key = {
		type: 'dsa',
		parts: [
			{ name: 'p', data: p },
			{ name: 'q', data: q },
			{ name: 'g', data: g },
			{ name: 'y', data: y },
			{ name: 'x', data: x }
		]
	};

	return (new PrivateKey(key));
}

function readPkcs1EdDSAPrivate(der) {
	var version = readMPInt(der, 'version');
	assert.strictEqual(version.readUInt8(0), 1);

	// private key
	var k = der.readString(asn1.Ber.OctetString, true);

	der.readSequence(0xa0);
	var oid = der.readOID();
	assert.strictEqual(oid, '1.3.101.112', 'the ed25519 curve identifier');

	der.readSequence(0xa1);
	var A = utils.readBitString(der);

	var key = {
		type: 'ed25519',
		parts: [
			{ name: 'A', data: utils.zeroPadToLength(A, 32) },
			{ name: 'k', data: k }
		]
	};

	return (new PrivateKey(key));
}

function readPkcs1DSAPublic(der) {
	var y = readMPInt(der, 'y');
	var p = readMPInt(der, 'p');
	var q = readMPInt(der, 'q');
	var g = readMPInt(der, 'g');

	var key = {
		type: 'dsa',
		parts: [
			{ name: 'y', data: y },
			{ name: 'p', data: p },
			{ name: 'q', data: q },
			{ name: 'g', data: g }
		]
	};

	return (new Key(key));
}

function readPkcs1ECDSAPublic(der) {
	der.readSequence();

	var oid = der.readOID();
	assert.strictEqual(oid, '1.2.840.10045.2.1', 'must be ecPublicKey');

	var curveOid = der.readOID();

	var curve;
	var curves = Object.keys(algs.curves);
	for (var j = 0; j < curves.length; ++j) {
		var c = curves[j];
		var cd = algs.curves[c];
		if (cd.pkcs8oid === curveOid) {
			curve = c;
			break;
		}
	}
	assert.string(curve, 'a known ECDSA named curve');

	var Q = der.readString(asn1.Ber.BitString, true);
	Q = utils.ecNormalize(Q);

	var key = {
		type: 'ecdsa',
		parts: [
			{ name: 'curve', data: Buffer.from(curve) },
			{ name: 'Q', data: Q }
		]
	};

	return (new Key(key));
}

function readPkcs1ECDSAPrivate(der) {
	var version = readMPInt(der, 'version');
	assert.strictEqual(version.readUInt8(0), 1);

	// private key
	var d = der.readString(asn1.Ber.OctetString, true);

	der.readSequence(0xa0);
	var curve = readECDSACurve(der);
	assert.string(curve, 'a known elliptic curve');

	der.readSequence(0xa1);
	var Q = der.readString(asn1.Ber.BitString, true);
	Q = utils.ecNormalize(Q);

	var key = {
		type: 'ecdsa',
		parts: [
			{ name: 'curve', data: Buffer.from(curve) },
			{ name: 'Q', data: Q },
			{ name: 'd', data: d }
		]
	};

	return (new PrivateKey(key));
}

function writePkcs1(der, key) {
	der.startSequence();

	switch (key.type) {
	case 'rsa':
		if (PrivateKey.isPrivateKey(key))
			writePkcs1RSAPrivate(der, key);
		else
			writePkcs1RSAPublic(der, key);
		break;
	case 'dsa':
		if (PrivateKey.isPrivateKey(key))
			writePkcs1DSAPrivate(der, key);
		else
			writePkcs1DSAPublic(der, key);
		break;
	case 'ecdsa':
		if (PrivateKey.isPrivateKey(key))
			writePkcs1ECDSAPrivate(der, key);
		else
			writePkcs1ECDSAPublic(der, key);
		break;
	case 'ed25519':
		if (PrivateKey.isPrivateKey(key))
			writePkcs1EdDSAPrivate(der, key);
		else
			writePkcs1EdDSAPublic(der, key);
		break;
	default:
		throw (new Error('Unknown key algo: ' + key.type));
	}

	der.endSequence();
}

function writePkcs1RSAPublic(der, key) {
	der.writeBuffer(key.part.n.data, asn1.Ber.Integer);
	der.writeBuffer(key.part.e.data, asn1.Ber.Integer);
}

function writePkcs1RSAPrivate(der, key) {
	var ver = Buffer.from([0]);
	der.writeBuffer(ver, asn1.Ber.Integer);

	der.writeBuffer(key.part.n.data, asn1.Ber.Integer);
	der.writeBuffer(key.part.e.data, asn1.Ber.Integer);
	der.writeBuffer(key.part.d.data, asn1.Ber.Integer);
	der.writeBuffer(key.part.p.data, asn1.Ber.Integer);
	der.writeBuffer(key.part.q.data, asn1.Ber.Integer);
	if (!key.part.dmodp || !key.part.dmodq)
		utils.addRSAMissing(key);
	der.writeBuffer(key.part.dmodp.data, asn1.Ber.Integer);
	der.writeBuffer(key.part.dmodq.data, asn1.Ber.Integer);
	der.writeBuffer(key.part.iqmp.data, asn1.Ber.Integer);
}

function writePkcs1DSAPrivate(der, key) {
	var ver = Buffer.from([0]);
	der.writeBuffer(ver, asn1.Ber.Integer);

	der.writeBuffer(key.part.p.data, asn1.Ber.Integer);
	der.writeBuffer(key.part.q.data, asn1.Ber.Integer);
	der.writeBuffer(key.part.g.data, asn1.Ber.Integer);
	der.writeBuffer(key.part.y.data, asn1.Ber.Integer);
	der.writeBuffer(key.part.x.data, asn1.Ber.Integer);
}

function writePkcs1DSAPublic(der, key) {
	der.writeBuffer(key.part.y.data, asn1.Ber.Integer);
	der.writeBuffer(key.part.p.data, asn1.Ber.Integer);
	der.writeBuffer(key.part.q.data, asn1.Ber.Integer);
	der.writeBuffer(key.part.g.data, asn1.Ber.Integer);
}

function writePkcs1ECDSAPublic(der, key) {
	der.startSequence();

	der.writeOID('1.2.840.10045.2.1'); /* ecPublicKey */
	var curve = key.part.curve.data.toString();
	var curveOid = algs.curves[curve].pkcs8oid;
	assert.string(curveOid, 'a known ECDSA named curve');
	der.writeOID(curveOid);

	der.endSequence();

	var Q = utils.ecNormalize(key.part.Q.data, true);
	der.writeBuffer(Q, asn1.Ber.BitString);
}

function writePkcs1ECDSAPrivate(der, key) {
	var ver = Buffer.from([1]);
	der.writeBuffer(ver, asn1.Ber.Integer);

	der.writeBuffer(key.part.d.data, asn1.Ber.OctetString);

	der.startSequence(0xa0);
	var curve = key.part.curve.data.toString();
	var curveOid = algs.curves[curve].pkcs8oid;
	assert.string(curveOid, 'a known ECDSA named curve');
	der.writeOID(curveOid);
	der.endSequence();

	der.startSequence(0xa1);
	var Q = utils.ecNormalize(key.part.Q.data, true);
	der.writeBuffer(Q, asn1.Ber.BitString);
	der.endSequence();
}

function writePkcs1EdDSAPrivate(der, key) {
	var ver = Buffer.from([1]);
	der.writeBuffer(ver, asn1.Ber.Integer);

	der.writeBuffer(key.part.k.data, asn1.Ber.OctetString);

	der.startSequence(0xa0);
	der.writeOID('1.3.101.112');
	der.endSequence();

	der.startSequence(0xa1);
	utils.writeBitString(der, key.part.A.data);
	der.endSequence();
}

function writePkcs1EdDSAPublic(der, key) {
	throw (new Error('Public keys are not supported for EdDSA PKCS#1'));
}
