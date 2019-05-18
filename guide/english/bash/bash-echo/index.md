---
title: Bash Echo
---

## Bash command: echo

The `echo` command is used to return a passed string.

### Usage

```bash
$ echo [-neE] [string]
```

`echo` is commonly used with the `>` and `>>` operators to pipe the input into a file.

### Examples

#### Print an environment variable

```bash
$ echo $0
```

This prints the shell to the screen.

#### Write a string to file

```bash
$ echo 'I am a string' > file.txt
```

This creates a new file called `file.txt` if it doesn't exist, or overrides it if it does.

#### Append a string to file

```bash
$ echo 'I am a string' >> file.txt
```

This creates a new file called `file.txt` if it doesn't already exist, or appends I am a string to it if it doesn't exist.

### More Information

- [Wikepedia](<https://en.wikipedia.org/wiki/Echo_(command)>)
- [Man page](http://linuxcommand.org/lc3_man_pages/echoh.html)
