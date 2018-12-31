---
title: Mac OS Terminal
---


# Using the Terminal in Mac OS

Most of the time users interact through a Graphical User Interface to interact with the computer. You use the mouse to point and click to open, move, or create new files or open applications. But, you can also use the Terminal Application to interact with your machine through written commands. When you use the terminal, it allows you to dig deeper and customize in a way not possible through the GUI. 

### Opening the Terminal and Navigating Directories
Your terminal exists in the Applications directory. Open your Terminal app. You should see a prompt in the terminal window. it shoudl have the computer's name (ABC's Macbook), followed by the User name (ABC), and then a '$.' If you are in the root directory, the last character will be a '#.'

To see what directory you are working in, use ```pwd``` which stands for "print working directory"
Directory is another word for folder. 

If you want to list the directory's contents, use  ```ls```

To change directories, use ```cd <directory_path>``` which stands for change directory and replace the angle brackets with the appropriate path name. 
If you are currently in `Documents` and want to move into the directory/folder `hello_world` which is inside `Documents` use `cd hello_world`

Here is a list of common commands:

Command | Usage
------------ | -------------
`pwd` | Print Working Directory (Where Am I? )
`ls` | List contents of current directory
`mkdir <directoryname>` | Create a new directory
`touch <filename>` | Create a new file
`cp <filetobecopied> <nameforcopiedfile>` | Copy a file 
`rm <filename>` | Remove a file 
`rm -rf <directoryname>` | Forcibly remove a directory 

### Usage Examples

Some of the aforementioned commands aren't clear without examples. Below are a few usage examples to help provide you with some context. 

#### Making a Directory

```mkdir #YOUR-NEW-FOLDER-NAME-HERE```

#### Making a File 

``` touch YOUR-FILE-NAME.JS```

You can make a file with any extension you choose. As long as it is in an a format accepted by the folder or machine.

#### Copying a File 

Use the following syntax to copy a file from the terminal:

**cp _source_ _destination_**

For example, if we have a file, _'test.txt'_ that is stored in our _/Desktop_ directory and we want to copy it to the _/Documents_ folder, our command would look like this: 

    cp ~/Desktop/test.txt ~/Documents

#### Deleting a File 

Use the following syntax to delete a file 

**rm _#PATH_TO_FILE_**

#### Detect which process is using the port you want to use
``` lsof -i :<PORT> ```

#### Terminate the process which uses the port you want to use
``` kill <PID> ```


#### Previewing file
If you would like to preview a file, type the command `cat <name of document>` and you would be able to preview a text document through the terminal.


## iTerm2

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
