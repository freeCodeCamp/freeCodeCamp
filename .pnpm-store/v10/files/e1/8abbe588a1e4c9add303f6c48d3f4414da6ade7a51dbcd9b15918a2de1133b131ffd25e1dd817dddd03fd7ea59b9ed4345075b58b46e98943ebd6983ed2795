/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
"use strict";

var SourceNode = require("source-map").SourceNode;
var SourceMapConsumer = require("source-map").SourceMapConsumer;
var SourceListMap = require("source-list-map").SourceListMap;
var Source = require("./Source");

class LineToLineMappedSource extends Source {
	constructor(value, name, originalSource) {
		super();
		this._value = value;
		this._name = name;
		this._originalSource = originalSource;
	}

	source() {
		return this._value;
	}

	node(options) {
		var value = this._value;
		var name = this._name;
		var lines = value.split("\n");
		var node = new SourceNode(null, null, null,
			lines.map(function(line, idx) {
				return new SourceNode(idx + 1, 0, name, (line + (idx != lines.length - 1 ? "\n" : "")));
			})
		);
		node.setSourceContent(name, this._originalSource);
		return node;
	}

	listMap(options) {
		return new SourceListMap(this._value, this._name, this._originalSource)
	}

	updateHash(hash) {
		hash.update(this._value);
		hash.update(this._originalSource);
	}
}

require("./SourceAndMapMixin")(LineToLineMappedSource.prototype);

module.exports = LineToLineMappedSource;
