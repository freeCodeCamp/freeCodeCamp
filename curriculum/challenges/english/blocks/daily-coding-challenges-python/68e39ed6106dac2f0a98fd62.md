---
id: 68e39ed6106dac2f0a98fd62
title: "Challenge 80: Email Sorter"
challengeType: 29
dashedName: challenge-80
---

# --description--

On October 29, 1971, the first email ever was sent, introducing the `username@domain` format we still use. Now, there are billions of email addresses.

In this challenge, you are given a list of email addresses and need to sort them alphabetically by domain name first (the part after the `@`), and username second (the part before the `@`).

- Sorting should be case-insensitive.
- If more than one email has the same domain, sort them by their username.
- Return an array of the sorted addresses.
- Returned addresses should retain their original case.

For example, given `["jill@mail.com", "john@example.com", "jane@example.com"]`, return `["jane@example.com", "john@example.com", "jill@mail.com"]`.

# --hints--

`sort(["jill@mail.com", "john@example.com", "jane@example.com"])` should return `["jane@example.com", "john@example.com", "jill@mail.com"]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(sort(["jill@mail.com", "john@example.com", "jane@example.com"]), ["jane@example.com", "john@example.com", "jill@mail.com"])`)
}})
```

`sort(["bob@mail.com", "alice@zoo.com", "carol@mail.com"])` should return `["bob@mail.com", "carol@mail.com", "alice@zoo.com"]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(sort(["bob@mail.com", "alice@zoo.com", "carol@mail.com"]), ["bob@mail.com", "carol@mail.com", "alice@zoo.com"])`)
}})
```

`sort(["user@z.com", "user@y.com", "user@x.com"])` should return `["user@x.com", "user@y.com", "user@z.com"]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(sort(["user@z.com", "user@y.com", "user@x.com"]), ["user@x.com", "user@y.com", "user@z.com"])`)
}})
```

`sort(["sam@MAIL.com", "amy@mail.COM", "bob@Mail.com"])` should return `["amy@mail.COM", "bob@Mail.com", "sam@MAIL.com"]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(sort(["sam@MAIL.com", "amy@mail.COM", "bob@Mail.com"]), ["amy@mail.COM", "bob@Mail.com", "sam@MAIL.com"])`)
}})
```

`sort(["simon@beta.com", "sammy@alpha.com", "Sarah@Alpha.com", "SAM@ALPHA.com", "Simone@Beta.com", "sara@alpha.com"])` should return `["SAM@ALPHA.com", "sammy@alpha.com", "sara@alpha.com", "Sarah@Alpha.com", "simon@beta.com", "Simone@Beta.com"]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(sort(["simon@beta.com", "sammy@alpha.com", "Sarah@Alpha.com", "SAM@ALPHA.com", "Simone@Beta.com", "sara@alpha.com"]), ["SAM@ALPHA.com", "sammy@alpha.com", "sara@alpha.com", "Sarah@Alpha.com", "simon@beta.com", "Simone@Beta.com"])`)
}})
```

# --seed--

## --seed-contents--

```py
def sort(emails):

    return emails
```

# --solutions--

```py
def sort(emails):
    return sorted(
        emails,
        key=lambda email: (email.split('@')[1].lower(), email.split('@')[0].lower())
    )
```
