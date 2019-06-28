---
title: Nginx
---

# Nginx

## Introduction
Nginx is an open source web server for reverse proxying, caching, load balancing, media streaming, and other uses. It was initially created by Igor Sysoev in 1999 to solve the C10K problem which was about having network sockets handle a large number of clients simultaneously. Basically C10K means concurrently handling 10,000 connections. Nginx was built to be a fast, high performance server and is used by millions of websites and big name companies like Airbnb, Dropbox, Netflix, and Tumblr use it.

Nginx offers a different option than using Apache or other web servers and claims to be able to serve 10x more requests per server compared to Apache.

#### Additional Details
- Nginx is a web server which can also be used as a reverse proxy, load balancer and HTTP cache.
- It is one of the most popular web servers in use and is responsible for hosting some of the largest and highest-traffic sites on the internet. 
- It is proven to be lighter on resources than httpd/Apache.
- Nginx is free and open-source software

## Installation

### Installation of Nginx on Ubuntu

Update the local package index and install Nginx from default repositories:

```shell
$ sudo apt-get update && sudo apt-get upgrade
$ sudo apt-get install nginx
$ sudo systemctl status nginx
```

Enable nginx on the firewall using `ufw`
```shell
sudo ufw allow 'Nginx HTTP'
```

Validate nginx is running:
```shell
systemctl status nginx
```

### Installation of Nginx on CentOS 7

Add Nginx repository and install:

```shell
$ sudo yum install epel-release
$ sudo yum install nginx
$ sudo systemctl start nginx # will start the server
```

## Key file locations for Debian based distributions (Ubuntu included)

/etc/nginx/nginx.conf

- This is where you will find the global configuration values, what user the nginx process runs as, how many workers it has etc.

/etc/nginx/sites-available/*

- As one nginx instance can run multiple sites with separate configurations this is the directory where you will have the separate configuration files. Usually there is a file named 'default', but any file in this directory that can be parsed by nginx is available.

/etc/nginx/sites-enabled/*

- This is the directory that holds the site configurations that are actually live (enabled), you should not move files here directly, rather sym-link the files from the sites-available directory. Making a linked file in this directory does not make it live, for that you need to restart nginx or have it reload the config. Usually done via systemd.

/var/log/nginx

- Default location for nginx logs.

## More Information
- [An Introduction to NGINX for Developers](https://medium.freecodecamp.org/an-introduction-to-nginx-for-developers-62179b6a458f)  
- [Nginx tutorial](https://www.netguru.co/codestories/nginx-tutorial-basics-concepts)  
- [Links to top tutorials](https://medium.com/quick-code/top-tutorials-to-learn-nginx-for-web-server-dc8638c48fae)
- [Hosting Static Websites Using Nginx](https://medium.com/@jgefroh/a-guide-to-using-nginx-for-static-websites-d96a9d034940)
- [Nginx Documentation](https://docs.nginx.com/)
