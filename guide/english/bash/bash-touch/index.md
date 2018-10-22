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

-----
Title:Bash command Touch
-----
**What's touch?**

The touch command is the easiest way to create new, empty files. It is also used to change the timestamps (i.e., dates and times of the most recent access and modification) on existing files and directories.

**Touch Command Options:**

-a, change the access time only
-c, if the file does not exist, do not create it
-d, update the access and modification times
-m, change the modification time only
-r, use the access and modification times of file
-t, creates a file using a specified time
