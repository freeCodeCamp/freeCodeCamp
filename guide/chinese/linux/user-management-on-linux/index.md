---
title: User management on Linux
localeTitle: Linux上的用户管理
---
#### 注意：要以`sudo`身份运行命令，您必须具有sudo用户帐户（管理员）

## 如何创建用户

#### 使用`adduser`或`useradd`命令将新用户添加到系统中。
```
$ sudo adduser username 
```

请务必将`username`替换为您要创建的用户。

#### 使用`passwd`命令更新新用户的密码。
```
$ sudo passwd username 
```

强烈建议使用强密码！

## 如何创建Sudo用户

要创建`sudo`用户，您需要首先使用上面的命令创建常规用户，然后使用`usermod`命令将此用户添加到`sudoers`组。

##### 在Debian系统（Ubuntu / LinuxMint / ElementryOS）上， `sudo`组的成员具有sudo权限。
```
$ sudo usermod -aG sudo username 
```

##### 在基于RHEL的syatems（Fedora / CentOs）上， `wheel`组的成员有sudo privilages。
```
$ sudo usermod -aG wheel username 
```

## 如何删除用户

##### 对于Debian（Ubuntu）
```
$ sudo deluser username 
```

##### 对于RHEL（Fedora / CentOS）
```
$ sudo userdel username 
```

##### 创建组并添加用户
```
$ sudo groupadd editorial 
 $ sudo usermod -a -G editorial username 
```

#### 注意：以`root`命令可以在没有sudo的情况下执行以上命令

切换到root在Ubuntu上运行`su -i`随后登录的用户的密码命令提示符更改为`#`的insted的`$`

##### 在Debian系统（Ubuntu / LinuxMint / ElementryOS）上， `sudo`组的成员具有sudo权限。
```
$ sudo usermod -aG sudo username 
```

## 如何创建组

要创建组，请使用命令`groupadd`
```
$ sudo groupadd groupname 
```

## 如何删除组

要删除组，请使用命令'groupdel'

`` ` $ sudo groupdel grouname``

#### 参考

[Debian的（Ubuntu的）](https://www.digitalocean.com/community/tutorials/how-to-add-and-delete-users-on-ubuntu-16-04)

[RHEL（CentOS / Fedora）](https://www.digitalocean.com/community/tutorials/how-to-add-and-delete-users-on-a-centos-7-server)