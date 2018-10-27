---
title: Installation of Nginx in Ubuntu
---

Simply speaking, Nginx is an opensource web-server which can act as Load Balancer, API gateway or Reverse Proxy. What it essentially means is that NGINX can be used to configure routing, distribute load across multiple servers or simply act as an interface between API server and External Applications(Reverse Proxy).           
Nginx results in better connection-streams by establishing long-term keep-alive connections thereby efficiently using the TCP bandwith, better request-response logging (Logs can be transferred to Elasticsearch and visualised in Kibana).            


## Installation of Nginx in Ubuntu

Step 1: Update Apt-Get

As always, we update and upgrade our package manager.

`apt-get update && apt-get upgrade`

Step 2: Install Nginx

One simple command to install Nginx is all that is needed:

`apt-get -y install nginx`



## Installation of Nginx in Centos 7

Step 1: Install EPEL repository         

`sudo yum install epel-release`

Step 2: Install Nginx           

`sudo yum install nginx`

Step 3: Start Nginx         

`sudo systemctl start nginx`

Step 4: Configure Nginx         

To configure Nginx, you can visit `/etc/nginx/nginx.conf` or `/etc/nginx/conf.d/` and make a configuration file there.