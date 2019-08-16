---
title: Setting Up Yum Repositories in RedHat/CentOS Linux
localeTitle: 在RedHat / CentOS Linux中设置Yum存储库
---
YUM存储库是Linux软件（RPM包文件）的仓库。

RPM包文件是Red Hat Package Manager文件，可以在Red Hat / CentOS Linux上快速轻松地安装软件。

## 在RedHat CentOS Linux中设置Yum存储库

第1步：检查是否存在现有存储库。

```shell
#yum repolist 
```

你会发现没有存储库。

第2步：将目录更改为

```shell
#cd /etc/yum.repos.d 
```

第3步：创建新文件

```shell
#vim myrepo.repo 
```

第4步：在文件中键入以下行

```shell
[file-name] 
 name=filename 
 baseurl="location of yum repositories" 
 gpgcheck=0 
```

第5步：保存并退出

第6步：重复步骤1

```shell
You Will find repositories 

```