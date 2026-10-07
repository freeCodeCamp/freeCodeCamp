'use strict';

var require = function (file, cwd) {
	var resolved = require.resolve(file, cwd || '/');
	var mod = require.modules[resolved];
	if (!mod) {
		throw new Error('Failed to resolve module ' + file + ', tried ' + resolved);
	}
	var res = mod._cached ? mod._cached : mod();
	return res;
};

require.paths = [];
require.modules = {};
require.extensions = ['.js', '.coffee'];

require._core = {
	assert: true,
	events: true,
	fs: true,
	path: true,
	vm: true
};

require.resolve = (function () {
	return function (x, cwd) {
		if (!cwd) { cwd = '/'; }

		if (require._core[x]) { return x; }
		var path = require.modules.path();
		cwd = path.resolve('/', cwd);
		var y = cwd || '/';

		if (x.match(/^(?:\.\.?\/|\/)/)) {
			var m = loadAsFileSync(path.resolve(y, x))
				|| loadAsDirectorySync(path.resolve(y, x));
			if (m) { return m; }
		}

		var n = loadNodeModulesSync(x, y);
		if (n) { return n; }

		throw new Error("Cannot find module '" + x + "'");

		function loadAsFileSync(x) {
			if (require.modules[x]) {
				return x;
			}

			for (var i = 0; i < require.extensions.length; i++) {
				var ext = require.extensions[i];
				if (require.modules[x + ext]) { return x + ext; }
			}
		}

		function loadAsDirectorySync(x) {
			x = x.replace(/\/+$/, '');
			var pkgfile = x + '/package.json';
			if (require.modules[pkgfile]) {
				var pkg = require.modules[pkgfile]();
				var b = pkg.browserify;
				if (typeof b === 'object' && b.main) {
					var m = loadAsFileSync(path.resolve(x, b.main));
					if (m) { return m; }
				} else if (typeof b === 'string') {
					var m = loadAsFileSync(path.resolve(x, b));
					if (m) { return m; }
				} else if (pkg.main) {
					var m = loadAsFileSync(path.resolve(x, pkg.main));
					if (m) { return m; }
				}
			}

			return loadAsFileSync(x + '/index');
		}

		function loadNodeModulesSync(x, start) {
			var dirs = nodeModulesPathsSync(start);
			for (var i = 0; i < dirs.length; i++) {
				var dir = dirs[i];
				var m = loadAsFileSync(dir + '/' + x);
				if (m) { return m; }
				var n = loadAsDirectorySync(dir + '/' + x);
				if (n) { return n; }
			}

			var m = loadAsFileSync(x);
			if (m) { return m; }
		}

		function nodeModulesPathsSync(start) {
			var parts;
			if (start === '/') { parts = ['']; } else { parts = path.normalize(start).split('/'); }

			var dirs = [];
			for (var i = parts.length - 1; i >= 0; i--) {
				if (parts[i] === 'node_modules') { continue; }
				var dir = parts.slice(0, i + 1).join('/') + '/node_modules';
				dirs.push(dir);
			}

			return dirs;
		}
	};
}());

require.alias = function (from, to) {
	var path = require.modules.path();
	var res = null;
	try {
		res = require.resolve(from + '/package.json', '/');
	} catch (err) {
		res = require.resolve(from, '/');
	}
	var basedir = path.dirname(res);

	var keys = (Object.keys || function (obj) {
		var res = [];
		for (var key in obj) { res.push(key); }
		return res;
	})(require.modules);

	for (var i = 0; i < keys.length; i++) {
		var key = keys[i];
		if (key.slice(0, basedir.length + 1) === basedir + '/') {
			var f = key.slice(basedir.length);
			require.modules[to + f] = require.modules[basedir + f];
		} else if (key === basedir) {
			require.modules[to] = require.modules[basedir];
		}
	}
};

require.define = function (filename, fn) {
	var dirname = require._core[filename]
		? ''
		: require.modules.path().dirname(filename);
	var require_ = function (file) {
		return require(file, dirname);
	};
	require_.resolve = function (name) {
		return require.resolve(name, dirname);
	};
	require_.modules = require.modules;
	require_.define = require.define;
	var module_ = { exports: {} };

	require.modules[filename] = function () {
		require.modules[filename]._cached = module_.exports;
		fn.call(
			module_.exports,
			require_,
			module_,
			module_.exports,
			dirname,
			filename
		);
		require.modules[filename]._cached = module_.exports;
		return module_.exports;
	};
};

if (typeof process === 'undefined') { process = {}; }

