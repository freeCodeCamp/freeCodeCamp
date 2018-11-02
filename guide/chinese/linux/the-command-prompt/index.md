---
title: The Command Prompt
localeTitle: 命令提示符
---
## 命令提示符

作为最古老的用户界面（UI）之一， _命令提示符_ （aka _shell_ ， _terminal_ ， _console_ ， _tty_ ）已经以多种方式实现。

这导致在现代对话中可以互换使用的几个词实际上具有略微不同的含义。

* * *

> 目录

*   [一个非常非常短的历史](#a-very-very-short-history)
*   [今天](#today)
*   [贝壳](#the-shell)
*   [BASH](#bash)
*   [获得帮助](#getting-help)
*   [提示](#the-prompt)
*   [扎根](#getting-root)
*   [登录](#login)
*   [须藤](#sudo)
*   [苏](#su)
*   [相对和绝对路径](#relative-and-absolute-paths)
*   [相对的](#relative)
*   [绝对](#absolute)
*   [命令选项](#command-options)
*   [链接命令](#chaining-commands)
*   [后台工作](#background-jobs)

* * *

### 一个非常非常短的历史

在19世纪是[电报](https://en.wikipedia.org/wiki/Electrical_telegraph) 。这允许两个人长距离交换编码消息。后来的技术进步导致了[电传打字机](https://en.wikipedia.org/wiki/Teleprinter) （tty），需要接收消息的人被一种打印机取代。

与此同时，像ENIAC这样的早期计算机也使用某种硬件进行编程，如交换机，拨号盘或跳线。随着计算机的发展，需要更好的输入/输出（IO），因此常用的电传打字机被转换为使用。

因为tty是他们自己的大件家具，并因其与其他落地式家具（如控制台电视）的相似性而获得了名称**控制台** 。作为大型机的电子终端，这些设备也被称为**终端** 。

TTY打印机最终被阴极射线管（CRT）屏幕取代，这些屏幕在LCD和等离子体可用之前也用于电视。有趣的是，现代Linux计算机仍然可以使用tty机器进行控制！

> 点击下面的图片转到简短的Youtube视频。

[![](https://i.ytimg.com/vi/-Ul-f3hPJQM/hqdefault.jpg)](https://youtu.be/-Ul-f3hPJQM)

* * *

### 今天

今天，Linux和Unix用户仍然使用相同的术语，但略有不同。可以使用实时和虚拟终端，可以使用Alt + Ctrl + \[F1-F12\]访问虚拟终端。

在图形用户环境（GUI）中，用户可以使用**终端仿真器**访问命令提示符， **终端仿真器**提供tty的功能，但在窗口内。 Linux用户可以使用许多终端仿真器，例如**xterm** ， **kterm**和**rxvt** 。

可用的将取决于您使用的Linux发行版（简称发行版）及其默认值。检查您的包管理器以安装其他人。 Windows用户可以使用**PuTTY**或其他实用程序连接到Linux系统。

### 贝壳

_Shell_是解释命令的程序。

它们中有许多，例如[**B** ourne **A** gain **SH** ell](https://www.gnu.org/software/bash/) （BASH）， [C Shell](https://docs.freebsd.org/44doc/usd/04.csh/paper.html) （csh / tcsh）和[Z SHell](http://zsh.sourceforge.net/) （zsh）。

#### BASH

Linux中最常见的默认shell是BASH，但每个用户可以临时或永久切换到任何其他可用的shell。 shell是完全可编写脚本的，这意味着编程概念可以与shell和系统实用程序结合使用，以创建更复杂的功能。

在命令提示符下输入的命令可以内置到shell中，例如**cd** ， **exit**或**export** 。

它们也可以来自外部程序，对于大多数Linux发行版而言，它们都是由[Gnu工具](https://www.gnu.org/software/coreutils/coreutils.html)提供的。

请参阅下面的最常见命令。

|命令|用法| | -------- | ----------------------------------------- | | `cd` |更改当前目录| | `ls` |列出当前目录中的文件| | `mv` |移动文件和目录| | `man` |打开命令文档| | `mkdir` |制作目录| | `rmdir` |删除导演| | `touch` |创建一个空文件| | `rm` |删除文件| | `ln` |创建文件和目录的链接| | `chown` |更改文件和目录的所有权| | `chmod` |更改权限| | `find` |找到文件| | `cat` |将文件写入标准输出| | `less`允许滚动标准输入| | `grep` |在纯文本中搜索匹配项| | `diff` |显示文件之间的差异| | `passwd` |更改密码|

#### 获得帮助

可以在一个或多个位置为命令提供即时帮助。

在命令后添加`--help` 。

这将打印命令的使用信息。

它的输出类似于`man`命令，但是在你想要手册的命令之前使用`man` 。

`info`命令是第三个帮助选项，并且像`man`一样使用。

```bash
ls --help 
 
 man ls 
 
 info ls 
```

### 提示

提示，这是文本的壳光标左侧的位，可以改变，以显示你当前的状态，如哪个目录，你目前在哪个用户您的登录身份，您的计算机的名字， _什么你拥有的特权_ 。

最后一点很重要。通常是提示中的最后一个字符，您将看到`$` ，表示正常的用户权限。

如果您具有属于系统管理员的**root**权限，则通常会将`#`视为最后一个字符。浏览论坛并获得在线帮助时，您必须键入的命令通常会显示此字符。

**你不必输入它！**

例如：

```bash
$ ls -l 
```

意味着您在正常提示符下键入`ls -l` 。

```bash
# apt-get install node 
```

表示您使用管理员权限键入`apt-get install node` 。如何提升权限取决于您的Linux发行版。

### 扎根

#### 登录

以root身份登录是一个_非常糟糕的主意_ 。这就是为什么某些版本的Linux会禁用用户以这种方式记录的能力。鼓励那些用户在他们自己的用户帐户中使用下一个方法`sudo` 。

如果您必须使用根控制台，请注意其功能。您不会被警告或被要求确认大多数任务，即使简单的拼写错误意味着删除重要的事情。

#### 须藤

在命令之前添加“sudo”以切换到**S** uper **U** ser和**DO** （SUDO）。这是Ubuntu及其衍生产品配置为允许管理员访问的方式，并且是基于每个命令给出的。

您没有获得root shell，并且您键入的下一个命令将没有提升权限，除非您再次使用`sudo` 。

```bash
sudo apt-get update 
```

除了某些发行版上的第一个创建用户之外，必须将用户添加到特殊列表（在`/etc/sudoers` ）才能使用sudo。

这是通过`visudo`命令完成的。

您永远不应该使用常规文本编辑器编辑`sudoers`文件！

`visudo`将确保您不会将自己锁定在自己的系统之外。

#### 苏

`su` ，与`sudo`一样，允许您更改为其他用户，但默认情况下，您将收到另一个提示，因为您切换到的用户。

在它本身， `su`会切换到根提示符，但是使用当前用户的环境变量，例如主文件夹的`$HOME`和系统路径的`$PATH` 。

这可能会导致意外结果，如果要使用`su`切换到其他用户，请在命令后添加连字符：

```bash
su - 
```

这将完全切换到根提示符。

可以在命令中添加用户名以切换到该用户，但需要该用户的密码。

`sudo`可以与`su`结合使用，以允许管理员切换到任何用户。

```bash
myUser@linux $ su - otherUsername 
 Password: (typed my password) 
 su: Authentication failure 
 
 myUser@linux $ sudo su - otherUsername 
 Password: (typed my password) 
 otherUsername@Linux $ 
```

### 相对和绝对路径

在文件上使用命令（例如复制或删除）时，可以使用以下两种方法之一来引用该文件。

#### 相对的

与当前目录相关的文件位置。

shell中有两个相对路径运算符`.`和`..`

第一， `.`表示当前目录，因此如果file.txt在当前目录中，则`cat file.txt`和`cat ./file.txt`是相同的。

另一个是`..` ，表示树中的一个目录。

因此，如果您在`/home/user/projects/project-a`并发出命令`cd ..`您将更改为`/home/user/projects` 。

如果项目目录中有名为`project-a` ， `project-b` ， `project-c` `project-a`子目录，并且您在`project-a`目录中，则可以使用`cd ../project-b`切换到`project-b` 。

shell中还有一个名为`$HOME`的`environment variable` ，它指向您的主目录。

您可以使用波形符`~`在BASH中使用它。

当你按Enter键时，shell会替换你的代字号，例如，你可以使用`cd ~`更改为你自己的主文件夹。

#### 绝对

文件位置是文件系统根目录的完整路径，并且始终具有前导斜杠。

例如， `cd /home/quincy/Desktop`将转到Quincy的桌面目录，无论当前路径或登录用户如何。

### 命令选项

大多数shell命令遵循相同的语法，即**命令选项文件** 。

```bash
ls -l *.txt 
```

哪里

*   `ls`给出了一个文件和目录列表，
*   `-l`将`ls`的输出更改为长列表，
*   和`*.txt`将列表限制为以`.txt`结尾的文件。

每个命令都有不同的选项，并且可以一起列出多个选项，如下一节中的tar示例`tar -cvf` 。

各个命令可以在一个链中连接在一起，其中一个命令的输出成为另一个命令的输入。

这是通过`|`完成的字符，通常称为**管道**或**条形** 。这不是大写字母i或小写字母L ，也不是数字1 。在美国键盘上，它位于Enter附近的其中一个键上。

在以下示例中，我将使用2个命令。

第一个， `cat` ，是连接的缩写，可以用来将一个文件的内容放在另一个文件的末尾（连接！）。当仅将其与一个文件一起使用时，它会将内容写入终端。

第二个命令`grep`是一个程序，它输出基于某些输入找到的文本和搜索模式。搜索模式可以是简单文本，也可以是正则表达式（正则表达式），用于更高级的搜索。

```bash
cat index.html | grep img 
```

有很多方法可以做到这一点，但这将输出index.html中包含`img`到终端的每一行。此示例仅使用一个`|` ，但你不仅限于此。

### 链接命令

虽然单个＆符号运算符`&`是BASH中的作业控制运算符（下一节），但双＆符号具有另一个含义。它是逻辑**AND** ，并且您在两个命令之间使用它，以便第二个命令仅在第一个命令成功退出时运行（没有错误）。

以下示例是有多少Debian和Ubuntu用户更新其软件列表，然后运行系统升级。

```bash
sudo apt-get update && sudo apt-get dist-upgrade 
```

另一种选择是双管`||` ，这意味着逻辑**OR** 。只有在第一次退出并出现错误时，才能使用它。

以下将从项目目录中的文件在用户桌面上创建名为`project.tar`的存档，如果失败，则回显消息。

```bash
tar -cvf /home/user/Desktop/project.tar /home/user/project/* || echo "archive failed" 
```

### 后台工作

在终端中运行命令时，终端忙，直到命令完成，并且不能运行其他命令。 Linux中有一个作业控制系统，允许您暂停运行命令，在后台恢复挂起的命令，并在前台恢复挂起的命令。

这对于长时间运行的脚本很有用，或者当您需要将某些内容推送到后台时，这样终端就可以用于其他事情。

o暂停在终端中运行的程序使用组合键Ctrl + Z.

您将返回到正常提示，命令似乎已退出。它没有，但只是被暂停。通过使用`jobs`命令列出所有当前跟踪的作业，它仍然可以在作业列表中看到。我做`man ls`拿到手册页，然后暂停它。

当我输入`jobs`我得到以下输出：

```bash
$ jobs 
 
 [1]  + suspended  man ls 
```

从这里开始，我可以通过输入`bg %1`让它在后台恢复，其中`1`是方括号中找到的作业号。

我可以通过输入`fg %1`将其恢复到前台。