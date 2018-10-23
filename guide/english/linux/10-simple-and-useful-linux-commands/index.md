---
title: Simple and Useful Linux Commands
---
# 11 Simple and Useful Linux Commands
The commands listed here are basic, and will help you get started quickly. But they’re also powerful, and they’ll continue to be useful as your Linux expertise expands.
1. `echo` This takes the text you give it and sends it somewhere—back to the screen, to a file, or to another command. By default it echoes back to the screen, unless used with redirection `>` 
Example: `echo "hello!"`
Example 2: `echo "Hello world" > hello.txt`
1. `cat` To display the contents of a text file, type `cat myfile`.
1. `find` It does what it says, and it’s good at it. Use it to locate files by path, size, date, owner and a bunch of other useful filters. Example: `find . -type f -mtime -1h # List files in this directory modified in the past hour`.
1. `date` Type date when you want to know what time it is. Example: `date "+It's %l:%m%p on %A"`. Use it in a script to name files according to the current date.
1. `ls` What's in this directory? Combine `ls` with some useful flags to display and sort directory contents by date and size. It also gives you lots of options for formatting the output.
1. `pwd` Where am I? Linux can be unforgiving, particularly when you delete something. Make sure you know are before you issue your commands.
1. `mail` Linux's mail program isn’t good looking, but it can be really helpful. You can create a message and add text, recipients, and attachments all in one command. Example: `echo "We're having a great time." | mail -s "Wish you were here!" -A postcard.png -t mom@example.com`
1. `cut` When you have a string with separators in it, use `cut` to filter out certain fields. Example: `echo "this, that, and the other" | cut -d, -f2 # "that"`
1. `grep` To find lines of text that contain a certain string, use grep. Example: `grep 'root' /etc/passwd # root:x:0:0:root:/root:/bin/bash`
1. `sed` Use sed to find and change a substring in a piece of text. Example: `echo "this, that, and the other" | sed 's/that/those/' # "this, those, and the other"`
1. `shutdown` Use shutdown the system and turn off the power. Example: `shutdown -h now`shuts down system immediately. `shutdown -h +5` shuts down system after five minutes.

Use these commands in scripts and at the command line. They're all very powerful commands, and the Linux man pages has a lot more information about each one.

***********

# Useful commands for System Administrators

These commands are frequently used by system administrators.

1. `uptime` Command
In Linux, the uptime command shows how long your system has been running and the number of users that are currently logged in. It also displays load average for 1,5 and 15 minute intervals.

2. `w` Command
This command displays users that are currently logged in and their processes along with load averages. It also shows the login name, tty name, remote host, login time, idle time, JCPU, PCPU, command and processes.

3. `users` Command
The users command displays currently logged in users. This only parameters for this command are help and version.

4. `who` Command
The who command  returns user name, date, time and host information for the users who are logged into the system. The who command is similar to w command. Unlike the w command, who doesn’t print what users are doing. Lets illustrate and see the different between who and w commands.

5. `whoami` Command
The whoami command prints the name of the current user. You can also use the  “who am i” command to display the current user. If you are logged in as a root using the sudo command, the “whoami” command returns root as current user. Use the “who am i” command if you want to know the exact user who logged in.

6. `ls` Command
The ls command displays a list of files in human readable format.

7. `crontab` Command
The crontab command schedules jobs for the current user with the crontab command and -l option.

8. `less` Command
The less command allows you to quickly view a file. You can page up and down. Press ‘q‘ to quit from the less command.

9. `more` Command
The more command allows you to quickly view  afile and shows the percentage of the file that you have viewed. You can page up and down. Press ‘q‘ to quit.

10. `cp` Command
The cp command copies a file file from source to destination preserving the same mode.
 
