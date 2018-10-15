---
title: The Command Prompt
---

## The Command Prompt

As one of the oldest User Interfaces (UI), the *command prompt* (a.k.a. *shell*, *terminal*, *console*, *tty*) has been implemented in many ways.

This has led to a few words being used interchangeably in modern conversation that actually have slightly different meanings.

---

> Table of Contents

<!-- TOC depthFrom:3 -->

- [A Very, Very Short History](#a-very-very-short-history)
- [Today](#today)
- [The Shell](#the-shell)
  - [BASH](#bash)
  - [Getting Help](#getting-help)
- [The Prompt](#the-prompt)
- [Getting Root](#getting-root)
  - [login](#login)
  - [sudo](#sudo)
  - [su](#su)
- [Relative and Absolute Paths](#relative-and-absolute-paths)
  - [Relative](#relative)
  - [Absolute](#absolute)
- [Command Options](#command-options)
- [Chaining Commands](#chaining-commands)
- [Background Jobs](#background-jobs)

<!-- /TOC -->

---

### A Very, Very Short History

In the 19th century was the <a href='https://en.wikipedia.org/wiki/Electrical_telegraph' target='_blank' rel='nofollow'>telegraph</a>. This allowed two people to exchange encoded messages over long distances. Later technological advancements led to the <a href='https://en.wikipedia.org/wiki/Teleprinter' target='_blank' rel='nofollow'>teletype machine</a> (tty), where the person required to receive the message was replaced by a kind of printer.

At the same time, early computers like ENIAC, were programmed with some kind of hardware, like switches, dials, or patch cables. As the computers advanced, better Input/Output (IO) was needed, and so the commonly available teletype machines were converted for use.

Because the tty's were large pieces of furniture on their own, and earned the name **console** for their similarities to other floor-standing furniture such as console televisions. As an electronic end-point for a mainframe, these devices were also called **terminals**.

TTY printers were eventually replaced by Cathode Ray Tube (CRT) screens, which were also used in televisions before LCD and plasma was available. Interestingly, modern Linux computers can still be controlled using a tty machine!

> Click the image below to go to a short Youtube video.

<a href='https://youtu.be/-Ul-f3hPJQM' target='_blank' rel='nofollow'><img src='https://i.ytimg.com/vi/-Ul-f3hPJQM/hqdefault.jpg'></a>

---

### Today

Today, Linux and Unix users still use the same terms, but with slight differences. Real and virtual terminals are available, and virtual terminals can be accessed using <kbd>Alt + Ctrl + [F1-F12]</kbd>.

In Graphical User Environments (GUI), users can access the command prompt using a **terminal emulator**, which provides the features of a tty, but within a window. There are many terminal emulators available to Linux users, such as **xterm**, **kterm**, and **rxvt**.

The ones available will depend on which Linux distribution (distro, for short) you are using, and its defaults. Check your package manager to install others. Windows users can use **PuTTY** or other utilities to connect to a Linux system.

### The Shell

*Shell*s are programs that interpret commands.

There are a number of them, such as <a href='https://www.gnu.org/software/bash/' target='_blank' rel='nofollow'>**B**ourne **A**gain **SH**ell</a> (BASH), <a href='https://docs.freebsd.org/44doc/usd/04.csh/paper.html' target='_blank' rel='nofollow'>C Shell</a> (csh/tcsh), and <a href='http://zsh.sourceforge.net/' target='_blank' rel='nofollow'>Z SHell</a> (zsh).

#### BASH

The most common default shell in Linux is BASH, but each user can switch temporarily or permanently to any other available shell. The shell is fully scriptable, meaning that programming concepts can be combined with shell and system utilities in order to create more complicated functions.

Commands entered at a command prompt may be built in to the shell, such as **cd**, **exit**, or **export**.

They can also come from external programs, and in the case of most Linux distributions, is provided by the <a href='https://www.gnu.org/software/coreutils/coreutils.html' target='_blank' rel='nofollow'>Gnu tools</a>.

See below for the most common commands.

| Command  | Usage                                     |
| -------- | ----------------------------------------- |
| `cd`     | change current directory                  |
| `ls`     | list files in current directory           |
| `mv`     | move files and directories                |
| `man`    | open command documentation                |
| `mkdir`  | make a directory                          |
| `rmdir`  | delete a director                         |
| `touch`  | create an empty file                      |
| `rm`     | remove files                              |
| `ln`     | create links to files and directories     |
| `chown`  | change ownership of files and directories |
| `chmod`  | change permissions                        |
| `find`   | locate files                              |
| `cat`    | writes files to standard output           |
| `less`   | allows scrolling of standard input        |
| `grep`   | search for matches in plain text          |
| `diff`   | show differences between files            |
| `passwd` | change your password                      |

#### Getting Help

Immediate help is available for commands in one or more places.

Add `--help` after the command.

This prints usage information for the command.

Its output is similar to the `man` command, but `man` is used before the command that you want the manual for.

The `info` command is the third help option, and is used just like `man`.

```bash
ls --help

man ls

info ls
```

### The Prompt

The prompt, which is the bit of text in the shell to the left of the cursor, can change to show your current status, such as which directory you are currently in, which user you are logged in as, your computer's name, and *what privileges you have*.

That last one is important to recognize. Usually the last character in the prompt, you will see a `$`, which indicates normal user privileges.

If you have **root** privileges, which belong to the system administrator, you will usually see a `#` as the last character. When browsing forums and getting help online, the commands that you must type will often be shown with this character.

**You don't have to type it!**

For example:

```bash
$ ls -l
```

means you type `ls -l` at a normal prompt.

```bash
# apt-get install node
```

means that you type `apt-get install node` using administrator privileges. How you elevate your privileges depends on your Linux distribution.

### Getting Root

#### login

Logging in as root is a *very bad idea*. This is why some versions of Linux disable users' ability to log this way. Those users are encouraged to use the next method, `sudo` from within their own user account.

If you do have to use a root console, be aware of its power. You will not be warned, or asked to confirm for most tasks, even if a simple typo means deleting something important.

#### sudo

Add "sudo" before a command in order to switch to **S**uper **U**ser and **DO** (SUDO). This is how Ubuntu and its derivatives are configured to allow administrator access, and is given on a per-command basis.

You are not given a root shell, and the next command you type will not have elevated privileges, unless you use `sudo` again.

```bash
sudo apt-get update
```

Except for the first created user on certain distros, users have to be added to a special list (found in `/etc/sudoers`) in order to use sudo.

This is done with the `visudo` command.

You should never edit the `sudoers` file with a regular text editor!

`visudo` will make sure that you don't lock yourself out of your own system.

#### su

`su`, like `sudo`, allows you to change to another user, except that by default, you will get another prompt as the user you switched to.

On it's own, `su` will switch you to a root prompt, but with the current user's environment variables, such as `$HOME` for your home folder, and `$PATH` for the system path.

This can lead to unexpected results, and if you want to use `su` to switch to another user, add a hyphen after the command:

```bash
su -
```

This will switch you fully to a root prompt.

A username can be added to the command to switch to that user, but will require that user's password.

`sudo` can be used in combination with `su` to allow an administrator to switch to any user.

```bash
myUser@linux $ su - otherUsername
Password: (typed my password)
su: Authentication failure

myUser@linux $ sudo su - otherUsername
Password: (typed my password)
otherUsername@Linux $
```

### Relative and Absolute Paths

When using a command on a file, such as copying or deleting, you can refer to the file in one of two ways.

#### Relative

File location in relation to the current directory.

There are two relative path operators in the shell, `.` and `..`.

The first, `.` means the current directory, so `cat file.txt` and `cat ./file.txt` are the same thing if file.txt is in the current directory.

The other is `..`, and means one directory up in the tree.

So if you are in `/home/user/projects/project-a` and issue the command `cd ..` you will change to `/home/user/projects`.

If the projects directory has sub-directories named `project-a`, `project-b`, `project-c`, and you were in the `project-a` directory, you could switch to `project-b` using `cd ../project-b`.

There is also an `environment variable` in the shell called `$HOME` which points to your home directory.

You can use this in BASH using a tilde character `~`.

The shell replaces the tilde for you when you hit enter, so as an example, you can change to your own home folder using `cd ~`.

#### Absolute

File locations are the full path from the root of the filesystem, and always have a leading slash.

For example, `cd /home/quincy/Desktop` will go to Quincy's desktop directory, regardless of current path or logged in user.

### Command Options

Most shell commands follow the same syntax, which is **command options files**.

```bash
ls -l *.txt
```

where

- `ls` gives a list of files and directories,
- `-l` changes the output of `ls` to a long listing,
- and `*.txt` restricts the list to files ending with `.txt`.

Each command has different options, and multiple options can be listed together, as in the tar example `tar -cvf` in the next section.

Individual commands can be connected together in a chain, where the output of one command becomes the input to another command.

This is done with the `|` character, often called **pipe** or **bar**. This is not a capital <kbd>i</kbd> or lowercase <kbd>L</kbd>, nor is it the number <kbd>1</kbd>. On US keyboards, it's found on one of the keys near <kbd>Enter</kbd>.

In the following example, I will use 2 commands.

The first, `cat`, is short for concatenate, and can be use to put the contents of one file at the end of another (concatenation!). When using it with one file only, it writes the contents to the terminal.

The second command, `grep` is a program that outputs text found based on some input, and a search pattern. The search pattern can be simple text, or a Regular Expression (regex) for more advanced searches.

```bash
cat index.html | grep img
```

There are many ways to do this, but this will output every line in index.html that contains `img` to the terminal. This example only uses one `|`, but you are not limited to that.

### Chaining Commands

While the single ampersand operator `&` is a job control operator in BASH (next section), the double ampersand has another meaning. It is logical **AND**, and you use it between two commands so that the second command only runs if the first exits successfully (without error).

The following example is how many Debian & Ubuntu users update their list of software, and then run a system upgrade.

```bash
sudo apt-get update && sudo apt-get dist-upgrade
```

Another option is the double-pipe `||`, which means logical **OR**. You would use it when you want to run a command only when the first exits with an error.

The following will create an archive called `project.tar` on the user's desktop from the files in a project directory, and if that fails, echo a message.

```bash
tar -cvf /home/user/Desktop/project.tar /home/user/project/* || echo "archive failed"
```

### Background Jobs

When you run a command in a terminal, the terminal is busy until the command is finished, and no other commands can be run. There is a job control system in Linux that allows you to suspend running commands, resume suspended commands in the background, and resume suspended commands in the foreground.

This is useful for long-running scripts, or when you need to push something in to the background so that the terminal can be used for other things.

o suspend a program that is running in the terminal use the key combination <kbd>Ctrl + Z</kbd>.

You will get back to your normal prompt, and the command appears to have quit. It hasn't, but has only been suspended. It's still visible in the jobs list by using `jobs` command to list all currently tracked jobs. I did `man ls` to get a manual page, and then suspended it.

When I type `jobs` I get the following output:

```bash
$ jobs

[1]  + suspended  man ls
```

From here, I can let it resume in the background by typing `bg %1` where the `1` is the job number found in the square brackets.

I can bring it back to the foreground by typing `fg %1`.
