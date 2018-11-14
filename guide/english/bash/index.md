---
title: Bash
---

## What is Bash?

<a>Bash</a> (short for Bourne Again SHell) is a Unix shell, and a command language interpreter. A shell is simply a macro processor that executes commands. It's the most widely used shell packaged by default for most Linux distributions, and a successor for the Korn shell (ksh) and the C shell (csh).

Many things that can be done Linux operating system can be done via command line. Some examples are:
* Editing files
* Adjusting the volume of the operating system
* Fetching web pages from the internet
* Automating work you do every day

You can read more about bash <a href="https://www.gnu.org/software/bash/">here</a>, via the <a href="https://www.gnu.org/software/bash/manual/html_node/index.html#SEC_Contents">GNU Documentation</a>, and via the <a href="http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO.html#toc10">tldp guide</a>.


## Using bash on the command line (Linux, OS X)

You can start using bash on most Linux and OS X operating systems by opening up a terminal.  Let's consider a simple hello world example. Open up your terminal, and write the following line (everything after the $ sign):

```
zach@marigold:~$ echo "Hello world!"
Hello world!
```

As you can see, we used the echo command to print the string "Hello world!" to the terminal.  


## Writing a bash script 

You can also put all of your bash commands into a .sh file, and run them from the command line. Say you had a bash script with the following contents:

```
#!/bin/bash
echo "Hello world!"
```
It's worth noting that first line of the script starts with `#!`. It is a special directive which Unix treats differently. 

#### Why did we use #!/bin/bash at the beginning of the script file? 
That is because it is a convention to let the interactive shell know what kind of interpreter to run for the program that follows. The first line tells Unix that the file is to be executed by /bin/bash. This is the standard location of the Bourne shell on just about every Unix system. Adding #!/bin/bash as the first line of your script, tells the OS to invoke the specified shell to execute the commands that follow in the script.
`#!` is often referred to as a "hash-bang", "she-bang" or "sha-bang".
Though it is only executed if you run your script as an executable. For example, when you type `./scriptname.extension`, it will look at the top line to find out the interpreter, whereas, running the script as `bash scriptname.sh`, first line is ignored. 

Then you could run the script like so:
For make file executable you should call this command under sudo chmod +x "filename".
```
zach@marigold:~$ ./myBashScript.sh
Hello world!
```

The script only has two lines. The first indicates what interpreter to use to run the file (in this case, bash). The second line is the command we want to use, echo, followed by what we want to print which is "Hello World".

Sometimes the script won't be executed, and the above command will return an error. It is due to the permissions set on the file. To avoid that use:
```
zach@marigold:~$ chmod u+x myBashScript.sh
````
or
```
zach@marigold:~$ chmod 744 myBashScript.sh
````
And then execute the script.
## Script Example
If you execute this script it is going to print out your name.
```
#!/usr/bin/env bash
NAME="John"  
echo  "Hello $NAME!"
```

### More Information:

* [Wikipedia - Bash](https://en.wikipedia.org/wiki/Bash_(Unix_shell))
* [tldp.org - Guide to Bash](http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO.html#toc2)
* [gnu.org - Bash manual](https://www.gnu.org/software/bash/manual/html_node/index.html#SEC_Contents)
* [Shell scripting tutorial](https://www.shellscript.sh/)
