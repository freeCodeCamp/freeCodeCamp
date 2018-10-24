---
title: Bash
---

## What is Bash?

***Bash*** (short for Bourne Again SHell) is a Unix shell, and a command language interpreter. A shell is simply a macro processor that executes commands. It's the most widely used shell packaged by default for most Linux distributions, and a successor for the Korn shell (ksh) and the C shell (csh).

In Linux and Unix-based operating systems, bash, as well as many other commands can be executed through the terminal. As an example, using the Linux terminal, one can:
* Create, edit and delete files
* Manage disk usage, configuration files and other aspects of the operating system
* Fetch web pages from the internet
* Automate daily tasks

You can read more about bash <a href="https://www.gnu.org/software/bash/">here</a>, via the <a href="https://www.gnu.org/software/bash/manual/html_node/index.html#SEC_Contents">GNU Documentation</a>, and via the <a href="http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO.html#toc10">tldp guide</a>.


## Using bash on the command line (Linux, OS X)

You can start using bash on most Linux and OS X operating systems by opening up a terminal.  Let's consider a simple hello world example. Open up your terminal, and type the following line:

```sh
echo "Hello world!"
```
Pressing `enter` outputs the string: `Hello world!`. As you can see, we used the echo command to print the string "Hello world!" to the terminal.  


## Writing a bash script 

You can also put all of your bash commands into a `.sh` file, and run them from the command line. Say you had a bash script with the following contents:

```sh
#!/bin/bash
echo "Hello world!"
```
It's worth noting that first line of the script starts with `#!`. It is a special directive which Unix treats differently. 

#### Why did we use `#!/bin/bash` at the beginning of the script file? 
That is because it is a convention to let the interactive shell know what kind of interpreter to run for the program that follows. The first line tells Unix that the file is to be executed by /bin/bash. This is the standard location of the Bourne shell on just about every Unix system. Adding #!/bin/bash as the first line of your script, tells the OS to invoke the specified shell to execute the commands that follow in the script.
`#!` is often referred to as a "hash-bang", "she-bang" or "sha-bang".
Though it is only executed if you run your script as an executable. For example, when you type `./scriptname.extension`, it will look at the top line to find out the interpreter, whereas, running the script as `bash scriptname.sh`, first line is ignored. 

Then you could run the script like so after making the script file executable: `chmod +x myBashScript.sh`.

```sh
./myBashScript.sh
# outputs: Hello world!
```

The script only has two lines. The first indicates what interpreter to use to run the file (in this case, bash). The second line is the command we want to use, echo, followed by what we want to print which is "Hello World".

Sometimes the script won't be executed, and the above command will return an error. It is due to the permissions set on the file. To avoid that use:

```sh
chmod u+x myBashScript.sh
````
or
```sh
chmod 744 myBashScript.sh
````
And then execute the script.

## Bash start-up scripts ("dot" files): `.bash_profile` and `.bashrc`

Like many other applications in Linux and Unix-like OS, bash stores configurations and preferences of every user of the system in a hidden text file in the users home directory (`/home/USER`). Hidden files in Unix systems start with a dot, and they are commonly referred to as "dot files"

Whenever bash is initialised in a login shell (any shell that you need to type username and password to use it), it reads the file `.bash_profile`. Whenever bash is initialised in an interactive, non-login shell (ex., a terminal started within the session of the current user), it reads the configuration from the `.bashrc` file.

As it is usual that the user wants the same configuration for both interactive + non-login and for login shells, a common convention is to redirect the `.bash_profile` to read the `.bashrc` file:

```sh
if [ -f ~/.bashrc ]; then
  source ~/.bashrc
fi
```

In the above script, we used a few features of the bash command language:

+ **If statement** `if ... then ... fi`: with the *if statement*, the shell examines if the condition (`[ -f ~/.bashrc ]`, in this case) is true or not. If it is true, then it proceeds with the instruction given after the `then`. The `fi` tells the shell that the *if statement* is complete.
+ **File test operator** `-f`: `-f` is one of the [file test operators](https://www.tldp.org/LDP/abs/html/fto.html). It examines if file exists and is a regular file (not a directory, or a system device)
+ **Shell `test` command** `[ ... ]`: The brackets are a shorthand for the UNIX `test` command. The above statement `if [ -f ~/.bashrc ]` could have been rewritten to `if test -f ~/.bashrc`. The `test` command returns TRUE or FALSE.
+ **`source` command**: The `source` command tells the script to also read the given file and execute any commands it has in it.

So, basically, with this simple script, we told to our login shell:

*If the file `.bashrc` exists in our home directory;then
  read the file `.bashrc` and execute any commands it has in it.
If statement finishes here*

### Configuring `.bashrc`

There are a few things we can do by editing the `.bashrc` file. For example:

+ Change the "bash prompt". For example, we can add the current path in our prompt: `export PS1="\u@\h:\w\\$ "` and get the following prompt in our terminal: `user@host:~/path/to/dir$`
+ Add aliases for some commands (an alias is a shorthand for a command). For example
```sh
alias ll="ls -la" # with ll we get a list of all the files, with their permissions, size and timestamp
alias sl="ls" # if we mistype "ls" to "sl", it stills lists all the files
```
+ Many also use the `.bashrc` to export a new path to the `PATH` environmental variable (`PATH` is the directories where executable files are located). For example: `PATH=~/opt/bin:$PATH`, though it is considered better practice to add paths in the `.bash_profile` file instead.

---

### More Information:

* [Wikipedia - Bash](https://en.wikipedia.org/wiki/Bash_(Unix_shell))
* [tldp.org - Guide to Bash](http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO.html#toc2)
* [gnu.org - Bash manual](https://www.gnu.org/software/bash/manual/html_node/index.html#SEC_Contents)
* [Shell scripting tutorial](https://www.shellscript.sh/)
* [Greg's Wiki](http://mywiki.wooledge.org/)
