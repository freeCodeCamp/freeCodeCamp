---
id: 6882902bc844b1723da7eb13
title: How Do You Install and Set Up Git?
challengeType: 19
dashedName: how-do-you-install-and-set-up-git
---

# --description--

Before you can really start to make use of version control, and sites like GitHub, you need to have Git installed and ready to use.

To check if Git is already installed on your machine you can run the following command in the terminal:

```sh
git --version
```

If you see a version number, that means Git is installed. If not, then you will need to install it.

For Linux systems, Git often comes preinstalled with most distros. If you do not have Git pre-installed, you should be able to install it with your package manager commands such as `sudo apt-get install git` or `sudo pacman -S git`.

For Mac users, you can install Git via Homebrew with `brew install git`, or you can download the executable installer from Git's website.

For Windows, you can download the executable installer from Git's website. Or, if you have set up Chocolatey, you can run `choco install git.install` in PowerShell. Note that on Windows, you may also want to download GitBash so you have a Unix-like shell environment available.

To make sure the installation worked, run the `git --version` command again in the terminal.

Once you have Git installed, you will need to make a few changes to the configuration. You should only need to make these changes once on your computer and you won't need to continually make changes when you make upgrades.

`git config` is used to set configuration variables that are responsible for how Git operates on your machine. To view your current setting variables and where they are stored on your system, you can run the following command:

```sh
git config --list --show-origin
```

Right now you should be seeing only system-level configuration settings if you just installed Git for the first time. If you have already installed Git prior to this lesson, then you might be seeing user configurations for a user name and email.

To set your user name, you can run the following command:

```sh
git config --global user.name "Jane Doe"
```

The `--global` flag is used here to set the user name for all projects on your system that use Git. If you need to override the user name for a particular project, then you can run the command in that particular project directory without the `--global` flag.

To set the user email address, you can run the following command:

```sh
git config --global user.email janedoe@example.com
```

Configuring your user name and email is important because Git will use this information for every commit you make in a project. You will learn more about commits in a future lesson.

Another configuration you can set is the preferred editor you want Git to use. Here is an example of how to set your preferred editor to Emacs:

```sh
git config --global core.editor emacs
```

Other options include Vim, Nano, VS Code, and more. For example, if you use VS Code for your editor, then you can configure Git settings like this:

```sh
git config --global core.editor "code --wait"
```

If you choose not to set a preferred editor, then Git will default to your system's default editor.

If you are using a Windows machine and want to change your editor, you will need to provide the complete path to the executable file like this:

```sh
git config --global core.editor "'C:/Program Files/Notepad++/notepad++.exe' -multiInst -notabbar -nosession -noPlugin"
```

To see your list of configurations, you can run the following command:

```sh
git config --list
```

Now that you have Git installed and set up, you are now ready to start adding version control to your projects.

# --questions--

## --text--

What does the following command do?

```sh
git config --list --show-origin
```

## --answers--

Shows a list of only editors available to use with Git and where they are stored on your system.

### --feedback--

Refer back to the section discussing Git configuration for the answer.

---

Shows a list of only color options in your Git configuration.

### --feedback--

Refer back to the section discussing Git configuration for the answer.

---

Shows your current setting variables and where they are stored on your system.

---

Shows a list of all projects on your system that use Git.

### --feedback--

Refer back to the section discussing Git configuration for the answer.

## --video-solution--

3

## --text--

What is the purpose of using the `--global` flag when configuring your user name?

## --answers--

The `--global` flag is used to set the user name for some projects on your system that use Git.

### --feedback--

Think about how this flag can effect all projects that use Git.

---

The `--global` flag is used to set the user name for all projects on your system that use Git.

---

The `--global` flag is used to set the user name for none of the projects on your system that use Git.

### --feedback--

Think about how this flag can effect all projects that use Git.

---

The `--global` flag is used to set the user name for only projects on your system that are more than 5 years old and use Git.

### --feedback--

Think about how this flag can effect all projects that use Git.

## --video-solution--

2

## --text--

Which of the following is NOT a valid option mentioned for setting your preferred editor in Git?

## --answers--

Vim

### --feedback--

Refer to the end of the script where Git configurations and editors were set.

---

Emacs

### --feedback--

Refer to the end of the script where Git configurations and editors were set.

---

Nano

### --feedback--

Refer to the end of the script where Git configurations and editors were set.

---

ESLint

## --video-solution--

4
