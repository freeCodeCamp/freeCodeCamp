---
title: Using the Find Command
---
# Using the Find Command
The Linux find command is a powerful tool to help you locate files and directories on your server. With a little practice, you can easily track things down based on name, type, size, or date (when they were created or last updated). 

Think of find as your eager helper:

You: "I'm looking for something on my server."

Find: "I can help! What can you tell me about it?"

You: "It was a file, bigger than 2GB, somewhere under my home directory, updated in the last 48 hours."

Find: "Tada!"

Find is a program, so really you'd have to tell it `find ~ -type f -size +2G`.

Here are some sample commands using find:
* `find ~ -type d # Show me all the subdirectories inside my home directory`
* `find / -type f -name 'todo.txt' # Show me files named 'todo.txt' anywhere under the root directory (i.e. anywhere)`

The first parameter always names the directory in which we'll look. In our examples above, these are ~ (home directory of the current user) and / (root directory of the filesystem).

Other parameters are optional and can be combined in any way you find useful:
* The type parameter allows you to constrain the search for files only (f), directories only (d) or symbolic links (l). If you omit the type parameter, you'll be searching for all of these types.
* The name parameter lets you specify what you want to find by name, either with a literal string ('filename.txt') or using wildcards ('file?.*').

`man find` will show you many more parameters, and is worth reviewing. Find can locate files by name, user, creation date, size and much more. Next time you're looking for something, find it!

## Useful find commands
### Find all javascript files
```bash
find . -type f -name "*.js"
./server.php
./model.js
./config.js
```

### Find and remove multiple files
To find and remove multiple files such as .txt, then use.
```bash 
find . -type f -name "*.txt" -exec rm -f {} \;
```

### Find last 30 days modified files
To find all the files which are modified 30 days back.
```bash
find / -mtime 30
```

### Find files with size between 100MB – 200MB
To find all the files which are greater than 100MB and less than 200MB.
```bash 
find / -size +100M -size -200M
```
