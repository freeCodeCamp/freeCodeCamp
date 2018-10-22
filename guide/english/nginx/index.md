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



title: Installation of Nginx in CENTOS
---

## Installation of Nginx in CENTOS

Step 1: Update CENTOS

update and upgrade the package manager.

`sudo yum update -y && sudo yum upgrade -y`

Step 2: Add EPEL repository.

`sudo yum install epel-release -y`

Step 3: Install Nginx

`sudo yum install nginx -y`

Step 4: Start Nginx

`sudo systemctl start nginx`


Step 5: Enable Nginx to start when the system boots

`sudo systemctl enable nginx`


