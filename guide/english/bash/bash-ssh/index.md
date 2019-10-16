---
title: Bash ssh
---

## Bash command: ssh

**Used to connect to a remote computer** ,for example `ssh 123.456.789.012` will try to establish a connection with that host. The
address of the remote computer can be provided using an IP address or, if provided, an identifier.

If the remote computer requires user login, the form `ssh username@remote_address` can be used, which will then prompt for the password on successful connection.

The  `-d` delimiter can be used with the `ssh` command to specify the port of the server that you want to connect to. 
Example usage: `ssh username@example.com -p 22`

### More Information:
* [Wikipedia](https://en.wikipedia.org/wiki/Secure_Shell)
