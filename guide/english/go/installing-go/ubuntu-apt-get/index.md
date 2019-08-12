---
title: Installing Go in Ubuntu using apt-get
---
### Installing Go in Ubuntu using apt-get

Using Ubuntu's Source Package Manager (apt-get) is the easiest way to install Go. You won't get the latest stable version, but for the purpose of learning this should be enough.
>As of this writing, Ubuntu Xenial's version of go is 1.6.1, while the latest
stable version is 1.9.1

```shell
$ sudo apt-get update
$ sudo apt-get install golang-go
```

#### Check installation and version of go

To check if go was successfully installed, use:

```shell
$ go version
> go version go1.9.1 linux/amd64
```
This will print to the console the version of go, while at the same time making sure the installation went smoothly.
