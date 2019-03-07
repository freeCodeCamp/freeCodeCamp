---
title: Tar command
---

# Tar-command

Command used for creating .tar.gz or .tgz archives or extracting .tar.gz or .tgz archives

```
tar -czvf ../archive_name.tar.gz /path/to/directory_or_file

tar -xzvf ../archive_name.tgz /path/to/directory_or_file
```
**-c** -> Create an archive

**-x** -> Extract an archive

**-z** -> Compress the archive with gunzip

**-v** -> Stands for verbose and shows the progress in the terminal while creating the archive or extracting one. This one is optional

**-f** -> Allows you to specify the filename of the archive

-----
### EXAMPLES OF CREATING ARCHIVES

Example of compressing single file 
```
  tar -czvf myArchive.tar.gz /usr/local/myFiles/myFileToArchive.txt
```

Example of compressing single direcotry
```
  tar -czvf myArchive.tar.gz /usr/local/myFiles
```

Example of compressing multiple direcotries
```
  tar -czvf myArchive.tar.gz /usr/local/myFiles /usr/local/myFiles2 /usr/local/myLog.txt
```

Example of compressing directory excluding some files from same directory
```
  tar -czvf myArchive.tar.gz /usr/local/myFiles --exclude=/usr/local/myFiles/myFileToArchive.txt
```
-----
### EXAMPLES OF EXTRACTING ARCHIVES

Example of decompressing single archive
```
  tar -xzvf myArchive.tar.gz 
```

Example of decompressing single archive to specific location
```
  tar -xzvf myArchive.tar.gz -C /usr/local/
```

Example of decompressing single archive from specific location to current directory
```
  tar -xzvf /usr/local/myArchive.tar.gz 
```
