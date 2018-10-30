/* eslint no-bitwise: "off", max-statements: "off", max-lines: "off" */

// Taken from: https://github.com/walling/unorm/blob/master/lib/unorm.js

/*
	* UnicodeNormalizer 1.0.0
	* Copyright (c) 2008 Matsuza
	* Dual licensed under the MIT (MIT-LICENSE.txt) and
	* GPL (GPL-LICENSE.txt) licenses.
	* $Date: 2008-06-05 16:44:17 +0200 (Thu, 05 Jun 2008) $
	* $Rev: 13309 $
*/

"use strict";

var primitiveSet = require("../../../object/primitive-set")
  , validValue   = require("../../../object/valid-value")
  , data         = require("./_data");

var floor = Math.floor
  , forms = primitiveSet("NFC", "NFD", "NFKC", "NFKD")
  , DEFAULT_FEATURE = [null, 0, {}]
  , CACHE_THRESHOLD = 10
  , SBase = 0xac00
  , LBase = 0x1100
  , VBase = 0x1161
  , TBase = 0x11a7
  , LCount = 19
  , VCount = 21
  , TCount = 28
  , NCount = VCount * TCount
  , SCount = LCount * NCount
  , UChar
  , cache = {}
  , cacheCounter = []
  , fromCache
  , fromData
  , fromCpOnly
  , fromRuleBasedJamo
  , fromCpFilter
  , strategies
  , UCharIterator
  , RecursDecompIterator
  , DecompIterator
  , CompIterator
  , createIterator
  , normalize;

UChar = function (cp, feature) {
	this.codepoint = cp;
	this.feature = feature;
};

// Strategies
(function () {
	for (var i = 0; i <= 0xff; ++i) cacheCounter[i] = 0;
}());

fromCache = function (nextStep, cp, needFeature) {
	var ret = cache[cp];
	if (!ret) {
		ret = nextStep(cp, needFeature);
		if (Boolean(ret.feature) && ++cacheCounter[(cp >> 8) & 0xff] > CACHE_THRESHOLD) {
			cache[cp] = ret;
		}
	}
	return ret;
};

fromData = function (next, cp) {
	var hash = cp & 0xff00, dunit = UChar.udata[hash] || {}, feature = dunit[cp];
	return feature ? new UChar(cp, feature) : new UChar(cp, DEFAULT_FEATURE);
};
fromCpOnly = function (next, cp, needFeature) {
	return needFeature ? next(cp, needFeature) : new UChar(cp, null);
};

fromRuleBasedJamo = function (next, cp, needFeature) {
	var char, base, i, arr, SIndex, TIndex, feature, j;
	if (cp < LBase || (LBase + LCount <= cp && cp < SBase) || SBase + SCount < cp) {
		return next(cp, needFeature);
	}
	if (LBase <= cp && cp < LBase + LCount) {
		char = {};
		base = (cp - LBase) * VCount;
		for (i = 0; i < VCount; ++i) {
			char[VBase + i] = SBase + TCount * (i + base);
		}
		arr = new Array(3);
		arr[2] = char;
		return new UChar(cp, arr);
	}

	SIndex = cp - SBase;
	TIndex = SIndex % TCount;
	feature = [];
	if (TIndex === 0) {
		feature[0] = [LBase + floor(SIndex / NCount), VBase + floor(SIndex % NCount / TCount)];
		feature[2] = {};
		for (j = 1; j < TCount; ++j) {
			feature[2][TBase + j] = cp + j;
		}
	} else {
		feature[0] = [SBase + SIndex - TIndex, TBase + TIndex];
	}
	return new UChar(cp, feature);
};

fromCpFilter = function (next, cp, needFeature) {
	return cp < 60 || (cp > 13311 && cp < 42607)
		? new UChar(cp, DEFAULT_FEATURE)
		: next(cp, needFeature);
};

strategies = [fromCpFilter, fromCache, fromCpOnly, fromRuleBasedJamo, fromData];

UChar.fromCharCode = strategies.reduceRight(function (next, strategy) {
	return function (cp, needFeature) {
		return strategy(next, cp, needFeature);
	};
}, null);

UChar.isHighSurrogate = function (cp) {
	return cp >= 0xd800 && cp <= 0xdbff;
};
UChar.isLowSurrogate = function (cp) {
	return cp >= 0xdc00 && cp <= 0xdfff;
};

UChar.prototype.prepFeature = function () {
	if (!this.feature) {
		this.feature = UChar.fromCharCode(this.codepoint, true).feature;
	}
};

UChar.prototype.toString = function () {
	var num;
	if (this.codepoint < 0x10000) return String.fromCharCode(this.codepoint);
	num = this.codepoint - 0x10000;
	return String.fromCharCode(floor(num / 0x400) + 0xd800, num % 0x400 + 0xdc00);
};

UChar.prototype.getDecomp = function () {
	this.prepFeature();
	return this.feature[0] || null;
};

