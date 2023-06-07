---
id: 56533eb9ac21ba0edf2244d0
title: Порівняння з оператором «дорівнює»
challengeType: 1
videoUrl: 'https://scrimba.com/c/cKyVMAL'
forumTopicId: 16784
dashedName: comparison-with-the-equality-operator
---

# --description--

У JavaScript існує багато <dfn>операторів порівняння</dfn>. Всі ці оператори повертають логічне значення `true` або `false`.

Основним є оператор «дорівнює» (`==`). Оператор «дорівнює» порівнює два значення та повертає `true`, якщо вони еквівалентні. В іншому випадку він повертає `false`. Зверніть увагу, що рівність відрізняється від присвоєння (`=`), яке присвоює значення праворуч від оператора до змінної зліва.

```js
function equalityTest(myVal) {
  if (myVal == 10) {
    return "Equal";
  }
  return "Not Equal";
}
```

Якщо `myVal` дорівнює `10`, то оператор «дорівнює» повертає `true`, тому код у фігурних дужках виконається і функція поверне `Equal`. В іншому випадку функція поверне `Not Equal`. Для того, щоб JavaScript порівняв два різні <dfn>типи даних</dfn> (наприклад, `numbers` та `strings`), потрібно конвертувати один тип в інший. Це називається приведенням типів. Після конвертації вони порівнюються наступним чином:

```js
1   ==  1  // true
1   ==  2  // false
1   == '1' // true
"3" ==  3  // true
```

# --instructions--

Додайте оператор «дорівнює» до зазначеного рядка, щоб функція повернула рядок `Equal`, якщо `val` дорівнює `12`.

# --hints--

`testEqual(10)` має повертати рядок `Not Equal`

```js
assert(testEqual(10) === 'Not Equal');
```

`testEqual(12)` має повертати рядок `Equal`

```js
assert(testEqual(12) === 'Equal');
```

`testEqual("12")` має повертати рядок `Equal`

```js
assert(testEqual('12') === 'Equal');
```

Ви повинні використати оператор `==`

```js
assert(code.match(/==/g) && !code.match(/===/g));
```

# --seed--

## --seed-contents--

```js
// Setup
function testEqual(val) {
  if (val) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);
```

# --solutions--

```js
function testEqual(val) {
  if (val == 12) {
    return "Equal";
  }
  return "Not Equal";
}
```
