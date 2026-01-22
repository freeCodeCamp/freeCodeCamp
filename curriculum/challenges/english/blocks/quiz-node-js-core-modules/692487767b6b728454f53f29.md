---
id: 692487767b6b728454f53f29
title: NodeJS Core Modules Quiz
challengeType: 8
dashedName: quiz-node-js-core-modules
---

# --description--

To pass the quiz, you must correctly answer at least 18 of the 20 questions below.

# --quizzes--

## --quiz--

### --question--

#### --text--

Which `fs` method adds content to an existing file without overwriting it?

#### --distractors--

`writeFile()`

---

`readFile()`

---

`unlink()`

#### --answer--

`appendFile()`

### --question--

#### --text--

What happens when you use synchronous methods from the `fs` module?

#### --distractors--

They delete existing files automatically.

---

They run faster than asynchronous ones in all cases.

---

They return Promises by default.

#### --answer--

They block the program until the operation finishes.

### --question--

#### --text--

What does the `utf8` parameter do in `fs.readFile()`?

#### --distractors--

It prevents errors from being thrown.

---

It changes the file’s extension.

---

It compresses large files.

#### --answer--

It tells Node to return a readable string instead of a buffer.

### --question--

#### --text--

Which `Buffer` method creates a new buffer filled with zeros?

#### --distractors--

`Buffer.from()`

---

`Buffer.concat()`

---

`Buffer.byteLength()`

#### --answer--

`Buffer.alloc()`

### --question--

#### --text--

What does `Buffer.toString()` do?

#### --distractors--

Converts a buffer into binary code.

---

Clears the contents of a buffer.

---

Shows buffer byte length.

#### --answer--

Converts buffer contents into a readable string.

### --question--

#### --text--

Which `crypto` feature requires a private key to generate a signature?

#### --distractors--

`createHash()`

---

`createCipheriv()`

---

`randomBytes()`

#### --answer--

`sign()`

### --question--

#### --text--

Why should you avoid writing your own crypto algorithms directly?

#### --distractors--

It is illegal in Node.js applications.

---

Node.js does not support encryption.

---

JavaScript cannot compute hashes.

#### --answer--

It can be unsafe without well-tested libraries.

### --question--

#### --text--

What `crypto` method is recommended for generating secure random tokens instead of `Math.random()`?

#### --distractors--

`randomInt()`

---

`createHmac()`

---

`createCipheriv()`

#### --answer--

`randomBytes()`

### --question--

#### --text--

Which OS module method returns the CPU architecture?

#### --distractors--

`os.cpus()`

---

`os.platform()`

---

`os.version()`

#### --answer--

`os.arch()`

### --question--

#### --text--

What does `os.userInfo()` return?

#### --distractors--

Only the username.

---

Only the device IP address.

---

Only the logged-in user’s ID.

#### --answer--

Information about the current system user.

### --question--

#### --text--

Which `path` method joins segments and normalizes extra slashes?

#### --distractors--

`path.resolve()`

---

`path.extname()`

---

`path.dirname()`

#### --answer--

`path.join()`

### --question--

#### --text--

Which `path` method produces an absolute path based on the current working directory?

#### --distractors--

`path.extname()`

---

`path.format()`

---

`path.parse()`

#### --answer--

`path.resolve()`

### --question--

#### --text--

What does the global variable `__dirname` represent?

#### --distractors--

The name of the user running Node.

---

The current file’s extension.

---

A relative folder path starting with `./`.

#### --answer--

The absolute path of the directory containing the current file.

### --question--

#### --text--

Which process property contains environment variables like `NODE_ENV`?

#### --distractors--

`process.cwd`

---

`process.version`

---

`process.platform`

#### --answer--

`process.env`

### --question--

#### --text--

What does the `process.on("exit")` event do?

#### --distractors--

It restarts the Node application.

---

It sends an `exit` signal to child processes.

---

It clears the event loop queue.

#### --answer--

Executes code right before the Node process finishes.

### --question--

#### --text--

Which stream type can both read and write data but does not transform it?

#### --distractors--

Readable stream

---

Transform stream

---

Writable stream

#### --answer--

Duplex stream

### --question--

#### --text--

What is required to implement reading and writing of large files efficiently?

#### --distractors--

Using only `Buffer.alloc()`

---

Importing the `crypto` module

---

Saving the entire file in memory first

#### --answer--

Using streams to process data in chunks

### --question--

#### --text--

Which method links a readable stream to a writable stream?

#### --distractors--

`pipeTo()`

---

`connect()`

---

`streamWrite()`

#### --answer--

`pipe()`

### --question--

#### --text--

What stream event indicates there is no more data to write?

#### --distractors--

`close`

---

`drain`

---

`end`

#### --answer--

`finish`

### --question--

#### --text--

What is logged if you print a chunk from a readable stream without `toString()`?

#### --distractors--

Plain text content

---

The process PID

---

Operating system name

#### --answer--

A buffer object with binary data
