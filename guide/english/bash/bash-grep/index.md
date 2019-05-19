---
title: Bash grep
---
## Bash command: grep

The `grep` command is used to find matching text in input file(s). Default output lists lines from the input file(s) which contain a match to the provided pattern. Options may be used to alter matching behavior or to provide a different output scheme.

### Usage

```bash
grep [options] [pattern] [file_names]
```
Common options:

* `-i`, Ignore case when mathing the provided pattern
* `-v`, Show results which do not match the provided pattern.
* `-l`, Instead of outputting matching lines, output the file paths which contain matching text.
* `-r`, Search all files in the provided directories. Directory name(s) or path(s) is used in place of the file name(s) (Search defaults to the current working directory if none is provided)
* `-c`, Output a count of the matching lines.
* `-E`, Use extended regular expressions to define the pattern to be matched. The command alias `egrep` is the same as `grep -E`

### Examples:

Search a server log file for lines containing the text "ERROR":
```bash
grep ERROR server.log
```

Using a pipe to combine commands, list files and folders in the current working directory that contain the text "code":
```bash
ls | grep code
```

Search for IP 127.0.0.1 in the /etc/hosts file
 ```bash
 grep "127.0.0.1" /etc/hosts
 ```
 
Search for oom (out of memory) in /var/log/messages
 ```bash
 grep -i oom /var/log/messages
 ```
 
 ### More Information
* [Bash Guide for Beginners, Examples using grep](https://tldp.org/LDP/Bash-Beginners-Guide/html/sect_04_02.html)
* [Wikipedia](https://en.wikipedia.org/wiki/Grep)
