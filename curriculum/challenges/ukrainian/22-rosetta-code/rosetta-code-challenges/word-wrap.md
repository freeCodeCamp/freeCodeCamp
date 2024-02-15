---
id: 594810f028c0303b75339ad4
title: Перенесення слів
challengeType: 1
forumTopicId: 302344
dashedName: word-wrap
---

# --description--

Навіть сьогодні, коли існують пропорційні шрифти та складні макети, зустрічаються випадки, що потрібно розмістити текст у вказаному стовпчику. Основне завдання — розмістити певний абзац тексту в межах стовпчика простим способом.

# --instructions--

Напишіть функцію, яка може перенести даний текст з будь-якою кількістю символів. Наприклад, ось текст, рядок якого містить до 80 символів:

<pre>
Wrap text using a more sophisticated algorithm such as the Knuth and Plass TeX
algorithm. If your language provides this, you get easy extra credit, but you
must reference documentation indicating that the algorithm is something better
than a simple minimum length algorithm.
</pre>

# --hints--

`wrap` має бути функцією.

```js
assert.equal(typeof wrap, 'function');
```

`wrap` має повернути рядок.

```js
assert.equal(typeof wrap('abc', 10), 'string');
```

`wrap(80)` має повернути 4 рядки.

```js
assert(wrapped80.split('\n').length === 4);
```

Функція `wrap` має повернути очікуваний текст.

```js
assert.equal(wrapped80.split('\n')[0], firstRow80);
```

`wrap(42)` має повернути 7 рядків.

```js
assert(wrapped42.split('\n').length === 7);
```

Функція `wrap` має повернути очікуваний текст.

```js
assert.equal(wrapped42.split('\n')[0], firstRow42);
```

# --seed--

## --after-user-code--

```js
const text =
`Wrap text using a more sophisticated algorithm such as the Knuth and Plass TeX algorithm.
If your language provides this, you get easy extra credit,
but you ''must reference documentation'' indicating that the algorithm
is something better than a simple minimum length algorithm.`;

const wrapped80 = wrap(text, 80);
const wrapped42 = wrap(text, 42);

const firstRow80 =
    'Wrap text using a more sophisticated algorithm such as the Knuth and Plass TeX';

const firstRow42 = 'Wrap text using a more sophisticated';
```

## --seed-contents--

```js
function wrap(text, limit) {
  return text;
}
```

# --solutions--

```js
function wrap(text, limit) {
  const noNewlines = text.replace('\n', '');
  if (noNewlines.length > limit) {
    // find the last space within limit
    const edge = noNewlines.slice(0, limit).lastIndexOf(' ');
    if (edge > 0) {
      const line = noNewlines.slice(0, edge);
      const remainder = noNewlines.slice(edge + 1);
      return line + '\n' + wrap(remainder, limit);
    }
  }
  return text;
}
```
