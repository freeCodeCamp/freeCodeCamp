---
title: Installation of Nginx in Ubuntu
---

## Installation of Nginx in Ubuntu

Step 1: Update Apt-Get

As always, we update and upgrade our package manager.

`sudo apt-get update && sudo apt-get upgrade`

Step 2: Install Nginx

One simple command to install Nginx is all that is needed:

`sudo apt-get -y install nginx`

Step 3: Adjust the Firewall

Enable nginx on `ufw`

`sudo ufw allow 'Nginx HTTP'`

Step 4: Check our Web Server

Check the nginx that already be up and running.

`systemctl status nginx`
