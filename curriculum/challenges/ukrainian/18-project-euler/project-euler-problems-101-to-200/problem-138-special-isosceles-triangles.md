---
id: 5900f3f61000cf542c50ff09
title: 'Завдання 138: особливі рівнобедрені трикутники'
challengeType: 1
forumTopicId: 301766
dashedName: problem-138-special-isosceles-triangles
---

# --description--

Розглянемо рівнобедрений трикутник з довжиною основи $b = 16$ та катетами $L = 17$.

<img class="img-responsive center-block" alt="рівнобедрений трикутник з ребрами: два ребра з однаковою довжиною L і основою трикутника b, та висотою трикутника h від основи трикутника до кута між ребрами L" src="https://cdn.freecodecamp.org/curriculum/project-euler/special-isosceles-triangles.png" style="background-color: white; padding: 10px;" />

За теоремою Піфагора бачимо, що висота трикутника $h = \sqrt{{17}^2 − 8^2} = 15$, що менше на один від довжини основи.

За умови $b = 272$ та $L = 305$ ми отримаємо $h = 273$, що більше на один від довжини основи та є другим найменшим трикутником з властивістю $h = b ± 1$.

Знайдіть $\sum{L}$ дванадцяти найменших рівнобедрених трикутників, для яких $h = b ± 1$, де $b$ та $L$ є натуральними числами.

# --hints--

`isoscelesTriangles()` має повернути `1118049290473932`.

```js
assert.strictEqual(isoscelesTriangles(), 1118049290473932);
```

# --seed--

## --seed-contents--

```js
function isoscelesTriangles() {

  return true;
}

isoscelesTriangles();
```

# --solutions--

```js
// solution required
```
