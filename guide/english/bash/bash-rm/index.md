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

- `-r` , means to recursively delete all the folders inside a directory.
- `-f` , means to forcefully delete anything folder or file.
- `-rf` , means that both arguments will be used together.

### More Information:
* [Wikipedia](https://en.wikipedia.org/wiki/Rm_(Unix))
* [Linux](https://linux.die.net/man/1/rm)
