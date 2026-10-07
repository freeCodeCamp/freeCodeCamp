/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
"use strict";

var SourceNode = require("source-map").SourceNode;
var SourceMapConsumer = require("source-map").SourceMapConsumer;
var SourceMapGenerator = require("source-map").SourceMapGenerator;
var SourceListMap = require("source-list-map").SourceListMap;
var fromStringWithSourceMap = require("source-list-map").fromStringWithSourceMap;
var Source = require("./Source");
var applySourceMap = require("./applySourceMap");

class SourceMapSource extends Source {
	constructor(value, name, sourceMap, originalSource, innerSourceMap, removeOriginalSource) {
		super();
		this._value = value;
		this._name = name;
		this._sourceMap = sourceMap;
		this._originalSource = originalSource;
		this._innerSourceMap = innerSourceMap;
		this._removeOriginalSource = removeOriginalSource;
	}

	source() {
		return this._value;
	}

	node(options) {
		var sourceMap = this._sourceMap;
		var node = SourceNode.fromStringWithSourceMap(this._value, new SourceMapConsumer(sourceMap));
		node.setSourceContent(this._name, this._originalSource);
		var innerSourceMap = this._innerSourceMap;
		if(innerSourceMap) {
			node = applySourceMap(node, new SourceMapConsumer(innerSourceMap), this._name, this._removeOriginalSource);
		}
		return node;
	}

	listMap(options) {
		options = options || {};
		if(options.module === false)
			return new SourceListMap(this._value, this._name, this._value);
		return fromStringWithSourceMap(this._value, typeof this._sourceMap === "string" ? JSON.parse(this._sourceMap) : this._sourceMap);
	}

	updateHash(hash) {
		hash.update(this._value);
		if(this._originalSource)
			hash.update(this._originalSource);
	}
}

require("./SourceAndMapMixin")(SourceMapSource.prototype);

module.exports = SourceMapSource;
