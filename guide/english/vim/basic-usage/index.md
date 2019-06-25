---
title: Basic Usage
---
## About Vim

Vim is a text editor intended to be used in a CLI (command line interface) environment. It is highly configurable and built with efficiency in mind, without the need of a mouse or a graphical interface. It was built to be an improved version of the UNIX editor 'VI', or VI improved. That being said, VIM also has a GUI (Graphical User Interface) version named GVIM that shares the same core functionality as VIM but allows users additional feature such as additional menu and toolbars.

## VIM Basic Usage
  
### Open file
- Run `vim` or `vi` from the command line and specify the filename to work with.

### Insert mode
- Once the file is opened and displayed, press the key 'I' to go into INSERT mode to edit the file. This can be verified with the text "Insert Mode" at the bottom of your screen. From here you can make any changes you want to the text of your file.

### Save file
- `:w`

### Save and exit
- `:x` 
- `ZZ`
- `:wq`

### Exit file if no changes were made
- `:q`

### Exit file and undo any changes made
- `:q!`

### Display line numbers
- `:set nu`

### Hide line numbers
- `:set nonu`

### Display indentation
- `:set list`

### Hide indentation
- `:set nolist`

### Add syntax color based on the programming language used
- `:syntax on`
