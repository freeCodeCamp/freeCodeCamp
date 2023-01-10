---
id: 596fda99c69f779975a1b67d
title: Кількість входжень підрядка
challengeType: 1
forumTopicId: 302237
dashedName: count-occurrences-of-a-substring
---

# --description--

Створіть функцію або покажіть вбудовану функцію, щоб порахувати кількість входжень підрядка, що не перекриваються всередині рядка.

Функція має приймати два аргументи:

<ul>
  <li>перший аргумент, в якому рядок для пошуку, і</li>
  <li>другий підрядок, який шукають.</li>
</ul>

Вона має повертати ціле число.

Відповідність повинна дати найбільшу кількість співпадінь, які не перекриваються.

Загалом, це означає співпадіння з ліва на право або з права на ліво.

# --hints--

`countSubstring` має бути функцією.

```js
assert(typeof countSubstring === 'function');
```

`countSubstring("the three truths", "th")` має повертати `3`.

```js
assert.equal(countSubstring(testCases[0], searchString[0]), results[0]);
```

`countSubstring("ababababab", "abab")` має повертати `2`.

```js
assert.equal(countSubstring(testCases[1], searchString[1]), results[1]);
```

`countSubstring("abaabba*bbaba*bbab", "a*b")` має повертати `2`.

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
