---
id: 5a23c84252665b21eecc801d
title: Dividi una stringa di caratteri in base al cambiamento di carattere
challengeType: 1
forumTopicId: 302322
dashedName: split-a-character-string-based-on-change-of-character
---

# --description--

Split a (character) string into comma (plus a blank) delimited strings based on a change of character (left to right). Blanks should be treated as any other character (except they are problematic to display clearly). The same applies to commas. For instance, the string:

<pre>
"gHHH5YY++///\\"
</pre>

dovrebbe essere diviso come:

<pre>
["g", "HHH", "5", "YY", "++", "///", "\\" ];
</pre>

# --hints--

`split` dovrebbe essere una funzione.

```js
assert(typeof split == 'function');
```

`split("hello")` dovrebbe restituire un array.

```js
assert(Array.isArray(split('hello')));
```

`split("hello")` dovrebbe restituire `["h", "e", "ll", "o"]`.

```js
assert.deepEqual(split('hello'), ['h', 'e', 'll', 'o']);
```

`split("commission")` dovrebbe restituire `["c", "o", "mm", "i", "ss", "i", "o", "n"]`.

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

`split("ssss----====llloooo")` dovrebbe restituire `["ssss", "----", "====", "lll", "oooo"]`.

```js
assert.deepEqual(split('ssss----====llloooo'), [
  'ssss',
  '----',
  '====',
  'lll',
  'oooo'
]);
```

`split("sssmmmaaammmaaat")` dovrebbe restituire `["sss", "mmm", "aaa", "mmm", "aaa", "t"]`.

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

`split("gHHH5YY++///\\")` dovrebbe restituire `["g", "HHH", "5", "YY", "++", "///", "\\"]`.

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
