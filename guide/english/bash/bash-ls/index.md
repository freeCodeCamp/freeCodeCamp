---
title: Bash ls
---

## Bash ls

`ls` is a command on Unix-like operating systems to list contents of a directory such as folders and file names.  For each file named other than a directory, `ls` displays its name as well as any other information. 


### Usage

```bash
ls [options] [file_names]
```
You can list the items in any directory without even entering the directory. Consider you are in a directory with folders- Test1,Test2. You're in the parent directory you can list all files in Test1 as follows-
`ls Test1`

Most used options:

* `-a`, all files and folders, including ones that are hidden and start with a `.`
*  -d , list directories themselves and not contents of directories
* `-l`, List in long format
* `-lh`, Shows sizes in human readable format
* `-lS`, Displays file size in order, will display big in size first
* `-G`, enable colorized output.
* `-s`, List File Size.
* `-t`, Sorts the output by modification time
* `-r`, Reverses the order while sorting
* `-R`, displays the contents of the directory, and its subdirectories.

### Example:

List files in `freeCodeCamp/guide/`

```bash
ls
CODE_OF_CONDUCT.md bin                package.json       utils
CONTRIBUTING.md    gatsby-browser.js  plugins            yarn.lock
LICENSE.md         gatsby-config.js   src
README.md          gatsby-node.js     static
assets             gatsby-ssr.js      translations
```

### Example:

List files with details in `home/user/docs`

```bash
ls -la
total 4
-rwxrwx---    1 root root      5514 Feb  4  2018 log1.txt
-rwxrwx---    1 root root      1024 Feb  5  2018 colors.txt
-rwxrwx---    1 root root       112 Feb  8  2018 output.txt
-rwxrwx---    1 root root       514 Feb  9  2018 notes.txt
```

#### More Information:

* [Wikipedia](https://en.wikipedia.org/wiki/Ls)
* [Shapeshed](https://shapeshed.com/unix-ls/)