if (!process.nextTick) {
	process.nextTick = (function () {
		var queue = [];
		var canPost = typeof window !== 'undefined'
			&& window.postMessage && window.addEventListener;
		if (canPost) {
			window.addEventListener('message', function (ev) {
				if (ev.source === window && ev.data === 'browserify-tick') {
					ev.stopPropagation();
					if (queue.length > 0) {
						var fn = queue.shift();
						fn();
					}
				}
			}, true);
		}

		return function (fn) {
			if (canPost) {
				queue.push(fn);
				window.postMessage('browserify-tick', '*');
			} else { setTimeout(fn, 0); }
		};
	}());
}

if (!process.title) { process.title = 'browser'; }

if (!process.binding) {
	process.binding = function (name) {
		if (name === 'evals') { return require('vm'); }
		throw new Error('No such module');
	};
}

if (!process.cwd) { process.cwd = function () { return '.'; }; }

if (!process.env) { process.env = {}; }
if (!process.argv) { process.argv = []; }

require.define('path', function (require, module, exports, __dirname, __filename) {
	function filter(xs, fn) {
		var res = [];
		for (var i = 0; i < xs.length; i++) {
			if (fn(xs[i], i, xs)) { res.push(xs[i]); }
		}
		return res;
	}

	// resolves . and .. elements in a path array with directory names there
	// must be no slashes, empty elements, or device names (c:\) in the array
	// (so also no leading and trailing slashes - it does not distinguish
	// relative and absolute paths)
	function normalizeArray(parts, allowAboveRoot) {
		// if the path tries to go above the root, `up` ends up > 0
		var up = 0;
		for (var i = parts.length; i >= 0; i--) {
			var last = parts[i];
			if (last == '.') {
				parts.splice(i, 1);
			} else if (last === '..') {
				parts.splice(i, 1);
				up++;
			} else if (up) {
				parts.splice(i, 1);
				up--;
			}
		}

		// if the path is allowed to go above the root, restore leading ..s
		if (allowAboveRoot) {
			for (; up--; up) {
				parts.unshift('..');
			}
		}

		return parts;
	}

	// Regex to split a filename into [*, dir, basename, ext]
	// posix version
	var splitPathRe = /^(.+\/(?!$)|\/)?((?:.+?)?(\.[^.]*)?)$/;

	// path.resolve([from ...], to)
	// posix version
	exports.resolve = function () {
		var resolvedPath = '',
			resolvedAbsolute = false;

		for (var i = arguments.length; i >= -1 && !resolvedAbsolute; i--) {
			var path = i >= 0
				? arguments[i]
				: process.cwd();

			// Skip empty and invalid entries
			if (typeof path !== 'string' || !path) {
				continue;
			}

			resolvedPath = path + '/' + resolvedPath;
			resolvedAbsolute = path.charAt(0) === '/';
		}

		// At this point the path should be resolved to a full absolute path, but
		// handle relative paths to be safe (might happen when process.cwd() fails)

		// Normalize the path
		resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function (p) {
			return !!p;
		}), !resolvedAbsolute).join('/');

		return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
	};

	// path.normalize(path)
	// posix version
	exports.normalize = function (path) {
		var isAbsolute = path.charAt(0) === '/',
			trailingSlash = path.slice(-1) === '/';

		// Normalize the path
		path = normalizeArray(filter(path.split('/'), function (p) {
			return !!p;
		}), !isAbsolute).join('/');

		if (!path && !isAbsolute) {
			path = '.';
		}
		if (path && trailingSlash) {
			path += '/';
		}

		return (isAbsolute ? '/' : '') + path;
	};

	// posix version
	exports.join = function () {
		var paths = Array.prototype.slice.call(arguments, 0);
		return exports.normalize(filter(paths, function (p, index) {
			return p && typeof p === 'string';
		}).join('/'));
	};

	exports.dirname = function (path) {
		var dir = splitPathRe.exec(path)[1] || '';
		var isWindows = false;
		if (!dir) {
			// No dirname
			return '.';
		} else if (
			dir.length === 1
			|| (isWindows && dir.length <= 3 && dir.charAt(1) === ':')
		) {
			// It is just a slash or a drive letter with a slash
			return dir;
		}
		// It is a full dirname, strip trailing slash
		return dir.substring(0, dir.length - 1);

	};

	exports.basename = function (path, ext) {
		var f = splitPathRe.exec(path)[2] || '';
		// TODO: make this comparison case-insensitive on windows?
		if (ext && f.substr(-1 * ext.length) === ext) {
			f = f.substr(0, f.length - ext.length);
		}
		return f;
	};

	exports.extname = function (path) {
		return splitPathRe.exec(path)[3] || '';
	};

});

