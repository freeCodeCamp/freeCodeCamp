---
title: ssh (Secure SHell)
---

## Bash command: ssh

**Used to securly connect to a remote server** using Diffie-Hellman algorythm for key exchange, ssh replaces the archaic telnet program for remote shell sessions. 

for example `ssh 192.0.2.1` will try to establish a connection with that host. The
address of the remote computer can be provided using an IP address resolvable hostname or FQDN.

If you wish to use a different username then the one initiating the session (i.e. you're using ssh from root but wish to log in as different user to a remote system), the form `ssh username@remote_address` can be used, which will then prompt for the user password on successful connection.

Basic usage arguments:
- `-p` - use a different port then configured in ssh_config file (usually 22)
- `-u` - pass username outside of hostname URI
- `-i` - use a different location for private key

### More Information:
* [Wikipedia](https://en.wikipedia.org/wiki/Secure_Shell)
