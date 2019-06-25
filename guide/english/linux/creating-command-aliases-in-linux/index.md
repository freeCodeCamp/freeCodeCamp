---
title: Creating command Aliases in Linux.
---


#  Creating command Aliases in Linux.

Command aliases are what you can refer to as alternate/personal commands that can act as substitute for actual Linux/bash commands. And you can create these aliases in your system to either avoid repeatedly typing commands that are very long or make commands more memorable so as not to forget.

Command aliases can be created in the following steps:

# Create the bash_aliases file:

Add a file name (if it doesn't already exist) `.bash_aliases` in your home directory(`/home/username`):

`touch .bash_aliases`

The dot (“.”) before the file name signifies it’s a hidden file.

# Add command aliases to the bash_aliases file:

Then add any command alias (alternate command names) of as many commands that you need using the general format:

`alias your_alias=’actual command’`

and save the file.

For example, to start the [Apache](https://en.wikipedia.org/wiki/Apache_HTTP_Server) web server on your computer (if its [installed](https://fossnaija.com/install-lamp-server-linux-ubuntu/)); you can add;

 `alias apacheon=’sudo /etc/init.d/apache2’`

to the `.bash_aliases` file and save the file.

# Test your command aliases:

Then open the terminal and type in _apacheon_, and you’d see the actual command (`sudo /etc/init.d/apache2`) executed.
