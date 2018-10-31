---
title: Windows Command Prompt
localeTitle: Windows命令提示符
---# 在Windows中使用命令提示符

Windows，MacOS和Linux都有命令行界面。 Windows的默认命令行是命令提示符。命令提示符允许用户在不指向和单击鼠标的情况下使用他们的计算机。命令提示符是黑屏，用户键入命令以使用其计算机。使用鼠标指向和单击可以完成的相同任务也可以使用命令提示符完成。不同之处在于，在命令提示符下可以更快地完成许多任务，例如创建文件夹和删除文件。此外，它允许用户配置他们的计算机并运行他们通过指向和单击无法执行的程序。

## 打开命令提示符

要访问命令提示符，请单击桌面工具栏上的Windows开始菜单（您也可以按键盘上的Windows按钮）并键入`cmd`并按`enter` 。将出现命令提示符，它将显示一些文本，如下所示： \`\`\` C：\\ Users \\用户YourUserName>
```
## Navigating Directories (Moving through folders) 
 `C:\Users\YourUserName` is called your current working directory (directory is another way to say folder). It is like a street address that tells you where you are on your computer. The current working directory can be a guide as you navigate through your computer. On the right of the `>` we can type `cd`, which stands for Change Directory, and the name of a directory that you want to navigate to. In this case we will type `Documents`. Enter `cd Documents` and your current working directory should look like the following: 
```

C：\\ Users \\用户YourUserName \\文件>
```
To go back one directory type and enter `cd..`. Your current working directory should return to this: 
```

C：\\ Users \\用户YourUserName>
```
With the `cd` and `cd ..` commands you can move back and forth through directories. This might seem very basic at first but as you learn more commands the command prompt will become a very useful and efficient tool. 
 
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

你_想_ to\_make _的_ _目录_名的mkdir
```
#### Getting Info on a Command 
```

your\_command /？
```
#### Deleting a File and Contents 
```

目录_的_ RM / s的名称__要__删除 \`\`\`

## 有用的提示：

*   命令`Ipconfig`显示计算机的IP地址
*   如果您键入目录名称的一部分并按`tab`键，命令提示符将自动完成它，如果您反复按`tab`键，它将循环显示以相同字母开头的目录
*   您可以使用其他shell或工具（如git bash或cmder）向命令提示符添加更多命令和功能
*   某些任务要求您以管理员身份运行命令提示符，单击Windows按钮并键入`cmd admin`并按`enter`键
*   如果您知道文件或目录的路径可以键入`cd PATH_TO_YOUR_DIRECTORY`而不是多次更改目录以访问目录或文件
*   当您点击向上箭头键时，将出现您之前输入的命令，如果您反复点击它，它将循环显示您之前输入的所有命令