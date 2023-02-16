---
id: 56533eb9ac21ba0edf2244b6
title: Sequenze di escape nelle stringhe
challengeType: 1
videoUrl: 'https://scrimba.com/c/cvmqRh6'
forumTopicId: 17567
dashedName: escape-sequences-in-strings
---

# --description--

Le virgolette non sono gli unici caratteri dei quali si può fare l'<dfn>escaping</dfn> all'interno di una stringa. Escape sequences allow you to use characters you may not otherwise be able to use in a string.

<table class='table table-striped'><thead><tr><th>Codice</th><th>Output</th></tr></thead><tbody><tr><td><code>\'</code></td><td>virgoletta singola</td></tr><tr><td><code>\"</code></td><td>doppia citazione</td></tr><tr><td><code>\\</code></td><td>barra rovesciata</td></tr><tr><td><code>\n</code></td><td>nuova riga</td></tr><tr><td><code>\t</code></td><td>tabulazione</td></tr><tr><td><code>\r</code></td><td>ritorno a capo</td></tr><tr><td><code>\b</code></td><td>delimitatore di parola</td></tr><tr><td><code>\f</code></td><td>avanzamento carta (form feed)</td></tr></tbody></table>

*Note that the backslash itself must be escaped in order to display as a backslash.*

# --instructions--

Assign the following three lines of text into the single variable `myStr` using escape sequences.

<blockquote>FirstLine<br>    \SecondLine<br>ThirdLine</blockquote>

You will need to use escape sequences to insert special characters correctly. You will also need to follow the spacing as it looks above, with no spaces between escape sequences or words.

**Note:** The indentation for `SecondLine` is achieved with the tab escape character, not spaces.

# --hints--

`myStr` should not contain any spaces

```js
assert(!/ /.test(myStr));
```

`myStr` should contain the strings `FirstLine`, `SecondLine` and `ThirdLine` (remember case sensitivity)

```js
assert(
  /FirstLine/.test(myStr) && /SecondLine/.test(myStr) && /ThirdLine/.test(myStr)
);
```

`FirstLine` should be followed by the newline character `\n`

```js
assert(/FirstLine\n/.test(myStr));
```

`myStr` should contain a tab character `\t` which follows a newline character

```js
assert(/\n\t/.test(myStr));
```

`SecondLine` should be preceded by the backslash character `\`

```js
assert(/\\SecondLine/.test(myStr));
```

There should be a newline character between `SecondLine` and `ThirdLine`

```js
assert(/SecondLine\nThirdLine/.test(myStr));
```

`myStr` should only contain characters shown in the instructions

```js
assert(myStr === 'FirstLine\n\t\\SecondLine\nThirdLine');
```

# --seed--

## --seed-contents--

```js
const myStr = ""; // Change this line
```

# --solutions--

```js
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
```
