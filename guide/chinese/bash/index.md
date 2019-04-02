---
title: Bash
localeTitle: 巴什
---
## 什么是Bash？

Bash （Bourne Again SHell的缩写）是一个Unix shell和一个命令语言解释器。 shell只是一个执行命令的宏处理器。它是大多数Linux发行版中默认打包使用最广泛的shell，也是Korn shell（ksh）和C shell（csh）的后续版本。

Linux操作系统可以通过命令行完成很多事情。一些例子是…

*   编辑文件
*   调整操作系统的音量
*   从互联网上获取网页
*   自动化您每天所做的工作

您可以[在此处](https://www.gnu.org/software/bash/)通过[GNU文档](https://www.gnu.org/software/bash/manual/html_node/index.html#SEC_Contents)和[tldp指南](http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO.html#toc10)阅读有关bash的更多信息。

## 在命令行上使用bash（Linux，OS X）

您可以通过打开终端在大多数Linux和OS X操作系统上开始使用bash。让我们考虑一个简单的hello world示例。打开你的终端，并写下以下行（$符号后的所有内容）：
```
zach@marigold:~$ echo "Hello world!" 
 Hello world! 
```

如您所见，我们使用echo命令打印字符串“Hello world！”。到终点站。

## 编写一个bash脚本

您还可以将所有bash命令放入.sh文件中，然后从命令行运行它们。假设您有一个包含以下内容的bash脚本：
```
#!/bin/bash 
 echo "Hello world!" 
```

值得注意的是，脚本的第一行以`#!`开头`#!` 。这是一个特殊的指令，Unix以不同的方式对待。

#### 为什么我们在脚本文件的开头使用＃！/ bin / bash？

这是因为让交互式shell知道为后面的程序运行什么样的解释器是一种惯例。第一行告诉Unix该文件将由/ bin / bash执行。这是几乎每个Unix系统上Bourne shell的标准位置。添加＃！/ bin / bash作为脚本的第一行，告诉操作系统调用指定的shell来执行脚本中的命令。 `#!`通常被称为“哈希砰”，“嘻嘻”或“沙梆”。 虽然只有在将脚本作为可执行文件运行时才会执行。例如，当您键入`./scriptname.extension` ，它将查看顶行以查找解释器，而将脚本作为`bash scriptname.sh`运行时，将忽略第一行。

然后你可以像这样运行脚本： 对于make file executable，你应该在sudo chmod + x“filename”下调用这个命令。
```
zach@marigold:~$ ./myBashScript.sh 
 Hello world! 
```

该脚本只有两行。第一个指示用于运行文件的解释器（在本例中为bash）。第二行是我们想要使用的命令，echo，然后是我们想要打印的“Hello World”。

有时脚本不会被执行，上面的命令将返回错误。这是由于文件上设置的权限。为了避免这种用途：
```
zach@marigold:~$ chmod u+x myBashScript.sh 
```

\` 然后执行脚本。

### 更多信息：

*   维基百科：https://en.wikipedia.org/wiki/Bash_(Unix_shell）
*   tldp.org Bash指南：http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO.html#toc2
*   gnu.org Bash手册：https://www.gnu.org/software/bash/manual/html_node/index.html#SEC_内容
*   Shell脚本教程入门：https://www.shellscript.sh/
