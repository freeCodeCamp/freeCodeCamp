---
title: Bash rm
---

## Bash command: rm

**Delete a File**, for example `rm hello`. 
The command can also **Delete one or more directories**, if used with the `-r` switch (e.g. `rm -r`).

There are few commonly used arguments:

- `-r` , means to recursively delete all the folders inside a directory.
- `-f` , means to forcefully delete anything folder or file.

**WARNING:** this command can be very dangerous when used with the `-f` switch. For example, `rm -rf /` or `rm -rf *` will easily destroy many/all files on your system (especially when run as _root_).

If new to using the command line, you may wish to include the line `alias rm='rm -i'` in your .bashrc. This will cause you to be prompted before each file is deleted.

### More Information:
* [Wikipedia](https://en.wikipedia.org/wiki/Rm_(Unix))
