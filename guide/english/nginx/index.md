---
title: Basic Info on Nginx
---

### What is Nginx?

Nginx is an open source web server for reverse proxying, caching, load balancing, media streaming, and other uses. It was initially created by Igor Sysoev in 1999 to solve the C10K problem which was about having network sockets handle a large number of clients simultaneously. Basically C10K means concurrently handling 10,000 connections. Nginx was built to be a fast, high performance server and is used by millions of websites and big name companies like Airbnb, Dropbox, Netflix, and Tumblr use it.

Nginx offers a different option than using Apache or other web servers and claims to be able to serve 10x more requests per server compared to Apache. 


### Installation of Nginx in Ubuntu

Step 1: Update Apt-Get

As always, we update and upgrade our package manager.

`apt-get update && apt-get upgrade`

Step 2: Install Nginx

One simple command to install Nginx is all that is needed:

`apt-get -y install nginx`

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
- [Nginx Basics Tutorial](https://www.netguru.co/codestories/nginx-tutorial-basics-concepts)
- [Hosting Static Websites Using Nginx](https://medium.com/@jgefroh/a-guide-to-using-nginx-for-static-websites-d96a9d034940)
- [Nginx Documentation](https://docs.nginx.com/)
