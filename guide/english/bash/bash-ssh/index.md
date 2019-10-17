---
title: Bash ssh
---

## Bash command: ssh

**Used to connect to a remote computer** ,for example `ssh 123.456.789.012` will try to establish a connection with that host. 
The address of the remote computer can be provided using an IP address or, if provided, an identifier.

If the remote computer requires user login, the form `ssh username@remote_address` can be used, which will then prompt the user for a password on successful connection.

Commonly used options:<br>
1) Port Number:<br>
One cn use the `-p` option with the ssh command to specify the port number to which one has to connect on the server. It's usage is as follows: `ssh username@remote_address -p [port_number]`

2) Verbose Mode option:<br>
One can use the `-v` option to get more infromation in the form of output on the terminal regarding the connection being made. It's usage is as follows: `ssh username@remote_address -v`

### More Information:
* [Wikipedia](https://en.wikipedia.org/wiki/Secure_Shell)
