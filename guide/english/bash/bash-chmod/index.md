---
title: Bash chmod
---

## Bash command: chmod

**Change the permissions of a File/Directory** ,for example `chmod u+x hello.py`.(Gives the user the permission to execute the file)

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
 

### More Information:
* [Wikipedia](https://en.wikipedia.org/wiki/Chmod)
