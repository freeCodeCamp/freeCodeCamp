---
id: 6925e2068081f40f549ced1b
title: "Challenge 137: Snowflake Generator"
challengeType: 29
dashedName: challenge-137
---

# --description--

Given a multi-line string that uses newline characters (`\n`) to represent a line break, return a new string where each line is mirrored horizontally and attached to the end of the original line.

- Mirror a line by reversing all of its characters, including spaces.

For example, given `"* \n *\n* "`, which logs to the console as:

```sh
* 
 *
* 
```

Return `"*  *\n ** \n*  *"`, which logs to the console as:

```sh
*  *
 ** 
*  *
```

Take careful note of the whitespaces in the given and returned strings. Be sure not to trim any of them.

# --hints--

`generate_snowflake("* \n *\n* ")` should return `"*  *\n ** \n*  *"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(generate_snowflake("* \\n *\\n* "), "*  *\\n ** \\n*  *")`)
}})
```

`generate_snowflake("X=~")` should return `"X=~~=X"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(generate_snowflake("X=~"), "X=~~=X")`)
}})
```

`generate_snowflake(" X  \n  v \nX--=\n  ^ \n X  ")` should return `" X    X \n  v  v  \nX--==--X\n  ^  ^  \n X    X "`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(generate_snowflake(" X  \\n  v \\nX--=\\n  ^ \\n X  "), " X    X \\n  v  v  \\nX--==--X\\n  ^  ^  \\n X    X ")`)
}})
```

`generate_snowflake("*   *\n * * \n* * *\n * * \n*   *")` should return `"*   **   *\n * *  * * \n* * ** * *\n * *  * * \n*   **   *"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(generate_snowflake("*   *\\n * * \\n* * *\\n * * \\n*   *"), "*   **   *\\n * *  * * \\n* * ** * *\\n * *  * * \\n*   **   *")`)
}})
```

`generate_snowflake("*  -\n * -\n*  -")` should return `"*  --  *\n * -- * \n*  --  *"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(generate_snowflake("*  -\\n * -\\n*  -"), "*  --  *\\n * -- * \\n*  --  *")`)
}})
```

# --seed--

## --seed-contents--

```py
def generate_snowflake(crystals):

    return crystals
```

# --solutions--

```py
def generate_snowflake(crystals):
    lines = crystals.split("\n")
    mirrored = []

    for line in lines:
        reversed_line = line[::-1]
        mirrored.append(line + reversed_line)

    return "\n".join(mirrored)
```
