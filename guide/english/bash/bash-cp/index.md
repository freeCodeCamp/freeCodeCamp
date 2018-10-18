---
title: Bash Copy
---
 ## Bash command: cp
 `cp` is used to copy files and directories.
 It can be used to copy a file, copy a file to a directory, or copy a directory.
 ### Usage
 ```
cp [options] source target
```
 Commonly used options:
 * `-p` (preserve) - used to preserve time of the last data modification, time of last access, ownership, and permissions of the source for the target
* `-R or -r` (recursive) - used to recursively copy directories
 ### Examples
 #### Copy a file
 ```bash
cp somefile.txt newfile.txt
```
 Run `ls` and you will see you have a new file called `newfile.txt`
 #### Copy a file to a directory
 ```bash
cp -p somefile.txt your/target/directory
```
 `cd` into the target directory, `ls`, and you will see a copy of your file. The `-p` option is added to preserve the files attributes.
 #### Copy multiple files to a directory
 ```bash
cp file1.txt file2.txt fileN.txt your/target/directory
```
 `cd` into the target directory, `ls`, and you will see copies of all of the files.
 #### Copy a directory
 ```bash
cp -R directory/to/copy your/target/directory
```  Added I am now done with this task
 `cd` into the target directory and `ls` to see your directory. The `-R` option is added to recursively copy everything in the directory.
 ### More Information
* run `man cp` to get a list of all options for this command
* [Wikipedia](https://en.wikipedia.org/wiki/Cp_(Unix))
