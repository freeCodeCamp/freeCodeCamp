---
title: Install and configure FTP server in Redhat/Centos Linux
---

## Install and configure FTP server in Redhat/Centos Linux

FTP stands for File Transfer Protocol. It was written by Abhay Bhushan and published as RFC 114 on 16 April 1971. 
It is supported by all operating system and browsers. It is built on a client-server architecture.

## Install and configure FTP server in Redhat/Centos Linux

Step 1: We will use localhost for our machine to setup ftp server.<br>

Step 2: Install vsftpd (very secure FTP daemon) package.<br>

`yum install -y vsftpd`<br>

Step 3: Start FTP Server when system on.<br>

`systemctl enable vsftpd.service`<br>

Step 4:</b> Checking the status of ftp server<br>

`systemctl status vsftpd.service`<br>

Step 5: Configure vsftpd package. We will edit<br>
`/etc/vsftpd/vsftpd.conf`

`Change the line which contain anonymous_enable=NO to anonymous_enable=YES`<br>
`This will give permit any one to access FTP server with authentication.`<br>
`Change the following to YES`<br>
`local_enable=YES`<br>
`write_enable=YES<br>`<br>

Step 6: Start FTP Server<br>
`systemctl start vsftpd.service`

Step 7: Install FTP Client<br>
`yum install -y lftpd`<br>

Step 8: Connect ftp to localhost<br>
`lftp localhost`
