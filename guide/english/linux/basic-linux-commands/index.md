---
title: Basic Linux Commands
---
## Basic Linux Commands

When starting out with linux, there are some basic commands everyone should know.

 1. **cd** - change directory 
- cd followed by a directory or file path will take you inside that directory(folder).

 2. **ls** - list command
- Type `ls` and the contents of the current directory will be displayed.
- Two common flags used with `ls` are `-l` and `-a`, they can be used together and chained as such: `ls -la`. The `-l` flag will show you files in list order and in long format including a display of permissions, `-a` will show dot type files which are typically hidden in a GUI file finder such as `.env` files
- Flag ordering does not matter, so the previous command could be written as `ls -al`

 3. **man** - manual command
- Shows you the manual for the following command. This is very helpful when trying to figure out how an unfamiliar command works. For example, type `man ls` for everything you need to know about the ls command. Type `q` to exit.

 4. **pwd** - path
- Type `pwd` to display the path to your current directory.

 5. **mkdir** - make directory 
- This command, followed by the name you wish to name your directory, creates a new directory. `mkdir folder1` will make a new directory called folder1.

 6. **rmdir** - remove directory   
- Removes the directory that follows the command. `rmdir folder1` will delete the directory named folder1 if it exists.

 7. **rm** - remove   
- This command removes files, not directories. `rm file.txt` will remove the file named file.txt as long as it exists and is in the current directory.
- **Warning, this command is capable of destroying entire systems, use with caution**

 8. **touch** - creates file   
- The `touch` command is used to create a file. It can be anything, from an empty txt file to an empty zip file. 'touch new.txt' will create a new file with name new.

 9. **mv** - move   
- Use the `mv` command to move files through the command line. We can also use the mv command to rename a file. For example, if we want to rename the file “text” to “new”, we can use 'mv text new'.
- **Warning, this command is capable of destroying entire systems, use with caution**

 10. **right-click** - copy and paste  
- This one is less of a command and more of a how-to, however, it is very useful for doing almost anything in a terminal on linux. To begin, highlight text like normal and then "right-click" on your mouse to copy a selection. You should see the highlighted portion become un-highlighted, this means you copied the selection. Now "right-click" on where you want to paste the selection and you're done. 

 11. **less** - view file content  
- Use `less filename.txt` to view contents of a file and navigate through them. By default, less will go through the file page by page.

 12. **cat** - display file's textual contents  
- Use this command to display text from within a given file on your terminal. Entering `cat myFile.txt` in your terminal will display the contents of the file `myFile.txt` on screen. The `cat` command can be a very handy tool when used with the terminal _pipes_.

 13. **clear** - clear terminal
- Use `clear` to simply clear all output from your terminal.

 14. **cp** - copy files and directories
- Use `cp` to copy a file or a direcotry with files inside it to another location using command `cp CURRENT_FILE-LOCATION DESTINATION_FOLDER`. Add `-r` flag to copy a directory that is not empty. 

 15. **top** - shows the system load
- Use `top` to get information about running processes of your system, the amount or RAM they allocate and the CPU percentage that they use. 'Top' is interactive so do not forget to press `q` when you want to quit.

 16. **df -h** Checks disk space in human readable form
- Shows the size, amount used, amount available and capacity percentage of mounted drives/partitions.

 17. **grep** -  The grep searches any given input files, selecting lines that match one or more patterns.
- use `grep` to find a file, a directory, some text in the file/directory.  
**Example:**
```sh
 $ ps ax | grep -w login
 25291 s000  Ss     0:00.11 login -pf <user>
 25467 s000  R+     0:00.00 grep -w login
 25409 s004  Ss     0:00.04 login -pf <user>
```

 15. **sudo** - execute a command as super user
- A widely used command in the Linux command line, sudo stands for "SuperUser Do". So, if you want any command to be done with administrative or root privileges, you can use the sudo command.

15. **kill** - stops runing process
- The `kill` command sends a signal to a running process. This default action normally stops processes. If you want to stop a process, specify the process ID (PID) in the `ProcessID` variable. The shell reports the PID of each process that is running in the background (unless you start more than one process in a pipeline, in which case the shell reports the number of the last process). You can also use the `ps` command to find the process ID number of commands.

16. **find** - search for files in a directory hierarchy
- `find` searches the directory tree rooted at each given file name by evaluating the given expression from left to right, according to the rules of precedence, until the outcome is known (the left hand side is false for and operations, true for or), at which point `find` moves on to the next file name.

17. **grep** - print lines matching a pattern
- `grep` searches for `PATTERN` in each FILE.  A FILE of `“-”` stands for standard input. If no FILE is given, recursive searches examine the working directory, and nonrecursive searches read standard input. By default, `grep` prints the matching lines.

### Useful Resources for Practice:
- [JSLinux](https://bellard.org/jslinux/vm.html?url=https://bellard.org/jslinux/buildroot-x86.cfg): Run the terminal inside your browser. Great for practice.
- [LearnShell](https://www.learnshell.org/): Interactive Linux shell (terminal) tutorials.
- [LinuxJourney](https://linuxjourney.com/lesson/the-shell): A collection of beginner-friendly terminal tutorials.

