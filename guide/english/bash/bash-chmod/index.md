---
title: Bash chmod
---

## Bash command: chmod

**Change the permissions of a File/Directory**

Common usages:
1) Making a file read-only:<br>
To make a file read only means only owner is able to read it, You have to give read permissions to owner and no permissions to others and group, so “400” is the octal representation for this.
`chmod 400 file_name`

2) Giving all permissions to a file to all users or groups:<br>
This gives all the permissions to all the users of the system for the specified file
`chmod 777 file_name`

3) Making a file executable:<br>
This makes the file specfied an executable
`chmod +x file_name`
This file can now be run by using this command:
`./file_name`

### More Information:
* [Wikipedia](https://en.wikipedia.org/wiki/Chmod)
