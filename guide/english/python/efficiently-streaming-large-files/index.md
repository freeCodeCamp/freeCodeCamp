---
title: smart_open 1.7.1
---

## Python smart_open 1.7.1

smart_open is a python library for efficient streaming of large files from/to HDFS, S3, HTTP, or local files.
The simplest way to install `smart_open` is using `pip`

``` pip install smart_open ```

It is a good replacement for built-in open().
It does everything open() can, and falls back to native open whenever possible.

#### Why?

It can be a pain while working with large S3 files using boto and boto3 libraries.
`smart_open` builds on boto3 and is very simple to work with. 


``` python
import smart_open

with smart_open.smart_open('s3://tmp-bucket/myfile.txt') as f:
  lines = f.readlines()
  for line in lines:
    print line

```

`smart_open` is an open source software, maintained on [GitHub](https://github.com/RaRe-Technologies/smart_open)
