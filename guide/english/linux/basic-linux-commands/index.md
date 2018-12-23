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


8. **touch** - sets modification and access times of files, creates new files   
- The touch command sets the modification and access times of files to the current time by default. To set the access time and/or modification time of files to a different date or that of another file, certain flags can be used with the command. If the touch command is used with a filename that does not exist, it creates the file. `touch new.txt` will create a new text file with name `new`.

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
- Use 'cp' to copy a file or a direcotry with files inside it to another location using command 'cp CURRENT_FILE-LOCATION DESTINATION_FOLDER'. Add '-r' flag to copy a directory that is not empty. 
 
15. **du** - estimate file space usage
- Use 'du' to estimate file space usage. du is abbreviation of "disk usage". This command tool reports usage by given directory

16. **ln** - link LINKNAME to TARGET file/directory
- Link is pointer which connects file name to actual bytes of data on the disk. More than one link can point on the same data.
- Use `ln` to create a link to targeted file with linkname. Link to target is created in current working directory. By default ln creates [hard link](http://www.linfo.org/hard_link.html) and requires existance of TARGET file/directory. If we add `-s`(--symbolic) to the command, [symbolic link](https://www.computerhope.com/jargon/s/symblink.htm) will be created.

17. **top** - shows the system load
- Use `top` to get information about running processes of your system, the amount or RAM they allocate and the CPU percentage that they use. 'Top' is interactive so do not forget to press `q` when you want to quit.

18. **df -h** Checks disk space in human readable form
- Shows the size, amount used, amount available and capacity percentage of mounted drives/partitions.

19. **grep** -  The grep searches any given input files, selecting lines that match one or more patterns.
- use `grep` to find a file, a directory, some text in the file/directory.  

20. **sudo** - execute a command as super user
- A widely used command in the Linux command line, sudo stands for "SuperUser Do". So, if you want any command to be done with administrative or root privileges, you can use the sudo command.

21. **kill** - stops runing process
- The `kill` command sends a signal to a running process. This default action normally stops processes. If you want to stop a process, specify the process ID (PID) in the `ProcessID` variable. The shell reports the PID of each process that is running in the background (unless you start more than one process in a pipeline, in which case the shell reports the number of the last process). You can also use the `ps` command to find the process ID number of commands.

22. **find** - search for files in a directory hierarchy
- `find` searches the directory tree rooted at each given file name by evaluating the given expression from left to right, according to the rules of precedence, until the outcome is known (the left hand side is false for and operations, true for or), at which point `find` moves on to the next file name.

23. **man** - Show the manual for a command
 - Use `man` to see manual of any commmand.  It will show different ways a given command can be used  
    Example: `man ls`
 
24. **ps** - Show active processes
 - Use `ps` to see running processes, and their process IDs  
     Example: `ps`
 
25. **history**
 - Use `history` to see previously entered commands  
    Example: `history` 
 
### Useful Resources for Practice:
- [JSLinux](https://bellard.org/jslinux/vm.html?url=https://bellard.org/jslinux/buildroot-x86.cfg): Run the terminal inside your browser. Great for practice.
- [LearnShell](https://www.learnshell.org/): Interactive Linux shell (terminal) tutorials.
- [LinuxJourney](https://linuxjourney.com/lesson/the-shell): A collection of beginner-friendly terminal tutorials.
