---
id: 68d30fc57588d97fd3027b30
title: "Challenge 79: Navigator"
challengeType: 29
dashedName: challenge-79
---

# --description--

On October 28, 1994, Netscape Navigator was released, helping millions explore the early web.

Given an array of browser commands you executed on Netscape Navigator, return the current page you are on after executing all the commands using the following rules:

- You always start on the `"Home"` page, which will not be included in the commands array.
- Valid commands are:
  - `"Visit Page"`: Where `"Page"` is the name of the page you are visiting. For example, `"Visit About"` takes you to the `"About"` page. When you visit a new page, make sure to discard any forward history you have.
  - `"Back"`: Takes you to the previous page in your history or stays on the current page if there isn't one.
  - `"Forward"`: Takes you forward in the history to the page you came from or stays on the current page if there isn't one.

For example, given `["Visit About Us", "Back", "Forward"]`, return `"About Us"`.

# --hints--

`navigate(["Visit About Us", "Back", "Forward"])` should return `"About Us"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(navigate(["Visit About Us", "Back", "Forward"]), "About Us")`)
}})
```

`navigate(["Forward"])` should return `"Home"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(navigate(["Forward"]), "Home")`)
}})
```

`navigate(["Back"])` should return `"Home"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(navigate(["Back"]), "Home")`)
}})
```

`navigate(["Visit About Us", "Visit Gallery"])` should return `"Gallery"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(navigate(["Visit About Us", "Visit Gallery"]), "Gallery")`)
}})
```

`navigate(["Visit About Us", "Visit Gallery", "Back", "Back"])` should return `"Home"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(navigate(["Visit About Us", "Visit Gallery", "Back", "Back"]), "Home")`)
}})
```

`navigate(["Visit About", "Visit Gallery", "Back", "Visit Contact", "Forward"])` should return `"Contact"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(navigate(["Visit About", "Visit Gallery", "Back", "Visit Contact", "Forward"]), "Contact")`)
}})
```

`navigate(["Visit About Us", "Visit Visit Us", "Forward", "Visit Contact Us", "Back"])` should return `"Visit Us"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(navigate(["Visit About Us", "Visit Visit Us", "Forward", "Visit Contact Us", "Back"]), "Visit Us")`)
}})
```

# --seed--

## --seed-contents--

```py
def navigate(commands):

    return commands
```

# --solutions--

```py
def navigate(commands):
    history = ["Home"]
    current_index = 0

    for command in commands:
        if command.startswith("Visit "):
            history = history[:current_index + 1]
            history.append(command[6:])
            current_index += 1
        elif command == "Back" and current_index > 0:
            current_index -= 1
        elif command == "Forward" and current_index < len(history) - 1:
            current_index += 1

    return history[current_index]
```
