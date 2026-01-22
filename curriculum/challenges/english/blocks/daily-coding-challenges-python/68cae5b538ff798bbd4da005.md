---
id: 68cae5b538ff798bbd4da005
title: "Challenge 67: Email Validator"
challengeType: 29
dashedName: challenge-67
---

# --description--

Given a string, determine if it is a valid email address using the following constraints:

- It must contain exactly one `@` symbol.
- The local part (before the `@`):
  - Can only contain letters (`a-z`, `A-Z`), digits (`0-9`), dots (`.`), underscores (`_`), or hyphens (`-`).
  - Cannot start or end with a dot.
- The domain part (after the `@`):
  - Must contain at least one dot.
  - Must end with a dot followed by at least two letters.
- Neither the local or domain part can have two dots in a row.

# --hints--

`validate("a@b.cd")` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(validate("a@b.cd"), True)`)
}})
```

`validate("hell.-w.rld@example.com")` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(validate("hell.-w.rld@example.com"), True)`)
}})
```

`validate(".b@sh.rc")` should return `False`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(validate(".b@sh.rc"), False)`)
}})
```

`validate("example@test.c0")` should return `False`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(validate("example@test.c0"), False)`)
}})
```

`validate("freecodecamp.org")` should return `False`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(validate("freecodecamp.org"), False)`)
}})
```

`validate("develop.ment_user@c0D!NG.R.CKS")` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(validate("develop.ment_user@c0D!NG.R.CKS"), True)`)
}})
```

`validate("hello.@wo.rld")` should return `False`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(validate("hello.@wo.rld"), False)`)
}})
```

`validate("hello@world..com")` should return `False`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(validate("hello@world..com"), False)`)
}})
```

`validate("develop..ment_user@c0D!NG.R.CKS")` should return `False`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(validate("develop..ment_user@c0D!NG.R.CKS"), False)`)
}})
```

`validate("git@commit@push.io")` should return `False`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(validate("git@commit@push.io"), False)`)
}})
```

# --seed--

## --seed-contents--

```py
def validate(email):

    return email
```

# --solutions--

```py
import re
def validate(email):
    if '..' in email:
        return False

    parts = email.split('@')
    if len(parts) != 2:
        return False

    local, domain = parts

    if local.startswith('.') or local.endswith('.'):
        return False
    if not re.match(r'^[a-zA-Z0-9._-]+$', local):
        return False

    if '.' not in domain:
        return False

    tld = domain.split('.')[-1]
    if len(tld) < 2 or not tld.isalpha():
        return False

    return True
```
