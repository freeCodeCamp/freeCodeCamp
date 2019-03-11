---
title: Create a dummy file with a specific size
---

## How to create dummy files with a specific size using the "dd" command:

The "dd" command can be used to create a file of a specific size. This is useful if you would like to test download speeds, or any other tests, and need a file of a specific size.

```
dd if=/dev/zero of=file_name.txt bs=1024k count=10
```

This will create a file of 1MB called file_name.txt.

bs is your byte size and count represent the number of blocks. An easy way to look at is 1024K X 10.

Here is an even simpler way to create a 1MB file:

```
dd if=/dev/zero of=file_name.txt bs=1MB count=1
```
