---
title: Bash Grep
---
 ## Bash command: grep
 `grep` stands for Global Regular Expression Print. It is used to search piped input or files for a string which can contain regex.
 
 ### Usage
 ```
 grep <some string> <file name>
 ```
 
 Commonly used options:
 * `-i` - Ignores the case when performing the search.
 * `-v` - Inverts the search and only selects lines that do not match the search string.
 
 ### Examples
 #### Search for IP 127.0.0.1 in the /etc/hosts file
 ```bash
 grep "127.0.0.1" /etc/hosts
 ```
 
 #### Search for oom (out of memory) in /var/log/messages
 ```bash
 grep -i oom /var/log/messages
 ```
 
 ### More Information
 * run `man grep` for a full list of available flags/options to use.
 * [Wikipedia](https://en.wikipedia.org/wiki/Grep)
