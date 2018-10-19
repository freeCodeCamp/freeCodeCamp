---
title: Apache
---
## Apache

The Apache HTTP Server, commonly known as Apache, is a free and open-source cross-platform web server, released under the terms of [Apache License 2.0](https://en.wikipedia.org/wiki/Apache_License). Apache is developed and maintained by an open community of developers under the auspices of the Apache Software Foundation.
Apache runs on 67% of all webservers in the world. It is fast, reliable, and secure. It can be highly customized to meet the needs of many different environments by using extensions and modules


### Installation

#### On Ubuntu
```
sudo apt install apache2
```
#### On Centos
```
sudo yum install httpd
````
#### On Arch
```
pacman -S apache
```

#### on Windows
Step 1:
Navigate to Apache Website - (httpd.apache.org)
Click on "Download" link for the latest stable version
After being redirect to the download page, click on "Files for Microsoft Windows" link
Select one of the websites that provide binary distribution (we chose Apache Lounge)
After being redirect to "Apache Lounge" website (https://www.apachelounge.com/download/), click on Apache x.x.xx Win64 link
After downloaded, unzip the file httpd-x.x.xx-Win64-VC15.zip into c:/Apache
Step 2:
Navigate to directory c:/Apache/bin
Run the command httpd.exe -k install -n "Apache HTTP Server"  to add Apache as a  Windows Service
Navigate to Windows Services and start Apache HTTP Server
Step 3:
Open a Web browser and type the machine IP in the address bar and hit Enter
The message "It works!" should be seen.

Source: https://knowledgebase.progress.com/articles/Article/How-to-install-Apache-HTTP-Server-on-Windows-Server
```
