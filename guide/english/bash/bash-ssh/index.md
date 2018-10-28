---
title: Bash ssh
---

## Bash command: ssh

This command is used **to connect to a remote computer**, for example `ssh 123.456.789.012` will try to establish a connection with that host. The address of the remote computer can be provided using an IP address or, if provided, an identifier.

If the remote computer requires the user to login, they can use the form `ssh username@remote_address`, which will then prompt them for the user password on a successful connection.

If the remote computer requires user login, the form `ssh username@remote_address` can be used, which will then prompt for the user password on successful connection.

### Usage
```
ssh [options] destination [command]
```
 
Commonly used options:
* `-p` (port) - Used to specify the port to use when connecting to a remote computer.
* `-i` (identity_file) - Used to specify a file from which the identity (private key) for public key authentication is read.  

### More Information:
* [Wikipedia](https://en.wikipedia.org/wiki/Secure_Shell)
* [SSH](https://www.ssh.com/ssh/command)
