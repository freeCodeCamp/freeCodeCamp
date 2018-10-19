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

### Getting Started
Once you have Apache installed you need to know where to put your HTML documents.  This location is generally referred to as the `DocumentRoot`.  This location is usually `/var/www/html` on most Linux systems.  Follow these instructions bellow to find the configuration file for Apache and the `DocumentRoot`.

#### Command
``` 
~$ sudo grep "DocumentRoot" -R /etc/
```

The `-R` flag will cause grep to search recursively through the `/etc` directory and print out the full path of the file that it finds the `DocumentRoot` keyword in.

#### Ubuntu output
```
/etc/apache2/sites-available/000-default.conf:  DocumentRoot /var/www/html
/etc/apache2/sites-available/default-ssl.conf:          DocumentRoot /var/www/html
/etc/apache2/sites-enabled/000-default.conf:    DocumentRoot /var/www/html
```

#### Centos output
``` 
/etc/httpd/conf/httpd.conf  DocumentRoot /var/www/html
```

#### References
- Installation and Configurations guides
   - [Ubuntu](https://tutorials.ubuntu.com/tutorial/install-and-configure-apache#2)
   - [CentOS](https://www.centos.org/docs/5/html/Deployment_Guide-en-US/s1-apache-config-ui.html)
   - [Arch Linux](https://wiki.archlinux.org/index.php/Apache_HTTP_Server)
