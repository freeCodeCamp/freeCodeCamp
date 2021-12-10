---
id: 56533eb9ac21ba0edf2244b3
title: Конвертація градусів за Цельсієм у градуси за Фаренгейтом
challengeType: 1
forumTopicId: 16806
dashedName: convert-celsius-to-fahrenheit
---

# --description--

Алгоритм конвертації градусів за Цельсієм у градуси за Фаренгейтом, це температура за Цельсієм помножена на `9/5`, плюс `32`.

Ви отримуєте змінну `celsius`, що відповідає температурі за Цельсієм. Використовуйте вже визначену змінну `fahrenheit` і призначте їй температуру за Фаренгейтом, еквівалентну заданій температурі за Цельсієм. Використовуйте алгоритм запропонований вище для конвертації температури за Цельсієм у температуру за Фаренгейтом.

# --hints--

`convertToF(0)` має повернути число

```js
assert(typeof convertToF(0) === 'number');
```

`convertToF(-30)` має повертати значення `-22`

```js
assert(convertToF(-30) === -22);
```

`convertToF(-10)` має повертати значення `14`

```js
assert(convertToF(-10) === 14);
```

`convertToF(0)` має повертати значення `32`

```js
assert(convertToF(0) === 32);
```

`convertToF(20)` має повертати значення `68`

```js
assert(convertToF(20) === 68);
```

`convertToF(30)` має повертати значення `86`

```js
assert(convertToF(30) === 86);
```

# --seed--

## --seed-contents--

```js
function convertToF(celsius) {
  let fahrenheit;
  return fahrenheit;
}

convertToF(30);
```

# --solutions--

```js
function convertToF(celsius) {
  let fahrenheit = celsius * 9/5 + 32;

  return fahrenheit;
}

convertToF(30);
```
