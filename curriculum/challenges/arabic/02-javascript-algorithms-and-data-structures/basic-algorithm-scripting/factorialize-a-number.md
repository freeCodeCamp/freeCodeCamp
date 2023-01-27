---
id: a302f7aae1aa3152a5b413bc
title: عامل الضرب للرَّقَم (Factorialize a Number)
challengeType: 1
forumTopicId: 16013
dashedName: factorialize-a-number
---

# --description--

أرجع عامل الضرب للرقم الصحيح الذي تم تزويدك به.

إذا كان الرَّقَم الصحيح مُمَثل بحرف `n`، عامل الضرب للرقم هو حاصل ضرب كل الأرقام الموجبة التي هي أصغر أو تساوي الرقم`n`.

عوامل الضرب غالبا ما يتم تمثيله كالترميز التالي `n!`

مثال: `5! = 1 * 2 * 3 * 4 * 5 = 120`

فقط الأرقام التي هي أكبر أو تساوي الصفر سيتم إدخالها في الوظيفة (function).

# --hints--

`factorialize(5)` يجب أن ينتج رقماً.

```js
assert(typeof factorialize(5) === 'number');
```

`factorialize(5)` يجب أن ينتج `120`.

```js
assert(factorialize(5) === 120);
```

`factorialize(10)` يجب أن ينتج `3628800`.

```js
assert(factorialize(10) === 3628800);
```

`factorialize(20)` يجب أن ينتج `2432902008176640000`.

```js
assert(factorialize(20) === 2432902008176640000);
```

`factorialize(0)` يجب أن ينتج `1`.

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
