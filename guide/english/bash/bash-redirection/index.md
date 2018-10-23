---
title: Bash Redirection
---

One of the most powerful features of bash (and other shells with similar syntax) is output and input redirection and pipes. Basically it redirects whatever was going to go to STDOUT (i.e. on the screen) to a file or the next command.

Using an editor for all of this would be tedious. It is a great example of the simple power of bash commands. 

## Usage 

### Single Redirect to a file
Save what normally goes to STDOUT to a file and create a new destination file or overwrite any existing destination file.

```bash
[command] > overwrite-me.txt
```
#### Example
```bash
echo 'hi' > overwrite-me.txt
```


### Double Redirect to a file
Append what normally goes to STDOUT to a file appending the output to an existing file. 
```bash
[command] >> append-me.txt
```

#### Example
```bash
echo 'hi' >> append-me.txt
```

### Pipe
Take the STDOUT of the command or program and pipe it into another command or program.

```bash
[command] | [command]
```
#### Example
```bash
sort textfile.txt | uniq
```
This will first sort each line in the file alpahabetically pass this result to the uniq command which will then print only the unique entries. 

```bash
find . -name *.txt | grep dog
```
This will first `find` all files in the current directory and all subdirectories that end in `.txt` and pass the result to the next command, `grep` which will then serach the contents of the file for the string `dog`.

 ### More Information
* [Wikipedia](https://en.wikipedia.org/wiki/Redirection_(computing))
