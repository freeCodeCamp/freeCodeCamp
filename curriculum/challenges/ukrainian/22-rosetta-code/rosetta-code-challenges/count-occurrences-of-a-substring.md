---
id: 596fda99c69f779975a1b67d
title: Частотність підрядка
challengeType: 1
forumTopicId: 302237
dashedName: count-occurrences-of-a-substring
---

# --description--

Створіть функцію або покажіть вбудовану функцію, щоб підрахувати частотність підрядка (який не перетинається) в середині рядка.

Функція має приймати два аргументи:

<ul>
  <li>перший аргумент є рядком, де відбудеться пошук, та</li>
  <li>другий аргумент є підрядком, який шукатимуть.</li>
</ul>

Вона має повернути ціле число.

Сумісність має відповідати найбільшій кількості збігів, які не перетинаються.

Загалом це означає збіги зліва направо або справа наліво.

# --hints--

`countSubstring` має бути функцією.

```js
assert(typeof countSubstring === 'function');
```

`countSubstring("the three truths", "th")` має повернути `3`.

```js
assert.equal(countSubstring(testCases[0], searchString[0]), results[0]);
```

`countSubstring("ababababab", "abab")` має повернути `2`.

```js
assert.equal(countSubstring(testCases[1], searchString[1]), results[1]);
```

`countSubstring("abaabba*bbaba*bbab", "a*b")` має повернути `2`.

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
