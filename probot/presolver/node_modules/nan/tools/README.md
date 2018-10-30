1to2 naively converts source code files from NAN 1 to NAN 2. There will be erroneous conversions,
false positives and missed opportunities. The input files are rewritten in place. Make sure that
you have backups. You will have to manually review the changes afterwards and do some touchups.

```sh
$ tools/1to2.js

  Usage: 1to2 [options] <file ...>

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
```
