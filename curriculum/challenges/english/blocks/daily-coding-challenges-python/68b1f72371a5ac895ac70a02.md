---
id: 68b1f72371a5ac895ac70a02
title: "Challenge 40: Photo Storage"
challengeType: 29
dashedName: challenge-40
---

# --description--

Given a photo size in megabytes (MB), and hard drive capacity in gigabytes (GB), return the number of photos the hard drive can store using the following constraints:

- 1 gigabyte equals 1000 megabytes.
- Return the number of whole photos the drive can store.

# --hints--

`number_of_photos(1, 1)` should return `1000`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(number_of_photos(1, 1), 1000)`)
}})
```

`number_of_photos(2, 1)` should return `500`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(number_of_photos(2, 1), 500)`)
}})
```

`number_of_photos(4, 256)` should return `64000`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(number_of_photos(4, 256), 64000)`)
}})
```

`number_of_photos(3.5, 750)` should return `214285`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(number_of_photos(3.5, 750), 214285)`)
}})
```

`number_of_photos(3.5, 5.5)` should return `1571`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(number_of_photos(3.5, 5.5), 1571)`)
}})
```

# --seed--

## --seed-contents--

```py
def number_of_photos(photo_size_mb, drive_size_gb):

    return photo_size_mb
```

# --solutions--

```py
def number_of_photos(photo_size_mb, drive_size_gb):
    drive_size_mb = drive_size_gb * 1000
    return drive_size_mb // photo_size_mb
```