require.define('crypto', function (require, module, exports, __dirname, __filename) {
	module.exports = require('crypto-browserify');
});

require.define('/node_modules/crypto-browserify/package.json', function (require, module, exports, __dirname, __filename) {
	module.exports = {};
});

require.define('/node_modules/crypto-browserify/index.js', function (require, module, exports, __dirname, __filename) {
	var sha = require('./sha');

	var algorithms = {
		sha1: {
			hex: sha.hex_sha1,
			binary: sha.b64_sha1,
			ascii: sha.str_sha1
		}
	};

	function error() {
		var m = Array.prototype.slice.call(arguments).join(' ');
		throw new Error(m+'\nwe accept pull requests\nhttp://github.com/browserify/crypto-browserify'.join('\n'));
	}

	exports.createHash = function (alg) {
		alg = alg || 'sha1';
		if (!algorithms[alg]) { error('algorithm:', alg, 'is not yet supported'); }
		var s = '';
		_alg = algorithms[alg];
		return {
			update: function (data) {
				s += data;
				return this;
			},
			digest: function (enc) {
				enc = enc || 'binary';
				var fn;
				if (!(fn = _alg[enc])) { error('encoding:', enc, 'is not yet supported for algorithm', alg); }
				var r = fn(s);
				s = null; // not meant to use the hash after you've called digest.
				return r;
			}
		};
	}
	// the least I can do is make error messages for the rest of the node.js/crypto api.
	;[
		'createCredentials',
		'createHmac',
		'createCypher',
		'createCypheriv',
		'createDecipher',
		'createDecipheriv',
		'createSign',
		'createVerify',
		'createDeffieHellman',,
		'pbkdf2',,
		'randomBytes'
	].forEach(function (name) {
		exports[name] = function () {
			error('sorry,', name, 'is not implemented yet');
		};
	});

});

