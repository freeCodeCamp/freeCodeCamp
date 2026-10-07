# `@humanfs/node`

by [Nicholas C. Zakas](https://humanwhocodes.com)

If you find this useful, please consider supporting my work with a [donation](https://humanwhocodes.com/donate) or [nominate me](https://stars.github.com/nominate/) for a GitHub Star.

## Description

The `hfs` bindings for use in Node.js and Node.js-compatible runtimes.

> [!WARNING]
> This project is **experimental** and may change significantly before v1.0.0. Use at your own caution and definitely not in production!

## Installation

Install using your favorite package manager:

```shell
npm install @humanfs/node

# or

pnpm install @humanfs/node

# or

yarn add @humanfs/node

# or

bun install @humanfs/node
```

## Usage

The easiest way to use hfs in your project is to import the `hfs` object:

```js
import { hfs } from "@humanfs/node";
```

Then, you can use the API methods:

```js
// 1. Files

// read from a text file
const text = await hfs.text("file.txt");

// read from a JSON file
const json = await hfs.json("file.json");

// read raw bytes from a text file
const arrayBuffer = await hfs.arrayBuffer("file.txt");

// write text to a file
await hfs.write("file.txt", "Hello world!");

// write bytes to a file
await hfs.write("file.txt", new TextEncoder().encode("Hello world!"));

// append text to a file
await hfs.append("file.txt", "Hello world!");

// append bytes to a file
await hfs.append("file.txt", new TextEncoder().encode("Hello world!"));

// does the file exist?
const found = await hfs.isFile("file.txt");

// how big is the file?
const size = await hfs.size("file.txt");

// when was the file modified?
const mtime = await hfs.lastModified("file.txt");

// copy a file from one location to another
await hfs.copy("file.txt", "file-copy.txt");

// move a file from one location to another
await hfs.move("file.txt", "renamed.txt");

// delete a file
await hfs.delete("file.txt");

// 2. Directories

// create a directory
await hfs.createDirectory("dir");

// create a directory recursively
await hfs.createDirectory("dir/subdir");

// does the directory exist?
const dirFound = await hfs.isDirectory("dir");

// copy the entire directory
hfs.copyAll("from-dir", "to-dir");

// move the entire directory
hfs.moveAll("from-dir", "to-dir");

// delete a directory
await hfs.delete("dir");

// delete a non-empty directory
await hfs.deleteAll("dir");
```

If you'd like to create your own instance, import the `NodeHfs` constructor:

```js
import { NodeHfs } from "@humanfs/node";
import fsp from "fs/promises";

const hfs = new NodeHfs();

// optionally specify the fs/promises object to use
const hfs = new NodeHfs({ fsp });
```

If you'd like to use just the impl, import the `NodeHfsImpl` constructor:

```js
import { NodeHfsImpl } from "@humanfs/node";
import fsp from "fs/promises";

const hfs = new NodeHfsImpl();

// optionally specify the fs/promises object to use
const hfs = new NodeHfsImpl({ fsp });
```

## Errors Handled

* `ENOENT` - in most cases, these errors are handled silently.
* `ENFILE` and `EMFILE` - calls that result in these errors are retried for up to 60 seconds before giving up for good.

## License

Apache 2.0
