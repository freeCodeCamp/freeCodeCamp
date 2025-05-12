---
id: 68216f040f957572e7c340c7
title: "Python Challenge 12: Decoded"
challengeType: 29
dashedName: python-challenge-12
---

# --description--

Description

# --hints--

`decode("Xlmw mw e wigvix qiwweki.", 4)` should return `This is a secret message.`

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(decode("Xlmw mw e wigvix qiwweki.", 4), "This is a secret message.")`)
}})
```

`decode("Byffi Qilfx!", 20)` should return `Hello World!`

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(decode("Byffi Qilfx!", 20), "Hello World!")`)
}})
```

`decode("Zqd xnt njzx?", -1)` should return `Are you okay?`

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(decode("Zqd xnt njzx?", -1), "Are you okay?")`)
}})
```

`decode("oannLxmnLjvy", 9)` should return `freeCodeCamp`

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(decode("oannLxmnLjvy", 9), "freeCodeCamp")`)
}})
```

# --seed--

## --seed-contents--

```py
def decode(message, shift):

    return message
```

# --solutions--

```py
def decode(message, shift):
    decoded_message = []
    for char in message:
        if char.isalpha():
            base = ord('a') if char.islower() else ord('A')
            new_char = chr((ord(char) - base - shift) % 26 + base)
            decoded_message.append(new_char)
        else:
            decoded_message.append(char)
    return ''.join(decoded_message)
```
