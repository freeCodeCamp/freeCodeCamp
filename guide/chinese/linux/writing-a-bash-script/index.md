---
title: Writing a Bash Script
localeTitle: 编写Bash脚本
---
# 编写Bash脚本

通过在Linux命令行上键入命令，您可以向服务器提供指令以完成一些简单的任务。如地狱 脚本是一种将一系列指令放在一起以使其更容易的方法。 Shell脚本变得更加强大 你可以添加`if`和`while`类的逻辑来自动控制它们在环境变化时的行为方式。

## 什么是Bash？

Bash是命令行解释器的名称，该程序可以理解您在命令中输入的Linux命令 提示，或在你的脚本中。

## 脚本中有什么？

脚本只是一个文件。一个基本脚本由一个介绍性的行组成，它告诉服务器它的构成，以及一个 或更多要执行的指令。这是一个例子：
```
#!/bin/bash 
 echo "Hi. I'm your new favorite bash script." 
```

第一行有特殊含义，我们将在下面讨论。第二行只是一个Linux命令，你可以输入一个 在命令行上。

## 什么是评论？

注释是您添加到脚本中的文本，您希望bash忽略这些文本。评论以井号开头，对于有用 注释您的代码，以便您和其他用户可以理解它。要添加注释，请键入`#`字符，后跟任何文本 这对你很有帮助。 Bash会忽略`#`及其后的所有内容。

**注意：**脚本的第一行不是注释。这条线总是第一个，始终以`#!`开头`#!`而且很特别 意思是打击。

这是以前的剧本，评论说：
```
#!/bin/bash # Designates the path to the bash program. Must start with '#!' (but isn't a comment). 
 echo "Hi. I'm your new favorite bash script." # 'echo' is a program that sends a string to the screen. 
```

## 执行脚本

您可以打开文本编辑器，粘贴该示例代码并保存文件，并且您有一个脚本。脚本通常是 命名以“.sh”结尾，因此您可以将该代码保存为myscript.sh。

在我们做两件事之前，脚本不会执行：

**首先，让它可执行。** （我们只需要这样做一次。） Linux完全依赖于文件权限。他们确定了很多关于服务器行为的方法。有很多要了解的 权限，但是现在我们只需要知道这一点：在给自己执行权限之前，不能运行脚本。至 这样做，输入：

`chmod +x my script.sh`

**第二，运行它。**我们从命令行执行脚本就像任何其他命令一样，如`ls`或`date` 。剧本 name是命令，当你调用它时，你需要在它前面加一个'./'：

`./myscript.sh # Outputs "Hi. I'm your new favorite bash script." (This part is a comment!)`

## 条件语句

有时您希望脚本只有在其他情况属实的情况下才能执行某些操作。例如，仅在值为的情况下打印消息 低于一定限度。以下是使用`if`执行此操作的示例：
```
#!/bin/bash 
 
 count=1 # Create a variable named count and set it to 1 
 
 if [[ $count -lt 11 ]]; then # This is an if block (or conditional). Test to see if $count is 10 or less. If it is, execute the instructions inside the block. 
    echo "$count is 10 or less" # This will print, because count = 1. 
 fi # Every if ends with fi 
```

类似地，我们可以安排脚本，使其仅在某些事情成立时才执行指令。我们将更改代码 count变量的值更改：
```
#!/bin/bash 
 
 count=1 # Create a variable named count and set it to 1 
 
 while [[ $count -lt 11 ]]; do # This is an if block (or conditional). Test to see if $count is 10 or less. If it is, execute the instructions inside the block. 
    echo "$count is 10 or less" # This will print as long as count <= 10. 
    count=$((count+1)) # Increment count 
 done # Every while ends with done 
```

这个版本的myscript.sh的输出将如下所示：
```
"1 is 10 or less" 
 "2 is 10 or less" 
 "3 is 10 or less" 
 "4 is 10 or less" 
 "5 is 10 or less" 
 "6 is 10 or less" 
 "7 is 10 or less" 
 "8 is 10 or less" 
 "9 is 10 or less" 
 "10 is 10 or less" 
```

## 真实世界的脚本

这些例子并不十分有用，但原则是。使用`while` ， `if`和任何可能以其他方式键入的命令 手动，您可以创建执行有价值工作的脚本。