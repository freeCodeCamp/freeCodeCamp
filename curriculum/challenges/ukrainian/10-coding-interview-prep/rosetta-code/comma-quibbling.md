---
id: 596e414344c3b2872167f0fe
title: Comma quibbling (створення рядків значень розділених комою)
challengeType: 1
forumTopicId: 302234
dashedName: comma-quibbling
---

# --description--

<a href="https://rosettacode.org/wiki/Comma_quibbling" target="_blank" rel="noopener noreferrer nofollow">Comma quibbling</a> is a task originally set by Eric Lippert in his blog.

# --instructions--

Напишіть функцію для генерації вихідного рядка, який є об'єднанням вхідних слів з списку/послідовності, де:

<ol>
  <li>Введення без слів повертає вихідний рядок лише з двох дужок (<code>"{}"</code>)</li>
  <li>Введення лише одного слова, наприклад <code>["ABC"]</code>, повертає вихідний рядок з слова всередині двох дужок, наприклад <code>"{ABC}"</code></li>
  <li>Введення двох слів, наприклад <code>["ABC", "DEF"]</code>, повертає вихідний рядок з двох слів всередині двох дужок з розділяючим словом <code>" and "</code>, наприклад <code>"{ABC and DEF}"</code></li>
  <li>Введення трьох і більше слів, наприклад <code>["ABC", "DEF", "G", "H"]</code>, повертає вихідний рядок з усіх слів, крім останнього, розділеного на <code>", "</code>, а останнє слово розділене допоможіним <code>" and "</code> і всіма дужками; наприклад <code>"{ABC, DEF, G and H}"</code></li>
</ol>

Перевірте вашу функцію з наступною серією вхідних даних, показуючи ваш вихідний результат тут на сторінці:

<ul>
  <li>[] # (Без вхідних слів).</li>
  <li>["ABC"]</li>
  <li>["ABC", "DEF"]</li>
  <li>["ABC", "DEF", "G", "H"]</li>
</ul>

**Зверніть увагу:** Припустіть, що слова не є порожніми рядками у верхньому регістрі для цього завдання.

# --hints--

`quibble` має бути функцією.

```js
assert(typeof quibble === 'function');
```

Функція `quibble(["ABC"])` має повернути рядок.

```js
assert(typeof quibble(['ABC']) === 'string');
```

Функція `quibble([])` має повернути "{}".

```js
assert.equal(quibble(testCases[0]), results[0]);
```

`quibble(["ABC"])` should return `"{ABC}"`.

```js
assert.equal(quibble(testCases[1]), results[1]);
```

`quibble(["ABC", "DEF"])` should return `"{ABC and DEF}"`.

```js
assert.equal(quibble(testCases[2]), results[2]);
```

`quibble(["ABC", "DEF", "G", "H"])` should return `"{ABC, DEF, G and H}"`.

```js
assert.equal(quibble(testCases[3]), results[3]);
```

# --seed--

## --after-user-code--

```js
const testCases = [[], ["ABC"], ["ABC", "DEF"], ["ABC", "DEF", "G", "H"]];
const results = ["{}", "{ABC}", "{ABC and DEF}", "{ABC, DEF, G and H}"];
```

## --seed-contents--

```js
function quibble(words) {

  return true;
}
```

# --solutions--

```js
function quibble(words) {
  return "{" +
    words.slice(0, words.length - 1).join(", ") +
   (words.length > 1 ? " and " : "") +
   (words[words.length - 1] || '') +
  "}";
}
```
