---
title: Bash Less
---
 ## Bash command: less
 The `less` command is a way to easily view files. Similar to the `more` command but with easier navigation.
 
 ### Usage
 ```
 less <file name>
 ```
 
 Commonly used options:
 * Typically less is used with no options
 
 ### Examples
 #### View the /etc/hosts file
 ```bash
 less /etc/hosts
 ```
 
 ### Options used while viewing a file
 * `q` - Exit viewing.
 * `shift^g` - Navigate to the bottom of the file.
 * `g` - Navigate to the top of the file.
 * `/` - Search down from current screen. Note you have to type some text and hit enter to complete the search.
 * `?` - Search up from current screen.
 * `n` - Used while searching to go to the next result. This works while searching up and down the file.
 
 ### More Information
 * Run `man less` for further details on the less command.
 * [Wikipedia](https://en.wikipedia.org/wiki/Less_(Unix))
