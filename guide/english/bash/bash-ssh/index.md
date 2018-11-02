---
title: Bash ssh
---

## Bash command: ssh

Ssh (Secure Shell) is a command in the bash shell and command language (as described below). 
However it is far mroe than a bash command, it is a protocol for connecting securely over an unsecured network.

The ssh command is used to **connect to a remote computer**. 
For example, `ssh 123.456.789.012` will try to establish a connection with that host. 
The address of the remote computer can be provided using an IP address or, if provided, an identifier, such as the username of the remote machine.
If the remote computer requires user login, the form `ssh username@remote_address` can be used, which will then prompt for the user password on successful connection.

### More Information:
* [Wikipedia](https://en.wikipedia.org/wiki/Secure_Shell)
* [SSH](https://www.ssh.com/ssh/command)
