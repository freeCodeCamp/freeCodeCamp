---
id: 5a23c84252665b21eecc7e78
title: Загальний FizzBuzz
challengeType: 1
forumTopicId: 302273
dashedName: general-fizzbuzz
---

# --description--

Напишіть узагальнену версію <a href="https://rosettacode.org/wiki/FizzBuzz" target="_blank" rel="noopener noreferrer nofollow">FizzBuzz</a>, яка працюватиме з будь-яким списком множників, а також слів.

В основному, це реалізація fizzbuzz, де правила гри надаються користувачу. Створіть функцію, щоб реалізувати таку програму. Функція повинна приймати два параметри.

Перший є масивом з правилами FizzBuzz. Наприклад, `[ [3, "Fizz"] , [5, "Buzz"] ]`.

Тобто, якщо число ділиться на 3, функція має повернути `Fizz`; якщо число ділиться на 5, функція має повернути `Buzz`. Якщо число діліться на обидва числа, рядки потрібно об’єднати за порядком, вказаним в масиві. У цьому випадку `FizzBuzz`, якщо число ділиться на 3 та 5.

Другий параметр — це число, для якого функція має повернути рядок як вказано вище.

# --hints--

`genFizzBuzz` має бути функцією.

```js
assert(typeof genFizzBuzz == 'function');
```

`genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 6)` має повернути рядок.

```js
assert(
  typeof genFizzBuzz(
    [
      [3, 'Fizz'],
      [5, 'Buzz']
    ],
    6
  ) == 'string'
);
```

`genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 6)` має повернути `"Fizz"`.

```js
assert.equal(
  genFizzBuzz(
    [
      [3, 'Fizz'],
      [5, 'Buzz']
    ],
    6
  ),
  'Fizz'
);
```

`genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 10)` має повернути `"Buzz"`.

```js
assert.equal(
  genFizzBuzz(
    [
      [3, 'Fizz'],
      [5, 'Buzz']
    ],
    10
  ),
  'Buzz'
);
```

`genFizzBuzz([[3, "Buzz"],[5, "Fizz"]], 12)` має повернути `"Buzz"`.

```js
assert.equal(
  genFizzBuzz(
    [
      [3, 'Buzz'],
      [5, 'Fizz']
    ],
    12
  ),
  'Buzz'
);
```

`genFizzBuzz([[3, "Buzz"],[5, "Fizz"]], 13)` має повернути `"13"`.

```js
assert.equal(
  genFizzBuzz(
    [
      [3, 'Buzz'],
      [5, 'Fizz']
    ],
    13
  ),
  '13'
);
```

`genFizzBuzz([[3, "Buzz"],[5, "Fizz"]], 15)` має повернути `"BuzzFizz"`.

```js
assert.equal(
  genFizzBuzz(
    [
      [3, 'Buzz'],
      [5, 'Fizz']
    ],
    15
  ),
  'BuzzFizz'
);
```

`genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 15)` має повернути `"FizzBuzz"`.

```js
assert.equal(
  genFizzBuzz(
    [
      [3, 'Fizz'],
      [5, 'Buzz']
    ],
    15
  ),
  'FizzBuzz'
);
```

`genFizzBuzz([[3, "Fizz"],[5, "Buzz"],[7, "Baxx"]], 105)` має повернути `"FizzBuzzBaxx"`.

```js
assert.equal(
  genFizzBuzz(
    [
      [3, 'Fizz'],
      [5, 'Buzz'],
      [7, 'Baxx']
    ],
    105
  ),
  'FizzBuzzBaxx'
);
```

# --seed--

## --seed-contents--

```js
function genFizzBuzz(rules, num) {

}
```

# --solutions--

```js
function genFizzBuzz(rules, num) {
  let res='';
  rules.forEach(function (e) {
    if(num % e[0] == 0)
      res+=e[1];
  })

  if(res==''){
    res=num.toString();
  }

  return res;
}
```
