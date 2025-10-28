---
id: 6900a59dedf6c5c52824304f
title: NodeJS Intro Quiz
challengeType: 8
dashedName: quiz-node-js-intro
---

# --description--

To pass the quiz, you must correctly answer at least 9 of the 10 questions below.

# --quizzes--

## --quiz--

### --question--

#### --text--

Why does client-side JavaScript have restricted access to the local file system?

#### --distractors--

Because JavaScript is a slow programming language.

---

Because browsers do not have enough memory to handle files.

---

Because the DOM API prevents file access.

#### --answer--

Because it was designed to run in web browsers where unrestricted file access would pose security risks.

### --question--

#### --text--

What does it mean that Node.js is "cross-platform"?

#### --distractors--

It can run multiple programming languages simultaneously.

---

It can connect different databases together.

---

It requires different installation methods for each operating system.

#### --answer--

It works on any operating system, including Windows, macOS, and Linux.

### --question--

#### --text--

Which API is accessible in the browser environment but NOT in the Node.js environment?

#### --distractors--

The File System API

---

The Networking API

---

The Operating System API

#### --answer--

The DOM API

### --question--

#### --text--

What is `npm` in the context of Node.js?

#### --distractors--

A JavaScript framework for building user interfaces.

---

A web browser optimized for Node.js applications.

---

A debugging tool for Node.js applications.

#### --answer--

A package manager for Node.js that allows you to install and manage packages and modules.

### --question--

#### --text--

What does the `--lts` flag indicate when running `nvm install --lts`?

#### --distractors--

It installs the latest testing snapshot version.

---

It installs the lightest and smallest version available.

---

It installs the version with the most features.

#### --answer--

It installs the Long-Term Support version that prioritizes stability, reliability, and security.

### --question--

#### --text--

What is a "callback" in the context of asynchronous programming in Node.js?

#### --distractors--

A method that restarts a failed operation.

---

A variable that stores the result of synchronous operations.

---

A tool that monitors application performance.

#### --answer--

A function that defines what happens when asynchronous operations are completed.

### --question--

#### --text--

What is the purpose of the `package.json` file created by `npm init`?

#### --distractors--

To store environment variables for the application.

---

To configure the web server settings.

---

To define the HTML structure of the application.

#### --answer--

To track the project's details and dependencies.

### --question--

#### --text--

Why might CPU-intensive tasks be problematic in Node.js?

#### --distractors--

Node.js cannot perform mathematical operations.

---

Node.js does not support cryptography or image processing.

---

The event loop prevents CPU operations from running.

#### --answer--

They may block the main thread since Node.js runs on a single thread, resulting in performance issues.

### --question--

#### --text--

What command would you use to run a JavaScript file named `server.js` using Node.js?

#### --distractors--

`npm run server.js`

---

`nvm execute server.js`

---

`javascript server.js`

#### --answer--

`node server.js`

### --question--

#### --text--

What should developers check before choosing packages from npm?

#### --distractors--

Whether the package has at least 1000 downloads.

---

Whether the package was created recently.

---

Whether the package requires payment.

#### --answer--

Whether the package is maintained and follows quality and security best practices.
