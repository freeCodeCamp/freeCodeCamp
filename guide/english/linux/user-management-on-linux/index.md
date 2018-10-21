---
title: User management on Linux
---
#### Note: To run a command as `sudo` you must have sudo user account (Administrator)

## How to Create a User

#### Use the `adduser` or `useradd` command to add a new user to your system.
```
$ sudo adduser username
```
 Be sure to replace `username` with the user that you want to create.


#### Use the `passwd` command to update the new user's password.
```
$ sudo passwd username
```
A strong password is highly recommended!


## How to Create a Sudo User

To create a `sudo` user, you need to create a regular user first using the command above, then add this user to the group of `sudoers` using the `usermod` command.
##### On Debian systems (Ubuntu/LinuxMint/ElementryOS), members of the `sudo` group have sudo privileges. 
```
$ sudo usermod -aG sudo username
```

##### On RHEL based syatems (Fedora/CentOs), members of the `wheel` group have sudo privilages.
```
$ sudo usermod -aG wheel username
```


## How to Delete a User
##### For Debian (Ubuntu)
```
$ sudo deluser username
```

##### For RHEL (Fedora/CentOS)
```
$ sudo userdel username
```
##### Creating groups and adding users
```
$ sudo groupadd editorial
$ sudo usermod -a -G editorial username
```
#### Note: All above commands can be executed without sudo in `root` mode

To switch to root on ubuntu, run `su -i` command followed by the password of the user logged in. Prompt changes to `#` insted of `$`


##### On Debian systems (Ubuntu/LinuxMint/ElementryOS), members of the `sudo` group have sudo privileges. 
```
$ sudo usermod -aG sudo username
```

## How to Create a Group 

To create a  group, use the command `groupadd` 
```
$ sudo groupadd groupname
```

## How to delete group 

To delete a group, use the command 'groupdel'

``` 
$ sudo groupdel grouname 
``


#### References
  <a href='https://www.digitalocean.com/community/tutorials/how-to-add-and-delete-users-on-ubuntu-16-04' target='_blank' rel='nofollow'>Debian(Ubuntu)</a>

  <a href='https://www.digitalocean.com/community/tutorials/how-to-add-and-delete-users-on-a-centos-7-server' target='_blank' rel='nofollow'>RHEL (CentOS/Fedora)</a>
