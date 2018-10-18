---
title: Bash ssh
---

## Bash command: ssh

**Used to connect to a remote computer** ,for example `ssh 123.456.789.012` will try to establish a connection with that host. The
address of the remote computer can be provided using an IP address or, if provided, an identifier.

If the remote computer requires user login, the form `ssh username@remote_address` can be used, which will then prompt for the user
password on successful connection.

NOTE: If server is configured to listen to other than port 22 then we have to use '-p' option to specify the port.
Example: ssh -p 2024 123.456.789.012


### More Information:
* [Wikipedia](https://en.wikipedia.org/wiki/Secure_Shell)
