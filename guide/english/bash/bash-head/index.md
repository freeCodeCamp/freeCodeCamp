---
title: Bash Head
---

## Bash command: head

Head is used to print the first ten lines (by default) or any other amount specified of a file or files.
Cat is used to read a file sequentially and print it to the standard output. <br>
ie prints out the entire contents of the entire file. - that is not always necessary, perhaps you just want to check the contents of a file to see if it is the correct one, or check that it is indeed not empty.
The head command allows you to view the first N lines of a file.

if more than on file is called then the first ten lines of each file is displayed, unless specific number of lines are specified.
Choosing to display the file header is optional using the option below

### Usage

```bash
head [options] [file_name(s)]
```

Most used options:

* `-n N`, prints out the first N lines of the file(s)
* `-q`, doesn't print out the file headers
* `-v`, always prints out the file headers

### Example

```bash
head file.txt
```
Prints in terminal the first ten lines of file.txt (default)

```bash
head -n 7 file.txt
```
Prints in terminal the first seven lines of file.txt

```bash
head -q -n 5 file1.txt file2.txt
```
Print in terminal the first 5 lines of file1.txt, followed by the first 5 lines of file2.txt


### More Information:
* [Wikipedia](https://en.wikipedia.org/wiki/Head_(Unix))
