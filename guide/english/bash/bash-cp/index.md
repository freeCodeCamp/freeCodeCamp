---
title: Bash Copy
---
 ## Bash command: cp
 `cp` is used to copy files and directories.
 The utility copies the contents of the source file to the target file. The utility can also copy the contents of each named source file to the target directory. The names of the files themselves are not changed. If cp detects an attempt to copy a file to itself, the copy will fail.
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
 ### Copy an entire set of files with given extension
 ```bash
 cp *.extension directory
 ```
 `cd` into the target directory and you will see all files with entered extension into the directory
 #### Copy a directory
 ```bash
cp -R directory/to/copy your/target/directory
```
 `cd` into the target directory and `ls` to see your directory. The `-R` option is added to recursively copy everything in the directory.
 ### More Information
* run `man cp` to get a list of all options for this command
* [Wikipedia](https://en.wikipedia.org/wiki/Cp_(Unix))
