---
id: 68f6587287ad1f4ad39b0c7e
title: "Challenge 92: Extension Extractor"
challengeType: 29
dashedName: challenge-92
---

# --description--

Given a string representing a filename, return the extension of the file.

- The extension is the part of the filename that comes after the last period (`.`).
- If the filename does not contain a period or ends with a period, return `"none"`.
- The extension should be returned as-is, preserving case.

# --hints--

`get_extension("document.txt")` should return `"txt"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(get_extension("document.txt"), "txt")`)
}})
```

`get_extension("README")` should return `"none"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(get_extension("README"), "none")`)
}})
```

`get_extension("image.PNG")` should return `"PNG"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(get_extension("image.PNG"), "PNG")`)
}})
```

`get_extension(".gitignore")` should return `"gitignore"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(get_extension(".gitignore"), "gitignore")`)
}})
```

`get_extension("archive.tar.gz")` should return `"gz"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(get_extension("archive.tar.gz"), "gz")`)
}})
```

`get_extension("final.draft.")` should return `"none"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(get_extension("final.draft."), "none")`)
}})
```

# --seed--

## --seed-contents--

```py
def get_extension(filename):

    return filename
```

# --solutions--

```py
def get_extension(filename):
    last_dot = filename.rfind('.')
    
    if last_dot == -1 or last_dot == len(filename) - 1:
        return "none"
    
    return filename[last_dot + 1:]
```
