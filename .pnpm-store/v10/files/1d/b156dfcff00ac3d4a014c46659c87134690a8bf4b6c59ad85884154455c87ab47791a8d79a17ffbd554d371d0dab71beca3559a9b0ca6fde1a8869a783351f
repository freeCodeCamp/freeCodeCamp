[![Build Status](https://travis-ci.org/JSBizon/node-memorystream.svg?branch=master)](https://travis-ci.org/JSBizon/node-memorystream)

# Introduction
node-memorystream - this module allow create streams in memory. It can be used for emulating file streams, filtering/mutating data between one stream and another, buffering incoming data, being the gap between two data/network streams of variable rates, etc. MemoryStream support read/write states or only read state or only write state. The API is meant to follow node's Stream implementation.
Module supports streams for node > 0.10 now.


Original module is here git://github.com/ollym/memstream.git was remade and improved. 

## Installation
If you have npm installed, you can simply type:

	npm install memorystream
	
Or you can clone this repository using the git command:

	git clone git://github.com/JSBizon/node-memorystream.git
	
## Usage
Some examples how to use memorystream module.

#### Basic I/O Operation
In this example I illustrate the basic I/O operations of the memory stream.

	var MemoryStream = require('memorystream');
	var memStream = new MemoryStream(['Hello',' ']);
	
	var data = '';
	memStream.on('data', function(chunk) {
		data += chunk.toString();
	});
	
	memStream.write('World');
	
	memStream.on('end', function() {
		// outputs 'Hello World!'
		console.log(data);
	});
	memStream.end('!');
	
#### Piping
In this example I'm piping all data from the memory stream to the process's stdout stream.

	var MemoryStream = require('memorystream');
	var memStream = new MemoryStream();
	memStream.pipe(process.stdout, { end: false });
	
	memStream.write('Hello World!');
	
In this example I'm piping all data from the response stream to the memory stream.

	var http = require('http'),
		MemoryStream = require('memorystream');

	var options = {
		host: 'google.com'
	};
	var memStream = new MemoryStream(null, {
		readable : false
	});

	var req = http.get(options, function(res) {
		res.pipe(memStream);
		res.on('end', function() {
			console.log(memStream.toString());
		});
	});

#### Delayed Response
In the example below, we first pause the stream before writing the data to it. The stream is then resumed after 1 second, and the data is written to the console.

	var MemoryStream = require('memorystream');

	var memStream = new MemoryStream('Hello');
	var data = '';
	memStream.on('data', function(chunk) {
		data += chunk;
	});
	
	memStream.pause();
	memStream.write('World!');
	
	setTimeout(function() {
		memStream.resume();
	}, 1000);

## Documentation
The memory stream adopts all the same methods and events as node's Stream implementation.
Documentation is [available here](http://github.com/JSBizon/node-memorystream/wiki/API/ "Documentation").



	