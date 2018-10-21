---
title: Automating Tasks
---

### Automating Tasks or Task Scheduling

There is a feature of Linux that is exclusively leveraged in a web server,known as CRON 
As we  know that one of the most compelling features about any web server is that it's always
powered on and always connected to the internet. This means that we can instruct
our server to perform tasks automatically, without us needing to enter a command
into a shell. One of the most commonly used programs for executing *other programs*
with a regular frequency is called `cron`. Let's take a look at how to use
`cron` to schedule a program to be run.

The `cron` program is part of a family of programs called **daemons**. A daemon
is a program that is always running in the background of our computer. First, 
let's see if `cron` is running. We can get a list of all running programs
with the `ps` command while using the `-A` flag:

```{r, engine='bash', eval=FALSE}
ps -A
```

```
##  PID TTY          TIME CMD
##    1 ?        00:00:13 systemd
##    2 ?        00:00:00 kthreadd
##    3 ?        00:00:03 ksoftirqd/0
##    5 ?        00:00:00 kworker/0:0H
##    7 ?        00:00:11 rcu_sched
##    8 ?        00:00:00 rcu_bh
##    9 ?        00:00:00 migration/0
## ...
```

You probably have a huge list of programs in your terminal now! Instead of
shifting through this listing line-by-line, let's pipe the output of this command
to `grep` and we'll look for `cron`:

```{r, engine='bash', eval=FALSE}
ps -A | grep "cron"
```

```
##  1273 ?        00:00:01 cron
```
# You might or might not get a `cron` running .

Looks like the `cron` daemon is running! In order to assign programs to be
executed with `cron` we need to edit a special text file called the `cron`
table. Before we edit the `cron` table we need to select the default text
editor. If you like using `nano` (the text editor we've been using throughout
this book) then enter `select-editor` into the console, type in the number
that corresponds to `nano` (usually `2`) and then press enter:

```{r, engine='bash', eval=FALSE}
select-editor
```

```
## Select an editor.  To change later, run 'select-editor'.
##   1. /bin/ed
##   2. /bin/nano        <---- easiest
##   3. /usr/bin/vim.basic
##   4. /usr/bin/vim.tiny
## 
## Choose 1-4 [2]:
```

Now that we've chosen a text editor we can edit the `cron` table using the
command `crontab -e` (**`cron`** **tab**le **e**dit) which will automatically
open `nano` with the appropriate file.

```{r, engine='bash', eval=FALSE}
crontab -e
```

```
# Edit this file to introduce tasks to be run by cron.
#
# m h  dom mon dow   command

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
# Edit this file to introduce tasks to be run by cron.
#
# m h  dom mon dow   command
* * * * * date >> ~/date-file.txt
```

Save and exit `nano` just like you would for a regular text file and then wait
a little bit! After a minute has gone by use `cat` to look at `~/date-file.txt`:

```{r, engine='bash', eval=FALSE}
cd
cat date-file.txt
```

```
## Thu Jun  8 18:50:01 UTC 2017
```

Look like our entry in the `cron` table is working! Wait another minute and then
look at the file again:

```{r, engine='bash', eval=FALSE}
cat date-file.txt
```

```
## Thu Jun  8 18:50:01 UTC 2017
## Thu Jun  8 18:51:01 UTC 2017
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
# m h  dom mon dow   command
00 * * * * bash /path/to/script.sh     # Runs every hour at the start of the hour
00 12 * * * bash /path/to/script.sh    # Runs every day at noon
* 12 * * * bash /path/to/script.sh     # Runs every minute between 12pm and 12:59pm
00 00 05 * * bash /path/to/script.sh   # Runs the 5th day of every month at midnight
00 00 * 07 * bash /path/to/script.sh   # Runs every day in the month of July at midnight
00 00 * * 2 bash /path/to/script.sh    # Runs every Tuesday at midnight
```

Besides numbers and the star there are a few other characters that you can use
in `cron` table columns including a hyphen (`-`) for specifying ranges and a
comma (`,`) for specifying lists of items. For example `00-29` in the Minutes
column would specify the first thirty minutes of an hour, while `1,5` in the
Day of Week column would specify Monday and Friday.

Let's take a look at another example of a `cron` table that uses hyphens and 
ranges so you can get a sense of how each character works.

```
# m h  dom mon dow   command
00-04 * * * * bash /path/to/script.sh       # Runs every minute for the first five minutes of every hour
00 00 * * 0,6 bash /path/to/script.sh       # Runs at midnight every Saturday and Sunday
00 03 01-15 * * bash /path/to/script.sh     # Runs at 3am for the first fifteen days of every month 
00,30 * * * * bash /path/to/script.sh       # Runs at the start and middle of every hour
00 00,12 * * * bash /path/to/script.sh      # Runs every day at midnight and noon
00 * 01-07 01,06 * bash /path/to/script.sh  # Runs at the start of every hour for the first seven days of the months of January and June
```

A program that is being run by `cron` is only as powerful as your imagination
can stretch! If you're familiar with the social network
[Twitter](https://twitter.com/) then you might have come across some Twitter
accounts which create posts automatically like
[Emoji Aquarium](https://twitter.com/emojiaquarium),
[Old Fruit Pictures](https://twitter.com/pomological), or
[Endless Screaming](https://twitter.com/infinite_scream). Many of these "bot"
accounts are powered by `cron`, which uses Twitter's HTTP API to post tweets
regularly.
