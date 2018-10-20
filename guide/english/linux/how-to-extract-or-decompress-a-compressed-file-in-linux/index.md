---
title: How to extract or decompress a compressed file in Linux
---
Before extracting the data from a compressed file, you must first determine the compressed file type.<br>

## How to extract or decompress a compressed file in Linux
Step 1: To Know the file type<br>
`file File-Name`

Step 2: To Decompress a tar file<br>
`tar xvf File-Name -C /Directory-Location`

`We Use (-C) for specific directory if we do not use (-C) then it automatically extract to current directory.`
