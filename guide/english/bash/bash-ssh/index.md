---
title: Bash ssh
---

## Bash command: ssh

This command is use **to connect to a remote computer**, for example `ssh 123.456.789.012` will try to establish a connection with that host. The address of the remote computer can be provided using an IP address or, if provided, an identifier.

If the remote computer requires the user to login, they can use the form `ssh username@remote_address`, which will then prompt them for the user password on a successful connection.

One thing to note, if the server is configured to listen to any port other than `22`, then you have to use `-p` option to specify the port. For example: `ssh -p 2024 123.456.789.012`.


### More Information:
* [Wikipedia](https://en.wikipedia.org/wiki/Secure_Shell)
