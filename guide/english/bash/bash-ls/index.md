---
title: Bash ls
---

## Bash ls

`ls` is a command on Unix-like operating systems to list contents of a directory, for example folder and file names.


### Usage

```bash
ls [options] [file_names]
```
You can list the items in any directory without even entering the directory. Consider you are in a directory with folders- Test1,Test2. You're in the parent directory you can list all files in Test1 as follows-
`ls Test1`

Most used options:

* `-a`, all files and folders, including ones that are hidden and start with a `.`
* `-l`, List in long format
* `-G`, enable colorized output.
* `-s`, List File Size.
* `-t`, Sorts the output by modification time
* `-r`, Reverses the order while sorting
* `-R`, displays the contents of the directory, and its subdirectories.

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