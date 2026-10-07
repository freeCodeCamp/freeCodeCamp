'use strict';
/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.42.0-dev-20230906(e7d7a5b072e74702a912a4c855a3bda21a7757e7)
 * Released under the MIT license
 * https://github.com/microsoft/vscode/blob/main/LICENSE.txt
 *-----------------------------------------------------------*/ const _amdLoaderGlobal = this,
	_commonjsGlobal = typeof global == 'object' ? global : {};
var AMDLoader;
(function (u) {
	u.global = _amdLoaderGlobal;
	class y {
		get isWindows() {
			return this._detect(), this._isWindows;
		}
		get isNode() {
			return this._detect(), this._isNode;
		}
		get isElectronRenderer() {
			return this._detect(), this._isElectronRenderer;
		}
		get isWebWorker() {
			return this._detect(), this._isWebWorker;
		}
		get isElectronNodeIntegrationWebWorker() {
			return this._detect(), this._isElectronNodeIntegrationWebWorker;
		}
		constructor() {
			(this._detected = !1),
				(this._isWindows = !1),
				(this._isNode = !1),
				(this._isElectronRenderer = !1),
				(this._isWebWorker = !1),
				(this._isElectronNodeIntegrationWebWorker = !1);
		}
		_detect() {
			this._detected ||
				((this._detected = !0),
				(this._isWindows = y._isWindows()),
				(this._isNode = typeof module < 'u' && !!module.exports),
				(this._isElectronRenderer =
					typeof process < 'u' &&
					typeof process.versions < 'u' &&
					typeof process.versions.electron < 'u' &&
					process.type === 'renderer'),
				(this._isWebWorker = typeof u.global.importScripts == 'function'),
				(this._isElectronNodeIntegrationWebWorker =
					this._isWebWorker &&
					typeof process < 'u' &&
					typeof process.versions < 'u' &&
					typeof process.versions.electron < 'u' &&
					process.type === 'worker'));
		}
		static _isWindows() {
			return typeof navigator < 'u' &&
				navigator.userAgent &&
				navigator.userAgent.indexOf('Windows') >= 0
				? !0
				: typeof process < 'u'
				? process.platform === 'win32'
				: !1;
		}
	}
	u.Environment = y;
})(AMDLoader || (AMDLoader = {}));
var AMDLoader;
(function (u) {
	class y {
		constructor(r, c, a) {
			(this.type = r), (this.detail = c), (this.timestamp = a);
		}
	}
	u.LoaderEvent = y;
	class m {
		constructor(r) {
			this._events = [new y(1, '', r)];
		}
		record(r, c) {
			this._events.push(new y(r, c, u.Utilities.getHighPerformanceTimestamp()));
		}
		getEvents() {
			return this._events;
		}
	}
	u.LoaderEventRecorder = m;
	class p {
		record(r, c) {}
		getEvents() {
			return [];
		}
	}
	(p.INSTANCE = new p()), (u.NullLoaderEventRecorder = p);
})(AMDLoader || (AMDLoader = {}));
var AMDLoader;
(function (u) {
	class y {
		static fileUriToFilePath(p, h) {
			if (((h = decodeURI(h).replace(/%23/g, '#')), p)) {
				if (/^file:\/\/\//.test(h)) return h.substr(8);
				if (/^file:\/\//.test(h)) return h.substr(5);
			} else if (/^file:\/\//.test(h)) return h.substr(7);
			return h;
		}
		static startsWith(p, h) {
			return p.length >= h.length && p.substr(0, h.length) === h;
		}
		static endsWith(p, h) {
			return p.length >= h.length && p.substr(p.length - h.length) === h;
		}
		static containsQueryString(p) {
			return /^[^\#]*\?/gi.test(p);
		}
		static isAbsolutePath(p) {
			return /^((http:\/\/)|(https:\/\/)|(file:\/\/)|(\/))/.test(p);
		}
		static forEachProperty(p, h) {
			if (p) {
				let r;
				for (r in p) p.hasOwnProperty(r) && h(r, p[r]);
			}
		}
		static isEmpty(p) {
			let h = !0;
			return (
				y.forEachProperty(p, () => {
					h = !1;
				}),
				h
			);
		}
		static recursiveClone(p) {
			if (
				!p ||
				typeof p != 'object' ||
				p instanceof RegExp ||
				(!Array.isArray(p) && Object.getPrototypeOf(p) !== Object.prototype)
			)
				return p;
			let h = Array.isArray(p) ? [] : {};
			return (
				y.forEachProperty(p, (r, c) => {
					c && typeof c == 'object' ? (h[r] = y.recursiveClone(c)) : (h[r] = c);
				}),
				h
			);
		}
		static generateAnonymousModule() {
			return '===anonymous' + y.NEXT_ANONYMOUS_ID++ + '===';
		}
		static isAnonymousModule(p) {
			return y.startsWith(p, '===anonymous');
		}
		static getHighPerformanceTimestamp() {
			return (
				this.PERFORMANCE_NOW_PROBED ||
					((this.PERFORMANCE_NOW_PROBED = !0),
					(this.HAS_PERFORMANCE_NOW =
						u.global.performance && typeof u.global.performance.now == 'function')),
				this.HAS_PERFORMANCE_NOW ? u.global.performance.now() : Date.now()
			);
		}
	}
	(y.NEXT_ANONYMOUS_ID = 1),
		(y.PERFORMANCE_NOW_PROBED = !1),
		(y.HAS_PERFORMANCE_NOW = !1),
		(u.Utilities = y);
})(AMDLoader || (AMDLoader = {}));
var AMDLoader;
(function (u) {
	function y(h) {
		if (h instanceof Error) return h;
		const r = new Error(h.message || String(h) || 'Unknown Error');
		return h.stack && (r.stack = h.stack), r;
	}
	u.ensureError = y;
	class m {
		static validateConfigurationOptions(r) {
			function c(a) {
				if (a.phase === 'loading') {
					console.error('Loading "' + a.moduleId + '" failed'),
						console.error(a),
						console.error('Here are the modules that depend on it:'),
						console.error(a.neededBy);
					return;
				}
				if (a.phase === 'factory') {
					console.error('The factory function of "' + a.moduleId + '" has thrown an exception'),
						console.error(a),
						console.error('Here are the modules that depend on it:'),
						console.error(a.neededBy);
					return;
				}
			}
			if (
				((r = r || {}),
				typeof r.baseUrl != 'string' && (r.baseUrl = ''),
				typeof r.isBuild != 'boolean' && (r.isBuild = !1),
				typeof r.paths != 'object' && (r.paths = {}),
				typeof r.config != 'object' && (r.config = {}),
				typeof r.catchError > 'u' && (r.catchError = !1),
				typeof r.recordStats > 'u' && (r.recordStats = !1),
				typeof r.urlArgs != 'string' && (r.urlArgs = ''),
				typeof r.onError != 'function' && (r.onError = c),
				Array.isArray(r.ignoreDuplicateModules) || (r.ignoreDuplicateModules = []),
				r.baseUrl.length > 0 && (u.Utilities.endsWith(r.baseUrl, '/') || (r.baseUrl += '/')),
				typeof r.cspNonce != 'string' && (r.cspNonce = ''),
				typeof r.preferScriptTags > 'u' && (r.preferScriptTags = !1),
				r.nodeCachedData &&
					typeof r.nodeCachedData == 'object' &&
					(typeof r.nodeCachedData.seed != 'string' && (r.nodeCachedData.seed = 'seed'),
					(typeof r.nodeCachedData.writeDelay != 'number' || r.nodeCachedData.writeDelay < 0) &&
						(r.nodeCachedData.writeDelay = 1e3 * 7),
					!r.nodeCachedData.path || typeof r.nodeCachedData.path != 'string'))
			) {
				const a = y(new Error("INVALID cached data configuration, 'path' MUST be set"));
				(a.phase = 'configuration'), r.onError(a), (r.nodeCachedData = void 0);
			}
			return r;
		}
		static mergeConfigurationOptions(r = null, c = null) {
			let a = u.Utilities.recursiveClone(c || {});
			return (
				u.Utilities.forEachProperty(r, (t, e) => {
					t === 'ignoreDuplicateModules' && typeof a.ignoreDuplicateModules < 'u'
						? (a.ignoreDuplicateModules = a.ignoreDuplicateModules.concat(e))
						: t === 'paths' && typeof a.paths < 'u'
						? u.Utilities.forEachProperty(e, (i, s) => (a.paths[i] = s))
						: t === 'config' && typeof a.config < 'u'
						? u.Utilities.forEachProperty(e, (i, s) => (a.config[i] = s))
						: (a[t] = u.Utilities.recursiveClone(e));
				}),
				m.validateConfigurationOptions(a)
			);
		}
	}
	u.ConfigurationOptionsUtil = m;
	class p {
		constructor(r, c) {
			if (
				((this._env = r),
				(this.options = m.mergeConfigurationOptions(c)),
				this._createIgnoreDuplicateModulesMap(),
				this._createSortedPathsRules(),
				this.options.baseUrl === '' &&
					this.options.nodeRequire &&
					this.options.nodeRequire.main &&
					this.options.nodeRequire.main.filename &&
					this._env.isNode)
			) {
				let a = this.options.nodeRequire.main.filename,
					t = Math.max(a.lastIndexOf('/'), a.lastIndexOf('\\'));
				this.options.baseUrl = a.substring(0, t + 1);
			}
		}
		_createIgnoreDuplicateModulesMap() {
			this.ignoreDuplicateModulesMap = {};
			for (let r = 0; r < this.options.ignoreDuplicateModules.length; r++)
				this.ignoreDuplicateModulesMap[this.options.ignoreDuplicateModules[r]] = !0;
		}
		_createSortedPathsRules() {
			(this.sortedPathsRules = []),
				u.Utilities.forEachProperty(this.options.paths, (r, c) => {
					Array.isArray(c)
						? this.sortedPathsRules.push({ from: r, to: c })
						: this.sortedPathsRules.push({ from: r, to: [c] });
				}),
				this.sortedPathsRules.sort((r, c) => c.from.length - r.from.length);
		}
		cloneAndMerge(r) {
			return new p(this._env, m.mergeConfigurationOptions(r, this.options));
		}
		getOptionsLiteral() {
			return this.options;
		}
		_applyPaths(r) {
			let c;
			for (let a = 0, t = this.sortedPathsRules.length; a < t; a++)
				if (((c = this.sortedPathsRules[a]), u.Utilities.startsWith(r, c.from))) {
					let e = [];
					for (let i = 0, s = c.to.length; i < s; i++) e.push(c.to[i] + r.substr(c.from.length));
					return e;
				}
			return [r];
		}
		_addUrlArgsToUrl(r) {
			return u.Utilities.containsQueryString(r)
				? r + '&' + this.options.urlArgs
				: r + '?' + this.options.urlArgs;
		}
		_addUrlArgsIfNecessaryToUrl(r) {
			return this.options.urlArgs ? this._addUrlArgsToUrl(r) : r;
		}
		_addUrlArgsIfNecessaryToUrls(r) {
			if (this.options.urlArgs)
				for (let c = 0, a = r.length; c < a; c++) r[c] = this._addUrlArgsToUrl(r[c]);
			return r;
		}
		moduleIdToPaths(r) {
			if (
				this._env.isNode &&
				this.options.amdModulesPattern instanceof RegExp &&
				!this.options.amdModulesPattern.test(r)
			)
				return this.isBuild() ? ['empty:'] : ['node|' + r];
			let c = r,
				a;
			if (!u.Utilities.endsWith(c, '.js') && !u.Utilities.isAbsolutePath(c)) {
				a = this._applyPaths(c);
				for (let t = 0, e = a.length; t < e; t++)
					(this.isBuild() && a[t] === 'empty:') ||
						(u.Utilities.isAbsolutePath(a[t]) || (a[t] = this.options.baseUrl + a[t]),
						!u.Utilities.endsWith(a[t], '.js') &&
							!u.Utilities.containsQueryString(a[t]) &&
							(a[t] = a[t] + '.js'));
			} else
				!u.Utilities.endsWith(c, '.js') && !u.Utilities.containsQueryString(c) && (c = c + '.js'),
					(a = [c]);
			return this._addUrlArgsIfNecessaryToUrls(a);
		}
		requireToUrl(r) {
			let c = r;
			return (
				u.Utilities.isAbsolutePath(c) ||
					((c = this._applyPaths(c)[0]),
					u.Utilities.isAbsolutePath(c) || (c = this.options.baseUrl + c)),
				this._addUrlArgsIfNecessaryToUrl(c)
			);
		}
		isBuild() {
			return this.options.isBuild;
		}
		shouldInvokeFactory(r) {
			return !!(
				!this.options.isBuild ||
				u.Utilities.isAnonymousModule(r) ||
				(this.options.buildForceInvokeFactory && this.options.buildForceInvokeFactory[r])
			);
		}
		isDuplicateMessageIgnoredFor(r) {
			return this.ignoreDuplicateModulesMap.hasOwnProperty(r);
		}
		getConfigForModule(r) {
			if (this.options.config) return this.options.config[r];
		}
		shouldCatchError() {
			return this.options.catchError;
		}
		shouldRecordStats() {
			return this.options.recordStats;
		}
		onError(r) {
			this.options.onError(r);
		}
	}
	u.Configuration = p;
})(AMDLoader || (AMDLoader = {}));
var AMDLoader;
(function (u) {
	class y {
		constructor(e) {
			(this._env = e), (this._scriptLoader = null), (this._callbackMap = {});
		}
		load(e, i, s, n) {
			if (!this._scriptLoader)
				if (this._env.isWebWorker) this._scriptLoader = new h();
				else if (this._env.isElectronRenderer) {
					const { preferScriptTags: d } = e.getConfig().getOptionsLiteral();
					d ? (this._scriptLoader = new m()) : (this._scriptLoader = new r(this._env));
				} else
					this._env.isNode
						? (this._scriptLoader = new r(this._env))
						: (this._scriptLoader = new m());
			let l = { callback: s, errorback: n };
			if (this._callbackMap.hasOwnProperty(i)) {
				this._callbackMap[i].push(l);
				return;
			}
			(this._callbackMap[i] = [l]),
				this._scriptLoader.load(
					e,
					i,
					() => this.triggerCallback(i),
					(d) => this.triggerErrorback(i, d)
				);
		}
		triggerCallback(e) {
			let i = this._callbackMap[e];
			delete this._callbackMap[e];
			for (let s = 0; s < i.length; s++) i[s].callback();
		}
		triggerErrorback(e, i) {
			let s = this._callbackMap[e];
			delete this._callbackMap[e];
			for (let n = 0; n < s.length; n++) s[n].errorback(i);
		}
	}
	class m {
		attachListeners(e, i, s) {
			let n = () => {
					e.removeEventListener('load', l), e.removeEventListener('error', d);
				},
				l = (o) => {
					n(), i();
				},
				d = (o) => {
					n(), s(o);
				};
			e.addEventListener('load', l), e.addEventListener('error', d);
		}
		load(e, i, s, n) {
			if (/^node\|/.test(i)) {
				let l = e.getConfig().getOptionsLiteral(),
					d = c(e.getRecorder(), l.nodeRequire || u.global.nodeRequire),
					o = i.split('|'),
					_ = null;
				try {
					_ = d(o[1]);
				} catch (f) {
					n(f);
					return;
				}
				e.enqueueDefineAnonymousModule([], () => _), s();
			} else {
				let l = document.createElement('script');
				l.setAttribute('async', 'async'),
					l.setAttribute('type', 'text/javascript'),
					this.attachListeners(l, s, n);
				const { trustedTypesPolicy: d } = e.getConfig().getOptionsLiteral();
				d && (i = d.createScriptURL(i)), l.setAttribute('src', i);
				const { cspNonce: o } = e.getConfig().getOptionsLiteral();
				o && l.setAttribute('nonce', o), document.getElementsByTagName('head')[0].appendChild(l);
			}
		}
	}
	function p(t) {
		const { trustedTypesPolicy: e } = t.getConfig().getOptionsLiteral();
		try {
			return (e ? self.eval(e.createScript('', 'true')) : new Function('true')).call(self), !0;
		} catch {
			return !1;
		}
	}
	class h {
		constructor() {
			this._cachedCanUseEval = null;
		}
		_canUseEval(e) {
			return (
				this._cachedCanUseEval === null && (this._cachedCanUseEval = p(e)), this._cachedCanUseEval
			);
		}
		load(e, i, s, n) {
			if (/^node\|/.test(i)) {
				const l = e.getConfig().getOptionsLiteral(),
					d = c(e.getRecorder(), l.nodeRequire || u.global.nodeRequire),
					o = i.split('|');
				let _ = null;
				try {
					_ = d(o[1]);
				} catch (f) {
					n(f);
					return;
				}
				e.enqueueDefineAnonymousModule([], function () {
					return _;
				}),
					s();
			} else {
				const { trustedTypesPolicy: l } = e.getConfig().getOptionsLiteral();
				if (
					!(
						/^((http:)|(https:)|(file:))/.test(i) &&
						i.substring(0, self.origin.length) !== self.origin
					) &&
					this._canUseEval(e)
				) {
					fetch(i)
						.then((o) => {
							if (o.status !== 200) throw new Error(o.statusText);
							return o.text();
						})
						.then((o) => {
							(o = `${o}
//# sourceURL=${i}`),
								(l ? self.eval(l.createScript('', o)) : new Function(o)).call(self),
								s();
						})
						.then(void 0, n);
					return;
				}
				try {
					l && (i = l.createScriptURL(i)), importScripts(i), s();
				} catch (o) {
					n(o);
				}
			}
		}
	}
	class r {
		constructor(e) {
			(this._env = e), (this._didInitialize = !1), (this._didPatchNodeRequire = !1);
		}
		_init(e) {
			this._didInitialize ||
				((this._didInitialize = !0),
				(this._fs = e('fs')),
				(this._vm = e('vm')),
				(this._path = e('path')),
				(this._crypto = e('crypto')));
		}
		_initNodeRequire(e, i) {
			const { nodeCachedData: s } = i.getConfig().getOptionsLiteral();
			if (!s || this._didPatchNodeRequire) return;
			this._didPatchNodeRequire = !0;
			const n = this,
				l = e('module');
			function d(o) {
				const _ = o.constructor;
				let f = function (v) {
					try {
						return o.require(v);
					} finally {
					}
				};
				return (
					(f.resolve = function (v, E) {
						return _._resolveFilename(v, o, !1, E);
					}),
					(f.resolve.paths = function (v) {
						return _._resolveLookupPaths(v, o);
					}),
					(f.main = process.mainModule),
					(f.extensions = _._extensions),
					(f.cache = _._cache),
					f
				);
			}
			l.prototype._compile = function (o, _) {
				const f = l.wrap(o.replace(/^#!.*/, '')),
					g = i.getRecorder(),
					v = n._getCachedDataPath(s, _),
					E = { filename: _ };
				let I;
				try {
					const D = n._fs.readFileSync(v);
					(I = D.slice(0, 16)), (E.cachedData = D.slice(16)), g.record(60, v);
				} catch {
					g.record(61, v);
				}
				const C = new n._vm.Script(f, E),
					P = C.runInThisContext(E),
					w = n._path.dirname(_),
					R = d(this),
					U = [this.exports, R, this, _, w, process, _commonjsGlobal, Buffer],
					b = P.apply(this.exports, U);
				return (
					n._handleCachedData(C, f, v, !E.cachedData, i), n._verifyCachedData(C, f, v, I, i), b
				);
			};
		}
		load(e, i, s, n) {
			const l = e.getConfig().getOptionsLiteral(),
				d = c(e.getRecorder(), l.nodeRequire || u.global.nodeRequire),
				o =
					l.nodeInstrumenter ||
					function (f) {
						return f;
					};
			this._init(d), this._initNodeRequire(d, e);
			let _ = e.getRecorder();
			if (/^node\|/.test(i)) {
				let f = i.split('|'),
					g = null;
				try {
					g = d(f[1]);
				} catch (v) {
					n(v);
					return;
				}
				e.enqueueDefineAnonymousModule([], () => g), s();
			} else {
				i = u.Utilities.fileUriToFilePath(this._env.isWindows, i);
				const f = this._path.normalize(i),
					g = this._getElectronRendererScriptPathOrUri(f),
					v = !!l.nodeCachedData,
					E = v ? this._getCachedDataPath(l.nodeCachedData, i) : void 0;
				this._readSourceAndCachedData(f, E, _, (I, C, P, w) => {
					if (I) {
						n(I);
						return;
					}
					let R;
					C.charCodeAt(0) === r._BOM
						? (R = r._PREFIX + C.substring(1) + r._SUFFIX)
						: (R = r._PREFIX + C + r._SUFFIX),
						(R = o(R, f));
					const U = { filename: g, cachedData: P },
						b = this._createAndEvalScript(e, R, U, s, n);
					this._handleCachedData(b, R, E, v && !P, e), this._verifyCachedData(b, R, E, w, e);
				});
			}
		}
		_createAndEvalScript(e, i, s, n, l) {
			const d = e.getRecorder();
			d.record(31, s.filename);
			const o = new this._vm.Script(i, s),
				_ = o.runInThisContext(s),
				f = e.getGlobalAMDDefineFunc();
			let g = !1;
			const v = function () {
				return (g = !0), f.apply(null, arguments);
			};
			return (
				(v.amd = f.amd),
				_.call(
					u.global,
					e.getGlobalAMDRequireFunc(),
					v,
					s.filename,
					this._path.dirname(s.filename)
				),
				d.record(32, s.filename),
				g ? n() : l(new Error(`Didn't receive define call in ${s.filename}!`)),
				o
			);
		}
		_getElectronRendererScriptPathOrUri(e) {
			if (!this._env.isElectronRenderer) return e;
			let i = e.match(/^([a-z])\:(.*)/i);
			return i ? `file:///${(i[1].toUpperCase() + ':' + i[2]).replace(/\\/g, '/')}` : `file://${e}`;
		}
		_getCachedDataPath(e, i) {
			const s = this._crypto
					.createHash('md5')
					.update(i, 'utf8')
					.update(e.seed, 'utf8')
					.update(process.arch, '')
					.digest('hex'),
				n = this._path.basename(i).replace(/\.js$/, '');
			return this._path.join(e.path, `${n}-${s}.code`);
		}
		_handleCachedData(e, i, s, n, l) {
			e.cachedDataRejected
				? this._fs.unlink(s, (d) => {
						l.getRecorder().record(62, s),
							this._createAndWriteCachedData(e, i, s, l),
							d && l.getConfig().onError(d);
				  })
				: n && this._createAndWriteCachedData(e, i, s, l);
		}
		_createAndWriteCachedData(e, i, s, n) {
			let l = Math.ceil(
					n.getConfig().getOptionsLiteral().nodeCachedData.writeDelay * (1 + Math.random())
				),
				d = -1,
				o = 0,
				_;
			const f = () => {
				setTimeout(() => {
					_ || (_ = this._crypto.createHash('md5').update(i, 'utf8').digest());
					const g = e.createCachedData();
					if (!(g.length === 0 || g.length === d || o >= 5)) {
						if (g.length < d) {
							f();
							return;
						}
						(d = g.length),
							this._fs.writeFile(s, Buffer.concat([_, g]), (v) => {
								v && n.getConfig().onError(v), n.getRecorder().record(63, s), f();
							});
					}
				}, l * Math.pow(4, o++));
			};
			f();
		}
		_readSourceAndCachedData(e, i, s, n) {
			if (!i) this._fs.readFile(e, { encoding: 'utf8' }, n);
			else {
				let l,
					d,
					o,
					_ = 2;
				const f = (g) => {
					g ? n(g) : --_ === 0 && n(void 0, l, d, o);
				};
				this._fs.readFile(e, { encoding: 'utf8' }, (g, v) => {
					(l = v), f(g);
				}),
					this._fs.readFile(i, (g, v) => {
						!g && v && v.length > 0
							? ((o = v.slice(0, 16)), (d = v.slice(16)), s.record(60, i))
							: s.record(61, i),
							f();
					});
			}
		}
		_verifyCachedData(e, i, s, n, l) {
			n &&
				(e.cachedDataRejected ||
					setTimeout(() => {
						const d = this._crypto.createHash('md5').update(i, 'utf8').digest();
						n.equals(d) ||
							(l
								.getConfig()
								.onError(
									new Error(
										`FAILED TO VERIFY CACHED DATA, deleting stale '${s}' now, but a RESTART IS REQUIRED`
									)
								),
							this._fs.unlink(s, (o) => {
								o && l.getConfig().onError(o);
							}));
					}, Math.ceil(5e3 * (1 + Math.random()))));
		}
	}
	(r._BOM = 65279),
		(r._PREFIX = '(function (require, define, __filename, __dirname) { '),
		(r._SUFFIX = `
});`);
	function c(t, e) {
		if (e.__$__isRecorded) return e;
		const i = function (n) {
			t.record(33, n);
			try {
				return e(n);
			} finally {
				t.record(34, n);
			}
		};
		return (i.__$__isRecorded = !0), i;
	}
	u.ensureRecordedNodeRequire = c;
	function a(t) {
		return new y(t);
	}
	u.createScriptLoader = a;
})(AMDLoader || (AMDLoader = {}));
var AMDLoader;
(function (u) {
	class y {
		constructor(t) {
			let e = t.lastIndexOf('/');
			e !== -1 ? (this.fromModulePath = t.substr(0, e + 1)) : (this.fromModulePath = '');
		}
		static _normalizeModuleId(t) {
			let e = t,
				i;
			for (i = /\/\.\//; i.test(e); ) e = e.replace(i, '/');
			for (
				e = e.replace(/^\.\//g, ''),
					i = /\/(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//;
				i.test(e);

			)
				e = e.replace(i, '/');
			return (
				(e = e.replace(/^(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//, '')),
				e
			);
		}
		resolveModule(t) {
			let e = t;
			return (
				u.Utilities.isAbsolutePath(e) ||
					((u.Utilities.startsWith(e, './') || u.Utilities.startsWith(e, '../')) &&
						(e = y._normalizeModuleId(this.fromModulePath + e))),
				e
			);
		}
	}
	(y.ROOT = new y('')), (u.ModuleIdResolver = y);
	class m {
		constructor(t, e, i, s, n, l) {
			(this.id = t),
				(this.strId = e),
				(this.dependencies = i),
				(this._callback = s),
				(this._errorback = n),
				(this.moduleIdResolver = l),
				(this.exports = {}),
				(this.error = null),
				(this.exportsPassedIn = !1),
				(this.unresolvedDependenciesCount = this.dependencies.length),
				(this._isComplete = !1);
		}
		static _safeInvokeFunction(t, e) {
			try {
				return { returnedValue: t.apply(u.global, e), producedError: null };
			} catch (i) {
				return { returnedValue: null, producedError: i };
			}
		}
		static _invokeFactory(t, e, i, s) {
			return t.shouldInvokeFactory(e)
				? t.shouldCatchError()
					? this._safeInvokeFunction(i, s)
					: { returnedValue: i.apply(u.global, s), producedError: null }
				: { returnedValue: null, producedError: null };
		}
		complete(t, e, i, s) {
			this._isComplete = !0;
			let n = null;
			if (this._callback)
				if (typeof this._callback == 'function') {
					t.record(21, this.strId);
					let l = m._invokeFactory(e, this.strId, this._callback, i);
					(n = l.producedError),
						t.record(22, this.strId),
						!n &&
							typeof l.returnedValue < 'u' &&
							(!this.exportsPassedIn || u.Utilities.isEmpty(this.exports)) &&
							(this.exports = l.returnedValue);
				} else this.exports = this._callback;
			if (n) {
				let l = u.ensureError(n);
				(l.phase = 'factory'),
					(l.moduleId = this.strId),
					(l.neededBy = s(this.id)),
					(this.error = l),
					e.onError(l);
			}
			(this.dependencies = null),
				(this._callback = null),
				(this._errorback = null),
				(this.moduleIdResolver = null);
		}
		onDependencyError(t) {
			return (
				(this._isComplete = !0), (this.error = t), this._errorback ? (this._errorback(t), !0) : !1
			);
		}
		isComplete() {
			return this._isComplete;
		}
	}
	u.Module = m;
	class p {
		constructor() {
			(this._nextId = 0),
				(this._strModuleIdToIntModuleId = new Map()),
				(this._intModuleIdToStrModuleId = []),
				this.getModuleId('exports'),
				this.getModuleId('module'),
				this.getModuleId('require');
		}
		getMaxModuleId() {
			return this._nextId;
		}
		getModuleId(t) {
			let e = this._strModuleIdToIntModuleId.get(t);
			return (
				typeof e > 'u' &&
					((e = this._nextId++),
					this._strModuleIdToIntModuleId.set(t, e),
					(this._intModuleIdToStrModuleId[e] = t)),
				e
			);
		}
		getStrModuleId(t) {
			return this._intModuleIdToStrModuleId[t];
		}
	}
	class h {
		constructor(t) {
			this.id = t;
		}
	}
	(h.EXPORTS = new h(0)), (h.MODULE = new h(1)), (h.REQUIRE = new h(2)), (u.RegularDependency = h);
	class r {
		constructor(t, e, i) {
			(this.id = t), (this.pluginId = e), (this.pluginParam = i);
		}
	}
	u.PluginDependency = r;
	class c {
		constructor(t, e, i, s, n = 0) {
			(this._env = t),
				(this._scriptLoader = e),
				(this._loaderAvailableTimestamp = n),
				(this._defineFunc = i),
				(this._requireFunc = s),
				(this._moduleIdProvider = new p()),
				(this._config = new u.Configuration(this._env)),
				(this._hasDependencyCycle = !1),
				(this._modules2 = []),
				(this._knownModules2 = []),
				(this._inverseDependencies2 = []),
				(this._inversePluginDependencies2 = new Map()),
				(this._currentAnonymousDefineCall = null),
				(this._recorder = null),
				(this._buildInfoPath = []),
				(this._buildInfoDefineStack = []),
				(this._buildInfoDependencies = []),
				(this._requireFunc.moduleManager = this);
		}
		reset() {
			return new c(
				this._env,
				this._scriptLoader,
				this._defineFunc,
				this._requireFunc,
				this._loaderAvailableTimestamp
			);
		}
		getGlobalAMDDefineFunc() {
			return this._defineFunc;
		}
		getGlobalAMDRequireFunc() {
			return this._requireFunc;
		}
		static _findRelevantLocationInStack(t, e) {
			let i = (l) => l.replace(/\\/g, '/'),
				s = i(t),
				n = e.split(/\n/);
			for (let l = 0; l < n.length; l++) {
				let d = n[l].match(/(.*):(\d+):(\d+)\)?$/);
				if (d) {
					let o = d[1],
						_ = d[2],
						f = d[3],
						g = Math.max(o.lastIndexOf(' ') + 1, o.lastIndexOf('(') + 1);
					if (((o = o.substr(g)), (o = i(o)), o === s)) {
						let v = { line: parseInt(_, 10), col: parseInt(f, 10) };
						return v.line === 1 && (v.col -= 53), v;
					}
				}
			}
			throw new Error('Could not correlate define call site for needle ' + t);
		}
		getBuildInfo() {
			if (!this._config.isBuild()) return null;
			let t = [],
				e = 0;
			for (let i = 0, s = this._modules2.length; i < s; i++) {
				let n = this._modules2[i];
				if (!n) continue;
				let l = this._buildInfoPath[n.id] || null,
					d = this._buildInfoDefineStack[n.id] || null,
					o = this._buildInfoDependencies[n.id];
				t[e++] = {
					id: n.strId,
					path: l,
					defineLocation: l && d ? c._findRelevantLocationInStack(l, d) : null,
					dependencies: o,
					shim: null,
					exports: n.exports
				};
			}
			return t;
		}
		getRecorder() {
			return (
				this._recorder ||
					(this._config.shouldRecordStats()
						? (this._recorder = new u.LoaderEventRecorder(this._loaderAvailableTimestamp))
						: (this._recorder = u.NullLoaderEventRecorder.INSTANCE)),
				this._recorder
			);
		}
		getLoaderEvents() {
			return this.getRecorder().getEvents();
		}
		enqueueDefineAnonymousModule(t, e) {
			if (this._currentAnonymousDefineCall !== null)
				throw new Error('Can only have one anonymous define call per script file');
			let i = null;
			this._config.isBuild() && (i = new Error('StackLocation').stack || null),
				(this._currentAnonymousDefineCall = { stack: i, dependencies: t, callback: e });
		}
		defineModule(t, e, i, s, n, l = new y(t)) {
			let d = this._moduleIdProvider.getModuleId(t);
			if (this._modules2[d]) {
				this._config.isDuplicateMessageIgnoredFor(t) ||
					console.warn("Duplicate definition of module '" + t + "'");
				return;
			}
			let o = new m(d, t, this._normalizeDependencies(e, l), i, s, l);
			(this._modules2[d] = o),
				this._config.isBuild() &&
					((this._buildInfoDefineStack[d] = n),
					(this._buildInfoDependencies[d] = (o.dependencies || []).map((_) =>
						this._moduleIdProvider.getStrModuleId(_.id)
					))),
				this._resolve(o);
		}
		_normalizeDependency(t, e) {
			if (t === 'exports') return h.EXPORTS;
			if (t === 'module') return h.MODULE;
			if (t === 'require') return h.REQUIRE;
			let i = t.indexOf('!');
			if (i >= 0) {
				let s = e.resolveModule(t.substr(0, i)),
					n = e.resolveModule(t.substr(i + 1)),
					l = this._moduleIdProvider.getModuleId(s + '!' + n),
					d = this._moduleIdProvider.getModuleId(s);
				return new r(l, d, n);
			}
			return new h(this._moduleIdProvider.getModuleId(e.resolveModule(t)));
		}
		_normalizeDependencies(t, e) {
			let i = [],
				s = 0;
			for (let n = 0, l = t.length; n < l; n++) i[s++] = this._normalizeDependency(t[n], e);
			return i;
		}
		_relativeRequire(t, e, i, s) {
			if (typeof e == 'string') return this.synchronousRequire(e, t);
			this.defineModule(u.Utilities.generateAnonymousModule(), e, i, s, null, t);
		}
		synchronousRequire(t, e = new y(t)) {
			let i = this._normalizeDependency(t, e),
				s = this._modules2[i.id];
			if (!s)
				throw new Error(
					"Check dependency list! Synchronous require cannot resolve module '" +
						t +
						"'. This is the first mention of this module!"
				);
			if (!s.isComplete())
				throw new Error(
					"Check dependency list! Synchronous require cannot resolve module '" +
						t +
						"'. This module has not been resolved completely yet."
				);
			if (s.error) throw s.error;
			return s.exports;
		}
		configure(t, e) {
			let i = this._config.shouldRecordStats();
			e
				? (this._config = new u.Configuration(this._env, t))
				: (this._config = this._config.cloneAndMerge(t)),
				this._config.shouldRecordStats() && !i && (this._recorder = null);
		}
		getConfig() {
			return this._config;
		}
		_onLoad(t) {
			if (this._currentAnonymousDefineCall !== null) {
				let e = this._currentAnonymousDefineCall;
				(this._currentAnonymousDefineCall = null),
					this.defineModule(
						this._moduleIdProvider.getStrModuleId(t),
						e.dependencies,
						e.callback,
						null,
						e.stack
					);
			}
		}
		_createLoadError(t, e) {
			let i = this._moduleIdProvider.getStrModuleId(t),
				s = (this._inverseDependencies2[t] || []).map((l) =>
					this._moduleIdProvider.getStrModuleId(l)
				);
			const n = u.ensureError(e);
			return (n.phase = 'loading'), (n.moduleId = i), (n.neededBy = s), n;
		}
		_onLoadError(t, e) {
			const i = this._createLoadError(t, e);
			this._modules2[t] ||
				(this._modules2[t] = new m(
					t,
					this._moduleIdProvider.getStrModuleId(t),
					[],
					() => {},
					null,
					null
				));
			let s = [];
			for (let d = 0, o = this._moduleIdProvider.getMaxModuleId(); d < o; d++) s[d] = !1;
			let n = !1,
				l = [];
			for (l.push(t), s[t] = !0; l.length > 0; ) {
				let d = l.shift(),
					o = this._modules2[d];
				o && (n = o.onDependencyError(i) || n);
				let _ = this._inverseDependencies2[d];
				if (_)
					for (let f = 0, g = _.length; f < g; f++) {
						let v = _[f];
						s[v] || (l.push(v), (s[v] = !0));
					}
			}
			n || this._config.onError(i);
		}
		_hasDependencyPath(t, e) {
			let i = this._modules2[t];
			if (!i) return !1;
			let s = [];
			for (let l = 0, d = this._moduleIdProvider.getMaxModuleId(); l < d; l++) s[l] = !1;
			let n = [];
			for (n.push(i), s[t] = !0; n.length > 0; ) {
				let d = n.shift().dependencies;
				if (d)
					for (let o = 0, _ = d.length; o < _; o++) {
						let f = d[o];
						if (f.id === e) return !0;
						let g = this._modules2[f.id];
						g && !s[f.id] && ((s[f.id] = !0), n.push(g));
					}
			}
			return !1;
		}
		_findCyclePath(t, e, i) {
			if (t === e || i === 50) return [t];
			let s = this._modules2[t];
			if (!s) return null;
			let n = s.dependencies;
			if (n)
				for (let l = 0, d = n.length; l < d; l++) {
					let o = this._findCyclePath(n[l].id, e, i + 1);
					if (o !== null) return o.push(t), o;
				}
			return null;
		}
		_createRequire(t) {
			let e = (i, s, n) => this._relativeRequire(t, i, s, n);
			return (
				(e.toUrl = (i) => this._config.requireToUrl(t.resolveModule(i))),
				(e.getStats = () => this.getLoaderEvents()),
				(e.hasDependencyCycle = () => this._hasDependencyCycle),
				(e.config = (i, s = !1) => {
					this.configure(i, s);
				}),
				(e.__$__nodeRequire = u.global.nodeRequire),
				e
			);
		}
		_loadModule(t) {
			if (this._modules2[t] || this._knownModules2[t]) return;
			this._knownModules2[t] = !0;
			let e = this._moduleIdProvider.getStrModuleId(t),
				i = this._config.moduleIdToPaths(e),
				s = /^@[^\/]+\/[^\/]+$/;
			this._env.isNode && (e.indexOf('/') === -1 || s.test(e)) && i.push('node|' + e);
			let n = -1,
				l = (d) => {
					if ((n++, n >= i.length)) this._onLoadError(t, d);
					else {
						let o = i[n],
							_ = this.getRecorder();
						if (this._config.isBuild() && o === 'empty:') {
							(this._buildInfoPath[t] = o),
								this.defineModule(this._moduleIdProvider.getStrModuleId(t), [], null, null, null),
								this._onLoad(t);
							return;
						}
						_.record(10, o),
							this._scriptLoader.load(
								this,
								o,
								() => {
									this._config.isBuild() && (this._buildInfoPath[t] = o),
										_.record(11, o),
										this._onLoad(t);
								},
								(f) => {
									_.record(12, o), l(f);
								}
							);
					}
				};
			l(null);
		}
		_loadPluginDependency(t, e) {
			if (this._modules2[e.id] || this._knownModules2[e.id]) return;
			this._knownModules2[e.id] = !0;
			let i = (s) => {
				this.defineModule(this._moduleIdProvider.getStrModuleId(e.id), [], s, null, null);
			};
			(i.error = (s) => {
				this._config.onError(this._createLoadError(e.id, s));
			}),
				t.load(e.pluginParam, this._createRequire(y.ROOT), i, this._config.getOptionsLiteral());
		}
		_resolve(t) {
			let e = t.dependencies;
			if (e)
				for (let i = 0, s = e.length; i < s; i++) {
					let n = e[i];
					if (n === h.EXPORTS) {
						(t.exportsPassedIn = !0), t.unresolvedDependenciesCount--;
						continue;
					}
					if (n === h.MODULE) {
						t.unresolvedDependenciesCount--;
						continue;
					}
					if (n === h.REQUIRE) {
						t.unresolvedDependenciesCount--;
						continue;
					}
					let l = this._modules2[n.id];
					if (l && l.isComplete()) {
						if (l.error) {
							t.onDependencyError(l.error);
							return;
						}
						t.unresolvedDependenciesCount--;
						continue;
					}
					if (this._hasDependencyPath(n.id, t.id)) {
						(this._hasDependencyCycle = !0),
							console.warn(
								"There is a dependency cycle between '" +
									this._moduleIdProvider.getStrModuleId(n.id) +
									"' and '" +
									this._moduleIdProvider.getStrModuleId(t.id) +
									"'. The cyclic path follows:"
							);
						let d = this._findCyclePath(n.id, t.id, 0) || [];
						d.reverse(),
							d.push(n.id),
							console.warn(
								d.map((o) => this._moduleIdProvider.getStrModuleId(o)).join(` => 
`)
							),
							t.unresolvedDependenciesCount--;
						continue;
					}
					if (
						((this._inverseDependencies2[n.id] = this._inverseDependencies2[n.id] || []),
						this._inverseDependencies2[n.id].push(t.id),
						n instanceof r)
					) {
						let d = this._modules2[n.pluginId];
						if (d && d.isComplete()) {
							this._loadPluginDependency(d.exports, n);
							continue;
						}
						let o = this._inversePluginDependencies2.get(n.pluginId);
						o || ((o = []), this._inversePluginDependencies2.set(n.pluginId, o)),
							o.push(n),
							this._loadModule(n.pluginId);
						continue;
					}
					this._loadModule(n.id);
				}
			t.unresolvedDependenciesCount === 0 && this._onModuleComplete(t);
		}
		_onModuleComplete(t) {
			let e = this.getRecorder();
			if (t.isComplete()) return;
			let i = t.dependencies,
				s = [];
			if (i)
				for (let o = 0, _ = i.length; o < _; o++) {
					let f = i[o];
					if (f === h.EXPORTS) {
						s[o] = t.exports;
						continue;
					}
					if (f === h.MODULE) {
						s[o] = { id: t.strId, config: () => this._config.getConfigForModule(t.strId) };
						continue;
					}
					if (f === h.REQUIRE) {
						s[o] = this._createRequire(t.moduleIdResolver);
						continue;
					}
					let g = this._modules2[f.id];
					if (g) {
						s[o] = g.exports;
						continue;
					}
					s[o] = null;
				}
			const n = (o) =>
				(this._inverseDependencies2[o] || []).map((_) => this._moduleIdProvider.getStrModuleId(_));
			t.complete(e, this._config, s, n);
			let l = this._inverseDependencies2[t.id];
			if (((this._inverseDependencies2[t.id] = null), l))
				for (let o = 0, _ = l.length; o < _; o++) {
					let f = l[o],
						g = this._modules2[f];
					g.unresolvedDependenciesCount--,
						g.unresolvedDependenciesCount === 0 && this._onModuleComplete(g);
				}
			let d = this._inversePluginDependencies2.get(t.id);
			if (d) {
				this._inversePluginDependencies2.delete(t.id);
				for (let o = 0, _ = d.length; o < _; o++) this._loadPluginDependency(t.exports, d[o]);
			}
		}
	}
	u.ModuleManager = c;
})(AMDLoader || (AMDLoader = {}));
var define, AMDLoader;
(function (u) {
	const y = new u.Environment();
	let m = null;
	const p = function (a, t, e) {
		typeof a != 'string' && ((e = t), (t = a), (a = null)),
			(typeof t != 'object' || !Array.isArray(t)) && ((e = t), (t = null)),
			t || (t = ['require', 'exports', 'module']),
			a ? m.defineModule(a, t, e, null, null) : m.enqueueDefineAnonymousModule(t, e);
	};
	p.amd = { jQuery: !0 };
	const h = function (a, t = !1) {
			m.configure(a, t);
		},
		r = function () {
			if (arguments.length === 1) {
				if (arguments[0] instanceof Object && !Array.isArray(arguments[0])) {
					h(arguments[0]);
					return;
				}
				if (typeof arguments[0] == 'string') return m.synchronousRequire(arguments[0]);
			}
			if ((arguments.length === 2 || arguments.length === 3) && Array.isArray(arguments[0])) {
				m.defineModule(
					u.Utilities.generateAnonymousModule(),
					arguments[0],
					arguments[1],
					arguments[2],
					null
				);
				return;
			}
			throw new Error('Unrecognized require call');
		};
	(r.config = h),
		(r.getConfig = function () {
			return m.getConfig().getOptionsLiteral();
		}),
		(r.reset = function () {
			m = m.reset();
		}),
		(r.getBuildInfo = function () {
			return m.getBuildInfo();
		}),
		(r.getStats = function () {
			return m.getLoaderEvents();
		}),
		(r.define = p);
	function c() {
		if (typeof u.global.require < 'u' || typeof require < 'u') {
			const a = u.global.require || require;
			if (typeof a == 'function' && typeof a.resolve == 'function') {
				const t = u.ensureRecordedNodeRequire(m.getRecorder(), a);
				(u.global.nodeRequire = t), (r.nodeRequire = t), (r.__$__nodeRequire = t);
			}
		}
		y.isNode && !y.isElectronRenderer && !y.isElectronNodeIntegrationWebWorker
			? (module.exports = r)
			: (y.isElectronRenderer || (u.global.define = p), (u.global.require = r));
	}
	(u.init = c),
		(typeof u.global.define != 'function' || !u.global.define.amd) &&
			((m = new u.ModuleManager(
				y,
				u.createScriptLoader(y),
				p,
				r,
				u.Utilities.getHighPerformanceTimestamp()
			)),
			typeof u.global.require < 'u' &&
				typeof u.global.require != 'function' &&
				r.config(u.global.require),
			(define = function () {
				return p.apply(null, arguments);
			}),
			(define.amd = p.amd),
			typeof doNotInitLoader > 'u' && c());
})(AMDLoader || (AMDLoader = {}));

//# sourceMappingURL=../../min-maps/vs/loader.js.map
