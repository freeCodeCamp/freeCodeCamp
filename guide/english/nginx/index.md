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

## Key file locations for Debian based distributions (Ubuntu included)

/etc/nginx/nginx.conf

- This is where you will find the global configuration values, what user the nginx process runs as, how many workers it has etc.

/etc/nginx/sites-available/*

- As one nginx instance can run multiple sites with separate configurations this is the directory where you will have the separate configuration files. Usually there is a file named 'default', but any file in this directory that can be parsed by nginx is available.

/etc/nginx/sites-enabled/*

- This is the directory that holds the site configurations that are actually live (enabled), you should not move files here directly, rather sym-link the files from the sites-available directory. Making a linked file in this directory does not make it live, for that you need to restart nginx or have it reload the config. Usually done via systemd.

/var/log/nginx

- Default location for nginx logs.
 
