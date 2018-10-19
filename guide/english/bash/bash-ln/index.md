---
title: Bash Link
---
 ## Bash command: ln
 The `ln` commands stands for link and it allows you to link to an existing file or directory. This makes it easy to have references to a single file or directory in multiple places.
 
 ### Usage
 ```
 ln <source file> <target file>
 ```
 
 Commonly used options:
 * `-s` - Symbolic link. This is considered a soft link meaning that if the link is removed the original file or directory is not affected.
 
 ### Examples
 #### Create a link to the /etc/hosts file in /usr/local
 ```bash
 ln -s /etc/hosts /usr/local/hosts_link
 ```
 
 ### More Information
 * Run `man ln` for further details and complete list of options.
 * [Wikipedia] (https://en.wikipedia.org/wiki/Ln_(Unix))
