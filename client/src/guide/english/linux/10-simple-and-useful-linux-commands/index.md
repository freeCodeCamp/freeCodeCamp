---
title: 10 Simple and Useful Linux Commands
---
# 10 Simple and Useful Linux Commands
The commands listed here are basic, and will help you get started quickly. But they’re also powerful, and they’ll continue to be useful as your Linux expertise expands.
1. `echo` This takes the text you give it and sends it somewhere—to back to the screen, to a file, or to another command. Example: `echo "hello!"`
1. `cat` To display the contents of a text file, just type `cat myfile`.
1. `find` It does what it says, and it’s good at it. Use it to locate files by path, size, date, owner and a bunch of other useful filters. Example: `find . -type f -mtime -1h # List files in this directory modified in the past hour`.
1. `date` Just type date when you want to know what time it is. Example: `date "+It's %l:%m%p on %A"`. Use it in a script to name files according to the current date.
1. `ls` What's in this directory? Combine `ls` with some useful flags to display and sort directory contents by date and size. It also gives you lots of options for formatting the output.
1. `pwd` Where am I? Linux can be unforgiving, particularly when you delete something. Make sure you know are before you issue your commands.
1. `mail` Linux's mail program isn’t good looking, but it can be really helpful. You can create a message and add text, recipients, and attachments all in one command. Example: `echo "We're having a great time." | mail -s "Wish you were here!" -A postcard.png -t mom@example.com`
1. `cut` When you have a string with separators in it, use `cut` to filter out certain fields. Example: `echo "this, that, and the other" | cut -d, -f2 # "that"`
1. `grep` To find lines of text that contain a certain string, use grep. Example: `grep 'root' /etc/passwd # root:x:0:0:root:/root:/bin/bash`
1. `sed` Use sed to find and change a substring in a piece of text. Example: `echo "this, that, and the other" | sed 's/that/those/' # "this, those, and the other"`
1. `shutdown` use shut down the system and turn off the power. Example: `shutdown -h now`shuts down system immediately. `shutdown -h +5` shuts down system after five minutes.

Use these commands in scripts and at the command line. They're all very powerful commands, and Linux's man page has a lot more information about each one.

***********

Also, important commands used for System Administrators are following:

1. `uptime` Command
In Linux uptime command shows since how long your system is running and the number of users are currently logged in and also displays load average for 1,5 and 15 minutes intervals.

2. `w` Command
It will displays users currently logged in and their process along-with shows load averages. also shows the login name, tty name, remote host, login time, idle time, JCPU, PCPU, command and processes.

3. `users` Command
Users command displays currently logged in users. This command don’t have other parameters other than help and version.

4. `who` Command
who command simply return user name, date, time and host information. who command is similar to w command. Unlike w command who doesn’t print what users are doing. Lets illustrate and see the different between who and w commands.

5. `whoami` Command
whoami command print the name of current user. You can also use “who am i” command to display the current user. If you are logged in as a root using sudo command “whoami” command return root as current user. Use “who am i” command if you want to know the exact user logged in.

6. `ls` Command
ls command display list of files in human readable format.

7. `crontab` Command
List schedule jobs for current user with crontab command and -l option.

8. `less` Command
less command allows quickly view file. You can page up and down. Press ‘q‘ to quit from less window.

9. `more` Command
more command allows quickly view file and shows details in percentage. You can page up and down. Press ‘q‘ to quit out from more window.

10. `cp` Command
Copy file from source to destination preserving same mode.

Here are the list of commands frequently used by adiminstrator.
This is not a complete but it’s a compact list of commands to refer when needed. 
