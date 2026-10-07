/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
"use strict";

var SourceNode = require("source-map").SourceNode;
var SourceMapConsumer = require("source-map").SourceMapConsumer;

class Source {

	source() {
		throw new Error("Abstract");
	}

	size() {
		if(Buffer.from.length === 1) return new Buffer(this.source()).length;
		return Buffer.byteLength(this.source())
	}

	map(options) {
		return null;
	}

	sourceAndMap(options) {
		return {
			source: this.source(),
			map: this.map()
		};
	}

	node() {
		throw new Error("Abstract");
	}

	listNode() {
		throw new Error("Abstract");
	}

	updateHash(hash) {
		var source = this.source();
		hash.update(source || "");
	}
}

module.exports = Source;
