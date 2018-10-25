---
title: How to install phpmyadmin on Linux (Ubuntu).
---

# How to install phpmyadmin on Linux (Ubuntu)

The [MySQL](https://en.wikipedia.org/wiki/MySQL) database server can be administered using the command-line, by running commands in the terminal. But it is more convenient and less tedious to use a graphical user interface (GUI) – most especially for those who are not comfortable with entering commands on a terminal.

[phpMyAdmin](https://en.wikipedia.org/wiki/PhpMyAdmin) is a free and open source GUI software tool written in PHP, intended to handle the administration of MySQL over the Web. phpMyAdmin supports a wide range of operations on MySQL and and its community-supported version - [MariaDB](https://en.wikipedia.org/wiki/MariaDB).

Frequently used database operations (managing databases, tables, columns, relations, indexes, users, permissions, etc) can be performed via the GUI, while you still have the ability to directly execute any SQL statement. And also perform exporting and importation of data in popular file formats (CSV, SQL, XML, PDF, Word, Excel, LaTeX and many others). You can install phpMyAdmin Linux, windows and Mac OS (it is cross-platform). It has become one of the most popular MySQL administration tool.

In this post, you will see how to install it on a Linux operating system. But before we begin ensure that you have Apache, MySQL and PHP install on your system. If not learn how to do it [here](https://fossnaija.com/install-lamp-server-linux-ubuntu/).

### Installing phpMyAdmin.

* Open the Linux terminal and use the Ubuntu software package manager `apt` to install,
<br> 
	
	
	sudo apt-get install phpmyadmin
	
	
  <br>

* Then the installation begins. When prompted, select <em>“Apache2”</em> from the <strong>“Configuring phpMyAdmin”</strong>  dialogue box.When asked for MySQL username and password enter “root” for username and choose an appropriate password for password. 
<br>

* After installation is complete, configure phpMyAdmin to be recognised by the local web server. Open the apache configuration file in your favourite text editor;

	```
	sudo gedit /etc/apache2/apache2.conf
	```
	and add the following line at the bottom of the file (you can add it anywhere in the file, I just choose the bottom here so that you can easily access it for modification if need be):

	`Include /etc/phpmyadmin/apache.conf` 
	<br>

* Then restart the web server;

	```
	sudo service apache2 restart
	```

* Now enter the following url in your browser;

	`https://localhost/phpmyadmin`

	You should see a login page for you to enter your username and password, if you’ve not done so.

	<strong>Username</strong> = <em>root</em>
  
	<strong>Password</strong> = <em>YOUR_MYSQL_PASSWORD</em>

If successful the phpMyAdmin dashboard appears. Then you can start using phpMyAdmin.


### More Information: 

* For a graphical installation steps check [here](https://fossnaija.com/install-phpmyadmin-linux-ubuntu/).

* [PhpMyAdmin Installation documentation](https://docs.phpmyadmin.net/en/latest/setup.html).
