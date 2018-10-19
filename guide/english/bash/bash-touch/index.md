---
title: Bash touch
---

## Bash command: touch

**Change timestamps of files.**

```
touch [options] filename
```

Creates empty file if not exists or modify times of existing files to current time.

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
