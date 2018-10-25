---
title: Automating Tasks
localeTitle: 自动化任务
---
### 自动化任务或任务计划

Linux的一项功能专门用于Web服务器，称为CRON 我们知道任何Web服务器最引人注目的功能之一就是它始终如一 开机并始终连接到互联网。这意味着我们可以指导 我们的服务器自动执行任务，无需我们输入命令 变成一个壳。执行_其他程序_最常用的_程序之一_ 常规频率称为`cron` 。我们来看看如何使用 `cron`安排一个程序运行。

`cron`程序是称为**守护进程的程序**系列的一部分。一个守护进程 是一个始终在我们的计算机后台运行的程序。第一， 让我们看看`cron`是否正在运行。我们可以获得所有正在运行的程序的列表 使用`-A`标志时使用`ps`命令：

\`\`\`{r，engine ='bash'，eval = FALSE} ps -A

## PID TTY TIME CMD

## 1？ 00:00:13 systemd

## 2？ 00:00:00 kthreadd

## 3？ 00:00:03 ksoftirqd / 0

## 5？ 00:00:00 kworker / 0：0H

## 7？ 00:00:11 rcu\_sched

## 8？ 00:00:00 rcu\_bh

## 9？ 00:00:00迁移/ 0

## ...
```
You probably have a huge list of programs in your terminal now! Instead of 
 shifting through this listing line-by-line, let's pipe the output of this command 
 to `grep` and we'll look for `cron`: 
```

{r，engine ='bash'，eval = FALSE} ps -A | grep“cron”

## 1273？ 00:00:01 cron
```
# You might or might not get a `cron` running . 
 
 Looks like the `cron` daemon is running! In order to assign programs to be 
 executed with `cron` we need to edit a special text file called the `cron` 
 table. Before we edit the `cron` table we need to select the default text 
 editor. If you like using `nano` (the text editor we've been using throughout 
 this book) then enter `select-editor` into the console, type in the number 
 that corresponds to `nano` (usually `2`) and then press enter: 
```

{r，engine ='bash'，eval = FALSE} 选择编辑器

## 选择一个编辑器。要稍后更改，请运行“select-editor”。

## 1\. / bin / ed

## 2\. / bin / nano <----最简单

## 3\. /usr/bin/vim.basic

## 4\. /usr/bin/vim.tiny

## 选择1-4 \[2\]：
```
Now that we've chosen a text editor we can edit the `cron` table using the 
 command `crontab -e` (**`cron`** **tab**le **e**dit) which will automatically 
 open `nano` with the appropriate file. 
```

{r，engine ='bash'，eval = FALSE} crontab -e

# 编辑此文件以介绍要由cron运行的任务。

＃

# m h dom mon dow命令
```
Let's go over the layout of the `cron` table. First you should notice that any 
 text after a pound sign (`#`) is a comment, so it's not seen by `cron` (just 
 like bash comments). The `cron` table has six columns: 
 
 1. Minute (`m`) 
 2. Hour (`h`) 
 3. Day of Month (`dom`) 
 4. Month (`mon`) 
 5. Day of Week (`dow`) 
 6. Command to be run (`command`) 
 
 Each column is separated by a single space in the table. The first five columns 
 allow you to specify when you want a particular command to be run. Only certain 
 values are valid in each column: 
 
 1. Minute: `00 - 59` (A particular minute in an hour) 
 2. Hour: `00 - 23` (0 is the midnight hour) 
 3. Day of Month: `01 - 31` (1 is the first day of the month) 
 4. Month: `01 - 12` (1 is January) 
 5. Day of Week `0 - 6` (0 is Sunday) 
 
 There are also a few other characters that are valid in the `cron` table. The 
 most commonly used character is a star (`*`) which represents *all* of the 
 possible values in a column. So a star in the Minute column means "run every 
 minute," and a star in the Hour column means "run during every hour." 
 Knowing this let's make our first entry in the `cron` table. If we want a 
 command to be executed every minute, during every hour, on every day of the 
 month, during every month, on every day of the week, then we can put stars in 
 all of the first five 
 columns, followed by the command that we want to run. In this case the command 
 that `cron` will run every minute will be `date >> ~/date-file.txt`, which will 
 append the date and time when the command is executed to a file in our home 
 directory called `date-file.txt`. This is what your `cron` table should look 
 like before you save and exit from `nano`: 
