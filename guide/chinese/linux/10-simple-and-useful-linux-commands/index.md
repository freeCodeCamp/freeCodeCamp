---
title: 10 Simple and Useful Linux Commands
localeTitle: 10个简单实用的Linux命令
---
# 10个简单实用的Linux命令

此处列出的命令是基本的，可以帮助您快速入门。但它们也很强大，随着Linux专业知识的扩展，它们将继续发挥作用。

1.  `echo`这将获取您提供的文本并将其发送到某个地方 - 返回到屏幕，文件或其他命令。示例： `echo "hello!"`
2.  `cat`要显示文本文件的内容，只需键入`cat myfile` 。
3.  `find`它做了它所说的，它擅长它。使用它按路径，大小，日期，所有者和一堆其他有用的过滤器来定位文件。示例： `find . -type f -mtime -1h # List files in this directory modified in the past hour` 。
4.  `date`只要您想知道它的时间，就输入日期。示例： `date "+It's %l:%m%p on %A"` 。在脚本中使用它根据当前日期命名文件。
5.  `ls`这是什么目录中？将`ls`与一些有用的标志组合以按日期和大小显示和排序目录内容。它还为您提供了许多格式化输出的选项。
6.  `pwd`我在哪里？ Linux可能是无情的，特别是当你删除某些东西时。在发出命令之前确保知道。
7.  `mail` Linux的邮件程序不好看，但它确实很有帮助。您可以在一个命令中创建消息并添加文本，收件人和附件。示例： `echo "We're having a great time." | mail -s "Wish you were here!" -A postcard.png -t mom@example.com`
8.  `cut`当你与它分隔字符串，用`cut`过滤掉某些字段。示例： `echo "this, that, and the other" | cut -d, -f2 # "that"`
9.  `grep`要查找包含特定字符串的文本行，请使用grep。示例： `grep 'root' /etc/passwd # root:x:0:0:root:/root:/bin/bash`
10.  `sed`使用sed查找和更改一段文本中的子字符串。示例： `echo "this, that, and the other" | sed 's/that/those/' # "this, those, and the other"`
11.  `shutdown`使用关闭系统并关闭电源。示例： `shutdown -h now`立即关闭系统。 `shutdown -h +5`五分钟后关闭系统。

在脚本和命令行中使用这些命令。它们都是非常强大的命令，Linux的手册页有很多关于每个命令的信息。

* * *

此外，用于系统管理员的重要命令如下：

1.  `uptime`命令 在Linux uptime命令中显示系统运行的时间和当前登录的用户数，并且还显示1,5和15分钟间隔的平均负载。
    
2.  `w`命令 它将显示当前登录的用户及其进程，并显示负载平均值。还显示登录名，tty名称，远程主机，登录时间，空闲时间，JCPU，PCPU，命令和进程。
    
3.  `users`命令 用户命令显示当前登录的用户。除了帮助和版本之外，此命令没有其他参数。
    
4.  `who`命令 who命令只返回用户名，日期，时间和主机信息。 who命令与w命令类似。与不打印用户正在做什么的w命令不同。让我们说明并看看who和w命令之间的区别。
    
5.  `whoami`司令部 whoami命令打印当前用户的名称。您还可以使用“who is i”命令来显示当前用户。如果使用sudo命令“whoami”命令以root身份登录，则以root身份返回当前用户。如果您想知道登录的确切用户，请使用“我是谁”命令。
    
6.  `ls`命令 ls命令以人类可读的格式显示文件列表。
    
7.  `crontab`命令 使用crontab命令和-l选项列出当前用户的调度作业。
    
8.  `less`命令 less命令允许快速查看文件。您可以上下翻页。按“q”退出较少的窗口。
    
9.  `more`命令 more命令允许快速查看文件并以百分比显示详细信息。您可以上下翻页。按“q”退出更多窗口。
    
10.  `cp`命令 将文件从源复制到目标，保留相同的模式。
    

以下是adiminstrator经常使用的命令列表。 这不是一个完整的，但它是一个紧凑的命令列表，可在需要时引用。