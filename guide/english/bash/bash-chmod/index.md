---
title: Bash chmod
---

## Bash command: chmod

**Change the permissions of a File/Directory** ,for example `chmod u+x hello.py`.(Gives the user the permission to execute the file)

`chmod permission_owner_permission_owner_permission_world file_name`

## Desc

Owner: Person who create the file
Group: Everyone inside the same Group as the Owner **NOT** including the Owner
World: Everyone outside of the Group **NOT** including the Owner

## Permissions include: 

Read: User can read a file
Write: User can modify/write to a file
Execute: User can execute a file/view it in the directory (Ex: When you `cd dir_name` you are executing it)

## Permission shortcuts:
Read: r
Write: w
Execute: x

Alternatively permissions can be written as an octal number:
Read: 4
Write: 2
Execute: 1

777 would give:
* Owner: read, write, execute permissions
* Group: read, write, execute permissions
* World: read, write, execute permissions

671 would give:
* Owner: read, write permissions
* Group: read, write, execute permissions
* World: execute permissions

### More Information:
* [Wikipedia](https://en.wikipedia.org/wiki/Chmod)
