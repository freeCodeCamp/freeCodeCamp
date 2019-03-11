---
title: Bash mv
---

## Bash command: mv

The mv command is used to move files and folders.

### Usage

```
mv <source> <path + filename>

```

The first argument is the file you want to move, and the second is the location to move it to. It can also be used to rename a file, by inputting 2 file names as parameters, like so: `mv originalFilename.txt newFilename.txt`

Commonly used options:
- `-b` to create a backup file with the name of the destination file
- `-f` to force move them and overwrite files without checking with the user.
- `-i` to prompt confirmation before overwriting files.
- `-n` do not overwrite an existing file
- `-T` to rename a file named source to destination

### Warning

This command is capable of modifying many files at once with ease.  This can be beneficial, but also dangerous. Use at your own risk

### More Information:
* [Wikipedia](https://en.wikipedia.org/wiki/Mv)
* [SS64](https://ss64.com/bash/mv.html)
* [Man pages](http://man7.org/linux/man-pages/man1/mv.1.html)
