---
title: Bash ssh (Secure SHell)
---

## Bash command: ssh

SSH (**S**ecure **SH**ell) is a secure method of remotely connecting to a Linux machine. 

The basic syntax of the command is `ssh username@hostname`. 

**Used to connect to a remote computer** It's full form is 'Secure Shell'. It's purpose is to connect to another remote computer using tcp. The address of the remote computer can be provided using an IP address or, if provided, an identifier.

SSH is a replacement for Telnet as well as any remote shell program that predates it. The main benefit it offers over other remote shells is that it is cryptographically secured by default, a now necessary feature as systems are more often than not connected via untrusted networks.

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


* Hostname can be either an IP address or a FQDN. 
* 'username@' can be excluded if the user currently logged into the shell has the same username as the desired user on the remote system.
* if the server is configured to listen to any port other than `22`, then you have to use `-p` option to specify the port. For example: `ssh -p 2024 123.456.789.012`.

SSH can rely on password-based authentication or key-based authentication. Password-based authentication is becoming less common as cloud solutions such as Amazon Web Services, Microsoft Azure, and Google Cloud Platform promote the usage of keys. If a system is configured for password-based authentication, once the connection is opened the system will prompt the user for the password. If the system is configured to use keys, the key can be added to the ssh-agent (more below) or specified with the -i switch like so: `ssh -i my_private_key.pem username@hostname`.

There are several advanced usage patterns such as key forwarding with the ssh-agent, which are described in the links below.

### More Information:
* [Wikipedia](https://en.wikipedia.org/wiki/Secure_Shell)
* [Digital Ocean's Guide to SSH Keys](https://www.digitalocean.com/community/tutorials/how-to-set-up-ssh-keys--2)
* [AWS's Guide to SSH Agent Forwarding](https://aws.amazon.com/blogs/security/securely-connect-to-linux-instances-running-in-a-private-amazon-vpc/)
