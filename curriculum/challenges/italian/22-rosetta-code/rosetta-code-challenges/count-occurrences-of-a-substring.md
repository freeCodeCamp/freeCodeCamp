---
id: 596fda99c69f779975a1b67d
title: Contare le occorrenze di una sottostringa
challengeType: 1
forumTopicId: 302237
dashedName: count-occurrences-of-a-substring
---

# --description--

Create a function, or show a built-in function, to count the number of non-overlapping occurrences of a substring inside a string.

La funzione dovrebbe prendere due argomenti:

<ul>
  <li>the first argument being the string to search, and</li>
  <li>il secondo la sotto-stringa da trovare.</li>
</ul>

Dovrebbe restituire un numero intero.

La ricerca dovrebbe produrre il maggior numero di sottostringhe non sovrapposte.

In generale, questo significa essenzialmente cercare da sinistra a destra o da destra a sinistra.

# --hints--

`countSubstring` dovrebbe essere una funzione.

```js
assert(typeof countSubstring === 'function');
```

`countSubstring("the three truths", "th")` dovrebbe restituire `3`.

```js
assert.equal(countSubstring(testCases[0], searchString[0]), results[0]);
```

`countSubstring("ababababab", "abab")` dovrebbe restituire `2`.

```js
assert.equal(countSubstring(testCases[1], searchString[1]), results[1]);
```

`countSubstring("abaabba*bbaba*bbab", "a*b")` dovrebbe restituire `2`.

```js
assert.equal(countSubstring(testCases[2], searchString[2]), results[2]);
```

# --seed--

## --after-user-code--

```js
const testCases = ['the three truths', 'ababababab', 'abaabba*bbaba*bbab'];
const searchString = ['th', 'abab', 'a*b'];
const results = [3, 2, 2];
```

## --seed-contents--

```js
function countSubstring(str, subStr) {

  return true;
}
```

# --solutions--

```js
function countSubstring(str, subStr) {
  const escapedSubStr = subStr.replace(/[.+*?^$[\]{}()|/]/g, '\\$&');
  const matches = str.match(new RegExp(escapedSubStr, 'g'));
  return matches ? matches.length : 0;
}
```
