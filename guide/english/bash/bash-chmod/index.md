---
title: Bash chmod
---

## Bash command: chmod

The chmod command is used to change file permissions for both files and directories.

## Few more Examples:

To provide read access to user       - `chmod u+r hello.py`
To provide write access to group     - `chmod g+w hello.py`
To remove execute access to everyone - `chmod a-x hello.py`

## Same examples to specify the permissions in Numerical format:

r - Read    - 4
w - Write   - 2
x - Execute - 1

To provide read access to user       - `chmod 400 hello.py`
To provide write access to group     - `chmod 020 hello.py`
To remove execute access to everyone - `chmod 001 hello.py`

## Examples to specify combination of permissions

To provide more than one permission, sum up the numbers. 

To provide both read & write access to group(4+2=6) - `chmod 060 hello.py`
To provide full permissions for everyone (4+2+1=7)  - `chmod 777 hello.py`

## Option to recursively apply permission inside directory
To apply the permissions recursively to directory -R option must be specified - `chmod -R 660 /test/bin`
 - This will recursively modify all the files and directories inside the 'bin' directory with Read & Write permissions.

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
