---
title: How to Use SFTP to Securely Transfer Files with a Remote Server
---
## How to Use SFTP to Securely Transfer Files with a Remote Server
This article is a quick tutorial on how to use Secure File Transfer Protocol (SFTP) to exchange files with a server. This is useful for programming, as it allows you to code and test locally, and then send your work to the server when you are done.

### Testing SSH
If you haven't already, test that you are able to SSH into the server. SFTP uses the Secure Shell (SSH) protocol, so if you are unable to SSH you probably won't be able to SFTP either.

```shell
ssh your_username@hostname_or_ip_address
```
### Start SFTP Session
This uses the same syntax as SSH and opens a session in which you can transfer files.
```shell
sftp your_username@hostname_or_ip_address
```
To list helpful commands:
```shell
help
```
### Transfer files and folders

To download a file:
```shell
get <filename>
```
To download a folder and its contents, use the "-r" flag (also works for uploading):
```shell
get -r <foldername>
```
To upload a file:
```shell
put <filename>
```

### Change folders
To change the local folder:
```shell
lcd <path/to/folder>
```
To change the remote folder:
```shell
cd <path/to/folder>
```
