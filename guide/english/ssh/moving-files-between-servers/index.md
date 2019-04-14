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

## Limiting scp Bandwidth when copying

* Bandwidth is specified in Kbit/sec, e.g., to limit the speed upto 20 Kbyte/sec, set the `bandwidthlimit` to 8*20 (=160)
* This is time-saving when a huge amount of data is to be copied over slow internet
```shell
scp -l bandwidthlimit root@hostname:/source_folder/* /destination_folder/
```

## Unknown exact file location on remote server

* `ssh` to the remote server
* Go to the file location using `cd`
* Get the file location using `pwd` command and copy the output. `pwd` stands for **Print Working Directory** and that makes it easier to remember.
* Leave the ssh shell by pressing `Ctrl + D`, and then paste the full directory path in your `scp` command. This saves a lot of remembering and typing!

## More information:
* [Tips and Tricks on SSH and SCP](https://linuxacademy.com/blog/linux/ssh-and-scp-howto-tips-tricks/)
