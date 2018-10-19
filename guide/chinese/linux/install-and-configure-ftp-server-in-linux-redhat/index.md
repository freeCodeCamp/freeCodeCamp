---
title: Install and configure FTP server in Redhat/Centos Linux
localeTitle: 在Redhat / Centos Linux中安装和配置FTP服务器
---
## 在Redhat / Centos Linux中安装和配置FTP服务器

FTP代表文件传输协议。它由Abhay Bhushan撰写，并于1971年4月16日发布为RFC 114。 它受所有操作系统和浏览器的支持。它建立在客户端 - 服务器架构之上。

## 在Redhat / Centos Linux中安装和配置FTP服务器

第1步：我们将使用localhost为我们的机器设置ftp服务器。

第2步：安装vsftpd（非常安全的FTP守护程序）包。

`yum install -y vsftpd`

步骤3：系统启动时启动FTP服务器。

`systemctl enable vsftpd.service`

步骤4：检查ftp服务器的状态

`systemctl status vsftpd.service`

第5步：配置vsftpd包。我们将编辑 `/etc/vsftpd/vsftpd.conf`

`Change the line which contain anonymous_enable=NO to anonymous_enable=YES` `This will give permit any one to access FTP server with authentication.` `Change the following to YES` `local_enable=YES` `write_enable=YES<br>`

第6步：启动FTP服务器 `systemctl start vsftpd.service`

第7步：安装FTP客户端 `yum install -y lftpd`

步骤8：将ftp连接到localhost `lftp localhost`