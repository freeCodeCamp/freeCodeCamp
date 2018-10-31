---
title: Apache
---
## Apache

The Apache HTTP Server, commonly known as Apache, is a free and open-source cross-platform web server, released under the terms of [Apache License 2.0](https://en.wikipedia.org/wiki/Apache_License). Apache is developed and maintained by an open community of developers under the auspices of the Apache Software Foundation.
Apache runs on 67% of all webservers in the world. It is fast, reliable, and secure. It can be highly customized to meet the needs of many different environments by using extensions and modules


### Installation

#### On Ubuntu/Debian
```
sudo aptitude install apache2
```
#### On CentOS
```
sudo yum install httpd
````
#### On Arch
```
pacman -S apache
```
#### On Windows
+ Navigate [here](http://httpd.apache.org/download.cgi) to download the latest version of Apache HTTP Server.
+ Download the latest stable version.
+ unzip the file downloaded file in to a folder.
+ Open a command prompt as Administrato.
+ Now navigate unzipped folder then bin folder(eg., C:\Apache\bin).
+ Run the command **httpd.exe -k install -n "Apache HTTP Server"**  to add Apache as a  Windows Service
+ Navigate to Windows Services and start **Apache HTTP Server**.
+ Open a browser and type machine **IPaddress** and hit enter.  










