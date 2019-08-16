---
title: Bash configuration
---

## Bash configuration

Bash can be configured to the user's liking through the `.bashrc` file. The "rc" in `.bashrc` stands for "run commands," which is exactly what `.bashrc` is. This file contains a series of commands that will be run whenever a new shell is started. There are a number of options that can be configured via the `.bashrc` file.

### Usage

To configure bash to your liking, create a `.bashrc` file in your home directory (if it does not exist already) and add the commands you'd like to be run whenever you start a new shell. As mentioned previously, there are numerous options that can be configured via `.bashrc`, but here are a couple common ones:

* Aliases - through the use of the `alias` command, the user can define aliases for commands. For example, a user can define `alias ll='ls -la'` to quickly list all of a directory's contents in long format without having to type out the full command.
* Prompt customization - through exporting environment variables, the user can customize their shell prompt to their liking. The possibilities for prompt customization are numerous and outside the scope of a basic tutorial, but the article on the Arch Linux wiki below offers more information on prompt customization.

#### More information
* [Arch Wiki - Prompt customization](https://wiki.archlinux.org/index.php/Bash/Prompt_customization)
