---
title: Bash mv
---

## Bash command: mv

**Moves files and folders.**

```
mv source target
mv source ... directory
```

The first argument is the file you want to move, and the second is the location to move it to. It can also be used to rename a file, by inputting 2 file names as parameters, like so: `mv originalFilename.txt newFilename.txt`

Commonly used options:
- `-f` to force move them and overwrite files without checking with the user.
- `-i` to prompt confirmation before overwriting files.

### Warning

This command is capable of modifying many files at once with ease.  This can be beneficial, but also dangerous. Use at your own risk

### More Information:
* [Wikipedia](https://en.wikipedia.org/wiki/Mv)
