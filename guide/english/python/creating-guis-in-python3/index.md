---
title: Creating GUI's in Python3
---

# Creating GUI's in Python 3 

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/java/collections/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
[Tkinter](https://docs.python.org/3/library/tk.html) is a great way to create GUI's in python

---
title: Tkinter basics
---
Tkinter is the Python interface for Tk. Tkinter is an acronym for "Tk interface". 

Tk was developed as a GUI extension for the Tcl scripting language by John Ousterhout. The first release was in 1991. Tk proved as extremely successful in the 1990's, because it is easier to learn and to use than other toolkits. So it is no wonder that many programmers wanted to use Tk independently of Tcl. That's why bindings for lots of other programming languages have been developed, including Perl, Ada (called TASH), Python (called Tkinter), Ruby, and Common Lisp. Tkinter’s chief virtues are that it is fast, and that it usually comes bundled with Python 
Note: in some Linux distributions, like Ubuntu and Debian, the tkinter module is packaged separately to the rest of Python, and must be installed separately.

Tkinter provides us with a variety of common GUI elements which we can use to build our interface – such as buttons, menus and various kinds of entry fields and display areas. We call these elements widgets. Each widget will have a parent widget, all the way up to the root window of our application. For example, a button or a text field needs to be inside some kind of containing window.
The widget classes provide us with a lot of default functionality. They have methods for configuring the GUI’s appearance – for example, arranging the elements according to some kind of layout – and for handling various kinds of user-driven events.

Tk provides the following widgets:

button
canvas
checkbutton
combobox
entry
frame
label
labelframe
listbox
menu
menubutton
message
notebook
tk_optionMenu
panedwindow
progressbar
radiobutton
scale
scrollbar
separator
sizegrip
spinbox
text
treeview
It provides the following top-level windows:
tk_chooseColor - pops up a dialog box for the user to select a color.
tk_chooseDirectory - pops up a dialog box for the user to select a directory.
tk_dialog - creates a modal dialog and waits for a response.
tk_getOpenFile - pops up a dialog box for the user to select a file to open.
tk_getSaveFile - pops up a dialog box for the user to select a file to save.
tk_messageBox - pops up a message window and waits for a user response.
tk_popup - posts a popup menu.
toplevel - creates and manipulates toplevel widgets.
Tk also provides three geometry managers:
place - which positions widgets at absolute locations
grid - which arranges widgets in a grid
pack - which packs widgets into a cavity
