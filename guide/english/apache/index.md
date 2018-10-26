---
title: Apache
---
## Apache

The Apache HTTP Server, commonly known as Apache, is a free and open-source cross-platform web server, released under the terms of [Apache License 2.0](https://en.wikipedia.org/wiki/Apache_License). Apache is developed and maintained by an open community of developers under the auspices of the Apache Software Foundation.
Apache runs on 67% of all webservers in the world. It is fast, reliable, and secure. It can be highly customized to meet the needs of many different environments by using extensions and modules


### Installation

### STEP 1:
## Installation
#### On Ubuntu
```
sudo apt install apache2
```
#### On Centos
```
sudo yum install httpd
````
#### On Arch
```
pacman -S apache
```

### STEP 2:
## Opening Firewall
By default you are restricted to access the server(machine) ports because of default firewall settings. By default apache will register UFW while installation to provide few application profiles. These profiles helps in enabling and disabling access to apache through firewall.

We can list all the profiles with
```
sudo ufw app list
```
You will get something like below,
```
Available applications:
  Apache
  Apache Full
  Apache Secure
  OpenSSH
```
From the availabe application, select `Apache Full`, since it opens both port 80 (normal, unencrypted web traffic) and port 443 (TLS/SSL encrypted traffic).

``
sudo ufw allow 'Apache Full'
``
Check the status by typing, `sudo ufw status`,

### STEP 3:
### Checking Server
```
sudo systemctl status apache2
```
The above command outputs the status of the apache running in your machine.
Ola! Now your apache server is running, Check it by pointing your browser to `http://server_domain_or_IP`.

### STEP 4:
### Managing Apache process
below commands are useful in managing your apache server

By default your apache server starts when the server boots. But you can disable it by `sudo systemctl disable apache2`.

* You can re-enable it to start whenever the server boots by using `sudo systemctl enable apache2`.

* You can stop the running server by `sudo systemctl stop apache2` and never starts the server untill you manually starts it.

* You can restart it with `sudo systemctl restart apache2` will stop and start the server again by itself

*  You can start it again by `sudo systemctl start apache2`.
