---
id: aaa48de84e1ecc7c742e1124
title: Створіть перевірку паліндрома
challengeType: 5
forumTopicId: 16004
dashedName: build-a-palindrome-checker
---

# --description--

Поверніть `true`, якщо заданий рядок є паліндромом. В іншому випадку, поверніть `false`.

<dfn>Паліндром</dfn> – це слово чи речення, що однаково пишеться в обох напрямках (зліва направо та справа наліво), незважаючи на розділові знаки, велику/малу літеру чи пробіли.

**Примітка:** вам потрібно прибрати **всі неалфавітні символи** (розділові знаки, пробіли та символи) і написати весь текст одинаково (великими або малими літерами) для перевірки паліндромів.

Ми будемо передавати рядки з різними форматами, наприклад `racecar`, `RaceCar` та `race CAR` серед інших.

Ми також будемо передавати рядки з спеціальними символами, наприклад `2A3*3a2`, `2A3 3a2` та `2_A3*3#A2`.

# --hints--

`palindrome("eye")` повинен повертати булеве значення.

```js
assert(typeof palindrome('eye') === 'boolean');
```

`palindrome("eye")` повинен повертати `true`.

```js
assert(palindrome('eye') === true);
```

`palindrome("_eye")` повинен повертати `true`.

```js
assert(palindrome('_eye') === true);
```

`palindrome("race car")` повинен повертати `true`.

```js
assert(palindrome('race car') === true);
```

`palindrome("not a palindrome")` повинен повертати `false`.

```js
assert(palindrome('not a palindrome') === false);
```

`palindrome("A man, a plan, a canal. Panama")` повинен повертати `true`.

```js
assert(palindrome('A man, a plan, a canal. Panama') === true);
```

`palindrome("never odd or even")` повинен повертати `true`.

```js
assert(palindrome('never odd or even') === true);
```

`palindrome("nope")` повинен повертати `false`.

```js
assert(palindrome('nope') === false);
```

`palindrome("almostomla")` повинен повертати `false`.

```js
assert(palindrome('almostomla') === false);
```

`palindrome("My age is 0, 0 si ega ym.")` повинен повертати `true`.

```js
assert(palindrome('My age is 0, 0 si ega ym.') === true);
```

`palindrome("1 eye for of 1 eye.")` повинен повертати `false`.

```js
assert(palindrome('1 eye for of 1 eye.') === false);
```

`palindrome("0_0 (: /-\ :) 0-0")` повинен повертати `true`.

```js
assert(palindrome('0_0 (: /- :) 0-0') === true);
```

`palindrome("five|\_/|four")` повинен повертати `false`.

```js
assert(palindrome('five|_/|four') === false);
```

# --seed--

## --seed-contents--

```js
function palindrome(str) {
  return true;
}

palindrome("eye");
```

# --solutions--

```js
function palindrome(str) {
  var string = str.toLowerCase().split(/[^A-Za-z0-9]/gi).join('');
  var aux = string.split('');
  if (aux.join('') === aux.reverse().join('')){
    return true;
  }

  return false;
}
```
