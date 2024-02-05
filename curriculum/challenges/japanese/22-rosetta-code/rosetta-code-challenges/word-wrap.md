---
id: 594810f028c0303b75339ad4
title: ワードラップ
challengeType: 1
forumTopicId: 302344
dashedName: word-wrap
---

# --description--

Even today, with proportional fonts and complex layouts, there are still cases where you need to wrap text at a specified column. The basic task is to wrap a paragraph of text in a simple way.

# --instructions--

このテキストを任意の文字数でワードラップできる関数を記述してください。 例えば、80 文字でワードラップしたテキストは以下のようになります:

<pre>
Wrap text using a more sophisticated algorithm such as the Knuth and Plass TeX
algorithm. If your language provides this, you get easy extra credit, but you
must reference documentation indicating that the algorithm is something better
than a simple minimum length algorithm.
</pre>

# --hints--

wrap は関数とします。

```js
assert.equal(typeof wrap, 'function');
```

wrap は文字列を返す必要があります。

```js
assert.equal(typeof wrap('abc', 10), 'string');
```

wrap(80) は 4 行を返す必要があります。

```js
assert(wrapped80.split('\n').length === 4);
```

`wrap` 関数は期待されるテキストを返す必要があります。

```js
assert.equal(wrapped80.split('\n')[0], firstRow80);
```

wrap(42) は 7 行を返す必要があります。

```js
assert(wrapped42.split('\n').length === 7);
```

`wrap` 関数は期待されるテキストを返す必要があります。

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
