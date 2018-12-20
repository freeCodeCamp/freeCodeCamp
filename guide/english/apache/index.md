---
title: Apache
---

## Apache Software Foundation(ASF)
The ASF is a non-profit corporation having decentralized opensource community of developers.
Their purpose is supporting Apache software projects under Apache license.

## Apache HTTP Server
The Apache HTTP Server, commonly known as Apache, is a free and open-source cross-platform web server.  It is released under the terms of [Apache License 2.0](https://en.wikipedia.org/wiki/Apache_License). Apache is developed and maintained by an open community of developers under the auspices of the [Apache Software Foundation](http://www.apache.org/).

Apache runs on 67% of all web servers in the world. It is fast, reliable, and secure. It can be highly customized to meet the needs of many different environments by using extensions and modules.

## Installation

#### On Debian, Ubuntu, Raspbian, and LinuxMint
```
sudo aptitude install apache2
```

#### On Fedora
```
sudo dnf install httpd
```

#### On CentOS and Red Hat Enterprise Linux (RHEL)
```
sudo yum install httpd
````

#### On Arch
```
pacman -S apache
```

#### On macOS (Using Homebrew)
```
brew install httpd
```

#### On Windows
Popular options for deploying Apache httpd and optionally, PHP + MySQL or PHP + MariaDB on Microsoft Windows, include;
* [XAMP](https://www.apachefriends.org/index.html "XAMP website")
* [WampServer](http://www.wampserver.com/ "WampServer website")

### Getting Started
Once you have Apache installed you need to know where to put your HTML documents. This location is generally referred to as the `DocumentRoot`. This location is usually `/var/www/html` on most Linux systems. Follow the instructions below to find the configuration file for Apache and the `DocumentRoot`.

#### Find DocumentRoot
``` 
~$ sudo grep "DocumentRoot" -R /etc/
```

The `-R` flag will cause grep to search recursively through the `/etc` directory and print out the full path of the file that it finds the `DocumentRoot` keyword in.

###### Ubuntu output:
```
/etc/apache2/sites-available/000-default.conf:  DocumentRoot /var/www/html
/etc/apache2/sites-available/default-ssl.conf:          DocumentRoot /var/www/html
/etc/apache2/sites-enabled/000-default.conf:    DocumentRoot /var/www/html
```

###### Centos output:
``` 
/etc/httpd/conf/httpd.conf  DocumentRoot /var/www/html
```

#### Start Apache
```sh
sudo systemctl start httpd
```

#### Run Apache on Startup
```sh
sudo systemctl enable httpd
```

## Features

Apache supports a variety of features, many implemented as compiled modules which extend the core functionality. These can range from authentication schemes to supporting server-side programming languages such as Perl, Python, Tcl and PHP. Popular authentication modules include mod_access, mod_auth, mod_digest, and mod_auth_digest, the successor to mod_digest. A sample of other features include Secure Sockets Layer and Transport Layer Security support (mod_ssl), a proxy module (mod_proxy), a URL rewriting module (mod_rewrite), custom log files (mod_log_config), and filtering support (mod_include and mod_ext_filter).

Popular compression methods on Apache include the external extension module, mod_gzip, implemented to help with reduction of the size (weight) of Web pages served over HTTP. ModSecurity is an open source intrusion detection and prevention engine for Web applications. Apache logs can be analyzed through a Web browser using free scripts, such as AWStats/W3Perl or Visitors.

Virtual hosting allows one Apache installation to serve many different Web sites. For example, one computer with one Apache installation could simultaneously serve www.example.com, www.example.org, test47.test-server.example.edu, etc.

Apache features configurable error messages, DBMS-based authentication databases, content negotiation and supports several graphical user interfaces (GUIs).

It supports password authentication and digital certificate authentication. Because the source code is freely available, anyone can adapt the server for specific needs, and there is a large public library of Apache add-ons.


## Basic Configuration

### Virtual Hosts
If you want to host multiple domains on a single server, you can configure Virtual Hosts in Apache.

You can copy the `default.conf` and modify accordingly in the following directory:

#### On Ubuntu:
```sh
/etc/apache2/sites-enabled/
```

#### On Centos:
```sh
/etc/httpd/sites-enabled/
```

## Resources

### Installation and Configurations Guides
- [Ubuntu](https://tutorials.ubuntu.com/tutorial/install-and-configure-apache#2)
- [CentOS](https://www.centos.org/docs/5/html/Deployment_Guide-en-US/s1-apache-config-ui.html)
- [Arch Linux](https://wiki.archlinux.org/index.php/Apache_HTTP_Server)

### Getting Started Guides
- [Getting Started with Apache HTTP Server Version 2.5](https://httpd.apache.org/docs/trunk/getting-started.html)

### Documentation
- [Apache HTTP Server Documentation](http://httpd.apache.org/docs/)
