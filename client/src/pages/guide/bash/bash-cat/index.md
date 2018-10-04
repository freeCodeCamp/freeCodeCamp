---
title: Bash Cat
---

## Bash Cat

Cat is one of the most frequently used command on Unix-like operating system.

Cat is used to read file sequentially and print them to the standard output.
The name is derived from its function to con**cat**enate files.

### Usage

```bash
cat [options] [file_names]
```

Most used options:

* `-b`, numer non-blank output lines
* `-n`, number all output lines
* `-s`, squeeze multiple adjacent blank lines
* `-v`, display nonprinting characters, except for tabs and the end of line character

### Example:

Print in terminal the content of file.txt:
```bash
cat file.txt
```

Concatenate the content of the two files and display the result in terminal:
```bash
cat file1.txt file2.txt
```

#### More Informations:
* Wikipedia: https://en.wikipedia.org/wiki/Cat_(Unix)