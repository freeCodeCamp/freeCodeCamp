---
title: Bash ssh
---

## Bash command: ssh

This command is used **to connect to a remote computer**, for example `ssh 123.456.789.012` will try to establish a connection with that host. The address of the remote computer can be provided using an IP address or, if provided, an identifier.

If the remote computer requires the user to login, they can use the form `ssh username@remote_address`, which will then prompt them for the user password on a successful connection.

It also has command line options which can be found on the SSH website.

One thing to note, if the server is configured to listen to any port other than `22`, then you have to use `-p` option to specify the port. For example: `ssh -p 2024 123.456.789.012`.

If the remote computer requires user login, the form `ssh username@remote_address` can be used, which will then prompt for the user password on successful connection.

## Logging in without a password

It is also possible to set up your Linux servers to connect without entering a password.

This can be important when servers need to connect to each other without user input.

Examples of this include:
- transferring files back and forth (using SCP)
- using automatic scripts for backups

### Step 1 - Generate an SSH authentication-key file
(When you are prompted for a passphrase, leave it blank)

~~~
[user@server1 ~]$ ssh-keygen

Generating public/private rsa key pair.

Enter file in which to save the key (/home/user/.ssh/id_rsa):

Enter passphrase (empty for no passphrase):

Enter same passphrase again:

Your identification has been saved in /home/user/.ssh/id_rsa.

Your public key has been saved in /home/user/.ssh/id_rsa.pub.

The key fingerprint is:

1e:b2:f4:89:5a:7f:2d:a5:a5:4d:6d:66:2c:82:d8:18 root@ssh-client
~~~

### Step 2 - Copy the public part of the key to other servers
~~~
[user@server1 ~]$ ssh-copy-id -i ~/.ssh/id_rsa.pub user@server2
user@ssh-server's password:

  
  If the server is not installed with openssh-clients you can copy the authentication key with  the command:
  cat ~/.ssh/id_rsa.pub | ssh user@123.45.56.78 "cat >> ~/.ssh/authorized_keys"
  
~~~

### Step 3 - Verification
Attempt to connect to the other servers va SSH 
ssh user@server2

If access is denied, it is likely a permission error on the .ssh directory.

Check/ change the permissions on both the local and remote user's files:

chmod 600 ~/.ssh/authorized_keys
chmod 700 ~/.ssh/

Try to connect again after the permission change.



 


### More Information:
* [Wikipedia](https://en.wikipedia.org/wiki/Secure_Shell)
* [SSH](https://www.ssh.com/ssh/command)
