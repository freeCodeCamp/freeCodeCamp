---
title: Bash Cat
---

## Bash Cat

Cat is one of the most frequently used commands in Unix operating systems.

Cat is used to read a file sequentially and print it to the standard output.
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

### Example

Print in terminal the content of file.txt:
```bash
cat file.txt
```

Concatenate the content of the two files and display the result in terminal:
```bash
cat file1.txt file2.txt
```

#### More Information:
* Wikipedia: https://en.wikipedia.org/wiki/Cat_(Unix)
