'use strict';
const strtok3 = require('strtok3');
const core = require('./core');

async function fromFile(path) {
	const tokenizer = await strtok3.fromFile(path);
	try {
		return await core.fromTokenizer(tokenizer);
	} finally {
		await tokenizer.close();
	}
}

const fileType = {
	fromFile
};

Object.assign(fileType, core);

Object.defineProperty(fileType, 'extensions', {
	get() {
		return core.extensions;
	}
});

Object.defineProperty(fileType, 'mimeTypes', {
	get() {
		return core.mimeTypes;
	}
});

module.exports = fileType;
