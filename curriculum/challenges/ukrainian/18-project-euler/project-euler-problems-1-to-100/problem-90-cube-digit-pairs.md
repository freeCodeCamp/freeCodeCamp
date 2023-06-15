---
id: 5900f3c61000cf542c50fed9
title: 'Завдання 90: пари цифр на кубиках'
challengeType: 1
forumTopicId: 302207
dashedName: problem-90-cube-digit-pairs
---

# --description--

На кожній із шести граней куба написана інша цифра (від 0 до 9); те саме зроблено і з другим кубом. Розмістивши два кубики поруч у різних положеннях, ми можемо сформувати різноманітні двозначні числа.

Наприклад, можна сформувати квадратне число 64:

<img class="img-responsive center-block" alt="два куби: один з числом 6, інший з числом 4" src="https://cdn-media-1.freecodecamp.org/project-euler/cube-digit-pairs.png" style="background-color: white; padding: 10px;" />

Взагалі, ретельно вибираючи цифри на обох кубах, можна зобразити всі квадратні числа, які менші ніж сто: 01, 04, 09, 16, 25, 36, 49, 64 та 81.

Наприклад, можна вибрати {0, 5, 6, 7, 8, 9} на одному кубі та {1, 2, 3, 4, 8, 9} на іншому кубі.

However, for this problem we shall allow the 6 or 9 to be turned upside-down so that an arrangement like {0, 5, 6, 7, 8, 9} and {1, 2, 3, 4, 6, 7} allows for all nine square numbers to be displayed; otherwise it would be impossible to obtain 09.

In determining a distinct arrangement we are interested in the digits on each cube, not the order.

<div style="margin-left: 4em;">
  {1, 2, 3, 4, 5, 6} is equivalent to {3, 6, 4, 1, 2, 5}<br>
  {1, 2, 3, 4, 5, 6} is distinct from {1, 2, 3, 4, 5, 9}
</div>

But because we are allowing 6 and 9 to be reversed, the two distinct sets in the last example both represent the extended set {1, 2, 3, 4, 5, 6, 9} for the purpose of forming 2-digit numbers.

How many distinct arrangements of the two cubes allow for all of the square numbers to be displayed?

# --hints--

`cubeDigitPairs()` має повернути число.

```js
assert(typeof cubeDigitPairs() === 'number');
```

`cubeDigitPairs()` має повернути 1217.

```js
assert.strictEqual(cubeDigitPairs(), 1217);
```

# --seed--

## --seed-contents--

```js
function cubeDigitPairs() {

  return true;
}

cubeDigitPairs();
```

# --solutions--

```js
// solution required
```
