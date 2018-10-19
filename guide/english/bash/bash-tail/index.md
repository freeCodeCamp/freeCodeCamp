---
title: Bash Tail
---
 ## Bash command: tail
 `tail` is a command often used while viewing log file. This can print the last lines for a file or be told to continue to print the last line as the file is written to.
 
 ### Usage
 ```
 tail <file name>
 ```
 
 Commonly used options:
 * `-f` - Conintues to print the last line of the file as its written.
 * `-F` - Same as `-f` but if the file/log is rolled it will continue with the new file/log.
 * `-n` - Prints the name n lines of the file. After `-n` you have to specifiy a number of lines to print.
 
 ### Examples
 #### View the last several lines of /etc/hosts
 ```bash
 tail /etc/hosts
 ```
 
 #### View the last 15 lines of /var/log/messages
 ```bash
 tail -n 15 /var/log/messages
 ```
 
 #### Watch the /var/log/messages file log
 ```bash
 tail -f /var/log/messages
 ```
 
 ### More Information
 * Run `man tail` for more information on the tail command as well as a complete list of options.
 * [Wikipedia](https://en.wikipedia.org/wiki/Tail_(Unix))
