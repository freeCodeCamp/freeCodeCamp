---
title: Simple and Useful Linux Commands
---

# Simple and Useful Linux Commands
The commands listed here are basic, and will help you get started quickly. But they’re also powerful, and they’ll continue to be useful as your Linux expertise expands. 
Use these commands in scripts and at the command line. They're all very powerful commands, and Linux's man page has a lot more information about each one.

1. `echo` This takes the text you give it and sends it somewhere—back to the screen, to a file, or to another command. By default it echoes back to the screen, unless used with redirection `>` 
Example: `echo "hello!"`
Example 2: `echo "Hello world" > hello.txt`
2. `cat` To display the contents of a text file, just type `cat myfile`. This command can display multiple files one after another by concatenating them into one string, hence the name. Just type `cat myfile1 myfile2`.
3. `find` It does what it says, and it’s good at it. Use it to locate files by path, size, date, owner and a bunch of other useful filters. Example: `find . -type f -mtime -1h # List files in this directory modified in the past hour`.
4. `date` Just type date when you want to know what time it is. Example: `date "+It's %l:%m%p on %A"`. Use it in a script to name files according to the current date.
5. `ls` What's in this directory? Combine `ls` with some useful flags to display and sort directory contents by date and size. It also gives you lots of options for formatting the output.
6. `pwd` Where am I? Linux can be unforgiving, particularly when you delete something. Make sure you know are before you issue your commands.
7. `mail` Linux's mail program isn’t good looking, but it can be really helpful. You can create a message and add text, recipients, and attachments all in one command. Example: `echo "We're having a great time." | mail -s "Wish you were here!" -A postcard.png -t mom@example.com`
8. `cut` When you have a string with separators in it, use `cut` to filter out certain fields. Example: `echo "this, that, and the other" | cut -d, -f2 # "that"`
9. `grep` To find lines of text that contain a certain string, use grep. Example: `grep 'root' /etc/passwd # root:x:0:0:root:/root:/bin/bash`
10. `sed` Use sed to find and change a substring in a piece of text. Example: `echo "this, that, and the other" | sed 's/that/those/' # "this, those, and the other"`
11. `shutdown` use shut down the system and turn off the power. Example: `shutdown -h now`shuts down system immediately. `shutdown -h +5` shuts down system after five minutes. You can also reboot the system immediately by issuing the command `shutdown -r now`.
12. `cd` use `cd` to change the directory. Example: `cd dirName` changes the directory to the folder names `dirName`. `cd ..` this command takes to the upper root folder or out of the folder.
13. `vi` use vi editor to quickly edit any file. Example: `vi filename`

### Important commands for file manipulation are:
1. mv [source] [destination] - Moves a file or a folder from source to destination you can also rename a file with these command
2. rm [file name1], [file name2]... - Removes a file and rm -r [dir name] removes a folder
3. mkdir [dir name1], [dir name2] ... - Creates a directory
4. cp [source] [destination] - Copy file from source to destination
5. touch [file name] - Creates an empty file

### Important commands used for System Administrators:
1. `uptime`
It shows since how long your system is running and the number of users who are currently logged in. It also displays the load averages for 1, 5 and 15 minutes intervals.

2. `w` 
It displays currently logged in users and their processes along-with load averages. It also shows the login name, tty name, remote host, login time, idle time, JCPU, PCPU, command and processes.

3. `users` 
It displays currently logged in users. This command doesn’t have parameters other than 'help' and 'version'.

4. `who` 
It simply returns user name, date, time and host information. `who` command is similar to `w` command. Unlike `w` command, `who` doesn’t print what users are doing. 

5. `whoami` 
It prints the name of current user. You can also use “who am i” command to display the current user. If you are logged in as a root using sudo command “whoami” command return root as current user. Use “who am i” command if you want to know the exact user logged in.

6. `ls` 
It displays the list of files in human readable format.

7. `crontab` 
List schedule jobs for current user with crontab command and -l option.

8. `less` 
It allows quickly view file. You can page up and down. Press `q` to quit from `less` window.

9. `more` 
It allows quickly view file and shows details in percentage. You can page up and down. Press `q` to quit from `more` window.

10. `adduser` or `useradd`  
This command is for administrators to create new user accounts.

11. 'ifconfig'
ifconfig allows you to see the addresses associated with each TCP/IP interface on your machine, or manipulate the state of the interface. A definite must have for any tech or SysAdmin.

12. `systemctl`
This is a command which allows operators to work with the Linux system services. The standard use of the command is `systemctl <OPTION> <SERVICE-NAME>` by providing an `OPTION` (e.g. `start`, `stop`, `status`) and than providing a specific Service Name to act on. You can use the command to get a general status of your Linux services (e.g `systemctl status`). Note that you will either need Administrator access or use `sudo` to elevate your rights to run the command successfully.  

13. `scp` Command
securely Copy file between remote hosts without logging or creating a FTP session explicitly. 

14. `su` Command
This command is used to execute sequence of codes in root mode. Root is the super user mode which can modify any file in system without any password (once asked while logging in).

15. `sudo` Command
This command is used to execute a single line of code in root mode.
     
16. `apt-get` Command
This command is used to install packages which are present in the operating system repositories with complete dependencies (must be run in root mode).

17. `aptitude` Command
This command is used to install packages with or without complete dependencies, i.e. it can fix any type of incomplete dependencies.

### How to get help about the commands:
More info can be viewed about how to use each of the commands listed above right in the terminal in the following ways:
1. Using `man` to access the manual pages. It takes as argument another command name and returns a complete tutorial about the argument, including main options of use, syntax details and another related commands. You can search a text accross all man pages database.
Example: `man cd`
2. Using the `--help` flag to see quick options to use in command line.
Example: `cd --help`
