---
title: Moving files between servers
---

## Moving file from local computer to remote server

* First add public key of remote server to known hosts 
* The command to copy files from local computer to remote server is

```shell
scp -i <location of servers private key> <file to be transferred> <user>@host:<location where the file has to be transferred>
```

## Moving file from  remote server to local computer

* First add public key of remote server to known hosts 
* The command to copy files from remote server to local computer is

```shell
scp -i <location of servers private key> <user>@<host>:<location of remote file> <location where the file has to be transferred>
```

## Moving file between remote servers

* First add public key of remote servers to known hosts 
* The command to copy files between remote server to local computer is

```shell
scp -i <location of servers private key> <user1>@<host1>:<location of remote file> <user2>@<host2>:<location where the file has to be transferred>
```

## To move entire directory use -r option

```shell
scp -r root@hostname:/source_folder/* /destination_folder/
```
