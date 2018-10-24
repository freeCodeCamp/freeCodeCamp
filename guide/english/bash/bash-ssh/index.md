---
title: Bash ssh
---

## Bash command: ssh

- You can use the typeset command to make your functions available on a remote machine via ssh. There are several options depending on how you want to run your remote script.

#!/bin/bash
# Define your function
myfn () {  ls -l; }

- To use the function on the remote hosts:

typeset -f myfn | ssh user@host "$(cat); myfn"
typeset -f myfn | ssh user@host2 "$(cat); myfn"

**Used to connect to a remote computer** ,for example `ssh 123.456.789.012` will try to establish a connection with that host. The
address of the remote computer can be provided using an IP address or, if provided, an identifier.

If the remote computer requires user login, the form `ssh username@remote_address` can be used, which will then prompt for the user
password on successful connection.


### More Information:
* [Wikipedia](https://en.wikipedia.org/wiki/Secure_Shell)
