---
id: 695cc8f280fef0cc3bed02ca
title: What Is the Path Module and How Does It Work?
challengeType: 19
dashedName: what-is-the-path-module-and-how-does-it-work
---

# --description--

The Node.js `path` module lets you work with files and directory paths. It provides several useful methods for handling and transforming directories, including joining, normalizing, and resolving the directories across different platforms and operating systems.

To use the `path` module, you can import it like this:

```js
const path = require("path");
```

Let's look at some of the methods the `path` module provides and how they work.

First, you should be aware of the Node.js global variables `__filename` and `__dirname`, AKA "common JS" variables. You don't need the `path` module to access them, which is why they are called global variables.

`__filename` is the absolute path of the current file and `__dirname` is the absolute path of the directory containing the current file.

For example, I have a `script.js` file I'm currently working with. Here's what the two methods return:

```js
console.log(__filename);
// /Users/user/Desktop/fCC/script-code/node/node-path/script.js

console.log(__dirname);
// /Users/user/Desktop/fCC/script-code/node/node-path
```

You should also be aware of relative and absolute paths.

A relative path points to a file or folder based on your current working directory. For example, `./assets/src/text-files`.

An absolute path, on the other hand, gives the complete address of a file or folder from the root of your system, such as `/Users/johndoe/projects/app/assets/src/text-files.`

The `basename()` method shows the last part of the file, that is, the filename:

```js
console.log(path.basename(__filename)); // script.js
```

`dirname()` returns the directory name of a path:

```js
console.log(path.dirname(__dirname)); // node-path
```

`extname()` returns the extension of the current file:

```js
console.log(path.extname(__filename)); // .js
```

You can also specify a different file to return the extension of:

```js
console.log(path.extname('text-files/text1.txt')); // .txt
```

The `join()` method takes all the path segments you pass in and joins them into one clean, normalized path. 

This could be useful if you want to merge related files in different folders so you can work with them together:

```js
const joinedPath = path.join("src", "assets", "text-files");
console.log(joinedPath); // src/assets/text-files
```

Windows uses backslashes to separate directories, so the result will be `src\assets\text-files`.

In addition, the `join()` method automatically fixes wrong slashes and removes extra ones:

```js
const wrongPath = path.join("/src//", "assets", "text-files");
console.log(wrongPath); // /src/assets/text-files
```

The `resolve()` method turns a sequence of path segments into an absolute path. It starts from your current working directory and results in a full path that points to the exact location on the device:

```js
const absolutePath = path.resolve("assets", "src", "text-files");
console.log(absolutePath);
// /Users/user/Desktop/fCC/script-code/node/node-path/assets/src/text-files
```

The difference between `join()` and `resolve()` is that `join()` creates a relative path, while `resolve()` returns an absolute path.

Lastly, there are the `parse()` and `format()` methods.

`parse()` takes a directory or file and returns an object that contains the breakdown of its parts, such as the system root, its directory, extension, and the filename:

```js
const parsedFile = path.parse(__filename);

console.log(parsedFile);
/*
{
 root: '/',
 dir: '/Users/user/Desktop/fCC/script-code/node/node-path',
 base: 'script.js',
 ext: '.js',
 name: 'script'
}
*/
```

`format()`, on the other hand, builds a path from an object containing directory, name, and extension:

```js
const formattedDirectory = path.format({
  dir: "/users/johndoe/docs",
  name: "file",
  ext: ".txt",
});

console.log(formattedDirectory); // /users/johndoe/docs/file.txt
```

# --questions--

## --text--

What is the difference between `path.dirname()` and `path.extname()` in Node.js?

## --answers--

`dirname()` removes the file extension, while `extname()` removes the directory name.

### --feedback--

Focus on which one deals with directories and which one deals with file extensions.

---

`dirname()` returns the full file path, while `extname()` returns the directory name.

### --feedback--

Focus on which one deals with directories and which one deals with file extensions.

---

`dirname()` returns the directory name of a path, while `extname()` returns the file's extension.

---

`dirname()` and `extname()` both return the same value but in different formats.

### --feedback--

Focus on which one deals with directories and which one deals with file extensions.

## --video-solution--

3

## --text--

Which `path` method builds a complete file path from an object containing directory, name, and extension properties?

## --answers--

`path.parse()`

### --feedback--

Think about what the opposite of `parse()` is.

---

`path.format()`

---

`path.resolve()`

### --feedback--

Think about what the opposite of `parse()` is.

---

`path.join()`

### --feedback--

Think about what the opposite of `parse()` is.

## --video-solution--

2

## --text--

What do the Node.js global variables `__filename` and `__dirname` provide access to?

## --answers--

The absolute path of the current file and its containing directory.

---

The name of the current module and its dependencies.

### --feedback--

Think about which variables automatically give you full file and folder paths without using the path module.

---

The relative path to the Node.js installation directory.

### --feedback--

Think about which variables automatically give you full file and folder paths without using the path module.

---

The URL of the running web server and its hostname.

### --feedback--

Think about which variables automatically give you full file and folder paths without using the path module.

## --video-solution--

1
