---
title: Installation of Nginx in Ubuntu
---

## Installation of Nginx in Ubuntu

Step 1: Update Apt-Get

As always, we update and upgrade our package manager.

`sudo apt-get update && apt-get upgrade`

Step 2: Install Nginx

One simple command to install Nginx is all that is needed:

`sudo apt-get -y install nginx`

Step 3: Start and enable the Nginx service

```
sudo systemctl start nginx
sudo systemctl enable nginx
```

Step 4: If you want to serve the content to other computers, register nginx with ufw

```
sudo ufw allow 'Nginx HTTP'
sudo ufw reload
sudo ufw status
```

Step 5: Check if its working, visit http://localhost:80

### Resources for reference:

- [Nginx - Official Documentation - Beginner's Guid](http://nginx.org/en/docs/beginners_guide.html)
- [Digital Ocean - How to install Linux, Nginx, MySql, PHP LEMP stack on Ubuntu](https://www.digitalocean.com/community/tutorials/how-to-install-linux-nginx-mysql-php-lemp-stack-in-ubuntu-16-04)

## Setting up Nginx to serve static content

We can use Nginx to serve static files in a directory very easily with only a few lines of configuration.

Step 1. Let's look at the default configuration in nano:

`sudo nano /etc/nginx/sites-available/default`

Step 2. look for the `server { }` block, this is the default configuration.

By default, nginx serves the files located at `/var/www/html`, this is specified in the `root` directive, you can change tge path to the directory to be served.

Step 3. If confuguration changes were made, you must reload Nginx

`sudo nginx -s reload` OR `sudo systemctl restart nginx`

Step 4. Browse to the location opened by Nginx (in our example localhost:80) and voila!
