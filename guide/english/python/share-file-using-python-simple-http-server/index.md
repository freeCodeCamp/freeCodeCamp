---
title: Share File Using Python SimpleHTTPserver
---
## The steps need to follow for sending the file.

1.  Make sure both the computers connected through same network via LAN or WIFI.
2.  Open terminal in Ubuntu and make sure you have python installed in your PC.
3.  If not installed then install it by typing in terminal "sudo apt-get install python" without quotes.
4.  Goto the directory whose file you want to share by using cd(change directory) command.
5.  Type this command "python -m simpleHTTPserver" without quotes.
6.  Open new terminal and type ifconfig and find your IP address.

## Now in second computer

1.  Open browser and type the ip address of first one.
2.  Don't forget to add port number at end of ip address..which by default is:8000

A page will open showing the Directory type structure and it will show all files from source pc.  
Now you can access all files.
