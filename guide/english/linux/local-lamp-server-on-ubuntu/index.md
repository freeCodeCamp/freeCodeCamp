---
title: local-lamp-server-on-ubuntu
---
## Local LAMP Server on Ubuntu

The purpose of this brief guide is to take you through the process of setting up a LAMP (Linux, Apache, MySQL, PHP) server on a local Ubuntu Linux machine or virtual machine.  This will allow a developer to develop using PHP and MySQL (with phpMyAdmin). This is a common stack that is necessary for Wordpress development.

### Install the necessary packages

 You will need to install the following packages for the LAMP server.  You can install them all at once by separating each package by a space, or one at a time like shown.  I prefer to download one at a time because it is easier to see if there were any errors. Enter the terminal and type the following:

 * `sudo apt-get install apache2`
 * `sudo apt-get install php`
 * `sudo apt-get install php-mysql`
 * `sudo apt-get install mysql-server`

You should then be prompted to set a password for the MySQL root user. After setting the password continue to install:

 * `sudo apt-get install libapache2-mod-php`
 * `sudo apt-get install php-mcrypt`
 * `sudo apt-get install phpmyadmin`

You should then be prompted which server to use select apache by pressing enter.
Select no for advanced server setup.

### Change permissions to the /var/www/html

In order for php scripts and files to be run by the LAMP server they need to be saved in the /var/www/html directory.  You can think of this location as your local server.  In order to make changes to this directory we need to change the permissions on it.  In the terminal enter the command:

* `sudo chown {your ubuntu username} /var/www/html`

### Create a symbolic link to phpMyAdmin

By default, phpMyAdmin is installed in the /usr/share/ directory.  We need to move it to our local server directory. We navigate to the server directory that we want the link in by:

* `cd /var/www/html`

Then create the link by entering the command:

* `ln -s /usr/share/phpmyadmin phpmyadmin`

### Restart Apache and test

Run the following command to restart Apache setting the changes that were made:

* `sudo systemctl restart apache2`

You should then be able to create an info.php file in the /var/www/html directory.

* `touch /var/www/html/info.php`

In the file type the following php code:

* `<?php
      phpinfo();
    ?>`

Then, open a browser and type in localhost/info.php
You should see a page from the php file you just wrote that gives you information about php.

Finally, to access phpMyAdmin go to localhost/phpmyadmin in your browser.  The defualt root username is 'root' and the password is the password you chose earlier for the MySQL database.

### More Information

<!-- Insert helpful links here -->
