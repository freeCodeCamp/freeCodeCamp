---
id: 5a23c84252665b21eecc8036
title: Коди керування рядка і додаткові символи рядка
challengeType: 1
forumTopicId: 302327
dashedName: strip-control-codes-and-extended-characters-from-a-string
---

# --description--

Завдання у тому, щоб змінити коди управління і розширити символи у рядку. Рішення повинне показувати, як досягти кожен з наступних результатів: рядок з кодом управління і розширеними символами. У ASCII контрольні коди мають десяткові коди 0 до 31 і 127. На основі системи ASCII, якщо коди управління замінюються, то в результаті рядок може мати всі ці символи в діапазоні від 32 до 126 знаків після коми в таблиці ASCII. На основі системи non-ASCII, ми розглядаємо символи, що не мають відповідного знака у таблиці( у діапазоні з 32 до 126 десяткових символів) символи для цього завдання мають бути розширеними.

# --hints--

`strip` має бути функцією.

```js
assert(typeof strip == 'function');
```

`strip("abc")` повинне повернути рядок.

```js
assert(typeof strip('abc') == 'string');
```

`strip("\ba\x00b\n\rc\fd\xc3")` має повернути`"abcd"`.

```js
assert.equal(strip('\ba\x00b\n\rc\fd\xc3'), 'abcd');
```

`strip("\u0000\n abc\u00E9def\u007F")`має повернути`" abcdef"`.

```js
assert.equal(strip('\u0000\n abc\u00E9def\u007F'), ' abcdef');
```

`strip("a\n\tb\u2102d\u2147f")` має повернути`"abdf"`.

```js
assert.equal(strip('a\n\tb\u2102d\u2147f'), 'abdf');
```

`strip("Français.")` має повернути`"Franais."`.

```js
assert.equal(strip('Français.'), 'Franais.');
```

`strip("123\tabc\u0007DEF\u007F+-*/€æŧðłþ")` має повернути`"123abcDEF+-*/"`.

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
