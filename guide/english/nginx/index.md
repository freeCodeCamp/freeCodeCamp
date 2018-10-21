---
title: Installation of Nginx in Ubuntu
---

## Installation of Nginx in Ubuntu

Step 1: Update Apt-Get

As always, we update and upgrade our package manager.

`apt-get update && apt-get upgrade`

Step 2: Install Nginx

One simple command to install Nginx is all that is needed:

`apt-get -y install nginx`

## Setting up Nginx for static content

We can use Nginx to serve static files in a directory very easily with only a few lines of code.
Run the command:

`sudo nano /etc/nginx/sites.conf`

make the following changes to the file

1. 
2.

Then save and restart the nginx process:

`sudo systemctl restart nginx`

Browse to the location opened by Nginx (in our example localhost:80) and voila!

## Setting up Nginx as a reverse proxy

## Setting up Nginx to serve PHP

## Resources for further reading

- [Official Nginx Documentation]()
- [Linode Guides]()
- []()