UChar.prototype.isCompatibility = function () {
	this.prepFeature();
	return Boolean(this.feature[1]) && this.feature[1] & (1 << 8);
};
UChar.prototype.isExclude = function () {
	this.prepFeature();
	return Boolean(this.feature[1]) && this.feature[1] & (1 << 9);
};
UChar.prototype.getCanonicalClass = function () {
	this.prepFeature();
	return this.feature[1] ? this.feature[1] & 0xff : 0;
};
UChar.prototype.getComposite = function (following) {
	var cp;
	this.prepFeature();
	if (!this.feature[2]) return null;
	cp = this.feature[2][following.codepoint];
	return cp ? UChar.fromCharCode(cp) : null;
};

UCharIterator = function (str) {
	this.str = str;
	this.cursor = 0;
};
UCharIterator.prototype.next = function () {
	if (Boolean(this.str) && this.cursor < this.str.length) {
		var cp = this.str.charCodeAt(this.cursor++), d;
		if (
			UChar.isHighSurrogate(cp) &&
			this.cursor < this.str.length &&
			UChar.isLowSurrogate(d = this.str.charCodeAt(this.cursor))
		) {
			cp = (cp - 0xd800) * 0x400 + (d - 0xdc00) + 0x10000;
			++this.cursor;
		}
		return UChar.fromCharCode(cp);
	}
	this.str = null;
	return null;
};

RecursDecompIterator = function (it, cano) {
	this.it = it;
	this.canonical = cano;
	this.resBuf = [];
};

RecursDecompIterator.prototype.next = function () {
	var recursiveDecomp, uchar;
	recursiveDecomp = function (cano, ucharLoc) {
		var decomp = ucharLoc.getDecomp(), ret, i, a, j;
		if (Boolean(decomp) && !(cano && ucharLoc.isCompatibility())) {
			ret = [];
			for (i = 0; i < decomp.length; ++i) {
				a = recursiveDecomp(cano, UChar.fromCharCode(decomp[i]));
				// Ret.concat(a); //<-why does not this work?
				// following block is a workaround.
				for (j = 0; j < a.length; ++j) ret.push(a[j]);
			}
			return ret;
		}
		return [ucharLoc];
	};
	if (this.resBuf.length === 0) {
		uchar = this.it.next();
		if (!uchar) return null;
		this.resBuf = recursiveDecomp(this.canonical, uchar);
	}
	return this.resBuf.shift();
};

DecompIterator = function (it) {
	this.it = it;
	this.resBuf = [];
};

DecompIterator.prototype.next = function () {
	var cc, uchar, inspt, uchar2, cc2;
	if (this.resBuf.length === 0) {
		do {
			uchar = this.it.next();
			if (!uchar) break;
			cc = uchar.getCanonicalClass();
			inspt = this.resBuf.length;
			if (cc !== 0) {
				for (inspt; inspt > 0; --inspt) {
					uchar2 = this.resBuf[inspt - 1];
					cc2 = uchar2.getCanonicalClass();
					// eslint-disable-next-line max-depth
					if (cc2 <= cc) break;
				}
			}
			this.resBuf.splice(inspt, 0, uchar);
		} while (cc !== 0);
	}
	return this.resBuf.shift();
};

CompIterator = function (it) {
	this.it = it;
	this.procBuf = [];
	this.resBuf = [];
	this.lastClass = null;
};

CompIterator.prototype.next = function () {
	var uchar, starter, composite, cc;
	while (this.resBuf.length === 0) {
		uchar = this.it.next();
		if (!uchar) {
			this.resBuf = this.procBuf;
			this.procBuf = [];
			break;
		}
		if (this.procBuf.length === 0) {
			this.lastClass = uchar.getCanonicalClass();
			this.procBuf.push(uchar);
		} else {
			starter = this.procBuf[0];
			composite = starter.getComposite(uchar);
			cc = uchar.getCanonicalClass();
			if (Boolean(composite) && (this.lastClass < cc || this.lastClass === 0)) {
				this.procBuf[0] = composite;
			} else {
				if (cc === 0) {
					this.resBuf = this.procBuf;
					this.procBuf = [];
				}
				this.lastClass = cc;
				this.procBuf.push(uchar);
			}
		}
	}
	return this.resBuf.shift();
};

createIterator = function (mode, str) {
	switch (mode) {
		case "NFD":
			return new DecompIterator(new RecursDecompIterator(new UCharIterator(str), true));
		case "NFKD":
			return new DecompIterator(new RecursDecompIterator(new UCharIterator(str), false));
		case "NFC":
			return new CompIterator(
				new DecompIterator(new RecursDecompIterator(new UCharIterator(str), true))
			);
		case "NFKC":
			return new CompIterator(
				new DecompIterator(new RecursDecompIterator(new UCharIterator(str), false))
			);
		default:
			throw new Error(mode + " is invalid");
	}
};
normalize = function (mode, str) {
	var it = createIterator(mode, str), ret = "", uchar;
	while ((uchar = it.next())) ret += uchar.toString();
	return ret;
};

/* Unicode data */
UChar.udata = data;

module.exports = function (/* Form*/) {
	var str = String(validValue(this)), form = arguments[0];
	if (form === undefined) form = "NFC";
	else form = String(form);
	if (!forms[form]) throw new RangeError("Invalid normalization form: " + form);
	return normalize(form, str);
};
