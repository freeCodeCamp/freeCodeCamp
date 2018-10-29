---
title: Using the Find Command
localeTitle: 使用查找命令
---
# 使用查找命令

Linux find命令是一个功能强大的工具，可帮助您找到服务器上的文件和目录。通过一些练习，您可以根据名称，类型，大小或日期（创建或上次更新时）轻松跟踪事物。

将find视为您渴望的帮手：

你：“我在服务器上找东西。”

发现：“我可以帮忙！你能告诉我什么吗？”

您：“这是一个大于2GB的文件，位于我的主目录下，在过去48小时内更新。”

发现：“多田！”

查找是一个程序，所以你必须告诉它`find ~ -type f -size +2G` 。

以下是使用find的一些示例命令：

*   `find ~ -type d # Show me all the subdirectories inside my home directory`
*   `find / -type f -name 'todo.txt' # Show me files named 'todo.txt' anywhere under the root directory (ie anywhere)`

第一个参数总是命名我们将要查看的目录。在上面的示例中，这些是〜（当前用户的主目录）和/（文件系统的根目录）。

其他参数是可选的，可以以您认为有用的任何方式组合：

*   type参数允许您仅限制搜索文件（f），仅限目录（d）或符号链接（l）。如果省略type参数，则将搜索所有这些类型。
*   name参数允许您通过名称指定要查找的内容，使用文字字符串（'filename.txt'）或使用通配符（'file？。\*'）。

`man find`会显示更多参数，值得回顾。查找可以按名称，用户，创建日期，大小等查找文件。下次你在找东西时，找到它！