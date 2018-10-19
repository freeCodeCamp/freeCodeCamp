---
title: Creating GUI's in Python3
---

# Creating GUI's in Python 3 

Python provides various options for developing graphical user interfaces (GUIs). Most important are listed below,

* **Tkinter** − Tkinter is the Python interface to the Tk GUI toolkit shipped with Python. We will discuss this library.
* **wxPython** − This is an open-source Python interface for wxWindows. For reference, see [http://wxpython.org](http://wxpython.org)
* **JPython** − JPython is a Python port for Java which gives Python scripts seamless access to Java class libraries on the local machine. For reference, see [http://www.jython.org](http://www.jython.org). 

## Programmming
To create an a GUI application with Tkinter, you have to follow these steps:
1. Import the Tkinter module.
2. Create a GUI application in main window.
3. Add one or more widgets(described later) in the GUI application.
4. Enter the main event loop to display window and to take action against each event triggered by the user.

This could be summed up in a code as follows:

```python
# step 1
import tkinter as tk

# if you are still using python 2 version, then you have write -
# import Tkinter as tk

# step2
top = tk.Tk()

# step 3: code to add widgets will go here...

# step 4
top.mainloop()
```

On execution, this code would create an empty window. 
(if not, make sure that your python and its packages are properly installed)

## Widgets
Tkinter provides various controls, such as buttons, labels and text boxes used in a GUI application. These controls are commonly called widgets.
Some of the commonly used widgets are:
* button
* canvas
* checkbutton
* combobox
* entry
* frame
* label
* labelframe
* listbox
* menu
* menubutton
* message
* notebook
* tk_optionMenu
* panedwindow
* progressbar
* radiobutton
* scale
* scrollbar
* separator
* sizegrip
* spinbox
* text
* treeview

We will discuss few of them with basic examples-

## Examples

### Label

Lets start with the easiest widget among all i.e, label. This widget implements a display box where you can place text or images. The text displayed by this widget can be updated at any time you want.

The following Python script uses Tkinter to create a window with the text "Hello Tkinter" - 

```python
import tkinter

top = tkinter.Tk()
 
w = tkinter.Label(top, text="Hello Tkinter!")
w.pack()

top.mainloop()
```
#### Explanation
This line of code contains Label widget -
```python
w = tkinter.Label(top, text="Hello Tkinter!")
```
The first parameter of the Label call is the name of parent window, in our case "top". So our Label widget is a child of the top widget. The keyword parameter "text" specifies the text to be shown.

The next line to it is the pack method. It tells Tk to fit the size of the window to the given text.

Further, you can even add images in label as follows:
```python
img = tkinter.PhotoImage(file="/path/to/image.format")

image_label = tkinter.Label(top, image=img).pack()
```

Also you can change text in Label dynamically as follows:
```python
label.config(text="Changed text")
```


### Message

The widget can be used to display short text messages. The message widget is similar in its functionality to the Label widget, but it is more flexible in displaying text, e.g. the font can be changed while the Label widget can only display text in a single font. It provides a multiline object, i.e. the text may span more than one line. The text is automatically broken into lines and justified. But it's not possible to have a text in more than one font, i.e. the one message text will be solely of one font. If you need to display text in multiple fonts, we suggest to use a Text widget. 

#### Syntax
```python
w = Message ( master, options, ... ) 
```
#### Parameters
* **master** − This represents the parent window.
* **options** − Here is the list of most commonly used options for this widget. These options can be used as key-value pairs separated by commas.

#### Example
```python
import tkinter

top = tkinter.Tk()

lorem_ipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
msg = tkinter.Message(top, text = lorem_ipsum)
msg.config(bg='lightgreen', font=('times', 24, 'italic'))
msg.pack()

top.mainloop()
```

This script will display a window message widget.

There are more parameters in message widget with whom you can play with to understand more.


### Button

A button is a widget which is designed for the user to interact with application, i.e. if the button is pressed by mouse click some action might be started. They can also contain text and images like labels. The text of a button can span more than one line. 

A Python function or method can be associated with a button. This function or method will be executed, if the button is pressed in some way.

#### Example
```python
import tkinter

def write_slogan():
    print("Tkinter is easy to use!")

top = tkinter.Tk()
frame = tkinter.Frame(top)
frame.pack()

button = tkinter.Button(frame, 
                        text="QUIT", 
                        fg="red",
                        command=quit)
button.pack(side=tkinter.LEFT)
slogan = tkinter.Button(frame,
                        text="Hello",
                        command=write_slogan)
slogan.pack(side=tkinter.LEFT)

root.mainloop()
```

This script defines two buttons: one to quit the application and another one for the action, i.e. printing the text "Tkinter is easy to use!" on the terminal.



## Standard Attributes

Tkinter also provides the following attributes:

* **tk_chooseColor** - pops up a dialog box for the user to select a color.
* **tk_chooseDirectory** - pops up a dialog box for the user to select a directory.
* **tk_dialog** - creates a modal dialog and waits for a response.
* **tk_getOpenFile** - pops up a dialog box for the user to select a file to open.
* **tk_getSaveFile** - pops up a dialog box for the user to select a file to save.
* **tk_messageBox** - pops up a message window and waits for a user response.
* **tk_popup** - posts a popup menu.
* **toplevel** - creates and manipulates toplevel widgets.


## Geometry Management

All Tkinter widgets have access to specific geometry management methods, which have the purpose of organizing widgets throughout the parent widget area. Tkinter exposes the following geometry manager classes: pack, grid, and place.

* **place** - This geometry manager organizes widgets in blocks before placing them in the parent widget.
* **grid** - This geometry manager organizes widgets in a table-like structure in the parent widget.
* **pack** - This geometry manager organizes widgets in blocks before placing them in the parent widget.


## Resources

* [Python interface to Tcl/Tk](https://docs.python.org/3/library/tkinter.html)
