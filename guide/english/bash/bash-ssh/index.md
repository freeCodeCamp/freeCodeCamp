---
title: Bash ssh
---

## Bash command: ssh

SSH (**S**ecure **SH**ell) is a secure method of remotely connecting to a Linux machine. 

The basic syntax of the command is `ssh username@hostname`. Hostname can be either an IP address or a FQDN. 'username@' can be excluded if the user currently logged into the shell has the same username as the desired user on the remote system.

SSH can rely on password-based authentication or key-based authentication. Password-based authentication is becoming less common as cloud solutions such as Amazon Web Services, Microsoft Azure, and Google Cloud Platform promote the usage of keys. If a system is configured for password-based authentication, once the connection is opened the system will prompt the user for the password. If the system is configured to use keys, the key can be added to the ssh-agent (more below) or specified with the -i switch like so: `ssh -i my_private_key.pem username@hostname`.

There are several advanced usage patterns such as key forwarding with the ssh-agent, which are described in the links below.

### More Information:
* [Wikipedia](https://en.wikipedia.org/wiki/Secure_Shell)
* [Digital Ocean's Guide to SSH Keys](https://www.digitalocean.com/community/tutorials/how-to-set-up-ssh-keys--2)
* [AWS's Guide to SSH Agent Forwarding](https://aws.amazon.com/blogs/security/securely-connect-to-linux-instances-running-in-a-private-amazon-vpc/)
