---
title: Bash Grep
---

## Bash Grep

Grep is one of the most useful commands in Unix operating systems.

Grep is used to search for patterns in files.

### Usage

```bash
  grep [OPTIONS] PATTERN [FILE...]
  grep [OPTIONS] -e PATTERN ... [FILE...]
  grep [OPTIONS] -f FILE ... [FILE...]
```

Most used options:

* `-n`, Show relative line number in the file
* `'yourString*'`, String for search, followed by a wildcard character
* `-r`, Recursively search subdirectories listed
* `.`, Directory for search (current directory)


### Example

Recursively search for an occurrence of a string in a specified directory:
```bash
grep -rn "string" directory
```


#### More Information:
* Wikipedia: https://en.wikipedia.org/wiki/Grep
* Linux man-pages: http://man7.org/linux/man-pages/man1/grep.1.html
