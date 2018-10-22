---
title: Bash
---

## What is Bash?

Bourne Again SHell or, <a>Bash</a> for short, is a Unix shell and command language interpreter.  A shell is simply a macro processor that executes commands and Bourne Again Shell (bash) is the most widely used shell packaged with most Linux distributions.  Bash is a successor to the Korn shell (ksh) and the C shell (csh).

Many common operations can be done using the command line in Linux operating systems. The following are some examples of those operations.
* Editing files
* Adjusting the volume of the operating system
* Fetching web pages from the internet
* Automating work you do every day

Learn more about bash <a href="https://www.gnu.org/software/bash/">in the official GNU/Linux documentation</a>, the official <a href="https://www.gnu.org/software/bash/manual/html_node/index.html#SEC_Contents">GNU Bash Manual</a>, and <a href="http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO.html#toc10">The Linux Documentation Project (tldp) guide</a>.


## Using bash on the command line (Linux, OS X)

The Terminal application in most Linux and OS X operating systems provides direct access to bash.  Let's consider a simple "hello world" example. Open the terminal application, and type <strong>echo "Hello world!"</strong> immediately following line the $ sign prompt, as below.

```
zach@marigold:~$ echo "Hello world!"
Hello world!
```

The echo command prints the characters "Hello world!" to the Terminal window.  


## Writing a bash script 

A bash script is a series of bash commands executed in sequence.  The bash commands are placed in a special <strong>.sh</strong> file and the .sh file can be executed from the command line. A bash script take the form as shown below.

```
#!/bin/bash
echo "Hello world!"
```
The above script has only two lines. The first line indicates what interpreter should use to run the file (in this case, bash). The second line is the command we want to execute, <strong>echo</strong>, followed by the desired text to print, in this case "Hello World".  The first line of a bash script starts with the two characters <strong>#!</strong> and is called a shebang. Unix treats treats the shebang differently. 

#### Why do we write #!/bin/bash at the beginning of the script file? 
The interative shell determines the type of interpreter to run for the program that follows by the first line.  <strong>#!/bin/bash</strong> instructs the operating system (e.g. GNU/Linus/OSX) to execute the instructions in the script with /bin/bash.  In most instances, bash is found in the /bin directory of Unix systems as it is a standard installation location.   

The interpreter may or may not read the first line of the script depending upon how the script is presented to the interpreter.  Simply entering the filename and extension (e.g. `./scriptname.extension`) will force the interpreter to read the first line of the script, while the first line is ignored when entering `bash scriptname.sh`. 

The command <strong> sudo chmod +x "filename" </strong> will make a file executable.

```
zach@marigold:~$ ./myBashScript.sh
Hello world!
```

Scripts can executed by users with the appropriate permissions.  In cases where scripts will not execute and an error appears,  the permissions assigned to the file or the user could be the source of the error.  Script execution errors can be circumvented in some cases through the use of the commands below.
```
zach@marigold:~$ chmod u+x myBashScript.sh
````
or
```
zach@marigold:~$ chmod 744 myBashScript.sh
````

### More Information:

* [Wikipedia - Bash](https://en.wikipedia.org/wiki/Bash_(Unix_shell))
* [The Linux Documentation Project (tldp.org) - Guide to Bash](http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO.html#toc2)
* [gnu.org - Bash manual](https://www.gnu.org/software/bash/manual/html_node/index.html#SEC_Contents)
* [Shell scripting tutorial](https://www.shellscript.sh/)
