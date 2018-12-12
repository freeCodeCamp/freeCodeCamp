---
title: How to download files using the "wget" utility in Linux
---
## How to download files using the "wget" utility in Linux
This article is a quick tutorial on using the ``wget`` utility on Unix based OS. 
GNU Wget is a free utility for non-interactive download of files from the Web. It supports HTTP, HTTPS, and FTP protocols, as well as retrieval through HTTP proxies.

### Installing `wget`
The wget utility is freely available package and licensed under the GNU GPL License. This utility can be installed on any Unix-like OS including Windows and MacOS.

### Basic syntax
The basic syntax of the ``wget`` is...
```
wget [option]... [URL]...
```
### Details of wget
```
wget --version
```
```
wget --help
```

### Downloading a single file
```
wget http://ftp.gnu.org/gnu/wget/wget-1.19.5.tar.gz
```

### Downloading from FTP
```
wget ftp://ftp.gnu.org/gnu/wget/wget-1.19.5.tar.gz.sig
```

### Restrict download speed limits
```
wget --limit-rate=100k http://ftp.gnu.org/gnu/wget/wget-1.19.5.tar.gz
```
You can play with remaining features of the ``wget`` utility
