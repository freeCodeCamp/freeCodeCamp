---
title: Visual Studio Code C++ Instructions
---
# Visual Studio Code C++ Instructions

<a href='https://github.com/Microsoft/vscode' target='_blank' rel='nofollow'>![logo](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Visual_Studio_Code_1.18_icon.svg/64px-Visual_Studio_Code_1.18_icon.svg.png "VS Code logo")</a>

Build tasks are project specific. To create a new project, open a directory in Visual Studio Code.

Following the instructions here, press Ctrl + Shift + P, type Configure Tasks, select it and press Enter.

The tasks.json file will be opened. Paste the following build script into the file, and save it:

```
{
    "version": "2.0.0",
    "tasks": [
        {
            "label": "Build",
            "type": "shell",
            "command": "g++",
            "args": [
                "-g",
                "main.cpp", "rectangle.cpp",
            ],
            "group": {
                "kind": "build",
                "isDefault": true
            }
        }
    ]
}
```

Now go to menu File → Preferences → Keyboard Shortcuts, and add the following key binding for the build task:

```
// Place your key bindings in this file to overwrite the defaults
[
    { "key": "f8",          "command": "workbench.action.tasks.build" }
]
```
Now when you press F8 the Makefile will be executed, and errors will be underlined in the editor.
