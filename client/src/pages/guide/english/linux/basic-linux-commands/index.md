---
title: Basic Linux Commands
---
## Basic Linux Commands

When starting out with linux, there are some basic commands everyone should know.

 1. **cd** - change directory 
- cd followed by a directory or file path will take you inside that directory(folder).

 2. **ls** - list command
- Type `ls` and the contents of the current directory will be displayed.

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

 8. **touch** - creates file   
- The touch command is used to create a file. It can be anything, from an empty txt file to an empty zip file. 'touch new.txt' will create a new file with name new.

 9. **mv** - move   
- Use the mv command to move files through the command line. We can also use the mv command to rename a file. For example, if we want to rename the file “text” to “new”, we can use 'mv text new'.

 10. **cat** - display file's textual contents  
- Use this command to display text from within a given file on your terminal. Entering `cat myFile.txt` in your terminal will display the contents of the file `myFile.txt` on screen. The `cat` command can be a very handy tool when used with the terminal _pipes_

 11. **less** - view file content  
- Use `less filename.txt` to view contents of a file and navigate through them. By default, less will go through the file page by page.

### Useful Resources for Practice:
- [JSLinux](https://bellard.org/jslinux/vm.html?url=https://bellard.org/jslinux/buildroot-x86.cfg): Run the terminal inside your browser. Great for practice.
- [LearnShell](https://www.learnshell.org/): Interactive Linux shell (terminal) tutorials.
- [LinuxJourney](https://linuxjourney.com/lesson/the-shell): A collection of beginner-friendly terminal tutorials.
