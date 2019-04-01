---
title: Bash Sort
---

## Bash Sort

Sort is one a simple and useful command which will rearrange the lines in a text file so that they are sorted, numerically and alphabetically. There are by default the following rules for sorting text:

* numbers will appear befor a letter
* letter that appears earlier in the alphabet will appear before a letter that appears later in the alphabet 
* lowercase letters will appear before lines with the same letter in uppercase

The default rules of sorting can be changes by the options you provice to the command.

### Usage

```bash
sort [options] [file_names]
```

Most used options:

* `-b`, ignore leading blanks.
* `-f`, fold lower case to upper case characters.
* `-h`, compare human readable numbers (e.g., "2K", "1G").
* `-r`, reverse the result of comparisons.
* `-R`, sort in a random order


### Example

We have a file **data.txt**, which contains the following text:
```bash
apples
oranges
pears
kiwis
bananas
```
To sort the lines in the file alphabetically, use the following command:

```bash
sort data.txt
```
which will produce the following output:
```bash
apples
bananas
kiwis
oranges
pears
```

To reverse the sorting order, we using the `-r` flag.
```bash
sort -r data.txt
```
which will produce the following output:
```bash
pears
oranges
kiwis
bananas
apples
```

#### More Information:
* Wikipedia: https://en.wikipedia.org/wiki/Sort_(Unix)
