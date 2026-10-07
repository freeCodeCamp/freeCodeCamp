'use strict';

var inherits = require('inherits');
var SHA512 = require('./sha512');
var Hash = require('./hash');
var Buffer = require('safe-buffer').Buffer;

var W = new Array(160);

function Sha384() {
	this.init();
	this._w = W;

	Hash.call(this, 128, 112);
}

inherits(Sha384, SHA512);

Sha384.prototype.init = function () {
	this._ah = 0xcbbb9d5d;
	this._bh = 0x629a292a;
	this._ch = 0x9159015a;
	this._dh = 0x152fecd8;
	this._eh = 0x67332667;
	this._fh = 0x8eb44a87;
	this._gh = 0xdb0c2e0d;
	this._hh = 0x47b5481d;

	this._al = 0xc1059ed8;
	this._bl = 0x367cd507;
	this._cl = 0x3070dd17;
	this._dl = 0xf70e5939;
	this._el = 0xffc00b31;
	this._fl = 0x68581511;
	this._gl = 0x64f98fa7;
	this._hl = 0xbefa4fa4;

	return this;
};

Sha384.prototype._hash = function () {
	var H = Buffer.allocUnsafe(48);

	function writeInt64BE(h, l, offset) {
		H.writeInt32BE(h, offset);
		H.writeInt32BE(l, offset + 4);
	}

	writeInt64BE(this._ah, this._al, 0);
	writeInt64BE(this._bh, this._bl, 8);
	writeInt64BE(this._ch, this._cl, 16);
	writeInt64BE(this._dh, this._dl, 24);
	writeInt64BE(this._eh, this._el, 32);
	writeInt64BE(this._fh, this._fl, 40);

	return H;
};

module.exports = Sha384;
