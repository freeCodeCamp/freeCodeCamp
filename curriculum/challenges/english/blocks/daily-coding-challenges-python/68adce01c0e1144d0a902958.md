---
id: 68adce01c0e1144d0a902958
title: "Challenge 26: IPv4 Validator"
challengeType: 29
dashedName: challenge-26
---

# --description--

Given a string, determine if it is a valid IPv4 Address. A valid IPv4 address consists of four integer numbers separated by dots (`.`). Each number must satisfy the following conditions:

- It is between 0 and 255 inclusive.
- It does not have leading zeros (e.g. 0 is allowed, 01 is not).
- Only numeric characters are allowed.

# --hints--

`is_valid_ipv4("192.168.1.1")` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_valid_ipv4("192.168.1.1"), True)`)
}})
```

`is_valid_ipv4("0.0.0.0")` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_valid_ipv4("0.0.0.0"), True)`)
}})
```

`is_valid_ipv4("255.01.50.111")` should return `False`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_valid_ipv4("255.01.50.111"), False)`)
}})
```

`is_valid_ipv4("255.00.50.111")` should return `False`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_valid_ipv4("255.00.50.111"), False)`)
}})
```

`is_valid_ipv4("256.101.50.115")` should return `False`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_valid_ipv4("256.101.50.115"), False)`)
}})
```

`is_valid_ipv4("192.168.101.")` should return `False`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_valid_ipv4("192.168.101."), False)`)
}})
```

`is_valid_ipv4("192168145213")` should return `False`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_valid_ipv4("192168145213"), False)`)
}})
```

# --seed--

## --seed-contents--

```py
def is_valid_ipv4(ipv4):

    return ipv4
```

# --solutions--

```py
def is_valid_ipv4(ipv4):
    parts = ipv4.split(".")    

    if len(parts) != 4:
        return False

    for part in parts:
        if not part.isdigit():
            return False

        num = int(part)
        if num < 0 or num > 255:
            return False

        if len(part) > 1 and part.startswith("0"):
            return False

    return True
```
