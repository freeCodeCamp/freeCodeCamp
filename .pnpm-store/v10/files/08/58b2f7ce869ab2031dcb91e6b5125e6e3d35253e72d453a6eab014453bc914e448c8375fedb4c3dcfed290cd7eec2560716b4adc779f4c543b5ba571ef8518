/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
"use strict";

class MappingsContext {
	constructor() {
		this.sourcesIndices = new Map();
		this.sourcesContent = new Map();
		this.hasSourceContent = false;
		this.currentOriginalLine = 1;
		this.currentSource = 0;
		this.unfinishedGeneratedLine = false;
	}

	ensureSource(source, originalSource) {
		let idx = this.sourcesIndices.get(source);
		if(typeof idx === "number") {
			return idx;
		}
		idx = this.sourcesIndices.size;
		this.sourcesIndices.set(source, idx);
		this.sourcesContent.set(source, originalSource)
		if(typeof originalSource === "string")
			this.hasSourceContent = true;
		return idx;
	}

	getArrays() {
		const sources = [];
		const sourcesContent = [];

		for(const pair of this.sourcesContent) {
			sources.push(pair[0]);
			sourcesContent.push(pair[1]);
		}

		return {
			sources,
			sourcesContent
		};
	}
}
module.exports = MappingsContext;
