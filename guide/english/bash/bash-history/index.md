---
title: Bash History
---
## History
`history` with no arguments prints a chronological list of command line input to standard out, each preceded with a sequential numerical identifier.

You can pass a single numerical argument, e.g. `history 10`, which will show only the last *n* commands.

`!` is known as the history expansion. It enables selection of specific historical commands. For example, `!5` will reproduce the fifth command from the beginning.
`!` can be followed with a string as well, e.g. `!cd`. This will reproduce the last command beginning with that string.

A common use case for history is to recall and repeat a previous used sequence of commands (workflow). This process can be made more convenient by redirecting the output of `history` to the `grep` command using a `|` (pipe). (In it's simplest usage, `grep` takes a single string argument and filters out lines of the command's input that do not contain the string.) For example, `history | grep cd` will output a list of all uses of the cd command (plus any other command that happened to include that string).

### More information
* [gnu.org](https://www.gnu.org/software/bash/manual/html_node/Bash-History-Builtins.html) (online manual page)
* [rootusers.com](https://www.rootusers.com/17-bash-history-command-examples-in-linux/) (common usage examples)
