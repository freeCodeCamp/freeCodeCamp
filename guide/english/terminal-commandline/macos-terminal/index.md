---
title: Mac OS Terminal
---


# Using the Terminal in Mac OS

Most of the time users interact through a Graphical User Interface to interact with the computer. You use the mouse to point and click to open, move, or create new files or open applications. But, you can also use the Terminal Application to interact with your machine through written commands. When you use the terminal, it allows you to dig deeper and customize in a way not possible through the GUI. 

### Opening the Terminal and Navigating Directories

Your terminal exists in the Applications directory. Open your Terminal app. You should see a prompt in the terminal window. It should have the computer's name (ABC's Macbook), followed by the User name (ABC), and then a '$'. If you are in the root directory, the last character will be a '#'.

To see what directory you are working in, just type the command: 

```
pwd
```

`pwd` stands for "Print Working Directory". Directory is another word for folder. 

If you want to list the contents of your directory, use the command: 

```
ls
```

To switch to a new directory you, use the command: 

```
cd <directory_name>
```

`cd` stands for "Change Directory". ```cd``` is then followed by the directory's name you wish to switch into.

Typing only `cd` will move to the home directory works same as `cd ~`

Here is a list of common commands:

Command | Usage
------------ | -------------
pwd | Print Working Directory (Where Am I? )
ls | List contents of current directory
ls -a | List contents of current directory including hidden files
mkdir | Create a new directory
touch | Create a new file
cp| Copy a file 
rm | Remove a file 
cat | concatenate and print files
ps | list all running processes
find | find files and directories
rm -rf | Remove a directory recursively
sudo | Run command with the security privileges of the superuser
clear | Clear the screen
nano [file] | Opens the file using nano editor
vim [file] | Opens the file using vim editor
reset | resets the terminal display

### Usage Examples

Some of the aforementioned commands aren't clear without examples. Below are a few usage examples to help provide you with some context. 

#### Making a Directory

```
mkdir <your_new_folder_name>
```

#### Making a File 

```
touch file_name.js
```

You can make a file with any extension you choose. As long as it is in a format accepted by the folder or machine.

#### Copying a File 

Use the following syntax to copy a file from the terminal:

**cp _source_ _destination_**

For example, if we have a file, _'test.txt'_ that is stored in our _/Desktop_ directory and we want to copy it to the _/Documents_ folder, our command would look like this: 

```
cp ~/Desktop/test.txt ~/Documents
```

#### Deleting a File 

Use the following syntax to delete a file. 

**rm <path_to_file>**

For example, if you want to delete the test file you created above, your command line should like like this:

```
rm test.txt
```

**Note:** Removing files this way is permanent, deleted files will skip the trash completely, leaving you with few options for file recovery. Always be careful when using this command and back up your machine frequently! 

#### Detect which process is using the port you want to use
```
lsof -i :<port>
```

#### Terminate the process which uses the port you want to use
```
kill <pid>
```


#### Previewing file
If you would like to preview a file, type the command `cat <name of document>` and you would be able to preview a text document through the terminal.

#### Search your command history as you type

```control+R```

Hold down `control` and press `R` to invoke "reverse-i-search." Type a letter - like s - and you'll get a match for the most recent command in your history that starts with s. Keep typing to narrow your match. When you hit the jackpot, press Enter to execute the suggested command.

# iTerm2

iTerm2 is an alternative to the legacy terminal in Mac OS. iTerm2 brings some new features such as:

* Split Panes
* Hotkey Window
* Search
* Autocomplete
* Paste history
* Configurability
* and many [more](https://www.iterm2.com/features.html)

Just download iTerm2 from the official [website](https://www.iterm2.com/downloads.html). Additional documentation can be found [here](https://www.iterm2.com/documentation.html).

#### iTerm2 Improvements and Customizations

This [guide](https://medium.com/the-code-review/make-your-terminal-more-colourful-and-productive-with-iterm2-and-zsh-11b91607b98c) shows you how you can improve terminal productivity, and have a bit more customization options.

## Hyper

Another alternative is Hyper, an Electron-based terminal

- Built in HTML/CSS/JS
- Fully extensible
- [Download](https://hyper.is/#installation)
- [Documentation](https://hyper.is/)
- [Awesome Hyper](https://github.com/bnb/awesome-hyper)
