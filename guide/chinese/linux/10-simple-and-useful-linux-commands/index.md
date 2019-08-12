---
title: 10 Simple and Useful Linux Commands
localeTitle: 10个简单实用的Linux命令
---
# 10个简单实用的Linux命令

此处列出的命令是基本的，可以帮助您快速入门，但它们也很强大的实用性将为您在Linux平台上的知识积累起到巨大作用。

1.  `echo`：这个命令之后一般会跟随文本。它指示系统将您提供的文本发送到某个地方再反馈到屏幕。示例： `echo "hello!"`
2.  `cat`： 这个命令指示系统显示您想要其文本文件的内容，格式是`cat myfile` 。
3.  `find`： 这个命令跟它的字面意思一样，且Linux系统的寻找程式十分迅速。您可以使用它按路径，大小，日期，所有者和一堆其他有用的过滤条件来定位文件。示例： `find . -type f -mtime -1h # List files in this directory modified in the past hour` 。
4.  `date`： 这个命令可以快速显示和修改系统的日期和时间。如果想用这个命令修改时间，我们需要进入管理者模式，即`sudo date %l:%m:%p`。时间显示的示例是 `date "+It's %l:%m:%p on %A"` 。在脚本中，我们可以使用它根据当前日期命名文件。
5.  `ls`：这个命令将显示我们现在所处在的系统文件夹中的全部子文件。将`ls`与一些有用的命令组合以按日期和大小显示和排序目录内容。它还为您提供了许多格式化输出的选项。
6.  `pwd`：这个命令相当于在问“我在哪里？”，然后系统将显示我们现在所处在的系统的文件地址。Linux本身是无情的，所以在您决定删除某些文件前最好先看清楚地址。
7.  `mail`： Linux的邮件程序并不好看，但它确实很有用。这个命令可以让您可以在一个命令中创建消息并添加文本，收件人和附件。示例： `echo "We're having a great time." | mail -s "Wish you were here!" -A postcard.png -t mom@example.com`
8.  `cut`：您可以用它分隔字符串或者过滤掉某些字段。示例： `echo "this, that, and the other" | cut -d, -f2 # "that"`
9.  `grep`：如果您需要查找包含特定字符串的文本行，请使用grep。示例： `grep 'root' /etc/passwd # root:x:0:0:root:/root:/bin/bash`
10.  `sed`：我们可以使用sed查找并更改一段文本中的子字符串。示例： `echo "this, that, and the other" | sed 's/that/those/' # "this, those, and the other"`
11.  `shutdown`: 这个命令能快键地关闭系统和电源。示例： `shutdown -h now`，立即关闭系统。 `shutdown -h +5`，五分钟后关闭系统。

请在脚本和命令行中练习使用这些基本但强大的命令。如果想了解每个命令中更多的信息或用法，可以去Linux的手册页里看看。

* * *

此外，用于系统管理员的重要命令如下：

1.  `uptime`： 在Linux uptime命令中显示系统运行的时间和当前登录的用户数，并且还显示1,5和15分钟间隔的平均负载。
    
2.  `w`： 它将显示当前登录的用户及其进程，并显示负载平均值。还显示登录名，tty名称，远程主机，登录时间，空闲时间，JCPU，PCPU，命令和进程。
    
3.  `users`：命令系统显示当前登录的用户。除了帮助和版本之外，此命令没有其他参数。
    
4.  `who`：who命令只返回用户名，日期，时间和主机信息。 who命令与w命令类似， 但会打印用户正在做什么，这一点与w命令不同。
    
5.  `whoami`： 这个命令会打印当前登录的用户的名称。您还可以使用“who is i”命令来显示当前用户。如果使用sudo “whoami”命令以root身份登录，则以root身份返回当前用户。
    
6.  `crontab`： 使用crontab命令和-l选项列出当前用户的调度作业。
    
7.  `less`：less命令允许我们快速查看文件。您可以上下翻页并按“q”退出较少的窗口。
    
8.  `more`： more命令允许快速查看文件并以百分比显示详细信息。您可以上下翻页并按“q”退出更多窗口。
    
9.  `cp`： 这个命令后一般跟随一个表示目标地址的文本。其将文件从源复制到目标，并保留相同的模式。
    

以上是adiminstrator经常使用的命令列表。 这不是一个完整的列表，但这里列出的各个命令在现实使用中都会派上大用场。
