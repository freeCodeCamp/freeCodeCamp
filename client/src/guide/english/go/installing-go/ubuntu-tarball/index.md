---
title: Installing Go in Ubuntu using a tarball
---
### Installing Go in Ubuntu using a tarball

>This is the recommended way to install go if you wish to get the latest stable version available from the golang website.

#### Check your system Architecture

Before proceeding make sure you know if your system is 32 or 64 bit. If you don't know, run the following command to find out:

```sh
$ lscpu | grep Architecture
```
If you see ``` Architecture: x86_64``` your system is 64bit, otherwise if you get ```Architecture: i686```, then your system is 32bit. Now that you know your system architecture, let's proceed.

#### Picking the right tarball

From the [golang download page](https://golang.org/dl/), you'll need to get the link to the right tarball file (.tar.gz) for your system.

If your system is 64bit, copy the link to the .tar.gz file for Linux systems with x86_64 architecture. For example, the latest stable version for 64bit systems as of this writing is ```go1.9.1.linux-amd64.tar.gz```

![screenshot of golang's download page as of this writting, highliting link](https://raw.githubusercontent.com/AlexandroPerez/resources/master/img/ubuntux64.jpg "x64 tarball link")

If your system is 32bit, copy the link to the .tar.gz file for Linux systems with x86 architecture. As of this writing the latest file is  ```go1.9.1.linux-386.tar.gz```

![screenshot of golang's download page as of this writting, highliting link](https://raw.githubusercontent.com/AlexandroPerez/resources/master/img/ubuntux86.jpg "x86 tarball link")

After copying the link, simply replace the link in the Installation process found below with the link you got from the download page.

#### Installation Process

> In this installation process we'll use the links to the go 1.9.1 tarballs as an example. For a newer or older version simply replace the link in the first step. Check the [golang download page](https://golang.org/dl/) to see what versions are currently available.

##### Go 1.9.1 for 64bit systems:

```
$ wget https://storage.googleapis.com/golang/go1.9.1.linux-amd64.tar.gz
$ sudo tar -C /usr/local -xzf go1.9.1.linux-amd64.tar.gz
$ export PATH=$PATH:/usr/local/go/bin
```
   
##### Go 1.9.1 for 32bit systems:

```
$ wget https://storage.googleapis.com/golang/go1.9.1.linux-386.tar.gz
$ sudo tar -C /usr/local -xzf go1.9.1.linux-386.tar.gz
$ export PATH=$PATH:/usr/local/go/bin
```

#### Check installation and version of go

To check if go was successfully installed, use:

```sh
$ go version
> go version go1.9.1 linux/amd64
```
This will print to the console the version of go, while at the same time making sure the installation went smoothly.
