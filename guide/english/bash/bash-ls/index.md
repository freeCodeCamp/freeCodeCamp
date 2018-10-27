---
title: Bash ls
---

## Bash ls

`ls` is a command on Unix-like operating systems to list contents of a directory such as folders and file names.


### Usage

```bash
ls [options] [file_names]
```

Most used options:

* `-a`, all files and folders, including ones that are hidden and start with a `.`
* `-l`, List in long format
* `-G`, enable colorized output.
* `-s`, List File Size.
* `-R`, displays the contents of the directory, and its subdirectories.

Items in a directory can also be listed without needing the enter the directory:

```bash
ls FolderName
```

### Example:

List files in `freeCodeCamp/guide/`

```bash
ls                                                                ⚬ master
CODE_OF_CONDUCT.md bin                package.json       utils
CONTRIBUTING.md    gatsby-browser.js  plugins            yarn.lock
LICENSE.md         gatsby-config.js   src
README.md          gatsby-node.js     static
assets             gatsby-ssr.js      translations
```

#### More Information:

* [Wikipedia](https://en.wikipedia.org/wiki/Ls)
* [Shapeshed](https://shapeshed.com/unix-ls/)
