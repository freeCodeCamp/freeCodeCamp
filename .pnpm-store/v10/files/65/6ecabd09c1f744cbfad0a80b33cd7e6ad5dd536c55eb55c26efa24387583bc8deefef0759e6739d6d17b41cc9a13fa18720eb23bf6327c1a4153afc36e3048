"use strict";

var ensureString      = require("type/string/ensure")
  , objHasOwnProperty = Object.prototype.hasOwnProperty;

var capitalLetters = {
	A: true,
	B: true,
	C: true,
	D: true,
	E: true,
	F: true,
	G: true,
	H: true,
	I: true,
	J: true,
	K: true,
	L: true,
	M: true,
	N: true,
	O: true,
	P: true,
	Q: true,
	R: true,
	S: true,
	T: true,
	U: true,
	V: true,
	W: true,
	X: true,
	Y: true,
	Z: true
};

module.exports = function () {
	var input = ensureString(this);
	if (!input) return input;
	var outputLetters = [];
	for (var index = 0, letter; (letter = input[index]); ++index) {
		if (objHasOwnProperty.call(capitalLetters, letter)) {
			if (index) outputLetters.push("-");
			outputLetters.push(letter.toLowerCase());
		} else {
			outputLetters.push(letter);
		}
	}

	return outputLetters.join("");
};
