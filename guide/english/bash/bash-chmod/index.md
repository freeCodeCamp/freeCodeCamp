---
title: Bash chmod
---

## Bash command: chmod

The chmod command is used to change file permissions for both files and directories.

The standard mode is used via the arguments listed below in the commonly used arguments section.

The numeric mode is dictated by three numbers the user, group, and others, in that order.

- 4 stands for "read",
- 2 stands for "write",
- 1 stands for "execute", and
- 0 stands for "no permission."

You can also use a combination of these numbers; for example 7 would give all permissions, 6 would give read and write permissions, and 5 would give read and execute permissions.

The reference mode is used by specifying a file for reference and the targeted file. The targeted file then takes on the permissions of the reference file.

### Usage

```bash
chmod [options] mode[,mode] file1 [file2 ...]
```
```bash
chmod [Options] Numeric_Mode file1 [file2 ...]
```
```bash
chmod [Options] --reference=RFile file1 [file2 ...]
```
### Commonly Used Arguments

The first arguments are the user's permissions that will be targeted. These are followed by a '+' to add permission, '-' to remove permission or '=' to set as the only permissions. 

- `u`: The user who owns it.
- `g`: Other users in the files' group.
- `o`: Other users not in the files' group.
- `a`: All users.

The second arguments dictate the permissions given.

- `r`: Read permission.
- `w`: Write permission.
- `x`: Execute permission.

### Examples

```bash
chmod 754 file1.txt
```
Gives the user all permissions, the files group read and execute, and all others read.
```bash
chmod u+x file1.txt
```
Gives the user/owner the permission to execute the file.
```bash
chmod -reference=file1.txt file2.txt
```
Gives file2 the same permissions that file1 has.

#### More Information:
* [Wikipedia](https://en.wikipedia.org/wiki/Chmod)
* [SS64](https://ss64.com/bash/chmod.html)
