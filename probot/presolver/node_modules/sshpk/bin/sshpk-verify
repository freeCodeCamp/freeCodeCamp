#!/usr/bin/env node
// -*- mode: js -*-
// vim: set filetype=javascript :
// Copyright 2015 Joyent, Inc.  All rights reserved.

var dashdash = require('dashdash');
var sshpk = require('../lib/index');
var fs = require('fs');
var path = require('path');
var Buffer = require('safer-buffer').Buffer;

var options = [
	{
		names: ['hash', 'H'],
		type: 'string',
		help: 'Hash algorithm (sha1, sha256, sha384, sha512)'
	},
	{
		names: ['verbose', 'v'],
		type: 'bool',
		help: 'Display verbose info about key and hash used'
	},
	{
		names: ['identity', 'i'],
		type: 'string',
		help: 'Path to (public) key to use'
	},
	{
		names: ['file', 'f'],
		type: 'string',
		help: 'Input filename'
	},
	{
		names: ['format', 't'],
		type: 'string',
		help: 'Signature format (asn1, ssh, raw)'
	},
	{
		names: ['signature', 's'],
		type: 'string',
		help: 'base64-encoded signature data'
	},
	{
		names: ['help', 'h'],
		type: 'bool',
		help: 'Shows this help text'
	}
];

if (require.main === module) {
	var parser = dashdash.createParser({
		options: options
	});

	try {
		var opts = parser.parse(process.argv);
	} catch (e) {
		console.error('sshpk-verify: error: %s', e.message);
		process.exit(3);
	}

	if (opts.help || opts._args.length > 1) {
		var help = parser.help({}).trimRight();
		console.error('sshpk-verify: sign data using an SSH key\n');
		console.error(help);
		process.exit(3);
	}

	if (!opts.identity) {
		var help = parser.help({}).trimRight();
		console.error('sshpk-verify: the -i or --identity option ' +
		    'is required\n');
		console.error(help);
		process.exit(3);
	}

	if (!opts.signature) {
		var help = parser.help({}).trimRight();
		console.error('sshpk-verify: the -s or --signature option ' +
		    'is required\n');
		console.error(help);
		process.exit(3);
	}

	var keyData = fs.readFileSync(opts.identity);

	var key;
	try {
		key = sshpk.parseKey(keyData);
	} catch (e) {
		console.error('sshpk-verify: error loading key "' +
		    opts.identity + '": ' + e.name + ': ' + e.message);
		process.exit(2);
	}

	var fmt = opts.format || 'asn1';
	var sigData = Buffer.from(opts.signature, 'base64');

	var sig;
	try {
		sig = sshpk.parseSignature(sigData, key.type, fmt);
	} catch (e) {
		console.error('sshpk-verify: error parsing signature: ' +
		    e.name + ': ' + e.message);
		process.exit(2);
	}

	var hash = opts.hash || key.defaultHashAlgorithm();

	var verifier;
	try {
		verifier = key.createVerify(hash);
	} catch (e) {
		console.error('sshpk-verify: error creating verifier: ' +
		    e.name + ': ' + e.message);
		process.exit(2);
	}

	if (opts.verbose) {
		console.error('sshpk-verify: using %s-%s with a %d bit key',
		    key.type, hash, key.size);
	}

	var inFile = process.stdin;
	var inFileName = 'stdin';

	var inFilePath;
	if (opts.file) {
		inFilePath = opts.file;
	} else if (opts._args.length === 1) {
		inFilePath = opts._args[0];
	}

	if (inFilePath)
		inFileName = path.basename(inFilePath);

	try {
		if (inFilePath) {
			fs.accessSync(inFilePath, fs.R_OK);
			inFile = fs.createReadStream(inFilePath);
		}
	} catch (e) {
		console.error('sshpk-verify: error opening input file' +
		     ': ' + e.name + ': ' + e.message);
		process.exit(2);
	}

	inFile.pipe(verifier);
	inFile.on('end', function () {
		var ret;
		try {
			ret = verifier.verify(sig);
		} catch (e) {
			console.error('sshpk-verify: error verifying data: ' +
			    e.name + ': ' + e.message);
			process.exit(1);
		}

		if (ret) {
			console.error('OK');
			process.exit(0);
		}

		console.error('NOT OK');
		process.exit(1);
	});
}
