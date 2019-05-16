---
title: Setting Up Yum Repositories in RedHat/CentOS Linux
---

YUM Repositories are warehouses of Linux software (RPM package files). 

RPM package file is a Red Hat Package Manager file and enables quick and easy software installation on Red Hat/CentOS Linux.

## Setting Up Yum Repositories in RedHat CentOS Linux

Step 1: Check if there are existing repositories or not.

```shell
#yum repolist
```

You will find there is no repositories.

Step 2: Change Directory to

```shell
#cd /etc/yum.repos.d
```

Step 3: Create new file

```shell
#vim myrepo.repo
```

Step 4: Type following lines in file

```shell
[file-name]
name=filename
baseurl="location of yum repositories"
gpgcheck=0
```
Step 5: Save and Exit

Step 6: Repeat Step 1

```shell
You Will find repositories
```
