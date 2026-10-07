/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
"use strict";

const SourceNode = require("source-map").SourceNode;
const SourceListMap = require("source-list-map").SourceListMap;
const Source = require("./Source");

class ConcatSource extends Source {
	constructor() {
		super();
		this.children = [];
		for(var i = 0; i < arguments.length; i++) {
			var item = arguments[i];
			if(item instanceof ConcatSource) {
				var children = item.children;
				for(var j = 0; j < children.length; j++)
					this.children.push(children[j]);
			} else {
				this.children.push(item);
			}
		}
	}

	add(item) {
		if(item instanceof ConcatSource) {
			var children = item.children;
			for(var j = 0; j < children.length; j++)
				this.children.push(children[j]);
		} else {
			this.children.push(item);
		}
	}

	source() {
		let source = "";
		const children = this.children;
		for(let i = 0; i < children.length; i++) {
			const child = children[i];
			source += typeof child === "string" ? child : child.source();
		}
		return source;
	}

	size() {
		let size = 0;
		const children = this.children;
		for(let i = 0; i < children.length; i++) {
			const child = children[i];
			size += typeof child === "string" ? child.length : child.size();
		}
		return size;
	}

	node(options) {
		const node = new SourceNode(null, null, null, this.children.map(function(item) {
			return typeof item === "string" ? item : item.node(options);
		}));
		return node;
	}

	listMap(options) {
		const map = new SourceListMap();
		var children = this.children;
		for(var i = 0; i < children.length; i++) {
			var item = children[i];
			if(typeof item === "string")
				map.add(item);
			else
				map.add(item.listMap(options));
		}
		return map;
	}

	updateHash(hash) {
		var children = this.children;
		for(var i = 0; i < children.length; i++) {
			var item = children[i];
			if(typeof item === "string")
				hash.update(item);
			else
				item.updateHash(hash);
		}
	}
}

require("./SourceAndMapMixin")(ConcatSource.prototype);

module.exports = ConcatSource;
