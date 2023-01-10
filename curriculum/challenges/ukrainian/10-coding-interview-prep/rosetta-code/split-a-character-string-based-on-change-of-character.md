---
id: 5a23c84252665b21eecc801d
title: Розділ рядка символів на основі зміни символу
challengeType: 1
forumTopicId: 302322
dashedName: split-a-character-string-based-on-change-of-character
---

# --description--

Розділіть рядок (символів) на рядки, розділені комами (плюс пропуски), на основі зміни символу (зліва направо). Пропуски повинні розглядатися як будь-які інші символи (за винятком ситуацій, коли їх важко чітко відобразити). Це стосується й ком. Наприклад, рядок:

<pre>
"gHHH5YY++///\\"
</pre>

повинен розділитися як:

<pre>
["g", "HHH", "5", "YY", "++", "///", "\\" ];
</pre>

# --hints--

`split` має бути функцією.

```js
assert(typeof split == 'function');
```

`split("hello")` має повернути масив.

```js
assert(Array.isArray(split('hello')));
```

`split("hello")` має повернути `["h", "e", "ll", "o"]`.

```js
assert.deepEqual(split('hello'), ['h', 'e', 'll', 'o']);
```

`split("commission")` має повернути `["c", "o", "mm", "i", "ss", "i", "o", "n"]`.

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

`split("ssss----====llloooo")` має повернути `["ssss", "----", "====", "lll", "oooo"]`.

```js
assert.deepEqual(split('ssss----====llloooo'), [
  'ssss',
  '----',
  '====',
  'lll',
  'oooo'
]);
```

`split("sssmmmaaammmaaat")` має повернути `["sss", "mmm", "aaa", "mmm", "aaa", "t"]`.

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

`split("gHHH5YY++///\\")` має повернути `["g", "HHH", "5", "YY", "++", "///", "\\"]`.

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
