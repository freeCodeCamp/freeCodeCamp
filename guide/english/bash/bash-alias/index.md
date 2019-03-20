---
title: Bash Alias
---

## Alias

**Set shortcuts for command line input** to save time typing and recall complex commands easily.

### Usage example
`alias l="ls -alt"`. You can now simply input `l` and the shell will understand it as `ls -alt`. 

### Common implementation
It is common to place calls to `alias` in an rc file, such as .bashrc for the bash shell. Bash runs the contents of the .bashrc file every time a new shell is opened, so aliases created there will always be available. (If you simply call `alias` in the command line, it will only exist for that terminal window.) These files live in the home directory (`~/`). The `.` at the beginning of the filename makes the file hidden, requiring the `-a` flag for `ls` to show it. .bashrc is not created by default, so you may have to `touch` it yourself.

### Further reading
* [gnu.org](https://www.gnu.org/software/bash/manual/html_node/Aliases.html) `alias` manual page
* [Stack Exchange](https://unix.stackexchange.com/questions/129143/what-is-the-purpose-of-bashrc-and-how-does-it-work) post about .bashrc
