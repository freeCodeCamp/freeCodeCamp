---
title: Bash touch
---

## Bash command: touch

Touch is used to change the timestamps of files.
An empty file is created if does not already exist.

### Usage

```bash
touch [options] filename
```

Commonly used options:
- `-t` change timestamp to specific date ((YYYYMMDDHHMM.SS)) instead of current time.
- `-r` use timestamp from first file to second file.
- `-a` In case you want to only change the access time, use the -a command line option.
- `-m` Similarly, if the requirement is to only change the modification time, use the -m command line option.

### Examples

```bash
touch -t YYYYMMDDHHMM.SS filename
```
```bash
touch -r file1 file2
```
```bash
touch -am file3
```

#### More Information:

* [Wikipedia](https://en.wikipedia.org/wiki/Touch_(Unix))
* [Man pages](http://man7.org/linux/man-pages/man1/touch.1.html)
