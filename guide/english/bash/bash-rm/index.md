---
title: Bash rm
---

## Bash command: rm

### Usage

**Delete a File**

```bash
rm <file name or file path>
```

**Delete a Directory**

```bash
rm -R <folder name or folder path>
```

You will be prompted with **'rm: remove regular file ‘hello’?'** and will need to respond **'y'** before the file can be deleted. Use this command with caution because 'rm' is a permanent action.

There are few commonly used arguments:

- `-r` , means to recursively delete all the folders inside a directory.
- `-f` , means to forcefully delete any folder or file.
- `-i` , will ask before deleting the file.
- `-v` , will explain what was deleted.

### Warning
This command is capable of deleting many files at once with ease. This can be beneficial, but also dangerous. Use at your own risk.

To remove a nonempty folder for example, type:
   `rm -rf folder`
 


### More Information:
* [Wikipedia](https://en.wikipedia.org/wiki/Rm_(Unix))
* [Man pages](http://man7.org/linux/man-pages/man1/rm.1.html)
* [Linux](https://linux.die.net/man/1/rm)