---
title: Installing Go in Arch Linux using pacman
---
### Installing Go in Arch Linux using pacman

Using Arch Linux Package Manager (pacman) is the easiest way to install Go. Based on the Arch Linux philosophy of providing new software versions very fast, you will get a very current version of go. 
Before you can install the go package, you have to bring the system up to date. 

```shell
$ sudo pacman -Syu
$ sudo pacman -S go
```

#### Check installation and version of go

To check if go was successfully installed, use:

```shell
$ go version
> go version go2.11.1 linux/amd64
```
This will print to the console the version of go, while at the same time making sure the installation went smoothly.
