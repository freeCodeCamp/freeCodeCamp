---
title: Setting Up Yum Repositories in RedHat/CentOS Linux
---

YUM Repositories are warehouses of Linux software (RPM package files). 

RPM package file is a Red Hat Package Manager file and enables quick and easy software installation on Red Hat/CentOS Linux.

## Setting Up Yum Repositories in RedHat CentOS Linux

Step 1: Check if there are existing repositories or not.

```sh
#yum repolist
```

You will find there is no repositories.

Step 2: Change Directory to

```sh
#cd /etc/yum.repos.d
```

Step 3: Create new file

```sh
#vim myrepo.repo
```

Step 4: Type following lines in file

```sh
[file-name]
name=filename
baseurl="location of yum repositories"
gpgcheck=0
```
Step 5: Save and Exit

Step 6: Repeat Step 1

```sh
You Will find repositories
```
