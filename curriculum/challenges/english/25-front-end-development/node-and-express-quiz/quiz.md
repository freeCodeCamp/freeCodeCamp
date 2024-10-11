---
id: 66f1ad049d7a6ac0886cc2ba
title: JavaScript Runtimes and Engines Quiz
challengeType: 8
dashedName: quiz-js-runtimes-engines
---

# --description--

Answer all of the questions below correctly to pass the quiz.

# --quizzes--

## --quiz--

### --question--

#### --text--

What is the V8 engine, and which company developed it?

#### --distractors--

Deno

---

Microsoft

---

Mozilla

#### --answer--

Google

### --question--

#### --text--

How does Node.js differ from browser-based JavaScript runtimes?

#### --distractors--

It can only run on Linux

---

It has no access to the file system

---

It uses a different version of ECMAScript

#### --answer--

It can access system resources like file systems and networks

### --question--

#### --text--

What is Deno, and how does it improve on some of Node.js's security and module management?

#### --distractors--

It uses the `require` keyword

---

It supports npm packages by default

---

It doesn't have a security layer for filesystem access

#### --answer--

It has built-in security and supports ES module imports

### --question--

#### --text--

What is Bun, and how does it compare to Node.js in terms of performance?

#### --distractors--

It is slower than Node.js in running JavaScript

---

It only supports TypeScript

---

It is not capable of serving HTTP requests

#### --answer--

It is designed to be faster than Node.js by using native implementations for certain tasks

### --question--

#### --text--

In which JavaScript runtime can you use `fetch` natively without any additional libraries: Node.js, Deno, or Bun?

#### --distractors--

Node.js

---

V8 engine

---

Bun

#### --answer--

Deno

### --question--

#### --text--

What are some of the advantages of using the V8 engine in modern browsers?

#### --distractors--

It makes websites load slower

---

It is not open source

---

It doesn’t support JavaScript standards

#### --answer--

It compiles JavaScript into machine code for faster execution

### --question--

#### --text--

Explain the role of the event loop in Node.js.

#### --distractors--

It blocks the execution of code

---

It allows synchronous execution only

---

It stops handling I/O operations

#### --answer--

It allows non-blocking, asynchronous code execution

### --question--

#### --text--

How do you manage imports in Deno compared to Node.js?

#### --distractors--

You use `require` in Deno and `import` in Node.js

---

Both use only CommonJS

---

Deno uses a package manager to install modules like npm

#### --answer--

Deno uses URL-based imports, while Node.js uses npm for package management

### --question--

#### --text--

What are the key performance benefits of using Bun over Node.js?

#### --distractors--

It supports more file types

---

It runs only on macOS

---

It uses fewer HTTP protocols

#### --answer--

It uses native implementations for faster execution, including faster bundling and transpiling

### --question--

#### --text--

In a browser environment, how does JavaScript execution differ from server-side environments like Node.js?

#### --distractors--

Browsers don’t support ES6 syntax

---

Browsers don’t support asynchronous code

---

Browsers can’t interact with the DOM

#### --answer--

Browsers don’t have access to system resources like file systems

### --question--

#### --text--

What is npm, and how is it used in Node.js development?

#### --distractors--

It compiles JavaScript

---

It is a code linter for JavaScript

---

It is a JavaScript testing framework

#### --answer--

It is a package manager used to install libraries and dependencies

### --question--

#### --text--

Explain the difference between a dependency and a devDependency in `package.json`.

#### --distractors--

DevDependencies are included in production builds

---

Dependencies are only used for testing

---

DevDependencies cannot be installed via npm

#### --answer--

Dependencies are required for production, while devDependencies are only needed for development

### --question--

#### --text--

What command would you use to install a specific version of a package via npm?

#### --distractors--

`npm download <package-name>@<version>`

---

`npm get <package-name>@<version>`

---

`npm fetch <package-name>@<version>`

#### --answer--

`npm install <package-name>@<version>`

### --question--

#### --text--

How do you update all outdated packages in a project using npm?

#### --distractors--

`npm refresh`

---

`npm update-all`

---

`npm reinstall`

#### --answer--

`npm update`

### --question--

#### --text--

What is `npm init` used for in a Node.js project?

#### --distractors--

It installs dependencies

---

It creates a `node_modules` folder

---

It starts a Node.js server

#### --answer--

It creates a new `package.json` file for your project

### --question--

#### --text--

What file is automatically created when you run `npm install`?

#### --distractors--

`package-config.js`

---

`install.log`

---

`.npmrc`

#### --answer--

`package-lock.json`

### --question--

#### --text--

What is Express.js, and why is it commonly used in Node.js applications?

#### --distractors--

It is used to build UI components in Node.js

---

It is a database engine

---

It is used to build native desktop apps

#### --answer--

It is a web framework used to create server-side applications and APIs

### --question--

#### --text--

How can you define a simple route that responds with "Hello World" in Express?

#### --distractors--

`app.get('/hello')`

---

`app.response('Hello World')`

---

`express('/hello', 'Hello World')`

#### --answer--

`app.get('/', (req, res) => res.send('Hello World'));`

### --question--

#### --text--

What middleware function is used in Express to parse incoming JSON payloads?

#### --distractors--

`app.bodyParser()`

---

`app.json()`

---

`app.urlencoded()`

#### --answer--

`app.use(express.json())`

### --question--

#### --text--

How can you handle 404 errors in Express?

#### --distractors--

`app.get('404', ...)`

---

`app.use('*', ...)`

---

`app.responseError()`

#### --answer--

By defining a catch-all route like `app.use((req, res) => res.status(404).send('Not Found'))`
