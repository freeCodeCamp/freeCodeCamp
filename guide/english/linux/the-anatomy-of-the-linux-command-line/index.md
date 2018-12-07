---
title: The Anatomy of the Linux Command Line
---

# The Anatomy of the Linux Command Line


In this highly Graphic-User-Interfaced (GUI) tech world the command, many computer users find the idea of entering text commands (on a command prompt or terminal) to carry out basic functions as repulsive - and should best be left for programmers or developers (in fact geeks).


Fortunately, the command-line interface (CLI) is king in the world of Linux. Though many flavours of linux come with well polished and intuitive GUIs, for an optimum Linux experience, one still needs a familiarity with the Linux CLI (the terminal or shell) to be able to carry out essential computer operations in a fast and clean manner. 

The command line still plays very important roles in the life of the Linux user and yours too if you choose to use it.

In Linux, commands are given (typed) in the terminal. Though the terminal application can have varied names across different linux distributions (distros) - but most times it is simply called “terminal” or a closely related term. 



To get started using open the terminal (for Ubuntu simply hold the Ctrl + Alt + T) and you're welcomed by a series of characters arranged in this format;

```linux
user_name@machine_name:~$
``` 

You can see a command line ending with a blinking shell prompt, signifying the shell is ready to receive commands from the user. 

* The <strong><em>“user_name”</em></strong> represents the login name.

* The <strong><em>“machine_name”</em></strong> (also known as the domain name) is the name assigned to the computer(or server) and it is usually set during installation. Sometimes it could also be represented by an IP address.

* The tilde sign <strong><em>“~”</em></strong> shows that the current directory of the user is his "home" ```(/home/user_name)```.

 	* Note that every user in a Linux system has a HOME directory created for them and this home directory always is the same name with the user's login name (or username). That is if the login name is “john” then his home directory would be /home/john. At login, every user is taken directly to his/her home directory.

From the command terminal you can start giving command to the shell. Multiple commands can be given on a single command line using a semi-colon to separate them. Something like this;

```user_name@machine_name:~$ who; free; df```

But most times to ensure a clean output it is advisable to enter commands one at time so as not to cluster the screen.
