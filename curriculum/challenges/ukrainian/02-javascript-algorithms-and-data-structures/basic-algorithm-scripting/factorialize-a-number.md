---
id: a302f7aae1aa3152a5b413bc
title: Факторизація числа
challengeType: 1
forumTopicId: 16013
dashedName: factorialize-a-number
---

# --description--

Поверніть факторіал поданого цілого числа.

Якщо ціле число позначається літерою `n`, то факторіал – це добуток усіх додатних цілих чисел, менших або рівних `n`.

Факторіали часто зображаються короткими позначеннями `n!`

Наприклад: `5! = 1 * 2 * 3 * 4 * 5 = 120`

Функції будуть задані тільки ті цілі числа, які більші або дорівнюють нулю.

# --hints--

`factorialize(5)` має повертати число.

```js
assert(typeof factorialize(5) === 'number');
```

`factorialize(5)` має повертати `120`.

```js
assert(factorialize(5) === 120);
```

`factorialize(10)` має повертати `3628800`.

```js
assert(factorialize(10) === 3628800);
```

`factorialize(20)` має повертати `2432902008176640000`.

```js
assert(factorialize(20) === 2432902008176640000);
```

`factorialize(0)` має повертати `1`.

```js
assert(factorialize(0) === 1);
```

# --seed--

## --seed-contents--

```js
function factorialize(num) {
  return num;
}

factorialize(5);
```

# --solutions--

```js
function factorialize(num) {
  return num < 1 ? 1 : num * factorialize(num - 1);
}

factorialize(5);
```
