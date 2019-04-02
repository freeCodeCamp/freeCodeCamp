---
title: Bash rm
---

## Bash command: rm
 `rm` attempts to remove non-directory type files specified. 
 If permissions do not allow writing the user is prompted for confirmation.

### Usage

```bash
rm [options] [file_name]
```

**Delete a File**

```bash
rm <file name or file path>
```

**Delete a Directory**

```bash
rm -R <folder name or folder path>
```

**Delete Files of a certain type**

```bash
rm -R *file_extension
```
- `*` accounts for the part to ignore, `file_extension` is the type to remove
Example:
```bash
rm -R *.txt
```
Removes all file ending with .txt

There are few commonly used arguments:

- `-r` means to recursively delete all the folders inside a directory.
- `-f` means to forcefully delete any folder or file.
- `-i` will ask before deleting the file.
- `-v` will explain what was deleted.

### Warning
This command is capable of deleting many files at once with ease. This can be beneficial, but also dangerous. Use at your own risk.

To remove a nonempty folder for example, type:
```bash
rm -rf folder
```

### Wildcards
The `rm` command can be used in conjunction with an asterisk to delete multiple items matching a specific set of criteria. For example, you could use `rm test*` to remove all files in a directory starting with "test" regardless of whatever text follows that string. You can also use an asterisk by itself to purge all files in the current directory using `rm *`.

### More Information:
* [Wikipedia](https://en.wikipedia.org/wiki/Rm_(Unix))
* [Man pages](http://man7.org/linux/man-pages/man1/rm.1.html)
* [Linux](https://linux.die.net/man/1/rm)