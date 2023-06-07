---
id: 5900f3f61000cf542c50ff09
title: 'Завдання 138: Особливі випадки рівнобедрених трикутників'
challengeType: 1
forumTopicId: 301766
dashedName: problem-138-special-isosceles-triangles
---

# --description--

Розглянемо рівнобедрений трикутник з довжиною основи $b = 16$ та катетами $L = 17$.

<img class="img-responsive center-block" alt="рівнобедрений трикутник з ребрами: L — два ребра з однаковою довжиною та основою трикутника — b; а висота трикутника — h від основи трикутника до кута між ребрами L" src="https://cdn.freecodecamp.org/curriculum/project-euler/special-isosceles-triangles.png" style="background-color: white; padding: 10px;" />

За теоремою Піфагора, бачимо, що висота трикутника, $h = \sqrt{{17}^2 - 8^2} = 15$, що на один менше довжини основи.

З $b = 272$ та $L = 305$ отримаємо $h = 273$, що на одиницю більше, ніж довжина основи, і це другий найменший рівнобедрений трикутник із властивістю $h = b ± 1$.

Знайдіть $\суму{L}$ для дванадцяти найменших рівнобедрених трикутників, для яких $h = b ± 1$ та $b$, $L$ — цілі натуральні числа.

# --hints--

`isoscelesTriangles()` повинен повернути число `1118049290473932`.

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
