---
title: Process Object
---

## Process Object

The `process` object in Node.js is a global object that can be accessed inside any module without requiring it. There are very few global objects or properties provided in Node.js and `process` is one of them. It is an essential component in Node.js ecosystem as it provides various information sets about the runtime of a program. To explore we will use one of its properties which is called `process.versions`. This property tells us the information about Node.js version we have installed. It has to be used with `-p` flag.

```shell
$ node  -p "process.versions"

# output
{ http_parser: '2.8.0',
  node: '8.11.2',
  v8: '6.2.414.54',
  uv: '1.19.1',
  zlib: '1.2.11',
  ares: '1.10.1-DEV',
  modules: '57',
  nghttp2: '1.29.0',
  napi: '3',
  openssl: '1.0.2o',
  icu: '60.1',
  unicode: '10.0',
  cldr: '32.0',
  tz: '2017c' }
```

Another property you can check is `process.release` that is same to the command `$ node --version` which we used when we installed Node.js but the output this time is going to be more detailed.

```shell
node -p "process.release"

# output
{ name: 'node',
  lts: 'Carbon',
  sourceUrl: 'https://nodejs.org/download/release/v8.11.2/node-v8.11.2.tar.gz',
  headersUrl: 'https://nodejs.org/download/release/v8.11.2/node-v8.11.2-headers.tar.gz' }
```

These are some of the different commands that we can use in a command line to access information otherwise no module can provide. This `process` object is an instance of EventEmitter class and it does it contain its own pre-defined events such as `exit` which can be used to know when a program in Node.js has completed its execution. Run the below program and you can observe that the result comes up with status code `0`. In Node.js this status code means that a program has run successfully.

```js
process.on('exit', code => {
	setTimeout(() => {
		console.log('Will not get displayed');
	}, 0);

	console.log('Exited with status code:', code);
});
console.log('Execution Completed');
```

Output of the above program:

```shell
Execution Completed
Exited with status code: 0
```

`Process` also provides various properties to interact with. Some of them can be used in a Node application to provide a gateway to communicate between the Node application and any command line interface. This is very useful if you are building a command line application or utility using Node.js

- process.stdin: a readable stream
- process.stdout: a writable stream
- process.stderr: a wriatable stream to recognize errors

Using `argv` you can always access to arguments that are passed in a command line. `argv` is an array which has Node itself as the first element and the absolute path of the file as the second element. From the third element onwards it can have as many arguments.

Try the below program to get more insight into how you can use these various properties and functions.

```js
process.stdout.write('Hello World!' + '\n');

process.argv.forEach(function(val, index, array) {
	console.log(index + ': ' + val);
});
```

If you run the above code with the following command you will get the output and the first two elements are of `argv` are printed.

```shell
$ node test.js

# output
Hello World!
0: /usr/local/bin/node
1: /Users/amanhimself/Desktop/articles/nodejs-text-tuts/test.js
```
