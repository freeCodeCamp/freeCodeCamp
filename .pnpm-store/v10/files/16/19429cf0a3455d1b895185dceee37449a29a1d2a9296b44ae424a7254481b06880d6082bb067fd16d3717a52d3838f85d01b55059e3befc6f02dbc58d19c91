/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
"use strict";

const Source = require("./Source");

class CachedSource extends Source {
	constructor(source) {
		super();
		this._source = source;
		this._cachedSource = undefined;
		this._cachedSize = undefined;
		this._cachedMaps = {};

		if(source.node) this.node = function(options) {
			return this._source.node(options);
		};

		if(source.listMap) this.listMap = function(options) {
			return this._source.listMap(options);
		};
	}

	source() {
		if(typeof this._cachedSource !== "undefined") return this._cachedSource;
		return this._cachedSource = this._source.source();
	}

	size() {
		if(typeof this._cachedSize !== "undefined") return this._cachedSize;
		if(typeof this._cachedSource !== "undefined") {
			if(Buffer.from.length === 1) return new Buffer(this._cachedSource).length;
			return this._cachedSize = Buffer.byteLength(this._cachedSource);
		}
		return this._cachedSize = this._source.size();
	}

	sourceAndMap(options) {
		const key = JSON.stringify(options);
		if(typeof this._cachedSource !== "undefined" && key in this._cachedMaps)
			return {
				source: this._cachedSource,
				map: this._cachedMaps[key]
			};
		else if(typeof this._cachedSource !== "undefined") {
			return {
				source: this._cachedSource,
				map: this._cachedMaps[key] = this._source.map(options)
			};
		} else if(key in this._cachedMaps) {
			return {
				source: this._cachedSource = this._source.source(),
				map: this._cachedMaps[key]
			};
		}
		const result = this._source.sourceAndMap(options);
		this._cachedSource = result.source;
		this._cachedMaps[key] = result.map;
		return {
			source: this._cachedSource,
			map: this._cachedMaps[key]
		};
	}

	map(options) {
		if(!options) options = {};
		const key = JSON.stringify(options);
		if(key in this._cachedMaps)
			return this._cachedMaps[key];
		return this._cachedMaps[key] = this._source.map();
	}

	updateHash(hash) {
		this._source.updateHash(hash);
	}
}

module.exports = CachedSource;
