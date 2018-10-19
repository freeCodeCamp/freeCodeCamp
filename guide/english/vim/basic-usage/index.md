---
title: VIM Editor
---
## VIM Basic Usage
  
### Open File
- Run vim or vi from the command line and specify the filename to work with.

### Insert Mode
- Once the file is opened and displayed, press the key 'I' to go into INSERT mode to edit the file. This can be verified with the text "Insert Mode" at the bottom of your screen. From here you can make any changes you want to the text of your file.

### Save File
- :w

### Save and Exit
- :x 
- SHIFT ZZ
- :wq

### Exit file if no changes made
- :q

### Exit file and undo any changes made
- :q!

### Display line numbers
- :set nu

### Not to show the line numbers
- :set nonu

### Display the indentation formats
- :set list

### Not to show the indentation formats
- :set nolist

### Add syntax color based on prog language used
- :syntax on

## About Vim

Vim is a text editor intended to be used in a CLI (command line interface) environment. It is highly configurable and built with efficiency in mind, without the need of a mouse or a graphical interface. It was built to be an improved version of the UNIX editor 'VI', or VI improved. That being said, VIM also has a GUI (Graphical User Interface) version named GVIM that shares the same core functionality as VIM but allows users additional feature such as additional menu and tool bars.
