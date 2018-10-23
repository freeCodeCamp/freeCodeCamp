---
title: PHP Install
---

## What Do I Need for Installation?

Any computer! PHP is very versatile and can run in many different environments.

### Manual Install:

#### Windows
1. Download the zip from [windows.php.net/download](https://windows.php.net/download#php-7.2) and unzip it (ex `C:\PHP`)
2. Add php to the windows PATH (for example append `;C:\PHP`)
3. Copy and rename either `php.ini - development` or `php.ini - production` to `php.ini`

If you are using IIS for your webserver, this is a good resource:

- [Microsoft Docs - Windows installation and integration with IIS](https://docs.microsoft.com/en-us/iis/application-frameworks/scenario-build-a-php-website-on-iis/configuring-step-1-install-iis-and-php#12)

#### MacOS
_Type the commands in a terminal_
1. Install homebrew `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
2. Install php `brew install php`

#### Linux
This varies a bit with each distribution

- _debian/ubuntu_ `sudo apt-get install php -y`
- _fedora/rhl/centos_ `dnf install php php-common`

There are many good resources for this, like:

- [TecMint - install the LAMP stack on Fedora](https://www.tecmint.com/install-lamp-apache-mariadb-and-php-on-fedora-23/)
- [Digital Ocean - How to install the LEMP stack on Ubuntu](https://www.digitalocean.com/community/tutorials/how-to-install-linux-nginx-mysql-php-lemp-stack-ubuntu-18-04)

### Install Bundles
There are also several popular install bundles for PHP technology stacks which are multi-platform.
- [XAMPP Installer - Apache Server, MariaDB, PHP, and Perl](https://www.apachefriends.org/index.html) _window, linux, macOS_
- [MAMP Webserver](https://www.mamp.info) _windows, macOS_
- [WAMP Server](http://www.wampserver.com/en/) _windows_

### Find a webhost with free PHP services.
It is [common](https://www.google.com/search?q=free+php+web+hosting) for free webhosting services to offer support for PHP.

## Once PHP is installed:
If you installed PHP with a webserver, often a default route is set for `localhost/info.php` or `127.0.0.1/info.php`.  If PHP has been integrated properly, it should display a description of the current PHP installation.  If your server will be public, you should delete `info.php` as it contains private details about your installation, system.

If you did not install PHP with a webserver, several tools integrate well with the library for the ability to locally run, debug, host your PHP scripts and applications. [VS Code's](https://code.visualstudio.com/) extension [PHP Server](https://marketplace.visualstudio.com/items?itemName=brapifra.phpserver) allows your to develop and host locally.

## Resources
- The official PHP website (PHP.net) has installation instructions for PHP: http://php.net/manual/en/install.php
