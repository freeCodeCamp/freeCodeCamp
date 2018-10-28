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
### Apache "Directives"
``` 
The configuration files of Apache software are modified to configure it . These files contain instructions created in a format named as "directives".
Directives typically look like this:
          ``` 
          ServerRoot /usr/local/lib/apache
          ```
 or this
          ```
          <Directory /usr/local/lib/apache/htdocs/Dir/Java>
                Order allow,deny
                Allow from all
                Deny from badusers.com
          </Directory>
          ```
  Directives are used in all configuration files.

