---
title: Get root privileges using the sudo command.
---


# Get root privileges using the sudo command.

The `sudo` (super do) command in Linux is used to give certain user(s) only a few super (root/administrator) permissions. And with those granted permissions a regular user can issue root commands to carry out any administrative tasks on the system.

If you want to use `sudo` to run commands as a regular user, you’d prepend the `sudo` command to the command you intend to execute using this format:

`sudo <command>`

For example;

`sudo` 

When a user enters the `sudo` command into the terminal, he must provide an authentic password, after which he can reuse that command without entering a password for a specific period of time (five minutes is the default). 

When an unauthorized user attempts to use a `sudo` command, an error is returned by the terminal and its logged by the system. This log can help a Linux system administrator to monitor it usage on the system.
