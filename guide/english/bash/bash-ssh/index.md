---
title: Bash ssh (Secure SHell)
---

## Bash command: ssh

**Used to connect to a remote computer** It's full form is 'Secure Shell'. It's purpose is to connect to another remote computer using tcp. The address of the remote computer can be provided using an IP address or, if provided, an identifier.

If the remote computer requires user login, the form `ssh username@remote_address` can be used, which will then prompt for the user password on successful connection.

Example command:
`ssh pi@192.168.0.101`

This will connect to the computer in the local ip address of 192.168.0.101 and log in with the username pi.

Another way to use this command is to pipe a command directly to it.

For example:
To execute the command
`ls /tmp/doc` 

on the computer with ip address 192.168.0.101, type the following command at a shell prompt:

`ssh 192.168.0.101  ls /tmp/doc`

After authenticating to the remote server, the contents of the remote directory will be displayed, and you will return to your local shell prompt.

If you wish to use a different username then the one initiating the session (i.e. you're using ssh from root but wish to log in as different user to a remote system), the form `ssh username@remote_address` can be used, which will then prompt for the user password on successful connection.

Basic usage arguments:
- `-p` - use a different port then configured in ssh_config file (usually 22)
- `-u` - pass username outside of hostname URI
- `-i` - use a different location for private key

### More Information:
* [Wikipedia](https://en.wikipedia.org/wiki/Secure_Shell)
* [SSH](https://www.ssh.com/ssh/command)
