---
title: How to download files using the "wget" utility in Linux
---
## How to download files using the "wget" utility in Linux
This article is a quick tutorial on using the ``wget`` utility on Unix based OS. 
GNU Wget is a free utility for non-interactive download of files from the Web. It supports HTTP, HTTPS, and FTP protocols, as well as retrieval through HTTP proxies.

### Installing `wget`
The wget utility is a freely available package and licensed under the GNU GPL License. This utility can be installed on any Unix-like OS including Windows and MacOS.

### Basic syntax
The basic syntax of ``wget`` is...
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

### Download a file with the ability to resume or continue if the download is interrupted
```
wget --continue https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png

### Download all listed files within a directory and its sub-directories (does not download embedded page elements):                                                                                
```                                                                                                                                                                                                  
wget --mirror --no-parent https://ftp.gnu.org/gnu/
```
### Download the contents of an URL via authenticated FTP:                                                                                                                                          
```                                                                                                                                                                                                
wget --ftp-user=username --ftp-password=password ftp://example.com
```

### Download files in background
```
wget -b /wget/log.txt ftp://ftp.gnu.org/gnu/wget/wget-1.10.1.tar.gz.sig
```

You can play with remaining features of the ``wget`` utility
