---
title: Creating GUI's in Python3
---

# Creating GUI's in Python 3 
<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
 ### GUI creation methods
 
 [Tkinter](https://docs.python.org/3/library/tk.html)
 
 [wxPython](https://wxpython.org/)
 
 [wxWidgets](https://www.wxwidgets.org/)
 
 [pyQt](https://riverbankcomputing.com/software/pyqt/intro)
 
 [GTK+](https://wiki.gnome.org/Projects/PyGObject)
 
 [pyOpenGL](http://pyopengl.sourceforge.net/)
 
 ### Tkinter
 Tkinter adds the use of GUIs through the creation of a root window, and a `mainloop()` method to refresh and update the window.
 
 Example:
 ```python
import tkinter as tk
 root_window = tk.Tk()
root_window.title("Example Window")
root_window.geometry("1000x800")
root_kwindow.resizable(False, False)
 root_window.mainloop()
```
 There were a few new and probably unfamilar methods in the above code, explained below:
 
 - `root_window = tk.Tk()` initializes the main GUI window
- `root_window.title("Example Window")` sets the menubar title of the window
- `root_window.geometry("1000x800")` sets the initial dimensions of the window, subject to user's changes
- `root_kwindow.resizable(False, False)` prevents the user from resizing the window. First parameter is for horizontal changes, second for vertical changes to the dimensions.

 Now, to add a widget to the window (for example, a button), use the format:
 ```python
def printHello():
  print("hello!")
 button1 = tk.Button(root_window, text = "example_text", command = "printHello")
button1.pack()
```

 The button creation method's command parameter only takes a function value. To place the widget on the screen and make it visible to the user, use one of these three methods:
 - `widget.pack()` packs the widget into any available space in the window
- `widget.grid(row = 1, column = 1)` places the widget according to row, column format
- `widget.place(x = 400, y = 600)` places the widget according to x and y coordinates

 ### References
 [Tkinter Wiki](https://wiki.python.org/moin/TkInter)
 
 [Tkinter Docs](https://docs.python.org/3/library/tkinter.html)
 
 [Effbot Tutorial](http://effbot.org/tkinterbook/tkinter-index.htm)
 
 [Step-by-Step Tutorial](https://www.tutorialspoint.com/python/python_gui_programming.htm)
 
 [GeeksforGeeks](https://www.geeksforgeeks.org/python-gui-tkinter/)
