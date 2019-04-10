---
title: Bash Man
---

## Man

Man, the abbreviation of **man**ual, is a bash command used to display on-line reference manuals of the given command.

Man displays the relative man page (short for **man**ual **page**) of the given command.

### Usage

```bash
man [options] [command]
```

Most used options:

* `-f`, print a short description of the given command
* `-a`, display, in succession, all of the available intro manual pages contained within the manual
* `-c`, reformat the source man page, used mostly when the page was formatted for a screen with a different number of columns
* `-l`, enabling case sensitivity

### Examples

#### Display the man page of ls

```bash
man ls
```

#### Display a short description of the shutdown command

```bash
man -f shutdown
```

#### Display the man page of ASCII table:

```bash
man ascii
```

### More information:

* [Wikipedia](https://en.wikipedia.org/wiki/Man_page)
* [Linux](https://linux.die.net/man/1/man)
