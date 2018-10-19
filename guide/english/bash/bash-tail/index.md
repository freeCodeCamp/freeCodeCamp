---
title: Bash tail
---

## Bash tail
Tail is a program to display the **tail** end of a text file. If no option is given, tail shows the last 10 lines of a given file.

### Usage

```bash
tail [options] [file_names]
```

Most used options:

* `-f`, display the last lines and then monitor the file. If new lines are added to the file, tail updates the display.
* `-c NUM`, display the last `NUM` bytes of the file.
* `-n NUM`, display the last `NUM` lines, instead of the last 10


### Example

To show the last 10 lines from file **log.txt**

```bash
tail log.txt
```
Show only the last line from file **log.txt**
```bash
tail -n1 log.txt
```
Show live changes from file **log.txt**
```bash
tail -f log.txt
```
#### More Information:
* Wikipedia: https://en.wikipedia.org/wiki/Tail_(Unix)
