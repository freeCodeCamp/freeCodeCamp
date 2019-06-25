---
title: Bash cat
---

## Bash command: cat
The bash command `cat` is one of the most frequently used commands in Unix operating systems. It is used to read a file sequentially and print it to the standard output.
The command's name is derived from its function to con**cat**enate files.

The cat command can also be used to create a text file.

### Usage
```bash
cat [options] [file_names]
```

Most used options:
* `-b`, number non-blank output lines
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

Concatenate the content of two files and store it in a new file:
```bash
cat file1.txt file2.txt > new_file.txt
```

Creating a new text file:
```bash
cat > yourfile.txt
```
After pressing Enter, the cursor will be placed on the next line. You can start entering your desired text directly into your file. Press Ctrl+D or Ctrl+C to exit the file.

Using wildcard to display contents of all text files:
```bash
cat *.txt
```

**Tip**: Using `cat` on a directory will cause error, so make sure it's a readable file.

#### More Information:
* Wikipedia: https://en.wikipedia.org/wiki/Cat_(Unix)
* Man Page: https://ss64.com/bash/cat.html
