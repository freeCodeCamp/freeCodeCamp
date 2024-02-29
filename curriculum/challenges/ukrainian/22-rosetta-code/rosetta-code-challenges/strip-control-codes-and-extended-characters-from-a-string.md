---
id: 5a23c84252665b21eecc8036
title: Видалення керівних кодів та розширених символів з рядка
challengeType: 1
forumTopicId: 302327
dashedName: strip-control-codes-and-extended-characters-from-a-string
---

# --description--

Ваше завдання — видалити керівні коди та розширені символи з рядка. Розв’язок має продемонструвати, як в результаті отримати рядок з видаленими керівними кодами та розширеними символами. Керівні коди в ASCII мають десяткові коди від 0 до 31 та 127. На системі, заснованій на ASCII: якщо видалити керівні коди, то вихідний рядок міститиме всі свої символи в діапазоні від 32 до 126 десяткових з таблиці ASCII. На системі, не заснованій на ASCII: ми вважаємо символи, які не мають відповідного гліфа на таблиці ASCII (у межах діапазону ASCII від 32 до 126 десяткових), розширеними символами з метою цього завдання.

# --hints--

`strip` має бути функцією.

```js
assert(typeof strip == 'function');
```

`strip("abc")` має повернути рядок.

```js
assert(typeof strip('abc') == 'string');
```

`strip("\ba\x00b\n\rc\fd\xc3")` має повернути `"abcd"`.

```js
assert.equal(strip('\ba\x00b\n\rc\fd\xc3'), 'abcd');
```

`strip("\u0000\n abc\u00E9def\u007F")` має повернути `" abcdef"`.

```js
assert.equal(strip('\u0000\n abc\u00E9def\u007F'), ' abcdef');
```

`strip("a\n\tb\u2102d\u2147f")` має повернути `"abdf"`.

```js
assert.equal(strip('a\n\tb\u2102d\u2147f'), 'abdf');
```

`strip("Français.")` має повернути `"Franais."`.

```js
assert.equal(strip('Français.'), 'Franais.');
```

`strip("123\tabc\u0007DEF\u007F+-*/€æŧðłþ")` має повернути `"123abcDEF+-*/"`.

```js
assert.equal(strip('123\tabc\u0007DEF\u007F+-*/€æŧðłþ'), '123abcDEF+-*/');
```

# --seed--

## --seed-contents--

```js
function strip(s) {

}
```

# --solutions--

```js
function strip(s) {
  return s
    .split('')
    .filter(function(x) {
      var n = x.charCodeAt(0);

      return 31 < n && 127 > n;
    })
    .join('');
}
```
