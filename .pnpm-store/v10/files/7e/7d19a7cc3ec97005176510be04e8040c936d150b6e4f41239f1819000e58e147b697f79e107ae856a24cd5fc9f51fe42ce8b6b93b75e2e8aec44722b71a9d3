/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
"use strict";

exports.getNumberOfLines = function getNumberOfLines(str) {
	let nr = -1;
	let idx = -1;
	do {
		nr++
		idx = str.indexOf("\n", idx + 1);
	} while(idx >= 0);
	return nr;
};

exports.getUnfinishedLine = function getUnfinishedLine(str) {
	const idx = str.lastIndexOf("\n");
	if(idx === -1)
		return str.length;
	else
		return str.length - idx - 1;
};
