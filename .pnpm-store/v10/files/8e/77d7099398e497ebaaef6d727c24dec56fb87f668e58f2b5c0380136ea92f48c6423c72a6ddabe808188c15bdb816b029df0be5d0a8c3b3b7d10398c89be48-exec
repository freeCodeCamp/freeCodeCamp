#!/usr/bin/env node
const fs = require('fs');
const cssesc = require('../cssesc.js');
const strings = process.argv.splice(2);
const stdin = process.stdin;
const options = {};
const log = console.log;

const main = function() {
	const option = strings[0];

	if (/^(?:-h|--help|undefined)$/.test(option)) {
		log(
			'cssesc v%s - https://mths.be/cssesc',
			cssesc.version
		);
		log([
			'\nUsage:\n',
			'\tcssesc [string]',
			'\tcssesc [-i | --identifier] [string]',
			'\tcssesc [-s | --single-quotes] [string]',
			'\tcssesc [-d | --double-quotes] [string]',
			'\tcssesc [-w | --wrap] [string]',
			'\tcssesc [-e | --escape-everything] [string]',
			'\tcssesc [-v | --version]',
			'\tcssesc [-h | --help]',
			'\nExamples:\n',
			'\tcssesc \'f\xF6o \u2665 b\xE5r \uD834\uDF06 baz\'',
			'\tcssesc --identifier \'f\xF6o \u2665 b\xE5r \uD834\uDF06 baz\'',
			'\tcssesc --escape-everything \'f\xF6o \u2665 b\xE5r \uD834\uDF06 baz\'',
			'\tcssesc --double-quotes --wrap \'f\xF6o \u2665 b\xE5r \uD834\uDF06 baz\'',
			'\techo \'f\xF6o \u2665 b\xE5r \uD834\uDF06 baz\' | cssesc'
		].join('\n'));
		return process.exit(1);
	}

	if (/^(?:-v|--version)$/.test(option)) {
		log('v%s', cssesc.version);
		return process.exit(1);
	}

	strings.forEach(function(string) {
		// Process options
		if (/^(?:-i|--identifier)$/.test(string)) {
			options.isIdentifier = true;
			return;
		}
		if (/^(?:-s|--single-quotes)$/.test(string)) {
			options.quotes = 'single';
			return;
		}
		if (/^(?:-d|--double-quotes)$/.test(string)) {
			options.quotes = 'double';
			return;
		}
		if (/^(?:-w|--wrap)$/.test(string)) {
			options.wrap = true;
			return;
		}
		if (/^(?:-e|--escape-everything)$/.test(string)) {
			options.escapeEverything = true;
			return;
		}

		// Process string(s)
		let result;
		try {
			result = cssesc(string, options);
			log(result);
		} catch (exception) {
			log(exception.message + '\n');
			log('Error: failed to escape.');
			log('If you think this is a bug in cssesc, please report it:');
			log('https://github.com/mathiasbynens/cssesc/issues/new');
			log(
				'\nStack trace using cssesc@%s:\n',
				cssesc.version
			);
			log(exception.stack);
			return process.exit(1);
		}
	});
	// Return with exit status 0 outside of the `forEach` loop, in case
	// multiple strings were passed in.
	return process.exit(0);

};

if (stdin.isTTY) {
	// handle shell arguments
	main();
} else {
	let timeout;
	// Either the script is called from within a non-TTY context, or `stdin`
	// content is being piped in.
	if (!process.stdout.isTTY) {
		// The script was called from a non-TTY context. This is a rather uncommon
		// use case we don’t actively support. However, we don’t want the script
		// to wait forever in such cases, so…
		timeout = setTimeout(function() {
			// …if no piped data arrived after a whole minute, handle shell
			// arguments instead.
			main();
		}, 60000);
	}
	let data = '';
	stdin.on('data', function(chunk) {
		clearTimeout(timeout);
		data += chunk;
	});
	stdin.on('end', function() {
		strings.push(data.trim());
		main();
	});
	stdin.resume();
}
