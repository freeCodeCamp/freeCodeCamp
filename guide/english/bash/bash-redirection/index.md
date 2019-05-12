---
title: Bash Redirection
---

## Bash Redirection
One of the most powerful features of bash (and other shells that support similar syntax) is output and input redirection via pipes and concatenation symbols. To start simply the problem of appending a sting to a file is considered. One could open the file in a terminal based editor such as Vim or Nano and manually paste the line in, though this is a bit tedious. Further more, what if one wanted to take the output of one command, say ' $echo 'hi' ' and put it into a file? Again, this could be done via a copy and paste, though this would get progressively more tedious if it had to be done repeatedly and this is not scriptable or automatable so insead something like the '>' or '>>' symbols can be used. With the previous examlpe this may look like:

```shell
echo 'hi' > output.txt
```
or
```shell
echo 'hi' >> output.txt
```

The difference between the two is a single '>' will overwrite the destination file with the input while a '>>' will append the input to the destination file. Interestingly, the destination need not be a file for example say you had a simple program 'add' which takes two, comma delimited integers as input from the user and output the sum. Normally running 'add' would wait for input from the user though using a file that contains valid input this could be automated. Say "input.txt" is a text file containing "1,2" running:

```shell
input.txt > add
```

should output '3'.

Finally, and most powerful of all, is the pipe `|` which can be used to take a running program's output and 'pipe' it into another program. For example:

```shell
sort textfile.txt | uniq
```

will first sort each line in the file alpahabetically and then print only the unique entries. This is only scratching the surface of the massive power of pipes though.

### Bash Redirect StdOut & StdErr
Another great use case is redirection of stdout(1) and stderr(2) streams.  

To simply hide the output, redirect the corresponding stream to null.  The below example displays no stdout stream to the console.  All stderr output will still be visible.

somecommand 1>null

The more common use is to hide any stderr output from the console.  This example hides all stderr output.

somecommand 2>null

You can also hide all output using the '&' symbol.

sommecommand &>null
