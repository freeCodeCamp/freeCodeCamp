---
id: 587d7dbb367417b2b2512bab
title: Use Capture Groups to Search and Replace
challengeType: 1
forumTopicId: 301368
dashedName: use-capture-groups-to-search-and-replace
---

# --description--

Searching is useful. However, you can make searching even more powerful when it also changes (or replaces) the text you match.

You can search and replace text in a string using `.replace()` on a string. The inputs for `.replace()` is first the regex pattern you want to search for. The second parameter is the string to replace the match or a function to do something.

```js
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");
```

The `replace` call would return the string `The sky is blue.`.

You can also access capture groups in the replacement string with dollar signs (`$`).

```js
"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
```

The `replace` call would return the string `Camp Code`.

# --instructions--

Write a regex `fixRegex` using three capture groups that will search for each word in the string `one two three`. Then update the `replaceText` variable to replace `one two three` with the string `three two one` and assign the result to the `result` variable. Make sure you are utilizing capture groups in the replacement string using the dollar sign (`$`) syntax.

# --hints--

You should use `.replace()` to search and replace.

```js
assert(__helpers.removeJSComments(code).match(/\.replace\(.*\)/));
```

Your regex should change the string `one two three` to the string `three two one`

```js
assert(result === 'three two one');
```

You should not change the last line.

```js
assert(__helpers.removeJSComments(code).match(/result\s*=\s*str\.replace\(.*?\)/));
```

`fixRegex` should use at least three capture groups.

```js
assert(new RegExp(fixRegex.source + '|').exec('').length - 1 >= 3);
```

`replaceText` should use parenthesized submatch string(s) (i.e. the nth parenthesized submatch string, $n, corresponds to the nth capture group).

```js
{
  const re = /(\$\d{1,2})+(?:[\D]|\b)/g;
  assert(replaceText.match(re).length >= 3);
}
```

# --seed--

## --seed-contents--

```js
let str = "one two three";
let fixRegex = /change/; // Change this line
let replaceText = ""; // Change this line
let result = str.replace(fixRegex, replaceText);
```

# --solutions--

```js
let str = "one two three";
let fixRegex = /(\w+) (\w+) (\w+)/g; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result = str.replace(fixRegex, replaceText);
```
