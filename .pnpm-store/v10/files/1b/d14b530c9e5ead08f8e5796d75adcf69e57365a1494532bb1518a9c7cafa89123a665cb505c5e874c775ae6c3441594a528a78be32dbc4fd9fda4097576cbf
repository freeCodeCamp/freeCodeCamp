#!/usr/bin/env node

const { dirname } = require('path');
const { fileURLToPath } = require('url');
const { exec } = require('child_process');

process.chdir(dirname(__dirname));
exec('prebuildify-ci download', (error, stdout, stderr) => {
	console.error(stderr);
	console.log(stdout);
	if (error?.code)
		process.exit(error.code);
});
