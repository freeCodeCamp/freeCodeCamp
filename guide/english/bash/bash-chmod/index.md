---
title: Bash chmod
---

## Bash command: chmod

### Permissions of a File/Directory ###  
In UNIX-like systems file permissions(modes) are organized in 3 groups: 
* u - user that owns the file,
* g - group the file belongs to, and
* o - other users.

Basic permissions are:
* r - read,
* w - write, and
* x - execute.

Let's look at an example, the output of `ls -l hello.py` looks like:  
`-rw-rw-r-- 1 myName myGroup 135 Oct 20 20:00 hello.py`  
Let's split leftmost part like this:  
`-  rw-  rw-  r-- `  First character shows the type of the file, and the next 3 groups of 3 characters show permissions in this order: owner, group, others. In this case the permissions are read, and write(rw-) for owner and group, and read only(r--) for others.  

### Changing Permissions with chmod ###  
**chmod** stands for 'change mode' and can be used in two ways: symbolic representation and octal number representation.  
**Note: to change permissions you must be owner of the file or root (use `sudo chmod`).**
#### Symbolic representation ####
`chmod [ugoa][+-=]permissions(r,w,x..) <FILE/DIR>` where  
u, g, o, a &nbsp; stand for owner(user), group, others and all users.  
+, -, = &nbsp; are for add, remove and set permissions. 
 
Examples:  
`chmod u+x` &nbsp;&nbsp;&nbsp;add execute permission to owner  
`chmod a-w` &nbsp;&nbsp;&nbsp;remove write permission from all users  
`chmod ug=rx` set permissions to read and execute for owner and group (removes all other privileges) 

#### Symbolic representation ####
`chmod ugo <FILE/DIR>` where u, g, and o numbers (0, 1, ..., 7) representing permissions for owner, group and other users. 

|Octal   | Symbolic |
|:------:|:--------:|
|   7    |    rwx   |
|   6    |    rw-   |
|   5    |    r-x   |
|   4    |    r--   |
|   3    |    -wx   |
|   2    |    -w-   |
|   1    |    --x   |
|   0    |    ---   |

Examples:  
`chmod 777 <FILE/DIR>` read, write and execute for all users  
`chmod 664 <FILE/DIR>` read and write for owner and group, only read for others  
`chmod 751 <FILE/DIR>` owner can read,write and execute; group can read and execute; others can execute only.  

### More Information:
* [Wikipedia](https://en.wikipedia.org/wiki/Chmod)

