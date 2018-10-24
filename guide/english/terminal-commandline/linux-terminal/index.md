---
title: Linux Terminal
---


# Using LINUX Shell or Terminal

Basically, a shell is a program that receives commands from the user and gives it to the OS to process, and it shows the output. Linux's shell is its main part. Its distros come in GUI (graphical user interface), but basically, Linux has a CLI (command line interface).

### Opening the Terminal and Navigating Directories
To open the terminal, press Ctrl+Alt+T in Ubuntu, or press Alt+F2, type in gnome-terminal, and press enter. OR Your terminal exists in the Applications directory. Open your Terminal app. You should see a prompt in the terminal window. it shoudl have the computer's name, followed by the User name (ABC), and then a '$.' If you are in the root directory, the last character will be a '#.'


Here is a list of common commands:

Command | Usage
------------ | -------------
pwd | Print Working Directory (Where Am I? )
ls | List contents of current directory
ls -a | list contents of current directory including hidden files
cd | to go to directory
mkdir | Create a new directory
rmdir | remove a directory
cp| Copy a file 
rm | Remove a file 
mv | move a file
touch | to create a new file
man | shows the manual pages of command
--help | it show which ways the command can be used
cat | to display the content of file

### Usage Examples

Some of the aforementioned commands aren't clear without examples. Below are a few usage examples to help provide you with some context. 

#### To switch to a directory

```cd <directory>```

Typing only `cd` will move to the home directory works same as `cd ~`

#### Making a Directory

```mkdir #YOUR-NEW-FOLDER-NAME```

#### Making a File 

``` touch FILE-NAME.TXT```

You can make a file with any extension you choose. As long as it is in an a format accepted by the folder or machine.

#### Copying a File 

Use the following syntax to copy a file from the terminal:

**cp _source_ _destination_**

For example, if we have a file, _'test.txt'_ that is stored in our _/Desktop_ directory and we want to copy it to the _/Documents_ folder, our command would look like this: 

    cp ~/Desktop/test.txt ~/Documents

#### Deleting a File 

Use the following syntax to delete a file 

**rm _#PATH_TO_FILE_**

#### manual pages of command

```man <command>``` 

For example ```man cd``` shows the manual pages of the cd command

#### ```help```

```<command> --help```

Typing ```cd --help``` will show in which ways the ```cd``` command can be used 



## Useful tips:
-	The command `ifconfig` shows your computer's ip address 
-	If you type part of a directory's name and hit the `tab` key the terminal will autocomplete it
- If you know the path to a file or directory can type `cd PATH_TO_YOUR_DIRECTORY` instead of changing directories several times to get to a directory or file 
- Use `cd ..` to move to the previous parent directory
- When you hit the up arrow key your previously entered command will appear and if you hit it repeatedly it will cycle through all of your previously entered commands 
- If you are using terminal as a non-root user and want to use terminal as root you can enter `su root` It will ask for root password enter it and you will get root terminal
- Search your command history as you type `Ctrl+R` hold down `Ctrl` and press `R` to invoke "reverse-i-search." Type a letter - like s - and you'll get a match for the most recent command in your history that starts with s. Keep typing to narrow your match. When you hit the jackpot, press Enter to execute the suggested command
- `!characters` will execute the last command that matches the specified characters. (So `!ssh` will run the last `ssh` you used.)
