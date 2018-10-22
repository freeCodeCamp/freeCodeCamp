---
title: File Permissions
---

# File Permissions

* In Linux each file and directory has three user based permission groups:

     **owner (u)**  - This group of permissions apply only on owner of directory or file, and they do not impact the actions of other users. 
     
     **group (g)** - This group of permissions apply only on group of user that are assigned to the directory or file, and they do not impact the actions of other users.
     
     **all users (o)** - This group of permissions apply to all users on the system.

* In Linux each file and directory has three basic permission types:

     **read** - This permission allows user to read content of files.
     
     **write** - This permission allows user to write or modify the file or directory.
     
     **execute** - This permission allows user to execute a file or view the content of directory.
     
* To view permission you can use some of content listing commands such as `ls -l`, `ll`  and etc.
     
     Permissions are displayed as **_rwxrwxrwx**. Where _ means it is either directory marked as `drwxrwxrwx` or link marked as `lrwxrwxrwx`, first set of rwx are permissions for owner, second one are for group and the last set of rwx permissions are applied on all users.
     
     Usually each set of permissions has its value in integer. You can calculate each set value if you sum default values of each permission.
     
     **read (r)** = **4**
     
     **erite (w)** = **2**
     
     **execute (x)** = **1**
     
     This is important when you want to grant permissions to some type of user `owner`, `group`, `all users`. Granting permissions is usually done with command `chmod`.
     
     ```
     chmod u=rwx,g=rx,o=r myfile
     ```
     or equivalent
     ```
     chmod 754 myfile
     ```
     Example with no permission for groups
     ```
     chmod 704 myfile
     ```
