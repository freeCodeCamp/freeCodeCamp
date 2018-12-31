---
title: Windows Command Prompt
---
# Using the Command Prompt in Windows
Windows, MacOS and Linux have command line interfaces. Windows' default command line is the command prompt. The command prompt allows users to use their computer without pointing and clicking with a mouse. The command prompt is a black screen where users type commands to use their computer. The same tasks that can be done by pointing and clicking with a mouse can also be done with the command prompt. The difference is that many tasks such as creating folders and deleting files can be done faster in the command prompt. Also, it allows users to configure their computer and run programs that they otherwise could not do by pointing and clicking.

## Opening the Command Prompt 
To access the command prompt, click the windows start menu on the Desktop tool bar (you can also press the windows button on your keyboard) and type `cmd` and hit `enter`. The command prompt will appear, it will display some text like to following below:
``` 
C:\Users\YourUserName>
```
## Navigating Directories (Moving through folders)
`C:\Users\YourUserName` is called your current working directory (directory is another way to say folder). It is like a street address that tells you where you are on your computer. The current working directory can be a guide as you navigate through your computer. On the right of the `>` we can type `cd`, which stands for Change Directory, and the name of a directory that you want to navigate to. In this case we will type `Documents`. Enter `cd Documents` and your current working directory should look like the following:
```
C:\Users\YourUserName\Documents>
```
To go back one directory type and enter `cd..`. Your current working directory should return to this:
```
C:\Users\YourUserName>
```
Also, to go back to the root directory type and enter `cd\`. Your current working directory should return to this:
```
C:\>
```
With the `cd`, `cd ..` and `cd\` commands you can move back and forth through directories. This might seem very basic at first but as you learn more commands the command prompt will become a very useful and efficient tool.

## Here is a list of common commands:
| Command | Description  |
|---------|--------------|
|`help`   |Lists commands that can be used|
|  `dir`  |Lists the current directories contents|
|`dir /a` |Shows hidden files|
| `mkdir` |Creates a new directory|
| `rmdir` |Deletes a directory (if empty)|
| `rmdir /s`|Deletes a folder and its contents
| `cls`  |Clears the command prompt screen
| `exit`|Closes the command prompt
 
## Usage Examples:
#### Making a Directory
```
mkdir name_of_the_directory_you_want_to_make
```
#### Getting Info on a Command
```
your_command /?
```
#### Deleting a File and Contents
```
rm /s name_of_directory_you_want_to_delete
```

## Useful tips:
-	The command `Ipconfig` shows your computer's ip address 
- The command `getmac` shows your computer's physical address
-	If you type part of a directory's name and hit the `tab` key the command prompt will autocomplete it and if you hit the `tab` key repeatedly it will cycle through directories that start with the same letter 
-	You can use other shells or tools such as git bash or cmder to add more commands and functionality to your command prompt 
- Some tasks require you to run the command prompt as an administrator you clicking the windows button and typing `cmd admin` and hit the `enter` key
- If you know the path to a file or directory can type `cd PATH_TO_YOUR_DIRECTORY` instead of changing directories several times to get to a directory or file 
- Use `cd ..` to move to the previous parent directory
- When you hit the up arrow key your previously entered command will appear and if you hit it repeatedly it will cycle through all of your previously entered commands 
