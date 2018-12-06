---
title: Writing a Bash Script
---
# Writing a Bash Script

By typing commands on the Linux command line, you can give the server instructions to get some simple tasks done. A shell 
script is a way to put together a series of instructions to make this easier. Shell scripts become even more powerful when 
you add logic like `if` and `while` to automatically control how they behave as circumstances change.

## What’s Bash?
Bash is the name of a command line interpreter, a program that makes sense of the Linux commands you enter at the command 
prompt, or in your script. There are other interpreters as well, such us TC-Shell, Z Shell, Fish-Shell, and many more.

## What’s in a Script?
A script is just a file. A basic script is made up of an introductory line, called a "shebang", that tells the server what to make of it, and one 
or more instructions to execute. Here’s an example:

```
#!/bin/bash
echo "Hi. I’m your new favorite bash script."
```

The first line has special meaning, which we'll discuss below. The second line is just a Linux command, one you could type 
out on the command line.

## What’s a Comment?
Comments are text you add to your script that you intend bash to ignore. Comments start with a pound sign, and are useful for 
annotating your code so you and other users can understand it. To add a comment, type the `#` character, followed by any text 
that's helpful you. Bash will ignore the `#` and everything after it.

**Note:** the first line of the script is not a comment. This line is always first, always starts with `#!` and has special 
meaning to bash. 

Here’s the script from before, commented:

```
#!/bin/bash # Designates the path to the bash program. Must start with '#!' (but isn't a comment).
echo "Hi. I’m your new favorite bash script." # 'echo' is a program that sends a string to the screen.
```

## Executing a Script
You can open a text editor, paste that example code and save the file, and you’ve got a script. Scripts are conventionally 
named ending in '.sh,' so you might save that code as myscript.sh.

The script won’t execute until we do 2 things:

**First, make it executable.** (We’ll only have to do this once.)
Linux relies extensively on file permissions. They determine a lot about how your server behaves. There's a lot to know about 
permissions, but for now we only need to know this: you can't run your script until you give yourself execute permissions. To 
do that, type:

`chmod +x my script.sh`

**Second, run it.** We execute the script from the command line just like any other command like `ls` or `date`. The script 
name is the command, and you need to precede it with a './' when you call it:

`./myscript.sh # Outputs "Hi. I'm your new favorite bash script." (This part is a comment!)`

## Conditionals
Sometimes you want your script to do something only if something else is true. For example, print a message only if a value is 
below a certain limit. Here's an example of using `if` to do that:
```
#!/bin/bash

count=1 # Create a variable named count and set it to 1

if [[ $count -lt 11 ]]; then # This is an if block (or conditional). Test to see if $count is 10 or less. If it is, execute the instructions inside the block.
    echo "$count is 10 or less" # This will print, because count = 1.
fi # Every if ends with fi
```

Similarly, we can arrange the script so it executes an instruction only while something is true. We'll change the code so that 
the value of the count variable changes:
```
#!/bin/bash

count=1 # Create a variable named count and set it to 1

while [[ $count -lt 11 ]]; do # This is an if block (or conditional). Test to see if $count is 10 or less. If it is, execute the instructions inside the block.
    echo "$count is 10 or less" # This will print as long as count <= 10.
    count=$((count+1)) # Increment count
done # Every while ends with done
```

The output of this version of myscript.sh will look like this:
```
"1 is 10 or less"
"2 is 10 or less"
"3 is 10 or less"
"4 is 10 or less"
"5 is 10 or less"
"6 is 10 or less"
"7 is 10 or less"
"8 is 10 or less"
"9 is 10 or less"
"10 is 10 or less"
```
## Real World Scripts
These examples aren't terribly useful, but the principles are. Using `while`, `if`, and any command you might otherwise type 
manually, you can create scripts that do valuable work.
