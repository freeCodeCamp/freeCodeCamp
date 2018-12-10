---
title: Bash wget
---
## Bash wget

Wget is used to receive content from web servers using a terminal. Wget supports downloading via HTTP, HTTPS and FTP.

### Usage
```bash
wget [options] URL
```
Most used options:

* `-i FILE`, reads URLs from a given FILE.
* `-t X`, number of `X` attempts to download a file.
* `-c`, try to continue a partial download.
* `-N`, only downloads the target file if the file is newer than a file with he same name on your target drive.
* `-v`, display all informations (default).

### Example
Download the target file to the current directory
```Bash
wget http://example.com/folder/file
```

Try to download the target file up to 45 times
```Bash
wget -t 45 http://example.com/FOLDER/FILE
```

Continue to get a partially-downloaded file.
```Bash
wget -c http://example.com/FOLDER/FILE


#### More Information:
* Wikipedia: https://en.wikipedia.org/wiki/Wget
