---
title: How to Run Apache Server on a Mac Os X E1 Captain
---
<a href='http://www.apache.org/' target='_blank' rel='nofollow'>Apache</a> server is pre build on Mac OS X , no need to install 3rd party tools WAMP, LAMP, MAMP AND XAMPP to run Apache server on Mac.

When you consider run <a href='http://www.apache.org/' target='_blank' rel='nofollow'>Apache</a> server on Mac OS X E1 Captain / OS X Yosemite, it is rather different from it's earlier versions. Here you should it from terminal windows, earlier GUI options for tick as webserver from system control window is took off.

Type on your terminal window:

    httpd -v

It's give the server version and build date.

Here http stands for Hypertext Transfer Protocol d stands for Daemon which is a software program for using multi tasking also uses on Mac OS X. `httpd` is the Apache HyperText Transfer Protocol (HTTP) server program. It is designed to be run as a standalone daemon process. Type

    sudo apachectl start

on your terminal window and go to your browser and type `http://localhost` you will get, `It works!` on your browser.