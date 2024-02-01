---
id: 594810f028c0303b75339ad1
title: Щасливі числа
challengeType: 1
forumTopicId: 302280
dashedName: happy-numbers
---

# --description--

A happy number is defined by the following process:

Починаючи з будь-якого додатного цілого числа, замініть число на суму квадратів цифр і повторіть дію, доки число не буде дорівнювати `1` (де воно залишиться), або воно нескінченно буде повторюватися у циклі, який не включає `1`. Ті числа, для яких цей процес закінчується `1` є щасливими, а ті, для яких процес не закінчуються `1` є нещасливими.

# --instructions--

Реалізуйте функцію, що повертає правильне значення, у разі якщо число — щасливе, якщо воно є хибним, не робить цього.

# --hints--

`happy` має бути функцією.

```js
assert(typeof happy === 'function');
```

`happy(1)` має повернути логічний тип.

```js
assert(typeof happy(1) === 'boolean');
```

`happy(1)` має повернути `true`.

```js
assert(happy(1));
```

`happy(2)` має повернути `false`.

```js
assert(!happy(2));
```

`happy(7)` має повернути `true`.

```js
assert(happy(7));
```

`happy(10)` має повернути `true`.

```js
assert(happy(10));
```

`happy(13)` має повернути `true`.

```js
assert(happy(13));
```

`happy(19)` має повернути `true`.

```js
assert(happy(19));
```

`happy(23)` має повернути `true`.

```js
assert(happy(23));
```

`happy(28)` має повернути `true`.

```js
assert(happy(28));
```

`happy(31)` має повернути `true`.

```js
assert(happy(31));
```

`happy(32)` має повернути `true`.

```js
assert(happy(32));
```

`happy(33)` має повернути `false`.

```js
assert(!happy(33));
```

# --seed--

## --seed-contents--

```js
function happy(number) {

}
```

# --solutions--

```js
function happy (number) {
  let m;
  let digit;
  const cycle = [];

  while (number !== 1 && cycle[number] !== true) {
    cycle[number] = true;
    m = 0;
    while (number > 0) {
      digit = number % 10;
      m += Math.pow(digit, 2);
      number = (number - digit) / 10;
    }
    number = m;
  }
  return (number === 1);
}
```
