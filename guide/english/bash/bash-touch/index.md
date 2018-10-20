---
title: Bash touch
---

## Bash command: touch

**Changes timestamps of files.**

```
touch [options] filename
```

Creates an empty file with that filename if none exists, or changes the "Last Modified" date of an existing file to the current date and time.

Commonly used options:
- `-t` change timestamp to specific date ((YYYYMMDDHHMM.SS)) instead of current time.
- `-r` use timestamp from first file to second file.

Examples:
```
touch -t YYYYMMDDHHMM.SS filename
touch -r file1 file2
```

### More Information:
* [Man pages](http://man7.org/linux/man-pages/man1/touch.1.html)
