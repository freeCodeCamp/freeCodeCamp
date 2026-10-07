#!/usr/bin/env node
(function() {

	var fs = require('fs');
	var stringEscape = require('../jsesc.js');
	var strings = process.argv.splice(2);
	var stdin = process.stdin;
	var data;
	var timeout;
	var isObject = false;
	var options = {};
	var log = console.log;

	var main = function() {
		var option = strings[0];

		if (/^(?:-h|--help|undefined)$/.test(option)) {
			log(
				'jsesc v%s - https://mths.be/jsesc',
				stringEscape.version
			);
			log([
				'\nUsage:\n',
				'\tjsesc [string]',
				'\tjsesc [-s | --single-quotes] [string]',
				'\tjsesc [-d | --double-quotes] [string]',
				'\tjsesc [-w | --wrap] [string]',
				'\tjsesc [-e | --escape-everything] [string]',
				'\tjsesc [-t | --escape-etago] [string]',
				'\tjsesc [-6 | --es6] [string]',
				'\tjsesc [-l | --lowercase-hex] [string]',
				'\tjsesc [-j | --json] [string]',
				'\tjsesc [-o | --object] [stringified_object]', // `JSON.parse()` the argument
				'\tjsesc [-p | --pretty] [string]', // `compact: false`
				'\tjsesc [-v | --version]',
				'\tjsesc [-h | --help]',
				'\nExamples:\n',
				'\tjsesc \'f\xF6o \u2665 b\xE5r \uD834\uDF06 baz\'',
				'\tjsesc --json \'f\xF6o \u2665 b\xE5r \uD834\uDF06 baz\'',
				'\tjsesc --json --escape-everything \'f\xF6o \u2665 b\xE5r \uD834\uDF06 baz\'',
				'\tjsesc --double-quotes --wrap \'f\xF6o \u2665 b\xE5r \uD834\uDF06 baz\'',
				'\techo \'f\xF6o \u2665 b\xE5r \uD834\uDF06 baz\' | jsesc'
			].join('\n'));
			return process.exit(1);
		}

		if (/^(?:-v|--version)$/.test(option)) {
			log('v%s', stringEscape.version);
			return process.exit(1);
		}

		strings.forEach(function(string) {
			// Process options
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
			if (/^(?:-t|--escape-etago)$/.test(string)) {
				options.escapeEtago = true;
				return;
			}
			if (/^(?:-6|--es6)$/.test(string)) {
				options.es6 = true;
				return;
			}
			if (/^(?:-l|--lowercase-hex)$/.test(string)) {
				options.lowercaseHex = true;
				return;
			}
			if (/^(?:-j|--json)$/.test(string)) {
				options.json = true;
				return;
			}
			if (/^(?:-o|--object)$/.test(string)) {
				isObject = true;
				return;
			}
			if (/^(?:-p|--pretty)$/.test(string)) {
				isObject = true;
				options.compact = false;
				return;
			}

			// Process string(s)
			var result;
			try {
				if (isObject) {
					string = JSON.parse(string);
				}
				result = stringEscape(string, options);
				log(result);
			} catch(error) {
				log(error.message + '\n');
				log('Error: failed to escape.');
				log('If you think this is a bug in jsesc, please report it:');
				log('https://github.com/mathiasbynens/jsesc/issues/new');
				log(
					'\nStack trace using jsesc@%s:\n',
					stringEscape.version
				);
				log(error.stack);
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
		// Either the script is called from within a non-TTY context,
		// or `stdin` content is being piped in.
		if (!process.stdout.isTTY) { // called from a non-TTY context
			timeout = setTimeout(function() {
				// if no piped data arrived after a while, handle shell arguments
				main();
			}, 250);
		}

		data = '';
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

}());