```

# 编辑此文件以介绍要由cron运行的任务。

＃

# m h dom mon dow命令

*   \* \* \* \* date >>〜/ date-file.txt
```
Save and exit `nano` just like you would for a regular text file and then wait 
 a little bit! After a minute has gone by use `cat` to look at `~/date-file.txt`: 
```

{r，engine ='bash'，eval = FALSE} 光盘 cat date-file.txt

## Thu Jun 8 18:50:01 UTC 2017
```
Look like our entry in the `cron` table is working! Wait another minute and then 
 look at the file again: 
```

{r，engine ='bash'，eval = FALSE} cat date-file.txt

## Thu Jun 8 18:50:01 UTC 2017

## 星期四8月18日18:51:01 UTC
```
Unless we delete the line that we entered in the `cron` table, the output from 
 `date` will be appended to `date-file.txt` every minute. 
 
 The single line of bash `date >> ~/date-file.txt` is a much simpler program than 
 we would probably use in a `cron` table, though it's good for illustrating how 
 a `cron` table works. If you want to do more complex tasks with `cron` it's 
 better for `cron` to execute a bash script that you've written in advance. That 
 way you can just specify `bash /path/to/script.sh` in the last column of the 
 table. 
 
 Using stars in all columns is the simplest line of a `cron` table, so let's 
 look at some examples of more complex table entries: 
```

# m h dom mon dow命令

00 \* \* \* \* bash /path/to/script.sh#每小时开始运行一次 00 12 \* \* \* bash /path/to/script.sh#每天中午运行

*   12 \* \* \* bash /path/to/script.sh#在下午12点到12点59分之间每分钟运行一次 00 00 05 \* \* bash /path/to/script.sh#每个月的第5天午夜运行 00 00 \* 07 \* bash /path/to/script.sh#在7月的午夜每天运行 00 00 \* \* 2 bash /path/to/script.sh#每周二午夜运行
```
Besides numbers and the star there are a few other characters that you can use 
 in `cron` table columns including a hyphen (`-`) for specifying ranges and a 
 comma (`,`) for specifying lists of items. For example `00-29` in the Minutes 
 column would specify the first thirty minutes of an hour, while `1,5` in the 
 Day of Week column would specify Monday and Friday. 
 
 Let's take a look at another example of a `cron` table that uses hyphens and 
 ranges so you can get a sense of how each character works. 
```

# m h dom mon dow命令

00-04 \* \* \* \* bash /path/to/script.sh#每小时的前五分钟每分钟运行一次 00 00 \* \* 0,6 bash /path/to/script.sh#每周六和周日午夜运行 00 03 01-15 \* \* bash /path/to/script.sh#每个月的前十五天凌晨3点运行 00,30 \* \* \* \* bash /path/to/script.sh#在每小时的开始和中间运行 00 00,12 \* \* \* bash /path/to/script.sh#每天午夜和中午运行 00 \* 01-07 01,06 \* bash /path/to/script.sh#在1月和6月的前七天每小时开始运行 \`\`\`

由`cron`运行的程序只有你想象的强大 可以伸展！如果您熟悉社交网络 [Twitter](https://twitter.com/)然后你可能会遇到一些Twitter 自动创建帖子的帐户 [表情符号水族馆](https://twitter.com/emojiaquarium) ， [老水果图片](https://twitter.com/pomological) ，或 [无尽的尖叫](https://twitter.com/infinite_scream) 。许多这些“机器人” 帐户由`cron`提供支持，后者使用Twitter的HTTP API发布推文 经常。