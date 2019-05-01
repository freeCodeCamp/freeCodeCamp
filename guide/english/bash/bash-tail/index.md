---
title: Bash Tail
---

 ## Bash Tail
`tail` is a program to display the **tail** end of a text file. If no option is given, tail shows the last 10 lines of a given file.
 
### Usage

```bash
tail [options] [file_names]
```
 
Commonly used options:

- `-f` - Display the last lines and then monitor the file. If new lines are added to the file, tail updates the display.
- `-F` - Same as `-f` but if the file/log is rolled it will continue with the new file/log.
- `-c NUM` - display the last `NUM` bytes of the file.
- `-n NUM` - display the last `NUM` lines, instead of the last 10
 
 ### Examples
 
 #### View the last several lines from file **log.txt**
 ```bash
 tail log.txt
 ```
 
 #### View the last 15 lines from file **log.txt**
 ```bash
 tail -n 15 log.txt
 ```
 
#### Show only the last line from file **log.txt**
```bash
tail -n1 log.txt
```
 
 #### Show live changes from file **log.txt**
```bash
tail -f log.txt
```
 
 ### More Information
 * Run `man tail` for more information on the tail command as well as a complete list of options.
 * [Wikipedia](https://en.wikipedia.org/wiki/Tail_(Unix))
 