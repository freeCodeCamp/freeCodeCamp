---
title: Installing Go in Mac OS X using a tarball
---
### Installing Go in Mac OS X using a tarball

#### Link to tarball

You can get the link to the Mac OS tarball archive from the Latest Stable section of the [golang download page](https://golang.org/dl/).

![screenshot of golang's download page as of this writting, highliting link](https://raw.githubusercontent.com/AlexandroPerez/resources/master/img/mac_tarball.jpg "Mac tarball link")

#### Installation Process

> In this installation process we'll use the latest stable version as of this writing (go 1.9.1). For a newer or older version simply replace the link in the first step. Check the [golang download page](https://golang.org/dl/) to see what versions are currently available.

##### Installing Go 1.9.1

```
$ curl -O https://storage.googleapis.com/golang/go1.9.1.darwin-amd64.tar.gz
$ sudo tar -C /usr/local -xzf go1.9.1.darwin-amd64.tar.gz
$ export PATH=$PATH:/usr/local/go/bin
```

#### Check installation and version of go

To check if go was successfully installed, use:

```shell
$ go version
```
This should print to the console the version of go, while at the same time making sure the installation went smoothly.
