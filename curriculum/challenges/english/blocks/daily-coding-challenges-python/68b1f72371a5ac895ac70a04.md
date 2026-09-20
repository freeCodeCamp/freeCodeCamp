---
id: 68b1f72371a5ac895ac70a04
title: "Challenge 41: File Storage"
challengeType: 29
dashedName: challenge-41
---

# --description--

Given a file size, a unit for the file size, and hard drive capacity in gigabytes (GB), return the number of files the hard drive can store using the following constraints:

- The unit for the file size can be bytes (`"B"`), kilobytes (`"KB"`), or megabytes (`"MB"`).
- Return the number of whole files the drive can fit.
- Use the following conversions:

| Unit | Equivalent |
|:----:|:----------:|
| 1 B  |   1 B      |
| 1 KB |   1000 B   |
| 1 MB |   1000 KB  |
| 1 GB |   1000 MB  |

For example, given `500`, `"KB"`, and `1` as arguments, determine how many 500 KB files can fit on a 1 GB hard drive.

# --hints--

`number_of_files(500, "KB", 1)` should return `2000`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(number_of_files(500, "KB", 1), 2000)`)
}})
```

`number_of_files(50000, "B", 1)` should return `20000`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(number_of_files(50000, "B", 1), 20000)`)
}})
```

`number_of_files(5, "MB", 1)` should return `200`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(number_of_files(5, "MB", 1), 200)`)
}})
```

`number_of_files(4096, "B", 1.5)` should return `366210`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(number_of_files(4096, "B", 1.5), 366210)`)
}})
```

`number_of_files(220.5, "KB", 100)` should return `453514`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(number_of_files(220.5, "KB", 100), 453514)`)
}})
```

`number_of_files(4.5, "MB", 750)` should return `166666`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(number_of_files(4.5, "MB", 750), 166666)`)
}})
```

# --seed--

## --seed-contents--

```py
def number_of_files(file_size, file_unit, drive_size_gb):

    return file_size
```

# --solutions--

```py
def number_of_files(file_size, file_unit, drive_size_gb):
    drive_size_bytes = drive_size_gb * 1000 * 1000 * 1000

    if file_unit == "B":
        file_size_bytes = file_size
    elif file_unit == "KB":
        file_size_bytes = file_size * 1000
    else:
        file_size_bytes = file_size * 1000 * 1000

    return int(drive_size_bytes // file_size_bytes)
```
