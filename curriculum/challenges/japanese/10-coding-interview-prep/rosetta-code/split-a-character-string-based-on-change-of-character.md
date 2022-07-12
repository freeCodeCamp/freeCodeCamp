---
id: 5a23c84252665b21eecc801d
title: 文字の変化を基にして文字列を分割する
challengeType: 1
forumTopicId: 302322
dashedName: split-a-character-string-based-on-change-of-character
---

# --description--

文字の変化 (左から右) を基にして文字列を分割し、カンマ (+空白) で区切られた文字列とします。 空白は他の文字と同様に扱う必要があります (表示に問題がある場合を除く)。 同じことがカンマにも当てはまります。 例えば、文字列:

<pre>
"gHHH5YY++///\\"
</pre>

は、次のように分割します。

<pre>
["g", "HHH", "5", "YY", "++", "///", "\\" ];
</pre>

# --hints--

`split` は関数とします。

```js
assert(typeof split == 'function');
```

`split("hello")` は配列を返す必要があります。

```js
assert(Array.isArray(split('hello')));
```

`split("hello")` は `["h", "e", "ll", "o"]` を返す必要があります。

```js
assert.deepEqual(split('hello'), ['h', 'e', 'll', 'o']);
```

`split("commission")` は `["c", "o", "mm", "i", "ss", "i", "o", "n"]` を返す必要があります。

```js
assert.deepEqual(split('commission'), [
  'c',
  'o',
  'mm',
  'i',
  'ss',
  'i',
  'o',
  'n'
]);
```

`split("ssss----====llloooo")` は `["ssss", "----", "====", "lll", "oooo"]` を返す必要があります。

```js
assert.deepEqual(split('ssss----====llloooo'), [
  'ssss',
  '----',
  '====',
  'lll',
  'oooo'
]);
```

`split("sssmmmaaammmaaat")` は `["sss", "mmm", "aaa", "mmm", "aaa", "t"]` を返す必要があります。

```js
assert.deepEqual(split('sssmmmaaammmaaat'), [
  'sss',
  'mmm',
  'aaa',
  'mmm',
  'aaa',
  't'
]);
```

`split("gHHH5YY++///\\")` は `["g", "HHH", "5", "YY", "++", "///", "\\"]` を返す必要があります。

```js
assert.deepEqual(split('gHHH5YY++///\\'), [
  'g',
  'HHH',
  '5',
  'YY',
  '++',
  '///',
  '\\'
]);
```

# --seed--

## --seed-contents--

```js
function split(str) {

}
```

# --solutions--

```js
function split(str) {
  const concat = xs =>
    xs.length > 0
      ? (() => {
          const unit = typeof xs[0] === 'string' ? '' : [];
          return unit.concat.apply(unit, xs);
        })()
      : [];

  const group = xs => groupBy((a, b) => a === b, xs);

  const groupBy = (f, xs) => {
    const dct = xs.slice(1).reduce(
      (a, x) => {
        const h = a.active.length > 0 ? a.active[0] : undefined,
          blnGroup = h !== undefined && f(h, x);
        return {
          active: blnGroup ? a.active.concat([x]) : [x],
          sofar: blnGroup ? a.sofar : a.sofar.concat([a.active])
        };
      },
      {
        active: xs.length > 0 ? [xs[0]] : [],
        sofar: []
      }
    );
    return dct.sofar.concat(dct.active.length > 0 ? [dct.active] : []);
  };

  const map = (f, xs) => xs.map(f);

  const stringChars = s => s.split('');

  return map(concat, group(stringChars(str)));
}
```
