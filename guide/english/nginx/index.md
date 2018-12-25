---
title: Installation of Nginx in Ubuntu
---

## Introduction

- Nginx is a web server which can also be used as a reverse proxy, load balancer and HTTP cache.
- It is one of the most popular web servers in use and is responsible for hosting some of the largest and highest-traffic sites on the internet. 
- It is proven to be lighter on resources than httpd/Apache.
- Nginx is free and open-source software, first released in 2004.

## Installation of Nginx on Ubuntu

Update the local package index and install Nginx from default repositories:

```sh
$ sudo apt update 
$ sudo apt install nginx
$ sudo systemctl status nginx # will check if the server is running as the installation should have started it already
```

## Installation of Nginx on CentOS 7

Add Nginx repository and install:

```sh
$ sudo yum install epel-release
$ sudo yum install nginx
$ sudo systemctl start nginx # will start the server
```

#### More Information

[An Introduction to NGINX for Developers](https://medium.freecodecamp.org/an-introduction-to-nginx-for-developers-62179b6a458f)  
[Nginx tutorial](https://www.netguru.co/codestories/nginx-tutorial-basics-concepts)  
[Links to top tutorials](https://medium.com/quick-code/top-tutorials-to-learn-nginx-for-web-server-dc8638c48fae)
