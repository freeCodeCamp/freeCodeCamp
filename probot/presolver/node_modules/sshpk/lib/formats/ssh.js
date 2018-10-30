// Copyright 2015 Joyent, Inc.

module.exports = {
	read: read,
	write: write
};

var assert = require('assert-plus');
var Buffer = require('safer-buffer').Buffer;
var rfc4253 = require('./rfc4253');
var utils = require('../utils');
var Key = require('../key');
var PrivateKey = require('../private-key');

var sshpriv = require('./ssh-private');

/*JSSTYLED*/
var SSHKEY_RE = /^([a-z0-9-]+)[ \t]+([a-zA-Z0-9+\/]+[=]*)([ \t]+([^ \t][^\n]*[\n]*)?)?$/;
/*JSSTYLED*/
var SSHKEY_RE2 = /^([a-z0-9-]+)[ \t\n]+([a-zA-Z0-9+\/][a-zA-Z0-9+\/ \t\n=]*)([^a-zA-Z0-9+\/ \t\n=].*)?$/;

function read(buf, options) {
	if (typeof (buf) !== 'string') {
		assert.buffer(buf, 'buf');
		buf = buf.toString('ascii');
	}

	var trimmed = buf.trim().replace(/[\\\r]/g, '');
	var m = trimmed.match(SSHKEY_RE);
	if (!m)
		m = trimmed.match(SSHKEY_RE2);
	assert.ok(m, 'key must match regex');

	var type = rfc4253.algToKeyType(m[1]);
	var kbuf = Buffer.from(m[2], 'base64');

	/*
	 * This is a bit tricky. If we managed to parse the key and locate the
	 * key comment with the regex, then do a non-partial read and assert
	 * that we have consumed all bytes. If we couldn't locate the key
	 * comment, though, there may be whitespace shenanigans going on that
	 * have conjoined the comment to the rest of the key. We do a partial
	 * read in this case to try to make the best out of a sorry situation.
	 */
	var key;
	var ret = {};
	if (m[4]) {
		try {
			key = rfc4253.read(kbuf);

		} catch (e) {
			m = trimmed.match(SSHKEY_RE2);
			assert.ok(m, 'key must match regex');
			kbuf = Buffer.from(m[2], 'base64');
			key = rfc4253.readInternal(ret, 'public', kbuf);
		}
	} else {
		key = rfc4253.readInternal(ret, 'public', kbuf);
	}

	assert.strictEqual(type, key.type);

	if (m[4] && m[4].length > 0) {
		key.comment = m[4];

	} else if (ret.consumed) {
		/*
		 * Now the magic: trying to recover the key comment when it's
		 * gotten conjoined to the key or otherwise shenanigan'd.
		 *
		 * Work out how much base64 we used, then drop all non-base64
		 * chars from the beginning up to this point in the the string.
		 * Then offset in this and try to make up for missing = chars.
		 */
		var data = m[2] + (m[3] ? m[3] : '');
		var realOffset = Math.ceil(ret.consumed / 3) * 4;
		data = data.slice(0, realOffset - 2). /*JSSTYLED*/
		    replace(/[^a-zA-Z0-9+\/=]/g, '') +
		    data.slice(realOffset - 2);

		var padding = ret.consumed % 3;
		if (padding > 0 &&
		    data.slice(realOffset - 1, realOffset) !== '=')
			realOffset--;
		while (data.slice(realOffset, realOffset + 1) === '=')
			realOffset++;

		/* Finally, grab what we think is the comment & clean it up. */
		var trailer = data.slice(realOffset);
		trailer = trailer.replace(/[\r\n]/g, ' ').
		    replace(/^\s+/, '');
		if (trailer.match(/^[a-zA-Z0-9]/))
			key.comment = trailer;
	}

	return (key);
}

function write(key, options) {
	assert.object(key);
	if (!Key.isKey(key))
		throw (new Error('Must be a public key'));

	var parts = [];
	var alg = rfc4253.keyTypeToAlg(key);
	parts.push(alg);

	var buf = rfc4253.write(key);
	parts.push(buf.toString('base64'));

	if (key.comment)
		parts.push(key.comment);

	return (Buffer.from(parts.join(' ')));
}
