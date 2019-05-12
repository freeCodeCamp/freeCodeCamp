---
title: Bash touch
---

# Bash command: touch

Creates empty file if filename does not exist or modifies timestamps of existing files to current time.

This command can create multiple empty files in one line of code.

## Usage
```
touch [options] filename
```

Commonly used options:
- `-t` change timestamp to specific date ((YYYYMMDDHHMM.SS)) instead of current time.
- `-r` use timestamp from first file to second file.
- `-a` In case you want to only change the access time, use the -a command line option.
- `-m` Similarly, if the requirement is to only change the modification time, use the -m command line option.
- `-h` Is useful if you only want to change the symbolic link, instead of the referenced file.

## Examples
```bash
touch -t YYYYMMDDHHMM.SS filename
```
```bash
touch -r file1 file2
```
```bash
touch -am file3
```

## Additional Resources
- [Wikipedia](https://en.wikipedia.org/wiki/Touch_(Unix))
- [Man pages](http://man7.org/linux/man-pages/man1/touch.1.html)
- [Examples and options to use with the touch command](https://ss64.com/bash/touch.html)
