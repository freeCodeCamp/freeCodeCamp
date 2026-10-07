/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
"use strict";

var Source = require("./Source");
var SourceNode = require("source-map").SourceNode;

var REPLACE_REGEX = /\n(?=.|\s)/g;

function cloneAndPrefix(node, prefix, append) {
	if(typeof node === "string") {
		var result = node.replace(REPLACE_REGEX, "\n" + prefix);
		if(append.length > 0) result = append.pop() + result;
		if(/\n$/.test(node)) append.push(prefix);
		return result;
	} else {
		var newNode = new SourceNode(
			node.line,
			node.column,
			node.source,
			node.children.map(function(node) {
				return cloneAndPrefix(node, prefix, append);
			}),
			node.name
		);
		newNode.sourceContents = node.sourceContents;
		return newNode;
	}
};

class PrefixSource extends Source {
	constructor(prefix, source) {
		super();
		this._source = source;
		this._prefix = prefix;
	}

	source() {
		var node = typeof this._source === "string" ? this._source : this._source.source();
		var prefix = this._prefix;
		return prefix + node.replace(REPLACE_REGEX, "\n" + prefix);
	}

	node(options) {
		var node = this._source.node(options);
		var prefix = this._prefix;
		var output = [];
		var result = new SourceNode();
		node.walkSourceContents(function(source, content) {
			result.setSourceContent(source, content);
		});
		var needPrefix = true;
		node.walk(function(chunk, mapping) {
			var parts = chunk.split(/(\n)/);
			for(var i = 0; i < parts.length; i += 2) {
				var nl = i + 1 < parts.length;
				var part = parts[i] + (nl ? "\n" : "");
				if(part) {
					if(needPrefix) {
						output.push(prefix);
					}
					output.push(new SourceNode(mapping.line, mapping.column, mapping.source, part, mapping.name));
					needPrefix = nl;
				}
			}
		});
		result.add(output);
		return result;
	}

	listMap(options) {
		var prefix = this._prefix;
		var map = this._source.listMap(options);
		return map.mapGeneratedCode(function(code) {
			return prefix + code.replace(REPLACE_REGEX, "\n" + prefix);
		});
	}

	updateHash(hash) {
		if(typeof this._source === "string")
			hash.update(this._source);
		else
			this._source.updateHash(hash);
		if(typeof this._prefix === "string")
			hash.update(this._prefix);
		else
			this._prefix.updateHash(hash);
	}
}

require("./SourceAndMapMixin")(PrefixSource.prototype);

module.exports = PrefixSource;