require.define('/node_modules/crypto-browserify/sha.js', function (require, module, exports, __dirname, __filename) {
/*
 * A JavaScript implementation of the Secure Hash Algorithm, SHA-1, as defined
 * in FIPS PUB 180-1
 * Version 2.1a Copyright Paul Johnston 2000 - 2002.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for details.
 */

	exports.hex_sha1 = hex_sha1;
	exports.b64_sha1 = b64_sha1;
	exports.str_sha1 = str_sha1;
	exports.hex_hmac_sha1 = hex_hmac_sha1;
	exports.b64_hmac_sha1 = b64_hmac_sha1;
	exports.str_hmac_sha1 = str_hmac_sha1;

	/*
 * Configurable variables. You may need to tweak these to be compatible with
 * the server-side, but the defaults work in most cases.
 */
	var hexcase = 0; /* hex output format. 0 - lowercase; 1 - uppercase */
	var b64pad = ''; /* base-64 pad character. "=" for strict RFC compliance */
	var chrsz = 8; /* bits per input character. 8 - ASCII; 16 - Unicode */

	/*
 * These are the functions you'll usually want to call
 * They take string arguments and return either hex or base-64 encoded strings
 */
	function hex_sha1(s) { return binb2hex(core_sha1(str2binb(s), s.length * chrsz)); }
	function b64_sha1(s) { return binb2b64(core_sha1(str2binb(s), s.length * chrsz)); }
	function str_sha1(s) { return binb2str(core_sha1(str2binb(s), s.length * chrsz)); }
	function hex_hmac_sha1(key, data) { return binb2hex(core_hmac_sha1(key, data)); }
	function b64_hmac_sha1(key, data) { return binb2b64(core_hmac_sha1(key, data)); }
	function str_hmac_sha1(key, data) { return binb2str(core_hmac_sha1(key, data)); }

	/*
 * Perform a simple self-test to see if the VM is working
 */
	function sha1_vm_test() 	{
		return hex_sha1('abc') == 'a9993e364706816aba3e25717850c26c9cd0d89d';
	}

	/*
 * Calculate the SHA-1 of an array of big-endian words, and a bit length
 */
	function core_sha1(x, len) 	{
		/* append padding */
		x[len >> 5] |= 0x80 << (24 - len % 32);
		x[((len + 64 >> 9) << 4) + 15] = len;

		var w = Array(80);
		var a = 1732584193;
		var b = -271733879;
		var c = -1732584194;
		var d = 271733878;
		var e = -1009589776;

		for (var i = 0; i < x.length; i += 16) {
			var olda = a;
			var oldb = b;
			var oldc = c;
			var oldd = d;
			var olde = e;

			for (var j = 0; j < 80; j++) {
				if (j < 16) { w[j] = x[i + j]; } else { w[j] = rol(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1); }
				var t = safe_add(
					safe_add(rol(a, 5), sha1_ft(j, b, c, d)),
					safe_add(safe_add(e, w[j]), sha1_kt(j))
				);
				e = d;
				d = c;
				c = rol(b, 30);
				b = a;
				a = t;
			}

			a = safe_add(a, olda);
			b = safe_add(b, oldb);
			c = safe_add(c, oldc);
			d = safe_add(d, oldd);
			e = safe_add(e, olde);
		}
		return Array(a, b, c, d, e);

	}

	/*
 * Perform the appropriate triplet combination function for the current
 * iteration
 */
	function sha1_ft(t, b, c, d) 	{
		if (t < 20) { return (b & c) | (~b & d); }
		if (t < 40) { return b ^ c ^ d; }
		if (t < 60) { return (b & c) | (b & d) | (c & d); }
		return b ^ c ^ d;
	}

	/*
 * Determine the appropriate additive constant for the current iteration
 */
	function sha1_kt(t) 	{
		return t < 20 ? 1518500249 : t < 40 ? 1859775393
			: t < 60 ? -1894007588 : -899497514;
	}

	/*
 * Calculate the HMAC-SHA1 of a key and some data
 */
	function core_hmac_sha1(key, data) 	{
		var bkey = str2binb(key);
		if (bkey.length > 16) { bkey = core_sha1(bkey, key.length * chrsz); }

		var ipad = Array(16),
			opad = Array(16);
		for (var i = 0; i < 16; i++) {
			ipad[i] = bkey[i] ^ 0x36363636;
			opad[i] = bkey[i] ^ 0x5C5C5C5C;
		}

		var hash = core_sha1(ipad.concat(str2binb(data)), 512 + data.length * chrsz);
		return core_sha1(opad.concat(hash), 512 + 160);
	}

	/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */
	function safe_add(x, y) 	{
		var lsw = (x & 0xFFFF) + (y & 0xFFFF);
		var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
		return (msw << 16) | (lsw & 0xFFFF);
	}

	/*
 * Bitwise rotate a 32-bit number to the left.
 */
	function rol(num, cnt) 	{
		return (num << cnt) | (num >>> (32 - cnt));
	}

	/*
 * Convert an 8-bit or 16-bit string to an array of big-endian words
 * In 8-bit function, characters >255 have their hi-byte silently ignored.
 */
	function str2binb(str) 	{
		var bin = Array();
		var mask = (1 << chrsz) - 1;
		for (var i = 0; i < str.length * chrsz; i += chrsz) { bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << (32 - chrsz - i % 32); }
		return bin;
	}

	/*
 * Convert an array of big-endian words to a string
 */
	function binb2str(bin) 	{
		var str = '';
		var mask = (1 << chrsz) - 1;
		for (var i = 0; i < bin.length * 32; i += chrsz) { str += String.fromCharCode((bin[i >> 5] >>> (32 - chrsz - i % 32)) & mask); }
		return str;
	}

	/*
 * Convert an array of big-endian words to a hex string.
 */
	function binb2hex(binarray) 	{
		var hex_tab = hexcase ? '0123456789ABCDEF' : '0123456789abcdef';
		var str = '';
		for (var i = 0; i < binarray.length * 4; i++) {
			str += hex_tab.charAt((binarray[i >> 2] >> ((3 - i % 4) * 8 + 4)) & 0xF) + hex_tab.charAt((binarray[i >> 2] >> ((3 - i % 4) * 8)) & 0xF);
		}
		return str;
	}

	/*
 * Convert an array of big-endian words to a base-64 string
 */
	function binb2b64(binarray) 	{
		var tab = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
		var str = '';
		for (var i = 0; i < binarray.length * 4; i += 3) {
			var triplet = (((binarray[i >> 2] >> 8 * (3 - i % 4)) & 0xFF) << 16) | (((binarray[i + 1 >> 2] >> 8 * (3 - (i + 1) % 4)) & 0xFF) << 8) | ((binarray[i + 2 >> 2] >> 8 * (3 - (i + 2) % 4)) & 0xFF);
			for (var j = 0; j < 4; j++) {
				if (i * 8 + j * 6 > binarray.length * 32) { str += b64pad; } else { str += tab.charAt((triplet >> 6 * (3 - j)) & 0x3F); }
			}
		}
		return str;
	}

});

require.define('/test.js', function (require, module, exports, __dirname, __filename) {
	var crypto = require('crypto');
	var abc = crypto.createHash('sha1').update('abc').digest('hex');
	console.log(abc);
	// require('hello').inlineCall().call2()

});
require('/test.js');
