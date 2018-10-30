// Copyright 2015 Joyent, Inc.

var Buffer = require('safer-buffer').Buffer;

var algInfo = {
	'dsa': {
		parts: ['p', 'q', 'g', 'y'],
		sizePart: 'p'
	},
	'rsa': {
		parts: ['e', 'n'],
		sizePart: 'n'
	},
	'ecdsa': {
		parts: ['curve', 'Q'],
		sizePart: 'Q'
	},
	'ed25519': {
		parts: ['A'],
		sizePart: 'A'
	}
};
algInfo['curve25519'] = algInfo['ed25519'];

var algPrivInfo = {
	'dsa': {
		parts: ['p', 'q', 'g', 'y', 'x']
	},
	'rsa': {
		parts: ['n', 'e', 'd', 'iqmp', 'p', 'q']
	},
	'ecdsa': {
		parts: ['curve', 'Q', 'd']
	},
	'ed25519': {
		parts: ['A', 'k']
	}
};
algPrivInfo['curve25519'] = algPrivInfo['ed25519'];

var hashAlgs = {
	'md5': true,
	'sha1': true,
	'sha256': true,
	'sha384': true,
	'sha512': true
};

/*
 * Taken from
 * http://csrc.nist.gov/groups/ST/toolkit/documents/dss/NISTReCur.pdf
 */
var curves = {
	'nistp256': {
		size: 256,
		pkcs8oid: '1.2.840.10045.3.1.7',
		p: Buffer.from(('00' +
		    'ffffffff 00000001 00000000 00000000' +
		    '00000000 ffffffff ffffffff ffffffff').
		    replace(/ /g, ''), 'hex'),
		a: Buffer.from(('00' +
		    'FFFFFFFF 00000001 00000000 00000000' +
		    '00000000 FFFFFFFF FFFFFFFF FFFFFFFC').
		    replace(/ /g, ''), 'hex'),
		b: Buffer.from((
		    '5ac635d8 aa3a93e7 b3ebbd55 769886bc' +
		    '651d06b0 cc53b0f6 3bce3c3e 27d2604b').
		    replace(/ /g, ''), 'hex'),
		s: Buffer.from(('00' +
		    'c49d3608 86e70493 6a6678e1 139d26b7' +
		    '819f7e90').
		    replace(/ /g, ''), 'hex'),
		n: Buffer.from(('00' +
		    'ffffffff 00000000 ffffffff ffffffff' +
		    'bce6faad a7179e84 f3b9cac2 fc632551').
		    replace(/ /g, ''), 'hex'),
		G: Buffer.from(('04' +
		    '6b17d1f2 e12c4247 f8bce6e5 63a440f2' +
		    '77037d81 2deb33a0 f4a13945 d898c296' +
		    '4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16' +
		    '2bce3357 6b315ece cbb64068 37bf51f5').
		    replace(/ /g, ''), 'hex')
	},
	'nistp384': {
		size: 384,
		pkcs8oid: '1.3.132.0.34',
		p: Buffer.from(('00' +
		    'ffffffff ffffffff ffffffff ffffffff' +
		    'ffffffff ffffffff ffffffff fffffffe' +
		    'ffffffff 00000000 00000000 ffffffff').
		    replace(/ /g, ''), 'hex'),
		a: Buffer.from(('00' +
		    'FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFF' +
		    'FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFE' +
		    'FFFFFFFF 00000000 00000000 FFFFFFFC').
		    replace(/ /g, ''), 'hex'),
		b: Buffer.from((
		    'b3312fa7 e23ee7e4 988e056b e3f82d19' +
		    '181d9c6e fe814112 0314088f 5013875a' +
		    'c656398d 8a2ed19d 2a85c8ed d3ec2aef').
		    replace(/ /g, ''), 'hex'),
		s: Buffer.from(('00' +
		    'a335926a a319a27a 1d00896a 6773a482' +
		    '7acdac73').
		    replace(/ /g, ''), 'hex'),
		n: Buffer.from(('00' +
		    'ffffffff ffffffff ffffffff ffffffff' +
		    'ffffffff ffffffff c7634d81 f4372ddf' +
		    '581a0db2 48b0a77a ecec196a ccc52973').
		    replace(/ /g, ''), 'hex'),
		G: Buffer.from(('04' +
		    'aa87ca22 be8b0537 8eb1c71e f320ad74' +
		    '6e1d3b62 8ba79b98 59f741e0 82542a38' +
		    '5502f25d bf55296c 3a545e38 72760ab7' +
		    '3617de4a 96262c6f 5d9e98bf 9292dc29' +
		    'f8f41dbd 289a147c e9da3113 b5f0b8c0' +
		    '0a60b1ce 1d7e819d 7a431d7c 90ea0e5f').
		    replace(/ /g, ''), 'hex')
	},
	'nistp521': {
		size: 521,
		pkcs8oid: '1.3.132.0.35',
		p: Buffer.from((
		    '01ffffff ffffffff ffffffff ffffffff' +
		    'ffffffff ffffffff ffffffff ffffffff' +
		    'ffffffff ffffffff ffffffff ffffffff' +
		    'ffffffff ffffffff ffffffff ffffffff' +
		    'ffff').replace(/ /g, ''), 'hex'),
		a: Buffer.from(('01FF' +
		    'FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFF' +
		    'FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFF' +
		    'FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFF' +
		    'FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFC').
		    replace(/ /g, ''), 'hex'),
		b: Buffer.from(('51' +
		    '953eb961 8e1c9a1f 929a21a0 b68540ee' +
		    'a2da725b 99b315f3 b8b48991 8ef109e1' +
		    '56193951 ec7e937b 1652c0bd 3bb1bf07' +
		    '3573df88 3d2c34f1 ef451fd4 6b503f00').
		    replace(/ /g, ''), 'hex'),
		s: Buffer.from(('00' +
		    'd09e8800 291cb853 96cc6717 393284aa' +
		    'a0da64ba').replace(/ /g, ''), 'hex'),
		n: Buffer.from(('01ff' +
		    'ffffffff ffffffff ffffffff ffffffff' +
		    'ffffffff ffffffff ffffffff fffffffa' +
		    '51868783 bf2f966b 7fcc0148 f709a5d0' +
		    '3bb5c9b8 899c47ae bb6fb71e 91386409').
		    replace(/ /g, ''), 'hex'),
		G: Buffer.from(('04' +
		    '00c6 858e06b7 0404e9cd 9e3ecb66 2395b442' +
		         '9c648139 053fb521 f828af60 6b4d3dba' +
		         'a14b5e77 efe75928 fe1dc127 a2ffa8de' +
		         '3348b3c1 856a429b f97e7e31 c2e5bd66' +
		    '0118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9' +
		         '98f54449 579b4468 17afbd17 273e662c' +
		         '97ee7299 5ef42640 c550b901 3fad0761' +
		         '353c7086 a272c240 88be9476 9fd16650').
		    replace(/ /g, ''), 'hex')
	}
};

module.exports = {
	info: algInfo,
	privInfo: algPrivInfo,
	hashAlgs: hashAlgs,
	curves: curves
};
