---
title: How to extract or decompress a compressed file in Linux
---
Before extracting the data from a compressed file, you must first determine the compressed file type.<br>

## How to extract or decompress a compressed file in Linux
Step 1: To Know the file type<br>
`file File-Name`

Step 2: To Decompress a tar file<br>
Here options used with "tar" depends on the archive type, use `man tar` for more details on how to use tar cammand.
x - to extract files from an archive
v - show verbose output
f - use archive file or device ARCHIVE

`tar xvf File-Name -C /Directory-Location`

`We Use (-C) for specific directory if we do not use (-C) then it automatically extract to current directory.`
