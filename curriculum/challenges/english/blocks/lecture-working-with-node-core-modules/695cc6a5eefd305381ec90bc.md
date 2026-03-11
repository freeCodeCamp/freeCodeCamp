---
id: 695cc6a5eefd305381ec90bc
title: What Is the fs Module and How Does It Work?
challengeType: 19
dashedName: what-is-the-fs-module-and-how-does-it-work
---

# --description--

Many languages and frameworks out there provide ways to work with files and folders. Node.js lets you do this with the `fs` or file system module.

This lesson will focus on the Node `fs` module, how it works, and the three different ways you can use the methods it provides.

The Node `fs` module provides you with methods for working with files and folders, including opening and closing, reading and writing, and deleting operations.

The `fs` module is a Node.js standard module, so it's available to use as long as you have Node.js installed in your environment. To use the module, you import it this way:

```js
const fs = require("fs");
```

The flexibility the `fs` module offers is that it allows you to use its methods both synchronously and asynchronously. The `fs` module methods are asynchronous by default, but for every method, there's a synchronous form:

```js
fs.writeFile() // Asynchronous file writing
fs.writeFileSync() // Synchronous file writing

fs.readFile() // Asynchronous file reading
fs.readFileSync() // Synchronous file reading

fs.open() // Opens a file
fs.openAsBlob() // Opens as blob
fs.openSync() // Synchronous open
fs.opendir() // Opens directory
fs.opendirSync() // Synchronous directory open
```

It doesn't end there. Depending on your needs, you can use the methods in three ways:

- with callbacks, for example `fs.writeFile()` (asynchronous)
- with promises if you prefer the `async/await` syntax, for example `fs.promises.writeFile()`
- synchronously, for example, `fs.writeFileSync()`

Here's the basic syntax for the asynchronous usage of the methods:

```js
fs.writeFile("filePath", "content", "utf8", (err) => {
  if (err) {
    throw err;
  }
  console.log("File written to!");
});
```

For the promises version, you can import that from `fs/promises` or chain `promises` to your `fs` import. Here's the syntax:

```js
async function promisesExample() {
  try {
    await fs.promises.writeFile("filePath", "content", "utf8");
    console.log("File written to!");
  } catch (err) {
    console.error("Error:", err);
  }
}

promisesExample();
```

And here's the synchronous version:

```js
try {
  fs.writeFileSync("filePath", "content", "utf8");
  console.log("File written to!");
} catch (err) {
  console.error("Error:", err);
}
```

Note that using any of the methods synchronously is blocking. In other words, your program will stop running and wait until the operation is finished before moving on to the next line of code.

For quick scripts, small projects, or one-off tasks, synchronous methods are probably fine. But in real world applications, blocking I/O (input/output) becomes a problem because it can freeze other parts of your app while Node waits for the file system to finish its operations. That slows things down and hurts performance and user experience.

That's why asynchronous methods exist. They let the rest of your program continue running while Node handles file operations in the background. Traditionally, this used callbacks, but those can get messy fast as your app grows.

Promises and `async/await` solve that problem. They are still non-blocking, but the code reads like normal synchronous code and is much easier to maintain. 

For this reason, the promises-based approach is generally preferred today, and that's what we'll use in the rest of this lesson.

The `writeFile()` method lets you write to an existing file. If the file doesn't exist, it creates it in the current directory, then writes the specified content to it.

Here's how to use the `writeFile()` method:

```js
const fs = require("fs/promises");

async function writeToFile() {
  try {
    await fs.writeFile(
      "article.md",
      "## Node `fs` Module: The Complete Guide",
      "utf8",
    );
    console.log("File written to!");
  } catch (err) {
    console.error("Error writing to file:", err);
  }
}

writeToFile(); // File written to!
```

Here's the content of the article.md file after that:

```md
## Node `fs` Module: The Complete Guide
```

The `appendFile()` method lets you add to the content of an existing file. Here's how to use it:

```js
const fs = require("fs/promises");

async function appendToFile() {
  try {
    await fs.appendFile(
      "article.md",
      "\nIn this article, you will learn all there is to know about the Node fs module...",
      "utf8",
    );
    console.log("File appended to!");
  } catch (err) {
    console.log("Error appending to file:", err);
  }
}

appendToFile(); // File appended to!
```

The `readFile()` method lets you see what the content of a file is:

```js
const fs = require("fs/promises");

async function readFileContent() {
  try {
    const fileContent = await fs.readFile("article.md", "utf8");
    console.log("File content:", fileContent);
  } catch (err) {
    console.log("File read successfully");
  }
}

readFileContent();

/*
File content: ## Node `fs` Module: The Complete Guide

In this article, you will learn all there is to know about the Node fs module...
*/
```

If you don't specify the `utf8` character encoding, you will get the content of the file as a buffer:

```js
async function readFileContent() {
  try {
    const fileContent = await fs.readFile("article.md");
    console.log("File content:", fileContent);
  } catch (err) {
    console.log("File read successfully");
  }
}

readFileContent();

/*
File content: <Buffer 23 23 20 4e 6f 64 65 20 60 66 73 60 20 4c 69 62 72 61 72 79 3a 20
 54 68 65 20 43 6f 6d 70 6c 65 74 65 20 47 75 69 64 65 0a 0a 49 6e 20 74 68 69 73 20 ... 
72 more bytes>
*/
```

In the next lesson, you will learn how to handle a buffer like this with the Node.js Buffer module.

Lastly, the `unlink()` method lets you delete a file:

```js
const fs = require("fs/promises");

async function deleteFile() {
  try {
    await fs.unlink("article.ts");
    console.log("File deleted successfully!");
  } catch (err) {
    console.error("Error deleting file:", err);
  }
}

deleteFile();
```

If the file does not exist, you get an error message similar to this:

```bash
Error deleting file: Error: ENOENT: no such file or directory, unlink 'article.ts'
```

If it exists, the file is deleted, and you get the success message you set.

# --questions--

## --text--

What is the main purpose of the Node `fs` module?

## --answers--

To create dynamic HTML pages in the browser.

### --feedback--

Think about how you handle files like text documents or folders directly from Node.js.

---

To connect Node.js to a database.

### --feedback--

Think about how you handle files like text documents or folders directly from Node.js.

---

To interact with the file system for file and folder CRUD operations.

---

To manage Node.js package installations.

### --feedback--

Think about how you handle files like text documents or folders directly from Node.js.

## --video-solution--

3

## --text--

Which method in the Node fs module lets you write content to a file, creating it if it doesn't exist?

## --answers--

`writeFile()`

---

`readFile()`

### --feedback--

Think about the method that both creates and writes content to a file.

---

`appendFile()`

### --feedback--

Think about the method that both creates and writes content to a file.

---

`unlink()`

### --feedback--

Think about the method that both creates and writes content to a file.

## --video-solution--

1

## --text--

Which of the following is **NOT** one of the three ways you can use methods in the Node `fs` module?

## --answers--

With callbacks, for example `fs.writeFile()`.

### --feedback--

Two are asynchronous, one is synchronous, and one doesn't exist.

---

 With promises, for example `fs.promises.writeFile()`.

### --feedback--

Two are asynchronous, one is synchronous, and one doesn't exist.

---

Synchronously, for example `fs.writeFileSync()`.

### --feedback--

Two are asynchronous, one is synchronous, and one doesn't exist.

---

With JSON parsing, for example `fs.parseFile()`.

## --video-solution--

4

